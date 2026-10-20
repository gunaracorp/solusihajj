/**
 * SolusiHajj R3 — HIMPUH Full Directory Scraper (RESUMABLE)
 * Fase 1: tarik halaman daftar 1..N → scripts/data/himpuh-list.json
 * Fase 2: tarik halaman detail per anggota → checkpoint scripts/data/himpuh-details.jsonl
 *         (aman crash: baris yang sudah ada dilewati saat re-run)
 * Fase 3: gabung → scripts/data/himpuh-full.json
 * Jalankan: bun /home/z/my-project/scripts/fetch-himpuh-full.ts
 */
import { writeFileSync, readFileSync, existsSync, mkdirSync, appendFileSync } from "node:fs";

const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36";
const BASE = "https://himpuh.or.id/daftar-anggota";
const DIR = "/home/z/my-project/scripts/data";
const LIST_OUT = `${DIR}/himpuh-list.json`;
const DETAIL_OUT = `${DIR}/himpuh-details.jsonl`;
const FINAL_OUT = `${DIR}/himpuh-full.json`;
const CONCURRENCY = 6;
const TIMEOUT_MS = 25_000;
const RETRIES = 3;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function fetchText(url: string): Promise<string | null> {
  for (let attempt = 1; attempt <= RETRIES; attempt++) {
    try {
      const ctrl = new AbortController();
      const t = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
      const res = await fetch(url, { headers: { "User-Agent": UA, Accept: "text/html" }, signal: ctrl.signal });
      clearTimeout(t);
      if (res.ok) return await res.text();
      console.log(`  HTTP ${res.status} (coba ${attempt}) ${url}`);
    } catch (e) {
      console.log(`  ERR ${(e as Error).message} (coba ${attempt}) ${url}`);
    }
    await sleep(800 * attempt);
  }
  return null;
}

const decode = (s: string) =>
  s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#0?39;/g, "'")
    .replace(/&nbsp;/g, " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/\s+/g, " ").trim();

interface ListRow { no: number; name: string; brand: string; address: string; detailUrl: string; }
interface DetailData {
  jenisAnggota: string; providerVisa: string; noRegistrasi: string;
  address: string; phones: string[]; emails: string[]; website: string;
}

function parseListPage(html: string): ListRow[] {
  const rows: ListRow[] = [];
  const start = html.indexOf("<tbody>");
  const end = html.indexOf("</tbody>");
  if (start < 0 || end < 0) return rows;
  const tbody = html.slice(start, end);
  const trs = tbody.split("<tr>").slice(1);
  for (const tr of trs) {
    const tds = tr.split(/<td/).slice(1);
    if (tds.length < 4) continue;
    const cellText = (td: string) => {
      const gt = td.indexOf(">");
      const body = gt >= 0 ? td.slice(gt + 1) : td;
      const stop = body.search(/<\/td>/);
      return decode(stop > 0 ? body.slice(0, stop) : body);
    };
    const no = parseInt(cellText(tds[0]), 10);
    const name = cellText(tds[1]);
    const brand = cellText(tds[2]);
    const address = cellText(tds[3]);
    const linkM = tr.match(/href="(https:\/\/himpuh\.or\.id\/daftar-anggota\/detail\/[^"]+)"/);
    if (!isNaN(no) && name) rows.push({ no, name, brand, address, detailUrl: linkM ? linkM[1] : "" });
  }
  return rows;
}

