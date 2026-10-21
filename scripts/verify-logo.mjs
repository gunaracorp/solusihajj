/**
 * verify-logo.mjs — verifikasi visual: header, favicon link, dark mode, mobile.
 * Jalankan: node scripts/verify-logo.mjs
 */
import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://localhost:3000/", { waitUntil: "networkidle", timeout: 45000 });
await page.waitForTimeout(1500);

// 1. favicon links di DOM
const icons = await page.evaluate(() =>
  Array.from(document.querySelectorAll('link[rel*="icon"]')).map((l) => `${l.rel} => ${l.href}`)
);
console.log("ICON LINKS:\n" + icons.join("\n"));

// 2. header logo img
const logoInfo = await page.evaluate(() => {
  const img = document.querySelector('header img, img[alt*="Logo"]');
  if (!img) return "NO LOGO IMG FOUND";
  const r = img.getBoundingClientRect();
  return `src=${img.getAttribute("src")} natural=${img.naturalWidth}x${img.naturalHeight} rendered=${Math.round(r.width)}x${Math.round(r.height)} complete=${img.complete}`;
});
console.log("HEADER LOGO: " + logoInfo);

// 3. screenshot header desktop (light)
await page.screenshot({ path: "public/_verify-header-light.png", clip: { x: 0, y: 0, width: 1440, height: 340 } });

// 4. dark mode header
await page.evaluate(() => {
  document.documentElement.classList.add("dark");
});
await page.waitForTimeout(400);
await page.screenshot({ path: "public/_verify-header-dark.png", clip: { x: 0, y: 0, width: 1440, height: 340 } });
await page.evaluate(() => document.documentElement.classList.remove("dark"));

// 5. mobile 390px
await page.setViewportSize({ width: 390, height: 844 });
await page.waitForTimeout(600);
await page.screenshot({ path: "public/_verify-mobile.png", clip: { x: 0, y: 0, width: 390, height: 300 } });

await browser.close();
console.log("OK screenshots: _verify-header-light/dark/mobile.png");
