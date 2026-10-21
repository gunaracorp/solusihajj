/**
 * SolusiHajj R3 — Sumber Asia (lintas negara) Scraper
 *  1. Nusuk Umrah Service Providers (platform resmi Kementerian Haji &
 *     Umrah Saudi — umrah.nusuk.sa) → nama, kota, telepon, email, about
 *  2. Ministry of Religious Affairs Pakistan (mora.gov.pk) → daftar
 *     operator Umrah terdaftar resmi pemerintah Pakistan
 * Output: scripts/data/asia-sources.json
 * Jalankan: bun /home/z/my-project/scripts/fetch-asia.ts
 */
import { writeFileSync, mkdirSync, readFileSync } from "node:fs";

const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0 Safari/537.36";
const OUT = "/home/z/my-project/scripts/data/asia-sources.json";
const CONCURRENCY = 5;
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function fetchText(url: string, timeoutMs = 30_000): Promise<string | null> {
  for (let a = 1; a <= 3; a++) {
    try {
      const ctrl = new AbortController();
      const t = setTimeout(() => ctrl.abort(), timeoutMs);
      const res = await fetch(url, { headers: { "User-Agent": UA }, signal: ctrl.signal });
      clearTimeout(t);
      if (res.ok) return await res.text();
      console.log(`  HTTP ${res.status} attempt ${a} ${url}`);
    } catch (e) {
      console.log(`  ERR ${(e as Error).message} attempt ${a} ${url}`);
    }
    await sleep(900 * a);
  }
  return null;
}

const decodeEnt = (s: string) =>
  s
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCharCode(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCharCode(parseInt(d, 10)))
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();

/** decode Cloudflare email-protection hex */
function decodeCfEmail(href: string): string {
  const m = href.match(/email-protection#([0-9a-f]+)/i);
  if (!m) return "";
  const bytes = m[1].match(/.{2}/g)!.map((h) => parseInt(h, 16));
  const key = bytes[0];
  return bytes.slice(1).map((b) => String.fromCharCode(b ^ key)).join("");
}

// ================= 1. NUSUK (Saudi MOHU platform) =================
interface NusukProvider {
  name: string;
  profileUrl: string;
  city: string;
  phone: string;
  email: string;
  about: string;
}

function parseNusukList(html: string): { name: string; profileUrl: string }[] {
  const out: { name: string; profileUrl: string }[] = [];
  const cards = html.split('<article class="dga-card').slice(1);
  for (const card of cards) {
    const h = card.match(/<h4[^>]*>([\s\S]*?)<\/h4>/);
    const a = card.match(/href="(\/sp\/profile\/[0-9a-f-]+)"/);
    if (h && a) out.push({ name: decodeEnt(h[1]), profileUrl: `https://umrah.nusuk.sa${a[1]}` });
  }
  return out;
}

function parseNusukProfile(html: string): Partial<NusukProvider> {
  const p: Partial<NusukProvider> = {};
  const cityM = html.match(/aria-label="Current location: ([^"]+)"/);
  if (cityM) p.city = cityM[1];
  const telM = html.match(/href="tel:([^"]+)"/);
  if (telM) p.phone = decodeEnt(telM[1]).replace(/^\+/, "+");
  const cfM = html.match(/href="(\/cdn-cgi\/l\/email-protection#[0-9a-f]+)"/);
  if (cfM) p.email = decodeCfEmail(cfM[1]);
  const aboutIdx = html.indexOf('id="about"');
  if (aboutIdx > 0) {
    const seg = html.slice(aboutIdx, aboutIdx + 15000);
    const text = decodeEnt(seg.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<[^>]+>/g, " "));
    // ambil kalimat bermakna (buang label nav)
    const cleaned = text.replace(/^.*?About Us\s*/i, "").trim();
    if (cleaned.length > 40) p.about = cleaned.slice(0, 600);
  }
  return p;
}

