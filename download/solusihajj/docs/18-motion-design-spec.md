# 📄 DOKUMEN 19 — MOTION DESIGN SPECIFICATION
## Gerak yang Menenangkan — Sakral, Tegas, Tidak Pesta

**Project:** SolusiHajj (solusihajj.com) | **Versi:** 1.0 | **Status:** Locked | **Prinsip ibu:** "Kalau gerak ini tidak membuat pengguna lebih paham, hapus."

---

## 1. FILOSOFI MOTION

Motion di SolusiHajj punya satu tugas: **menjelaskan perubahan dan menenangkan.** Jamaah sedang memutuskan transaksi besar dengan hati waspada; gerakan yang loncat-loncat (bounce, spring, overshoot) membaca seperti situs games atau iklan murahan — merusak kepercayaan yang sedang kita bangun. Karena itu semua gerakan di sini halus, cepat-secukupnya, dan selalu punya alasan fungsional. Kami memilih kesan "mushaf yang dibuka dengan tenang", bukan "toko yang teriak diskon".

## 2. TOKEN DURASI & EASING

| Token | Nilai | Penggunaan |
|---|---|---|
| `--dur-fast` | 150ms | Hover, warna tombol, ikon berubah |
| `--dur-base` | 250ms | Dropdown, tooltip, accordion, toast masuk |
| `--dur-slow` | 350ms | Drawer, bottom-sheet, modal, transisi halaman berat |
| `--dur-reveal` | 500ms | Scroll-reveal section (maksimal sekali per elemen) |

Easing standar: `cubic-bezier(0.2, 0, 0, 1)` (decelerate tegas) untuk semua masuk; `cubic-bezier(0.4, 0, 1, 1)` (accelerate) untuk keluar. **DILARANG:** bounce, elastic, spring overshoot, ease-in-out berlebihan. Transisi properti yang diizinkan: `opacity`, `transform`, `color`, `background-color`, `border-color`, `box-shadow` — compositor-friendly, tidak memicu layout thrash. `width/height/top/left` tidak dianimasikan kecuali accordion (pakai grid-template-rows 0fr→1fr).

## 3. POLA MOTION STANDAR

**Scroll reveal:** fade + translateY(16px→0) dengan `--dur-reveal`; stagger antar kartu 60ms, maksimal 3 tingkat; hanya sekali (tidak reverse saat scroll naik). Implementasi IntersectionObserver threshold 0.15, tanpa library berat.

**Hover:** kartu paket translateY(-2px) + shadow md (200ms); tombol darken 8%; link underline muncul dari kiri (150ms). Tanpa scale > 1.03 pada elemen apapun.

**Drawer mobile:** slide-in dari kanan 280px, overlay fade; keluar lebih cepat (250ms). **Bottom-sheet filter:** naik dari bawah dengan handle; drag-to-close di R2+. **Modal:** fade overlay + scale(0.98→1) konten.

**Accordion:** grid-rows animasi 250ms + chevron rotate 180°; konten dalam fade.

**Skeleton → konten:** skeleton fade-out 150ms, konten fade-in 250ms — tidak ada lompatan layout (CLS < 0.1 wajib).

**Toast:** slide-up 12px + fade 250ms; keluar sendiri 4s (error: tetap sampai ditutup).

**Tab underline:** transform lebar/posisi 250ms — terasa hidup tapi tenang.

**Count-up statistik:** 800ms ease-out, sekali saat viewport; angka tabular agar tidak bergoyang; dimatikan di reduced-motion (tampil final langsung).

**Pulsar escrow node aktif:** box-shadow membesar 2s loop, opacity 0.4→0 — satu-satunya loop animasi di seluruh platform, karena node aktif adalah informasi penting ("sedang diproses").

## 4. MOMEN KHAS (Signature Moments — hemat & bermakna)

1. **Konfirmasi escrow:** setelah pembayaran terverifikasi, timeline escrow node pertama terisi dengan garis hijau tumbuh 500ms + teks "Dana Anda aman" — momen kepercayaan paling penting dalam seluruh produk.
2. **Cek Izin PPIU:** hasil muncul dengan perisai badge "stempel" scale(0.9→1) + fade 350ms — terasa resmi, seperti dokumen dicap.
3. **Kalkulator haji:** hasil tabel tabungan muncul baris-per-baris stagger 80ms — rasa "rencana yang tersusun".
4. **Check-in "Aman" (R3):** notifikasi keluarga dengan denyut perisai kecil sekali — menenangkan tanpa drama.

Momen khas di atas tidak boleh dijadikan tendensi: satu per layar, tidak digabung.

## 5. AKESESIBILITAS MOTION (wajib)

`@media (prefers-reduced-motion: reduce)`: semua durasi → 1ms, reveal → tampil langsung, pulsar → statis, count-up → angka final. Uji dengan OS setting. Tidak ada animasi yang membawa informasi unik (jika gerak dihapus, makna tetap lengkap via teks/status). Autoplay video dilarang; carousel otomatis dilarang (jika ada carousel, kontrol manual + pause).

## 6. IMPLEMENTASI & ANTI-POLUTION

Semua token di `tailwind.config` (transitionDuration/Easing custom) + utility kelas kustom `motion-fade-up`, `motion-stagger`. Tidak ada library animasi eksternal (GSAP/Framer/AOS) di R1–R2 — vanilla + IntersectionObserver; evaluasi hanya via Change Request. Budget animasi per halaman: maksimal 6 elemen scroll-reveal, 1 signature moment, 0 loop kecuali pulsar escrow. Inspector review PR menolak: bounce, stagger > 3, reveal di elemen fungsional (tombol, form), animasi di dalam tabel data.
