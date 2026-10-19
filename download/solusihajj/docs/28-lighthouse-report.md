# 📄 DOKUMEN 29 — LIGHTHOUSE REPORT (TEMPLATE & TARGET)
## Bukti Kualitas Terukur per Rilis

**Project:** SolusiHajj (solusihajj.com) | **Versi:** 1.0 | **Status:** Template aktif — diisi tiap rilis | **Budget rinci:** dok 24

---

## 1. TUJUAN DOKUMEN

Lighthouse bukan pameran skor — ia bukti bahwa "cepat & aksesibel" yang kami janjikan ke jamaah lansia benar-benar terpenuhi. Dokumen ini adalah template laporan yang diisi setiap rilis (v1.0, v2.0, dst.) dan disimpan sebagai `docs/lighthouse-vX.md` + tangkapan layar. Angka di bawah adalah TARGET yang mengikat (Gate 4 QA); kolom hasil diisi saat audit.

## 2. METODOLOGI BAKU (agar angka bisa dibandingkan antar rilis)

1. Alat: Chrome Lighthouse (mode Incognito, ekstensi mati) + PageSpeed Insights untuk validasi lab-data nyata.
2. Perangkat: **Mobile (Moto G Power, throttled 4x CPU, Slow 4G)** — bukan desktop.
3. Template yang diaudit (3 wajib + 1): Homepage, Katalog, Detail Paket, (R2) Dashboard booking.
4. Ambil rata-rata 3 run; catat nilai terburuk juga (variansi tinggi = smell).
5. Jalankan di build production final, domain final (bukan localhost!) — untuk R1: setelah upload ke hosting.
6. Simpan JSON mentah + screenshot ke `docs/lighthouse-raw/vX/`.

## 3. TABEL HASIL (diisi per rilis)

### v1.0.0 — Rilis 1.0 (Tanggal: ____ | Auditor: ____)

| Template | Perf | A11y | SEO | BP | LCP | CLS | INP | Verdict |
|---|---|---|---|---|---|---|---|---|
| Homepage | target ≥95 | ≥95 | ≥95 | ≥95 | <2,0s | <0,05 | <150ms | ⬜ |
| Katalog | ≥95 | ≥95 | ≥95 | ≥95 | <2,0s | <0,05 | <150ms | ⬜ |
| Detail Paket | ≥95 | ≥95 | ≥95 | ≥95 | <2,0s | <0,05 | <150ms | ⬜ |

### v2.0.0 — Rilis 2.0 (Tanggal: ____ | Auditor: ____)
| Template | Perf | A11y | SEO | BP | LCP | CLS | INP | Verdict |
|---|---|---|---|---|---|---|---|---|
| Homepage | ⬜ | ⬜ | ⬜ | ⬜ | | | | ⬜ |
| Katalog (dinamis) | ⬜ | ⬜ | ⬜ | ⬜ | | | | ⬜ |
| Detail Paket | ⬜ | ⬜ | ⬜ | ⬜ | | | | ⬜ |
| Dashboard Booking (login) | ≥85 | ≥95 | n/a | ≥95 | <2,5s | <0,1 | <200ms | ⬜ |

## 4. CHECKLIST TEMUAN WAJIB DIREVIEW

□Gambar tanpa width/height □Font blocking □JS bundle melebihi budget (dok 25) □Kontras gagal di komponen baru □Label form hilang □Heading melompat □Meta duplikat □CLS dari banner/push notif □Third-party baru tanpa persetujuan □Perbedaan skor desktop vs mobile > 10 poin (selidiki).

## 5. ATURAN VERDICT

- Semua ≥ target → **LULUS**, lampirkan laporan ke release note (dok 37).
- Perf 90–94 → perbaiki wajib, boleh rilis patch ≤ 72 jam.
- Perf < 90 / A11y < 95 → **GAGAL GATE**, deploy ditunda; temuan masuk backlog P0.
- Skor membaik di rilis berikutnya wajib dipertahankan — "regression guard": skor tidak boleh turun > 3 poin antar rilis tanpa CR tertulis.

## 6. LAPORAN KE FOUNDER (format 1 halaman)

Skor 4 kategori × 4 template (tabel di atas) + 3 temuan terbesar dengan estimasi dampak + keputusan (rilis/tunda) + tangkapan layar sebelum-sesudah bila ada perbaikan. Laporan ini juga materi jual: "Lighthouse kami 95+" adalah angka yang bisa ditunjukkan ke PPIU saat pitch kemitraan — bukti profesionalisme yang kompetitor offline tidak punya.
