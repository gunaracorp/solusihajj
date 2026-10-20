import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { calcInstallment } from "@/data/cicilan";

/**
 * R4 API — Cicilan Syariah
 * GET  /api/r4/cicilan   → katalog mitra pembiayaan + statistik pengajuan
 * POST /api/r4/cicilan   → simpan pengajuan (kalkulasi server-side, bukan klien)
 */

const TENORS = [3, 6, 9, 12, 18, 24];

export async function GET() {
  try {
    const [partners, total, agg] = await Promise.all([
      db.financingPartner.findMany({ where: { active: true }, orderBy: { tenorMax: "desc" } }),
      db.cicilanLead.count(),
      db.cicilanLead.aggregate({ _sum: { packagePrice: true } }),
    ]);
    return NextResponse.json({
      partners,
      stats: {
        totalLeads: total,
        simulatedVolume: agg._sum.packagePrice ?? 0,
      },
      config: { tenors: TENORS },
    });
  } catch (e) {
    console.error("GET /api/r4/cicilan", e);
    return NextResponse.json({ error: "Gagal memuat mitra pembiayaan" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const fullName = String(body.fullName ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const email = body.email ? String(body.email).trim().slice(0, 120) : null;
    const city = body.city ? String(body.city).trim().slice(0, 60) : null;
    const packageSlug = body.packageSlug ? String(body.packageSlug).trim().slice(0, 80) : null;
    const packageName = body.packageName ? String(body.packageName).trim().slice(0, 160) : null;
    const packagePrice = Math.round(Number(body.packagePrice ?? 0));
    const downPayment = Math.round(Number(body.downPayment ?? 0));
    const tenorMonths = Math.round(Number(body.tenorMonths ?? 0));
    const partnerKey = body.partnerKey ? String(body.partnerKey).trim().slice(0, 40) : null;
    const note = body.note ? String(body.note).trim().slice(0, 500) : null;

    if (fullName.length < 3)
      return NextResponse.json({ error: "Nama lengkap wajib diisi (min. 3 karakter)" }, { status: 400 });
    if (phone.replace(/\D/g, "").length < 9)
      return NextResponse.json({ error: "Nomor WhatsApp tidak valid" }, { status: 400 });
    if (!Number.isFinite(packagePrice) || packagePrice < 1_000_000)
      return NextResponse.json({ error: "Harga paket minimal Rp 1.000.000" }, { status: 400 });
    if (!Number.isFinite(downPayment) || downPayment < 0 || downPayment > packagePrice)
      return NextResponse.json({ error: "DP harus antara Rp 0 dan harga paket" }, { status: 400 });
    if (!TENORS.includes(tenorMonths))
      return NextResponse.json({ error: "Tenor harus 3, 6, 9, 12, 18, atau 24 bulan" }, { status: 400 });

    // Validasi mitra bila dikirim
    let contractType = "MURABAHAH";
    if (partnerKey) {
      const partner = await db.financingPartner.findUnique({ where: { key: partnerKey } });
      if (!partner)
        return NextResponse.json({ error: "Mitra pembiayaan tidak dikenal" }, { status: 400 });
      if (tenorMonths > partner.tenorMax)
        return NextResponse.json(
          { error: `${partner.name} melayani tenor maksimal ${partner.tenorMax} bulan` },
          { status: 400 }
        );
      if (downPayment < Math.round((partner.dpMinPct / 100) * packagePrice))
        return NextResponse.json(
          { error: `${partner.name} mensyaratkan DP minimal ${partner.dpMinPct}%` },
          { status: 400 }
        );
      contractType = partner.contract;
    }

    // Kalkulasi dilakukan SERVER-SIDE — hasil klien tidak dipercaya
    const calc = calcInstallment(packagePrice, downPayment, tenorMonths);

    const year = new Date().getFullYear();
    const count = await db.cicilanLead.count();
    const ref = `SH-CIC-${year}-${String(count + 1).padStart(5, "0")}`;

    const lead = await db.cicilanLead.create({
      data: {
        ref,
        fullName,
        phone,
        email,
        city,
        packageSlug,
        packageName,
        packagePrice,
        downPayment,
        tenorMonths,
        monthlyAmount: calc.monthly,
        monthlyLabel: "Rp " + calc.monthly.toLocaleString("id-ID"),
        contractType,
        partnerKey,
        note,
      },
    });

    return NextResponse.json({ lead }, { status: 201 });
  } catch (e) {
    console.error("POST /api/r4/cicilan", e);
    return NextResponse.json({ error: "Gagal menyimpan pengajuan cicilan" }, { status: 500 });
  }
}
