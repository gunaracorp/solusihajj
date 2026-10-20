/**
 * hydration-smoke.mjs — Uji asap interaksi SolusiHajj (Task 10b)
 * Skenario: muat beranda → klik accordion FAQ → navigasi hash antar 5 halaman → kembali.
 * Target: NOL pesan konsol error/warning (termasuk hydration mismatch).
 */
import { chromium } from "playwright";

const URL = "http://localhost:3000/";
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1366, height: 900 } });

const msgs = [];
page.on("console", (m) => {
  if (m.type() === "error" || m.type() === "warning") msgs.push(`[${m.type()}] ${m.text().slice(0, 300)}`);
});
page.on("pageerror", (e) => msgs.push(`[pageerror] ${String(e).slice(0, 300)}`));

await page.goto(URL, { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(2000);

// 1) Klik accordion FAQ item pertama & kedua
const triggers = page.locator("[data-slot='accordion-trigger']");
const count = await triggers.count();
console.log("accordion triggers:", count);
if (count > 0) {
  await triggers.nth(0).click();
  await page.waitForTimeout(600);
  const expanded = await triggers.nth(0).getAttribute("aria-expanded");
  console.log("item 0 expanded setelah klik:", expanded);
  if (count > 1) {
    await triggers.nth(1).click();
    await page.waitForTimeout(600);
  }
}

// 2) Navigasi hash: faq → paket → ppiu → escrow → home
for (const hash of ["#/faq", "#/paket", "#/ppiu", "#/escrow", "#/"]) {
  await page.evaluate((h) => { window.location.hash = h; }, hash);
  await page.waitForTimeout(1200);
  const visible = await page.evaluate(() => document.querySelector("main")?.children.length ?? 0);
  console.log(`navigasi ${hash} → main children: ${visible}`);
}

// 3) Kembali ke beranda, klik accordion lagi (state setelah pindah halaman)
await page.waitForTimeout(800);
const t2 = page.locator("[data-slot='accordion-trigger']");
console.log("accordion di beranda (kembali):", await t2.count());
if ((await t2.count()) > 0) {
  await t2.nth(2).click();
  await page.waitForTimeout(500);
}

console.log("\n=== HASIL KONSOL ===");
if (msgs.length === 0) console.log("✓ NOL error/warning konsol di seluruh skenario");
else {
  console.log(`✗ ${msgs.length} pesan:`);
  msgs.slice(0, 10).forEach((m) => console.log("  " + m.split("\n")[0]));
}

await browser.close();
console.log("SMOKE TEST SELESAI");
