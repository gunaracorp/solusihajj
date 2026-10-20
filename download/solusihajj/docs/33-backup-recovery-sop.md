# 📄 DOKUMEN 34 — BACKUP & RECOVERY SOP
## Asuransi Project — Tanpa Backup, Semua yang Kita Bangun Adalah Perjudian

**Project:** SolusiHajj (solusihajj.com) | **Versi:** 1.0 | **Status:** Locked | **Target:** RPO ≤ 24 jam (R1) / ≤ 1 jam (R2) • RTO ≤ 4 jam (R1) / ≤ 1 jam (R2)

---

## 1. FILOSOFI

Backup yang belum pernah dites restore = tidak ada backup. Ketiga aset kritis SolusiHajj: **(1) kode & dokumen** (GitHub + lokal), **(2) database** (jamaah, booking, escrow, review), **(3) berkas** (foto paket, dokumen KYC, bukti escrow). Setiap aset punya jadwal, lokasi offsite, dan latihan restore. Aturan 3-2-1 disederhanakan untuk skala kita: 2 salinan di 2 tempat berbeda, 1 otomatis.

## 2. MATRIKS BACKUP

| Aset | Frekuensi | Metode | Lokasi | Retensi |
|---|---|---|---|---|
| Kode + docs (git) | Setiap push | GitHub (utama) + clone mingguan | GitHub + drive founder | Permanen |
| DB PostgreSQL (R2) | Harian otomatis 02.00 WIB + sebelum tiap deploy | `pg_dump` terenkripsi | Object storage (Cloudflare R2/S3) region berbeda + salinan mingguan drive founder | Harian 30 hari, mingguan 6 bulan |
| DB WAL / point-in-time (managed DB) | Kontinu | Fitur provider | Provider | 7 hari |
| Berkas uploads/KYC (R2) | Harian delta | rclone sync terenkripsi | R2/S3 | 90 hari |
| Bukti escrow & payout | Per rilis dana + harian ikut berkas | rclone + laporan PDF bulanan | R2 + drive founder | 10 tahun (wajib hukum keuangan) |
| `.env` snapshot (R2) | Saat perubahan | Tersimpan di password manager founder (Bitwarden) | Bitwarden | Permanen |
| R1 katalog statis | Setiap build | Repo git = sumber kebenaran + arsip dist/ | GitHub + hosting | Permanen |

## 3. ENKRIPSI BACKUP

Semua backup DB & berkas yang keluar server wajib terenkripsi (age/gpg dengan kunci di Bitwarden — TIDAK di server yang sama dengan backup, logika sama dengan PII key dok 22 §4). Nama file backup: `shj-db-YYYYMMDD-HHMM.sql.age`. Manifest harian (daftar + checksum) ditulis ke file log kecil — rekonsiliasi mingguan: apakah 7 file terakhir ada & checksum cocok.

## 4. LATIHAN RESTORE (yang membedakan profesional dari pemberani)

Jadwal: **kuartalan**, dikalenderkan (dok 36). Prosedur latihan R2:
```
1. Ambil backup acak D-x dari offsite
2. Restore ke VPS/DB sementara (staging-restore)  — target ≤ 1 jam
3. Bandingkan: jumlah booking hari itu, 1 escrow terakhir, 1 review
4. Uji login dummy + halaman katalog + /api/health
5. Catat durasi, hambatan, perbaikan proses → changelog
```
Hasil latihan wajib terdokumentasi di changelog — "latihan restore sukses 47 menit" adalah kalimat yang menenangkan saat audit maupun saat krisis nyata.

## 5. SOP SAAT INSIDEN (ringkas — detail di runbook C dok 30)

**DB korup/hilang:** hentikan aplikasi (maintenance page) → cek rekonsiliasi escrow terakhir → restore backup terbaru sehat → replay bila ada WAL → verifikasi selisih dana = NOL → buka lagi → post-mortem. **Server hilang (VPS mati permanen):** provision VPS baru → restore DB + berkas → deploy image terakhir → ubah DNS A record (TTL rendah membantu, dok 31 §5) → verifikasi smoke. **Ransomware/data rusak pelan-pelan (terdeteksi lambat):** jangan backup-over-backup yang sudah rusak — selidiki titik waktu sehat lewat rekonsiliasi, restore dari titik itu. **Hosting R1 hilang:** build ulang dari git → upload ke hosting baru → DNS — RTO 2 jam, karena R1 sepenuhnya ada di repo.

## 6. TANGGUNG JAWAB & PENJAGAAN

Pemilik: founder (akun offsite di Bitwarden, 2FA). Eksekutor harian: cron di VPS + notifikasi keberhasilan/gagal ke WA founder (backup gagal = P0, diperbaiki hari itu juga — jangan tunggu butuh baru tahu rusak). Mingguan: CEO-Chief agent mengingatkan cek manifest. Kuartalan: latihan restore (Bagian 4) + review retensi. Semua log backup & latihan tercatat di changelog — bukti kesungguhan menjaga amanah jamaah, yang pada akhirnya adalah produk utama SolusiHajj.
