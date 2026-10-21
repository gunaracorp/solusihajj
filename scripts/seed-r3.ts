/**
 * SolusiHajj R3 — Seeder "Direktori Asia Penuh + Escrow Aktif"
 * Import hasil scraping resmi (Okt 2026):
 *  - HIMPUH full 19 halaman: 474 anggota (PIHK 249, PPIU 223, BPW 2)
 *    dengan no registrasi, telepon, email, website, provinsi
 *  - Nusuk (platform resmi Kementerian Haji & Umrah Saudi): 47 Umrah
 *    Service Provider + kota + kontak + profil
 *  - MORA Pakistan: ~228 Umrah Tour Operators terdaftar
 *  - Contoh kontrak AmanahEscrow (DRAFT → FUNDED → PARTIAL → SETTLED)
 * Jalankan: bun /home/z/my-project/scripts/seed-r3.ts
 */
import { PrismaClient } from "@prisma/client";
import { readFileSync } from "node:fs";

const db = new PrismaClient();

// ---------- normalisasi nama untuk dedup ----------
const norm = (s: string) =>
  s
    .toLowerCase()
    .replace(/^pt\.?\s+/i, "")
    .replace(/[^a-z0-9]/g, "");

interface HimpuhDetail {
  jenisAnggota: string;
  providerVisa: string;
  noRegistrasi: string;
  address: string;
  phones: string[];
  emails: string[];
  website: string;
}
interface HimpuhMember {
  no: number;
  name: string;
  brand: string;
  address: string;
  detailUrl: string;
  detail: HimpuhDetail | null;
  province: string | null;
  city: string | null;
}
interface HimpuhPayload {
  fetchedAt: string;
  totalRows: number;
  detailOk: number;
  jenisCount: Record<string, number>;
  provinceCount: Record<string, number>;
  members: HimpuhMember[];
}
interface NusukProvider {
  name: string;
  profileUrl: string;
  city: string;
  phone: string;
  email: string;
  about: string;
}
interface AsiaPayload {
  fetchedAt: string;
  nusuk: { source: string; count: number; providers: NusukProvider[] };
  pakistan: { source: string; count: number; operators: string[] };
}

const jenisToOrgType = (j: string): string => {
  if (j.includes("PIHK")) return "PIHK";
  if (j.includes("PPIU")) return "PPIU";
  if (j.includes("BPW")) return "BPW";
  return "PPIU";
};

