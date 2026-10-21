import { NextResponse } from "next/server";
import { db } from "@/lib/db";

/**
 * R2 API — Statistik Fondasi Data Nasional
 * GET /api/r2/stats
 */
export async function GET() {
  try {
    const [byType, byStatus, companies, airlines, routes, sources, withSource, sanctions, regs, lastSync] = await Promise.all([
      db.company.groupBy({ by: ["orgType"], _count: { orgType: true } }),
      db.company.groupBy({ by: ["status"], _count: { status: true } }),
      db.company.count(),
      db.airline.count(),
      db.flightRoute.count(),
      db.dataSource.count(),
      db.company.count({ where: { verified: true } }),
      db.sanctionRecord.count(),
      db.govRegulation.count(),
      db.syncEvent.findMany({ orderBy: { startedAt: "desc" }, take: 6, include: { source: { select: { key: true, name: true, institution: true } } } }),
    ]);

    // negara & provinsi tercakup
    const countryRows = await db.company.groupBy({ by: ["country"], _count: { country: true } });
    const provinceRows = await db.company.groupBy({ by: ["province"], _count: { province: true }, where: { country: "ID", NOT: { province: "—" } } });

    return NextResponse.json({
      companies,
      verified: withSource,
      byType: byType.map((t) => ({ type: t.orgType, count: t._count.orgType })),
      byStatus: byStatus.map((s) => ({ status: s.status, count: s._count.status })),
      airlines,
      routes,
      sources,
      sanctions,
      regulations: regs,
      countries: countryRows.map((c) => ({ country: c.country, count: c._count.country })).sort((a, b) => b.count - a.count),
      provinces: provinceRows.map((p) => ({ province: p.province, count: p._count.province })).sort((a, b) => b.count - a.count),
      recentSyncs: lastSync,
      // konteks industri riil (riset Kemenhaj/Kemenag 2025)
      context: {
        ppiuSiskopatuh: 3634, // baris PPIU registri SISKOPATUH (sinkron penuh Okt 2026)
        pihkSiskopatuh: 967, // baris PIHK registri SISKOPATUH (semua PIHK juga PPIU)
        kuotaHajiKhusus2025: 17680, // kuota haji khusus 2025 (Kemenag, Jan 2025)
        petugasPer45Jamaah: 3, // PMHU formula petugas PIHK
      },
    });
  } catch (e) {
    console.error("GET /api/r2/stats", e);
    return NextResponse.json({ error: "Gagal memuat statistik" }, { status: 500 });
  }
}
