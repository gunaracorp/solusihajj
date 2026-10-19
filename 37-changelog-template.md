# 📄 DOKUMEN 38 — CHANGELOG TEMPLATE
## Setiap Perubahan Tercatat — Profesional, Telusur, Tiga Audiens

**Project:** SolusiHajj (solusihajj.com) | **Versi:** 1.0 | **Status:** Template aktif | **Format:** Keep a Changelog + SemVer (dok 21 §5)

---

## 1. CARA PAKAI

`CHANGELOG.md` di root repo di-update **setiap PR yang ter-merge** (otomatis diingatkan lint-staged) dan saat keputusan dokumen berubah. Entry terbaru paling atas. Satu versi = satu rilis (atau satu keputusan besar). Ditulis untuk TIGA audiens: **platform** (teknis), **jamaah** (bahasa manusia), **PPIU** (bahasa partner) — dibagi per bagian.

## 2. TEMPLATE

```markdown
# Changelog — SolusiHajj

## [vX.Y.Z] — YYYY-MM-DD
### Platform (teknis)
- **Added:** …  (fitur baru, file/dokumen terkait)
- **Changed:** …  (perubahan perilaku; dampak SEO bila ada)
- **Fixed:** …  (bug + nomor TC/FIT yang gagal lalu lolos)
- **Security:** …  (patch, rotasi kredensial, header)
- **Docs:** …  (dokumen NEXUS yang diubah + alasan)
- **Deploy:** tag, waktu, hasil smoke test, rollback siap ✔/✘

### Untuk Jamaah (bila relevan)
- Yang baru yang Anda rasakan: … (tanpa jargon)

### Untuk PPIU (bila relevan)
- Perubahan console/syarat/benefit: … (efektif tanggal …)

### Metrik rilis (bila mayor)
- Lighthouse: Perf __ / A11y __ (lampiran dok 29)
- Smoke: __ menit, __ pemeriksaan lolos

### Keputusan (bila ada)
- [CR-xxx] Deskripsi keputusan + alasan + dokumen yang di-update
```

## 3. ATURAN PENULISAN

1. Kalimat perubahan menyatakan WHAT + WHY singkat: "fix: validasi WA menolak nomor 62 di Safari iOS (regex lookahead tak didukung) — TC-202 ditambah".
2. Jangan tulis "perbaikan minor" — minor bagi siapa? Tulis apa adanya.
3. Setiap entry teknis menyebut bukti (test ID, link PR, dokumen).
4. Keputusan scope selalu via tag [CR-xxx] dan mencantumkan dokumen yang di-update — changelog adalah jembatan antara kode dan 39 dokumen NEXUS.
5. Versi: MAJOR saat rilis besar (1.0 → 2.0), MINOR saat fitur dalam satu fase, PATCH saat fix. Saat patch keamanan: tambahkan bagian Security + tanggal rotasi kredensial.
6. Label waktu: selalu WIB, format ISO (2026-11-15 10:30 WIB).

## 4. RITUAL BULANAN "CHANGELOG KE PASAR"

Setiap tanggal 5, rangkum changelog versi jamaah + PPIU jadi satu halaman komunikasi (email/WhatsApp broadcast resmi): "Bulan ini di SolusiHajj: X paket baru terverifikasi, milestone escrow kini terlihat di dashboard Anda, …". Ini bukan pamer teknologi — ini bukti ritme bahwa platform hidup dan dirawat, yang secara halus menjawab kekhawatiran terbesar jamaah: "kalau platform ini keterlantan, siapa yang menjaga dana saya?"

## 5. CONTOH TERISI (v1.0.0)

```markdown
## [v1.0.0] — 2026-12-01 — GERBANG KEPERCAYAAN LAUNCH 🕋
### Platform
- Added: Homepage 12 section, katalog 24 paket (10 PPIU Founding Partner),
  tool Cek Izin PPIU, kalkulator simpanan haji, 8 artikel peluncuran
- Docs: seluruh 39 dokumen NEXUS final & locked
- Deploy: tag v1.0.0 → cPanel 09:40 WIB; smoke 12 pemeriksaan lolos; rollback siap
### Untuk Jamaah
- Sekarang Anda bisa mengecek status verifikasi travel umrah mana pun
  sebelum menyetor uang — gratis.
### Metrik rilis
- Lighthouse: Perf 97 / A11y 96 / SEO 100 / BP 100 (lampiran: docs/lighthouse-v1.md)
```
