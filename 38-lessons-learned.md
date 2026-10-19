# 📄 DOKUMEN 39 — LESSONS LEARNED
## Retro yang Membuat Kita 2x Lebih Tajam Tiap Siklus

**Project:** SolusiHajj (solusihajj.com) | **Versi:** 1.0 | **Status:** Template + 6 pelajaran fase perencanaan | **Ritme:** pasca setiap rilis/milestone besar + kuartalan

---

## 1. FORMAT RETRO (tetap sederhana supaya benar-benar dijalankan)

```
## Retro [vX / QY] — [tanggal]
✅ Berjalan baik (pertahankan): 3 poin
⚠️ Menyakitkan (perbaiki): 3 poin — masing-masing dengan AKSI konkret + pemilik + tenggat
💡 Pembelajaran (bagikan): 2 poin
🔁 Keputusan yang revisi: dokumen mana yang di-update (jangan hanya diceritakan)
```

Aturan: tanpa saling menyalahkan; setiap "menyakitkan" wajib berakhir jadi aksi bertenggat — retro tanpa aksi = karangan bunga. Hasil masuk changelog (dok 38) dan dokumen terkait direvisi di tempatnya.

## 2. PELAJARAN FASE PERENCANAAN (sudah tercatat — pemulaan jujur)

1. **Shared hosting & marketplace adalah pasangan yang butuh kontrak jelas.** Awalnya "Next.js + shared hosting" terdengar kontradiksi; resolusinya arsitektur dua panggung (statis → full-stack) yang justru menghasilkan roadmap validasi yang disiplin. **Aksi:** pertahankan pola ini untuk project ekosistem berikutnya (digiman.id klien marketplace kecil pun bisa memakainya).
2. **Fitur premium memaksa kejujuran regulasi sejak hari pertama.** Escrow, tracking lokasi, dan data paspor menarik kewajiban UU PDP + relasi bank syariah + akad. Alhasil BRD lahir dengan pagar kepatuhan, bukan patch belakangan. **Aksi:** hubungi bank mitra & review Legal-Eagle SEBELUM koding R2, bukan sesudah.
3. **Persona lansia mengubah semua standar teknis ke arah lebih baik.** Body 17px, tap 48px, bahasa sederhana bukan "fitur ramah lansia" — ia standar default. **Aksi:** bawa prinsip ini juga ke project non-umrah (pusatperizinan: pengusaha UMKM sering 40+).
4. **"Cek Izin PPIU" lahir dari ekosistem, bukan brainstorm kosong.** Pola domain cektransparan/cekhoax GUNARA OS terbukti; versi marketplace-nya jadi senjata SEO + kepercayaan sekaligus. **Aksi:** setiap project baru WAJIB punya "tool publik" satu kegunaan tegas.
5. **Kompleksitas escrow menuntut dual-control manusia, bukan cuma kode.** Teknologi bisa memindahkan uang; hanya proses ganda yang mencegah salah orang. **Aksi:** latih SOP dok 37 dengan case dummy sebelum booking pertama nyata.
6. **Dokumen 39 ini menyelamatkan waktu jauh sebelum launch** — enam keputusan besar (stack, fase, fitur, monetisasi, domain, deployment) terkunci dalam satu sesi karena dewan pakar memaksa pertanyaan yang tepat di awal. **Aksi:** jadikan AskUserQuestion-8-dimensi ritual pembuka setiap project ekosistem.

## 3. TEMPLATE ENTRY MAKSUDAL (dipakai mulai sekarang)

```markdown
### [v2.0 launch] — 2027-03-xx
✅ Katalog R1 → database berjalan mulus; slug identik, SEO tidak patah
⚠️ Onboarding PPIU lambat (butuh 3x telepon) → AKSI: tambah panduan video 5 menit
   + checklist dokumen di undangan onboarding. Pemilik: ops. Tenggat: +2 minggu.
💡 Jamaah lansia lebih banyak telepon daripada chat → jalur telepon resmi dievaluasi R2.1
🔁 Dok di-update: 06-sitemap (halaman bantuan telepon), 10-content (tone jalur telepon)
```

## 4. ARSIP & KEGUNAAN JANGKA PANJANG

Semua retro tersimpan di folder ini (file `retro-YYYY.md`) dan dibaca ulang sebelum setiap rilis besar — kegagalan yang tidak dibaca ulang adalah kegagalan yang sedang menunggu giliran. Di akhir tahun 1, semua retro dirangkum jadi "Manual Kepercayaan SolusiHajj" — dokumen internal yang nantinya juga melatih tim support dan bisa menjadi dasar buku/publikasi (selaras misi 500 buku GUNARA OS: perjalanan membangun marketplace amanah adalah materi yang layak ditulis).
