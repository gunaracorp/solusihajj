# 📄 DOKUMEN 15 — DESIGN SYSTEM "AMANAH"
## Identitas Visual Premium yang Menenangkan Hati

**Project:** SolusiHajj (solusihajj.com) | **Versi:** 1.0 | **Status:** Locked | **Dokumen paling penting untuk AI** — semua output visual wajib konsisten di sini

---

## 1. FILSAFAT DESAIN

Pengguna SolusiHajj datang dengan hati dua lapis: gembira menuju Baitullah, namun waspada terhadap penipuan. Desain kita harus menjawab keduanya: **tenang dan sakral** (menghormati kesucian ibadah), sekaligus **tegas dan terukur** (membuktikan sistem yang menjaga). Tidak ada gradien neon, tidak ada popup agresif, tidak ada bahasa pesta. Palet diambil dari benda yang disucikan pengguna: hijau kubah Nabawi, emas Ka'bah, ivory batu Marmar, dan tinta hijau Al-Qur'an klasik. Setiap keputusan punya alasan psikologis — desain yang tidak bisa menjelaskan alasannya akan ditolak dalam review.

## 2. PALET WARNA (Token CSS)

| Token | Hex | Penggunaan | Alasan Psikologis |
|---|---|---|---|
| `--primary` Hijau Amanah | `#0E6B4E` | Tombol utama, link, brand | Hijau dalam = kesucian, kepercayaan, "aman" dalam budaya Islam Indonesia |
| `--primary-deep` | `#0A4A36` | Header gelap, footer, hero | Kedalaman = kematangan, bukan main-main |
| `--accent` Emas Ka'bah | `#C9A227` | Badge, highlight angka, ikon perisai | Emas = kemuliaan ibadah; dipakai hemat agar tetap sakral, bukan mewah murahan |
| `--bg` Ivory Zamzam | `#FAF7F2` | Latar utama | Hangat seperti kertas mushaf; lebih lembut dari putih steril |
| `--surface` | `#FFFFFF` | Kartu, tabel | Kontras bersih di atas ivory |
| `--ink` Tinta Hijau | `#1C2B27` | Teks utama | Hitam kehijauan = nyaman dibaca lama, menyatu dengan brand |
| `--muted` | `#5C6B66` | Teks sekunder | Cukup kontras AA di ivory |
| `--success` | `#1E7F4F` | Status aman, escrow cair | Konsisten keluarga hijau |
| `--warning` | `#B7791F` | Perlu tindakan | Amber tenang, bukan merah panik |
| `--danger` | `#B3372B` | Dispute, gagal | Merah bata: serius tapi tidak menakuti |
| `--line` | `#E5E0D6` | Border, divider | Garis hangat, bukan abu dingin |

Aturan: emas TIDAK PERNAH untuk teks di atas putih (kontras gagal) — hanya untuk aksen grafis/badge. Hijau tua dipakai sebagai "section gelap" bergantian dengan ivory untuk ritme (dok 09).

## 3. TIPOGRAFI

| Peran | Font | Catatan |
|---|---|---|
| Heading | **Plus Jakarta Sans** (600–800) | Didesain perancang Indonesia — identitas lokal premium; geometris tegas |
| Body | **Plus Jakarta Sans** (400–500) | Satu keluarga = cepat dimuat, konsisten |
| Arab (bismillah, doa) | **Amiri** | Naskh klasik yang indah & mudah dibaca lansia |

Skala (mobile → desktop, rasio 1.25): H1 32→44, H2 26→34, H3 21→26, body 17→18, small 14. **Body minimum 17px** — keputusan sadar untuk lansia (dok 17). Line-height 1.6 body, 1.25 heading. Angka harga & tanggal: `font-variant-numeric: tabular-nums` agar kolom rapi. Uppercase hanya untuk label kecil (tracking-wide).

## 4. SPACING, RADIUS, SHADOW

Spacing 8-pt: `4, 8, 12, 16, 24, 32, 48, 64, 96`. Section padding mobile 48px / desktop 96px. Radius: kartu 16px, tombol 12px, badge pill 999px, input 12px — membulat penuh, hangat, bukan tajam korporat. Shadow 3 tingkat: `sm` (0 1px 2px rgba(28,43,39,.06)), `md` (0 4px 12px rgba(28,43,39,.08)), `lg` (0 12px 32px rgba(14,107,78,.12) untuk kartu harga & diagram escrow — bayangan kehijauan memberi kesan "terjaga").

## 5. IKON, FOTO, ILUSTRASI, PATTERN

Ikon: **Lucide** inline SVG stroke 1.75, ukuran 20/24, warna ikut teks. Foto: jamaah sungguhan saat beribadah (bukan stock robotik), hotel & makanan asli dari PPIU — kejujuran visual adalah bagian dari amanah; foto harus match realita (ini juga menutup klaim review "beda dengan foto"). Ilustrasi: flat dengan palet brand, hanya untuk diagram (escrow, 5 lapis, Hafizh Track). Pattern: geometri Islami (khatam/rub el hizb) opacity 4–6% sebagai tekstur hero — kehadiran spiritual yang halus, bukan karpet masjid.

## 6. KOMPONEN IDENTITAS (Referensi ke dok 15/16)

- **Shield Badge** (perisai + tier warna: Silver #9CA3AF, Gold #C9A227, Platinum #111827): muncul di kartu paket, toko PPIU, hasil cek izin — satu bentuk di seluruh platform.
- **Escrow Timeline**: garis vertikal dengan 4 node (Bayar → Tertahan → Rilis 40/40 → Cair); node selesai = hijau, aktif = emas pulsar lembut, gagal = merah.
- **Price Tag All-in**: angka besar tabular + rincian 5 baris + "tanpa biaya tersembunyi" kecil.
- **Review Meter 6 Dimensi**: bar horizontal 1–5 per dimensi, hijau, angka di ujung.

## 7. LOGO & WORDMARK

Wordmark: "SolusiHajj" Plus Jakarta Sans ExtraBold, "Hajj" diakhiri titik emas; di sampingnya shield-icosahedron kecil (perisai verifikasi). Versi: full (web header), mark-only (app icon: perisai + ka'bah siluet emas di atas hijau tua), monokrom (cetak & dokumen resmi). Clear space = tinggi huruf S. Logo TIDAK PERNAH diletakkan di atas foto ramai tanpa scrim.

## 8. DILARANG DI SELURUH PLATFORM

Gradien neon/purple-startup generic; emoji sebagai ikon UI utama; shadow warna-warni; animasi bounce; popup fullscreen auto; hitam murni #000 untuk latar; teks putih di atas emas; foto People-Photoshop-dengan-senjata? tidak — cukup: tanpa foto stock yang jelas palsu. Setiap pelanggaran = review ditolak, koreksi sebelum merge.
