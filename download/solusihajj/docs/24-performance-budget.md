# 📄 DOKUMEN 25 — PERFORMANCE BUDGET
## Angka Keras, Bukan Perasaan — Kecepatan adalah Kepercayaan

**Project:** SolusiHajj (solusihajj.com) | **Versi:** 1.0 | **Status:** Locked | **Alat ukur:** Lighthouse mobile throttled + PageSpeed Insights + WebPageTest (3G Fast, Jakarta)

---

## 1. KENAPA TEGAS

Pengguna kita: Android 3–4GB RAM di jaringan berfluktuasi, memutuskan transaksi puluhan juta. Studi lintas industri konsisten: setiap detik tambahan memangkas konversi; halaman lambat dibaca otak sebagai "tidak bisa dipercaya". Karena itu budget ini bukan target理想, melainkan **gerbang QA yang gagal = tidak deploy** (Gate 4, NEXUS PROTOCOL).

## 2. BUDGET CORE WEB VITALS & METRIK

| Metrik | Target | Batas gagal |
|---|---|---|
| LCP (p75 mobile) | < 2,0s | > 2,5s |
| INP (p75) | < 150ms | > 200ms |
| CLS | < 0,05 | > 0,1 |
| TTFB (R1 shared host) | < 600ms | > 800ms |
| Lighthouse Perf (mobile) | ≥ 95 | < 90 |
| Lighthouse A11y / SEO / BestPractices | ≥ 95 / ≥ 95 / ≥ 95 | < 90 |
| First Load JS per route | < 120KB gzip | > 200KB |
| Total transfer halaman katalog | < 900KB | > 1,5MB |
| HTTP request halaman utama | < 30 | > 50 |

## 3. BUDGET ASET

| Aset | Aturan |
|---|---|
| Gambar | WebP (+AVIF prioritas R2); hero ≤ 120KB; kartu ≤ 80KB; srcset 4 ukuran; width/height wajib; maks 12 foto per halaman paket di fold pertama, sisanya lazy |
| Font | 2 keluarga (Plus Jakarta Sans + Amiri); subset latin + arab-essensial; woff2 self-host; `font-display: swap`; total ≤ 150KB |
| CSS | 1 file hasil Tailwind purge ≤ 30KB gzip |
| JS pihak ketiga | GA4 + (R2) gateway snap — total pihak-3 ≤ 2 domain; video embed lazy |
| Ikon | Lucide inline SVG (tree-shaken) — dilarang icon font |
| Animasi | transform/opacity saja (dok 18) — tidak memicu layout |

## 4. ATURAN TEKNIS PENGHAMBAT UTAMA

1. **R1 static export** — tidak ada server render per request; semua CDN-able. Data katalog dibundel statis; pencarian client-side ringan (filter array JSON, < 1.000 paket masih murah).
2. **Font** self-host + preload 2 file kritis (latin 400/700).
3. **Gambar hero** eager + fetchpriority high; sisanya lazy. Placeholder blur via CSS gradient token (bukan blurhash lib besar).
4. **Sticky & scroll listener** → rAF atau CSS sticky; tidak ada scroll hijack.
5. **R2:** streaming SSR + `next/dynamic` untuk komponen bawah fold (galeri, peta); query Prisma dengan select spesifik (jangan `findMany` tanpa where tanpa limit); indeks sesuai dok 12; cache HTTP: katalog s-maxage=300 stale-while-revalidate; API publik cache 60s.
6. **Third-party jalur kritis nol** — GA4 async + setelah interaksi pertama; gateway snap hanya di halaman pembayaran.

## 5. PENGUKURAN & TATA KELOLA

Setiap PR yang menyentuh halaman publik: Lighthouse CI pada 3 template (home, katalog, detail paket) — regression > 5 poin = perbaiki sebelum merge. Rilis: laporan lengkap masuk dok 28 (template Lighthouse Report) dengan tangkapan layar sebelum/sesudah. Monitor produksi: RUM via GA4 web-vitals event + Sentry performance; alarm: p75 LCP > 2,5s selama 2 hari → tiket P1. Budget dievaluasi per rilis — melonggarkan butuh Change Request tertulis dengan alasan bisnis, bukan "biar gampang".

## 6. KONTRAK TAMPILAN CEPAT (anti-CLS khusus)

Kuota & harga yang berubah (stok berkurang) WAJIB punya slot tinggi tetap; skeleton mengikuti bentuk final; iklan/banner tidak memasuki konten yang sudah dirender; font swap dengan size-adjust agar tidak loncat; angka count-up pakai `tabular-nums` (lebar digit konstan). CLS 0,05 adalah janji visual — jangan dikorbankan demi "makin hidup".
