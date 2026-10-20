# 📄 DOKUMEN 09 — WIREFRAME SPECIFICATION
## Spesifikasi Tekstual Siap-Paste untuk Generate UI

**Project:** SolusiHajj (solusihajj.com) | **Versi:** 1.0 | **Status:** Locked | **Design System:** dok 14–18 | **FR mapping:** dok 03

ATURAN GLOBAL: mobile-first, container max-w-7xl px-4 md:px-8; setiap section punya id anchor; latar section bergantian (ivory / putih / hijau tua) untuk ritme; semua gambar lazy + WebP + alt deskriptif; font dasar mengikuti standar aksesibilitas lansia (dok 17).

═══════════════════════════════════════
TEMPLATE A — HOMEPAGE (12 SECTION)
═══════════════════════════════════════

**S1 HERO** (min-h-[85vh], bg hijau tua gradien + pattern geometris Islami halus)
[Badge: "PT Terdaftar • PPIU Terverifikasi 5 Lapis"]
H1: "Amanah Anda, Aman."
Sub: "Paket umrah dari PPIU berizin resmi — dana Anda ditahan escrow hingga Anda berangkat, ulasan hanya dari jamaah nyata, dan keluarga bisa menemani perjalanan Anda secara digital."
[CTA-1: Cari Paket Umrah →] [CTA-2 ghost: Cek Izin PPIU]
Trust line: ✓ Dana di escrow ✓ Review jamaah nyata ✓ 50 PPIU terverifikasi (angka realistis, JANGAN mengarang saat R1: "10 PPIU Founding Partner")

**S2 SEARCH BAR STICKY** (kartu melayang di atas batas hero): [Kota] [Tanggal] [Budget ▾] [Tombol Cari Paket]

**S3 TRUST BAR** (strip putih): 4 statistik count-up — realistis sesuai kondisi launch.

**S4 KENAPA PERLU KAMI** (bg ivory, 3 kartu nyeri): 😰 "Deposit hangus karena travel nakal" / 😤 "Bilang dekat Haram, ternyata 40 menit" / 🫥 "Tidak ada kabar selama 10 hari dari orang tua di sana" → penutup: "Masalahnya bukan niat ibadah Anda. Masalahnya tidak ada yang menjaga. Di sinilah kami berdiri."

**S5 KATALOG UNGGULAN** (id="paket"): 6 paket PPIU Founding Partner — kartu paket reusable (dok 15): foto, durasi, hotel + jarak (m), tanggal, harga all-in, badge PPIU, rating.

**S6 VERIFIKASI 5 LAPIS** (bg putih, diagram horizontal 5 langkah dengan ikon perisai) → CTA "Cek Izin PPIU Anda sendiri"

**S7 AMANAHESCROW** (bg hijau tua): diagram alur dana 4 titik (Bayar → Escrow → Rilis bertahap → Pulang) + tabel milestone 40/40/20 + CTA "Lihat Cara Kerjanya"

**S8 SAKSI JAMAAH** (bg ivory): 3 review nyata (nama, paket, tanggal pulang) + agregat rating 6 dimensi → "Semua review berasal dari booking selesai"

**S9 HAFIZH TRACK TEASER** (split: ilustrasi keluarga + 4 fitur: e-itinerary, check-in aman, SOS, undangan keluarga) — R1: halaman waitlist.

**S10 EDUKASI TERBARU**: 3 artikel + kalkulator simpanan haji banner.

**S11 FAQ TEASER**: accordion 6 pertanyaan teratas → link semua FAQ.

**S12 FINAL CTA** (gradien brand): "Mulai Perjalanan yang Aman Hari Ini." + dua tombol (Cari Paket / Tanya WhatsApp) + sub: "Respons < 15 menit jam kerja • Konsultasi tidak dipungut biaya"

═══════════════════════════════════════
TEMPLATE B — DETAIL PAKET (R1 statis / R2 dinamis)
═══════════════════════════════════════
S1 HERO: breadcrumb + galeri foto + H1 [Nama Paket] + rating + harga all-in menonjol
S2 PITA KEPERCAYAAN: badge PPIU + link toko + "Dana Anda dilindungi escrow →"
S3 STICKY BUY BAR (mobile): harga + [Booking Sekarang] + [💬 Tanya] — selalu terlihat
S4 TABEL TANGGAL & KUOTA: varian tanggal, sisa kuota (real), tipe kamar, harga per orang
S5 ITINERARI HARIAN: timeline hari 1–N (ibadah, ziarah, hotel) + doa per titik (link)
S6 HOTEL: nama, bintang, JARAK KE HARAM (meter + estimasi menit jalan), foto, fasilitas
S7 HARGA ALL-IN TRANSPARAN: tabel rincian (visa, tiket, hotel, makan, bus, mutawif, handling) — tidak ada asterisk tersembunyi
S8 APA YANG TIDAK TERMASUK: jujur tercantum (qurban, kelebihan bagasi, dll)
S9 PPIU PROFILE CARD: izin, nomor PPIU, riwayat, rating dimensi, review 3 teratas
S10 SYARAT & PEMBATALAN: tabel refund per momen pembatalan
S11 REVIEW: filter per dimensi + tautan kebutuhan verifikasi
S12 CTA PENUTUP + FAQ paket (4 item, schema FAQPage)

═══════════════════════════════════════
TEMPLATE C — TOKO PPIU /verifikasi & /ppiu
═══════════════════════════════════════
Perisai badge besar (Silver/Gold/Platinum) + 5 lapis dengan tanggal verifikasi + data izin (nomor, tanggal, status) + tombol "Lihat Sumber Resmi" + riwayat performa (rating, ketepatan berangkat) + paket aktif + balasan PPIU atas review.

═══════════════════════════════════════
TEMPLATE D — ARTIKEL EDUKASI (SEO workhorse)
═══════════════════════════════════════
Konten max-w-3xl, TOC sticky, H1 → jawaban intent dalam 3 kalimat pertama → isi H2/H3 → tabel/list minimal 1 → CTA tengah (setelah 40%): box escrow/paket → penutup "Butuh Bantuan?" + artikel terkait 3 → tanggal publish + "Direview terakhir: [tanggal]" (WAJIB untuk konten regulasi).

═══════════════════════════════════════
TEMPLATE E — DASHBOARD (akun jamaah, console PPIU, admin)
═══════════════════════════════════════
Sidebar (desktop) / bottom-nav (mobile); ringkasan status escrow sebagai komponen timeline vertikal; tabel dengan filter; empty state hangat ("Belum ada perjalanan — saatnya memilih yang pertama 🕋") — ikon hanya sebagai pelengkap, tidak menggantikan teks.
