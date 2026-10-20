# 📄 DOKUMEN 18 — ACCESSIBILITY STANDARD
## Aksesibilitas = Kebutuhan Bisnis, Bukan Formalitas WCAG

**Project:** SolusiHajj (solusihajj.com) | **Versi:** 1.0 | **Status:** Locked | **Standar:** WCAG 2.1 AA + penyesuaian konteks lansia Indonesia

---

## 1. PERNYATAAN POSISI

Mayoritas calon jamaah SolusiHajj berusia 45–70 tahun: penglihatan mulai rabun dekat, ketelitian sentuh menurun, dan banyak yang baru pertama kali melakukan transaksi online berjumlah puluhan juta rupiah. Bagi mereka, **aksesibilitas bukan kepatuhan — ia adalah kemampuan membeli.** Setiap hambatan akses = jamaah yang kembali ke metode lama (tanya tetangga → deposit ke oknum). Karena itu standar ini berdiri di atas WCAG 2.1 AA dengan aturan tambahan yang menjawab realita pengguna kita.

## 2. KONTRAS & WARNA (WCAG 1.4.3+)

Teks normal ≥ 4.5:1, teks besar ≥ 3:1, elemen UI (border input, ikon fungsional) ≥ 3:1. Kombinasi disetujui: `--ink` di `--bg` (14.9:1), `--muted` di `--bg` (5.6:1), putih di `--primary` (6.8:1). **Terlarang:** teks putih di atas emas (1.9:1), teks emas di atas putih, abu terang < 4.5:1 untuk teks apa pun. Warna tidak pernah satu-satunya pembawa makna: status escrow selalu teks ("Tertahan", "Cair") + ikon, bukan hanya hijau/merah. Link dalam paragraf: underline + warna primary (bukan warna saja).

## 3. TIPOGRAFI & PEMBACAAN

Body minimum 17px, line-height 1.6, panjang baris 60–75 karakter. Zoom 200% wajib utuh tanpa scroll horizontal (reflow 1.4.10). Mode "Teks Besar" global via toggle (dok 17 §4). Font Arab (Amiri) minimum 22px dengan line-height 2 — doa dibaca berulang oleh lansia. Jangan pernah justify (kata terpotong menyulitkan pembaca disleksia & lansia); rata kiri. Animasi teks berjalan (marquee) dilarang di konten fungsional.

## 4. STRUKTUR & NAVIGASI SEMANTIK

Satu H1 per halaman; heading tanpa lompatan level. Landmark: `<header>`, `<nav aria-label>`, `<main>`, `<footer>`; skip-link "Langsung ke konten" sebagai elemen focus pertama. Focus order mengikuti urutan visual; focus-visible selalu terlihat (outline 2px emas offset 2px). Keyboard: seluruh alur booking harus bisa diselesaikan tanpa mouse — termasuk drawer, bottom-sheet (ESC), modal (focus trap + return focus), accordion, tabs (panah kiri/kanan). Tidak ada event hanya-mouse.

## 5. FORM & INPUT (kritis untuk booking data paspor)

Label selalu terlihat di atas input (bukan placeholder); error dijelaskan teks spesifik + `aria-describedby` + `role="alert"`; kesalahan difokuskan ke field pertama yang salah. Input numerik panjang (nomor paspor, telepon) gunakan `inputmode` & `autocomplete` yang benar. Tanggal pakai picker kalender sederhana (bukan wheel usang); ketik manual tetap diizinkan. Durasi sesi: autosave setiap field (jamaah lansia sering terdistraksi); sesi timeout memberi peringatan 2 menit sebelum logout, data tidak hilang.

## 6. GAMBAR, MEDIA, IKON

Semua `<img>` alt deskriptif ("Hotel Al Safwah, lobi dengan kursi roda"); foto dekoratif `alt=""`. Ikon fungsional punya label aria; ikon dekoratif `aria-hidden`. Diagram escrow & 5 lapis punya padanan teks ringkas di bawahnya (bukan hanya SVG). Live region (`aria-live="polite"`) untuk update status (kuota habis, pembayaran terverifikasi, check-in aman masuk).

## 7. BAHASA & KOGNISI

Kepanjangan & istilah: setiap istilah (escrow, PPIU, VA, manifest) dijelaskan saat pertama muncul dalam 1 kalimat; glosarium di FAQ. Angka harga format Indonesia lengkap (Rp 28.500.000, bukan 28,5jt) di konteks keputusan. Konfirmasi destruktif (batal booking) menyatakan konsekuensi refund dengan angka sebelum tombol. Pop-up dilarang menghalangi bacaan; toast tidak auto-dismiss di atas error penting.

## 8. MOTION & SENSORIK (jembatan ke dok 18)

`prefers-reduced-motion` mematikan semua animasi non-esensial. Tidak ada konten berkedip > 3x/detik. Pulsar node escrow di-settle menjadi statis saat reduced-motion.

## 9. AUDIT & PENJAGAAN

Checklist a11y masuk definisi-of-done tiap PR; audit keyboard-only penuh 1x per rilis; Lighthouse Accessibility ≥ 95 (dok 28); pengujian dengan screen reader (NVDA/TalkBack) pada 5 alur inti: cari paket, booking, bayar, cek escrow, tulis review. Temuan a11y = bug P0, bukan backlog. Setiap rilis mencantumkan "Catatan Aksesibilitas" di changelog (dok 37) — keterbukaan yang juga mendidik pasar.
