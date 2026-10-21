#!/usr/bin/env node
/**
 * SolusiHajj Release Gate — anti-drift versi (v2.1.0).
 *
 * Menolak (exit 1) bila nomor versi tidak identik di keempat sumber:
 *   1. VERSION (root, kanonik)
 *   2. package.json → "version"
 *   3. src/lib/version.ts → APP_VERSION
 *   4. CHANGELOG.md → entri `## [X.Y.Z]` harus sudah ada
 *
 * Dipanggil oleh: git pre-commit hook (githooks/pre-commit, aktif via
 * `git config core.hooksPath githooks`), dan manual: `bun run verify:version`.
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const problems = [];
const OK = "\x1b[32m✓\x1b[0m";
const BAD = "\x1b[31m✗\x1b[0m";

function read(rel) {
  try {
    return readFileSync(join(root, rel), "utf8");
  } catch {
    problems.push(`File wajib tidak ditemukan: ${rel}`);
    return "";
  }
}

// --- 1. VERSION (root) ---
const versionFile = read("VERSION").trim().split("\n")[0].trim();

// --- 2. package.json ---
let pkgVersion = "";
try {
  pkgVersion = JSON.parse(read("package.json")).version ?? "";
} catch {
  problems.push("package.json tidak bisa di-parse sebagai JSON.");
}

// --- 3. src/lib/version.ts ---
const versionTs = read(join("src", "lib", "version.ts"));
const tsMatch = versionTs.match(/APP_VERSION\s*=\s*"(\d+\.\d+\.\d+(?:-[\w.]+)?(?:\+[\w.]+)?)"/);
const tsVersion = tsMatch ? tsMatch[1] : "";
const codenameMatch = versionTs.match(/APP_CODENAME\s*=\s*"([^"]+)"/);
const codename = codenameMatch ? codenameMatch[1] : "(tanpa codename)";

// --- 4. CHANGELOG.md ---
const changelog = read("CHANGELOG.md");
const hasEntry = versionFile
  ? new RegExp(`^## \\[${versionFile.replace(/\./g, "\\.")}\\]`, "m").test(changelog)
  : false;

// --- Evaluasi ---
if (!/^\d+\.\d+\.\d+$/.test(versionFile)) {
  problems.push(`VERSION tidak mengikuti SemVer 2.0.0: "${versionFile}"`);
}
if (versionFile && pkgVersion !== versionFile) {
  problems.push(`package.json "version" (${pkgVersion || "kosong"}) ≠ VERSION (${versionFile})`);
}
if (versionFile && tsVersion !== versionFile) {
  problems.push(`src/lib/version.ts APP_VERSION (${tsVersion || "kosong"}) ≠ VERSION (${versionFile})`);
}
if (versionFile && !hasEntry) {
  problems.push(`CHANGELOG.md belum punya entri "## [${versionFile}]" (Keep a Changelog)`);
}

// --- Laporan ---
console.log("SolusiHajj Release Gate — sinkronisasi versi");
console.log(`  ${versionFile && pkgVersion === versionFile ? OK : BAD} VERSION          : ${versionFile || "(kosong)"}`);
console.log(`  ${pkgVersion === versionFile ? OK : BAD} package.json     : ${pkgVersion || "(kosong)"}`);
console.log(`  ${tsVersion === versionFile ? OK : BAD} version.ts       : ${tsVersion || "(kosong)"} — "${codename}"`);
console.log(`  ${hasEntry ? OK : BAD} CHANGELOG.md     : ${hasEntry ? `entri [${versionFile}] ada` : `entri [${versionFile}] TIDAK ada`}`);

if (problems.length > 0) {
  console.error(`\n\x1b[31m✗ RELEASE GATE MENOLAK — ${problems.length} masalah:\x1b[0m`);
  for (const p of problems) console.error(`  • ${p}`);
  console.error("\nPerbaiki agar VERSION = package.json = src/lib/version.ts, lalu tambahkan entri CHANGELOG.md.");
  console.error("Rujuk SOP rilis di WORKLOG.md §SOP Rilis / README.md.");
  process.exit(1);
}

console.log(`\n${OK} Release gate LOLOS — semua sumber versi sinkron (SolusiHajj v${versionFile} "${codename}").`);
