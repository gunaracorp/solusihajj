# 📄 DOKUMEN 16 — UI COMPONENT SPECIFICATION
## Perpustakaan Komponen — Bentuk, Perilaku, Status

**Project:** SolusiHajj (solusihajj.com) | **Versi:** 1.0 | **Status:** Locked | **Token warna/spacing:** dok 14 | **Implementasi:** Tailwind class ditulis sekali sebagai komponen reusable

---

## 1. ATURAN KOMPONEN

Setiap komponen: (a) semantic HTML dulu (button, nav, table — bukan div menyamar); (b) semua state tampil: default, hover, focus-visible, active, disabled, loading, error; (c) accessible by default (label, aria, kontras AA); (d) mobile-first. Komponen didefinisikan SEKALI di `components/ui/*` — tidak ada copy-paste styling liar.

## 2. BUTTON

| Varian | Bentuk | Penggunaan |
|---|---|---|
| `primary` | bg `--primary`, teks putih, radius 12, py-3 px-6, font 600 | CTA utama (Booking, Cari Paket) |
| `accent` | bg `--accent` (emas), teks `--primary-deep` | CTA khusus escrow/verifikasi — hemat, maksimal 1 per layar |
| `ghost` | border `--line`, teks ink, bg transparan | CTA kedua |
| `wa` | bg #25D366 gelap-kustom `#128C4A`, ikon WhatsApp | Semua jalur WA |

Ukuran: `sm` 40px / `md` 48px / `lg` 56px — **tinggi minimum 48px** (target sentuh lansia). Hover: darken 8% (tanpa scale!). Active: darken 12%. Loading: spinner + teks "Memproses…" + `aria-busy`. Disabled: opacity 40% + cursor not-allowed. Focus-visible: outline 2px `--accent` offset 2px. Icon di kiri teks 8px gap. Full-width di mobile untuk CTA utama.

## 3. KARTU PAKET (komponen paling penting — konversi #1)

```
┌───────────────────────────────┐
│ [foto 16:10 lazy]  [Badge PPIU]│  ← badge di pojok kiri atas foto
│ Nama Paket (H3, 2 baris max)   │
│ 9 Hari • Hotel 4★ • Makkah 250m│  ← jarak mukabumi = data jual utama
│ ★ 4.6 (32) tabular             │  ← rating dari review gating
│ Tanggal: 12–20 Mar (sisa 6)    │  ← sisa kuota real, warna warning saat < 25%
│ Rp 28.500.000 all-in           │  ← Price Tag All-in, tabular-nums
│ [Lihat Detail →] [💬 Tanya]    │  ← dua jalur konversi
└───────────────────────────────┘
```
Hover desktop: shadow `md`, translateY(-2px) 200ms. Seluruh kartu klikable + link terpisah WA (stopPropagation). Loading: skeleton shimmer 1,2s loop. Empty state: "Belum ada paket untuk filter ini — longgarkan budget atau chat kami, kami carikan."

## 4. SHIELD BADGE (identitas kepercayaan)

Perisai SVG 24–40px + label tier: Silver `#9CA3AF` "Terverifikasi", Gold `#C9A227` "Terpercaya", Platinum `#111827` "Amanah Elite". Tooltip/aria: "Verifikasi 5 lapis per [tanggal] — lihat bukti". Di hasil Cek Izin PPIU, badge 1,5x ukuran + tanggal verifikasi + tombol "Lihat Sumber Resmi". SUSPENDED: abu gelap "Ditangguhkan" + tanggal — kejujuran negatif juga tampil.

## 5. ESCROW TIMELINE (komponen pembeda #1 di Indonesia)

Vertikal di mobile / horizontal di desktop. Node: lingkaran 32px. Status: `done` (hijau + check), `active` (emas + pulsar halus 2s), `pending` (line abu), `failed` (merah + X). Label per node: tanggal + jumlah rupiah. Aksesibel: `role="list"` + aria-label per node. Dipakai di: halaman escrow, dashboard booking, detail paket.

## 6. FORM

Input: radius 12, border `--line`, bg putih, py-3 (48px tinggi), label DI ATAS input (bukan placeholder-as-label), font 17px. Focus: border `--primary` + ring 3px rgba(14,107,78,.15). Error: border `--danger` + pesan spesifik di bawah ("Format WA: 08xx atau 62xx") + `aria-describedby`. Autocomplete benar (`name`, `tel`). Honeypot `website` hidden. Tabel keluarga (multi jamaah): kartu yang bisa ditambah/dihapus dengan nomor "Jamaah 1, 2, 3…". Submit: tombol primary full-width mobile + loading state; sukses → halaman terima kasih + tombol WA-10; gagal → pesan jelas + fallback WA.

## 7. NAVBAR & FOOTER

Navbar: sticky, bg ivory 90% + blur, border-b `--line`; logo kiri; menu tengah (dok 07); CTA `primary` "Cari Paket" + ikon WA kanan; mobile: hamburger 48px → drawer slide-in 280ms ease-out, CTA tetap tampil. Nav aktif: underline 3px `--accent`. Footer: 3 kolom (dok 07) + legal line, bg `--primary-deep`, teks ivory-70, link hover emas.

## 8. KOMPONEN PENDUKUNG

**Review Card:** header (inisial avatar + nama + badge "Jamaah Terverifikasi" + paket + tanggal pulang), 6 mini-bar dimensi, teks, foto grid 3, footer: balasan PPIU (blockquote bg ivory). **Table Responsif:** mobile = kartu bertumpuk (CSS `display:block` per baris), desktop = tabel; header sticky. **Accordion FAQ:** satu terbuka, chevron rotasi 180°, `aria-expanded`, animasi height 250ms. **Toast:** pojok bawah, 4 detik, ikon status, close button 44px. **Skeleton:** shimmer `--line`→`--surface`, bentuk sesuai konten final (anti CLS). **Stat Count-up:** angka tabular + label kecil, animasi sekali saat masuk viewport (dok 18). **Tabs (dashboard):** underline aktif emas; mobile = scroll horizontal. **Modal:** overlay rgba(28,43,39,.5), close ESC + klik luar + tombol 44px, focus trap wajib. **Peta Lokasi (R3):** marker jamaah + radius geofence, tombol "Perbarui" manual.

## 9. COPY MICRO (standar suara)

Tombol: verb + objek ("Cari Paket", "Tanya via WhatsApp" — bukan "Submit"). Error: faktual + jalan keluar. Empty: hangat, tawarkan bantuan. Loading: jelaskan apa yang terjadi ("Menghitung rencana simpanan…"). Semua copy direview terhadap tone dok 10 — bahasa menemani, tanpa drama.
