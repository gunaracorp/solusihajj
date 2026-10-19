# 📄 DOKUMEN 08 — USER FLOWS
## Tujuh Alur Perjalanan dari Ketidakpercayaan menjadi Amanah

**Project:** SolusiHajj (solusihajj.com) | **Versi:** 1.0 | **Status:** Locked

---

## FLOW 1 — "HAJI HASAN" (Organik → Edukasi → Cek Verifikasi → WA) ⭐ Alur utama R1

```
Google: "travel umrah terpercaya 2026" / teman merekomendasikan
        │
        ▼
Artikel edukasi / homepage ──► Sken 5 detik: badge verifikasi + angka "X PPIU terverifikasi"
        │
        ├──► Tool "Cek Izin PPIU": ketik nama travel yang dipertimbangkan
        │        ▼
        │    Status terverifikasi / tidak terdaftar → rasa aman naik →
        │    CTA: "Lihat paket dari PPIU terverifikasi"
        ▼
Halaman paket → harga all-in transparan → penjelasan escrow
        │
        ▼
[WA pre-filled: "Halo SolusiHajj, saya tertarik paket umrah 9 hari — bisa bantu jelaskan escrow-nya?"]
        │
        ▼
Tim respons < 15 menit (jam kerja) → closing → jamaah kontrak & bayar (R2) / booking via PPIU (R1)
```

**KRITIS:** edukasi dulu, jualan kemudian. Artikel yang langsung menjual akan mematikan persona yang kepercayaannya terluka.

## FLOW 2 — BOOKING ONLINE END-TO-END (R2) ⭐

```
Paket dipilih → pilih varian tanggal & tipe kamar
        │
        ▼
Isi data jamaah (nama paspor, tanggal lahir, kondisi fisik) — autosave
        │
        ▼
Ringkasan: harga all-in per orang + total keluarga + rincian escrow milestone
        │
        ▼
Kontrak digital: pasal kunci ditonjolkan (refund, hotel, kuota) → centang per pasal
        │
        ▼
Pembayaran: VA/QRIS/e-wallet → dana masuk REKENING AMANAH (bukan PPIU)
        │
        ▼
Sukses: dashboard booking aktif + email/WA "Dana Anda aman di escrow — rilis ke PPIU setelah visa terbit"
```

## FLOW 3 — SIKLUS AMANAHESCROW (R2, fondasi kepercayaan)

```
Bayar ──► Escrow (100% tertahan)
   │
   ├─ PPIU unggah bukti visa+tiket → admin verifikasi → RILIS 40%
   ├─ Keberangkatan terkonfirmasi (manifest) → RILIS 40%
   └─ Kepulangan + 7 hari tanpa dispute → RILIS 20% + review diminta
        │
        └── Jika PPIU gagal → jamaah ajukan dispute → refund dari escrow ≤ 5 hari kerja
```

Setiap perpindahan status mengirim notifikasi jamaah. Transparansi escrow = pemasaran berjalan sendiri.

## FLOW 4 — ONBOARDING PPIU 5 LAPIS (sisi A)

```
Daftar → Unggah dokumen L1 legalitas (izin PPIU, SIUJK, NPWP, akta)
        │ verifikasi admin ≤ 3 hari kerja
        ▼
L2 finansial (deposit/jaminan, rekening perusahaan) → L3 operasional (audit itinerary, bukti hotel & fleet)
        │
        ▼
L4 track record (referensi jamaah, cek aduan) → L5 perjanjian platform + akad wakalah
        │
        ▼
LULUS → Badge Silver + toko aktif → 6 bulan evaluasi → naik Gold (performa) → Platinum (elite)
```

Ke enam tahap, progress tersimpan — PPIU bisa lanjut kapan saja. Ditolak = diberi alasan spesifik + jalur perbaikan (bukan dead end).

## FLOW 5 — KALKULATOR SIMPANAN HAJI (Lead Magnet R1)

```
Homepage / artikel ──► "Berapa yang harus saya tabung untuk haji?"
        │
        ▼
Input: umur, status (belum/belum daftar), pilihan program (reguler/plus), estimasi ongkos
        │
        ▼
Output: estimasi biaya total + tabel tabungan bulanan + estimasi tahun keberangkatan (BPIH terkini, sumber dicantumkan)
        │
        ▼
CTA: "Kirim hasil ke WhatsApp saya" / "Email saya PDF rencana menabung" → tangkap nama + WA/email
        │
        ▼
Nurture: D+1 cek penerimaan → D+4 artikel persiapan → D+10 soft offer paket umrah sambil menabung
```

## FLOW 6 — HAFIZH TRACK: KELUARGA MENEMANI (R3)

```
Jamaah install app + login → aktifkan tracking (opt-in, penjelasan privasi eksplisit)
        │
        ▼
Undang Dinda (keluarga) via link WA → Dinda buka hafizh.solusihajj.com (tanpa install)
        │
        ▼
Selama trip: e-itinerary harian + check-in "Aman" otomatis + lokasi (jika diaktifkan)
        │
        ├─ SOS ditekan → alert ke mutawif + panitia + pengikut + hotspot lokasi
        └─ Tidak ada aktivitas 12 jam → alert lembut ke pengikut
        │
        ▼
Landing Indonesia → tracking mati otomatis → data lokasi terhapus ≤ 30 hari → review diminta
```

## FLOW 7 — PENANGANAN DISPUTE (perlindungan ekstrem)

```
Jamaah laporkan masalah (dashboard / WA / telepon)
        │
        ▼
SLA respons: 1 jam (jam kerja) / 4 jam (luar) → kasus dibuka di admin
        │
        ├── MASALAH OPERASIONAL (hotel beda, bus): mediasi dengan PPIU ≤ 3 hari → kompensasi dicatat → status PPIU terdampak
        └── GAGAL BERANGKAT/FATAL: aktifkan refund escrow + denda kontrak + badge ditangguhkan + protokol krisis (dok 36)
        │
        ▼
Penutupan kasus: jamaah menerima hasil tertulis + rating kasus — keterbukaan penuh
```

## MATRIKS FUNNEL — STAGE vs ASET

| Stage | Kebutuhan | Aset yang Melayani |
|---|---|---|
| TOFU (cari info) | Edukasi jujur | Artikel, kalkulator haji, FAQ, doa ziarah |
| MOFU (bandingkan) | Bukti kepercayaan | Cek Izin PPIU, badge, review gating, halaman escrow |
| BOFU (bayar) | Kepastian & kemudahan | Harga all-in, kontrak digital, WA respons cepat, VA |
| Pasca-trip | Keterlibatan & advokasi | Review insentif, program Duta, komunitas takmir |

Aturan emas: setiap titik gagal (form error, stok habis, pembayaran gagal) WAJIB punya jalur alternatif ke WhatsApp — lead tidak boleh hangus karena bug.
