# 📄 DOKUMEN 03 — BUSINESS REQUIREMENTS DOCUMENT (BRD)
## Kontrak Tak Tertulis antara Visi dan Eksekusi

**Project:** SolusiHajj (solusihajj.com) | **Versi:** 1.0 | **Status:** Locked | **Perubahan via:** Change Request (dok 05)

---

## 1. CARA MEMBACA DOKUMEN INI

Setiap kebutuhan diberi kode FR-xxx (functional) atau NFR-xxx (non-functional) sehingga bisa dilacak lintas dokumen: wireframe (dok 09) mengimplementasikan FR, database (dok 12) menyimpan FR, test plan (dok 25) memverifikasi FR. Prioritas: **P0 = wajib rilis, P1 = penting segera setelahnya, P2 = backlog.** Angka rilis (R1/R2/R3) merujuk arsitektur bertahap di dok 05.

## 2. KEBUTUHAN FUNGSIONAL — INTI MARKETPLACE (FR-100)

| Kode | Kebutuhan | Pri | Rilis |
|---|---|---|---|
| FR-101 | Katalog paket umrah: foto, itinerary harian, hotel + jarak ke Haram (meter), maskapai, tanggal, kuota, harga all-in transparan (tanpa biaya siluman) | P0 | R1 |
| FR-102 | Pencarian & filter: tanggal, budget, kota keberangkatan, bintang hotel, jarak ke Haram, badge PPIU | P0 | R2 |
| FR-103 | Halaman toko PPIU: profil, izin + nomor PPIU, badge Silver/Gold/Platinum, sejarah, review agregat | P0 | R1 |
| FR-104 | Booking online: pilih varian tanggal → isi data jamaah (paspor!) → pilih kamar (quad/triple/double) → keranjang keluarga (satu booking banyak jamaah) | P0 | R2 |
| FR-105 | Kontrak digital: jamaah menyetujui syarat PPIU (dibaca wajib, checkbox per pasal kunci) sebelum bayar | P0 | R2 |
| FR-106 | Dashboard jamaah: status booking, dokumen (visa, tiket), jadwal, pembayaran, e-ticket | P0 | R2 |
| FR-107 | Papan PPIU (console): kelola paket & kuota, konfirmasi booking, unggah dokumen per jamaah, lihat rating | P0 | R2 |

## 3. AMANAHESCROW — PERISAI DANA (FR-200) ⭐

| Kode | Kebutuhan | Pri | Rilis |
|---|---|---|---|
| FR-201 | Pembayaran masuk ke rekening penampungan amanah (bank syariah) — TIDAK ke rekening PPIU maupun platform | P0 | R2 |
| FR-202 | Virtual account per booking untuk rekonsiliasi otomatis | P0 | R2 |
| FR-203 | Rilis bertahap terkait realisasi layanan: (a) konfirmasi visa & tiket → rilis 40%, (b) keberangkatan → rilis 40%, (c) kepulangan tanpa dispute 7 hari → rilis 20% akhir | P0 | R2 (manual) → R3 (otomatis) |
| FR-204 | Mekanisme refund: booking batal sebelum keberangkatan mengikuti tabel batal PPIU; PPIU gagal berangkatkan → refund 100% dari escrow + denda kontrak | P0 | R2 |
| FR-205 | Halaman status escrow per booking yang bisa diakses jamaah (bukti dana aman) | P0 | R2 |
| FR-206 | Laporan escrow bulanan untuk bank mitra & auditor | P1 | R3 |

## 4. HAFIZH TRACK — PENDAMPING PERJALANAN (FR-300) ⭐

| Kode | Kebutuhan | Pri | Rilis |
|---|---|---|---|
| FR-301 | E-itinerary harian: jadwal ibadah & wisata ziarah, info cuaca Makkah/Madinah, doa-doa per titik ziarah (mode offline) | P0 | R3 |
| FR-302 | Tracking lokasi opsional (opt-in, persetujuan eksplisit): jamaah di aplikasi membagikan posisi ke anggota keluarga yang diundang | P0 | R3 |
| FR-303 | Notifikasi "Aman" otomatis: check-in harian terjadwal; jika tidak ada aktivitas > 12 jam → alert ke pengikut & mutawif | P1 | R3 |
| FR-304 | Tombol SOS: kirim lokasi + panggilan ke nomor darurat (mutawif, panitia, 911 Arab) dalam satu tekan | P0 | R3 |
| FR-305 | Geofence per kota/point of interest (Masjidil Haram, hotel): alert masuk/keluar ke keluarga | P2 | R3 |
| FR-306 | Privasi: data lokasi otomatis terhapus 30 hari setelah kepulangan; tracking mati otomatis saat landing di Indonesia | P0 | R3 |