async function main() {
  const himpuh: HimpuhPayload = JSON.parse(
    readFileSync("/home/z/my-project/scripts/data/himpuh-full.json", "utf-8")
  );
  const asia: AsiaPayload = JSON.parse(
    readFileSync("/home/z/my-project/scripts/data/asia-sources.json", "utf-8")
  );

  // =========================================================
  // 1. DATA SOURCES
  // =========================================================
  const srcHimpuh = await db.dataSource.upsert({
    where: { key: "himpuh" },
    create: {
      key: "himpuh",
      name: "HIMPUH — Direktori Anggota PPIU/PIHK/BPW (full 19 halaman)",
      institution: "Himpunan Penyelenggara Umrah & Haji Indonesia",
      url: "https://himpuh.or.id/daftar-anggota",
      category: "ASOSIASI",
      country: "ID",
      description:
        "Direktori lengkap anggota HIMPUH: nama perusahaan, merek dagang, jenis keanggotaan, no registrasi, alamat, telepon, email, website — ditarik penuh dari halaman 1–19.",
    },
    update: {
      name: "HIMPUH — Direktori Anggota PPIU/PIHK/BPW (full 19 halaman)",
      url: "https://himpuh.or.id/daftar-anggota",
      description:
        "Direktori lengkap anggota HIMPUH: nama perusahaan, merek dagang, jenis keanggotaan, no registrasi, alamat, telepon, email, website — ditarik penuh dari halaman 1–19.",
    },
  });

  const srcNusuk = await db.dataSource.upsert({
    where: { key: "nusuk-mohu" },
    create: {
      key: "nusuk-mohu",
      name: "Nusuk Umrah Service Providers — platform resmi Kementerian Haji & Umrah Saudi",
      institution: "Kementerian Haji & Umrah Kerajaan Saudi Arabia (MOHU)",
      url: "https://umrah.nusuk.sa/ServiceProviders",
      category: "INTERNASIONAL",
      country: "SA",
      description:
        "Direktori lintas negara: penyedia layanan umrah resmi di platform Nusuk (penggabung eservices MOHU) — nama, kota, telepon, email, profil perusahaan.",
    },
    update: { url: "https://umrah.nusuk.sa/ServiceProviders" },
  });

  const srcPakistan = await db.dataSource.upsert({
    where: { key: "mora-pakistan" },
    create: {
      key: "mora-pakistan",
      name: "MORA Pakistan — Attested Umrah Tour Operators",
      institution: "Ministry of Religious Affairs & Interfaith Harmony Pakistan",
      url: "https://www.mora.gov.pk/NewsDetail/YTExNjFkZTctZGE0OS00YWUyLTg5Y2YtOTc4ZWY3MmVhY2Yz",
      category: "INTERNASIONAL",
      country: "PK",
      description:
        "Daftar resmi operator umrah terdaftar (attested) versi pemerintah Pakistan — perluasan direktori Asia ke Pakistan.",
    },
    update: {
      url: "https://www.mora.gov.pk/NewsDetail/YTExNjFkZTctZGE0OS00YWUyLTg5Y2YtOTc4ZWY3MmVhY2Yz",
    },
  });

  // =========================================================
  // 2. IMPORT HIMPUH 474 ANGGOTA
  // =========================================================
  console.log("== HIMPUH ==");

  // hapus import HIMPUH lama (22 anggota halaman 1 versi R2) agar tidak dobel
  const oldHimpuh = await db.company.deleteMany({ where: { sourceId: srcHimpuh.id } });
  console.log(`HIMPUH lama dihapus: ${oldHimpuh.count}`);

  // indeks normalisasi perusahaan existing (Kemenag/PIHK KMA/Sanksi)
  const existing = await db.company.findMany();
  const normIndex = new Map<string, string>(); // norm -> id
  for (const c of existing) normIndex.set(norm(c.name), c.id);

  let created = 0;
  let merged = 0;
  for (const m of himpuh.members) {
    const d = m.detail;
    const orgType = jenisToOrgType(d?.jenisAnggota ?? "");
    const regNo = d?.noRegistrasi ?? "";
    const yearMatch = regNo.match(/\b(19|20)\d{2}\b/);
    const base = {
      name: m.name,
      brandName: m.brand || null,
      orgType,
      licenseNo: regNo || null,
      licenseYear: yearMatch ? parseInt(yearMatch[0], 10) : null,
      address: d?.address || m.address || null,
      city: m.city,
      province: m.province,
      country: "ID",
      phone: d?.phones?.length ? d.phones.join(" | ").slice(0, 240) : null,
      email: d?.emails?.[0] ?? null,
      website: d?.website || null,
      status: "TERDAFTAR",
      sourceId: srcHimpuh.id,
      sourceRef: m.detailUrl,
      dataAsOf: "Oktober 2026",
      notes: d
        ? `Anggota HIMPUH — ${d.jenisAnggota}; provider visa: ${d.providerVisa || "—"}`
        : "Anggota HIMPUH (halaman daftar)",
      verified: false,
    };
    const dupId = normIndex.get(norm(m.name));
    if (dupId) {
      await db.company.update({ where: { id: dupId }, data: base });
      merged++;
    } else {
      const c = await db.company.create({ data: base });
      normIndex.set(norm(m.name), c.id);
      created++;
    }
  }
  console.log(`HIMPUH: ${created} dibuat, ${merged} digabung dengan data existing`);
  await db.dataSource.update({
    where: { key: "himpuh" },
    data: { recordsIndexed: created + merged, lastSyncedAt: new Date() },
  });
  await db.syncEvent.create({
    data: {
      sourceId: srcHimpuh.id,
      status: "SUCCESS",
      recordsAffected: created + merged,
      note: `Scraper full 19 halaman: 474 anggota (${himpuh.detailOk} detail lengkap); ${created} baru + ${merged} merge`,
      finishedAt: new Date(),
    },
  });

  // =========================================================
  // 3. IMPORT NUSUK (SAUDI MOHU PLATFORM) 47 PROVIDER
  // =========================================================
  console.log("== NUSUK ==");
  let nusukCreated = 0;
  let nusukMerged = 0;
  for (const p of asia.nusuk.providers) {
    const base = {
      name: p.name,
      brandName: null,
      orgType: "USP", // Umrah Service Provider (Saudi)
      address: p.city ? `${p.city}, Arab Saudi` : null,
      city: p.city || null,
      province: null,
      country: "SA",
      phone: p.phone || null,
      email: p.email || null,
      website: p.profileUrl,
      status: "TERDAFTAR",
      sourceId: srcNusuk.id,
      sourceRef: p.profileUrl,
      dataAsOf: "Oktober 2026",
      notes: p.about ? p.about.slice(0, 500) : "Terdaftar di platform Nusuk MOHU Saudi.",
      verified: false,
    };
    const dupId = normIndex.get(norm(p.name));
    if (dupId) {
      await db.company.update({ where: { id: dupId }, data: base });
      nusukMerged++;
    } else {
      await db.company.create({ data: base });
      nusukCreated++;
    }
  }
  console.log(`NUSUK: ${nusukCreated} dibuat, ${nusukMerged} merge`);
  await db.dataSource.update({
    where: { key: "nusuk-mohu" },
    data: { recordsIndexed: nusukCreated + nusukMerged, lastSyncedAt: new Date() },
  });
  await db.syncEvent.create({
    data: {
      sourceId: srcNusuk.id,
      status: "SUCCESS",
      recordsAffected: nusukCreated + nusukMerged,
      note: `Direktori lintas negara Nusuk/MOHU: ${asia.nusuk.count} provider + profil, kota, kontak`,
      finishedAt: new Date(),
    },
  });

  // =========================================================
  // 4. IMPORT PAKISTAN MORA
  // =========================================================
  console.log("== PAKISTAN ==");
  const skipPat = /(@|legal name|address of|tour operator of pakistan|serial|s\.no)/i;
  const keepPat = /(pvt|ltd|limited|travel|tour|hajj|umrah)/i;
  const pkClean = asia.pakistan.operators.filter(
    (o) => !skipPat.test(o) && keepPat.test(o) && o.length >= 6 && !/^\d/.test(o)
  );
  let pkCreated = 0;
  let pkMerged = 0;
  for (const name of pkClean) {
    const base = {
      name,
      orgType: "UTO", // Umrah Tour Operator (Pakistan)
      country: "PK",
      status: "TERDAFTAR",
      sourceId: srcPakistan.id,
      sourceRef: "https://www.mora.gov.pk/NewsDetail/YTExNjFkZTctZGE0OS00YWUyLTg5Y2YtOTc4ZWY3MmVhY2Yz",
      dataAsOf: "Oktober 2026",
      notes: "Operator umrah terdaftar (attested) versi Ministry of Religious Affairs Pakistan.",
      verified: false,
    };
    const dupId = normIndex.get(norm(name));
    if (dupId) {
      await db.company.update({ where: { id: dupId }, data: base });
      pkMerged++;
    } else {
      await db.company.create({ data: base });
      pkCreated++;
    }
  }
  console.log(`PAKISTAN: ${pkCreated} dibuat, ${pkMerged} merge (dari ${asia.pakistan.operators.length} baris mentah)`);
  await db.dataSource.update({
    where: { key: "mora-pakistan" },
    data: { recordsIndexed: pkCreated + pkMerged, lastSyncedAt: new Date() },
  });
  await db.syncEvent.create({
    data: {
      sourceId: srcPakistan.id,
      status: "SUCCESS",
      recordsAffected: pkCreated + pkMerged,
      note: `Daftar resmi MORA Pakistan: ${pkClean.length} operator terdaftar`,
      finishedAt: new Date(),
    },
  });

  // =========================================================
  // 5. CONTOH KONTRAK AMANAH ESCROW (R3)
  // =========================================================
  console.log("== ESCROW DEMO ==");
  await db.escrowContract.deleteMany({});
  const anyPpiu =
    (await db.company.findFirst({ where: { orgType: "PPIU", status: "AKTIF" } })) ||
    (await db.company.findFirst({ where: { orgType: "PPIU" } }));
  const ppiu2 = await db.company.findFirst({ where: { orgType: "PIHK" } });

  const mkMilestones = (total: number) => [
    { seq: 1, label: "Rilis 1 — Visa & tiket terbit", percent: 40, amount: Math.round(total * 0.4), trigger: "Visa umrah + tiket pesawat terbit dan terverifikasi platform", status: "HELD" },
    { seq: 2, label: "Rilis 2 — Keberangkatan & check-in hotel", percent: 40, amount: Math.round(total * 0.4), trigger: "Jamaah tiba di Madinah/Makkah, hotel sesuai kontrak", status: "HELD" },
    { seq: 3, label: "Rilis 3 — Settlement pasca pulang", percent: 20, amount: total - Math.round(total * 0.4) * 2, trigger: "Jamaah pulang + 7 hari tanpa sengketa (Saksi Jamaah)", status: "HELD" },
  ];

  const contractDefs = [
    {
      ref: "SH-ESC-2026-00001",
      jamaahName: "H. Ahmad Fauzi",
      jamaahPhone: "+628123450001",
      companyId: anyPpiu!.id,
      packageTitle: "Umrah Reguler 9 Hari — Madinah First",
      departDate: "2027-02-11",
      paxCount: 2,
      totalAmount: 65_000_000,
      status: "PARTIAL_RELEASE",
      fundedAmount: 65_000_000,
      releasedAmount: 26_000_000,
      depositRef: "VA-BCA-8801xxx",
      milestones: mkMilestones(65_000_000),
      releaseSeq1: true,
      events: [
        { actor: "JAMAAH", action: "CREATED", detail: "Kontrak dibuat & disetujui kedua pihak (dual-sign)" },
        { actor: "JAMAAH", action: "FUNDED", detail: "Dana penuh Rp 65.000.000 masuk rekening escrow pihak ketiga" },
        { actor: "OPERATOR", action: "RELEASE_REQUESTED", detail: "Operator mengajukan Rilis 1 (visa & tiket terbit, bukti dilampirkan)" },
        { actor: "PLATFORM", action: "RELEASED", detail: "Dual-control approved — Rilis 1 Rp 26.000.000 (40%) cair ke operator" },
      ],
    },
    {
      ref: "SH-ESC-2026-00002",
      jamaahName: "Ibu Siti Maryam",
      jamaahPhone: "+628123450002",
      companyId: (ppiu2 ?? anyPpiu)!.id,
      packageTitle: "Umrah Plus Turki 12 Hari",
      departDate: "2026-12-05",
      paxCount: 3,
      totalAmount: 108_000_000,
      status: "SETTLED",
      fundedAmount: 108_000_000,
      releasedAmount: 108_000_000,
      depositRef: "VA-Mandiri-7702xxx",
      milestones: mkMilestones(108_000_000).map((m) => ({ ...m, status: "RELEASED", actedAt: new Date() })),
      releaseSeq1: true,
      events: [
        { actor: "JAMAAH", action: "CREATED", detail: "Kontrak dibuat & disetujui kedua pihak (dual-sign)" },
        { actor: "JAMAAH", action: "FUNDED", detail: "Dana penuh Rp 108.000.000 masuk escrow" },
        { actor: "PLATFORM", action: "RELEASED", detail: "Rilis 1 Rp 43.200.000 (40%) — visa & tiket terbit" },
        { actor: "PLATFORM", action: "RELEASED", detail: "Rilis 2 Rp 43.200.000 (40%) — keberangkatan & hotel sesuai kontrak" },
        { actor: "JAMAAH", action: "NOTE", detail: "Saksi Jamaah: layanan 5/5 — hotel 200 m dari Masjid Nabawi" },
        { actor: "PLATFORM", action: "RELEASED", detail: "Rilis 3 Rp 21.600.000 (20%) — settlement selesai, kontrak SELESAI" },
      ],
    },
    {
      ref: "SH-ESC-2026-00003",
      jamaahName: "Bpk. Rahman Hakim",
      jamaahPhone: "+628123450003",
      companyId: anyPpiu!.id,
      packageTitle: "Umrah Reguler 11 Hari — Makkah First",
      departDate: "2027-03-19",
      paxCount: 2,
      totalAmount: 71_000_000,
      status: "FUNDED",
      fundedAmount: 71_000_000,
      releasedAmount: 0,
      depositRef: "VA-BNI-9903xxx",
      milestones: mkMilestones(71_000_000),
      releaseSeq1: false,
      events: [
        { actor: "JAMAAH", action: "CREATED", detail: "Kontrak dibuat & disetujui kedua pihak (dual-sign)" },
        { actor: "JAMAAH", action: "FUNDED", detail: "Dana penuh Rp 71.000.000 masuk escrow" },
      ],
    },
    {
      ref: "SH-ESC-2026-00004",
      jamaahName: "Keluarga Hj. Nurhayati",
      jamaahPhone: "+628123450004",
      companyId: (ppiu2 ?? anyPpiu)!.id,
      packageTitle: "Umrah Keluarga 10 Hari — Semester Liburan",
      departDate: "2027-06-25",
      paxCount: 4,
      totalAmount: 152_000_000,
      status: "DRAFT",
      fundedAmount: 0,
      releasedAmount: 0,
      depositRef: null,
      milestones: mkMilestones(152_000_000),
      releaseSeq1: false,
      events: [{ actor: "JAMAAH", action: "CREATED", detail: "Draft kontrak dibuat — menunggu setoran escrow" }],
    },
  ];

  for (const c of contractDefs) {
    const { events, milestones, releaseSeq1: _rs1, ...head } = c;
    const createdContract = await db.escrowContract.create({
      data: { ...head, events: { create: events } },
    });
    await db.escrowMilestone.createMany({
      data: milestones.map((m) => ({
        ...m,
        status: m.status === "RELEASED" && head.status === "PARTIAL_RELEASE" && m.seq === 1 ? "RELEASED" : m.status,
        actedAt: m.status === "RELEASED" ? new Date() : null,
        contractId: createdContract.id,
      })),
    });
  }
  console.log(`ESCROW: ${contractDefs.length} kontrak contoh dibuat`);

  // =========================================================
  // 6. RINGKASAN AKHIR
  // =========================================================
  const total = await db.company.count();
  const byType = await db.company.groupBy({ by: ["orgType"], _count: true });
  const byCountry = await db.company.groupBy({ by: ["country"], _count: true });
  console.log("== RINGKASAN ==");
  console.log(`Total perusahaan di database: ${total}`);
  console.log("Per tipe:", byType.map((b) => `${b.orgType}=${b._count}`).join(", "));
  console.log("Per negara:", byCountry.map((b) => `${b.country}=${b._count}`).join(", "));
}

main()
  .catch((e) => {
    console.error("FATAL", e);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
