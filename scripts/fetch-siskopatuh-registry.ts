/**
 * SolusiHajj — SISKOPATUH National Registry Fetcher (R5)
 * ========================================================
 * Sumber: SISKOPATUH (Kementerian Haji dan Umrah RI) — registri nasional
 * penyelenggara umrah & haji khusus. Endpoint publik yang dipakai situs
 * resmi https://siskopatuh.haji.go.id/web/#/publik/info_ppiu & info_pihk.
 *
 * Fetch: 34 provinsi x 2 endpoint (PPIU + PIHK), resumable per provinsi,
 * retry dengan backoff, checkpoint JSONL di scripts/data/siskopatuh/.
 *
 * Output:
 *   raw-ppiu.jsonl  — 1 baris per penyelenggara PPIU
 *   raw-pihk.jsonl  — 1 baris per penyelenggara PIHK
 *   manifest.json   — status per (prov, endpoint)
 *   summary.json    — agregat akhir
 *
 * Jalankan: bun run scripts/fetch-siskopatuh-registry.ts
 * Provenance: data resmi pemerintah, diambil transparan untuk agregasi
 * publik SolusiHajj (wadah verifikasi penyelenggara, UU PDP aman — data
 * publik perizinan, bukan data pribadi jamaah).
 * by Gugun Gunara — Muhammad Lutfi Azmi — PT Top Konsultan Internasional
 */

import { writeFileSync, readFileSync, existsSync, appendFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const BASE = "https://siskopatuh.haji.go.id/api/info";
const XKEY = "ac823!@mnh"; // kunci publik yang disematkan aplikasi web resmi SISKOPATUH
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36";
const DIR = join(import.meta.dir, "data", "siskopatuh");
const DELAY_MS = 500;
const RETRIES = 4;

type Prov = { prov_id: string; prov_nama: string };
type RawRow = Record<string, unknown>;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function fetchJson(url: string): Promise<{ RC: string; message: string; data: unknown }> {
  let lastErr: unknown;
  for (let i = 0; i < RETRIES; i++) {
    try {
      const res = await fetch(url, {
        headers: { "x-key": XKEY, "User-Agent": UA, Accept: "application/json" },
        signal: AbortSignal.timeout(90_000),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = (await res.json()) as { RC: string; message: string; data: unknown };
      return json;
    } catch (e) {
      lastErr = e;
      await sleep(1500 * (i + 1));
    }
  }
  throw lastErr;
}

function loadManifest(): Record<string, { ppiu?: boolean; pihk?: boolean }> {
  const p = join(DIR, "manifest.json");
  if (existsSync(p)) return JSON.parse(readFileSync(p, "utf8"));
  return {};
}

async function main() {
  mkdirSync(DIR, { recursive: true });
  const provs: Prov[] = JSON.parse(readFileSync(join(DIR, "prov.json"), "utf8")).data;
  const manifest = loadManifest();
  const counts = { ppiu: 0, pihk: 0, provinces: 0 };

  console.log(`SISKOPATUH fetch: ${provs.length} provinsi x 2 endpoint`);
  for (const prov of provs) {
    const pid = prov.prov_id;
    const m = manifest[pid] ?? {};

    for (const ep of ["ppiu", "pihk"] as const) {
      if (m[ep]) continue;
      const url = `${BASE}/${ep}/${pid}`;
      let rows: RawRow[] | null = null;
      try {
        const json = await fetchJson(url);
        if (json.RC === "00" && Array.isArray(json.data)) rows = json.data as RawRow[];
        else rows = []; // "Data Kosong" — provinsi tanpa penyelenggara untuk endpoint ini
      } catch (e) {
        console.error(`  FAIL ${ep}/${pid}: ${String(e).slice(0, 120)}`);
        continue; // biarkan checkpoint false agar bisa diulang
      }
      const f = join(DIR, `raw-${ep}.jsonl`);
      for (const row of rows) appendFileSync(f, JSON.stringify(row) + "\n");
      counts[ep] += rows.length;
      m[ep] = true;
      manifest[pid] = m;
      writeFileSync(join(DIR, "manifest.json"), JSON.stringify(manifest, null, 1));
      console.log(
        `  ${pid} ${prov.prov_nama.padEnd(20)} ${ep.toUpperCase()}: ${rows.length} baris (total ${ep} ${counts[ep]})`,
      );
      await sleep(DELAY_MS);
    }
    counts.provinces++;
  }

  // ringkasan
  const summary = { fetchedAt: new Date().toISOString(), ...counts };
  writeFileSync(join(DIR, "summary.json"), JSON.stringify(summary, null, 2));
  console.log("\nSELESAI:", JSON.stringify(summary));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