// ================= 2. PAKISTAN MORA =================
function parsePakistan(html: string): string[] {
  const names: string[] = [];
  const seen = new Set<string>();
  const kw = /(travel|tour|hajj|umrah|pvt|ltd)/i;
  const tds = html.split(/<td[\s>]/).slice(1);
  for (const chunk of tds) {
    // buang sisa atribut tag pembuka (semua sebelum '>' pertama)
    const gt = chunk.indexOf(">");
    const body = gt >= 0 ? chunk.slice(gt + 1) : chunk;
    const stop = body.search(/<\/td>/i);
    const inner = stop > 0 ? body.slice(0, stop) : body.slice(0, 2000);
    const txt = decodeEnt(inner.replace(/<[^>]+>/g, " "));
    if (txt.length >= 5 && txt.length <= 120 && kw.test(txt)) {
      const key = txt.toLowerCase().replace(/[^a-z0-9]/g, "");
      if (!seen.has(key)) {
        seen.add(key);
        names.push(txt);
      }
    }
  }
  // fallback: pola span color:black (format dokumen MOR)
  if (names.length < 20) {
    const spans = [...html.matchAll(/color:black">([^<]{5,120})<\/span>/g)].map((m) => decodeEnt(m[1]));
    for (const txt of spans) {
      if (kw.test(txt)) {
        const key = txt.toLowerCase().replace(/[^a-z0-9]/g, "");
        if (!seen.has(key)) {
          seen.add(key);
          names.push(txt);
        }
      }
    }
  }
  return names;
}

async function mapPool<T, R>(items: T[], n: number, fn: (x: T, i: number) => Promise<R>): Promise<R[]> {
  const res: R[] = new Array(items.length);
  let cur = 0;
  await Promise.all(
    Array.from({ length: n }, async () => {
      while (true) {
        const i = cur++;
        if (i >= items.length) break;
        res[i] = await fn(items[i], i);
      }
    })
  );
  return res;
}

async function main() {
  mkdirSync("/home/z/my-project/scripts/data", { recursive: true });

  // ---- Nusuk ----
  console.log("== NUSUK Service Providers (Saudi MOHU platform) ==");
  const listHtml = await fetchText("https://umrah.nusuk.sa/ServiceProviders");
  const cards = listHtml ? parseNusukList(listHtml) : [];
  console.log(`kartu provider: ${cards.length}`);

  const providers: NusukProvider[] = await mapPool(cards, CONCURRENCY, async (c) => {
    const html = await fetchText(c.profileUrl);
    const extra = html ? parseNusukProfile(html) : {};
    return { name: c.name, profileUrl: c.profileUrl, city: "", phone: "", email: "", about: "", ...extra } as NusukProvider;
  });
  console.log(`profil sukses: ${providers.filter((p) => p.city || p.phone).length}/${cards.length}`);

  // ---- Pakistan ----
  console.log("== PAKISTAN MORA (mora.gov.pk) ==");
  let pkHtml: string;
  try {
    pkHtml = readFileSync("/home/z/my-project/scripts/mor-pk.html", "utf-8");
  } catch {
    pkHtml = (await fetchText(
      "https://www.mora.gov.pk/NewsDetail/YTExNjFkZTctZGE0OS00YWUyLTg5Y2YtOTc4ZWY3MmVhY2Yz"
    )) || "";
  }
  const pkNames = parsePakistan(pkHtml);
  console.log(`operator Pakistan: ${pkNames.length}`);

  const payload = {
    fetchedAt: new Date().toISOString(),
    nusuk: {
      source: "Nusuk Umrah Service Providers — platform resmi Kementerian Haji & Umrah Kerajaan Saudi (umrah.nusuk.sa)",
      count: providers.length,
      providers,
    },
    pakistan: {
      source: "Ministry of Religious Affairs & Interfaith Harmony Pakistan (mora.gov.pk) — Attested Umrah Tour Operators",
      count: pkNames.length,
      operators: pkNames,
    },
  };
  writeFileSync(OUT, JSON.stringify(payload, null, 2));
  console.log(`SIMPAN: ${OUT}`);
  console.log("Contoh Nusuk:", JSON.stringify(providers.slice(0, 3), null, 2));
  console.log("Contoh PK:", pkNames.slice(0, 5));
}

main().catch((e) => {
  console.error("FATAL", e);
  process.exit(1);
});
