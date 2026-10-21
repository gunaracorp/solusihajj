# 📄 DOKUMEN 27 — DEVICE & BROWSER MATRIX
## Daftar Perangkat yang WAJIB Dites — Realita Pengguna, Bukan Gengsi Developer

**Project:** SolusiHajj (solusihajj.com) | **Versi:** 1.0 | **Status:** Locked

---

## 1. PRINSIP PEMILIHAN

Matrix disusun dari realitas pasar Indonesia, bukan kebiasaan developer: mayoritas jamaah 45+ memakai Android menengah-bawah dengan layar 5,5–6,7" dan memperbesar font sistem; sementara pembeli utama sering anak-anak mereka yang memakai iPhone mid-range atau laptop. Test di flagship saja = uji untuk 10% pengguna paling sehat finansial — justru yang paling tidak butuh tolong.

## 2. MATRIKS PERANGKAT FISIK/EMULATOR (wajib per rilis mayor)

| # | Perangkat | OS/Resolusi | Kenapa |
|---|---|---|---|
| 1 | Android low-end (Redmi 9A class) | Android 11 Go, 360×800, RAM 3GB | Pengguna paling rentan — REFERENCE DEVICE utama |
| 2 | Android menengah (Galaxy A class) | Android 14, 412×915 | Mayoritas pasar |
| 3 | Samsung besar font 120% | sama #2 | Simulasi lansia nyata |
| 4 | iPhone SE (375×667) | iOS 16 | Layar kecil Apple — kelas tersulit |
| 5 | iPhone 13/14 (390×844) | iOS 17+ | Persona Dinda/Rifqi |
| 6 | iPad (820×1180) | iPadOS | Browsing keluarga di rumah |
| 7 | Laptop 1366×768 | Chrome/Firefox | Tercatat: masih sangat umum di Indonesia |
| 8 | Desktop 1920×1080 | Chrome | Booking keluarga + admin console |

## 3. MATRIKS BROWSER

| Browser | Versi | Prioritas | Catatan khusus |
|---|---|---|---|
| Chrome Android | 2 versi terakhir | P0 | Standar de facto |
| Chrome Desktop | terakhir | P0 | |
| Safari iOS | iOS 16 & 17 | P0 | Bug scroll-sticky, input zoom, 100vh — cek `svh` |
| Samsung Internet | terakhir | P1 | ~10%+ pasar Android Indonesia |
| Firefox Desktop | terakhir | P1 | |
| Safari macOS | terakhir | P2 | |
| Opera Mini / mode data-saver | — | P2 | Jaringan lemah; tidak boleh crash |

Browser usang (< IE11 era) tidak didukung; halaman menampilkan pesan upgrade sopan bila terdeteksi.

## 4. JARINGAN & KONDISI

Uji throttle: **Slow 3G** (400kbps/400ms) & **Fast 3G** (1,6Mbps/150ms) via DevTools + WebPageTest node Jakarta. Kondisi tambahan: mode hemat data, gangguan jaringan di tengah submit form (uji autosave), low-power mode (timer & animasi). Semua angka performa mengacu budget dok 25 pada kondisi 3G — bukan WiFi kantor.

## 5. CHECKLIST PER PERANGKAT

□ Layout utuh di 320–1920px (dok 16) □ Tap target ≥ 48px terasa nyaman dengan jempol □ Font besar mode + zoom 200% □ Navbar/buy-bar sticky tidak menutupi konten □ Drawer & bottom-sheet buka-tutup mulus □ Form keyboard muncul dengan tipe benar (numeric untuk WA/umur) □ iOS: input tidak zoom saat fokus (font ≥ 16px), sticky bar tidak lompat saat address bar □ Android low-end: scroll 60fps di katalog, TTI terasa < 5 detik □ Gambar WebP tampil, fallback aman □ WA link membuka app dengan pesan pre-filled benar □ Tanggal & harga format Indonesia konsisten.

## 6. UJI SPESIAL MARKETPLACE IBADAH

□ Mode gelap OS diabaikan (kita tidak punya dark mode — pastikan tidak inherit aneh) □ Font Arab (Amiri) tampil benar di semua perangkat termasuk low-end (bukan kotak) □ Notifikasi WA OTP masuk di berbagai provider (Telkomsel/Indosat/XL) — uji riil sekali per rilis besar □ Halaman cetak rencana simpanan haji rapi di printer thermal 58mm? (opsional — taksi waitlist saja) □ SOS button terjangkau jempol satu tangan di layar 6,7".

## 7. EKSEKUSI & PELAPORAN

Rilis mayor: seluruh matriks fisik #1–#8 + browser P0; rilis minor: #1, #4, #8 + Chrome/Safari terakhir. Hasil: tabel ✅/⚠️/❌ per sel + screenshot bukti di `docs/device-matrix-report-vX.md`. Temuan ⚠️ boleh rilis dengan workaround tercatat; ❌ memblokir. Emulator boleh untuk scanning, tapi 3 perangkat fisik minimal (low-end Android, iPhone SE, laptop) — emas kentang alasan: font sistem & touch nyata tidak pernah identik dengan emulator.
