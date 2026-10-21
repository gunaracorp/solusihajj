# Changelog — SolusiHajj Platform

<div align="center">

**SolusiHajj v2.0.0 — "Nexus Governance"**

</div>

> **Release authority:** SolusiHajj Release System (situs resmi: solusihajj.web.id)
> **Format:** [Keep a Changelog 1.1.0](https://keepachangelog.com/en/1.1.0/) · **Versioning:** [Semantic Versioning 2.0.0](https://semver.org)
> **Zona waktu:** Asia/Jakarta (WIB) · **Produk:** SolusiHajj — Marketplace Haji & Umrah "Amanah Anda, Aman."
> **Log kerja teknis lengkap:** [WORKLOG.md](WORKLOG.md) · **Versi runtime:** `curl /api/version`

---

## Kebijakan Versi (Versioning Policy)

| Segmen | Naik ketika | Contoh |
|---|---|---|
| **MAJOR** | Perubahan tata kelola besar, arsitektur fundamental, atau rilis tangga produk (R-ladder) | v1.x → v2.0.0 (aktifasi SolusiHajj Release System) |
| **MINOR** | Fitur baru yang tidak merusak (halaman baru, modul baru, mesin baru) | v1.2.0 (Matrix 9.450), v1.4.0 (Mesin Konten) |
| **PATCH** | Perbaikan bug, hardening, kebersihan lint tanpa fitur baru | v1.1.1 (Verifikasi Penuh) |

**Aturan wajib:** setiap perintah dan perubahan pada repo ini harus tercatat di bawah sebuah nomor versi.
Tidak ada perubahan tanpa versi. Detail pekerjaan per task ada di `WORKLOG.md`; ringkasan rilis ada di sini.

---

## [2.0.0] — 2026-10-22 — "Nexus Governance"

Rilis tata kelola: **SolusiHajj Release System diaktifkan untuk seluruh proyek.**
Mulai versi ini, setiap perintah dan perubahan wajib memiliki nomor versi, dan seluruh riwayat
pekerjaan dipetakan retroaktif ke SemVer (lihat riwayat di bawah).

### Added
- **Sistem versioning resmi**: file `VERSION` (root), `src/lib/version.ts` (sumber kebenaran runtime), kebijakan SemVer di dokumen ini.
- **`CHANGELOG.md`** (file ini) — format Keep a Changelog 1.1.0, seluruh riwayat rilis dipetakan retroaktif v1.0.0 → v2.0.0.
- **`WORKLOG.md`** — log kerja engineering distrukturkan ulang: 16 entri task diurutkan kronologis, setiap task diberi stempel versi `[vX.Y.Z]`, ditambah indeks rilis dan SOP rilis di kepala dokumen (nama lama `worklog.md` kini stub penunjuk).
- **Endpoint `GET /api/version`** — identitas rilis runtime (version, label, codename, buildDate, authority) untuk verifikasi pasca-deploy.
- **`GET /api/health`** kini membawa blok `version` (number, label, codename).
- **Stempel versi di footer situs**: "RILIS GUNARACORP v2.0.0 · SEMVER 2.0.0" — versi terlihat langsung oleh publik.
- Git tag rilis **`v2.0.0`** sebagai snapshot resmi.

### Changed
- `package.json`: nama proyek `nextjs_tailwind_shadcn_ts` → **`solusihajj`**, versi `0.2.1` → **`2.0.0`** (termasuk sinkronisasi `bun.lock`).
- `README.md` + `README_ID.md` ditulis ulang ke standar internasional: badge versi, angka aktual terverifikasi (13.984 URL sitemap, 3.966 organisasi, 112 artikel), peta fitur v1.2–v1.5, seksi SolusiHajj Release System, SOP rilis.

### Verified
- Sitemap live **13.984 URL**, DB **3.966 organisasi** (2.670 PPIU · 1.019 PIHK · 228 UTO · 47 USP · 2 BPW), `/api/health` 200, `/api/version` 200, lint 0 error.

---

## [1.5.0] — 2026-10-22 — "Kelas Dunia"

Header & navigasi dirancang ulang ke standar situs konsultan internasional (McKinsey/BCG-tier).

### Changed
- **Header "CHROME R2"** (`src/components/solusihajj/chrome.tsx`): utility bar kepercayaan (escrow syariah, verifikasi 5 lapis, 3.966 organisasi, telepon WA, switcher ID/EN/ع), logo wordmark + sub-label uppercase, satu CTA dominan (sebelumnya 5 tombol berebut).
- **Mega menu 3 grup** (Cari Paket / Direktori / Panduan): panel 880px terpusat, grid item 2 kolom dengan icon tile + deskripsi, kolom featured hijau-tua per grup, garis aksen emas, intent-delay 140ms.
- **Micro-interaction premium**: underline emas 2px `origin-left scale-x` pada hover/active, chevron rotate, CTA dengan ArrowRight shift.
- **Drawer mobile app-grade**: panel slide-in 400px + backdrop blur, accordion 3 grup tanpa Radix (0 risiko hydration), bottom bar CTA, ESC close, body scroll-lock, auto-close saat navigasi.

### Fixed
- Langsung `setState` dalam effect body dihapus (react-hooks) — sinkronisasi bayangan header murni via scroll listener.

### Added
- Skip link "Langsung ke konten utama" (`#konten-utama`), atribut `aria-expanded/haspopup/pressed` lengkap.

---

## [1.4.0] — 2026-10-22 — "Mesin Konten"

Article Content Engine: 4 → **112 artikel** E-E-A-T, plus perbaikan permanen hydration mismatch beranda.

### Added
- **108 artikel baru** (6 batch paralel `src/data/article-engine/batch-1..6.ts`, ±90.000 kata) dalam 6 kategori: Panduan Umrah, Manasik & Doa, Visa & Dokumen, Hotel & Transportasi, Biaya & Keuangan, Keluarga & Lansia + Musim & Waktu.
- **Rute `/artikel/kategori/[kategori]`** — 8 kategori, generateStaticParams, JSON-LD CollectionPage+ItemList+BreadcrumbList, silo antar kategori.
- Indeks `/artikel` upgrade: chips kategori ber-jumlah, preview 6 artikel/kategori, "Lihat semua N".
- 9 blok doa Arabic sahih (dengan latin + arti), 18+ tabel data, CTA whitelist 11 prefix rute.

### Fixed
- **Hydration mismatch beranda** (Radix `useId` SSR/client ID mismatch di FAQ Accordion) diganti native `<details>/<summary>` — 0 hydration warning, SEO-safe, tetap interaktif tanpa JS.

### Changed
- Taksonomi artikel seed di-remap ke 8 kategori terpadu; sitemap **13.868 → 13.984 URL** (+112 artikel, +8 kategori).

---

## [1.3.0] — 2026-10-22 — "Kartu Dinamis"

Dynamic OG Image System untuk seluruh portal: setiap halaman mendapat kartu share unik 1200×630.

### Added
- `/api/og` diperluas: param `k` (kicker), `rating` (★), `reviews`, `badge` (pill), `sub` — backward-compatible.
- **Kartu OG ter-wire ke 18+ tipe halaman**: paket, ppiu, kota, artikel, glosarium, maskapai, direktori, matrix 9.450, 11 indeks & legal, homepage.
- `src/lib/og.ts` — helper terpusat `ogImageUrl()`/`ogImage()` + konstanta `SITE` env-aware.
- **Image sitemap extensions**: 13.831 `image:loc` (bonus indeksasi Google Images).

### Fixed
- Glyph tofu ★/✓ di OG image → ikon SVG data-URI (bintang/check emas).
- `twitter:image` statis root dihapus — kini otomatis fallback ke `og:image` dinamis per halaman.

---

## [1.2.0] — 2026-10-22 — "Matrix 9.450"

Prioritas 1 + 3: matriks programmatic SEO kota×layanan terbesar di niche, plus mesin lead capture.

### Added
- **9.450 halaman matriks** `/layanan/[slug]/dari-[kota]` (210 layanan × 45 kota), ISR `revalidate 86400`, konten unik per kombinasi, silo 2 arah.
- **Lead capture engine**: model Prisma `ServiceLead` (ref `SH-LEAD-YYYY-XXXXX`), `POST /api/leads` (rate limit 5/menit/IP, honeypot, validasi telepon +62/08), komponen `lead-form.tsx` dengan kartu sukses nomor referensi.
- JSON-LD matriks: `Service(areaServed)`+`Offer`+`FAQPage`+`BreadcrumbList`+`Organization`.
- `generateMetadata` unik per kombinasi + OG image dinamis per halaman matriks.
- Internal linking: chip kota di `/layanan/[slug]`, chip layanan populer di `/kota/[slug]`.
- Sitemap **4.418 → 13.868 URL**.
- Infrastruktur: `scripts/daemon-next-dev.py` (dev server tahan-mati antar sesi).

### Verified
- 13 URL sweep 200, 4 uji negatif 404 benar, lead POST 201 `SH-LEAD-2026-00001`, browser E2E submit form → DB bertambah.

---

## [1.1.1] — 2026-10-22 — "Verifikasi Penuh"

Hardening & verifikasi menyeluruh (tanpa fitur baru).

### Fixed
- Lint dibersihkan: 177 error artefak scraping bawaan → di-ignore selektif; hasil **0 error** (1 warning pre-existing).
- `public/robots.txt` statis konflik dengan `app/robots.ts` (error 500) — dihapus.

### Verified
- Browser E2E 9+ alur (beranda, katalog, detail SEO, direktori DB nyata, mobile 390px); curl sweep 23 rute semua 200; dev.log 0 error.

---

## [1.1.0] — 2026-10-22 — "Gerbang SEO"

Fondasi SEO App Router: dari SPA 1-URL menjadi portal multi-ribu halaman.

### Added
- **Dataset 210 layanan** (14 kategori, `src/data/services/part-1..5.ts`) + **45 kota keberangkatan** (`src/data/cities.ts`).
- Rute SEO App Router: `/layanan` (+kategori +detail), `/kota` (+detail), `/paket/[slug]`, `/artikel/[slug]`, `/glosarium/[slug]`, `/maskapai/[slug]`, `/ppiu/[slug]`, `/direktori/[slug]` — semua dengan `generateMetadata`, canonical, OG, JSON-LD.
- 3 halaman legal: `/faq` (FAQPage JSON-LD), `/kebijakan-privasi` (UU PDP 27/2022), `/syarat-ketentuan` (10 pasal).
- Sitemap mega **4.418 URL** (force-dynamic, revalidate 86400) + robots.txt (host, sitemap, disallow /api/).
- Strip SEO footer SPA: 18 tautan chip ke rute nyata.

---

## [1.0.0] — 2026-10-22 — "Fondasi Amanah"

Baseline: instalasi penuh SolusiHajj R3 "AmanahEscrow Aktif + NurMatch AI" dan verifikasi kesehatan.

### Added
- Repo `prabudanling/solusihajj` terinstall penuh: SPA hash-route 25 view, Design System "Amanah", ID/EN/AR, dark + elder mode.
- Database nasional: **3.966 organisasi** (PPIU/PIHK/USP/UTO/BPW) dari 9+ sumber resmi (Kemenag, HIMPUH, SISKOPATUH, Nusuk, MORA Pakistan).
- AmanahEscrow state machine 40/40/20 dual-control + NurMatch AI (GLM-4, JSON-strict, fallback deterministik).
- Endpoint kesehatan hijau: `/`, `/sitemap.xml`, `/api/r2/*`, `/api/health` semua 200.

### Identified
- Kelemahan SEO utama: sitemap hanya 1 URL (SPA hash-route) → memicu roadmap v1.1.0 ke atas.

---

## Referensi

- **SemVer:** https://semver.org — **Keep a Changelog:** https://keepachangelog.com
- **WORKLOG.md** — ledger teknis per task (stempel versi per entri).
- **VERSION** — nomor versi kanonik (root). **`/api/version`** — versi runtime.
- Rilis mendatang (Prioritas 5, R4 Production) wajib masuk sebagai entri baru di dokumen ini.
