# WORKLOG — Multi-Agent Work Log

---
Task ID: 1
Agent: Z.ai Main Agent (SolusiHajj Master Builder)
Task: Membuat 39 dokumen NEXUS PROTOCOL v1.0 untuk project SolusiHajj — marketplace umrah & haji terpercaya Indonesia (solusihajj.com), berdasarkan 3 file upload: gunara-master-system-v.3.txt, project-fortness.txt, nexus-protocol-v.1.txt.

Work Log:
- Baca & analisis 3 file upload (master system, FORTRESS contoh, NEXUS SOP 39 dokumen)
- AskUserQuestion: 8 keputusan strategis dijawab founder — Marketplace 2 sisi, Next.js, 4 fitur premium (Escrow/GPS/AI/Review), 39 file .md, ultra-dalam, shared hosting dulu, 3 model monetisasi, solusihajj.com
- Outline terkunci (8 section: README + 7 fase)
- Menulis 39 dokumen + README secara berurutan per fase (Fase 0: 5, Fase 1: 9, Fase 2: 5, Fase 3: 6, Fase 4: 4, Fase 5: 5, Fase 6: 5)
- Keputusan arsitektur kunci: Next.js "dua panggung" (R1 static export di shared hosting → R2 full-stack VPS), 3 rilis dengan gerbang validasi, 5 fitur penamaan brand (Verifikasi 5 Lapis, AmanahEscrow, Saksi Jamaah, Hafizh Track, NurMatch AI)
- Verifikasi: 39 file ✓, 27.725 kata (target ultra-dalam ±20.000 terlampaui)
- Arsip: solusihajj-39-dokumen-nexus-protocol.zip

Stage Summary:
- Output: /home/z/my-project/download/solusihajj/ (README.md + docs/ berisi 39 .md)
- Arsip: /home/z/my-project/download/solusihajj-39-dokumen-nexus-protocol.zip
- Keputusan terkunci: model bisnis marketplace 2 sisi + escrow milestone 40/40/20 + UU PDP compliance + dual-control dana + tool "Cek Izin PPIU" sebagai senjata SEO/kepercayaan
- Semua dokumen konsisten lintas-referensi (FR → wireframe → database → test plan)

---
Task ID: 2
Agent: Z.ai Main Agent (SolusiHajj R1 Builder)
Task: GAS KODING R1 — membangun rilis R1 "Gerbang Kepercayaan" (static catalog) sesuai dokumen 05 (scope R1), 06 (sitemap), 08 (wireframe Template A/B/C), 14 (design system "Amanah").

Work Log:
- Init fullstack env (Next.js 16 + Tailwind 4 + shadcn/ui), lint bersih (1 warning App Router yang aman)
- Design system "Amanah" diterapkan di globals.css: palet hijau #0E6B4E / emas #C9A227 / ivory #FAF7F2, font Plus Jakarta Sans + Amiri, body 17px, radius 16/12, 3 level shadow kehijauan, pattern geometri Islami (khatam) opacity halus, animasi tanpa bounce
- Data layer statis (sesuai batas R1 "tanpa database"): 10 PPIU Founding Partner (fiktif, ditandai demo), 24 paket (6 featured + 18 katalog) dengan itinerary harian, hotel + jarak meter nyata, tabel tanggal/kuota, rincian harga all-in 7 komponen, skema pembatalan, 9 review Saksi Jamaah + balasan PPIU, 10 FAQ, 4 artikel edukasi (2.400+ kata), master izin 14 entri untuk tool Cek Izin
- Arsitektur: SPA hash-route di bawah satu route `/` (batas preview sandbox) — semua view R1 tersedia: /, /paket, /paket/[slug], /ppiu, /ppiu/[slug], /verifikasi, /verifikasi/cek-izin-ppiu, /escrow, /edukasi, /edukasi/[slug], /kalkulator-haji, /tentang, /kontak, /faq, /kebijakan-privasi, /syarat-ketentuan, 404
- Fitur interaktif: filter katalog (kota/tipe/budget/bulan + urutkan), sticky buy bar mobile di detail paket, tool Cek Izin (pencarian fuzzy, status aktif/perpanjangan/tidak-ditemukan + tautan SIMPU Kemenag), Kalkulator Simpanan Haji (proyeksi inflasi 8%/th, rekomendasi setoran, lead capture WA), accordion FAQ, funnel WA pre-filled kontekstual (paket/toko/kalkulator/waitlist/partner), WA float adaptif
- SEO: metadata template + OG, JSON-LD (Organization, WebSite, FAQPage), breadcrumb, robots-safe, logo.svg shield + Ka'bah
- Verifikasi Agent Browser: homepage 12 section ✓, katalog+filter ✓, detail paket Template B lengkap ✓, cek izin 2 kasus (aktif & tidak ditemukan) ✓, kalkulator akurat (32,5jt×1,08^4×2 → Rp 1.650.000/bln) ✓, toko PPIU Template C ✓, artikel doa Amiri RTL ✓, escrow ✓, 404 ✓, mobile 390px (drawer, sticky bar) ✓, dev.log 200 tanpa error
- Defect diperbaiki: import path home.tsx, setState-in-effect lint error, wordmark footer tak terlihat di bg gelap (Logo light variant), WA float menimpa sticky buy bar

