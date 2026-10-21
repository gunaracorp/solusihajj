/**
 * SolusiHajj — Seed R5: Registri Nasional SISKOPATUH (Kemenhaj)
 * ==============================================================
 * Mengimpor 3.634 PPIU + 967 PIHK (semua PIHK juga PPIU = dual lisensi)
 * dari scripts/data/siskopatuh/raw-*.jsonl hasil fetch-siskopatuh-registry.ts.
 *
 * Strategi merge dengan data eksisting (521 org dari HIMPUH/Kemenag dll):
 *   1. Match by licenseNo dinormalisasi (KMA ...)
 *   2. Match by nama dinormalisasi (HIMPUH)
 *   - Update field yang kosong, jangan menimpa data yang sudah ada
 *   - Status: SANKSI eksisting dipertahankan (provenance sanksi Kemenag)
 *   - orgType: PIHK dominan bila perusahaan ternyata dual PPIU+PIHK
 *
 * Jalankan: bun run scripts/seed-r5.ts
 * by Gugun Gunara — Muhammad Lutfi Azmi — PT Top Konsultan Internasional
 */

import { PrismaClient } from "@prisma/client";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const db = new PrismaClient();
const DIR = join(import.meta.dir, "data", "siskopatuh");
const DATA_AS_OF = "Oktober 2026";

type Row = Record<string, any>;

// ---------- normalisasi ----------
const s = (v: unknown): string => (typeof v === "string" ? v.trim() : "");
const nullIfDash = (v: string | null | undefined): string | null => {
  const t = s(v);
  if (!t || t === "-" || t === "—") return null;
  return t;
};
const cleanName = (n: string): string => s(n).split("\n")[0].replace(/\s+/g, " ").trim();
const normKey = (n: string): string =>
  cleanName(n).toUpperCase().replace(/[^A-Z0-9]+/g, " ").replace(/\s+/g, " ").trim();
const normLic = (n: string): string =>
  s(n).toUpperCase().replace(/[^A-Z0-9]+/g, " ").replace(/\s+/g, " ").trim();

const PROV_LABEL: Record<string, string> = {
  ACEH: "Aceh", "SUMATERA UTARA": "Sumatera Utara", "SUMATERA BARAT": "Sumatera Barat",
  "R I A U": "Riau", "RIAU": "Riau", "J A M B I": "Jambi", "JAMBI": "Jambi",
  "SUMATERA SELATAN": "Sumatera Selatan", BENGKULU: "Bengkulu", LAMPUNG: "Lampung",
  "DKI JAKARTA": "DKI Jakarta", "JAWA BARAT": "Jawa Barat", "JAWA TENGAH": "Jawa Tengah",
  "D.I. YOGYAKARTA": "DI Yogyakarta", "DI YOGYAKARTA": "DI Yogyakarta",
  "JAWA TIMUR": "Jawa Timur", BALI: "Bali", "B A L I": "Bali",
  "NUSA TENGGARA BARAT": "Nusa Tenggara Barat", "NUSA TENGGARA TIMUR": "Nusa Tenggara Timur",
  "KALIMANTAN BARAT": "Kalimantan Barat", "KALIMANTAN TENGAH": "Kalimantan Tengah",
  "KALIMANTAN SELATAN": "Kalimantan Selatan", "KALIMANTAN TIMUR": "Kalimantan Timur",
  "SULAWESI UTARA": "Sulawesi Utara", "SULAWESI TENGAH": "Sulawesi Tengah",
  "SULAWESI SELATAN": "Sulawesi Selatan", "SULAWESI TENGGARA": "Sulawesi Tenggara",
  MALUKU: "Maluku", PAPUA: "Papua", "BANGKA BELITUNG": "Bangka Belitung", BANTEN: "Banten",
  GORONTALO: "Gorontalo", "MALUKU UTARA": "Maluku Utara", "KEPULAUAN RIAU": "Kepulauan Riau",
  "SULAWESI BARAT": "Sulawesi Barat", "PAPUA BARAT": "Papua Barat", "KALIMANTAN UTARA": "Kalimantan Utara",
};
const provLabel = (raw: string): string => PROV_LABEL[s(raw).toUpperCase()] ?? cleanName(raw);

const cityLabel = (raw: string): string => {
  const t = cleanName(raw);
  return t.replace(/\bKOTA ADM\.?\s*/i, "").replace(/\bKOTA\b/i, (m, off, str) =>
    off === 0 ? "Kota" : m.toLowerCase() === "KOTA" ? "Kota" : m
  ).replace(/\bKABUPATEN\b/i, "Kab.").replace(/\s+/g, " ").trim();
};

