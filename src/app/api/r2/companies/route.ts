import { NextResponse } from "next/server";
import { db } from "@/lib/db";

/**
 * R2 API — Direktori Nasional penyelenggara ibadah (data riil pemerintah/asosiasi)
 * GET /api/r2/companies?q=&type=&province=&status=&limit=
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q")?.trim() ?? "";
    const type = searchParams.get("type")?.trim() ?? "";
    const province = searchParams.get("province")?.trim() ?? "";
    const status = searchParams.get("status")?.trim() ?? "";
    const limit = Math.min(Number(searchParams.get("limit") ?? 200), 500);

    const where: Record<string, unknown> = {};
    if (q) {
      // SQLite LIKE sudah case-insensitive (ASCII) — cukup contains polos
      where.OR = [
        { name: { contains: q } },
        { brandName: { contains: q } },
        { licenseNo: { contains: q } },
        { city: { contains: q } },
      ];
    }
    if (type) where.orgType = type;
    if (province) where.province = province;
    if (status) where.status = status;

    const [companies, total] = await Promise.all([
      db.company.findMany({
        where,
        orderBy: [{ orgType: "asc" }, { name: "asc" }],
        take: limit,
        include: { source: { select: { key: true, name: true, institution: true, url: true } } },
      }),
      db.company.count({ where }),
    ]);

    // agregasi filter tersedia
    const [byType, byProvince] = await Promise.all([
      db.company.groupBy({ by: ["orgType"], _count: { orgType: true } }),
      db.company.groupBy({ by: ["province"], _count: { province: true }, where: { country: "ID" } }),
    ]);

    return NextResponse.json({
      total,
      companies: companies.map((c) => ({
        ...c,
        sourceName: c.source?.name ?? "—",
        sourceInstitution: c.source?.institution ?? "—",
        sourceUrl: c.source?.url ?? null,
        source: undefined,
      })),
      facets: {
        byType: byType.map((t) => ({ type: t.orgType, count: t._count.orgType })),
        byProvince: byProvince
          .filter((p) => p.province && p.province !== "—")
          .sort((a, b) => b._count.province - a._count.province)
          .map((p) => ({ province: p.province, count: p._count.province })),
      },
    });
  } catch (e) {
    console.error("GET /api/r2/companies", e);
    return NextResponse.json({ error: "Gagal memuat direktori nasional" }, { status: 500 });
  }
}
