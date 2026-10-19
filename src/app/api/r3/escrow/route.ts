import { NextResponse } from "next/server";
import { db } from "@/lib/db";

/**
 * R3 API — AmanahEscrow aktif
 * GET  /api/r3/escrow          → daftar kontrak (+ ringkas milestone)
 * POST /api/r3/escrow          → buat kontrak baru (milestone 40/40/20 otomatis)
 */

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status")?.trim() ?? "";
    const limit = Math.min(Number(searchParams.get("limit") ?? 50), 200);

    const where: Record<string, unknown> = {};
    if (status) where.status = status;

    const [contracts, total] = await Promise.all([
      db.escrowContract.findMany({
        where,
        orderBy: { createdAt: "desc" },
        take: limit,
        include: {
          company: { select: { id: true, name: true, orgType: true, city: true, province: true, country: true, status: true } },
          milestones: { orderBy: { seq: "asc" } },
          events: { orderBy: { createdAt: "asc" }, take: 3 },
        },
      }),
      db.escrowContract.count({ where }),
    ]);

    const agg = await db.escrowContract.aggregate({
      _sum: { totalAmount: true, fundedAmount: true, releasedAmount: true },
    });

    return NextResponse.json({
      total,
      contracts,
      volume: {
        totalUnder: agg._sum.totalAmount ?? 0,
        funded: agg._sum.fundedAmount ?? 0,
        released: agg._sum.releasedAmount ?? 0,
        held: (agg._sum.fundedAmount ?? 0) - (agg._sum.releasedAmount ?? 0),
      },
    });
  } catch (e) {
    console.error("GET /api/r3/escrow", e);
    return NextResponse.json({ error: "Gagal memuat kontrak escrow" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const jamaahName = String(body.jamaahName ?? "").trim();
    const companyId = String(body.companyId ?? "").trim();
    const packageTitle = String(body.packageTitle ?? "").trim();
    const totalAmount = Math.round(Number(body.totalAmount ?? 0));
    const paxCount = Math.max(1, Math.round(Number(body.paxCount ?? 1)));
    const departDate = body.departDate ? String(body.departDate) : null;
    const jamaahPhone = body.jamaahPhone ? String(body.jamaahPhone).slice(0, 40) : null;
    const jamaahEmail = body.jamaahEmail ? String(body.jamaahEmail).slice(0, 120) : null;

    if (!jamaahName || jamaahName.length < 3)
      return NextResponse.json({ error: "Nama jamaah wajib diisi (min. 3 karakter)" }, { status: 400 });
    if (!companyId)
      return NextResponse.json({ error: "Pilih penyelenggara terlebih dahulu" }, { status: 400 });
    if (!packageTitle)
      return NextResponse.json({ error: "Judul paket wajib diisi" }, { status: 400 });
    if (!Number.isFinite(totalAmount) || totalAmount < 1_000_000)
      return NextResponse.json({ error: "Total harga minimal Rp 1.000.000" }, { status: 400 });

    const company = await db.company.findUnique({ where: { id: companyId } });
    if (!company)
      return NextResponse.json({ error: "Penyelenggara tidak ditemukan di database" }, { status: 404 });

    // nomor kontrak berurutan
    const year = new Date().getFullYear();
    const count = await db.escrowContract.count();
    const ref = `SH-ESC-${year}-${String(count + 1).padStart(5, "0")}`;

    const m1 = Math.round(totalAmount * 0.4);
    const m2 = Math.round(totalAmount * 0.4);
    const m3 = totalAmount - m1 - m2;

    const contract = await db.escrowContract.create({
      data: {
        ref,
        jamaahName,
        jamaahPhone,
        jamaahEmail,
        companyId,
        packageTitle,
        departDate,
        paxCount,
        totalAmount,
        status: "DRAFT",
        note: body.note ? String(body.note).slice(0, 500) : null,
        milestones: {
          create: [
            { seq: 1, label: "Rilis 1 — Visa & tiket terbit", percent: 40, amount: m1, status: "HELD", trigger: "Visa umrah + tiket pesawat terbit dan terverifikasi platform" },
            { seq: 2, label: "Rilis 2 — Keberangkatan & check-in hotel", percent: 40, amount: m2, status: "HELD", trigger: "Jamaah tiba di Madinah/Makkah, hotel sesuai kontrak" },
            { seq: 3, label: "Rilis 3 — Settlement pasca pulang", percent: 20, amount: m3, status: "HELD", trigger: "Jamaah pulang + 7 hari tanpa sengketa (Saksi Jamaah)" },
          ],
        },
        events: {
          create: {
            actor: "JAMAAH",
            action: "CREATED",
            detail: `Kontrak dibuat bersama ${company.name} — skema Amanah 40/40/20, dana akan ditahan rekening escrow pihak ketiga`,
          },
        },
      },
      include: { milestones: true, events: true, company: { select: { id: true, name: true, orgType: true } } },
    });

    return NextResponse.json({ contract }, { status: 201 });
  } catch (e) {
    console.error("POST /api/r3/escrow", e);
    return NextResponse.json({ error: "Gagal membuat kontrak escrow" }, { status: 500 });
  }
}
