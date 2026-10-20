# 📄 DOKUMEN 05 — USER PERSONAS
## Lima Wajah yang Menentukan Setiap Keputusan Desain

**Project:** SolusiHajj (solusihajj.com) | **Versi:** 1.0 | **Status:** Locked

---

## 1. ATURAN PERSONA

Setiap fitur, halaman, dan kalimat di SolusiHajj harus bisa dijawab: *"Ini melayani persona yang mana, di titik sakit yang mana?"* Jika tidak bisa dijawab, fitur itu masuk backlog (dok 05), bukan dibangun. Lima persona di bawah adalah hasil sintesis profil pasar: mayoritas jamaah umrah Indonesia berusia 45+, menggunakan Android menengah-bawah, sangat sensitif terhadap penipuan, dan sebagian besar dibantu anak/anak sulung dalam urusan digital.

## 2. PERSONA 1 — HAJI HASAN (58, Pensiunan, Kepercayaan-Terluka)

**Profil:** Pensiunan BUMN, Bogor. Menabung umrah 4 tahun. Sempat nyaris deposit di travel nakal yang akhirnya berita. Anaknya yang menemukan SolusiHajj.
**Kebutuhan:** kepastian tertulis, bahasa sederhana, nomor telepon yang dijawab manusia.
**Titik sakit:** "Kalau uang saya sudah bayar dan travel-nya hilang, bagaimana?"
**Jawaban produk:** halaman AmanahEscrow dengan diagram alur dana (FR-205), badge verifikasi yang bisa dicek, kontrak digital dengan pasal refund ditonjolkan (FR-105).
**Desain untuknya:** font besar, alur satu-arah tanpa langkah berlapis, tombol "Tanya lewat WhatsApp" selalu terlihat.

## 3. PERSONA 2 — IBU FATIMAH (45, Pengusaha Kecil, Umrah Keluarga)

**Profil:** berangkat 5 orang: dia, suami, dua anak, dan ibunya (78, pakai tongkat). Sensitif pada makanan halal Indonesia, keselamatan orang tua, kamar yang nyaman.
**Kebutuhan:** satu booking untuk banyak jamaah, kejelasan jarak hotel, perkiraan beban jalan kaki harian.
**Titik sakit:** "Travel bilang dekat, ternyata jalan 40 menit. Ibu saya tidak kuat."
**Jawaban produk:** data jarak hotel ke Haram terukur (meter) + filter "dekat Haram", keranjang keluarga (FR-104), NurMatch AI yang mempertimbangkan kondisi fisik (FR-401).
**Desain untuknya:** perbandingan paket berdampingan, penjelasan biaya per orang vs total, timeline pembayaran bertahap yang jelas.

## 4. PERSONA 3 — MAS RIFQI (32, Profesional Digital, Self-Service)

**Profil:** product manager di Jakarta, bandingkan 5 sumber sebelum memutuskan, hargai transparansi dan kecepatan.
**Kebutuhan:** filter tajam, harga all-in tanpa kejutan, bisa selesai tanpa telepon, data yang bisa dipercaya.
**Titik sakit:** "Semua situs bilang 'hubungi kami untuk harga'. Membosankan."
**Jawaban produk:** harga tampil apa adanya, review per dimensi yang detail (FR-502), dashboard jamaah yang rapi (FR-106), response time WA yang terukur.
**Desain untuknya:** kecepatan (performance budget dok 24), microcopy yang jujur, tidak ada dark pattern.

## 5. PERSONA 4 — DINDA (28, Anak Pendamping, Pengguna Hafizh Track)

**Profil:** desainer grafis di Bandung. Yang membiayai dan mengurus umrah orang tuanya, tapi tidak ikut berangkat. Kebingungan pertama setelah pembayaran: "Bagaimana saya tahu mama-papa aman di sana?"
**Kebutuhan:** undangan tracking (opt-in), notifikasi harian "aman", kontak darurat satu tombol.
**Titik sakit:** "Selama 10 hari, saya hanya bisa menebak dari story WhatsApp."
**Jawaban produk:** Hafizh Track (FR-301..306) — undangan sebagai pengikut perjalanan, e-itinerary yang bisa dia baca, SOS berlangganan alert.
**Desain untuknya:** onboarding pengikut < 1 menit, notifikasi yang menenangkan (bukan menakutkan), status privasi yang jelas.

## 6. PERSONA 5 — PAK RIDWAN (49, Pemilik PPIU Menengah, Sisi A)

**Profil:** pemilik PPIU berizin di Surabaya, mengurus 400–800 jamaah/tahun, jujur tapi kalah bersaing dengan marketing oknum, waspadai komisi dan "platform yang merusak harga".
**Kebutuhan:** leads berkualitas tanpa perang harga, pembayaran escrow yang justru membantu cash flow terencana, dashboard sederhana.
**Titik sakit:** "Platform minta komisi, tapi membawa jamaah macam apa dan bagaimana pembayarannya?"
**Jawaban produk:** Founding Partner 0% komisi 6 bulan (dok 01), payout escrow dengan milestone yang terjadwal, badge verifikasi sebagai alat jual beliau, analitik permintaan pasar di console PPIU (FR-107).
**Desain untuknya:** onboarding 5 lapis yang jelas tahapannya (bisa disela-sela dilanjutkan), narasi "partner" bukan "vendor", dukungan WA khusus PPIU.

## 7. MATRIKS PRIORITAS PERSONA

| Persona | Nilai Ekonomi | Fase Utama | Fitur Kunci |
|---|---|---|---|
| Haji Hasan | Tinggi (jangka panjang, loyal) | R1–R2 | Escrow, verifikasi, WA |
| Ibu Fatimah | Sangat tinggi (booking keluarga) | R2 | Keranjang keluarga, jarak hotel, AI matching |
| Mas Rifqi | Menengah, volume besar R2+ | R2 | Transparansi, kecepatan, review |
| Dinda | Amplifier (membuat 2 jamaah percaya) | R3 | Hafizh Track, notifikasi |
| Pak Ridwan | Sisi pasokan — tanpa dia tak ada pasar | R1 | Founding Partner, console, escrow payout |

## 8. IMPLIKASI DESAIN GLOBAL

1. **Dua kecepatan UX:** jamaah lansia butuh jalur sederhana (Hasan); digital native butuh kontrol penuh (Rifqi). Solusi: alur utama sederhana + detail lanjutan yang bisa dibuka, bukan dua situs terpisah.
2. **WhatsApp bukan musuh:** untuk persona 45+, WA adalah antarmuka utama. Setiap halaman penting menyediakan jalur WA dengan pesan pre-filled (dok 13).
3. **Keluarga adalah pembeli kedua:** Dinda tidak berangkat tapi mempengaruhi keputusan dan menjadi pengguna fitur tracking — konten dan fitur harus berbicara kepadanya juga.
4. **Sisi A diperlakukan sebagai pelanggan premium:** PPIU yang dihargai akan menjaga reputasi platform; PPIU yang dirugikan akan menjadi sumber review buruk di luar kendali kita.