Stage Summary:
- R1 "Gerbang Kepercayaan" jadi: trust-first homepage + katalog 24 paket + 10 toko PPIU + tool Cek Izin publik + kalkulator lead magnet + 4 artikel + 5 halaman legal
- Pemetaan deploy (dok 29/31): tiap view hash = route statis dengan slug identik untuk static export shared hosting
- Catatan eksplisit di UI: data R1 = demo, akan diganti hasil Verifikasi 5 Lapis asli sebelum go-live

---
Task ID: 3
Agent: Z.ai Main Agent (SolusiHajj R1.5 Marketplace Builder)
Task: "100x lebih canggih dari umroh.com + SEO terlengkap" — upgrade R1.5 "Marketplace Asia Superapp": vertikal produk baru (LA + Tiket Charter Grup), direktori Asia (PPIU/PIHK/BPW/KBIHU, 5 negara), NurMatch AI, compare tool, travel kit, glosarium SEO, partner center, dark mode, mode lansia, bahasa ID/EN/AR, mega JSON-LD.

Work Log:
- Benchmark umroh.com via WebFetch (flight schedule, LA, paket lengkap, partner, review) → dirancang kontras: escrow + review-gated + verifikasi 5 lapis + Asia-wide (hal yang tidak mereka punya)
- Data layer: types.ts +ProductKind/OrgType/FlightSchedule/GlossaryTerm; ppiu.ts +8 partner Asia (Safa Marwa MY, An-Nur Penang, Sinar Madinah SG, Baitullah SG, Brunei Halal Safar, Siam Umrah TH, PIHK Cahaya Zamzam, KBIHU Riyadh Jaya) total 18 di 5 negara; packages.ts +3 Land Arrangement (total 27); flights.ts baru 10 jadwal charter; glossary.ts 32 istilah; site-seo.ts peta SEO per route
- Pages baru: market.tsx (Tiket Charter Grup, Bandingkan side-by-side, NurMatch AI quiz 5 langkah skor transparan), resources.tsx (Travel Kit: jadwal sholat/kiblat 8 kota/konverter IDR-SAR/checklist persist/countdown; Glosarium A-Z; Partner Center; Peta Situs)
- Pages upgrade: home (hero marketplace, smart search 5 field, 3 vertikal, tabel charter, chips kota Asia, live ticker, teaser NurMatch, tabel vs OTA/travel langsung, strip partner), katalog (tab produk, kalender harga bulanan, compare tray fixed), direktori (filter negara+org), toko PPIU (OrgBadge + charter yang ditangani), trust (Simulator Escrow slider 5 fase + demo Hafizh Track dengan SOS)
- Chrome: nav 3 dropdown + bahasa ID/EN/AR + Mode Lansia (font 17→19.5px) + Dark Mode "Malam Madinah"; CSS token dark di theme-extra.css
- SEO Mega-Stack: 29 blok JSON-LD (Organization, WebSite+SearchAction, 8× Product+Offer+AggregateRating, ItemList paket & charter & artikel, FAQPage, BreadcrumbList, 8× TravelAgency, TouristTrip, Event Ramadhan 1448, HowTo cek izin, Service escrow, DefinedTermSet glosarium, AggregateRating platform) + useSeo/useSeoDetail dynamic title+description per hash-route
- Defect diperbaiki: import flightList salah modul; duplikat key itinerary; flight chunk CSS stale (Turbopack) → pindah dark/elder ke theme-extra.css; React 19 hydration strip class html → usePrefs via effect; LINT set-state-in-effect; HYDRATION MISMATCH deep-link hash → refactor useHashRoute/usePrefs/i18n/checklist/Countdown ke useSyncExternalStore (0 error di fresh session)
- Verifikasi Agent Browser (golden path): smart search→LA filter 3 ✓, compare flow 2 paket→tray→tabel ✓, NurMatch match LA utk profil <20jt+punya tiket ✓, tiket-grup 10 jadwal+seat bar ✓, checklist persist localStorage ✓, konverter ✓, direktori filter Malaysia 2 BPW ✓, cek izin 2 kasus (thaha→TIDAK DITEMUKAN, amanah barokah→AKTIF Platinum) ✓, simulator escrow fase 5 ✓, SOS→Terhubung Koordinator ✓, glosarium expand ✓, partner+peta situs ✓, detail LA badge ✓, drawer mobile 390px ✓, dark persist reload ✓, elder 17→19.5px ✓, sticky footer ✓, 29 JSON-LD ✓, lint 0 error ✓

