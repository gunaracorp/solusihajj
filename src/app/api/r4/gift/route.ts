import { NextResponse } from "next/server";
import { db } from "@/lib/db";

/**
 * R4 API — Kado Umrah (Gift Umrah)
 * GET  /api/r4/gift?code=SH-KADO-...  → lacak satu kado (publik, tanpa login)
 * GET  /api/r4/gift                   → daftar kado terbaru + agregat volume
 * POST /api/r4/gift                   → buat pesanan kado (voucher / paket)
 */

const OCCASIONS = ["orangtua", "pernikahan", "kelahiran", "pensiun", "wisuda", "ramadhan", "umum"];
const MIN_VOUCHER = 5_000_000;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get("code")?.trim().toUpperCase() ?? "";

    // ---------- Lacak satu kado ----------
    if (code) {
      const gift = await db.giftOrder.findUnique({
        where: { code },
        include: { events: { orderBy: { createdAt: "asc" } } },
      });
      if (!gift) {
        return NextResponse.json(
          { error: "Kode kado tidak ditemukan. Periksa kembali penulisannya (contoh: SH-KADO-2026-00001)." },
          { status: 404 }
        );
      }
      // Sembunyikan kontak pengirim pada pelacakan publik (prinsip UU PDP)
      const { senderPhone, senderEmail, ...publicGift } = gift;
      void senderPhone;
      void senderEmail;
      return NextResponse.json({ gift: publicGift });
    }

    // ---------- Daftar + agregat ----------
    const limit = Math.min(Number(searchParams.get("limit") ?? 12), 50);
    const [gifts, total, agg, claimed, active] = await Promise.all([
      db.giftOrder.findMany({
        orderBy: { createdAt: "desc" },
        take: limit,
        select: {
          id: true, code: true, kind: true, occasion: true, senderName: true,
          recipientName: true, relation: true, amount: true, paymentMode: true,
          status: true, createdAt: true,
        },
      }),
      db.giftOrder.count(),
      db.giftOrder.aggregate({ _sum: { amount: true } }),
      db.giftOrder.count({ where: { status: { in: ["DIKLAIM", "DIBERANGKATKAN"] } } }),
      db.giftOrder.count({ where: { status: { in: ["MENUNGGU_PEMBAYARAN", "DIBAYAR", "TERKIRIM", "DIKLAIM"] } } }),
    ]);

    return NextResponse.json({
      total,
      gifts,
      stats: {
        volumeKado: agg._sum.amount ?? 0,
        claimed,
        activeCount: active,
      },
    });
  } catch (e) {
    console.error("GET /api/r4/gift", e);
    return NextResponse.json({ error: "Gagal memuat data kado" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const kind = body.kind === "PACKAGE" ? "PACKAGE" : "VOUCHER";
    const occasion = String(body.occasion ?? "").trim();
    const senderName = String(body.senderName ?? "").trim();
    const senderPhone = String(body.senderPhone ?? "").trim();
    const senderEmail = body.senderEmail ? String(body.senderEmail).trim().slice(0, 120) : null;
    const recipientName = String(body.recipientName ?? "").trim();
    const relation = body.relation ? String(body.relation).trim().slice(0, 40) : null;
    const recipientPhone = body.recipientPhone ? String(body.recipientPhone).trim().slice(0, 40) : null;
    const message = body.message ? String(body.message).trim().slice(0, 500) : null;
    const paymentMode = body.paymentMode === "CICILAN_SYARIAH" ? "CICILAN_SYARIAH" : "LUNAS";
    const deliveryChannel = body.deliveryChannel === "EMAIL" ? "EMAIL" : "WA";
    const amount = Math.round(Number(body.amount ?? 0));
    const packageSlug = body.packageSlug ? String(body.packageSlug).trim() : null;

    if (!OCCASIONS.includes(occasion))
      return NextResponse.json({ error: "Pilih momen kado yang tersedia" }, { status: 400 });
    if (senderName.length < 3)
      return NextResponse.json({ error: "Nama pengirim wajib diisi (min. 3 karakter)" }, { status: 400 });
    if (senderPhone.replace(/\D/g, "").length < 9)
      return NextResponse.json({ error: "Nomor WhatsApp pengirim tidak valid" }, { status: 400 });
    if (recipientName.length < 3)
      return NextResponse.json({ error: "Nama penerima kado wajib diisi (min. 3 karakter)" }, { status: 400 });
    if (kind === "VOUCHER" && (!Number.isFinite(amount) || amount < MIN_VOUCHER))
      return NextResponse.json({ error: `Nominal voucher minimal Rp ${MIN_VOUCHER.toLocaleString("id-ID")}` }, { status: 400 });
    if (kind === "PACKAGE") {
      if (!packageSlug) return NextResponse.json({ error: "Pilih paket terlebih dahulu" }, { status: 400 });
      if (!Number.isFinite(amount) || amount < 1_000_000)
        return NextResponse.json({ error: "Nominal paket tidak valid" }, { status: 400 });
    }

    const year = new Date().getFullYear();
    const count = await db.giftOrder.count();
    const code = `SH-KADO-${year}-${String(count + 1).padStart(5, "0")}`;

    // Masa aktif voucher 24 bulan
    const validUntil = new Date();
    validUntil.setMonth(validUntil.getMonth() + 24);
    const validUntilIso = validUntil.toISOString().slice(0, 10);

    const gift = await db.giftOrder.create({
      data: {
        code,
        kind,
        occasion,
        senderName,
        senderPhone,
        senderEmail,
        recipientName,
        relation,
        recipientPhone,
        message,
        packageSlug: kind === "PACKAGE" ? packageSlug : null,
        amount,
        paymentMode,
        deliveryChannel,
        status: "MENUNGGU_PEMBAYARAN",
        validUntil: validUntilIso,
        events: {
          create: {
            action: "CREATED",
            detail: `Kado dibuat oleh ${senderName} untuk ${recipientName}${relation ? ` (${relation})` : ""} — dana akan ditahan rekening escrow syariah setelah pembayaran.`,
          },
        },
      },
      include: { events: true },
    });

    return NextResponse.json({ gift }, { status: 201 });
  } catch (e) {
    console.error("POST /api/r4/gift", e);
    return NextResponse.json({ error: "Gagal membuat kado" }, { status: 500 });
  }
}