function parseDetail(html: string): DetailData {
  const d: DetailData = { jenisAnggota: "", providerVisa: "", noRegistrasi: "", address: "", phones: [], emails: [], website: "" };
  const tableStart = html.indexOf("Jenis Anggota");
  const area = tableStart > 0 ? html.slice(tableStart, tableStart + 20000) : html;
  const grab = (label: string): string => {
    const re = new RegExp(`${label}</td>\\s*<td>([\\s\\S]*?)</td>`, "i");
    const m = area.match(re);
    if (!m) return "";
    const v = m[1];
    if (v.includes("<li>")) {
      return [...v.matchAll(/<li>([\s\S]*?)<\/li>/g)].map((x) => decode(x[1])).join(" | ");
    }
    return decode(v);
  };
  d.jenisAnggota = grab("Jenis Anggota");
  d.providerVisa = grab("Provider Visa");
  d.noRegistrasi = grab("No Registrasi");
  d.address = grab("Kantor Pusat");
  const phoneRaw = grab("Nomor Telepon") || grab("Telepon");
  if (phoneRaw) d.phones = phoneRaw.split("|").map((p) => p.trim()).filter(Boolean);
  const emailRaw = grab("Email");
  if (emailRaw) d.emails = [...emailRaw.matchAll(/[\w.+-]+@[\w.-]+\.\w+/g)].map((x) => x[0]);
  d.website = grab("Website");
  return d;
}

const PROVINCES = [
  "DKI Jakarta", "Jawa Barat", "Jawa Tengah", "Jawa Timur", "Banten", "DI Yogyakarta",
  "Aceh", "Sumatera Utara", "Sumatera Barat", "Sumatera Selatan", "Riau", "Kepulauan Riau",
  "Jambi", "Bengkulu", "Lampung", "Bangka Belitung", "Kalimantan Barat", "Kalimantan Selatan",
  "Kalimantan Tengah", "Kalimantan Timur", "Kalimantan Utara", "Sulawesi Barat", "Sulawesi Selatan",
  "Sulawesi Tengah", "Sulawesi Tenggara", "Sulawesi Utara", "Gorontalo", "Bali",
  "Nusa Tenggara Barat", "Nusa Tenggara Timur", "Maluku", "Maluku Utara", "Papua", "Papua Barat",
  "Nanggroe Aceh Darussalam",
];

function geoFromAddress(addr: string): { province: string | null; city: string | null } {
  const clean = addr.replace(/Nanggroe Aceh Darussalam \(NAD\)/g, "Nanggroe Aceh Darussalam");
  let province: string | null = null;
  for (const p of PROVINCES) {
    if (clean.lastIndexOf(p) >= 0) { province = p === "Nanggroe Aceh Darussalam" ? "Aceh" : p; break; }
  }
  if (province === "DKI Jakarta") {
    for (const k of ["Jakarta Timur", "Jakarta Selatan", "Jakarta Pusat", "Jakarta Barat", "Jakarta Utara"]) {
      if (clean.includes(k)) return { province, city: k };
    }
    return { province, city: "Jakarta" };
  }
  if (province) {
    const idx = clean.lastIndexOf(province);
    const before = clean.slice(0, idx).replace(/,\s*$/, "");
    const parts = before.split(",").map((s) => s.trim()).filter(Boolean);
    if (parts.length >= 2) {
      const cand = parts[parts.length - 1].replace(/^\s*Kota\s+/i, "").replace(/\s+\d{5}.*$/, "");
      if (cand.length > 2 && cand.length < 40) return { province, city: cand };
    }
    if (parts.length === 1 && parts[0].length > 2) return { province, city: parts[0] };
  }
  return { province, city: null };
}

async function mapPool<T, R>(items: T[], n: number, fn: (x: T, i: number) => Promise<R>): Promise<R[]> {
  const res: R[] = new Array(items.length);
  let cur = 0;
  await Promise.all(Array.from({ length: n }, async () => {
    while (true) { const i = cur++; if (i >= items.length) break; res[i] = await fn(items[i], i); }
  }));
  return res;
}

