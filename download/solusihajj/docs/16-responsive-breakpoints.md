# 📄 DOKUMEN 17 — RESPONSIVE BREAKPOINTS & LAYOUT RULES
## Mobile-First untuk Jamaah Lansia dan Anak Digitalnya

**Project:** SolusiHajj (solusihajj.com) | **Versi:** 1.0 | **Status:** Locked

---

## 1. REALITAS PERANGKAT PENGGUNA

Mayoritas jamaah 45+ memakai Android menengah-bawah (layar 5,5–6,7", RAM 3–4GB, jaringan 3G/4G tidak stabil), sering dengan font sistem diperbesar. Sementara pengambil keputusan finansial sering anak-anak mereka di laptop/desktop (persona Dinda & Mas Rifqi). Konsekuensi: **mobile bukan sekadar prioritas — mobile adalah arena utama**, dan desktop harus tetap istimewa untuk proses perbandingan & booking keluarga.

## 2. BREAKPOINT SYSTEM (Tailwind)

| Token | Lebar | Perilaku Utama |
|---|---|---|
| `base` | 320–639px | 1 kolom; nav drawer; CTA full-width; tabel → kartu bertumpuk |
| `sm` | ≥640px | 2 kolom kartu paket; padding 16→24 |
| `md` | ≥768px | Nav penuh menggantikan hamburger; 2 kolom konten editorial |
| `lg` | ≥1024px | 3 kolom katalog; sidebar dashboard; escrow timeline horizontal |
| `xl` | ≥1280px | Container max-w-7xl; hero 2 kolom; 4 kartu per baris bila perlu |
| `2xl` | ≥1536px | Kapitalisasi whitespace — TIDAK memperbesar konten tanpa batas |

Layout dieja dari base ke atas (`class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"`), tidak pernah sebaliknya. Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`. Konten baca (artikel): `max-w-3xl` agar lebar baris 60–75 karakter.

## 3. GRID KUNCI PER TEMPLATE

- **Homepage:** hero stack mobile (badge→H1→sub→CTA→trust) / desktop 2 kolom (kiri teks, kanan kartu paket unggulan mengambang). Search bar sticky: 1 kolom bertumpuk mobile → 4 kolom sejajar `lg`.
- **Katalog:** mobile 1 kolom; `sm` 2; `lg` 3; filter drawer penuh mobile (bottom-sheet) / sidebar kiri 280px `lg`.
- **Detail paket:** mobile urutan: foto → harga sticky → tanggal → itinerary → hotel → review; desktop: kolom kiri 2fr (itinerary/hotel/review) + kolom kanan 1fr sticky (harga, tanggal, CTA) — sticky box memastikan CTA selalu terlihat.
- **Dashboard:** mobile bottom-nav (Beranda/Booking/Escrow/Akun) tinggi 56px; desktop sidebar 260px + konten.
- **Tabel escrow milestone:** mobile = kartu timeline vertikal; desktop = tabel 6 kolom.

## 4. TIPOGRAFI RESPONSIF & SKALA LANSIA

Body 17px base → 18px `lg`. H1 `text-[32px] leading-tight lg:text-[44px]`. WAJIB mendukung zoom browser 200% tanpa horizontal scroll, dan mendukung font-size sistem user (pakai `rem`, bukan `px` mentah). Mode "Teks Besar" (toggle di footer, tersimpan localStorage): body 19px, tombol +8% tinggi, ikon +2px — diuji di device matrix (dok 26). Line-height minimum 1.6; paragraf maksimal 70 karakter per baris.

## 5. ATURAN SENTUH & SPASI

Target sentuh minimum **48×48px** dengan jarak antar-target ≥ 8px. Ikon aksi dekat teks tetap punya hit-area penuh. Bottom-sheet filter: handle drag 48px, backdrop klik menutup. Sticky elements (navbar 64px, buy bar 64px, bottom-nav 56px) — total sticky mobile maksimal 1 layar-kecil: navbar ATAU buy bar (detail paket memilih buy bar + navbar mengecil 56px saat scroll). Tidak ada hover-only affordance: semua info hover juga tersedia via tap/expand.

## 6. GAMBAR & MEDIA RESPONSIF

`<img>` dengan `srcset` (480/768/1200/1600w, WebP + fallback), `sizes` eksplisit, `width/height` selalu (anti CLS), `loading="lazy"` kecuali hero (`eager` + `fetchpriority="high"`). Foto itinerary: aspect-ratio tetap 16:10. Diagram escrow: SVG responsif dengan viewBox — teks di dalam diagram minimum 14px setara. Video (jika ada): lazy embed dengan poster, tombol play 64px.

## 7. ORIENTASI, PRINT, EDGE CASE

Landscape mobile: hero mengurangi min-height (85vh→100svh adaptif `svh` — hindari lompatan bar alamat browser iOS). Print stylesheet: halaman paket & rencana simpanan haji tercetak bersih (sembunyikan nav/CTA/WA). Layar < 360px: harga paket boleh mengecil ke 24px, tidak pernah terpotong. Dark mode: **TIDAK di v1–R2** (merusak konsistensi cetak & kesederhanaan; dievaluasi R3 via CR).

## 8. CHECKLIST RESPONSIF PER RILIS

□ 320px: tidak ada horizontal scroll □ semua tap target ≥ 48px □ drawer/bottom-sheet bisa ditutup ESC + swipe □ sticky tidak menutupi konten □ tabel → kartu terbaca urut □ zoom 200% utuh □ font besar mode berfungsi □ Lighthouse mobile ≥ 90 di jaringan throttled (dok 24) □ test manual: Android low-end + iPhone SE (dok 26).
