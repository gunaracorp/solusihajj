# 📄 DOKUMEN 26 — TEST PLAN
## Skenario Uji Fungsional per Fitur — Tidak Lewat, Tidak Deploy

**Project:** SolusiHajj (solusihajj.com) | **Versi:** 1.0 | **Status:** Locked | **Gate:** QA Gate NEXUS — semua checklist ✅ sebelum deploy

---

## 1. STRATEGI PENGUJIAN

Empat lapis: **(1) Unit** — logika uang, tanggal, refund, verifikasi WA (Jest/Vitest, target ≥ 70% di `lib/`); **(2) Integrasi API** — booking, escrow, webhook (Playwright API, DB test terisolasi); **(3) E2E alur inti** — 6 skenario di bawah dijalankan tiap rilis; **(4) Uji manusia** — founder memakai platform seperti jamaah sungguhan (device matrix dok 27). Prinsip: kasus uji berasal dari FR dok 03 — setiap FR punya minimal satu kasus uji bernomor TC-xxx.

## 2. TC-100: KATALOG & PENCARIAN (R1+)

| ID | Skenario | Hasil wajib |
|---|---|---|
| TC-101 | Buka homepage 3G throttled | LCP sesuai budget dok 25; hero terbaca < 3s |
| TC-102 | Filter katalog: kota+budget+jarak | Hanya paket lolos filter; jumlah hasil konsisten |
| TC-103 | Klik paket → detail | Harga all-in = jumlah rincian (uji data 3 paket) |
| TC-104 | Filter 0 hasil | Empty state + CTA WA tampil, tanpa error |
| TC-105 | Cek Izin PPIU: nama terdaftar / tidak / typo | Status benar; tidak terdaftar ≠ error crash |
| TC-106 | Kalkulator haji: umur 25 & 55 | Angka & tahun target wajar; tabel tabungan benar totalnya |

## 3. TC-200: BOOKING & KONTRAK (R2)

| ID | Skenario | Hasil wajib |
|---|---|---|
| TC-201 | Booking 2 jamaah quad | Total = harga×2; kuota berkurang 2; data paspor tersimpan terenkripsi |
| TC-202 | Booking sisa kuota 1 oleh 2 user paralel | Satu sukses, satu ditolak `QUOTA_EMPTY` — TANPA overbook |
| TC-203 | Kontrak: centang parsial | Tidak bisa lanjut; pasal kunci terbaca |
| TC-204 | Bayar VA via sandbox | Webhook terverifikasi → status TERBAYAR → escrow TERTAHAN; notifikasi 2 kanal |
| TC-205 | Webhook replika (signature salah) | Ditolak 403 + log; status TIDAK berubah |
| TC-206 | Webhook duplikat (idempoten) | Efek hanya sekali; saldo konsisten |
| TC-207 | Autosave form + refresh | Data tidak hilang |
| TC-208 | Batal sebelum visa | Refund sesuai tabel paket, dihitung benar |

## 4. TC-300: ESCROW & DISPUTE (R2) — lapis paling kritis

| ID | Skenario | Hasil wajib |
|---|---|---|
| TC-301 | Rilis milestone visa (bukti ada) | 40% cair; PayoutLog + AuditLog lengkap; status jamaah update |
| TC-302 | Rilis oleh admin yang bukan verifikator | Ditolak (dual-control) |
| TC-303 | PPIU gagal berangkatkan (simulasi) | Refund flow 100% ≤ 5 hari; badge → SUSPENDED; protokol krisis jalan |
| TC-304 | Dispute kategori hotel beda | Mediasi tercatat; kompensasi dicatat; status PPIU terdampak |
| TC-305 | Rekonsiliasi harian bank vs DB | Nol selisih; selisih = alarm P0 |
| TC-306 | Coba ubah milestone via API langsung | State machine menolak mundur; FORBIDDEN |

## 5. TC-400: REVIEW, TRACKING, AI (R2/R3)

| ID | Skenario | Hasil wajib |
|---|---|---|
| TC-401 | Review oleh user tanpa booking PULANG | Ditolak server-side (bukan hanya UI) |
| TC-402 | Review 6 dimensi valid | Masuk PENDING; setelah publish, agregat rating PPIU berubah benar |
| TC-403 | PPIU balas 2x | Kedua ditolak |
| TC-404 | Tracking consent: tanpa setuju | Tidak ada titik lokasi terekam sama sekali |
| TC-405 | Check-in hilang 12 jam | Alert ke pengikut + mutawif; jamaah aman = alert batal |
| TC-406 | SOS ditekan | Lokasi + panggilan keluar < 5 detik; panitia terima |
| TC-407 | Landing Indonesia | Tracking mati otomatis; data terhapus ≤ 30 hari (cron) |
| TC-408 | NurMatch: profil lansia stroll | Rekomendasi utama hotel dekat Haram + alasan menyebut mobilitas |
| TC-409 | Chatbot ditanya harga di luar data | Menjawab dari basis data / menolak sopan — TIDAK mengarang |

## 6. TC-500: NON-FUNCTIONAL

A11y: keyboard-only 5 alur inti; screen reader NVDA/TalkBack membaca status escrow dengan benar; zoom 200% utuh; mode teks besar. Keamanan: rate limit terpicu (429); role gate (jamaah→admin = 403); PII tidak muncul di log. Performa: budget dok 25 di 3 template. SEO: sitemap valid, schema lolos Rich Results Test, canonical benar.

## 7. PROSES & DOKUMENTASI

Rilis minor: TC inti + regresi otomatis. Rilis mayor: seluruh TC. Defect dicatat: ID, severity (P0 blocker–P3 kosmetik), langkah, bukti, status — P0 memblokir rilis tanpa kecuali (termasuk hari-H launch). Temuan uji manusia founder didokumentasikan juga — jamaah lansia tidak berpikir seperti engineer. Hasil QA final ditandatangani (checklist ✅ + tanggal + nama) di `docs/qa-signoff-vX.md` sebelum deploy production.
