# 📄 DOKUMEN 28 — FORM & INTEGRATION TEST
## Uji End-to-End Form, WhatsApp, Pembayaran, Webhook & Email

**Project:** SolusiHajj (solusihajj.com) | **Versi:** 1.0 | **Status:** Locked | **Aturan emas:** setiap titik gagal punya jalur alternatif ke WhatsApp — lead tidak boleh hangus

---

## 1. RUANG LINGKUP

Dokumen ini khusus menguji seluruh "pipa integrasi": form → email/WA → data tersimpan; tombol WA pre-filled → app terbuka; pembayaran → webhook → status; OTP → sesi. Bug UI memalukan; bug pipa ini MEMATIKAN bisnis (lead hilang, dana tidak tercatat). Karena itu diuji end-to-end dengan alat dan akun nyata di staging, lalu sekali di production saat go-live.

## 2. FORM LEAD (R1 — kalkulator haji, kontak, WA-07/10)

| ID | Skenario | Hasil wajib |
|---|---|---|
| FIT-101 | Submit valid (nama+WA) | Email masuk inbox founder ≤ 1 menit; folder spam dicek → whitelist |
| FIT-102 | WA format: 08xx, 62xx, +62xx | Ketiganya lolos; 12 digit acak ditolak dengan pesan jelas |
| FIT-103 | Honeypot terisi | Terima diam-diam (silent reject), tidak ada notifikasi — penyerang tidak tahu |
| FIT-104 | Double submit cepat | Rate limit 3/10 menit; pesan sopan + tombol WA manual |
| FIT-105 | Koneksi putus saat submit | Retry aman; tidak ada dobel email; fallback tampil |
| FIT-106 | Kalkulator → kirim hasil ke WA | Link wa.me terbuka app dengan hasil ringkas terisi |
| FIT-107 | Email gagal kirim (simulasi) | Pesan error + TOMBOL WA MANUAL tampil (aturan emas) |

## 3. WHATSAPP PRE-FILLED (10 varian WA-01..WA-10)

Per varian: klik di Android & iOS → app WA terbuka → teks & nomor benar → tidak ada karakter ter-encode ganda (`%20` dsb. benar) → nomor tujuan format internasional benar (62xxx). Uji juga versi WhatsApp Business di penerima: pesan masuk rapi. Khusus WA-05/06 (hasil cek izin): konteks nama travel ikut terisi dari state halaman.

## 4. BOOKING → PAYMENT → WEBHOOK (R2, staging sandbox)

| ID | Skenario | Hasil wajib |
|---|---|---|
| FIT-201 | Alur penuh booking→VA→bayar sandbox | Status berantai benar: DRAFT→KONTRAK→MENUNGGU→TERBAYAR→escrow TERTAHAN |
| FIT-202 | QRIS & e-wallet (sandbox) | Sama seperti VA; nominal integer benar (uji Rp 28.500.000, bukan 28,5) |
| FIT-203 | Bayar sebagian/tidak selesai | Status tetap MENUNGGU; expiry VA jelas; booking bisa diulang |
| FIT-204 | Webhook: valid/duplikat/signature salah | Sesuai TC-205/206 — idempoten, log lengkap |
| FIT-205 | Simulasi notifikasi jatuh tempo | Email+WA terkirim sekali per template, tidak spam |
| FIT-206 | Refund setelah batal | Uang kembali via gateway; status & bukti tercatat |

## 5. OTP & SESI

| ID | Skenario | Hasil wajib |
|---|---|---|
| FIT-301 | OTP WA: benar / salah 5x / kedaluwarsa | Masuk ≤ 30 detik; lockout sementara; pesan expiry |
| FIT-302 | Login di 2 perangkat | Sesi tidak saling menggusur; admin idle 30 menit |
| FIT-303 | Logout → back button | Halaman terlindungi tidak tampil dari cache |

## 6. EMAIL TRANSAKSIONAL (12 momen)

Daftar momen wajib terkirim (masing-masing satu template): daftar sukses, booking dibuat, kontrak ditandatangani, instruksi bayar, pembayaran terverifikasi, escrow milestone rilis, visa diterima, H-7 pengingat, manifest siap, keberangkatan, kepulangan+undangan review, refund. Uji: tampil benar di Gmail web/app, Outlook, dan Mail iOS; semua link bermakna (bukan "klik di sini"); sender: notifikasi@solusihajj.com dengan SPF/DKIM/DMARC tervalidasi (dok 30) — uji ke deliverability (mail-tester ≥ 9/10).

## 7. EKSEKUSI & BUKTI

Diuji di staging penuh per rilis mayor + smoke 10 menit di production saat go-live (1 booking dummy via jalur test yang dihapus + rekonsiliasi). Bukti: tabel ✅ dengan tangkapan layar email/WA/status, disimpan `docs/form-test-report-vX.md`. Kegagalan FIT-2xx/3xx (pipa dana & sesi) = P0 blocker. Ulang uji penuh setiap: ganti gateway, ganti nomor WA resmi, ganti domain/template email — perubahan pipa = uji ulang pipa.