const yearOf = (...dates: string[]): number | null => {
  for (const d of dates) {
    const m = s(d).match(/(20\d\d)/);
    if (m) return Number(m[1]);
  }
  return null;
};

function statusOf(row: Row, existingStatus?: string): string {
  if (existingStatus === "SANKSI") return "SANKSI"; // provenance sanksi dipertahankan
  const st = s(row.status_ppiu).toUpperCase();
  if (st === "DIBLOKIR" || s(row.is_blocked) === "Y") return "DIBLOKIR";
  if (st === "TIDAK AKTIF" || s(row.is_aktif) === "N") return "TIDAK AKTIF";
  return "AKTIF";
}

function buildNotes(rowPpiu: Row | null, rowPihk: Row | null): string | null {
  const parts: string[] = [];
  if (rowPihk) {
    const ak = nullIfDash(rowPihk.nilai_akreditasi_pihk);
    if (ak) parts.push(`Akreditasi: ${ak.replace(/\n/g, " | ")}`);
    const pp = nullIfDash(rowPihk.nomor_sk);
    if (pp) parts.push(`Juga berizin PPIU: ${pp}`);
  } else if (rowPpiu) {
    const ak = nullIfDash(rowPpiu.nilai_akreditasi);
    if (ak) parts.push(`Akreditasi: ${ak}`);
  }
  return parts.length ? parts.join(" • ") : null;
}

// ---------- load & gabung registry ----------
function loadJsonl(name: string): Row[] {
  const p = join(DIR, name);
  if (!existsSync(p)) return [];
  return readFileSync(p, "utf8").split("\n").filter(Boolean).map((l) => JSON.parse(l));
}

type Entity = {
  name: string;
  rowPpiu: Row | null;
  rowPihk: Row | null;
};

function loadRegistry(): Map<string, Entity> {
  const map = new Map<string, Entity>();
  const put = (row: Row, role: "ppiu" | "pihk") => {
    const name = cleanName(row.nama_ppiu ?? "");
    if (!name) return;
    const key = normKey(name);
    const ent = map.get(key) ?? { name, rowPpiu: null, rowPihk: null };
    if (role === "ppiu") ent.rowPpiu = row; else ent.rowPihk = row;
    if (!ent.name || ent.name.length < name.length) ent.name = name;
    map.set(key, ent);
  };
  for (const r of loadJsonl("raw-ppiu.jsonl")) put(r, "ppiu");
  for (const r of loadJsonl("raw-pihk.jsonl")) put(r, "pihk");
  return map;
}