Stage Summary:
- R1.5 "Marketplace Asia Superapp" jadi: 23 view/hash-route aktif (7 baru), 27 paket + 10 charter + 18 penyelenggara 5 negara + 32 glosarium
- 30 Super Ideas terwujud dalam 6 pilar: Marketplace Engine (search/vertikal/compare/kalender harga), Trust & Syariah (simulator escrow/Hafizh demo/cek izin), AI (NurMatch transparan), SEO Mega-Stack (29 JSON-LD + glosarium + landing kota + peta situs + dynamic title), Aksesibilitas (dark/elder/lang), Jaringan Asia (PIHK/BPW/KBIHU lintas negara)
- Arsitektur hydration-safe: useSyncExternalStore untuk hash-route, prefs, bahasa, checklist, jam — siap static export R1.5 tanpa refactor
- Screenshot: download/solusihajj/screenshot-home.png, screenshot-home-dark.png, screenshot-katalog-compare-tray.png

---
Task ID: 4
Agent: Z.ai Main Agent (SolusiHajj R2 Builder)
Task: "Lanjut R2" — Fondasi Data Nasional: update semua PPIU/PIHK dari situs resmi Kemenag, Kementerian Haji & Umrah, Kementerian Pariwisata + semua maskapai, masuk ke database platform.

Work Log:
- Riset data riil (WebSearch/WebFetch 20 Okt 2026): 31 PPIU baru izin Kemenag Mei 2025 (kemenag.go.id); 18 PIHK + nomor KMA lengkap dari dokumen resmi "Daftar Resmi PIHK Kemenag 2025"; 22 anggota HIMPUH + alamat kantor (himpuh.or.id); 7 perusahaan tersanksi Kemenag Jatim 2025; 3.631 PPIU terdaftar SISKOPATUH (Kemenhaj); kuota haji khusus 2025 = 17.680; regulasi UU 8/2019, UU 14/2025, PMHU 1/2025, PMHU 6/2025, PMA 8/2018; maskapai haji 2025 resmi = Garuda + Lion Group + Saudia (Kemenag, 6 Jan 2025); Lion Air CGK-JED 8x/minggu A330-300 433 kursi sejak 13 Jul 2025; Citilink charter umrah dari 9 kota sejak 27 Jul 2024 (mitra resmi: PT Riau Wisata Hati)
- Prisma schema R2 (6 model): DataSource, SyncEvent, Company (unique name+orgType), SanctionRecord, GovRegulation, Airline + FlightRoute → db push ✓
- Seed scripts/seed-r2.ts: 78 penyelenggara riil (18 PIHK ber-KMA + 22 HIMPUH + 31 PPIU baru + 7 SANKSI), 7 maskapai (GA/SV/JT/QG/IU/MS/TK), 19 rute, 9 sumber resmi, 6 regulasi + bootstrap SyncEvent audit trail
- API R2 (5 endpoint): /api/r2/companies (filter q/type/province/status + facets), /api/r2/airlines (+rute & byService), /api/r2/stats (agregat + konteks industri), /api/r2/sources (+riwayat sync), /api/r2/sync (POST — pipeline validasi + audit trail)
- Frontend R2: halaman /#/pusat-data (Pusat Data Nasional: stat cards, konteks industri, panel 9 sumber dengan tombol Sinkronkan live, direktori DB filterable + provenance link, daftar sanksi publik, JSON-LD Dataset); halaman /#/maskapai (7 kartu maskapai + tabel rute riil + filter kategori + JSON-LD ItemList/Airline); tool Cek Izin PPIU di-upgrade cek database nasional riil dulu (panel R2: AKTIF hijau/BARU kuning/SANKSI merah + sumber resmi), fallback master Founding Partner
- Integrasi: route app.tsx, nav chrome.tsx (dropdown Direktori + Cari Paket), i18n 3 bahasa (nav.data/nav.airlines), SEO_MAP /pusat-data & /maskapai, Peta Situs +2 link
- Defect diperbaiki: sintaks await-in-map seed; lint set-state-in-effect → refactor effect ke pattern fetch-then-setState dengan alive guard; error "Database is not defined" hanya artefak hot-reload transisi (setelah reload fresh: 0 error, semua 200)
- Verifikasi Agent Browser: /#/pusat-data (stats 78/9/7/7 ✓, konteks 3.631 PPIU + 17.680 ✓, sinkronkan HIMPUH → "22 record tervalidasi unik" ✓, filter PIHK → 18 baris ✓, search Al Ahram → 1 hasil presisi ✓, chip provinsi ✓, sanksi PT Mulia Wisata Abadi tampil ✓); /#/maskapai (7 kartu ✓, filter charter → 3 kartu 11 rute ✓, Lion 8x/minggu A330-300 ✓); Cek Izin "Al Ahram" → DITEMUKAN + KMA 785/2017 + alamat + sumber ✓; Cek Izin "Mulia Wisata Abadi" → WASPADA SANKSI + sumber Kemenag Jatim ✓; title SEO dinamis ✓; mobile 390px + dark mode ✓; lint 0 error ✓; GET / & API 200 ✓