async function main() {
  mkdirSync(DIR, { recursive: true });

  // ---------- FASE 1: daftar ----------
  let rows: ListRow[];
  if (existsSync(LIST_OUT)) {
    rows = JSON.parse(readFileSync(LIST_OUT, "utf-8"));
    console.log(`FASE 1: pakai cache ${LIST_OUT} (${rows.length} baris)`);
  } else {
    console.log("FASE 1: halaman daftar");
    rows = [];
    let page = 1;
    while (page <= 25) {
      const html = await fetchText(`${BASE}?page=${page}`);
      if (!html) { console.log(`  page ${page}: gagal, lanjut`); page++; continue; }
      const r = parseListPage(html);
      console.log(`  page ${page}: ${r.length} baris`);
      if (r.length === 0) break;
      rows.push(...r);
      page++;
      await sleep(400);
    }
    writeFileSync(LIST_OUT, JSON.stringify(rows, null, 2));
    console.log(`FASE 1 selesai: ${rows.length} baris (halaman 1..${page - 1})`);
  }

  // ---------- FASE 2: detail (checkpoint) ----------
  console.log("FASE 2: halaman detail");
  const doneMap = new Map<string, { name: string; detail: DetailData | null }>();
  if (existsSync(DETAIL_OUT)) {
    for (const line of readFileSync(DETAIL_OUT, "utf-8").split("\n")) {
      if (!line.trim()) continue;
      try { const o = JSON.parse(line); doneMap.set(o.key, { name: o.name, detail: o.detail }); } catch {}
    }
  }
  console.log(`checkpoint: ${doneMap.size} detail sudah ada`);
  const todo = rows.filter((r) => !doneMap.has(r.detailUrl || r.name));
  console.log(`perlu ditarik: ${todo.length}`);
  let processed = 0;
  await mapPool(todo, CONCURRENCY, async (row) => {
    const key = row.detailUrl || row.name;
    let detail: DetailData | null = null;
    if (row.detailUrl) {
      const html = await fetchText(row.detailUrl);
      if (html) detail = parseDetail(html);
    }
    appendFileSync(DETAIL_OUT, JSON.stringify({ key, name: row.name, detail }) + "\n");
    processed++;
    if (processed % 25 === 0) console.log(`  progres: ${processed}/${todo.length}`);
    await sleep(120);
  });
  console.log(`FASE 2 selesai: +${processed} baru, total ${doneMap.size + processed}`);

  // ---------- FASE 3: gabung ----------
  const final = new Map<string, { name: string; detail: DetailData | null }>();
  if (existsSync(DETAIL_OUT)) {
    for (const line of readFileSync(DETAIL_OUT, "utf-8").split("\n")) {
      if (!line.trim()) continue;
      try { const o = JSON.parse(line); final.set(o.key, { name: o.name, detail: o.detail }); } catch {}
    }
  }
  const members = rows.map((row) => {
    const d = final.get(row.detailUrl || row.name);
    const detail = d?.detail || null;
    const geo = geoFromAddress(detail?.address || row.address);
    return { ...row, detail, ...geo };
  });

  const jenisCount: Record<string, number> = {};
  const provCount: Record<string, number> = {};
  for (const m of members) {
    const j = m.detail?.jenisAnggota || "TIDAK_DIKETAHUI";
    jenisCount[j] = (jenisCount[j] || 0) + 1;
    const p = m.province || "LAINNYA";
    provCount[p] = (provCount[p] || 0) + 1;
  }
  const payload = {
    fetchedAt: new Date().toISOString(),
    source: "HIMPUH (Himpunan Penyelenggara Haji Umrah Indonesia) — himpuh.or.id",
    listPages: Math.ceil(rows.length / 25),
    totalRows: members.length,
    detailOk: members.filter((m) => m.detail).length,
    jenisCount, provinceCount: provCount,
    members,
  };
  writeFileSync(FINAL_OUT, JSON.stringify(payload, null, 2));
  console.log(`SIMPAN: ${FINAL_OUT}`);
  console.log("Jenis:", JSON.stringify(jenisCount));
  console.log("Provinsi:", JSON.stringify(provCount));
}

main().catch((e) => { console.error("FATAL", e); process.exit(1); });
