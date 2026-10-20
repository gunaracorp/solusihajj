/**
 * SEED R4 — Kado Umrah + Cicilan Syariah
 * Isi: 5 mitra pembiayaan syariah (institusi riil) + 3 kado demo
 * dengan status berbeda (untuk showcase pelacakan) + 1 lead cicilan demo.
 * Jalankan: bun scripts/seed-r4.ts  (via bunx tsx)
 */
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

const PARTNERS = [
  {
    key: "alulaa",
    name: "ALULAA",
    parent: "PT Alulaa Multi Finance (grup BTPN Syariah)",
    contract: "MURABAHAH",
    tenorMax: 24,
    dpMinPct: 0,
    coverage: "Umrah & Haji",
    note: "Paylater pembiayaan perjalanan ibadah: tanpa agunan, akad murabahah, tenor hingga 24 bulan. Khusus pelunasan ibadah, bukan konsumsi umum.",
  },
  {
    key: "share",
    name: "sharE Paylater",
    parent: "PT Mega Mitra Syariah (Mega Syariah)",
    contract: "MURABAHAH",
    tenorMax: 12,
    dpMinPct: 10,
    coverage: "Umrah",
    note: "Paylater syariah berbasis dana masyarakat (kolektif), akad wakalah bil wakalah & murabahah. Cocok untuk paket di bawah Rp 40 juta.",
  },
  {
    key: "bsi",
    name: "Bank Syariah Indonesia (BSI)",
    parent: null,
    contract: "MURABAHAH",
    tenorMax: 24,
    dpMinPct: 10,
    coverage: "Umrah, Haji & Haji Furoh",
    note: "Pembiayaan perjalanan ibadah dengan jaminan sertifikat/deposito BSI atau KPR take-over. Limit besar, tenor panjang, bingkai akad lengkap.",
  },
  {
    key: "pegadaian-syariah",
    name: "Pegadaian Syariah",
    parent: "PT Pegadaian (BUMN)",
    contract: "IJARAH",
    tenorMax: 18,
    dpMinPct: 0,
    coverage: "Umrah",
    note: "Skema Gadai Emas Syariah & ujrah: simpan emas sebagai keamanan, biaya perawatan (ujrah) tetap. Populer untuk DP atau pelunasan penuh.",
  },
  {
    key: "muamalat",
    name: "Bank Muamalat",
    parent: null,
    contract: "MURABAHAH",
    tenorMax: 24,
    dpMinPct: 15,
    coverage: "Umrah & Haji Khusus",
    note: "Pembiayaan umrah/haji khusus dengan akad murabahah untuk nasabah gaji/instansi. Proses via kantor cabang, disertai surat rekomendasi PPIU.",
  },
];

async function main() {
  console.log("🌱 Seed R4 — Kado & Cicilan Amanah");

  // ---------- Mitra pembiayaan ----------
  for (const p of PARTNERS) {
    await db.financingPartner.upsert({
      where: { key: p.key },
      create: p,
      update: p,
    });
  }
  console.log(`  ✓ ${PARTNERS.length} mitra pembiayaan syariah`);

  // ---------- Kado demo (3 status berbeda) ----------
  const demoGifts = [
    {
      code: "SH-KADO-2026-00001",
      kind: "VOUCHER",
      occasion: "orangtua",
      senderName: "Ahmad Fauzi",
      senderPhone: "081200000001",
      recipientName: "Hj. Aminah",
      relation: "Ibu",
      recipientPhone: "081200000002",
      message: "Ibu, doa anak-anak agar Ibu berangkat ke Rumah Allah dalam keadaan sehat. Semoga ini awal dari perjalanan bakti kami kepadamu.",
      amount: 25_000_000,
      paymentMode: "LUNAS",
      deliveryChannel: "WA",
      status: "DIKLAIM",
      validUntil: "2028-10-20",
      events: [
        { action: "CREATED", detail: "Kado dibuat oleh Ahmad Fauzi untuk Hj. Aminah (Ibu) — dana akan ditahan rekening escrow syariah setelah pembayaran." },
        { action: "PAID", detail: "Pembayaran diterima — dana masuk rekening penampungan escrow syariah pihak ketiga." },
        { action: "SENT", detail: "Kartu kado digital terkirim ke penerima via WhatsApp." },
        { action: "CLAIMED", detail: "Penerima mengklaim voucher dan memilih paket bersama tim kurasi: Umrah Reguler 9 Hari (Oktober 2026)." },
      ],
    },
    {
      code: "SH-KADO-2026-00002",
      kind: "PACKAGE",
      occasion: "pernikahan",
      senderName: "Rizki & Dewi",
      senderPhone: "081200000003",
      recipientName: "Bpk. Suryana",
      relation: "Ayah",
      recipientPhone: null,
      message: "Ayah, tahniah — semoga perjalanan ini menjadi awal keberkahan keluarga besar kita.",
      amount: 36_500_000,
      paymentMode: "CICILAN_SYARIAH",
      deliveryChannel: "EMAIL",
      status: "DIBAYAR",
      validUntil: "2028-10-20",
      events: [
        { action: "CREATED", detail: "Kado dibuat oleh Rizki & Dewi untuk Bpk. Suryana (Ayah) — dana akan ditahan rekening escrow syariah setelah pembayaran." },
        { action: "PAID", detail: "Pembayaran via cicilan murabahah mitra cair — dana masuk rekening escrow syariah." },
      ],
    },
    {
      code: "SH-KADO-2026-00003",
      kind: "VOUCHER",
      occasion: "pensiun",
      senderName: "PT Cahaya Nusantara (HR)",
      senderPhone: "081200000004",
      recipientName: "Kolega Divisi Produksi",
      relation: "Karyawan",
      recipientPhone: null,
      message: "Terima kasih atas 30 tahun pengabdian. Selamat menunaikan ibadah umrah — doa kami menyertai.",
      amount: 15_000_000,
      paymentMode: "LUNAS",
      deliveryChannel: "WA",
      status: "TERKIRIM",
      validUntil: "2028-10-20",
      events: [
        { action: "CREATED", detail: "Kado korporat dibuat oleh PT Cahaya Nusara untuk kolega pensiun — pool dana perusahaan." },
        { action: "PAID", detail: "Pembayaran korporat (transfer) diterima — dana masuk escrow syariah." },
        { action: "SENT", detail: "Kode multi-penerima dikirim ke 1 penerima pertama (pool tersisa: 4 penerima)." },
      ],
    },
  ];

  for (const g of demoGifts) {
    const { events, ...giftData } = g;
    await db.giftOrder.upsert({
      where: { code: g.code },
      create: { ...giftData, events: { create: events } },
      update: { status: g.status },
    });
  }
  console.log(`  ✓ ${demoGifts.length} kado demo (DIKLAIM / DIBAYAR / TERKIRIM)`);

  // ---------- Lead cicilan demo ----------
  const cicCount = await db.cicilanLead.count();
  if (cicCount === 0) {
    await db.cicilanLead.create({
      data: {
        ref: "SH-CIC-2026-00001",
        fullName: "Demo Jamaah",
        phone: "081200000009",
        city: "Bandung",
        packageName: "Umrah Reguler 9 Hari",
        packagePrice: 32_500_000,
        downPayment: 6_500_000,
        tenorMonths: 12,
        monthlyAmount: 2_166_666,
        monthlyLabel: "Rp 2.166.666",
        contractType: "MURABAHAH",
        partnerKey: "alulaa",
        status: "DIKONTAK",
      },
    });
    console.log("  ✓ 1 lead cicilan demo (DIKONTAK)");
  }

  console.log("✅ Seed R4 selesai");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
