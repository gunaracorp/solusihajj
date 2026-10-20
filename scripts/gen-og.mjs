/**
 * gen-og.mjs — render og-image.png (1200x630) SolusiHajj "Gerbang Nur"
 * Menggunakan logo.svg asli + font Plus Jakarta Sans via Google Fonts.
 * Jalankan: node scripts/gen-og.mjs
 */
import { chromium } from "playwright";
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const logoSvg = readFileSync(join(ROOT, "public", "logo.svg"), "utf8");

const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body { width:1200px; height:630px; overflow:hidden; font-family:'Plus Jakarta Sans',sans-serif; }
  .stage {
    width:1200px; height:630px; position:relative; display:flex; align-items:center;
    background:
      radial-gradient(900px 500px at 85% -10%, rgba(201,162,39,0.16), transparent 60%),
      radial-gradient(700px 700px at -5% 110%, rgba(6,42,30,0.55), transparent 60%),
      linear-gradient(135deg, #0F7051 0%, #0E6B4E 45%, #09412F 100%);
  }
  /* pola khatam halus */
  .pattern { position:absolute; inset:0; opacity:0.05; background-image:radial-gradient(#FAF7F2 1.6px, transparent 1.6px); background-size:34px 34px; }
  .rail { position:absolute; left:0; top:0; bottom:0; width:14px; background:linear-gradient(180deg,#E3C766,#C9A227); }
  .mark { width:380px; height:380px; margin-left:72px; filter:drop-shadow(0 26px 48px rgba(0,0,0,0.35)); flex-shrink:0; }
  .mark svg { width:380px; height:380px; display:block; }
  .copy { padding-left:64px; max-width:590px; }
  .kicker { display:inline-flex; align-items:center; gap:10px; color:#F3E1A0; font-size:20px; font-weight:700; letter-spacing:3.5px; text-transform:uppercase; margin-bottom:16px; }
  .kicker::before { content:""; width:44px; height:2.5px; background:#C9A227; display:inline-block; }
  h1 { color:#FAF7F2; font-size:52px; line-height:1.12; font-weight:800; letter-spacing:-1px; }
  h1 .gold { color:#E3C766; }
  p { color:#D7E4DC; font-size:22px; line-height:1.5; margin-top:18px; font-weight:500; }
  .chips { display:flex; gap:10px; margin-top:24px; flex-wrap:nowrap; }
  .chip { border:1.5px solid rgba(227,199,102,0.55); color:#F3E1A0; border-radius:999px; padding:8px 18px; font-size:17px; font-weight:700; letter-spacing:0.3px; white-space:nowrap; }
  .domain { position:absolute; right:56px; bottom:44px; color:#FAF7F2; font-size:26px; font-weight:800; letter-spacing:1px; }
  .domain span { color:#E3C766; }
</style>
</head>
<body>
<div class="stage">
  <div class="pattern"></div>
  <div class="rail"></div>
  <div class="mark">${logoSvg}</div>
  <div class="copy">
    <div class="kicker">Gerbang Nur</div>
    <h1>Satu Gerbang untuk<br>Ibadah Anda. <span class="gold">Amanah Anda, Aman.</span></h1>
    <p>Marketplace umrah &amp; haji terbesar di Asia — 3.966 penyelenggara terverifikasi, dana dijaga escrow syariah 40/40/20.</p>
    <div class="chips">
      <div class="chip">Escrow Syariah</div>
      <div class="chip">Verifikasi 5 Lapis</div>
      <div class="chip">Review Saksi Jamaah</div>
    </div>
  </div>
  <div class="domain">solusihajj<span>.com</span></div>
</div>
</body>
</html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(400);
await page.screenshot({ path: join(ROOT, "public", "og-image.png"), clip: { x: 0, y: 0, width: 1200, height: 630 } });
await browser.close();
console.log("OK public/og-image.png (1200x630 @2x)");
