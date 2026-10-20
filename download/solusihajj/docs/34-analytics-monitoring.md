# 📄 DOKUMEN 35 — ANALYTICS & MONITORING
## Mengukur yang Benar: dari Klik sampai Jamaah Aman Pulang

**Project:** SolusiHajj (solusihajj.com) | **Versi:** 1.0 | **Status:** Locked | **Alat:** GA4 + Search Console + Sentry + Uptime + dashboard Sheets

---

## 1. FILOSOFI PENGUKURAN

Angka ratusan ribu pengunjung tidak menyelamatkan jamaah yang tertipu; angka yang benar adalah **berapa jamaah berangkat aman dan pulang puas.** North Star Metric (NSM): **Jamaah Aman Berangkat per Bulan.** Di bawahnya 4 lapis funnel: kunjungan → minat terverifikasi (cek izin/escrow) → booking intent → booking terbayar → berangkat → review. Setiap lapis punya angka target dan pemilik tindak lanjut.

## 2. EVENT MAP GA4

| Event | Trigger | Parameter |
|---|---|---|
| `page_view` | default | enhanced measurement |
| `search_package` | submit search bar | kota, budget_range |
| `filter_apply` | ubah filter katalog | filter_names |
| `package_view` | buka detail paket | package_id, ppiu_id, price |
| `wa_click` | klik tombol WA | variant (WA-01..10), page |
| `cek_izin_submit` | tool cek izin | travel_name (hashed), hasil |
| `calculator_run` | hitung kalkulator haji | umur_range, program |
| `lead_submit` | form lead sukses | source_page |
| `booking_start` / `booking_done` | mulai/selesai booking | package_id, jumlah_jamaah |
| `escrow_event` | perubahan milestone | milestone, booking_id (hashed) |
| `review_submit` | review terkirim | rating_hotel..value |
| `track_optin` | aktifkan hafizh track | booking_id (hashed) |
| `sos_press` | SOS | (tanpa detail sensitif di GA4!) |

Aturan: tidak ada data PII di GA4 (paspor, WA, nama) — hanya hashed ID. DebugView dipakai saat rilis untuk verifikasi; bulan berjalan dipantau via dashboard.

## 3. DASHBOARD BULANAN (Google Sheets — template otomatis via GA4 API/Sheet add-on)

| Blok | Metrik | Target R2 (bln 3–6) |
|---|---|---|
| Funnel | Kunjungan→booking intent→terbayar | intent 3%, terbayar 1,2% |
| Sumber | Organik / WA / komunitas / langsung | Organik ≥ 40% |
| WA | wa_click per varian, closing rate | closing 25% |
| Escrow | rata waktu verifikasi visa, SLA rilis | ≤ 3 hari kerja |
| PPIU | aktif, booking/PPIU, rating rata-rata | ≥ 4,3 |
| Kualitas | dispute rate, refund, complaint MTTR | dispute < 2% |
| Teknis | Core Web Vitals p75, uptime, error rate | sesuai dok 24/25 |

Rapat 30 menit tiap awal bulan (founder + CEO-Chief agent): angka mana yang jatuh → satu tindakan per metrik jatuh — bukan sepuluh.

## 4. SEARCH CONSOLE & SEO MONITORING

Mingguan: query muncul (terutama "apakah [travel] berizin"), CTR, halaman menang/jatuh. Alat cek izin dilaporkan sebagai fitur, bukan sekadar halaman: jumlah nama berbeda yang dicari = ukuran kebutuhan pasar. Sitemap ping saat konten baru; indeksasi cek manual mingguan.

## 5. MONITORING TEKNIS

| Layer | Alat | Alarm |
|---|---|---|
| Uptime | UptimeRobot (1 menit) | down 2x berturut → WA founder |
| Error aplikasi | Sentry (R2) | error rate > 1% atau error baru di alur dana → P0 |
| Webhook | log + rekonsiliasi harian | selisih apapun → P0 |
| Cron (hapus tracking, backup) | log harian | gagal 1x → perbaiki hari itu |
| Deliverability email | mail-tester bulanan + bounce monitor | bounce > 2% → cek DNS/auth |

## 6. LAPORAN BULANAN (format 1 halaman untuk founder — dan bahan PR untuk PPIU)

NSM + tren 3 bulan; funnel; 3 pembelajaran; 3 rencana bulan depan; status kesehatan platform (uptime, keamanan, backup terverifikasi). Versi PPIU: berisi performa toko mereka sendiri (kunjungan, konversi, rating) — transparansi yang membuat PPIU merasa platform ini milik bersama, bukan sekadar penagih komisi.