## 5. NURMATCH AI — PEMANDU CERDAS (FR-400) ⭐

| Kode | Kebutuhan | Pri | Rilis |
|---|---|---|---|
| FR-401 | Profil jamaah: usia, kecukupan berjalan (sprint/march/stroll), prioritas (dekat Haram vs murah), musim favorit, budget | P0 | R3 |
| FR-402 | Rekomendasi paket dengan SKOR + ALASAN transparan ("hotel 250 m dari Haram karena Ibu menyatakan sulit berjalan jauh") | P0 | R3 |
| FR-403 | Chatbot FAQ 24/7 (visa, timbangan bagasi, fiqh praktis) dengan disclaimer wajib: keputusan fiqh merujuk mutawif/ustadz | P1 | R3 |
| FR-404 | Anti-hallusinasi: jawaban harga/aturan wajib dari basis data platform, bukan generasi bebas | P0 | R3 |

## 6. SAKSI JAMAAH — REVIEW TERVERIFIKASI (FR-500) ⭐

| Kode | Kebutuhan | Pri | Rilis |
|---|---|---|---|
| FR-501 | Hanya jamaah dengan booking SELESAI (pulang) yang bisa menulis review — gating sistem, tidak ada jalan pintas | P0 | R2 |
| FR-502 | Rating per dimensi: hotel, mutawif/pembimbing, makanan, bus, akurasi itinerary, value — bukan sekadar bintang total | P0 | R2 |
| FR-503 | Unggah foto asli + metadata dicek; foto hotel harus match foto listing (voting komunitas) | P1 | R3 |
| FR-504 | Review tidak bisa dihapus PPIU; PPIU hanya bisa membalas 1x per review | P0 | R2 |
| FR-505 | Deteksi fraud: velocity check, pola teks duplikat, insentif voucher jamaah yang menulis review jujur | P1 | R3 |

## 7. VERIFIKASI 5 LAPIS & VAS (FR-600/700)

| Kode | Kebutuhan | Pri | Rilis |
|---|---|---|---|
| FR-601 | Onboarding PPIU 5 lapis: legalitas (izin PPIU aktif via data resmi), finansial (deposit/jaminan), operasional (audit itinerary & hotel), track record (riwayat & aduan), performa platform | P0 | R1 (manual) → R2 (workflow) |
| FR-602 | Tool publik "Cek Izin PPIU": publik mengetik nama travel → sistem menampilkan status verifikasi + sumber data | P0 | R1 |
| FR-701 | VAS marketplace: asuransi perjalanan, SIM card Tanah Suci, laundry paket, titip doa (muassasah terverifikasi), kurir haji | P1 | R3 |
| FR-702 | Kalkulator simpanan haji (lead magnet): simulasi menabung ke antrean haji → tangkap email/WA → nurture | P0 | R1 |

## 8. NON-FUNCTIONAL REQUIREMENTS (NFR)

| Kode | Kebutuhan |
|---|---|
| NFR-01 | Performa: LCP < 2,5 detik di jaringan 3G/4G Indonesia dengan Android kelas bawah (jamaah 50+ mayoritas Android menengah-bawah) |
| NFR-02 | Aksesibilitas: WCAG 2.1 AA + mode teks besar default-friendly untuk lansia (dok 17) |
| NFR-03 | Keamanan: data paspor = data sensitif kelas tertinggi — enkripsi at rest, audit log, UU PDP No. 27/2022 (dok 23) |
| NFR-04 | Uptime 99,5% (R2+); halaman katalog R1 tetap tersedia saat maintenance |
| NFR-05 | Bahasa: UI Indonesia utama; arsitektur siap English & Bahasa Melayu tahun 2 |
| NFR-06 | Semua keputusan arsitektural terdokumentasi & bisa dijelaskan ke regulator |

## 9. KPI SUKSES BISNIS (Dipantau via dok 34)

North Star Metric: **Jumlah jamaah yang berangkat aman melalui platform per bulan.** Pendukung: GMV bulanan, konversi kunjungan→booking (target 1,5%), konversi WA→closing (target 25%), rasio dispute escrow < 2%, rata-rata rating PPIU ≥ 4,3, retensi PPIU aktif > 85%, biaya akuisisi jamaah < 2% nilai paket.
