# 📄 DOKUMEN 11 — SEO STRATEGY
## Mesin Organik: Dari "Cek Travel" sampai "Booking"

**Project:** SolusiHajj (solusihajj.com) | **Versi:** 1.0 | **Status:** Locked

---

## 1. STRATEGI BESAR

Tiga mesin keyword yang mengalirkan ke satu corong kepercayaan: (1) **mesin informasi** — jutaan pencarian "biaya umrah", "panduan umrah" tiap bulan ditangkap artikel edukasi; (2) **mesin verifikasi** — pencarian "travel umrah [nama] aman/nggak" ditangkap tool Cek Izin PPIU (halaman unik per kueri nama = long-tail tak terbatas yang kompetitor tidak punya); (3) **mesin transaksi** — "paket umrah 9 hari [kota]" ditangkap katalog + halaman toko PPIU. SEMUA jalur berujung ke halaman escrow/verifikasi lalu CTA.

## 2. KEYWORD MAP — HALAMAN vs KEYWORD

| Halaman | Primer (transaksional) | Sekunder | Long-tail (artikel/tool) |
|---|---|---|---|
| /paket | paket umrah 2026, paket umrah terpercaya | paket umrah 9 hari, umrah plus turki | paket umrah untuk lansia, umrah ramadhan biaya |
| /paket/[slug] | [hotel] paket umrah, umrah [bulan] | umrah [kota keberangkatan] | umrah desember keluarga |
| /ppiu/[slug] | [nama PPIU] paket umrah | [nama PPIU] review | [nama PPIU] halal atau tidak |
| /verifikasi/cek-izin-ppiu | cek izin travel umrah, cek PPIU | daftar travel umrah terpercaya | apakah [nama travel] berizin ⭐ |
| /escrow | sistem escrow umrah | jaminan dana jamaah | travel umrah nakal bagaimana uang kembali |
| /kalkulator-haji | kalkulator simpanan haji | biaya haji 2027 BPIH | nabung berapa per bulan untuk haji |
| /edukasi | panduan umrah lengkap | doa ziarah makkah | manasik umrah pdf |

⭐ Pencarian "apakah [nama travel] berizin" adalah jendela emas: volume kecil per nama tapi konversi ekstrem tinggi dan nol kompetisi serius. Setiap PPIU baru di database otomatis membuat halaman status terindeks.

## 3. ON-PAGE STANDAR

Title ≤ 60 karakter, pola: "[Keyword] — SolusiHajj (Terverifikasi)". Meta description ≤ 155 karakter dengan bukti + CTA. H1 satu per halaman mengandung keyword primer natural. Struktur H1>H2>H3 tanpa lompat. URL sesuai dok 07. Internal link sesuai peta dok 07 §6. Gambar: WebP/AVIF, alt deskriptif, width/height eksplisit.

## 4. SCHEMA MARKUP (JSON-LD)

| Halaman | Schema |
|---|---|
| Global | Organization + WebSite (SearchAction) + BreadcrumbList |
| Homepage | LocalBusiness + AggregateRating (hanya jika data nyata ada!) |
| /paket & /paket/[slug] | Product/Offer (price, priceCurrency IDR, availability) + AggregateRating per paket |
| /ppiu/[slug] | LocalBusiness (TravelAgency) + review |
| /edukasi/[slug] | Article (author, datePublished, dateModified) |
| /faq + FAQ per halaman | FAQPage |
| Tool cek izin | WebApplication |

Aturan kejujuran schema: tidak boleh ada markup rating/price yang tidak sesuai data nyata — risiko manual action dan melanggar prinsip amanah.

## 5. LOCAL & COMMUNITY SEO

Google Business Profile untuk kantor PT (kategori "Travel service"/"Religious organization" sesuai ketentuan). NAP identik di footer + GBP + direktori. Seri artikel per kota keberangkatan ("paket umrah dari Jakarta/Bandung/Surabaya/Medan") — satu halaman katalog terfilter per kota, bukan doorway page tanpa nilai. Program Duta SolusiHajj menghasilkan mention & link dari situs masjid/komunitas — link building yang sah, relevan, dan tidak bisa dibeli kompetitor.

## 6. TEKNIS

□ sitemap.xml otomatis (R2) / manual (R1) □ robots.txt: allow all, disallow /admin, /akun, /ppiu/dashboard □ canonical semua halaman; ?filter=noindex □ HTTPS + pilih SATU host (non-www) + redirect 301 □ Core Web Vitals: LCP<2,5s CLS<0,1 INP<200ms □ hreflang siap (id default) □ 404 dengan navigasi ke paket populer □ pagination paket pakai rel next/prev semantik atau load-more tanpa URL duplikat.

## 7. LINK BUILDING JUJUR (Tanpa Beli Link)

| Taktik | Eksekusi |
|---|---|
| Data PR | Rilis data "Indeks Kepercayaan Umrah" (kompilasi verifikasi & aduan) — media suka data |
| Narasumber | Founder sebagai ahli perlindungan jamaah di media (kolom, podcast, YouTube dakwah) |
| Ekosistem | Link dari gunara.web.id, topkonsultan.web.id, digiman.id (satu owner, natural) |
| Komunitas | Materi kajian manasik untuk masjid dengan atribusi situs |
| Tool publik | Cek Izin PPIU dikutip media saat membahas kasus travel nakal |

## 8. UKURAN SUKSES

| Periode | Target |
|---|---|
| Bulan 1 | Terindeks penuh (site:), GSC aktif, 50 keyword impression |
| Bulan 3 | 1 artikel page-1, tool cek izin muncul untuk 20+ nama travel |
| Bulan 6 | 500 kunjungan organik/bln, 10 booking-intent organik/bln |
| Bulan 12 | 3.000 kunjungan/bln, 40% leads dari organik, DR/metric otoritas naik bertahap |

Laporan SEO bulanan: keyword bergerak, halaman menang, halaman jatuh, action item 3 prioritas — dipantau bersama Research-Sage agent.
