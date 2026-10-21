/**
 * hydration-audit.mjs — Audit hydration SolusiHajj (Task 10b)
 * 1) Ambil HTML SSR (fetch) → ekstrak id radix accordion FAQ beranda
 * 2) Muat halaman di Chromium → rekam SEMUA error/warning konsol
 * 3) Setelah hidrasi, ekstrak id accordion dari DOM hidup
 * 4) Bandingkan SSR vs Client → lapankan mismatch
 */
import { chromium } from "playwright";

const URL = "http://localhost:3000/";

function extractRadixIds(html) {
  const ids = [...html.matchAll(/id="(radix-[^"]+)"/g)].map((m) => m[1]);
  const ctrls = [...html.matchAll(/aria-controls="(radix-[^"]+)"/g)].map((m) => m[1]);
  return { ids, ctrls };
}

// ---------- 1) SSR ----------
const res = await fetch(URL, { headers: { "user-agent": "Mozilla/5.0 (hydration-audit)" } });
const html = await res.text();
const ssr = extractRadixIds(html);
console.log("=== SSR HTML ===");
console.log("status:", res.status);
console.log("jumlah <script ld+json>:", (html.match(/application\/ld\+json/g) || []).length);
console.log("SSR radix ids (10 pertama):", ssr.ids.slice(0, 10));

// ---------- 2+3) Client ----------
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1366, height: 900 } });

const consoleMsgs = [];
page.on("console", (msg) => {
  const t = msg.type();
  if (t === "error" || t === "warning") {
    consoleMsgs.push(`[${t}] ${msg.text().slice(0, 500)}`);
  }
});
page.on("pageerror", (err) => {
  consoleMsgs.push(`[pageerror] ${String(err).slice(0, 500)}`);
});

await page.goto(URL, { waitUntil: "networkidle", timeout: 60000 });
// Beri waktu hidrasi + efek selesai
await page.waitForTimeout(3000);

const clientIds = await page.evaluate(() =>
  [...document.querySelectorAll("[data-slot='accordion-trigger']")].map((el) => el.id)
);
const clientCtrlIds = await page.evaluate(() =>
  [...document.querySelectorAll("[data-slot='accordion-content']")].map((el) => el.id)
);
const clientAria = await page.evaluate(() =>
  [...document.querySelectorAll("[data-slot='accordion-trigger']")].map((el) =>
    el.getAttribute("aria-controls")
  )
);

console.log("\n=== CLIENT (DOM hidup) ===");
console.log("accordion triggers:", clientIds.length);
console.log("client trigger ids:", clientIds);
console.log("client aria-controls:", clientAria);
console.log("client content ids:", clientCtrlIds);

// ---------- 4) Bandingkan ----------
console.log("\n=== PERBANDINGAN SSR vs CLIENT ===");
// SSR trigger ids: ekstrak dari HTML untuk accordion FAQ (data-slot="accordion-trigger")
const ssrTriggerIds = [...html.matchAll(/data-slot="accordion-trigger"[^>]*\sid="(radix-[^"]+)"/g)].map((m) => m[1]);
console.log("SSR trigger ids:", ssrTriggerIds);

let mismatch = 0;
const n = Math.max(ssrTriggerIds.length, clientIds.length);
for (let i = 0; i < n; i++) {
  const s = ssrTriggerIds[i] ?? "(tidak ada)";
  const c = clientIds[i] ?? "(tidak ada)";
  if (s !== c) {
    mismatch++;
    console.log(`  MISMATCH item ${i}: SSR=${s}  CLIENT=${c}`);
  }
}
if (mismatch === 0 && ssrTriggerIds.length > 0) console.log("  ✓ Semua id accordion identik SSR = client");

// Filter pesan konsol yang relevan hydration
const hydrationMsgs = consoleMsgs.filter((m) =>
  /hydrat|mismatch|did not match|server rendered/i.test(m)
);
console.log("\n=== PESAN KONSOL TERKAIT HYDRATION ===");
if (hydrationMsgs.length === 0) console.log("  ✓ Tidak ada pesan hydration mismatch");
else hydrationMsgs.slice(0, 6).forEach((m) => console.log("  " + m + "\n  ---"));

console.log("\n=== SEMUA ERROR/WARNING KONSOL (maks 12) ===");
consoleMsgs.slice(0, 12).forEach((m) => console.log("  " + m.split("\n")[0]));

await browser.close();
console.log("\nAUDIT SELESAI");