Stage Summary:
- R2 "Fondasi Data Nasional" jadi: platform bertransisi dari data demo → DATABASE RIIL dengan provenance auditable
- 78 penyelenggara terindeks dari 9 sumber resmi (Kemenag, Kemenhaj/SISKOPATUH, Satu Data, Saudi MOHU, Kemenparekraf, HIMPUH, Kemenag Jatim, maskapai) + 7 maskapai/19 rute riil
- Tool Cek Izin kini benar-benar berguna publik: mengenali PIHK ber-KMA, PPIU izin baru 2025, dan perusahaan tersanksi
- Screenshot: download/solusihajj/screenshot-r2-pusat-data.png, screenshot-r2-maskapai.png, screenshot-r2-desktop.png
- Seed script persisten di scripts/seed-r2.ts — pipeline siap diperluas (tambah halaman HIMPUH 2-18, eservices.haj.gov.sa Asia-wide) pada iterasi berikutnya

---
Task ID: 5
Agent: Z.ai Main Agent (SolusiHajj R3 Builder)
Task: "Gas semua" — (1) HIMPUF halaman 2-18 -> 450+ anggota, (2) sumber Asia (Saudi MOHU eservices/Nusuk) direktori lintas negara, (3) R3 escrow aktif + AI, (4) README ID/EN terbaik dunia.

