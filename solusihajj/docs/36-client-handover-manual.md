# 📄 DOKUMEN 37 — CLIENT HANDOVER & OPERATIONS MANUAL
## Panduan Harian Tim Operasional — Sistem yang Menjalani Sistem

**Project:** SolusiHajj (solusihajj.com) | **Versi:** 1.0 | **Status:** Locked | **Untuk:** founder, ops admin, support — dan AI agent GUNARA OS yang mendampingi

---

## 1. CARA PAKAI DOKUMEN INI

Setiap peran punya SOP harian/mingguan/bulanan yang bisa dieksekusi tanpa menebak. Saat orang baru masuk (atau AI agent baru di-set-up), dokumen ini + dok 01-03 adalah paket orientasi lengkapnya. Aturan emas operasi marketplace ibadah: **kesalahan kecil di sini terasa besar di Tanah Suci** — bekerja dengan hati, mengeksekusi dengan checklist.

## 2. RITME HARIAN (± 60–90 menit total)

| Jam | Tugas | Alat |
|---|---|---|
| 07.00 | Cek alarm uptime/Sentry; cek WA darurat semalam | UptimeRobot, WA Business |
| 07.30 | Rekonsiliasi escrow: statement bank vs dashboard (nol selisih) | dashboard admin |
| 09.00 | Approve/verifikasi PPIU baru (5 lapis, ≤ 3 hari kerja) | admin console |
| 10.00 | Moderasi review PENDING (cek gating otomatis, buang spam) | admin console |
| Siang | Jawab leads WA (target respons ≤ 15 menit jam kerja); tag sumber di CRM | WA Business + Sheet |
| 16.00 | Update kuota paket dari konfirmasi PPIU; kirim notif jatuh tempo | console PPIU |
| 17.00 | ⛔ Tutup operasi (aturan hidup GUNARA OS: keluarga dulu) | — |

Mingguan (Jumat): patch & backup check; laporan minggu singkat; review 5 leads hangat teratas. Bulanan: laporan metrik (dok 35), review badge PPIU, rapat partner.

## 3. SOP KRITIS #1 — VERIFIKASI PPIU (5 LAPIS)

1. Legalitas: cocokkan izin PPIU di sumber resmi Kemenag (e-PPIU/BPKH); foto dokumen tersimpan di KYC vault. 2. Finansial: rekening atas nama badan usaha, bukti deposit/jaminan. 3. Operasional: audit itinerary (hotel jarak mukabumi di maps!), bukti kerja sama bus/katering. 4. Track record: telepon 2 referensi jamaah + cek aduan publik. 5. Perjanjian: akad wakalah + setuju SLA escrow. TOLAK dengan alasan spesifik + jalur perbaikan (jangan pernah ghosting). Verifikator ≠ verifikator berikutnya (dual-control).

## 4. SOP KRITIS #2 — RILIS ESCROW

Input: bukti dari PPIU (visa+tiket / manifest berangkat / laporan pulang). Cek: dokumen utuh & cocok dengan booking → verifikasi admin KEDUA (bukan yang memproses) → rilis milestone → PayoutLog + notifikasi jamaah otomatis → arsip bukti. SLA ≤ 3 hari kerja. Pernah ragu → tahan dulu, tanya PPIU — ragu yang terdokumentasi lebih baik daripada salah cair.

## 5. SOP KRITIS #3 — PROTEKOL KRISIS (jamaah di lapangan)

**Pemicu:** SOS ditekan / keluarga melapor / PPIU gagal / kabar bencana di Tanah Suci.
**Langkah 1 (0–30 menit):** hubungi mutawif & kepala rombongan via jalur SOS; pastikan kondisi jamaah; catat kronologi di tiket kasus. **Langkah 2:** sesuai kategori — kesehatan (arahkan ke RS/muassasah, hubungi asuransi), kehilangan dokumen (KJRI + tim), PPIU gagal (aktifkan refund escrow ≤ 5 hari + denda kontrak + suspend badge), kematian (protokol pengurusan di Tanah Suci + keluarga + asuransi — dengan kelembutan penuh, ini momen paling suci dari semua SOP). **Langkah 3:** komunikasi keluarga di Indonesia: satu PIC, update terjadwal, tanpa jargon. **Langkah 4 (pasca):** post-mortem, kompensasi, catat lessons (dok 39), keputusan badge PPIU. PRINSIP: kejujuran segera > penjelasan sempurna belakangan.

## 6. SOP RUTIN KONTEN & PPIU

Konten: 1 artikel/minggu (roadmap dok 10); update "Direview terakhir" saat regulasi berubah; jangan pernah edit harga paket tanpa konfirmasi PPIU (screenshot persetujuan diarsip). PPIU: onboarding disertai panggilan 30 menit; cek toko mereka tiap bulan (foto usang = minta update); kumpulkan cerita jamaah untuk bahan PR & Duta SolusiHajj.

## 7. KEAMANAN OPERASIONAL & DATA (untuk manusia)

Akses: satu akun per orang, 2FA, dicabut hari yang sama saat keluar. Data jamaah tidak pernah dikirim via WA/telegram/file pribadi — hanya via dashboard. Laptop ops: disk terenkripsi, auto-lock. Keraguan phishing → verifikasi via nomor resmi terdaftar (dok 24 §6). Password hanya di Bitwarden. Backup `.env` hanya di Bitwarden founder.

## 8. CHECKLIST SERAH TERIMA (saat menambah operator baru)

□ Baca dok 01, 03, dokumen ini □ Akun dibuat per peran + 2FA □ Ikuti 1 siklus harian penuh bersama founder □ Simulasi 3 SOP kritis (verifikasi, escrow, krisis) dengan case dummy □ Tandatangani NDA + pernyataan PDP □ Akses produksi diberikan bertahap (read → write) □ Nomor darurat founder & bank mitra tersimpan di Bitwarden tim.
