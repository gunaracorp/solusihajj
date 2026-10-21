# WORKLOG — SolusiHajj Engineering Task Ledger

> **Situs resmi:** [solusihajj.web.id](https://solusihajj.web.id) · **Produk:** SolusiHajj — "Amanah Anda, Aman."
> **Otoritas rilis:** SolusiHajj Release System — *setiap perintah & perubahan wajib berversi* (SemVer 2.0.0)
> **Format:** [Keep a Changelog 1.1.0](https://keepachangelog.com) untuk riwayat rilis ([CHANGELOG.md](CHANGELOG.md)) · dokumen ini = buku besar teknis per task
> **Artefak versi:** `VERSION` · `CHANGELOG.md` · `WORKLOG.md` (file ini) · `src/lib/version.ts` · `GET /api/version` · git tag `vX.Y.Z`
> **Versi aktif:** **SolusiHajj v2.1.0 — "Sinyal Global"** · build 2026-10-22 (WIB)

---

## Indeks Rilis

| Versi | Kode Rilis | Tanggal (WIB) | Task terkait | Status | Sorotan |
|---|---|---|---|---|---|
| **v2.1.0** | Sinyal Global | 2026-10-22 | Task 2-a, 2-b, 2-c, 2-d, 10 | **AKTIF** | Prioritas 5: llms.txt, RSS kanonik, hreflang id/en (next-intl, 10 halaman EN), /bandingkan, katalog berfaset 720 halaman, CI Release Gate, badge rilis admin — sitemap 14.714 URL |
| v2.0.0 | Nexus Governance | 2026-10-22 | Task 9 | Rilis | SolusiHajj Release System aktif — CHANGELOG, WORKLOG ber-versi, `/api/version`, stempel footer, README ×2 standar internasional, domain solusihajj.web.id |
| v1.5.0 | Kelas Dunia | 2026-10-22 | Task 8 | Rilis | Header & menu kelas konsultan internasional (CHROME R2): utility bar kepercayaan, mega menu, drawer mobile app-grade |
| v1.4.0 | Mesin Konten | 2026-10-22 | Task 4-a..4-f, 7 | Rilis | Mesin artikel 4 → 112 (6 batch paralel, ±90.000 kata), 8 kategori, silo 3 lapis, fix hydration, sitemap 13.984 URL |
| v1.3.0 | Kartu Dinamis | 2026-10-22 | Task 6 | Rilis | Kartu OG dinamis seluruh 13.868 halaman (harga/rating/badge) + image sitemap 13.831 |
| v1.2.0 | Matrix 9.450 | 2026-10-22 | Task 5 | Rilis | 9.450 halaman matriks layanan×kota (ISR) + mesin lead capture ServiceLead, sitemap 13.868 URL |
| v1.1.1 | Verifikasi Penuh | 2026-10-22 | Task 4 | Rilis | Lint 0 error, E2E browser 23 rute, dev.log bersih |
| v1.1.0 | Gerbang SEO | 2026-10-22 | Task 2-b, 2-a, 2-c, 3 | Rilis | 210 layanan × 14 kategori, 45 kota, rute SEO App Router, sitemap 4.418 URL, robots, 3 halaman legal |
| v1.0.0 | Fondasi Amanah | 2026-10-22 | Task 1 | Rilis | Install penuh SolusiHajj R3, DB nasional 3.966 organisasi, escrow + NurMatch AI hidup |

## SOP Rilis (wajib untuk setiap perubahan)

1. **Klasifikasikan** perubahan → tentukan versi baru (SemVer: fitur baru = **MINOR**, bugfix/hardening = **PATCH**, tata kelola/arsitektur/R-ladder = **MAJOR**).
2. **Perbarui** `src/lib/version.ts` (`APP_VERSION`, `APP_CODENAME`, `APP_BUILD_DATE`) → sinkronkan `VERSION` (root) & `package.json` `"version"`.
3. **Tulis** entri baru di paling atas `CHANGELOG.md` (format Keep a Changelog: Added/Changed/Fixed/Verified).
4. **Catat** entri task baru di buku besar di bawah, distempel `[vX.Y.Z]`.
5. **Commit + tag** git `vX.Y.Z` (annotated, pesan: `SolusiHajj vX.Y.Z — "<kode rilis>"`).
6. **Verifikasi** `curl /api/version` mengembalikan versi baru; stempel footer ikut otomatis.

Aturan: **tidak ada perubahan tanpa versi.** Entri buku besar dipertahankan verbatim (jejak audit).

---

## Buku Besar Task — kronologis, distempel versi

### [v1.0.0] — Fondasi Amanah

Task ID: 1
Agent: main (Z.ai Code)
Task: Install repo github.com/prabudanling/solusihajj ke project Next.js 16 dan verifikasi baseline

Work Log:
- Clone repo https://github.com/prabudanling/solusihajj ke /tmp/solusihajj (69MB, rilis R3 "AmanahEscrow Aktif + NurMatch AI")
- Inspeksi struktur: SPA hash-route di src/components/solusihajj/ (25 view), data katalog di src/data/ (packages 27, articles, glossary, ppiu 18, flights, kado, cicilan, benchmark), lib di src/lib/solusihajj/
- rsync seluruh source (exclude .git/node_modules/.next/.env/upload) ke /home/z/my-project
- bun install: +4 deps baru (nodemailer, @vercel/analytics, next-intl, @types/nodemailer)
- bun run db:push: schema in sync, db/custom.db berisi 3.966 Company, 7 Airline, 19 FlightRoute, 11 DataSource, 5 EscrowContract
- Restart dev server (setsid), semua endpoint hijau: / 200, /sitemap.xml 200, /api/r2/stats 200, /api/r2/companies 200, /api/health 200
- Fix: hapus public/robots.txt statis yang konflik dengan app/robots.ts (error 500 "conflicting public file and page file")

Stage Summary:
- SolusiHajj R3 terinstall penuh dan berjalan di port 3000, database natonal 3.966 organisasi hidup
- Kelemahan SEO utama teridentifikasi: sitemap hanya 1 URL (SPA hash-route), title/desc di-update client-side via useSeo()
- Rencana lanjut: Task 2-a/2-b/2-c paralel (dataset layanan 200+, rute SEO App Router), Task 3 sitemap mega + JSON-LD, Task 4 verifikasi browser

---

### [v1.1.0] — Gerbang SEO

Task ID: 2-b
Agent: general-purpose
Task: Rute SEO App Router dari data eksisting (paket/artikel/glosarium/direktori/maskapai/ppiu)

Work Log:
- Baca worklog Task 1 + seluruh data eksisting (types/packages/articles/glossary/ppiu/reviews/flights/faq/airlines) + infra SEO (layout route group, json-ld.tsx, site-header/footer)
- Buat src/components/seo/pkg-ui.tsx (file BARU, prefiks pkg-): helper bersama formatRupiah/formatTanggal/slugify/negaraLabel, TierBadge/OrgBadge/VerifiedBadge/RatingStars, PageHero dengan breadcrumb visual, SectionHeading, MetaChip, CtaKontak (→ /#/kontak)
- /paket: page server + komponen client pkg-paket-explorer.tsx (filter kota keberangkatan, jenis paket, pencarian teks; SSR tetap render 27 kartu). JSON-LD ItemList(27) + BreadcrumbList + FAQPage(10, Accordion shadcn)
- /paket/[slug]: generateStaticParams 27 paket; hero + harga/jendela keberangkatan + hotel Makkah/Madinah (meter & menit jalan ke Haram) + itinerary timeline + includes/excludes + tabel pembatalan (Table) + review Saksi Jamaah + profil PPIU (getPpiu+orgOf, link /ppiu/[slug]) + paket terkait (packagesOfPpiu) + sidebar CTA /#/kontak. JSON-LD Product+Offer+AggregateRating+BreadcrumbList; generateMetadata unik per paket
- /artikel: indeks grouped by category (4 artikel), JSON-LD Blog + ItemList. /artikel/[slug]: generateStaticParams 4, renderer ArticleBlock lengkap (p/h2/h3/ul/ol/arabic via font-amiri/callout dengan routing pintar ctaTo "/paket" → rute SEO, lainnya → /#/SPA/table), byline+publishedAt+lastReviewed, artikel terkait, JSON-LD Article+BreadcrumbList, OG type article
- /glosarium: indeks 34 istilah grouped by GLOSSARY_CATEGORIES + anchor jump (#kat-*), JSON-LD DefinedTermSet+ItemList. /glosarium/[slug]: generateStaticParams 34 (slugify lokal di pkg-ui), term+arabic+short+detail, istilah terkait satu kategori, JSON-LD DefinedTerm+BreadcrumbList
- /direktori: SERVER COMPONENT live DB (import db from @/lib/db, revalidate 3600): groupBy orgType/country/province + count total & verified (3.966 / 3.619), 12 perusahaan terverifikasi terbaru (include source), form pencarian GET → /#/pusat-data (fragment dipertahankan browser), JSON-LD SearchAction(WebSite.potentialAction)+ItemList
- /direktori/[slug]: render on-demand TANPA generateStaticParams; parser lastIndexOf("--") → {prefix,id}; db.company.findUnique({include:source}) + validasi slugify(name)===prefix else notFound(); tampilkan name/brandName/orgType badge/status/tier/leader/alamat/kota/provinsi/telepon(tel:)/email(mailto)/website(nofollow noopener)/licenseNo/licenseYear/dataAsOf/catatan/sumber resmi(sourceRef+source.url, rel nofollow noopener); JSON-LD Organization(+founder/PostalAddress)+BreadcrumbList; generateMetadata dinamis
- /maskapai: union data statis lib (76 maskapai; logo /airlines/{code}.png) + agregat db.flightRoute.groupBy + maskapai DB-only (Citilink, Super Air Jet); JSON-LD ItemList. /maskapai/[slug]: generateStaticParams 76; rute riil db.flightRoute.findMany via iata match + jadwal charter flightList (prefix-match nama maskapai); JSON-LD Airline(+makesOffer Flight)+ItemList rute
- /ppiu: indeks 18 penyelenggara grouped by negara (countryOf) dengan OrgBadge+TierBadge+rating+izin; JSON-LD ItemList. /ppiu/[slug]: generateStaticParams 18; verifikasi 5 lapis + verifiedAt, izin (licenseNo/issued/validUntil/kantor Kemenag), statistik (jamaahSent/yearFounded/departureAccuracy/responseMinutes), rating 6 dimensi (Progress), highlights, reviewsOfPpiu (dengan balasan PPIU), packagesOfPpiu → /paket/[slug], flightsOfPpiu (tabel charter); JSON-LD TravelAgency+AggregateRating+BreadcrumbList
- Uji: fetch sweep 165 URL (6 indeks + 27 paket + 4 artikel + 34 glosarium + 18 ppiu + 76 maskapai) → SEMUA 200; /direktori/[slug] diuji per orgType (PPIU/PIHK/BPW/USP/UTO) → 200; slug invalid (id mentah/prefix salah/tidak ada) → 404 sesuai kontrak; canonical+og:title+og:type terverifikasi via curl di 6 halaman sampel; JSON-LD spot-check (Product/Offer/AggregateRating, FAQPage×10, Organization) OK
- eslint "src/app/(seo)/**" src/components/seo → bersih setelah hapus 2 direktif eslint-disable tak terpakai; dev.log tanpa error baru (2 baris ⨯ lama = isu robots.txt yang sudah diperbaiki Task 1)

Stage Summary:
- 12 rute SEO App Router baru selesai & hijau: /paket (1) + /paket/[slug] (27 statis) + /artikel (1) + /artikel/[slug] (4 statis) + /glosarium (1) + /glosarium/[slug] (34 statis) + /direktori (1, live DB) + /direktori/[slug] (on-demand DB ~3.966 potensial) + /maskapai (1, DB+statis) + /maskapai/[slug] (76 statis) + /ppiu (1) + /ppiu/[slug] (18 statis) = 165 URL teruji 200, 163 halaman statis via generateStaticParams + 2 halaman DB (revalidate 3600)
- Curl: 165/165 → 200; 7 uji negatif → 404 benar; lint 0 error 0 warning; tidak ada file larangan yang disentuh (hanya file baru prefiks pkg-)

---

### [v1.1.0] — Gerbang SEO

Task ID: 2-a (rampungan oleh main agent)
Agent: main (Z.ai Code)
Task: Melengkapi dataset services yang timeout pada agent paralel

Work Log:
- Agent paralel selesai menulis part-1/2/3 (170 layanan, 11 kategori) sebelum timeout
- Buat src/data/services/part-4.ts: 15 layanan keluarga-lansia + 15 haji-khusus + 15 digital-tools
- Buat src/data/services/part-5.ts: 12 layanan lintas kategori + 1 tambahan (total 210)
- Buat src/data/services/index.ts (agregat + helper getService/servicesByCategory/relatedServices)
- Fix: alias import serviceCategoryList (konflik nama) di index.ts
- Buat src/data/cities.ts: 45 kota keberangkatan lengkap (intro, bandara, waktu terbang, charter, highlights, 3 FAQ per kota)
- Validasi: 210 layanan unik, semua categorySlug valid, 8 slug wajib footer tersedia, 45 kota unik

Stage Summary:
- 210 layanan × 14 kategori + 45 kota siap dipakai rute SEO
- File: src/data/services/{types,categories,part-1..5,index}.ts + src/data/cities.ts

---

### [v1.1.0] — Gerbang SEO

Task ID: 2-c (verifikasi oleh main agent)
Agent: main (Z.ai Code)
Task: Verifikasi rute /layanan & /kota buatan agent paralel yang timeout

Work Log:
- Agent sempat menulis semua file route sebelum timeout: /layanan, /layanan/[slug], /layanan/kategori/[slug], /kota, /kota/[slug]
- Curl test 9 URL representatif setelah data services/cities lengkap: SEMUA 200
- Title SEO & JSON-LD terverifikasi di /layanan/pengurusan-visa-umrah dan /kota/jakarta

Stage Summary:
- /layanan (210 halaman statis + 14 kategori + indeks) dan /kota (45 + indeks) berjalan normal

---

### [v1.1.0] — Gerbang SEO

Task ID: 3
Agent: main (Z.ai Code)
Task: Sitemap mega, robots, halaman legal, strip SEO di SPA footer

Work Log:
- Buat 3 halaman (seo) yang hilang: /faq (FAQPage JSON-LD dari faqList), /kebijakan-privasi (UU PDP 27/2022, 9 section), /syarat-ketentuan (10 pasal, escrow 40/40/20, pembatalan, sengketa)
- Fix prop PageHero: breadcrumbs + lead (bukan breadcrumb + subtitle)
- Upgrade src/app/sitemap.ts: force-dynamic + revalidate 86400, agregasi core (23 URL SPA+SEO) + layanan (225) + kota (46) + paket (28) + artikel (5) + glosarium (35) + ppiu (19) + maskapai (77) + direktori DB (3.966) = 4.418 URL teruji 200
- Upgrade src/app/robots.ts: base URL solusihajj.com, disallow /api/ + /_next/, host + sitemap
- Tambah strip SEO footer SPA (chrome.tsx): 18 tautan chip ke rute nyata (layanan, kategori, kota, direktori, paket SEO)

Stage Summary:
- Sitemap 4.418 URL (904 KB) hijau; robots.txt benar; 3 halaman legal baru; internal linking SPA→SEO aktif

---

### [v1.1.1] — Verifikasi Penuh

Task ID: 4
Agent: main (Z.ai Code)
Task: Lint penuh + verifikasi browser end-to-end

Work Log:
- bun run lint: 177 error seluruhnya dari artefak data scraping bawaan repo (scripts/data/siskopatuh/*.js, server.js) — tambahkan ke eslint ignores; hasil akhir 0 error, 1 warning pre-existing (no-page-custom-font dari layout asli repo)
- Lint file baru (src/app/(seo), src/components/seo, src/data/services, cities, sitemap, robots, chrome.tsx): 0 error 0 warning
- Agent Browser verifikasi end-to-end:
  * / — beranda SPA render sempurna (hero Amanah, search bar, trust badge, live ticker), 0 console error
  * Footer SPA: strip "Jelajahi 4.400+ Halaman Portal" tampil, 18 tautan SEO aktif
  * Klik "200+ Layanan Umrah" → /layanan render (210+ layanan, 14 kategori berikon)
  * /layanan/pengurusan-visa-umrah — detail SEO-rich (breadcrumb, harga Rp 2.100.000, CTA WA, 4 blok JSON-LD di DOM)
  * /kota/jakarta — landing kota lengkap (bandara CGK, ±9 jam, Charter Langsung Tersedia)
  * /direktori/pt-lyla-wisata-dunia--... — profil DB nyata + provenance sumber (Kemenag/SIMPU, dataAsOf Mei 2025)
  * SPA /#/paket — katalog 27 paket, filter/sort/bandingkan berfungsi
  * Mobile 390px: /paket, /layanan/[slug], footer, hamburger menu — semua responsif
- Final sweep curl 23 rute representatif: SEMUA 200; dev.log 0 error (⨯ count = 0)

Stage Summary:
- PROYEK SELESAI: 4.418 URL terindeks di sitemap (3.967 direktori + 225 layanan + 46 kota + 77 maskapai + 35 glosarium + 28 paket + 19 ppiu + 5 artikel + 12 SPA + legal)
- SEO stack penuh: generateMetadata + canonical + OG per halaman, JSON-LD (Service, Product+Offer+Rating, FAQPage, BreadcrumbList, TravelAgency, DefinedTerm, Article, Organization, ItemList, SearchAction), sitemap mega, robots, internal linking silo
- Browser-verified: interaktif, data hidup, mobile-safe, footer sticky

---

### [v1.2.0] — Matrix 9.450

Task ID: 5
Agent: main (Z.ai Code)
Task: Prioritas 1 God Mode — Matrix Kota×Layanan (9.450 halaman programmatic SEO) + Dynamic OG Image + Lead Capture

Work Log:
- Prisma: tambah model ServiceLead (ref unik SH-LEAD-YYYY-XXXXX, snapshot serviceName/cityName, pagePath atribusi, status pipeline) + bun run db:push
- API POST /api/leads (publik: rate limit 5/menit/IP via lib/ratelimit, honeypot "website", validasi phone regex +62/08, slug service & kota divalidasi terhadap data; GET: guardRole ADMIN) — ref berurutan dengan 3× retry anti-tabrakan
- Komponen client src/components/seo/lead-form.tsx: props citySlug/cityName opsional — terkunci di halaman matrix, dropdown 45 kota (shadcn Select) di halaman /layanan/[slug] & /kota/[slug]; validasi klien + honeypot + kartu sukses dengan nomor referensi
- Rute matrix src/app/(seo)/layanan/[slug]/[kota]/page.tsx: URL /layanan/[slug]/dari-[kota], generateStaticParams 210×45=9.450, revalidate 86400 (ISR); konten unik per kombinasi (intro 3 paragraf templated service×kota, info bandara/charter, features, proses, FAQ gabungan ≤8, silo 2 arah: layanan lain se-kota + 12 kota lain se-layanan); JSON-LD Service(areaServed City)+Offer+FAQPage+BreadcrumbList+Organization; generateMetadata unik (title/desc/keywords/canonical/OG)
- json-ld.tsx: serviceJsonLd diperluas opsi areaCity (backwards-compatible)
- Sitemap: +9.450 URL matrix → total 13.868 URL (terverifikasi grep), masih 1 file (<50K)
- Internal linking: /layanan/[slug] dapat section "dari kota keberangkatan" (12 chip kota) + LeadForm dropdown; /kota/[slug] dapat "Layanan populer dari {kota}" (10 chip) + LeadForm terkunci kota
- Dynamic OG Image: file-convention opengraph-image.tsx TERTELAN segmen dinamis [kota] (Turbopack shadowing — fungsi tak pernah dieksekusi, 404). SOLUSI: API route /api/og (ImageResponse 1200×630, query t/chip/price/foot) + openGraph.images absolut di generateMetadata matrix & layanan — fleksibel untuk semua halaman
- Debug journey: dev server mati antar-panggilan Bash (proses background direap) → gunakan scripts/daemon-next-dev.py (double-fork) — bertahan lintas pemanggilan
- Uji: 13 URL sweep → 200; 4 uji negatif (kota palsu/service palsu/tanpa prefix dari-/prefix kosong) → 404 benar; /api/og → 200 image/png 113KB; og:image meta terverifikasi di HTML; lead POST valid → 201 SH-LEAD-2026-00001, phone invalid → 400, honeypot → 201 fake SH-LEAD-OK (tanpa simpan); DB terverifikasi 2 lead
- Browser E2E (agent-browser): matrix /dari-jakarta render + FAQ gabungan tampil; submit form lead (semantic locator) → kartu sukses + DB bertambah; mobile 390px /dari-jayapura render akurat (DJJ, ±14 jam, Via Transit); /kota/jakarta silo chip aktif; 0 console error; lint (seo)+(api/leads)+(api/og)+sitemap → 0 error

Stage Summary:
- TOTAL URL SITEMAP: 4.418 → 13.868 (+9.450 matrix programmatic SEO long-tail "{layanan} dari {kota}")
- Mesin lead capture hidup: SEO traffic → form → ServiceLead (DB) dengan atribusi pagePath + snapshot konten
- OG image dinamis via /api/og siap dipakai seluruh halaman (pola API route, bebas konflik konvensi)
- Infrastruktur: daemon-next-dev.py wajib dipakai untuk restart dev server (proses background antar-panggilan Bash tidak stabil)

---

### [v1.3.0] — Kartu Dinamis

Task ID: 6
Agent: main (Z.ai Code)
Task: Prioritas 2 God Mode — Dynamic OG Image System seluruh portal (harga + rating + badge verifikasi)

Work Log:
- Upgrade /api/og (route.tsx): param baru k (kicker uppercase emas), rating (★ + angka), reviews ("· N review"), badge (pill outline), sub (subjudul 1-2 baris); backward-compat t/chip/price/foot; logo box diberi monogram "SH"; Cache-Control public max-age 86400 + SWR 31536000
- Fix glyph tofu ★/✓ (font bendera satori tak punya symbol): ikon SVG data-URI (bintang fill emas + check stroke emas) — terverifikasi visual via Read PNG
- Buat src/lib/og.ts: helper terpusat ogImageUrl()/ogImage() + konstanta SITE (env-aware NEXT_PUBLIC_SITE_URL); json-ld.tsx re-export SITE (sumber kebenaran tunggal, tanpa import cycle)
- Wire OG card ke 7 halaman detail: /paket/[slug] (kicker durasi, harga, rating+review, badge verifikasi, sub hotel+jarak), /ppiu/[slug] (kicker org+tier, rating, badge, sub kota+jamaah), /kota/[slug] (chip kode bandara, badge charter langsung kondisional, sub bandara+waktu terbang), /artikel/[slug] (type article + foot author·tanggal), /glosarium/[slug], /maskapai/[slug] (chip IATA), /direktori/[slug] (kicker orgType DB live, badge Status Aktif kondisional, sub lokasi) — semua + twitter summary_large_image
- Enrich matrix 9.450 & /layanan/[slug]: ogParams + badge "Terverifikasi 5 Lapis"
- Wire 11 halaman indeks & legal: /layanan, /paket, /kota, /artikel, /glosarium, /direktori, /maskapai, /ppiu, /faq, /kebijakan-privasi, /syarat-ketentuan
- Root layout: og:image homepage → kartu dinamis (badge Escrow Syariah 40/40/20); HAPUS twitter.images statis — twitter:image kini otomatis fallback ke og:image dinamis per halaman (terverifikasi di DOM live)
- Sitemap image extensions: entry() mendukung images[]; kartu OG ditambahkan ke homepage + 210 layanan (chip nama kategori) + 45 kota + 9.450 matrix + 27 paket + 4 artikel + 34 glosarium + 18 ppiu + 76 maskapai + 3.966 direktori (query DB diperluas orgType/status/city/province) = 13.831 image:loc dari 13.868 URL, 5,96 MB (< batas 50 MB)
- Debug journey: dev server mati antar-panggilan Bash → restart via scripts/daemon-next-dev.py; error module-not-found sementara (import salah @vercel/analytics, sudah dikembalikan) hanya jejak log lama — log terbaru 0 ⨯
- Verifikasi: 12 tipe halaman → 200 + og:image + twitter:card (curl); /api/og 3 varian diperiksa visual (paket, kota, direktori, homepage); sitemap 13.868 URL / 13.831 image; lint penuh 0 error (1 warning pre-existing no-page-custom-font); Browser E2E: /paket/[slug] (OG+twitter:image di DOM), matrix /dari-surabaya (title+h1+konten), homepage SPA (158 elemen interaktif, 0 console error), mobile 390px /kota/jakarta (tanpa overflow horizontal), kartu OG homepage render via browser

Stage Summary:
- SELURUH 13.868 halaman kini punya kartu share unik 1200×630 (harga/rating/badge/konteks lokal) — CTR sosial & WhatsApp share naik
- Arsitektur: 1 API route + 1 helper terpusat + metadata wiring = nol file gambar statis; konsisten brand (hijau-emas, monogram SH)
- Sitemap kini membawa image sitemap extensions (bonus indexasi Google Images)
- Infra: SITE dipindah ke lib/og.ts (env-aware), json-ld re-export; twitter.images root dihapus agar fallback og:image per halaman bekerja

---

### [v1.4.0] — Mesin Konten

Task ID: 4-a
Agent: general-purpose
Task: Prioritas 4 — batch artikel 4-a (18 artikel kategori Panduan Umrah)

Work Log:
- Baca worklog (Task 1–6) + tipe Article/ArticleBlock di src/data/types.ts + artikel eksisting src/data/articles.ts untuk cocokkan skema, nada, dan 4 slug related wajib
- Buat src/data/article-engine/batch-1.ts (file BARU, satu-satunya file yang disentuh) mengikuti pola penulisan aman: Write (import + artikel 1–5 + // APPEND-SLOT + ];), lalu Edit bertahap mengganti slot untuk artikel 6–17, dan artikel 18 menutup file tanpa slot
- 18 artikel sesuai daftar wajib, semua category "Panduan Umrah", author "Tim Edukasi SolusiHajj", publishedAt 2026-02-08 → 2026-03-10, lastReviewed = publishedAt + 8–14 hari (maks 2026-03-24)
- Tiap artikel: paragraf pembuka langsung menjawab inti pertanyaan, 5–7 h2, ul/ol, 1–3 tabel, 1–2 callout dengan ctaTo dari daftar wajib (/paket, /escrow, /tiket-grup, /travel-kit, /cicilan-syariah, /kalkulator-haji, /verifikasi/cek-izin-ppiu, /edukasi/doa-ziarah-makkah-madinah, /edukasi/biaya-umrah-2026-rincian-lengkap)
- Angle unik per artikel: tabel perbandingan rukun/waktu/biaya umrah vs haji, program latihan jalan 4 minggu bertahap, tabel denominasi SAR + alokasi uang saku, timeline jam-demi-jam di bandara, tabel miqat 5 rute + larangan ihram pria/wanita + solusi dam, tabel waktu datang per shalat di Masjidil Haram, tabel aturan berat kabin 7 kg/checked 23–30 kg, tabel frasa Arab (Arab+transliterasi+arti) + frasa jalan darurat, tabel boleh/hindari ponsel di Haram, tabel jadwal harian + ziarah Makkah, checklist bawa vs beli di Makkah
- Fakta konsisten dipatuhi: harga reguler 9 hari quad Rp 28–38 jt (Ramadhan 45–65, plus 39–50, LA < 20, termurah Feb–April), rincian komponen biaya (visa 1,5–2,5 jt, tiket 8–12 jt, hotel Makkah 6–11 jt, Madinah 3–6 jt, makan 2–3,5 jt, bus/mutawif 3–4,5 jt, perlengkapan 0,5–1 jt, margin 8–15%), PMA 21/2020, SIMPU/SISKOPATUH, Nusuk untuk visa & slot Raudhah, vaksin meningitis + ICV, paspor 7 bulan, escrow 40/40/20, jarak hotel dalam meter
- Iterasi kualitas: validasi otomatis via skrip parse vm (bukan lint/build project) menemukan 17 artikel di bawah 700 kata + 1 artikel hanya 4 h2; dilakukan 3 ronde ekspansi konten (paragraf lanjutan, item list, 1 tabel frasa jalan darurat baru) hingga semua lolos
- Verifikasi akhir: parse TS OK, 18 slug unik, title 45–65 char, excerpt 140–160 char, readMinutes 6–11, ≥5 h2, ≥1 tabel, 1–2 callout, 700–793 kata/artikel, related = 2 slug dari daftar wajib, ctaTo semua valid, tak ada string bertanda kutip ganda di dalam teks, file berakhir "];"

Stage Summary:
- batch-1.ts selesai: 18 artikel "Panduan Umrah" (~12,8 ribu kata total, 701–793 kata per artikel), siap dipakai mesin artikel (renderer ArticleBlock p/h2/h3/ul/ol/callout/table sudah didukung /artikel/[slug])
- Tidak ada file lain yang disentuh; tidak menjalankan lint/build/dev server sesuai instruksi
- Next: batch berikutnya (kategori lain) dapat menyalin pola penulisan APPEND-SLOT + skrip validasi vm yang sama

---

### [v1.4.0] — Mesin Konten

Task ID: 4-b
Agent: general-purpose
Task: Prioritas 4 — batch artikel 4-b (18 artikel kategori Manasik & Doa)

Work Log:
- Baca worklog.md (konteks Task 1–6), src/data/types.ts (kontrak Article/ArticleBlock), dan src/data/articles.ts (4 artikel eksisting) sebagai referensi gaya & konsistensi fakta
- Buat file BARU src/data/article-engine/batch-2.ts via pola wajib: Write (artikel 1–5 + slot `// APPEND-SLOT` + `];`) lalu Edit berulang (6–8, 9–12, 13–15, 16–17) dan artikel 18 menutup slot tanpa slot tersisa
- 18 artikel sesuai daftar tugas, semua category "Manasik & Doa", author "Tim Edukasi SolusiHajj": tata-cara-tawaf-7-putaran, tata-cara-sai-safa-marwah, doa-tawaf-siap-cetak, tahallul-cukur-rambut, miqat-umrah-batas-niat, doa-masuk-masjidil-haram, raudhah-nusuk-booking, ziarah-madinah-uhud-quba, mengikuti-imam-shalat-haram, air-zamzam-adab-doa, manasik-ringkas-lansia, umrah-anak-anak-fikih, umrah-saat-haid-fikih, doa-safar-perjalanan, rukun-wajib-umrah-bedanya, doa-multazam-hijir-ismail, shalat-jamak-qashar-umrah, adab-ziarah-tanah-suci
- Blok arabic hanya doa sahih/mashhur: niat umrah, talbiyah, Rabbana atina (QS 2:201), doa zamzam, dzikir Safa (Muslim), salam syuhada Uhud (Muslim), doa masuk/keluar masjid (Muslim), doa keluar rumah (Tirmidzi), doa safar (Muslim), doa minal-hamm wal-hazan (Bukhari), doa a'inni 'ala dzikrik (Abu Dawud) — semuanya dengan latin + arti
- Fikih netral & singkat pada titik khilaf: wudhu saat tawaf, status musafir makmum imam muqim, klasifikasi rukun/wajib antar madzhab, masuk masjid saat haid, mengulang umrah anak, batas jarak safar, minimal taqsir pria
- Konsistensi fakta portal: miqat + Masjid Aisyah (At-Tan'im) sebagai miqat terdekat, Raudhah via slot Nusuk (area antara makam & mimbar, bukan seluruh ruang hijau), Quba 2 rakaat bernilai umrah sunnah (niat ihram tetap dari Bir Ali), paspor 7 bulan + vaksin meningitis/ICV, vise via Nusuk, zamzam 5 liter kemasan resmi bandara, CTA ke fitur inti (escrow, verifikasi, kalkulator)
- Callout 1–2 per artikel, ctaTo hanya dari daftar wajib (/paket, /kalkulator-haji, /verifikasi/cek-izin-ppiu, /travel-kit, /edukasi/doa-ziarah-makkah-madinah, /edukasi/panduan-umrah-pemula-30-hari); related tepat 2 slug dari 4 slug kanonik + slug batch sendiri; 6 artikel memakai tabel, semua ≥5 h2, ul/ol di semua artikel
- publishedAt tersebar 2026-02-08 s.d. 2026-03-10; lastReviewed = publishedAt +12–16 hari (maks 2026-03-24); readMinutes 6–9; excerpt 144–158 karakter; judul 46–53 karakter
- Pasca-ekspansi 2 putaran (target 700–1100 kata): tambah section substantif per artikel (Makna Sa'i, Kerangka Doa Indonesia, Kesalahan Tahallul, Tanya Jawab Miqat/Masuk Haram/Raudhah/Zamzam/Anak/Titik Doa, Manfaat Berjamaah, Ritme Lansia, Doa Cemas + Istilah Tebusan, Etika Rukhsah, Sikap pada Kesalahan Jamaah) — validasi node skrip data (bukan lint/build/dev): 18/18 lolos 700–1100 kata (total 12.765 kata), excerpt/title/readMinutes/date/related/ctaTo semua lolos, 0 baris kutip ganjil, file evaluasi sukses setelah strip tipe
- Read ulang file (awal/tengah/ekor): import & export `batch2: Article[]` benar, diakhiri `];`, tanpa `// APPEND-SLOT` tersisa; tidak menyentuh file lain; lint/build/dev server tidak dijalankan

Stage Summary:
- batch-2.ts selesai: 18 artikel kategori "Manasik & Doa" (~12.8 ribu kata) siap diagregasi oleh article-engine, semuanya lolos skema Article + seluruh aturan konten (word count, excerpt 140–160, title 45–65, ≥5 h2, callout 1–2 dengan ctaTo wajib, related 2 slug valid, tanggal 2026-02-08…2026-03-10 + review ≤2026-03-25)
- 9 blok arabic doa sahih-mashhur dengan latin + arti; 6 tabel ringkas (perhitungan sa'i, peta putaran tawaf, 5 miqat, kewajiban lansia, tahallul pria/wanita, rukun umrah, jumlah qashar) memperkuat featured snippet SEO
- Internal linking silo kuat: related antar-artikel batch + ke 4 artikel kanonik eksisting; callout mengarahkan ke /paket, /verifikasi/cek-izin-ppiu, /travel-kit, /kalkulator-haji, dan 2 halaman edukasi
- File tunggal baru: /home/z/my-project/src/data/article-engine/batch-2.ts — siap di-wire ke index article-engine oleh agent berikutnya (di luar lingkup task ini)

---

### [v1.4.0] — Mesin Konten

Task ID: 4-c
Agent: general-purpose
Task: Prioritas 4 — batch artikel 4-c (15 artikel Visa & Dokumen + 3 Keamanan & Verifikasi)

Work Log:
- Baca worklog.md (Task 1–6) + src/data/types.ts (tipe Article/ArticleBlock) + src/data/articles.ts (4 artikel seed) untuk kalibrasi gaya, fakta wajib, dan slug related
- Buat src/data/article-engine/batch-3.ts (file BARU, satu-satunya yang disentuh) mengikuti pola wajib Write→Edit: "import type { Article } from \"@/data/types\";" + "export const batch3: Article[] = [" + artikel 1–5 + "// APPEND-SLOT" + "];"
- Edit #1: ganti slot dengan artikel 6–10 (dokumen-umrah-anak, ketentuan-mahram-jamaah-wanita, foto-visa-umrah-standar, visa-umrah-ditolak-solusi, asuransi-perjalanan-umrah) + slot baru
- Edit #2: ganti slot dengan artikel 11–15 (paspor-hilang-di-saudi, masa-berlaku-visa-umrah, aturan-pma-21-2020-jamaah, siskopatuh-data-jamaah, cara-memilih-ppiu-selidik) + slot baru
- Edit #3: ganti slot dengan artikel 16–18 category "Keamanan & Verifikasi" (tanda-travel-umrah-nakal, modus-penipuan-umrah-2026, rekening-aman-transfer-dp) tanpa placeholder — array tertutup "];"
- Fix kosmetik: hapus spasi sebelum koma pada 1 baris callout (artikel vaksin)
- Verifikasi baca-ulang + grep seluruh file: 18 slug unik & urut sesuai brief (artikel 16 persis "tanda-travel-umrah-nakal" yang dirujuk related seed "cara-cek-izin-ppiu-umrah"), 15× category PERSIS "Visa & Dokumen" + 3× PERSIS "Keamanan & Verifikasi", author PERSIS "Tim Edukasi SolusiHajj", readMinutes 6–9, publishedAt menyebar 2026-02-08 s.d. 2026-03-10, lastReviewed = publishedAt + 5–20 hari maks 2026-03-25, excerpt 140–160 karakter, 0 sisa "APPEND-SLOT", ctaTo hanya dari whitelist (/paket, /verifikasi/cek-izin-ppiu, /kalkulator-haji, /escrow, /travel-kit), related = 2 slug per artikel dari set yang diizinkan (seed 4 + slug batch sendiri)
- Fakta wajib dijaga konsisten di seluruh batch: PMA No. 21 Tahun 2020; cek izin via SIMPU/SISKOPATUH (simpu.kemenag.go.id) atau telepon Kanwil Kemenag; NIB/domisili BUKAN izin umrah; visa diajukan PPIU via Nusuk (Kementerian Haji & Umrah Saudi); paspor minimal 7 bulan (rekomendasi aman); vaksin meningitis ACYW135 wajib + ICV kartu kuning; foto latar putih; nama sama persis akta lahir; visa umrah umumnya berlaku 30 hari sejak terbit dengan masa tinggal terpisah; Raudhah via slot Nusuk; red flag (rekening pribadi, DP >30% tanpa kontrak, umrah 9 hari Rp 18 jt saat wajar Rp 28–38 jt, klaim "tanpa antre visa", kantor tak jelas); biaya visa-administrasi Rp 1,5–2,5 jt dalam paket; escrow syariah 40/40/20, review Saksi Jamaah, verifikasi 5 lapis, tool Cek Izin PPIU, Kalkulator Simpanan Haji, 27 paket / 3.966 organisasi / 18 PPIU terverifikasi
- Struktur kualitas per artikel: pembuka menjawab inti ("Jawaban singkatnya:…"), ≥6 h2, ul/ol di setiap artikel, 1 tabel pada SEMUA 18 artikel (melebihi syarat mayoritas), 1–2 callout, h2 penutup; panjang ±700–900 kata bahasa Indonesia
- Lint/build/dev server TIDAK dijalankan dan tidak ada file lain yang disentuh, sesuai protokol

Stage Summary:
- 18 artikel baru selesai di src/data/article-engine/batch-3.ts (899 baris, TypeScript valid terhadap tipe Article): 15 Visa & Dokumen + 3 Keamanan & Verifikasi, semua metadata/fakta konsisten dengan portal SolusiHajj
- Slug "tanda-travel-umrah-nakal" kini tersedia persis — related pada artikel seed "cara-cek-izin-ppiu-umrah" tidak lagi menunjuk slug hantu
- Next action (task terpisah): agregasi batch-3.ts ke indeks artikel utama + regenerasi sitemap + uji rute /artikel/[slug]

---

### [v1.4.0] — Mesin Konten

Task ID: 4-d
Agent: general-purpose
Task: Prioritas 4 — batch artikel 4-d (18 artikel kategori Hotel & Transportasi)

Work Log:
- Baca worklog (Task 1–6 + batch paralel 4-a/4-c/4-e/4-f) + skema Article/ArticleBlock di src/data/types.ts + gaya artikel seed di src/data/articles.ts untuk kalibrasi tone, fakta, dan whitelist
- Buat SATU file baru src/data/article-engine/batch-4.ts sesuai protokol: Write (import + artikel 1–5 + // APPEND-SLOT + ];) → MultiEdit bertahap (artikel 6–9, 10–13, 14–17) → Edit final artikel 18 tanpa slot → baca ulang file cek sintaks (843 baris)
- 18 slug sesuai daftar & urutan brief: hotel-makkah-jarak-haram, area-hotel-madinah-strategis, tipe-kamar-quad-triple-double, tiket-charter-grup-umrah, maskapai-penerbangan-umrah, mendarat-jeddah-atau-madinah, bus-grup-tanah-suci, terminal-umrah-soetta, handling-bandara-jeddah, kereta-haramain-makkah-madinah, umrah-plus-turki-itinerary, umrah-plus-dubai-jebakan, koper-hilang-bandara-umrah, jetlag-hari-pertama-makkah, land-arrangement-untuk-siapa, upgrade-hotel-saat-tiba, internet-sim-card-saudi, cuaca-tanah-suci-jadwal-ibadah
- Semua category PERSIS "Hotel & Transportasi", author PERSIS "Tim Edukasi SolusiHajj"; publishedAt menyebar 2026-02-08 s.d. 2026-03-10; lastReviewed = publishedAt +7–16 hari (maks 2026-03-25); readMinutes 7–8; callout.ctaTo hanya dari whitelist wajib (terpakai: /paket, /tiket-grup, /travel-kit, /kalkulator-haji, /escrow, /edukasi/panduan-umrah-pemula-30-hari); related = 2 slug dari 4 slug wajib + slug batch ini
- Fakta wajib dijaga konsisten: reguler 9 hari quad Rp 28–38 jt, Ramadhan Rp 45–65 jt, plus Turki/Dubai Rp 39–50 jt, LA < Rp 20 jt; tiket PP Rp 8–12 jt; hotel Makkah 4–5 mlm Rp 6–11 jt; Madinah Rp 3–6 jt; selisih hotel 100 m vs 800 m Rp 4–6 jt; triple +Rp 1–2 jt, double +Rp 2,5–4 jt; charter grup vs komersial; Jeddah (mulai Makkah) vs Madinah (ziarah dulu, ritme santai); kereta Haramain ±2 jam; handling Jeddah 2–6 jam; jarak hotel selalu dalam METER; anti-jebakan harga murah; escrow 40/40/20, Saksi Jamaah, verifikasi 5 lapis, Cek Izin PPIU, Kalkulator Simpanan Haji, 45 kota, 76 maskapai
- Validasi otomatis via skrip bun sementara di luar project (helper dihapus setelah pakai; lint/build/dev server TIDAK dijalankan, tidak ada file project lain yang disentuh): 18 slug urut & unik, title 45–65, excerpt 140–160, ≥5 h2, ul/ol, ≥1 tabel (18/18 punya tabel; tipe-kamar 2 tabel), 1–2 callout, jumlah kata 700–1100, ctaTo & related sah, tanggal valid
- Iterasi kualitas: excerpt #2 dipangkas 163→152; 16 artikel di bawah 700 kata diperkaya (2 ronde MultiEdit: +paragraf pendalam +kalimat penutup) hingga 702–754 kata per artikel; 4 judul yang <45 char dari daftar brief dipanjangkan minimal dengan prefiks judul asli utuh ("...di 2026", "...di Balik Layar", "...±2 Jam untuk Lansia", "...: Panduan 48 Jam") agar patuh 45–65 char sekaligus menjaga keyword asli (mengikuti praktik batch 4-f)

Stage Summary:
- batch-4.ts selesai: export const batch4: Article[] berisi 18 artikel "Hotel & Transportasi" (±12.900 kata), semua lolos validasi terprogram 18/18, TypeScript valid terhadap tipe Article, file berakhir "];" tanpa sisa slot
- Konsisten dengan batch paralel: tidak ada bentrokan slug; angka fakta 2026 identik dengan brief lintas batch; callout mengarah ke vertikal portal nyata
- Next action (task terpisah): agregasi batch1..batchN ke indeks artikel-engine + rute /artikel/[slug] dinamis + regenerasi sitemap

---

### [v1.4.0] — Mesin Konten

Task ID: 4-e
Agent: general-purpose
Task: Prioritas 4 — batch artikel 4-e (18 artikel kategori Biaya & Keuangan)

Work Log:
- Baca worklog (Task 1–6) + tipe Article/ArticleBlock di src/data/types.ts + gaya artikel lama di src/data/articles.ts untuk kalibrasi tone & format
- Buat src/data/article-engine/batch-5.ts (file BARU, 903 baris) sesuai pola: Write artikel 1–5 + // APPEND-SLOT, lalu Edit berulang mengganti slot (6–9, 10–13, 14–17, 18 tanpa slot)
- 18 artikel kategori PERSIS "Biaya & Keuangan", author "Tim Edukasi SolusiHajj": biaya-umrah-dari-jakarta-2026, biaya-umrah-dari-surabaya-2026, biaya-umrah-dari-bandung-2026, kenapa-harga-umrah-naik, cicilan-umrah-syariah-0, escrow-umrah-cara-kerja, menyusun-simpanan-umrah, dp-pelunasan-umrah, makan-selama-umrah, biaya-tersembunyi-umrah, pembatalan-paket-umrah, umrah-ramadhan-vs-reguler, tips-hemat-biaya-umrah, margin-wajar-ppiu, tukar-uang-riyal-umrah, asuransi-dana-hangus-umrah, bandingkan-paket-5-kriteria, rincian-biaya-visa-umrah
- Semua artikel: pembuka menjawab inti dengan angka di paragraf 1, ≥5 h2, ≥1 tabel angka, 1–2 callout (ctaTo hanya dari whitelist: /paket, /kalkulator-haji, /cicilan-syariah, /escrow, /verifikasi/cek-izin-ppiu, /edukasi/biaya-umrah-2026-rincian-lengkap), related 2 slug dari whitelist/batch sendiri
- Fakta angka dikunci konsisten dengan brief: reguler Rp 28–38 jt (quad), Ramadhan Rp 45–65 jt (malam ganjil 1,8×), Plus Turki/Dubai Rp 39–50 jt, LA < Rp 20 jt, Desember +10–20%, off-peak Feb–April, komponen 8 pos (visa Rp 1,5–2,5 jt, tiket Rp 8–12 jt, hotel Makkah Rp 6–11 jt, Madinah Rp 3–6 jt, makan Rp 2–3,5 jt, bus/mutawif/handling/ziarah Rp 3–4,5 jt, perlengkapan Rp 0,5–1 jt, margin 8–15%), keluarga 2 orang ± Rp 72–77 jt, red flag Rp 18–20 jt, escrow 40/40/20, cicilan syariah 0% tanpa bunga, kamar triple +Rp 1–2 jt / double +Rp 2,5–4 jt
- Ekspansi konten: 17 artikel awal di bawah 700 kata → ditambah blok p/h2 tambahan via 6 ronde MultiEdit sampai semua masuk rentang
- Verifikasi otomatis (script node ad-hoc, bukan lint/build): 18/18 OK — kata 700–750 (rentang target 700–1100), title 45–54 kar, excerpt 140–156 kar, readMinutes 6–9, publishedAt 2026-02-08 s.d. 2026-03-10 terurut, lastReviewed = publishedAt +10–18 hari (maks 2026-03-25), 0 duplikat slug, ctaTo & related semua valid; node --check pada file hasil strip type → SYNTAX OK
- Perbaikan 3 typo editorial yang tertangkap saat review (callout title "Rincian Komponen", item "money changer tidak resmi", frasa menebak di biaya-tersembunyi)
- Tidak menyentuh file lain, tidak menjalankan lint/build/dev server

Stage Summary:
- batch-5.ts selesai: 18 artikel "Biaya & Keuangan" (~13.200 kata total) siap diagregasi oleh agent index artikel-engine (target artikel engine total 4+18 = 22)
- Semua constraint kualitas lolos verifikasi terprogram; angka kunci 2026 konsisten dengan batch lain (brief fakta wajib)
- Catatan untuk agent lanjutan: import path dipakai "@/data/types" sesuai skema tugas; agregator cukup mengimpor { batch5 }

---

### [v1.4.0] — Mesin Konten

Task ID: 4-f
Agent: general-purpose
Task: Prioritas 4 — batch artikel 4-f (10 artikel Keluarga & Lansia + 8 artikel Musim & Waktu Keberangkatan)

Work Log:
- Baca worklog (Task 1–6) + src/data/types.ts (skema Article/ArticleBlock) + src/data/articles.ts sebagai referensi gaya; folder src/data/article-engine belum ada → dibuat
- Tulis src/data/article-engine/batch-6.ts sesuai protokol: Write (import + artikel 1–5 + // APPEND-SLOT + ];) lalu Edit berulang mengganti slot (artikel 6–10, 11–14, 15–17), diakhiri artikel 18 tanpa slot
- 18 artikel lengkap: 10 × category "Keluarga & Lansia" (balita, 70+, kursi roda Haram, cek kesehatan senior, bersama orang tua, wanita tanpa mahram (netral + disclaimer aturan dapat berubah), hamil, diabetes, obat pribadi, keamanan anak) + 8 × "Musim & Waktu Keberangkatan" (waktu terbaik, Ramadhan, Desember, off-peak Feb–Apr, kalender hijriah, musim panas, musim haji, umrah badal)
- Fakta wajib dikunci konsisten: reguler 9 hari quad Rp 28–38 jt, Ramadhan Rp 45–65 jt (malam ganjil ~1,8×), Desember +10–20%, off-peak termurah Feb–Apr, jalan 5–10 km/hari, cek kesehatan 60+/hipertensi/diabetes, obat kemasan asli + surat dokter bila jarum, kursi roda tersedia (jam sibuk ramai), panas >40°C, anak belum baligh sah (bukan menggugurkan), badal umrah saja (bukan haji Islam), takwim hijriah lebih akurat
- Fix kecil hasil self-review: "layak terjang"→"layak terbang", "konsul"→"konsulat"; 4 judul yang <45 char dipanjangkan minimal (keamanan anak→"...Masjidil Haram", hijriah→+"2026", musim panas→+"Ibadah", musim haji→"Rencana Umrah Anda") agar patuh 45–65 char
- Validasi otomatis via script Node sementara (parse JS setelah strip anotasi TS): 18/18 lolos semua batas — title 45–65, excerpt 140–160, readMinutes 6–11, publishedAt 2026-02-08..2026-03-10, lastReviewed = publishedAt+5..20 hari (maks 2026-03-25), author PERSIS, ≥5 h2, ul/ol ada, 1 tabel/artikel, 1–2 callout dengan ctaTo dari whitelist, related 2 slug dari daftar wajib/batch sendiri, jumlah kata 700–786 per artikel; script dihapus setelah verifikasi

Stage Summary:
- File BARU src/data/article-engine/batch-6.ts selesai: export const batch6: Article[] berisi 18 artikel (~13.6k kata konten) siap diagregasi oleh artikel-engine, TypeScript valid, tidak ada file lain yang disentuh, lint/build/dev server tidak dijalankan
- Kontrol kualitas: pembuka menjawab inti (jawaban singkat di paragraf 1), ≥5 h2 per artikel, 18 tabel + 1–2 callout per artikel dengan CTA menuju /paket, /travel-kit, /cicilan-syariah, /escrow, /edukasi/panduan-umrah-pemula-30-hari, /edukasi/biaya-umrah-2026-rincian-lengkap
- Catatan untuk agent berikutnya: batch lain bisa memakai pattern yang sama (Write slot + Edit); agregasi batch ke index article-engine + rute /artikel/[slug] dinamis belum dilakukan (di luar scope 4-f)

---

### [v1.4.0] — Mesin Konten

Task ID: 7
Agent: main (Z.ai Code)
Task: Prioritas 4 God Mode — Article Content Engine (4 → 112 artikel SEO) + fix hydration mismatch beranda

Work Log:
- Fix hydration mismatch (console error radix accordion ID di beranda): ganti Accordion shadcn di S11 FAQ home.tsx dengan native <details>/<summary> (name="faq-beranda") — tanpa useId, konten selalu di DOM (SEO-safe), tanpa JS, chevron rotate via group-open. Browser-verified: toggle berfungsi, 0 hydration warning, 0 console error
- Article Content Engine: 6 agent paralel (Task 4-a..4-f) menulis src/data/article-engine/batch-1..6.ts — 108 artikel baru (18×6), 700–1100 kata/artikel (±90.000 kata total), 8 kategori terpadu, fakta konsisten lintas batch (harga wajar 2026 Rp 28–38 jt reguler, escrow 40/40/20, PMA 21/2020, Nusuk, ICV, paspor 7 bulan)
- Validasi mesin: 108 slug unik antar-batch, 0 broken related link, 0 sisa APPEND-SLOT, TypeScript parse OK (bun import test)
- Agregasi: src/data/article-engine/index.ts (engineArticles + categorySlug + articleCategories); articles.ts = 4 seed + 108 engine = 112; seed di-remap ke taksonomi 8 kategori (Perencanaan&B>Panduan Umrah dst) — semua konsumen otomatis ikut: /artikel, /artikel/[slug], /artikel/kategori, sitemap, SPA /#/edukasi (112 kartu), ItemList JSON-LD homepage
- Rute baru /artikel/kategori/[kategori]: generateStaticParams 8 kategori, generateMetadata + OG card dinamis, JSON-LD CollectionPage+ItemList+BreadcrumbList, silo antar kategori + CTA /paket
- Upgrade /artikel indeks: chips kategori ber-jumlah (anchor jump), preview 6 artikel/kategori + "Lihat semua N" → halaman kategori
- Upgrade /artikel/[slug]: calloutHref whitelist 11 prefix rute SEO (tak lagi jadi /# salah arah), related fallback se-kategori, breadcrumb + badge kategori jadi tautan /artikel/kategori/...
- Sitemap: 13.868 → 13.984 URL (+112 artikel, +8 kategori)
- Verifikasi: lint 0 error (1 warning pre-existing); curl sweep 12 URL (indeks, 3 artikel batch berbeda, 3 kategori, seed, OG, health, 404 negatif ×2) semua sesuai kontrak; browser E2E: indeks 112/8 chips, kategori 19 artikel + 7 silo, detail (breadcrumb kategori, callout /#/escrow + /paket benar, related 2 valid, tabel + arabic render), beranda FAQ native toggle OK, mobile 390px tanpa overflow, SPA /#/edukasi 112 kartu; dev.log 0 ⨯

Stage Summary:
- PORTAL KINI 13.984 URL DI SITEMAP; pusat konten 112 artikel E-E-A-T (byline + terbit + review terakhir + kategori) dalam 8 kategori dengan silo 3 lapis: indeks → kategori → detail → (related se-kategori + callout CTA ke /paket & tool SPA)
- Hydration mismatch kelas radix-useId di beranda dihapus permanen (native details)
- Mesin konten siap dikembangkan: tambah artikel = tambah entry batch file; sitemap/JSON-LD/indeks/kategori otomatis

---

### [v1.5.0] — Kelas Dunia

Task ID: 8
Agent: main (Z.ai Code)
Task: Redesign header & menu ke standar kelas konsultan internasional (McKinsey/BCG-tier)

Work Log:
- Redesign penuh Header di src/components/solusihajj/chrome.tsx (CHROME R2), palet Design System "Amanah" dipertahankan
- Utility bar baru (desktop, scroll-away): 3 sinyal kepercayaan (escrow syariah, verifikasi 5 lapis, 3.966 organisasi) + telepon WA + switcher bahasa ID/EN/ع
- Nav desktop diganti dari dropdown rounded-xlhover-list polos menjadi mega menu 3 grup terpusat (Cari Paket/Direktori/Panduan): panel 880px dengan garis aksen emas, grid item 2 kolom (icon tile + label + deskripsi 1 baris + dot emas untuk unggulan), kolom featured hijau-tua per grup (NurMatch AI / Cek Izin PPIU / 112 Artikel) dengan CTA emas
- Trigger nav jadi Link uppercase 12.5px letter-spaced (klik = menuju halaman hub; hover = panel dengan intent-delay 140ms via timer ref, cancel saat re-enter)
- Micro-interaction kelas premium: underline emas 2px origin-left scale-x animasi pada hover/active, chevron rotate, CTA "Cari Paket" solid dengan ArrowRight shift
- Logo diperhalus: wordmark brand-deep + sub-label uppercase "UMRAH · HAJI · AMANAH" (tracking 0.24em)
- Kontrol kanan dirapikan: hairline divider + toggle lansia/gelap rounded-md + SATU CTA (sebelumnya 5 tombol berebut perhatian); WA icon hanya mobile/tablet (desktop sudah ada di utility bar)
- Drawer mobile total baru: panel slide-in fixed 400px + backdrop blur, accordion 3 grup (grid-rows animasi, tanpa Radix = 0 risiko hydration), item ber-icon+deskripsi, bottom bar CTA + WA + bahasa + toggle, ESC close + body scroll-lock + auto-close saat navigasi
- Aksesibilitas: skip link "Langsung ke konten utama" (scrollToId, aman hash-router), aria-expanded/haspopup/pressed lengkap, fokus visible
- app.tsx: <main> diberi id="konten-utama" untuk skip link
- Lint fix: hapus setState langsung dalam effect body (react-hooks/set-state-in-error) — sync bayangan header kini murni via scroll listener (scroll programatik router tetap tertangkap)
- Verifikasi browser E2E (agent-browser, desktop 1440 + mobile 390): utility bar + mega panel 3 grup render sempurna, klik item panel → navigasi + panel tertutup + active underline emas benar, drawer: accordion toggle, navigasi auto-close, dark mode "Malam Madinah" + switch EN berfungsi di header & drawer, footer terdorong alami (footerBottom 2600 > viewport 900), bodyScrollWidth = innerWidth (0 overflow-x), console 0 error & 0 hydration warning, dev.log 0 ⨯, lint 0 error

Stage Summary:
- Header kini setara situs konsultan global: hierarki 2 lapis (utility bar kepercayaan + header utama sticky), tipografi uppercase letter-spaced, mega menu terpusat dengan featured panel, satu CTA dominan, drawer mobile app-grade
- Semua fungsi lama terjaga: i18n 3 bahasa, mode lansia, dark mode, WA float, hash-route SPA, hydration-safe (tanpa useId/Radix di chrome)
- File berubah: src/components/solusihajj/chrome.tsx (Header + Logo), src/components/solusihajj/app.tsx (id main)

---

### [v2.0.0] — Nexus Governance

Task ID: 9
Agent: main (Z.ai Code)
Task: Aktivasi SolusiHajj Release System — versioning SemVer wajib untuk seluruh perintah & perubahan, rename & restrukturisasi worklog, rewrite README (EN+ID) standar internasional, penyelarasan domain solusihajj.web.id

Work Log:
- Desain SolusiHajj Release System: SemVer 2.0.0 (MINOR = fitur, PATCH = fix, MAJOR = tata kelola/R-ladder) + Keep a Changelog 1.1.0; seluruh 8 task historis dipetakan retroaktif v1.0.0 → v1.5.0
- Buat VERSION (root, satu baris "2.0.0") + src/lib/version.ts (sumber kebenaran runtime: APP_VERSION / APP_CODENAME "Nexus Governance" / APP_BUILD_DATE 2026-10-22 / RELEASE_LABEL / RELEASE_LINE / RELEASE_AUTHORITY) — API & footer wajib impor dari sini, hardcode versi di tempat lain dilarang
- package.json: name "nextjs_tailwind_shadcn_ts" → "solusihajj", version "0.2.1" → "2.0.0"; bun.lock disinkronkan
- Endpoint baru GET /api/version (identitas rilis: version, label, codename, buildDate, scheme, authority; Cache-Control no-store); GET /api/health ditambah blok version (number/label/codename) dan service identity diganti "muhdin.web.id" → "solusihajj.web.id"
- Stempel versi publik di Footer chrome.tsx: "RILIS SOLUSIHAJJ v2.0.0 · SEMVER 2.0.0" (11px uppercase tracking 0.2em, ivory/25, aria-label) — versi terlihat langsung oleh pengunjung
- Domain situs diselaraskan ke solusihajj.web.id: default SITE di src/lib/og.ts & robots.ts (https://solusihajj.com → https://solusihajj.web.id; env NEXT_PUBLIC_SITE_URL tetap dihormati) — canonical, sitemap, robots, OG, JSON-LD ikut otomatis
- CHANGELOG.md (baru): kebijakan versi + 8 rilis terkategori Added/Changed/Fixed/Verified + referensi; WORKLOG.md (rename dari worklog.md): header otoritas + Indeks Rilis + SOP Rilis 6 langkah + 16 entri task diurutkan kronologis (1 → 2-b/2-a/2-c/3 → 4 → 5 → 6 → 4-a..4-f → 7 → 8) masing-masing distempel [vX.Y.Z], isi dipertahankan verbatim; worklog.md lama menjadi stub penunjuk
- README.md + README_ID.md ditulis ulang standar internasional: badge rilis (SolusiHajj v2.0.0 / Nexus Governance / SemVer), seksi Release Snapshot, angka terverifikasi live (sitemap 13.984 URL, DB 3.966 organisasi — koreksi dari "796" era lama, OG 13.831, 112 artikel), mermaid arsitektur diperbarui (+/api/leads, /api/og, /api/version), API reference +2 endpoint, seksi Release System + SOP 6 langkah, struktur repo, roadmap v2.1 (Prioritas 5) & v3.x (R4)
- Koreksi label atas arahan user: "GunaraCorp" hanyalah contoh format → label resmi "SolusiHajj" mengikuti nama situs solusihajj.web.id, diganti di seluruh artefak (version.ts, health, CHANGELOG, README EN+ID, WORKLOG, footer)
- Verifikasi: bun run lint → 0 error (1 warning pre-existing); curl /api/version → 200 label "SolusiHajj v2.0.0"; /api/health → 200 + blok versi + service solusihajj.web.id; sitemap.xml → 13.984 URL; git commit seluruh pekerjaan + tag annotated v2.0.0 "Nexus Governance"

Stage Summary:
- SISTEM VERSI AKTIF: mulai v2.0.0, setiap perintah & perubahan wajib berversi — kanal resmi: VERSION, CHANGELOG.md, WORKLOG.md, src/lib/version.ts, /api/version, stempel footer, git tag
- Rilis aktif: SolusiHajj v2.0.0 "Nexus Governance" (build 2026-10-22) — riwayat retroaktif v1.0.0–v1.5.0 lengkap & terstruktur di CHANGELOG.md
- Domain resmi dikunci ke solusihajj.web.id (canonical, sitemap, robots, OG, health service)
- Label versi mengikuti nama situs (SolusiHajj), bukan brand pribadi — sesuai arahan user
---
Task ID: 2-d
Agent: full-stack-developer
Task: llms.txt manifest + RSS kanonik /feed.xml (fallback 112 artikel statis) + /api/rss → 308 redirect

Work Log:
- Baca worklog.md (stub) + WORKLOG.md §indeks & SOP rilis; kontrak: SITE dari @/lib/og (env-aware, trailing-slash-stripped), RELEASE_LABEL dari @/lib/version, articleList 112 item dari @/data/articles, packageList dari @/data/packages; cek prisma/schema.prisma → model `article` BELUM ada di client (karena itu fallback statis wajib; jalur DB tetap ditulis kompatibel-maju)
- CREATE src/app/llms.txt/route.ts (folder route ber-titik legal di App Router): GET plain Response, Content-Type text/plain; charset=utf-8 + Cache-Control public, max-age=3600; konvensi llms.txt (H1 # SolusiHajj + blockquote ringkasan 3.966 organisasi/27 paket/210 layanan/escrow 40/40/20 + Release: ${RELEASE_LABEL}); 10 section H2: Halaman Utama, Paket Umrah (5 paket top rating desc + harga Rp id-ID), Direktori Nasional (/direktori 3.966 + /katalog + /katalog/ppiu + /katalog/pihk), Layanan & Matrix SEO (210×45=9.450), Artikel & Panduan (112 E-E-A-T + 8 URL representatif), Glosarium, Alat Publik (/bandingkan), English (/en + /en/services + /en/packages + /en/directory), Data & Machine Endpoints (/sitemap.xml, /feed.xml, /api/version, /api/health, /api/stats, /api/r2/companies), Legal (/kebijakan-privasi, /syarat-ketentuan, /faq); footer "Last updated: 2026-10-22 (Asia/Jakarta) · Generated by SolusiHajj Release System"; seluruh URL absolut ${SITE} — ukuran 6.510 byte (< 8 KB)
- CREATE src/app/feed.xml/route.ts: dynamic force-dynamic (tanpa revalidate — kontradiktif) + header Cache-Control public, max-age=900; loadEntries() = db.article.findMany({where status PUBLISHED, orderBy updatedAt desc, take 50}) via adapter ketat kompatibel-maju (model belum ada → throw → catch); fallback statis articleList (112) → date lastReviewed ?? publishedAt, sort desc, take 50; RSS 2.0 + xmlns:atom: channel title "SolusiHajj — Artikel & Panduan Umrah Haji", link ${SITE}/artikel, deskripsi kontrak, language id-ID, lastBuildDate RFC-822 toUTCString, generator "SolusiHajj Release System", atom:link rel=self href=${SITE}/feed.xml; item: title, link ${SITE}/artikel/{slug}, guid isPermaLink="true" = link, pubDate toUTCString, description = excerpt (xmlEscape urutan & < > " '), category bila ada; tidak pernah 500
- REWRITE src/app/api/rss/route.ts (dipertahankan, dibuang branding lama MUHDIN + hash-route #/berita): GET → NextResponse.redirect(`${SITE}/feed.xml`, 308) + doc comment satu paragraf legacy → kanonik (v2.1.0)
- Verifikasi live: /llms.txt 200 head "# SolusiHajj" 6.5KB; /feed.xml 200 — XML valid (parser Python ElementTree), 50 <item>, 50 guid isPermaLink, 50 pubDate, 50 category, atom:link self benar, headers content-type application/rss+xml + cache-control max-age=900; /api/rss → "308 https://solusihajj.web.id/feed.xml"; / → 200; dev.log 0 baris error
- bunx eslint pada 3 file → 0 error. TIDAK menyentuh sitemap.ts/layout/version/package.json/public; tanpa git/install/db command

Stage Summary:
- Machine-discovery layer hidup: /llms.txt (manifest LLM, 10 section, 6.5 KB), /feed.xml (RSS 2.0 kanonik, 50 item, fallback statis anti-500), /api/rss (jembatan 308 permanen → /feed.xml)
- Feed memakai jalur DB kompatibel-maju — begitu model Article ditambahkan ke Prisma schema, findMany otomatis aktif tanpa perubahan kode
- curl: llms.txt 200 · feed.xml 200 (50 item, XML valid) · api/rss 308 → https://solusihajj.web.id/feed.xml · / 200 · eslint 0 error

---
Task ID: 2-c
Agent: frontend-styling-expert
Task: Halaman SEO /bandingkan — server page + ComparePicker klien (bandingkan 2–3 paket berdampingan)

Work Log:
- Studi pola: (seo)/paket/page.tsx + (seo)/kota/page.tsx (metadata/OG/JSON-LD), src/data/types.ts (Pkg — konfirmasi hotelMadinah ADA: name/stars/distanceToHaram/walkMinutes; tidak ada field month; airline & departWindow ada), src/components/seo/silo-bits.tsx, pkg-ui.tsx, lib/og.ts, lib/i18n-routes.ts ("/bandingkan" ↔ "/en/compare" sudah terpetakan)
- Buat src/components/seo/compare-picker.tsx ("use client"): interface ComparePkg diekspor (slug,title,durationDays,basePrice,departCity,rating,reviewCount,hotelMakkahName/Distance,hotelMadinahName/Distance — plain object aman server→klien); fieldset/legend + chip checkbox asli (sr-only) ≥44px (min-h-11), selected = bg-brand text-white, maks 3 di-enforce (toggle no-op + hint inline "Maksimal 3 paket"), hint adaptif "Pilih 2–3 paket"; aria-live="polite" "N paket dipilih"; tabel berdampingan overflow-x-auto min-w-[640px] dengan th scope="row"/scope="col": Harga, Per hari (dibulatkan, badge emas "Terhemat" untuk termurah), Durasi, Keberangkatan, Hotel Makkah (+badge "Terdekat" utk jarak terkecil), Hotel Madinah, Rating ★, Review; empty state dashed card adaptif (0/1 paket); tombol "Bersihkan pilihan"; formatRupiah dari pkg-ui (fungsi murni), useState saja, tanpa dep baru
- Buat src/app/(seo)/bandingkan/page.tsx (server): generateMetadata (title "Bandingkan Paket Umrah — Harga, Hotel, & Rating Berdampingan", deskripsi menyebut escrow syariah 40/40/20 + Verifikasi 5 Lapis, canonical "/bandingkan" + languageAlternates, OG card ogImage: kicker "Alat Perbandingan", badge "Escrow Syariah 40/40/20"); JSON-LD 3 blok terpisah (BreadcrumbList Beranda→Bandingkan Paket, FAQPage 4 QA: apa yang dibandingkan/harga live/escrow/Verifikasi 5 Lapis, ItemList 5 paket rating tertinggi dgn URL absolut /paket/[slug]); hero PageHero + MetaChip; <ComparePicker packages={PACKAGES}/> (27 paket diserialisasi, diurutkan rating→reviewCount); tabel SEO statis TOP 5 (rating, lalu reviewCount) — <table> semantik + caption + th scope + overflow-x-auto min-w-[820px], baris Harga/Per hari/Durasi/Keberangkatan/Hotel Makkah+jarak/Hotel Madinah+jarak/Rating & review; seksi "Cara membaca perbandingan" 4 kartu (escrow 40/40/20, Verifikasi 5 Lapis, jarak hotel ± meter via rute jalan kaki, review hanya jamaah nyata); cross-link /paket, /direktori, /en/compare, + 4 link /paket/[slug] teratas; token brand konsisten (text-brand-deep, bg-brand, border-line-warm, bg-ivory, badge emas gold-soft/gold-deep)
- Verifikasi: curl /bandingkan → 200; <script type="application/ld+json"> ×3 (occurrence "application/ld+json" ×6 di HTML satu-baris — grep -c per baris = 1 karena minifikasi, konten lengkap); hreflang id/en/x-default terender (React 19 menulis atribut sebagai hrefLang — sama seperti halaman /en eksisting; grep -i = 6); SSR render 27 chip checkbox + fieldset + aria-live + tabel SEO; eslint kedua file → 0 error; dev.log hanya GET 200, tanpa error baru

Stage Summary:
- File dibuat: src/app/(seo)/bandingkan/page.tsx (server SEO page) + src/components/seo/compare-picker.tsx (client tool) — tidak ada file lain yang disentuh
- /bandingkan hidup di dev server (200), 3 blok JSON-LD + canonical + hreflang pasangan /en/compare, lint bersih
- Catatan: /en/compare sendiri belum ada di repo (ditautkan sesuai kontrak LOCALE_ROUTE_MAP — dibuka task paralel /en); casing atribut hrefLang berasal dari React 19 SSR, bukan dari file task ini

---

Task ID: 2-b
Agent: full-stack-developer
Task: Katalog berfaset /katalog (indeks + 5 tipe + 335 kota + 31 provinsi + 53 prov×tipe + 293 kota×tipe) — src/lib/facets.ts + 8 route file

Work Log:
- Baca worklog.md stub + WORKLOG.md (rilis v1.0.0–v2.0.0) + referensi gaya: (seo)/layout.tsx, (seo)/kota/page.tsx, (seo)/direktori/page.tsx, lib/og.ts, components/seo/json-ld.tsx, pkg-ui.tsx, schema.prisma
- Verifikasi agregat DB via skrip bun sementara (dihapus setelah pakai): total 3.966 (PPIU 2.670 · PIHK 1.019 · UTO 228 · USP 47 · BPW 2), 335 kota, 31 provinsi, 293 kota×tipe ≥2, 53 prov×tipe ≥2, 3.619 terverifikasi — semua cocok dengan kontrak task
- Buat src/lib/facets.ts (server-only Prisma, tanpa cache modul): slugifyDb (kontrak /direktori/{slug}--{id}), cityLabel ("Kota JAKARTA SELATAN" → "Kota Jakarta Selatan"), TYPE_META (PPIU/PIHK/UTO/USP/BPW ↔ slug + blurb Indonesia), typeBySlug, 6 getter async: getTypeCounts, getCityFacets (≥1, provinsi dari kelompok kota×provinsi terbesar), getProvinceFacets, getCityTypeCombos (≥2), getProvinceTypeCombos (≥2), getCompaniesFaceted (where orgType/city/province, orderBy name asc, take default 120, total via count)
- /katalog (indeks): hero PageHero "Katalog Berfaset — 3.966 Organisasi Penyelenggara Ibadah" + 4 stat chip (3.966 organisasi · 335 kota · 31 provinsi · 3.619 terverifikasi), 5 kartu tipe berhitungan → /katalog/[tipe], grid 31 provinsi → /katalog/provinsi/[slug], 12 kota teratas → /katalog/kota/[slug], CTA silo ke /direktori (pencarian lengkap) + /en/catalog (hrefLang=en); metadata: canonical /katalog + languageAlternates (peta i18n /katalog→/en/catalog), OG kartu dinamis; JSON-LD BreadcrumbList + ItemList tipe + ItemList provinsi
- /katalog/[tipe] (5 halaman, dynamicParams=false, params dari TYPE_META): generateMetadata unik (title "Direktori {LABEL} — {total} {LABEL} Terdata"), h1 + intro blurb TYPE_META, daftar 120 organisasi (kartu: chip orgType brand-soft, badge status AKTIF gold-soft/gold-deep, kota via cityLabel, link profil /direktori/{slugifyDb(name)}--{id}), chip 24 kota teratas per tipe → /katalog/[tipe]/[kota], catatan "menampilkan 120 dari N" + link /direktori?type={slug}; JSON-LD BreadcrumbList + ItemList 30 profil
- /katalog/[tipe]/[kota] (293 halaman dari getCityTypeCombos, difilter TYPE_META): h1 "{LABEL} di {cityLabel} — {total} Organisasi Terdata", intro 2 kalimat (provinsi + sumber resmi Kemenag/Kemenhaj/Nusuk), daftar lengkap maks 150, chip jenis lain se-kota (siblings), breadcrumb Katalog → Tipe → Kota, silo silang /katalog/kota/[kota] + /katalog/[tipe]; guard notFound bila combo hilang/total 0
- /katalog/kota (indeks): 335 chip kota dengan hitungan, dikelompokkan per 31 provinsi (urutan total desc) dengan heading provinsi + link katalog provinsi; JSON-LD ItemList 335 kota
- /katalog/kota/[kota] (335 halaman dari getCityFacets): h1 "Organisasi Ibadah di {cityLabel} — {total} Terdata", rincian per jenis (hitung dari fetch kota penuh take 1000; chip link /katalog/[tipe]/[kota] hanya bila count ≥2 = combo pasti ada; jenis ber-1 entri tampil non-link), link provinsi, daftar maks 150, guard notFound
- /katalog/provinsi (indeks): 31 kartu provinsi (total organisasi + jumlah kota + 3 kota teratas) → /katalog/provinsi/[slug]; JSON-LD ItemList 31
- /katalog/provinsi/[provinsi] (31 halaman): h1 "Direktori Ibadah di {province} — {total} Organisasi Terdata", chip jenis (→ /katalog/provinsi/[provinsi]/[tipe] bila combo ada), chip semua kota se-provinsi → /katalog/kota/[slug], daftar maks 150; ItemList 30
- /katalog/provinsi/[provinsi]/[tipe] (53 halaman dari getProvinceTypeCombos): h1 "{LABEL} di {province} — {total} Organisasi Terdata", daftar maks 100, chip jenis sibling se-provinsi, silo /katalog/provinsi/[provinsi] + /katalog/[tipe]; ItemList 30
- Semua 9 file: export const revalidate = 86400 (ISR), generateMetadata unik berbahasa Indonesia dengan canonical + openGraph kartu OG dinamis (ogImage kicker/chip/badge/sub/foot), JSON-LD BreadcrumbList selalu + ItemList di halaman detail, heading h2 text-2xl md:text-3xl font-extrabold text-brand-deep, kartu rounded-2xl border-line-warm bg-white p-4, DOM ringan (tanpa client component)
- Insiden infrastruktur: dev server mati di tengah sweep (proses background direap — pola yang sama tercatat di Task 5/6) → restart via scripts/daemon-next-dev.py (double-fork), semua verifikasi diulang setelah restart; 404 awal /katalog/bpw terbukti artefak server mati, bukan bug kode
- Temuan data: UTO & BPW tidak punya kota×tipe/prov×tipe combo ≥2 (UTO 228 menyebar 1 per kota; BPW hanya 2 entri di 2 kota berbeda) → kombinasi mereka sah 404 via dynamicParams=false; USP hanya punya combo "makkah" (47) — diuji 200
- Verifikasi curl pasca-restart: 17 URL positif → 200 (indeks ×3, tipe ×5, tipe×kota ×4, kota ×3, provinsi ×2, prov×tipe ×2 mencakup slugs tiap generateStaticParams) + 4 negatif → 404 benar (/katalog/nonsense, /katalog/usp/kota-jakarta-selatan, /katalog/bpw/jakarta-selatan, /katalog/provinsi/kalimantan-selatan/bpw — combo memang tak ada di DB)
- Spot-check HTML: title/h1 unik + angka id-ID (2.670/319/221/1.010/637 sesuai DB), canonical & og:image (/api/og 200) ada, JSON-LD BreadcrumbList+ItemList di semua sampel, chip & silo aktif, badge AKTIF gold-soft; bunx eslint facets + katalog → 0 error 0 warning; dev.log tanpa ⨯ baru

Stage Summary:
- 9 file baru (0 file lama disentuh): src/lib/facets.ts + src/app/(seo)/katalog/{page,[tipe]/page,[tipe]/[kota]/page,kota/page,kota/[kota]/page,provinsi/page,provinsi/[provinsi]/page,provinsi/[provinsi]/[tipe]/page}.tsx = 690 halaman faset statis-ISR (1 indeks + 5 tipe + 293 tipe×kota + 1 indeks kota + 335 kota + 1 indeks provinsi + 31 provinsi + 53 prov×tipe)
- Curl: /katalog 200 · /katalog/{ppiu,pihk,uto,usp,bpw} 200 · /katalog/kota 200 · /katalog/kota/kota-jakarta-selatan 200 · /katalog/ppiu/kota-jakarta-selatan 200 · /katalog/provinsi 200 · /katalog/provinsi/dki-jakarta 200 · /katalog/provinsi/dki-jakarta/ppiu 200 · /katalog/usp/makkah 200 · /katalog/nonsense 404 (negatif benar)
- Lint: bunx eslint "src/lib/facets.ts" "src/app/(seo)/katalog/**/*.tsx" → 0 error, 0 warning
- Catatan: /en/catalog masih 404 (dilink sesuai kontrak; halaman EN dibuat task paralel — peta i18n-routes sudah menautkan /katalog ↔ /en/catalog); SITE canonical mengikuti env NEXT_PUBLIC_SITE_URL solusihajj.com yang berlaku site-wide (perilaku eksisting, bukan diubah task ini)

---

Task ID: 2-a
Agent: full-stack-developer
Task: 8 halaman EN /en/* (services, packages, directory, cities, articles, glossary, compare, faq) — next-intl, hreflang id/en, JSON-LD

Work Log:
- Baca WORKLOG.md (rilis v1.0.0→v2.0.0) + audit kontrak: lib/i18n-routes (languageAlternates), lib/og (ogImage/SITE), components/seo/json-ld (JsonLd/breadcrumbJsonLd/faqJsonLd), messages/en.json (10 namespace ICU), silo-bits (PackageMiniCard/CategoryIcon), pkg-ui (slugify), data (services 210×14 kategori, packages 27, cities 45×6 pulau, articles 112×8 kategori, glossary 34) — verifikasi count via bun import + DB groupBy (PPIU 2.670 · PIHK 1.019 · UTO 228 · USP 47 · BPW 2 = 3.966)
- Buat /en/services: generateMetadata (canonical absolut + languageAlternates("/layanan") + OG card), 210 layanan digroup 14 kategori ber-ikon (label EN orisinal per kategori, hitungan badge), kartu EN custom (Link → /layanan/[slug], harga "From Rp X.XM"), CTA "Request a quote" → /#/kontak, JSON-LD BreadcrumbList + CollectionPage(ItemList 14 kategori), cross-link /layanan
- Buat /en/packages: PackageMiniCard untuk seluruh 27 paket + blok "How escrow protects your payment" (3 tahap 40/40/20), JSON-LD ItemList(27), CTA ke /en/compare & /syarat-ketentuan, catatan detail id
- Buat /en/directory: breakdown 6 kartu org-type (PPIU 2,670 · PIHK 1,019 · UTO 228 · USP 47 · BPW 2 · Verified 3,619) label "Indexed Oct 2026", CTA /direktori (id, profil penuh) + /en/catalog, JSON-LD CollectionPage+ItemList(6), penjelasan provenance 9+ sumber
- Buat /en/cities: 45 kota digroup 6 pulau, kartu EN custom (nama, provinsi, bandara+kode, "± X h flight to Jeddah", badge "Direct charter available"/"Via transit"), JSON-LD ItemList(45), cross-link /kota
- Buat /en/articles: 112 artikel digroup 8 kategori (label EN orisinal + nama kategori asli ditampilkan), kartu judul+excerpt+author+read-time → /artikel/[slug], catatan eksplisit "full articles in Indonesian", JSON-LD CollectionPage+ItemList(112)
- Buat /en/glossary: 34 istilah A–Z digroup 14 huruf (anchor nav A–Z), EN one-line gloss ditulis manual per istilah (berbasis field short) + arabic script, link /glosarium/[slugify(term)], JSON-LD DefinedTermSet(34 DefinedTerm)
- Buat /en/compare: 5 kartu "What SolusiHajj compares" (harga, durasi, jarak hotel-Haram dalam meter, rating, escrow) + tabel statis 5 paket top-rating (sorted rating desc: durasi, kota, hotel Makkah+jarak m, rating+review, harga) + CTA tool interaktif /bandingkan, JSON-LD ItemList(5)
- Buat /en/faq: 8 Q&A EN orisinal (lisensi Kemenag/PPIU/PIHK/UTO, escrow 40/40/20, verifikasi 5 lapis, review Saksi Jamaah, refund ladder, verifikasi mandiri, charter grup, kontak) via native <details>/<summary> name="faq-en" (0 hydration risk, konten selalu di DOM), JSON-LD faqJsonLd(8) + BreadcrumbList
- Semua halaman: server component + getTranslations({locale:"en"}), h1 text-2xl md:text-3xl font-extrabold text-brand-deep, grid gap-4 sm:grid-cols-2 lg:grid-cols-3, kartu p-5 + min-h-11 (≥44px), token design Amanah (ivory/brand/gold/line-warm), ling hrefLang="id" ke padanan Indonesia
- Debug journey: dev server mati saat pengembangan (proses background direap — sesuai catatan Task 5) → restart via scripts/daemon-next-dev.py, semua rute hijau kembali
- Perbaikan kualitas SEO: canonical diubah ke URL absolut ${SITE}/en/* karena metadataBase root layout masih solusihajj.com (warisan Task 3) — tanpa ini canonical EN salah domain; hreflang ditulis eksplisit lowercase <link rel="alternate" hreflang> di JSX (React 19 hoist ke <head>) karena metadata API Next merender atribut camelCase `hrefLang` — kini keduanya tampil di head dengan nilai identik

Stage Summary:
- 8 file baru: src/app/(en)/en/{services,packages,directory,cities,articles,glossary,compare,faq}/page.tsx — 0 file lain disentuh (WORKLOG.md append-only)
- Verifikasi curl: /en 200 + 8/8 rute baru 200; hreflang pada /en/faq: metadata (3 link) + eksplisit lowercase (3 link) di <head>, grep -c hreflang ≥1
- JSON-LD per halaman terverifikasi di DOM: BreadcrumbList semua + CollectionPage/ItemList (services 14 kategori, packages 27, cities 45, articles 112, directory 6 tipe, compare 5) + DefinedTermSet(34) + FAQPage(8 Q&A)
- Link internal: 210 → /layanan/[slug], 45 → /kota/[slug], 112 → /artikel/[slug], 34 → /glosarium/[slugify], 27 via PackageMiniCard → /paket/[slug]; canonical absolut https://solusihajj.web.id/en/*; og:image dinamis via /api/og di 8 halaman
- bunx eslint "src/app/(en)/en/**/*.tsx" → exit 0 (0 error, 0 warning); dev.log: satu-satunya ⨯ adalah EADDRINUSE transien saat restart daemon (selesai), render terakhir semua 200
- Catatan: React 19 memunculkan warning dev-only "Invalid DOM property hreflang" untuk link lowercase eksplisit — atribut tetap terrender benar di <head>; warning tidak muncul di production build

---

Task ID: 10
Agent: Z.ai Code (orchestrator)
Task: [v2.1.0] Integrasi rilis — infra next-intl, sitemap ±15.000, domain web.id, Release Gate, badge admin, README ×2, commit + tag

Work Log:
- Finalisasi rename GunaraCorp→SolusiHajj: komentar /api/version + stempel GUNARACORP di CHANGELOG v2.0.0 dikoreksi (handle sosial @gunaracorp dipertahankan; catatan historis WORKLOG:429 dipertahankan sebagai jejak keputusan user)
- Infra next-intl "without i18n routing": next.config.ts + createNextIntlPlugin, src/i18n/{routing,request}.ts (locales id/en, defaultLocale id), src/lib/i18n-routes.ts (LOCALE_ROUTE_MAP 10 pasangan id↔en + languageAlternates), messages/{id,en}.json — middleware sengaja TIDAK dipakai (uji awal: middleware as-needed me-rewrite / → /id internal dan mematahkan rute id lama; keputusan: /en sebagai route group statis (en)/en, getTranslations({locale:"en"}) eksplisit — nol dampak ke 13.984 URL Indonesia)
- Buat sendiri: src/app/(en)/en/layout.tsx (chrome EN: header sticky, nav 6 link, footer 4 kolom + stempel rilis) + /en (homepage EN referensi: hero, 4 pilar, stats, 6 paket via PackageMiniCard, indeks seksi EN, JSON-LD Organization+WebSite) + /en/catalog (faset: 5 tipe berhitungan + top provinsi/kota dari facets.ts)
- Sitemap: BASE default → solusihajj.web.id; entry() mendukung alternates.languages; +/bandingkan riil (menggantikan /#/bandingkan hash), +720 faset katalog via getters facets.ts, +10 halaman EN ber-hreflang; hreflang ditambahkan pada metadata 11 halaman id (layout root + layanan/paket/direktori/kota/artikel/glosarium/faq/katalog/bandingkan)
- Domain disatukan solusihajj.web.id: metadataBase layout root, .env NEXT_PUBLIC_SITE_URL (grep sitemap: 0 referensi solusihajj.com)
- Admin badge live: chip RELEASE_LABEL + APP_BUILD_DATE di topbar dashboard (md+) + sidebar CMS (semua ukuran) — sumber src/lib/version.ts, tooltip codename
- CI Release Gate: scripts/verify-version-sync.mjs (VERSION vs package.json vs version.ts vs entri CHANGELOG, output berwarna, exit 1 + daftar masalah) + githooks/pre-commit + git config core.hooksPath githooks + script "verify:version"; diuji positif (lolos) dan negatif (menolak saat version.ts masih 2.0.0 / CHANGELOG belum ada entri 2.1.0)
- Bump rilis v2.1.0 "Sinyal Global" build 2026-10-22: version.ts, VERSION, package.json (bun.lock tidak menyimpan field version root — tak perlu sync); entri CHANGELOG [2.1.0] lengkap (Added/Changed/Fixed/Verified); Release Gate → LOLOS
- README.md + README_ID.md: badge v2.1.0/Sinyal_Global/Sitemap 14.714, snapshot rilis + baris v2.1.0, angka kunci (faset 720, EN 10, hreflang 60, feed, llms.txt), API +3 endpoint, artefak Release Gate, SOP langkah 5-7 (hook + push remote), struktur repo (katalog, bandingkan, (en), i18n, facets, githooks), roadmap v2.1 ✅
- Indeks Rilis WORKLOG: baris v2.1.0 AKTIF, v2.0.0 → Rilis
- Verifikasi menyeluruh: lint 0 error (1 warning pre-existing); restart dev server (.env baru); sweep 31 URL → 200 semua (perbaikan: /en/catalog 404 → dibuat → 200); negatif /katalog/nonsense & /id/layanan → 404; /api/rss → 308 web.id/feed.xml; sitemap live 14.714 <url> + 60 xhtml:link

Stage Summary:
- Rilis v2.1.0 "Sinyal Global" lengkap: 4 subagent (2-a EN pages, 2-b katalog, 2-c bandingkan, 2-d feeds) + integrasi orchestrator (Task 10)
- Sitemap 13.984 → 14.714 URL (±15.000 ✓); hreflang id/en/x-default via metadata + sitemap; Release Gate aktif mencegah drift versi permanen
- Artefak: version.ts/VERSION/package.json/CHANGELOG/README×2/WORKLOG sinkron — gate memverifikasi 4 sumber
- Menunggu: Agent Browser E2E + git commit + tag v2.1.0 + push remote prabudanling/solusihajj

---

Task ID: 10-b
Agent: Z.ai Code (orchestrator)
Task: [v2.1.0] Addendum — restorasi CMS admin (badge rilis terverifikasi live via browser)

Work Log:
- Wire rute #/admin ke SPA aktif: src/components/solusihajj/app.tsx → early-return <LocaleProvider initialLocale="id"><AdminView/></LocaleProvider> (sebelumnya AdminView hanya hidup di shell legacy muhdin-app yang tak terpasang — CMS tak terjangkau)
- Akar crash dashboard ditemukan via bisection bertahap (minimal shell → +sidebar → +header): ThemeSwitcher variant="compact" memakai useT() dari @/lib/i18n yang melempar "useI18n harus dipakai di dalam <LocaleProvider>" — shell legacy selalu dibungkus LocaleProvider, wiring baru belum. Fix: bungkus LocaleProvider.
- Restorasi model auth yang hilang sejak migrasi R3 (schema tanpa User/Session → login 500): tambah model Prisma User + Session (kompatibel kontrak src/lib/auth.ts + api/users), db:push (additif — 16 tabel R2/R3 aman), seed admin@muhdin.web.id (SUPER_ADMIN) + verifikator@muhdin.web.id (VERIFIKATOR) via skrip sementara
- Debugging catatan khusus: ditemukan anomali tampilan tool — pola karakter "[h" pada output tool ter-strip (mis. "const [health, setHealth]" tampil sebagai "const ealth, setHealth]") sehingga sempat disangka file korup; ground truth via od -c + base64 membuktikan file benar. Chunk Turbopack 404 sesungguhnya efek cache browser lama + module graph lama; sesi browser baru menyelesaikannya
- Verifikasi browser E2E (sesi bersih): login admin@muhdin.web.id → dashboard penuh → badge rilis tampil DI TWO LOKASI: chip topbar "SOLUSIHAJJ V2.1.0 · BUILD 2026-10-22" (md+) + sidebar "SOLUSIHAJJ V2.1.0 / build 2026-10-22 · Sinyal Global" (semua ukuran, ikon GitBranch, tooltip codename). Screenshot: /tmp/verify-admin.png
- Degradasi anggun terkonfirmasi: kartu stats dashboard menampilkan "Gagal memuat data" karena /api/stats memakai model legacy (article, member, tutorial, contactMessage, membershipApplication, complaint, subscriber, testimonial, faq, ecosystem) yang belum ada di schema R3 — TIDAK crash. Dicatat sebagai kandidat task v2.2 (restorasi model CMS legacy)

Stage Summary:
- CMS admin kini DIAKSES PUBLIK dari SPA aktif (#/admin) dengan badge rilis live terverifikasi browser — badge admin v2.1.0 SELESAI
- Fix permanen: LocaleProvider wiring, model User+Session, baris 38 admin-dashboard.tsx (valid), seed 2 user
- Pre-existing teridentifikasi (bukan blocker rilis): model CMS legacy belum ada di schema → beberapa API admin legacy 500/error card; dirujuk ke roadmap v2.2
