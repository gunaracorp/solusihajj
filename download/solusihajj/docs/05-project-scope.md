# 📄 DOKUMEN 06 — PROJECT SCOPE
## Tiga Rilis Terkunci — Tidak Ada "Katanya", Hanya Eksekusi

**Project:** SolusiHajj (solusihajj.com) | **Versi:** 1.0 | **Status:** Locked | **Perubahan hanya via:** Change Request (Bagian 6)

---

## 1. FILSAFAT SCOPE

Marketplace adalah makhluk yang paling mudah mati karena kegemukan: semua fitur ingin dibangun, tidak ada yang rilis, pasar dicuri kompetitor. SolusiHajj mengikuti disiplin yang sudah terbukti di Project-FORTRESS: **ide bagus yang menunda launch = ide buruk.** Karena itu scope dibagi menjadi 3 rilis dengan gerbang validasi di antaranya. Fitur premium (escrow, tracking, AI, review) tetap di dalam spesifikasi penuh BRD (dok 03), namun dibangun di urutan yang membuat setiap rilis berdiri sendiri dan menghasilkan uang/validasi.

## 2. RILIS 1.0 — "GERBANG KEPERCAYAAN" (Minggu 1–8, Shared Hosting)

**Bentuk:** Next.js static export di shared hosting. Tanpa database, tanpa login, tanpa risiko.

| # | Item | Prioritas |
|---|---|---|
| 1 | Homepage trust-first: hero, trust bar, katalog unggulan, verifikasi 5 lapis, escrow explainer, FAQ, CTA | P0 |
| 2 | Katalog paket statis: 20–30 paket dari 10 PPIU Founding Partner (data via file JSON, dikelola founder) | P0 |
| 3 | Halaman toko PPIU statis per partner (izin, badge, profil, kontak WA) | P0 |
| 4 | Tool "Cek Izin PPIU" versi statis (data master lokal) | P0 |
| 5 | Kalkulator simpanan haji (klien-side, lead magnet → tangkap via form + WA) | P0 |
| 6 | Edukasi: 8 artikel peluncuran + panduan umrah + doa-doa ziarah (statis) | P1 |
| 7 | Funnel konversi: WA pre-filled 10 varian + form lead (EmailJS/PHP mailer) | P0 |
| 8 | GA4 + Search Console + sitemap + schema markup | P0 |

**Out of scope R1 (DILARANG dikerjakan):** booking online, login, database, escrow otomatis, tracking, AI, review on-platform.
**Gerbang ke R2:** 200 booking intent/bln via WA, 30 PPIU antre onboarding, dana teknis siap (VPS + gateway + escrow bank).

## 3. RILIS 2.0 — "MESIN MARKETPLACE" (Bulan 3–6, VPS/Cloud)

**Bentuk:** Next.js full-stack (App Router) + PostgreSQL + Prisma + NextAuth + payment gateway.

| # | Item | Prioritas |
|---|---|---|
| 1 | Akun jamaah & PPIU (NextAuth: email+WA OTP) | P0 |
| 2 | Booking online end-to-end (FR-104, FR-105) + keranjang keluarga | P0 |
| 3 | AmanahEscrow: VA per booking, escrow bank syariah, rilis bertahap manual-assisted (FR-201..205) | P0 |
| 4 | Console PPIU v1: kelola paket, kuota, konfirmasi, unggah dokumen | P0 |
| 5 | Saksi Jamaah v1: review gating + rating 6 dimensi + balasan PPIU (FR-501..504) | P0 |
| 6 | Admin console: approval PPIU, moderasi, monitoring escrow, dispute | P0 |
| 7 | Notifikasi: email + WhatsApp (template resmi) untuk 12 momen kunci | P1 |
| 8 | Migration katalog R1 → database | P0 |

**Out of scope R2:** tracking GPS, AI matching, VAS marketplace, escrow otomatis penuh, multi-bahasa.
**Gerbang ke R3:** 300 booking/bulan, escrow berjalan 3 bulan tanpa insiden finansial, dispute rate < 2%.

## 4. RILIS 3.0 — "PENDAMPING CERDAS" (Bulan 7–12)

| # | Item | Prioritas |
|---|---|---|
| 1 | Aplikasi pendamping (React Native) : e-itinerary offline, doa per ziarah | P0 |
| 2 | Hafizh Track: opt-in tracking, undangan keluarga, notifikasi aman, SOS (FR-301..306) | P0 |
| 3 | NurMatch AI: profil + rekomendasi transparan + chatbot FAQ berbasis basis data (FR-401..404) | P1 |
| 4 | Escrow rilis otomatis dengan bukti dokumen + webhook | P1 |
| 5 | VAS marketplace: asuransi, SIM card, laundry, titip doa, kurir haji (FR-701) | P1 |
| 6 | Console PPIU v2: analitik permintaan, laporan payout | P1 |
| 7 | Saksi Jamaah v2: verifikasi foto metadata, fraud detection (FR-503, FR-505) | P1 |

## 5. ASUMSI & KENDALA TETAP

| Kendala | Dampak | Sikap |
|---|---|---|
| R1 di shared hosting (tanpa Node) | Wajib static export + data JSON | Terima — ini pola FORTRESS terbukti |
| Budget R1 minimal | Tool gratis: GA4, EmailJS, VA manual di R2 awal | Disiplin biaya, upgrade hanya setelah validasi |
| Escrow butuh kesepakatan bank (waktu proses 1–2 bulan) | Mulai urus di bulan 1 (paralel dengan build) | Founder punya pipeline, didelegasikan mingguan |
| Tenaga: founder + AI agents | Kapasitas terbatas | SOP ketat dok 36, kerja paralel via 15 agent GUNARA OS |

## 6. PROSES CHANGE REQUEST

1. Tulis ide di `backlog.md` — JANGAN eksekusi langsung.
2. Klasifikasi: P0 (bug/kepatuhan) / P1 (penting, tunda rilis) / P2 (nice-to-have).
3. P0 boleh langsung; P1–P2 menunggu gerbang rilis selesai.
4. Perubahan P1+ wajib update dokumen ini + commit `scope: [deskripsi]`.
5. Setiap minggu, backlog direview bersama CEO-Chief agent — ide yang tidak menguatkan "Amanah Anda, Aman" ditolak tanpa diskusi panjang.

## 7. DELIVERABLES FINAL PER RILIS

R1: source di GitHub (private), situs live + SSL, docs lengkap, dashboard GA4. R2: + database + escrow berjalan + console. R3: + aplikasi pendamping + AI + VAS. Setiap rilis diserahkan dengan tag `v1.0.0`, `v2.0.0`, `v3.0.0` dan laporan Lighthouse (dok 28).
