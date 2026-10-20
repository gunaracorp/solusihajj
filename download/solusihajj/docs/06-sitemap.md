# 📄 DOKUMEN 07 — SITEMAP & INFORMASI ARSITEKTUR
## Peta Seluruh Halaman, Navigasi & Aturan URL

**Project:** SolusiHajj (solusihajj.com) | **Versi:** 1.0 | **Status:** Locked

---

## 1. PRINSIP URL

- Bahasa Indonesia, huruf kecil, pemisah tanda minus, maksimal 4 kata, keyword di depan.
- Kedalaman maksimal 2 level (`/paket/umrah-ramadhan/`).
- R1 dan R2 memakai URL identik agar SEO tidak patah saat migrasi: halaman statis R1 menjadi route dinamis R2 dengan slug sama persis.
- Setiap halaman punya canonical; parameter pencarian (`?tanggal=...`) tidak diindeks.

## 2. PETA URL LENGKAP

```
solusihajj.com/
├── /                                Homepage trust-first
├── /paket/                          Katalog + pencarian & filter (R1 statis, R2 dinamis)
│   └── /paket/[slug]/               Detail paket: itinerary, hotel, harga all-in, PPIU, review
├── /ppiu/                           Direktori PPIU terverifikasi
│   └── /ppiu/[slug]/                Halaman toko PPIU: izin, badge, riwayat, review
├── /verifikasi/                     Pusat kepercayaan: jelaskan Verifikasi 5 Lapis
│   └── /verifikasi/cek-izin-ppiu/   TOOL publik: cek status travel (R1)
├── /escrow/                         AmanahEscrow: alur dana, tabel milestone, FAQ
├── /edukasi/                        Index artikel (blog)
│   └── /edukasi/[slug]/             Detail artikel (panduan, doa, biaya, tips)
├── /kalkulator-haji/                Kalkulator simpanan haji (R1, lead magnet)
├── /tentang/                        Cerita, tim, legalitas PT, Dewan Syariah
├── /kontak/                         Form + WA + NAP + jam operasional
├── /faq/                            FAQ global (schema FAQPage)
│
├── /masuk/                          Login jamaah & PPIU (R2)
├── /daftar/                         Registrasi jamaah (R2)
├── /akun/                           Dashboard jamaah (R2)
│   ├── /akun/booking/[id]/          Status booking, dokumen, pembayaran, kontrak
│   └── /akun/escrow/[id]/           Status escrow per booking
├── /ppiu/dashboard/                 Console PPIU (R2)
│   ├── /ppiu/dashboard/paket/       Kelola paket & kuota
│   ├── /ppiu/dashboard/booking/     Konfirmasi & dokumen jamaah
│   └── /ppiu/dashboard/payout/      Jadwal rilis escrow
├── /admin/                          Admin console (R2, role-gated)
│
├── /kebijakan-privasi/              UU PDP + praktik data paspor
├── /syarat-ketentuan/               Term platform (jamaah & PPIU)
├── /404                             Halaman tidak ditemukan
├── /sitemap.xml                     Mesin pencari
└── /robots.txt                      Aturan crawl
```

**Rilis 3.0 (aplikasi pendamping, bukan web):** e-itinerary, tracking, SOS, doa — seluruhnya di aplikasi React Native "SolusiHajj Jamaah"; web hanya menyediakan halaman ` hafizh.solusihajj.com` untuk pengikut keluarga (undangan via link).

## 3. NAVIGASI HEADER

```
[LOGO SolusiHajj ✓shield]  Cari Paket ▾ | Verifikasi | Escrow | Edukasi | Tentang   [Cari Paket Umrah →]  [💬 WA]
                                    ├── Paket Umrah Reguler
                                    ├── Paket Umrah Ramadhan
                                    ├── Paket Umrah Plus Turki
                                    ├── Cek Izin PPIU ⭐
                                    └── Direktori PPIU
```

- Mobile: hamburger → drawer slide-in; CTA "Cari Paket" + ikon WA tetap tampil.
- Pada halaman akun/console, header berganti ke navigasi kontekstual dashboard.

## 4. NAVIGASI FOOTER (3 Kolom + NAP)

```
KOLOM 1: JAMAAH                KOLOM 2: KEPERCAYAAN          KOLOM 3: KONTAK & LEGAL
- Cari Paket Umrah             - Verifikasi 5 Lapis          - PT [nama] — alamat kantor
- Kalkulator Simpanan Haji     - AmanahEscrow                - WA: +62xxx (klik)
- Panduan Umrah (edukasi)      - Cek Izin PPIU               - Email: salam@solusihajj.com
- FAQ                          - Saksi Jamaah (review)       - Jam operasional
                               - Kebijakan Privasi
[Legal Line] © 2026 PT [X] — Platform teknologi perlindungan jamaah | SolusiHajj bukan penyelenggara perjalanan ibadah; kontrak perjalanan dibuat langsung antara jamaah dan PPIU.
```

⚠️ Legal line ini wajib — memperjelas posisi platform (fasisilitator) dan melindungi dari penilaian "penyelenggara perjalanan tanpa izin". NAP harus identik dengan Google Business Profile.

## 5. BREADCRUMB

Semua halaman kecuali homepage menampilkan breadcrumb dengan schema BreadcrumbList: `Beranda › Paket › Umrah Ramadhan 9 Hari [PPIU X]`.

## 6. PETA INTERNAL LINKING (Strategi Konversi)

```
Artikel edukasi ──(anchor relevan)──► Halaman paket/PPIU ──► WA / Booking
      ▲                                        │
      └──── artikel terkait antar-artikel ◄────┘
Tool "Cek Izin PPIU" ──(bukti terpercaya)──► Direktori PPIU ──► Toko PPIU ──► Paketnya
Kalkulator Haji ──(lead capture)──► Nurture WA/email ──► Paket Umrah (cross-sell)
```

ATURAN: (1) setiap artikel link minimal 1 halaman paket/layanan; (2) setiap halaman paket link ke 2 artikel pendukung + halaman escrow; (3) halaman toko PPIU menampilkan 3 paket terbaiknya; (4) anchor text deskriptif, bukan "klik di sini".

## 7. HALAMAN WAJIB KEPATUHAN

Halaman kebijakan privasi menjelaskan secara khusus: jenis data yang dikumpulkan (termasuk paspor), dasar hukum pemrosesan, retensi (lokasi tracking 30 hari), hak subjek data sesuai UU No. 27/2022, dan kontak DPO. Halaman syarat & ketentuan memisahkan tiga relasi: platform–jamaah, platform–PPIU, dan kontrak perjalanan jamaah–PPIU. Kedua halaman ini direview Legal-Eagle agent sebelum setiap rilis.