Work Log:
- Riset & probe sumber: HIMPUH daftar-anggota punya 19 halaman (bukan 18); eservices.haj.gov.sa timeout dari sandbox -> substitusi resmi: umrah.nusuk.sa/ServiceProviders (platform MOHU) + mora.gov.pk (MORA Pakistan)
- Scraper fetch-himpuh-full.ts (resumable, checkpoint JSONL): 19 halaman daftar -> 474 baris; 474 halaman detail 100% sukses -> jenis anggota (PIHK 249/PPIU 223/BPW 2), no registrasi, telepon, email, website, provinsi (22 provinsi)
- Scraper fetch-asia.ts: Nusuk 47 provider (nama, kota, telepon, email Cloudflare-decoded, about) + Pakistan 344 baris mentah -> 228 nama operator bersih
- Bug diperbaiki: split regex <td menelan atribut style -> filter 120 char gagal (0 hasil Pakistan) -> perbaiki pemotongan atribut tag pembuka + fallback pola span color:black
- Prisma +3 model R3: EscrowContract, EscrowMilestone (unik contractId+seq), EscrowEvent (append-only), AiMatchSession + relasi Company.escrowContracts; db push OK
- seed-r3.ts: hapus import HIMPUH lama, import 474 HIMPUH (dedup by normalized name, merge vs create), 47 NUSUK (orgType USP, SA), 228 UTO (PK), status TERDAFTAR; update DataSource recordsIndexed + SyncEvent SUCCESS; 4 kontrak escrow contoh (DRAFT/FUNDED/PARTIAL_RELEASE/SETTLED)
- HASIL DB: 796 organisasi (PPIU 258, PIHK 261, USP 47, UTO 228, BPW 2) di ID 521/PK 228/SA 47
- API R3: /api/r3/escrow (GET list+volume, POST create dengan milestone 40/40/20 otomatis + validasi), /api/r3/escrow/[id] (GET detail+audit, POST mesin status FUND/RELEASE/DISPUTE/RESOLVE/REFUND dengan guard: rilis berurutan, sengketa min 10 char, refund hanya sisa), /api/r3/ai/match (POST: kandidat nyata katalog<=115% budget + 8 operator DB -> GLM-4 JSON ketat -> simpan sesi; fallback skor deterministik; GET riwayat)
- Halaman R3: /#/escrow-aktif (Pusat AmanahEscrow: stat volume dana, form buka kontrak dengan pencarian operator DB nasional, kartu kontrak + progress rilis, dialog detail milestone + aksi dual-control + audit trail Saksi Jamaah, JSON-LD Service), /#/nurmatch-ai (form profil: slider budget, kota, bulan, pax, paspor, gaya, prioritas, catatan -> hasil AI: verdict+reasoning mini-markdown+picks dengan link paket/DB+saran+follow-up klik-untuk-pertajam+riwayat transparan, JSON-LD SoftwareApplication)
- Integrasi: app.tsx 2 route baru, chrome.tsx nav (Direktori + Cari Paket), i18n 3 bahasa, SEO_MAP 2 entri, peta situs 2 link
- Insiden: dev server bawaan (lama) di-restart manual setelah Prisma client stale; server latar mati antar panggilan -> solve: daemon double-fork Python + semua uji API dalam satu panggilan; insiden kedua OOM diduga akar penyebab (next-server 1.5GB + seed/scrape paralel)
- Verifikasi API: FUND->FUNDED, RELEASE seq1 40% -> PARTIAL_RELEASE, guard urutan menolak seq3, DISPUTE->RESOLVE->audit trail 9 event, CREATE->SH-ESC-2026-00005, validasi form ditolak
- NurMatch AI LIVE teruji: GLM-4-plus 9.1 dtk, verdict+reasoning+paket LA Ramadhan 1448+2 operator PIHK DB nasional+saran+followUps; patch prompt agar tak membocorkan refId mentah
- Agent Browser: /#/escrow-aktif desktop+mobile 390px (stat cards, form, kartu kontrak, dialog milestone RELEASED/HELD, audit trail), rilis dari UI -> DB 80% cair, /#/nurmatch-ai golden path sampai hasil AI tampil, homepage 17 section tanpa error, title SEO dinamis per route benar
- Lint: 0 error (1 warning font lama)
- README: README.md (EN) + README_ID.md (ID) dengan badges, mermaid (arsitektur + state diagram escrow), tabel angka kunci, API reference, design system, roadmap; arsip salinan di download/solusihajj/README-EN.md & README-ID.md

Stage Summary:
- R3 "AmanahEscrow Aktif + NurMatch AI" jadi: escrow bukan lagi simulasi — mesin status nyata di DB dengan dual-control & audit trail; NurMatch AI LLM hidup dengan pagar anti-halusinasi + fallback
- Direktori Asia penuh: 796 organisasi — HIMPUH 474/474 detail lengkap (22 provinsi), Nusuk Saudi 47, Pakistan MORA 228, ditambah data R2 (Kemenag/Kemenhaj/SISKOPATUH/sanksi)
- Scraper persisten: scripts/fetch-himpuh-full.ts (resumable), scripts/fetch-asia.ts, seed-r3.ts — pipeline dapat diulang kapan saja
- README dwibahasa kelas dunia: README.md + README_ID.md (badges, mermaid, tabel, arsitektur)
- Screenshot baru: screenshot-r3-escrow.png, screenshot-r3-nurmatch.png, screenshot-r3-nurmatch-result.png, screenshot-r3-desktop.png (download/solusihajj/)

---
Task ID: 6
Agent: Z.ai Main Agent (SolusiHajj v7 Builder)
Task: "carikan 20 website marketplace haji umroh teratas dan terbaik lalu gabungkan semuanya ada disini dan buatkan logo solusiHajj lalu ganti logo Z nya"