// ---------- main ----------
async function main() {
  const reg = loadRegistry();
  console.log(`Registry digabung: ${reg.size} entitas unik`);

  // DataSource — pakai kunci "siskopatuh" yang sudah ada sejak R2
  const src = await db.dataSource.upsert({
    where: { key: "siskopatuh" },
    update: {
      name: "SISKOPATUH — Registri Nasional Penyelenggara Umrah & Haji Khusus",
      institution: "Kementerian Haji dan Umrah RI (Kemenhaj)",
      url: "https://siskopatuh.haji.go.id",
      description:
        "Registri nasional resmi penyelenggara umrah (PPIU) dan haji khusus (PIHK): nomor SK izin, direktur, akreditasi, kontak, status perizinan — disinkronkan penuh 34 provinsi.",
    },
    create: {
      key: "siskopatuh",
      name: "SISKOPATUH — Registri Nasional Penyelenggara Umrah & Haji Khusus",
      institution: "Kementerian Haji dan Umrah RI (Kemenhaj)",
      url: "https://siskopatuh.haji.go.id",
      category: "LEMBAGA",
      country: "ID",
      description:
        "Registri nasional resmi penyelenggara umrah (PPIU) dan haji khusus (PIHK): nomor SK izin, direktur, akreditasi, kontak, status perizinan — disinkronkan penuh 34 provinsi.",
    },
  });

  // indeks eksisting
  const existing = await db.company.findMany({ where: { country: "ID" } });
  const byLicense = new Map<string, typeof existing[number]>();
  const byName = new Map<string, typeof existing[number]>();
  for (const c of existing) {
    if (c.licenseNo) byLicense.set(normLic(c.licenseNo), c);
    const k = normKey(c.name);
    if (!byName.has(k)) byName.set(k, c);
  }

  let created = 0, updated = 0, unchanged = 0;
  const log: string[] = [];

  for (const [key, ent] of reg) {
    const isPihk = !!ent.rowPihk;
    const orgType = isPihk ? "PIHK" : "PPIU";
    const row = ent.rowPihk ?? ent.rowPpiu!;
    const lic = isPihk ? nullIfDash(ent.rowPihk!.nomor_sk_pihk) ?? nullIfDash(ent.rowPihk!.nomor_sk) : nullIfDash(ent.rowPpiu!.nomor_sk);
    const data = {
      name: ent.name,
      orgType,
      licenseNo: lic,
      licenseYear: yearOf(s(ent.rowPihk?.tanggal_sk_pihk), s(ent.rowPihk?.tanggal_sk), s(ent.rowPpiu?.tanggal_sk)),
      leader: nullIfDash(row.nama_direktur),
      address: nullIfDash(row.alamat),
      city: row.kab ? cityLabel(row.kab) : null,
      province: row.prov ? provLabel(row.prov) : null,
      phone: nullIfDash(row.no_telp),
      email: (() => { const e = nullIfDash(row.email); return e && e.includes("@") ? e.toLowerCase() : null; })(),
      status: statusOf(row),
      verified: true,
      sourceId: src.id,
      sourceRef: `https://siskopatuh.haji.go.id/web#/publik/info_${isPihk ? "pihk" : "ppiu"} (ppiu_id=${row.ppiu_id ?? "?"}${ent.rowPihk ? `, pihk_id=${ent.rowPihk.pihk_id}` : ""})`,
      dataAsOf: DATA_AS_OF,
      notes: buildNotes(ent.rowPpiu, ent.rowPihk),
    };

    // 1) match by license
    let hit = lic ? byLicense.get(normLic(lic)) : undefined;
    let how = "license";
    // 2) match by name
    if (!hit) { hit = byName.get(key); how = "name"; }

    if (hit) {
      const patch: Record<string, unknown> = {};
      const fill = (k: string, v: unknown) => {
        if (v == null || v === "") return;
        if (hit![k] == null || hit![k] === "" || hit![k] === "—") patch[k] = v;
      };
      for (const k of ["licenseNo", "licenseYear", "leader", "address", "city", "province", "phone", "email", "notes", "sourceRef", "dataAsOf"]) fill(k, (data as any)[k]);
      fill("sourceId", data.sourceId);
      // status: SANKSI dipertahankan; lainnya ikuti registri
      const newStatus = statusOf(row, hit.status);
      if (hit.status !== newStatus && !(hit.status === "SANKSI")) patch.status = newStatus;
      // orgType: naikkan ke PIHK bila registri menyatakan PIHK dan eksisting PPIU
      if (hit.orgType === "PPIU" && isPihk) patch.orgType = "PIHK";
      patch.verified = true;
      if (Object.keys(patch).length) {
        await db.company.update({ where: { id: hit.id }, data: patch });
        updated++;
        if (patch.orgType) log.push(`ORG naik ${hit.orgType}→${patch.orgType}: ${hit.name}`);
      } else unchanged++;
      // sinkronkan indeks nama agar entitas lain tak match ganda
      byName.set(key, hit);
    } else {
      const c = await db.company.create({ data: data as any });
      byName.set(key, c);
      if (lic) byLicense.set(normLic(lic), c);
      created++;
    }
  }

  // SyncEvent + counter
  const total = await db.company.count();
  const idn = await db.company.count({ where: { country: "ID" } });
  const ppiuC = await db.company.count({ where: { orgType: "PPIU" } });
  const pihkC = await db.company.count({ where: { orgType: "PIHK" } });
  await db.dataSource.update({ where: { id: src.id }, data: { recordsIndexed: idn, lastSyncedAt: new Date() } });
  await db.syncEvent.create({
    data: {
      sourceId: src.id,
      status: "SUCCESS",
      recordsAffected: created + updated,
      note: `Sinkron registri nasional SISKOPATUH 34 provinsi: 3.634 baris PPIU + 967 baris PIHK (${reg.size} entitas unik). ${created} entitas baru, ${updated} diperkaya, ${unchanged} tanpa perubahan.`,
    },
  });

  console.log(`\nSEED R5 SELESAI`);
  console.log(`  dibuat : ${created}`);
  console.log(`  update : ${updated}`);
  console.log(`  tetap  : ${unchanged}`);
  console.log(`  TOTAL companies: ${total} | Indonesia: ${idn}`);
  console.log(`  PPIU: ${ppiuC} | PIHK: ${pihkC}`);
  const byStatus = await db.company.groupBy({ by: ["status"], _count: { status: true } });
  console.log("  status:", byStatus.map((b) => `${b.status}=${b._count.status}`).join(", "));
  if (log.length) console.log(`\nNaik orgType (contoh):\n  ` + log.slice(0, 8).join("\n  "));
  await db.$disconnect();
}

main().catch((e) => { console.error(e); process.exit(1); });