Work Log:
- Riset web (WebSearch multi-putaran, 20 Okt 2026): memetakan 20+ platform haji/umrah teratas lintas 9+ negara — Indonesia (umroh.com, pengenumroh, Dream Tours, Rabbani, Jejak Imani, Traveloka), Saudi resmi (Nusuk Hajj, Nusuk Umrah, Direct Umrah MOHU Sep 2026), OTA global/Muslim (Wego, Almatar, Musafir UAE, HalalBooking UK, Tripfez MY, HalalTrip SG, DawnTravels US, International Hajj US, ShareTrip BD, Wakanow NG, BookMyUmrahTrip); detail fitur killer tiap platform diekstraksi dari situs resmi + rilis MOHU (Direct Umrah: mitra ShareTrip/Wakanow/Bookme/Wego/Almatar)
- LOGO BARU "Gerbang Amanah": public/logo.svg didesain ulang dari nol — ubin zamrud gradien (#118060→#0E6B4E→#0A4A36, rx 116), orbit gading (dasharray 845.6/210, celah kanan-atas), Ka'bah #17181D 168px dengan hizam emas gradien + stitch + highlight, bintang Nur 8 titik di celah orbit; + public/logo-full.svg (lockup wordmark: Solusi #0B2E24 / Hajj #0E6B4E / titik emas + tagline + strip kredensial escrow/verifikasi/796 penyelenggara); + public/icon-maskable.svg full-bleed
- GANTI LOGO Z: scripts/gen-icons.mjs (sharp + ICO writer manual tanpa dependensi) → favicon.ico (16/32/48, PNG payload), favicon-16/32/48.png, icon-192/512.png, apple-touch-icon.png 180; layout.tsx metadata.icons diganti ke set lengkap (favicon.ico + 32 + 192 + apple); favicon tab browser kini SolusiHajj, bukan Z lama; verifikasi semua asset 200 + content-type benar
- Data benchmark: src/data/benchmark.ts — 20 entri terstruktur (rank, flag, kategori, skala, 3 fitur killer, fitur diadopsi ke SolusiHajj, pembeda eksklusif "Lebih dari X") + fusionFeatures 12 fitur gabungan dengan status LIVE/LIVE R2/LIVE R3/ROADMAP + capabilityMatrix 10 baris "x/20 benchmark vs SolusiHajj" + fusionStats
- Halaman /benchmark: hero + 4 stat, rumus gabungan 4 langkah (Marketplace+Kepatuhan+OTA+Amanah), grid 20 kartu (badge peringkat emas top-3, chip kategori/negara, daftar fitur, panel adopsi, callout eksklusif), grid 12 fitur gabungan + status badge, tabel matriks kemampuan di section gelap + metodologi, CTA ganda; JSON-LD ItemList (20 WebSite) + ScholarlyArticle; teks hero 12 negara & kawasan (konsisten stat)
- Wiring: app.tsx (route /benchmark), chrome.tsx (nav Panduan item highlight icon Lightbulb + mobile drawer highlight styling + footer link "Benchmark 20 Teratas Dunia"), site-seo.ts (SEO_MAP /benchmark), resources.tsx (peta situs), i18n nav.benchmark (ID/EN/AR)
- Verifikasi: lint 0 error; browser 1440px & 390px — hero, 20 kartu, matriks, CTA render sempurna; document.title dinamis "/benchmark" ✓; favicon.ico ter-serve ✓; homepage utuh dengan logo baru ✓; screenshot 5 buah di download/solusihajj/
Stage Summary:
- "Gabungkan semuanya ada disini" terwujud sebagai halaman /benchmark: audit transparan 20 platform dunia + matriks fitur yang benar-benar digabungkan (12 fitur, mayoritas sudah live) + 4 kemampuan eksklusif (escrow 40/40/20, sanksi publik, review Saksi Jamaah, Cek Izin publik) yang 0/20 benchmark miliki
- Brand identity final: logo "Gerbang Amanah" menggantikan logo Z di favicon/OG/header + set ikon lengkap (ICO/PNG/apple) — siap PWA
- SEO: +1 halaman riset dengan JSON-LD ItemList 20 situs (peluang rich result & backlink tabel benchmark), masuk nav/footer/peta-situs/SEO_MAP/i18n 3 bahasa
