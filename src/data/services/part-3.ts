import type { Service } from "./types";

/**
 * PART 3 — Kategori: ziarah-tour (14) + komunikasi-gadget (15) +
 * keluarga-lansia (14) + haji-khusus (14) + digital-tools (13).
 */
export const servicesPart3: Service[] = [
  // ================= KATEGORI 10: ZIARAH & TOUR TAMBAHAN =================
  {
    slug: "ziarah-internal-makkah",
    name: "Ziarah Internal Makkah (Berapemandu)",
    categorySlug: "ziarah-tour",
    shortDesc:
      "Jabal Rahmah, Padang Arafah, Muzdalifah, Masjid Aisyah, miqat — ziarah sejarah di sekitar Makkah dengan pemandu yang bercerita sejarahnya, bukan hanya mengantar.",
    longDesc:
      "Perjalanan ke Makkah yang hanya mengenal Ka'bah itu lengkap — tapi yang mengenal juga Arafah, Muzdalifah, dan Jabal Rahmah pulang dengan lapisan pemahaman yang berbeda. Ziarah internal Makkah membawa Anda melintasi tempat-tempat itu dalam satu setengah hari: berdiri di padang Arafah di luar musim haji dan membayangkan dua juta jamaah yang memenuhinya di hari wukuf, menyentuh batas miqat Qarnul Manazil, dan mengulang kisah pertemuan Adam dan Hawa di Jabal Rahmah.\n\nYang membedakan ziarah kami dari 'bus keliling biasa' adalah pembicaraannya: pemandu yang menyusun narasi antar titik — sejarahnya, pelajarannya, dan apa yang harus Anda pahami dan apa yang sekadar dilihat. Pemisahan antara ritual yang dianjurkan dan tempat yang sekadar bersejarah dibuat jelas — karena kebingungan antara keduanya adalah sumber keliru paling umum di ziarah. Dilengkapi pemberhentian yang tepat: tempat yang bisa shalat, tempat yang bisa beristirahat, dan jam yang menghindari gelombang grup lain.",
    features: [
      "Rute: Jabal Rahmah, Arafah, Muzdalifah, Masjid Aisyah, miqat",
      "Pemandu dengan narasi sejarah yang tersusun",
      "Pemisahan jelas ritual vs tempat bersejarah",
      "Urutan rute yang menghindari gelombang grup",
      "Pemberhentian shalat & istirahat yang layak",
      "Kombinasi dengan umrah susulan di miqat (opsional)",
    ],
    process: [
      "Pilih tanggal ziarah (idealnya hari senggang di Makkah)",
      "Konfirmasi jam jemput hotel",
      "Ziarah berlangsung 4–5 jam dengan pemandu",
      "Kembali ke hotel sebelum Asar (atau sesuai jadwal)",
    ],
    priceNote: "Rp 150–250 ribu/kursi (bus, pemandu, air); sewa bus penuh mulai Rp 2 juta",
    priceFrom: 150000,
    faqs: [
      {
        q: "Berapa lama idealnya ziarah Makkah?",
        a: "Empat sampai lima jam menutup seluruh titik utama dengan tempo yang manusiawi. Lebih dari itu biasanya karena antrean foto yang memanjang — dan kami sengaja mengaturnya agar ziarah tetap menjadi ibadah perenungan, bukan parade berhenti-berhenti foto.",
      },
      {
        q: "Apakah ziarah ini boleh dijadwalkan sebelum umrah utama?",
        a: "Boleh — banyak grup melakukannya di hari senggang sebelum atau sesudah umrah utama. Yang perlu dijaga: jangan jadwalkan di hari kedatangan (tubuh masih lelah) dan tidak di malam sebelum umrah utama (energi yang paling baik disimpan untuk ritual utamanya).",
      },
    ],
    keywords: [
      "ziarah makkah",
      "jabal rahmah arafah",
      "ziarah internal umrah",
      "padang arafah",
      "miqat makkah",
    ],
  },
  {
    slug: "ziarah-internal-madinah",
    name: "Ziarah Internal Madinah (Berapemandu)",
    categorySlug: "ziarah-tour",
    shortDesc:
      "Masjid Quba, Jabal Uhud, Qiblatain, pasar kurma — ziarah Madinah yang menghidupkan sejarah hijrah, perang Uhud, dan kehidupan Nabi ﷺ di kota ini.",
    longDesc:
      "Madinah adalah kota yang sejarahnya terletak di seluruh penjurunya — dan ziarah internalnya adalah cara paling baik mengenalkannya. Setengah hari bergerak dari Masjid Quba (masjid pertama dalam Islam, yang shalatnya dianjurkan dengan keutamaan khusus), ke Jabal Uhud di kaki bukit para syuhada, ke Masjid Qiblatain tempat arah kiblat dialihkan di tengah shalat, dan ditutup di pasar kurma yang hidup dengan jamaah dari seluruh dunia.\n\nPemandu kami menyusun narasinya dengan urutan yang masuk akal: kisah hijrah di Quba, kisah syahidnya di Uhud, dan perubahan kiblat di Qiblatain — bukan titik-titik acak yang dihubungkan jalan raya. Untuk keluarga dengan anak, narasinya disesuaikan dengan cerita yang mereka kenal dari buku sekolah — anak yang mendengar kisah Uhud di bukitnya sendiri adalah anak yang mengingatnya seumur hidup.",
    features: [
      "Rute: Quba, Uhud, Qiblatain, pasar kurma",
      "Narasi yang mengalir: hijrah → Uhud → kiblat",
      "Jeda shalat di Quba dengan waktu yang cukup",
      "Narasi khusus anak yang dikenal dari buku sekolah",
      "Penutup di pasar kurma dengan akses petani",
    ],
    process: [
      "Pilih tanggal ziarah di Madinah",
      "Konfirmasi jam jemput (umumnya pagi)",
      "Ziarah 4–5 jam dengan pemandu",
      "Berakhir di pasar kurma — kembali ke hotel",
    ],
    priceNote: "Rp 150–250 ribu/kursi (bus, pemandu, air); sewa bus penuh mulai Rp 1,8 juta",
    priceFrom: 150000,
    faqs: [
      {
        q: "Apakah shalat di Masjid Quba wajib saat ziarah?",
        a: "Tidak wajib, tapi sangat dianjurkan — ada riwayat keutamaan shalat di Quba yang dianggap setara umrah oleh sebagian ulama (dengan perbedaan pendapat). Itulah kenapa rute kami menyediakan jeda yang cukup untuk shalat dua rakaat dengan tenang, bukan turun-foto-naik yang hanya menyimpan foto tanpa ibadah.",
      },
      {
        q: "Bukit Uhud panas saat siang — jam berapa terbaik?",
        a: "Pagi hari (sebelum 9.00) atau sore menjelang magrib adalah jendela terbaik — di luar itu, panasnya nyata dan lantai batunya menyengat. Rute kami meletakkan Uhud di awal pagi, dan memindahkan titik-titik beratap (Quba, Qiblatain) ke jam-jam yang lebih panas.",
      },
    ],
    keywords: [
      "ziarah madinah",
      "masjid quba uhud",
      "qiblatain",
      "ziarah nabawi",
      "pasar kurma madinah",
    ],
  },
  {
    slug: "umrah-plus-turki-istanbul",
    name: "Umrah Plus Turki: Istanbul & Bursa",
    categorySlug: "ziarah-tour",
    shortDesc:
      "9–10 hari Tanah Suci + 3–4 hari Istanbul-Bursa — masjid biru, Hagia Sophia, kabel mobil Uludağ, dan sejarah Islam Khilafah Utsmani yang membuat banyak orang pulang dua kali.",
    longDesc:
      "Umrah plus Turki adalah kombinasi yang paling banyak dipilih di Indonesia — dan bukan tanpa alasan. Istanbul menghadirkan lapisan sejarah Islam yang tidak ada di tempat lain: Hagia Sophia yang berubah fungsi dua kali, Masjid Biru dengan kaligrafinya, Aya Sofya yang menampung jejak dua peradaban, dan Bursa dengan makam Utsman dan Orhan — penggagas Khilafah yang menghubungkan sejarah umat dari Timur Tengah ke Anatolia.\n\nStruktur perjalanan yang baik membagi tenaganya dengan benar: Tanah Suci dulu (ibadah dengan tubuh segar), Turki sesudahnya (wisata dengan tubuh yang santai). Segmen plus butuh visa tersendiri dan tiket segmen tambahan — dan justru di situ banyak penawaran menyembunyikan biayanya. Paket kami mencantumkan semuanya: visa Turki, tiket segmen plus, hotel lokasi strategis (Sultanahmet atau Taksim), tur lokal terverifikasi, dan jadwal yang tidak memeras kaki lansia yang ikut.",
    features: [
      "9–10 hari Tanah Suci + 3–4 hari Istanbul-Bursa",
      "Visa Turki & tiket segmen plus dicantumkan eksplisit",
      "Hotel lokasi strategis (Sultanahmet/Taksim)",
      "Tur lokal terverifikasi: Aya Sofia, Masjid Biru, Uludağ",
      "Pemilihan musim yang memperhitungkan cuaca Turki",
      "Cocok untuk keluarga lintas usia dengan penyesuaian",
    ],
    process: [
      "Tentukan jendela tanggal & jumlah hari per segmen",
      "Pengajuan visa Turki dikoordinasi (4–6 minggu)",
      "Konfirmasi paket: Tanah Suci + segmen plus",
      "Perjalanan berjalan dengan pemandu dua segmen",
    ],
    priceNote: "Mulai Rp 39–50 juta/jamaah (13–14 hari, quad, musim reguler)",
    priceFrom: 39000000,
    faqs: [
      {
        q: "Umrah plus Turki butuh visa apa saja?",
        a: "Visa umrah Saudi (sudah termasuk paket) plus visa Turki yang diajukan terpisah — kebijakannya bisa berubah antar tahun, jadi kami cek saat booking. Prosesnya butuh 4–6 minggu, jadi mulai lebih awal dari umrah biasa.",
      },
      {
        q: "Musim apa terbaik untuk plus Turki?",
        a: "Mei–Juni dan September–Oktober adalah titik manis Turki — cuaca sejuk yang nyaman untuk berjalan. Juli–Agustus panasnya menekan, Desember–Januari menyediakan salju (bagi yang menginginkannya) dengan risiko jalan yang licin. Jadwal Tanah Sucinya juga harus dipertimbangkan agar tidak jatuh di musim puncak termahal.",
      },
    ],
    keywords: [
      "umrah plus turki",
      "umrah istanbul",
      "paket umrah plus turki",
      "ziarah turki bursa",
    ],
  },
  {
    slug: "umrah-plus-dubai-abu-dhabi",
    name: "Umrah Plus Dubai & Abu Dhabi",
    categorySlug: "ziarah-tour",
    shortDesc:
      "9–10 hari Tanah Suci + 3 hari UEA — kota modern, Masjid Sheikh Zayed, gurun safari, dan arsitektur yang membuat anak-anak ikut terpesona.",
    longDesc:
      "Umrah plus Dubai adalah pilihan yang paling ramah keluarga dengan anak — kota yang seluruhnya bermain bagi mata yang belum pernah melihat tinggi seperti itu: Burj Khalifa, fountains Dubai Mall, museum masa depan, dan gurun safari yang menyediakan jajanan petualangan yang aman. Untuk orang tua, Masjid Sheikh Zayed di Abu Dhabi adalah titik ibadah yang luar biasa — masjid yang menampung empat puluh ribu jamaah dengan karpet yang bisa disebut mahakarya.\n\nSegmen UEA butuh kejelasan yang lebih dari destinasi lain: visa on arrival atau e-visa (tergantung kebijakan berlaku), jarak Dubai–Abu Dhabi yang memakan 1,5–2 jam satu arah (jadwal harus menyesuaikan, bukan sebaliknya), dan musim panasnya yang menekan (Juli–Agustus hindari bila bisa). Paket kami mencantumkan semuanya — termasuk hotel di lokasi yang tidak membuat keluarga menghabiskan hari di jalan.",
    features: [
      "9–10 hari Tanah Suci + 3 hari Dubai–Abu Dhabi",
      "Visa UEA diatur sesuai kebijakan berlaku",
      "Masjid Sheikh Zayed sebagai titik ibadah utama",
      "Program keluarga: Burj Khalifa, fountains, safari gurun",
      "Jadwal yang memperhitungkan jarak antar kota",
      "Musim panas UEA dihindari atau disesuaikan",
    ],
    process: [
      "Tentukan jendela tanggal & komposisi keluarga",
      "Pengurusan visa UEA dikoordinasi",
      "Konfirmasi paket dua segmen",
      "Perjalanan berjalan dengan pemandu lokal",
    ],
    priceNote: "Mulai Rp 37–48 juta/jamaah (12–13 hari, quad, musim reguler)",
    priceFrom: 37000000,
    faqs: [
      {
        q: "Dubai atau Abu Dhabi mana yang diprioritaskan?",
        a: "Untuk 3 hari, keduanya bisa — tapi jujur: Dubai lebih padat programnya (dekat bandara, destinasi bertumpuk), Abu Dhabi butuh perjalanan 2 jam per arah. Pola yang baik: dua hari Dubai penuh + satu hari Abu Dhabi (Sheikh Zayed + Louvre) berangkat pagi. Bila hanya dua hari, fokus Dubai dan jadikan Sheikh Zayed kunjungan terjadwal terpisah bila waktunya memungkinkan.",
      },
      {
        q: "Apakah UEA cocok untuk lansia?",
        a: "Cocok dengan penyesuaian — kota ini sangat ramah aksesibilitas (lift, trotoar, transport), dan programnya bisa dipilih yang tidak memeras kaki. Yang perlu diwaspadai adalah panasnya di siang hari — program outdoor sebaiknya pagi atau sore, dan jarak antar destinasi dipilih yang dekat hotel.",
      },
    ],
    keywords: [
      "umrah plus dubai",
      "umrah uae",
      "sheikh zayed masjid",
      "paket umrah plus dubai",
    ],
  },
  {
    slug: "umrah-plus-mesir-kairo",
    name: "Umrah Plus Mesir: Kairo & Alexandria",
    categorySlug: "ziarah-tour",
    shortDesc:
      "9–10 hari Tanah Suci + 4 hari Mesir — piramida Giza, musim Nasir, sungai Nil, dan jejak Nabi Musa AS yang menghubungkan dua peradaban besar.",
    longDesc:
      "Umrah plus Mesir membawa perjalanan ke lapisan sejarah yang paling tua di antara semua destinasi plus — piramida Giza yang berumur 4.500 tahun, Museum Nasir dengan koleksi Tutankhamun, sungai Nil yang menjadi latar kisah Nabi Musa AS, dan Alexandria yang menjaga jejak peradaban Mediterania. Untuk jamaah yang ingin pulang membawa cerita yang lebih tua dari semua cerita, Mesir adalah jawabannya.\n\nKejujurannya harus disampaikan: Mesir menuntut kesiapan yang berbeda — keramaian kota yang lebih menekan, jalan yang lebih semrawut, dan antrean wisatawan yang nyata di piramida. Paket kami menyesuaikan dengan hal itu: hotel di lokasi yang aman, tur dengan pemandu lokal yang terverifikasi, jadwal yang menghindari jam panas Giza, dan koordinasi visa Mesir yang diajukan terpisah. Untuk keluarga dengan anak, programnya dibatasi jumlah lokasi per hari — Mesir yang dilihat pelan lebih berkesan daripada Mesir yang dipercepat.",
    features: [
      "9–10 hari Tanah Suci + 4 hari Kairo-Alexandria",
      "Visa Mesir dikoordinasi terpisah",
      "Piramida Giza dengan jam yang menghindari panas",
      "Museum Nasir & sungai Nil",
      "Pemandu lokal terverifikasi",
      "Tempo harian yang dibatasi untuk keluarga",
    ],
    process: [
      "Tentukan jendela tanggal & jumlah hari",
      "Pengurusan visa Mesir dikoordinasi",
      "Konfirmasi paket dua segmen",
      "Perjalanan berjalan dengan pemandu lokal",
    ],
    priceNote: "Mulai Rp 38–48 juta/jamaah (13–14 hari, quad, musim reguler)",
    priceFrom: 38000000,
    faqs: [
      {
        q: "Apakah Mesir aman untuk wisatawan keluarga?",
        a: "Kawasan wisata utama (Giza, Kairo tengah, Alexandria) dijaga ketat dan jutaan wisatawan mengunjunginya setiap tahun. Yang perlu disiapkan adalah kesiapan menghadapi keramaian dan penjual yang agresif — pemandu lokal yang baik mengelola itu untuk Anda, dan itulah alasan paket kami selalu menyertakan pemandu yang terverifikasi, bukan menjadwalkan Anda berjalan sendiri.",
      },
      {
        q: "Berapa hari ideal untuk segmen Mesir?",
        a: "Empat hari menutup Kairo (Giza, museum, Nil) dengan satu hari Alexandria. Tiga hari menutup Kairo saja — pilihan yang layak bila anggaran menekan. Jangan memadatkan Mesir kurang dari tiga hari; perjalanannya jauh, dan Mesir yang terburu-buru lebih melelahkan daripada berkesan.",
      },
    ],
    keywords: [
      "umrah plus mesir",
      "umrah kairo",
      "piramida giza paket",
      "ziarah mesir nabi musa",
    ],
  },
  {
    slug: "ziarah-al-aqsa-palestina",
    name: "Ziarah Al-Aqsa & Palestina (Plus Yordania)",
    categorySlug: "ziarah-tour",
    shortDesc:
      "Ziarah istimewa ke Masjid Al-Aqsa melalui Yordania — perjalanan yang menuntut kesiapan penuh dan diselenggarakan lewat kanal yang memahami situasinya.",
    longDesc:
      "Ziarah Al-Aqsa adalah perjalanan yang berbeda dari semua destinasi plus — bukan karena pengaturannya, tapi karena makna dan situasinya. Masjid Al-Aqsa adalah situs ketiga paling mulia dalam Islam, dan mengunjunginya di zaman ini adalah perjalanan yang menuntut kesiapan: jalur masuknya lewat Yordania (Amman) dengan penyeberangan yang terjadwal, situasinya berubah dari waktu ke waktu, dan penyelenggaranya harus benar-benar memahami mekanisme yang berlaku saat itu.\n\nLayanan ini diselenggarakan bersama mitra yang menjalankan ziarah Al-Aqsa secara rutin — bukan penyelenggara yang mencoba sekali. Jadwal yang dikonfirmasi bisa berubah bila situasi berubah, dan kontraknya memuat penyesuaian yang jujur untuk skenario itu. Untuk jamaah yang serius menunaikan ziarah ini, kami menawarkan konsultasi awal yang menjelaskan situasi terkini secara jujur — termasuk kapan yang benar adalah menunda, karena ziarah ini memang tidak bisa diperlakukan seperti paket wisata biasa.",
    features: [
      "Jalur masuk lewat Amman, Yordania",
      "Diselenggarakan bersama mitra yang rutin",
      "Konsultasi situasi terkini sebelum komitmen",
      "Kontrak dengan skenario penyesuaian yang jujur",
      "Pendamping yang paham mekanisme & adab ziarah",
    ],
    process: [
      "Konsultasi situasi terkini & kelayakan jadwal",
      "Pengurusan visa Yordania & dokumen",
      "Konfirmasi paket dengan skenario penyesuaian",
      "Ziarah berjalan dengan pendamping penuh",
    ],
    priceNote: "Mulai Rp 55–75 juta/jamaah (14–16 hari, tergantung situasi & jalur)",
    priceFrom: 55000000,
    faqs: [
      {
        q: "Apakah ziarah Al-Aqsa saat ini memungkinkan?",
        a: "Situasinya berubah dari waktu ke waktu dan jalurnya lewat Yordania dengan mekanisme yang teratur bagi jamaah tertentu. Kami tidak akan menjawab jujurnya dengan 'selalu bisa' — konsultasi awal menilai kondisi saat Anda berencana berangkat. Yang bisa kami janji: bila kami tidak yakin jalurnnya aman dan tertata, kami tidak akan menjualnya.",
      },
      {
        q: "Kenapa harganya jauh di atas paket plus lain?",
        a: "Tiga alasan: jalur penyeberangannya panjang (Yordania dulu), durasinya lebih panjang, dan penyelenggaraannya menuntut koordinasi yang jauh lebih intens. Ini juga bukan paket yang diperjualbelikan dengan diskon — penyelenggara yang menjualnya murah sekali waktu biasanya memotong yang tidak terlihat.",
      },
    ],
    keywords: [
      "ziarah al aqsa",
      "umrah palestina",
      "ziarah masjid aqsa yordania",
      "umrah plus palestina",
    ],
  },
  {
    slug: "paket-ziarah-sejarah-thaif-badar-khaibar",
    name: "Paket Ziarah Sejarah: Thaif, Badar & Khaibar",
    categorySlug: "ziarah-tour",
    shortDesc:
      "Rute sejarah jarak jauh yang jarang disentuh grup reguler — Thaif dari Makkah, Badar dan Khaibar dari Madinah — dengan pemandu sejarah dan bekal yang tertata.",
    longDesc:
      "Ada rute-rute sejarah yang tidak masuk program ziarah standar karena waktunya — dan justru itu yang membuatnya istimewa bagi yang menyediakan satu hari penuhnya. Thaif: kota pegunungan sejuk tempat Nabi ﷺ menghadapi penolakan paling menyakitkan — kisah yang membuat sebagian jamaah menangis di jalan pulangnya. Badar: tempat pertempuran penentu pertama umat Islam, 150 km dari Madinah, dengan tanda-tanda yang masih berdiri. Khaibar: benteng-benteng yang ditembus dalam kisah yang paling mengajarkan strategi dan kesabaran.\n\nPaketnya disusun satu hari per rute dengan pemandu sejarah, kendaraan yang nyaman untuk jaraknya, bekal makan di jalan, dan jam yang kembali sebelum gelap. Ini bukan program untuk perjalanan pendek — ia paling layak untuk grup yang tinggal 12+ hari atau yang datang untuk kedua kalinya. Yang paling sering kami dengar dari yang menjalaninya: 'seharusnya saya lakukan ini di perjalanan pertama saya'.",
    features: [
      "Tiga rute: Thaif (dari Makkah), Badar & Khaibar (dari Madinah)",
      "Pemandu sejarah dengan narasi tersusun",
      "Bekal makan di jalan & jam yang kembali sebelum gelap",
      "Kendaraan nyaman untuk jarak jauh",
      "Cocok untuk perjalanan 12+ hari atau kunjungan kedua",
    ],
    process: [
      "Pilih rute yang cocok dengan kota tempat Anda berada",
      "Konfirmasi tanggal senggang dari ibadah utama",
      "Ziarah berlangsung satu hari penuh",
      "Evaluasi & lanjutkan rute lain bila waktunya memungkinkan",
    ],
    priceNote: "Mulai Rp 350–600 ribu/kursi (bus, pemandu, bekal); van keluarga mulai Rp 1,5 juta",
    priceFrom: 350000,
    faqs: [
      {
        q: "Rute mana yang paling dianjurkan untuk perjalanan pertama?",
        a: "Thaif — jaraknya paling dekat dari Makkah, sejarahnya paling menyentuh, dan cuacanya paling sejuk. Badar dan Khaibar lebih layak bila Anda berada di Madinah dengan satu hari senggang. Melakukan ketiganya dalam satu perjalanan membutuhkan waktu yang longgar — jangan memaksanya di perjalanan 9 hari.",
      },
      {
        q: "Apakah rute ini aman untuk lansia?",
        a: "Untuk lansia yang sehat dan bisa duduk 2–3 jam di kendaraan, aman dengan penyesuaian: berangkat dini, pemberhentian yang lebih sering, dan jangan memaksanya di bulan-bulan terpanas. Untuk lansia yang mudah lelah, rute ini kami anjurkan dipilih salah satu saja, bukan semuanya.",
      },
    ],
    keywords: [
      "ziarah thaif",
      "perang badar",
      "khaibar sejarah",
      "ziarah sejarah saudi",
    ],
  },
  {
    slug: "ziarah-al-ahsa-dammam",
    name: "Ziarah Al-Ahsa & Dammam (Timur Saudi)",
    categorySlug: "ziarah-tour",
    shortDesc:
      "Menjelajah kawasan timur Saudi — oasis Al-Ahsa yang jadi warisan dunia, Jabal Qarah, dan pantai Dammam — untuk yang menyambung perjalanan ke timur semenanjung.",
    longDesc:
      "Kawasan timur Saudi adalah bagian yang jarang dijelajahi jamaah — padahal Oasis Al-Ahsa (Hofuf) adalah warisan dunia UNESCO dengan jutaan pohon kurma, sumber mata air yang menghidupkannya selama ribuan tahun, dan gua-gua Jabal Qarah yang bentuknya seperti lanskap planet lain. Untuk jamaah yang perjalanannya menyambung ke timur (transit Dammam, lanjut ke negara Teluk, atau yang ingin melihat Saudi di luar dua kota ibadahnya), ziarah ini menawarkan wajah lain dari negeri yang sama.\n\nAksesnya paling praktis dari Riyadh atau dengan penerbangan ke Dammam — dan itu yang membuatnya cocok sebagai segmen tambahan untuk perjalanan yang sudah menyentuh timur, bukan sebagai kunjungan dari Makkah (jaraknya jauh dan memakan waktu). Programnya santai: oasis, gua, pasar tradisional Hofuf yang hidup, dan pantai Dammam untuk menutup hari. Untuk keluarga yang anak-anaknya butuh satu-dua hari 'bermain' di tengah perjalanan ibadah yang panjang, segmen ini justru yang menyelamatkan energi mereka.",
    features: [
      "Oasis Al-Ahsa — warisan dunia UNESCO",
      "Jabal Qarah & gua-guanya",
      "Pasar tradisional Hofuf",
      "Pantai Dammam sebagai penutup santai",
      "Akses paling praktis dari Riyadh/Dammam",
      "Cocok sebagai segmen tambahan perjalanan timur",
    ],
    process: [
      "Pastikan perjalanan Anda menyentuh kawasan timur",
      "Susun segmen Al-Ahsa (1–2 hari)",
      "Konfirmasi transport & pemandu lokal",
      "Program berjalan dengan tempo santai",
    ],
    priceNote: "Mulai Rp 4–8 juta/jamaah untuk segmen 2 hari (tergantung titik mulai)",
    priceFrom: 4000000,
    faqs: [
      {
        q: "Apakah segmen ini bisa dari Makkah?",
        a: "Teknisnya bisa dengan penerbangan domestik ke Dammam — tapi jujur: jauh lebih masuk akal bila perjalanan Anda memang menyentuh timur (transit Riyadh, lanjut negara Teluk, atau kunjungan kerja). Menambahkan segmen ini hanya untuk menonton oasis akan membuat perjalanan menjadi panjang tanpa alasan yang kuat.",
      },
      {
        q: "Kapan waktu terbaik untuk Al-Ahsa?",
        a: "November–Maret — cuaca timur Saudi yang sejuk membuat oasis dan pantai nyata berbeda. Musim panasnya (Juli–September) sangat menekan, dan program outdoor-nya sebaiknya dihindari atau dipadatkan pagi hari.",
      },
    ],
    keywords: [
      "al ahsa",
      "ziarah dammam",
      "oasis saudi",
      "jabal qarah",
      "wisata timur saudi",
    ],
  },
  {
    slug: "ziarah-jeddah-al-balad-city-tour",
    name: "Ziarah Jeddah Al-Balad & City Tour",
    categorySlug: "ziarah-tour",
    shortDesc:
      "Setengah hari di Jeddah — kota tua Al-Balad yang jadi warisan dunia, corniche laut merah, dan pasar-pasar yang hidup — cocok untuk hari sela sebelum keberangkatan pulang.",
    longDesc:
      "Jeddah adalah kota yang paling sering dilewati dan paling jarang dikenali — padahal kota tuanya Al-Balad adalah warisan dunia UNESCO: rumah-rumah batu karang berusia ratusan tahun dengan roshan (jendela kayu) yang menjulang, gang-gang yang menyimpan sejarah pelabuhan lintas peradaban, dan pasar yang hidup sejak zaman perdagangan rempah. Untuk jamaah yang punya beberapa jam di Jeddah sebelum keberangkatan pulang — atau yang datang beberapa hari sebelum mengikuti grup — setengah hari di Al-Balad adalah cara yang jauh lebih baik daripada menunggu di lobi bandara.\n\nProgramnya santai dan bisa disesuaikan jam penerbangan Anda: Al-Balad di pagi yang sejuk, corniche laut merah untuk melihat matahari, dan pasar yang menyediakan belanjaan terakhir yang jauh lebih murah dari kawasan Haram. Untuk jamaah yang pulang sore, tour selesai di bandara dengan jam yang aman — setengah hari yang mengubah jam tunggu menjadi kenangan.",
    features: [
      "Al-Balad — kota tua warisan dunia UNESCO",
      "Corniche laut merah",
      "Pasar belanja yang jauh lebih murah dari Haram",
      "Jam program disesuaikan penerbangan Anda",
      "Berakhir di bandara dengan jam yang aman",
      "Pemandu lokal yang mengenal gang-gang kota tua",
    ],
    process: [
      "Kirim jadwal penerbangan pulang Anda",
      "Kami susun program yang menutup jam sela",
      "Tour berlangsung dengan pemandu lokal",
      "Berakhir di bandara tepat waktu",
    ],
    priceNote: "Mulai Rp 250–500 ribu/orang (setengah hari, pemandu, transport)",
    priceFrom: 250000,
    faqs: [
      {
        q: "Berapa jam sebelum terbang harus selesai tour?",
        a: "Untuk penerbangan internasional, tour kami dirancang selesai 4 jam sebelum keberangkatan — cukup untuk check-in dengan bagasi penuh belanjaan. Bila bagasi Anda berat, sebutkan sejak awal: tour bisa diatur berakhir di titik yang lebih dekat dengan jam check-in.",
      },
      {
        q: "Apakah Al-Balad cocok untuk keluarga dengan anak?",
        a: "Untuk anak yang sudah 6 tahun ke atas, sangat cocok — gang-gangnya aman berjalan dan cerita pelabuhannya menarik untuk yang tahu mendengarkan. Untuk anak lebih kecil, bagian yang paling ramah adalah corniche dan pasar. Cuaca pagi hari adalah jendela terbaik untuk semua umur.",
      },
    ],
    keywords: [
      "ziarah jeddah",
      "al balad jeddah",
      "city tour jeddah",
      "wisata jeddah sebelum pulang",
    ],
  },
  {
    slug: "umrah-plus-yordania-petra",
    name: "Umrah Plus Yordania: Amman & Petra",
    categorySlug: "ziarah-tour",
    shortDesc:
      "9–10 hari Tanah Suci + 4 hari Yordania — Petra kota terukir di batu, Laut Mati, dan jejak para nabi yang menghubungkan Tanah Suci dengan Syam.",
    longDesc:
      "Yordania adalah destinasi plus yang paling padat sejarah nabi — dan paling jarang dipilih dibanding Turki atau Dubai. Petra: kota yang diukir di batu oleh bangsa Nabataea, terpilih sebagai salah satu keajaiban dunia, dan pengalaman menembus lorong Siq-nya adalah pengalaman yang tidak bisa digambarkan foto. Laut Mati: titik terendah di permukaan bumi, dengan air yang membuat semua orang mengapung tanpa bisa berenang. Dan di antara keduanya: makam-makam para nabi (Syu'ayb, Yusha), Gunung Nebo tempat Nabi Musa melihat Tanah Terjanjikan, dan Madaba dengan peta mozaiknya.\n\nSegmen ini menuntut kejelasan yang lebih: visa Yordania yang dikoordinasi, jarak antar destinasi yang menuntut jam berangkat yang benar, dan musimnya (spring dan autumn adalah jendela terbaiknya). Untuk jamaah yang menginginkan destinasi plus yang lebih tenang, lebih bersejarah, dan lebih murah daripada Dubai — Yordania adalah jawaban yang belum banyak orang temukan.",
    features: [
      "9–10 hari Tanah Suci + 4 hari Amman-Petra",
      "Visa Yordania dikoordinasi",
      "Petra kota terukir & Lorong Siq",
      "Laut Mati — titik terendah di bumi",
      "Makam nabi & Gunung Nebo",
      "Musim terbaik: spring & autumn",
    ],
    process: [
      "Tentukan jendela tanggal & musim yang cocok",
      "Pengurusan visa Yordania dikoordinasi",
      "Konfirmasi paket dua segmen",
      "Perjalanan berjalan dengan pemandu lokal",
    ],
    priceNote: "Mulai Rp 40–52 juta/jamaah (13–14 hari, quad, musim reguler)",
    priceFrom: 40000000,
    faqs: [
      {
        q: "Petra atau Laut Mati mana yang lebih penting?",
        a: "Untuk satu hari penuh masing-masing, Petra membutuhkan tenaga yang lebih banyak (berjalan jauh di lorongnya), Laut Mati lebih santai (bermain air dan lumpur). Bila hanya punya dua hari, lakukan keduanya — Petra pagi hari (sebelum panas dan antrean besar), Laut Mati sore hari. Bila hanya satu hari, Petra yang menang — pengalaman yang tidak ada di tempat lain.",
      },
      {
        q: "Apakah plus Yordania bisa digabung ziarah Al-Aqsa?",
        a: "Teknisnya bisa (jalur darat Amman–Palestina tersedia), tapi programnya menjadi sangat padat dan membutuhkan penyelenggara yang paham kedua mekanismenya. Untuk kebanyakan jamaah, memisahkannya ke dua perjalanan berbeda adalah keputusan yang lebih tenang — kecuali Anda bekerja dengan penyelenggara yang menjalankan keduanya secara rutin.",
      },
    ],
    keywords: [
      "umrah plus yordania",
      "petra jordan",
      "laut mati paket",
      "ziarah yordania",
    ],
  },
  {
    slug: "dokumentasi-foto-video-ibadah",
    name: "Dokumentasi Foto & Video Ibadah",
    categorySlug: "ziarah-tour",
    shortDesc:
      "Fotografer profesional yang menemani momen ibadah Anda — tawaf pertama, keluarga di depan Ka'bah, dan film perjalanan yang bisa diberikan ke anak cucu.",
    longDesc:
      "Momen ibadah paling penting dalam hidup layak didokumentasikan dengan benar — bukan selfie yang buram atau foto yang meminta orang lain mengambilnya di tengah keramaian. Fotografer kami menemani momen-momen yang Anda tentukan: tawaf pertama, foto keluarga di titik terbaik Haram, ziarah Madinah, dan momen kecil di antara keduanya yang ternyata paling berharga — ayah yang tidur lelah di kursi Haram, anak yang tertidur di pundak ibunya.\n\nYang perlu dipahami dan kami sampaikan sejak awal: pengambilan foto di area Haram punya aturan dan etika — tidak ada yang boleh mengganggu jamaah lain, tidak ada dokumentasi yang membuat ibadah terhenti. Fotografer kami memahami itu: bekerja dari titik yang benar, memakai lensa yang tidak perlu mendekat, dan tahu kapan berhenti. Hasilnya dikemas dalam galeri digital + film pendek 3–5 menit yang menjadi kenangan yang bisa diberikan ke anak cucu — kenangan yang jauh lebih berharga dari suvenir apa pun.",
    features: [
      "Fotografer profesional menemani momen pilihan",
      "Titik foto terbaik Haram yang terverifikasi",
      "Etika & aturan dokumentasi area Haram dipatuhi",
      "Galeri digital + film pendek 3–5 menit",
      "Opsi video pesan untuk keluarga di rumah",
      "Cocok untuk keluarga, walimah & momen istimewa",
    ],
    process: [
      "Sampaikan momen yang ingin didokumentasikan",
      "Fotografer ditugaskan sesuai jadwal ibadah",
      "Sesi berlangsung dengan etika yang dijaga",
      "Galeri & film dikirim dalam 1–2 minggu",
    ],
    priceNote: "Mulai Rp 1,5–4 juta/sesi tergantung durasi & hasil akhir",
    priceFrom: 1500000,
    faqs: [
      {
        q: "Apakah boleh berfoto di dekat Ka'bah?",
        a: "Boleh dengan etika — foto kenangan bersama Haram adalah kebiasaan yang luas, dan yang melarangnya adalah tindakan yang mengganggu ibadah jamaah lain. Fotografer kami bekerja dari titik yang tidak menghalangi tawaf, dengan waktu yang dipilih jendela yang lebih tenang, dan menghentikan saat jamaah lain terganggu.",
      },
      {
        q: "Untuk grup 40 orang, bagaimana fotografinya?",
        a: "Untuk grup besar, formatnya berbeda: fotografer mendokumentasikan momen-momen kunci grup (keberangkatan, tawaf bersama, ziarah) daripada individu per orang. Bila setiap keluarga ingin sesi pribadi, beberapa fotografer bekerja berurutan — konfirmasikan kebutuhannya untuk perhitungan yang benar.",
      },
    ],
    keywords: [
      "foto umrah profesional",
      "dokumentasi ibadah",
      "videografer makkah",
      "foto keluarga haram",
    ],
  },
  {
    slug: "tur-belanja-tanah-suci",
    name: "Tur Belanja Tanah Suci (Abraj, Pasar Kurma, Emas)",
    categorySlug: "ziarah-tour",
    shortDesc:
      "Pendamping belanja yang tahu di mana yang jujur — belanja kurma, emas, perhiasan, dan suvenir dengan harga yang benar dan kualitas yang dijamin.",
    longDesc:
      "Belanja di Tanah Suci adalah bagian perjalanan yang hampir semua jamaah lakukan — dan hampir semua jamaah juga meninggalkan uang di tempat yang tidak seharusnya: kurma yang diberi label Ajwa padahal bukan, emas yang karatnya tidak jelas, dan suvenir yang harganya tiga kali lipat di titik wisata. Tur belanja menjalankan tugas sederhana tapi berdampak: membawa Anda ke tempat yang jujur — pasar kurma petani, toko emas yang menyertakan sertifikat, dan pasar umum yang harganya memang benar.\n\nPendamping kami tidak menerima komisi dari toko mana pun — justru itu syarat kerjanya. Tugasnya: memetakan kebutuhan belanja Anda (kiloan kurma? emas? perhiasan? suvenir keluarga?), mengantarkan ke tempat yang benar, membantu menawar dengan bahasa yang tepat, dan menghitung bawaan pulangnya (berat, bagasi, aturan maskapai). Untuk pembelian emas, pendamping memastikan sertifikat & pemberat yang benar — karena emas adalah pembelian yang paling mahal salahnya.",
    features: [
      "Pendamping bebas komisi dari toko",
      "Pasar kurma petani dengan kejujuran varietas",
      "Toko emas dengan sertifikat & pemberat benar",
      "Bantuan menawar dalam bahasa lokal",
      "Hitung bawaan pulang (berat, bagasi, aturan)",
      "Rute sesuai kebutuhan belanja Anda",
    ],
    process: [
      "Sampaikan daftar kebutuhan belanja",
      "Rute pasar disusun sesuai kebutuhan",
      "Pendamping menemani dengan bantuan menawar",
      "Hitung bawaan pulang di akhir",
    ],
    priceNote: "Mulai Rp 300 ribu/pendamping per setengah hari (grup 1–5 orang)",
    priceFrom: 300000,
    faqs: [
      {
        q: "Emas di Saudi benar-benar lebih murah?",
        a: "Emas internasional harganya mengikuti pasar global di mana pun — yang berbeda adalah markup toko dan pembuatan (makhruta). Di pasar emas Saudi, markup pembuatannya sering lebih rendah dari Indonesia untuk desain yang sama, dan bisa ditawar dengan lebih hidup. Selisihnya nyata untuk pembelian besar — bila Anda memang membeli emas, beli dengan pendamping yang tahu.",
      },
      {
        q: "Berapa kg kurma wajar untuk bingkisan keluarga?",
        a: "Hitungan kasar yang sering dipakai: 1 kg untuk keluarga inti, 2–3 kg untuk keluarga besar, dan tambahan 5 kg untuk majelis. Untuk pembelian di atas 10 kg, pertimbangkan pengiriman cargo — membawa sendiri semua itu di pesawat adalah pekerjaan yang tidak perlu.",
      },
    ],
    keywords: [
      "tur belanja makkah",
      "belanja emas saudi",
      "pasar kurma madinah",
      "pendamping belanja jamaah",
    ],
  },
  {
    slug: "umrah-plus-spanyol-andalusia",
    name: "Umrah Plus Spanyol: Andalusia (Córdoba–Granada)",
    categorySlug: "ziarah-tour",
    shortDesc:
      "Perjalanan premium ke jejak peradaban Islam di Eropa — Masjid-Catedral Córdoba, Alhambra Granada, dan kenangan keemasan Al-Andalus yang 700 tahun berdiri.",
    longDesc:
      "Untuk jamaah yang ingin pulang dengan pengalaman yang tidak dimiliki siapa pun di lingkungannya: Andalusia — tanah yang 700 tahun menjadi pusat peradaban Islam di Eropa. Masjid Córdoba yang kolom-kolomnya membentang seperti hutan batu, Alhambra di Granada yang menjadi mahakarya arsitektur Islam yang paling dikenal di dunia, dan Medinat al-Zahra yang keemasannya kini menjadi reruntuhan yang menyimpan cerita. Ini perjalanan yang tidak bisa diringkas menjadi foto — ia perlu didengari narasinya, dan pemandu kami menyusun narasinya dengan benar.\n\nFormatnya premium dan paling panjang di antara semua plus: Tanah Suci 9–10 hari + Andalusia 5–6 hari, dengan penerbangan panjang dan visa Schengen yang diajukan lebih awal (2–3 bulan). Musim terbaiknya adalah spring dan awal autumn — summer Andalusia sangat panas. Untuk jamaah yang menyusunnya bersama keluarga dewasa atau komunitas yang benar-benar menginginkannya, ini perjalanan yang sering disebut 'yang paling mengubah cara saya melihat sejarah umat'.",
    features: [
      "Tanah Suci 9–10 hari + Andalusia 5–6 hari",
      "Masjid-Catedral Córdoba & Alhambra Granada",
      "Visa Schengen diajukan lebih awal (2–3 bulan)",
      "Pemandu sejarah yang menyusun narasi Al-Andalus",
      "Musim terbaik: spring & awal autumn",
      "Format premium untuk keluarga dewasa & komunitas",
    ],
    process: [
      "Konsultasi jadwal & pengajuan visa Schengen (2–3 bulan)",
      "Konfirmasi paket dua segmen",
      "Perjalanan berjalan dengan pemandu dua negara",
      "Evaluasi & dokumentasi di akhir",
    ],
    priceNote: "Mulai Rp 68–85 juta/jamaah (15–16 hari, quad, musim reguler)",
    priceFrom: 68000000,
    faqs: [
      {
        q: "Berapa awal harus merencanakan plus Andalusia?",
        a: "Tiga bulan minimum — visa Schengen menuntut pengajuan yang benar dengan bukti keuangan dan itinerary yang tertata, dan slotnya butuh waktu. Untuk musim puncak (spring), empat bulan lebih aman. Ini perjalanan yang tidak bisa disusun mendadak — dan memang tidak seharusnya.",
      },
      {
        q: "Apakah cocok untuk lansia?",
        a: "Untuk lansia yang sehat dan bisa berjalan program wisata, bisa dengan penyesuaian — Alhambra dan Córdoba menuntut banyak berjalan, tapi ada rute yang lebih pendek. Untuk lansia yang berat, Andalusia bukan pilihan yang tepat — Turki atau Dubai dengan program yang disesuaikan lebih manusiawi.",
      },
    ],
    keywords: [
      "umrah plus spanyol",
      "andalusia tour",
      "cordoba granada",
      "ziarah al andalus",
    ],
  },
  {
    slug: "tur-jabal-nur-gua-hira",
    name: "Tur Pendakian Jabal Nur & Gua Hira",
    categorySlug: "ziarah-tour",
    shortDesc:
      "Pendakian sejarah untuk jamaah muda — Jabal Nur dan Gua Hira tempat wahyu pertama turun, dengan panduan yang memahami batas fisik setiap peserta.",
    longDesc:
      "Untuk jamaah muda yang tubuhnya ingin bekerja sekeras hatinya: pendakian Jabal Nur — 600+ meter dengan 1.700+ anak tangga menuju Gua Hira, tempat wahyu pertama turun kepada Nabi ﷺ. Pendakiannya menuntut dua jam naik dan 90 menit turun dengan cuaca yang menentukan semuanya: sebelum subuh adalah jam yang benar, dan yang naik siang hari biasanya belajar padanya dengan cara yang tidak enak.\n\nProgram kami menyusunnya dengan serius: jam keberangkatan yang benar, air yang cukup (bukan satu botol), pendaki berpengalaman yang mengatur ritme, dan penilaian jujur bila peserta tidak layak naik — karena turun dari bukit itu jauh lebih berat daripada naiknya. Untuk grup pesantren dan komunitas muda, ini program yang paling banyak diceritakan pulangnya; untuk keluarga dengan lansia, pendampingan di bawah (titik parkir, shalat, menunggu) disiapkan dengan baik.",
    features: [
      "Pendakian Jabal Nur & Gua Hira",
      "Jam keberangkatan yang benar (subuh / malam)",
      "Pendaki berpengalaman yang mengatur ritme",
      "Air & perlengkapan yang cukup",
      "Penilaian jujur kelayakan peserta",
      "Program menunggu di bawah untuk yang tidak naik",
    ],
    process: [
      "Konfirmasi tanggal & penilaian kesiapan fisik",
      "Persiapan: jam berangkat, air, sepatu",
      "Pendakian dengan pendaki berpengalaman",
      "Turun & kembali ke hotel untuk istirahat",
    ],
    priceNote: "Mulai Rp 200–400 ribu/orang (pendaki, perlengkapan, transport)",
    priceFrom: 200000,
    faqs: [
      {
        q: "Seberapa berat pendakian ini sebenarnya?",
        a: "Untuk yang terbiasa berjalan dan sehat: berat tapi bisa — dua jam naik dengan berhenti yang manusiawi. Untuk yang jarang berolahraga: sangat berat, dan bagian turunnya yang paling menekan lutut. Jangan naik karena terbawa semangat grup; naik karena tubuh Anda bersedia. Yang tidak naik tetap bisa berdoa dari bawah — dan itu sah sepenuhnya.",
      },
      {
        q: "Ada pengganti untuk yang tidak bisa naik?",
        a: "Ya — titik parkir di kaki bukit bisa ditempuh dengan kendaraan, dan dari sana pemandangan bukit serta ceritanya tetap disampaikan. Bagi banyak jamaah, berdiri di kaki Jabal Nur dan mendengar kisahnya sudah menyentuh — kejujuran tentang batas tubuh sendiri adalah bagian dari adab perjalanan ini.",
      },
    ],
    keywords: [
      "jabal nur",
      "gua hira",
      "pendakian hira",
      "ziarah muda makkah",
    ],
  },

  // ================= KATEGORI 11: KOMUNIKASI & GADGET =================
  {
    slug: "sim-card-stc-saudi-14-hari",
    name: "SIM Card STC Saudi 14 Hari",
    categorySlug: "komunikasi-gadget",
    shortDesc:
      "SIM card STC (Sawafic) aktif 14 hari dengan data besar — tiba di Saudi, kartu sudah aktif, keluarga langsung menerima kabar pertama Anda.",
    longDesc:
      "SIM card adalah salah satu kebutuhan pertama jamaah yang baru mendarat — dan antrean pembelian SIM di bandara Jeddah adalah salah satu antrean yang paling menguras kesabaran di jam tiba. Layanan ini menghilangkannya: SIM STC yang sudah diaktifkan dan menunggu Anda — dikirim ke Indonesia sebelum keberangkatan atau diserahterimakan di bandara Saudi, dengan nomor yang sudah Anda tahu sejak rumah sehingga keluarga bisa menyimpannya.\n\nPaket 14 hari STC menyediakan data yang cukup besar untuk panggilan video keluarga, navigasi, dan grup koordinasi — tanpa repot top-up di tengah perjalanan. Untuk perjalanan lebih panjang, varian 30 hari tersedia. Yang perlu dipastikan: ponsel Anda tidak terkunci operator (bila dibeli cicilan, cek dulu), dan tipe kartu yang cocok (nano/micro/eSIM) — semua diperiksa saat pemesanan supaya tidak ada kejutan di bandara.",
    features: [
      "Kartu sudah aktif sebelum Anda tiba",
      "Nomor diketahui keluarga sejak Indonesia",
      "Data besar untuk video call & navigasi",
      "Varian 14 dan 30 hari",
      "Cek kompatibilitas ponsel saat pemesanan",
      "Opsi pengiriman ke Indonesia atau serah di Saudi",
    ],
    process: [
      "Pesan dengan info tipe ponsel & tanggal tiba",
      "Kartu diaktifkan & dikirim / diserahterimakan",
      "Masukkan saat tiba — langsung terpakai",
      "Isi ulang tersedia bila perjalanan melebihi paket",
    ],
    priceNote: "Rp 180–250 ribu/kartu aktif 14 hari tergantung paket data",
    priceFrom: 180000,
    faqs: [
      {
        q: "Lebih baik SIM fisik atau eSIM?",
        a: "Untuk kebanyakan jamaah, SIM fisik lebih aman — tidak butuh ponsel yang mendukung eSIM dan tidak bisa tertukar dengan kartu Indonesia. eSIM menang untuk ponsel baru dengan dua jalur aktif (Indonesia + Saudi bersamaan). Cek dukungan eSIM ponsel Anda sebelum memilih — semua diperiksa saat pemesanan.",
      },
      {
        q: "Nomor Indonesia saya masih bisa dihubungi?",
        a: "Ya bila SIM Indonesia masih terpasang dengan roaming aktif — panggilan masuk ke nomor Indonesia tetap diterima (dengan biaya roaming yang berlaku). Pola yang umum: nomor Saudi untuk data & panggilan lokal, nomor Indonesia tetap aktif untuk keluarga yang menghubungi. Atur keduanya sebelum berangkat.",
      },
    ],
    keywords: [
      "sim card saudi",
      "sim stc umrah",
      "kartu perdana saudi",
      "internet saudi jamaah",
    ],
  },
  {
    slug: "esim-saudi-umrah",
    name: "eSIM Saudi (Aktivasi QR, Tanpa Fisik)",
    categorySlug: "komunikasi-gadget",
    shortDesc:
      "eSIM Saudi yang aktif dengan QR code — tanpa kartu fisik, langsung diatur dari rumah, dan menyala sejak pesawat mendarat di Jeddah.",
    longDesc:
      "eSIM mengubah cara jamaah modern bergerak: paket dibeli dari rumah, QR code diterima lewat email, dan aktivasinya dilakukan saat di bandara — tanpa antrean, tanpa kartu kecil yang mudah hilang, dan tanpa menukar slot SIM dengan kartu Indonesia. Saat pesawat mendarat di Jeddah, eSIM menyala otomatis dan Anda sudah online sebelum menuruni tangga pesawat.\n\nYang kami bantu bukan sekadar jualan eSIM — tapi memilihnya dengan benar: ponsel yang mendukung eSIM (iPhone XS ke atas, sebagian Android flagship), paket yang data-nya cukup untuk pola penggunaan Anda (video call keluarga membutuhkan lebih dari yang dikira), dan pengaturan dual-SIM yang membuat nomor Indonesia tetap aktif untuk panggilan masuk. Untuk keluarga dengan beberapa ponsel, eSIM untuk semua bisa dipesan sekaligus dalam satu transaksi.",
    features: [
      "Aktivasi QR tanpa kartu fisik",
      "Menyala otomatis saat mendarat",
      "Nomor Indonesia tetap aktif (dual-SIM)",
      "Paket data disesuaikan pola penggunaan",
      "Dipesan sekeluarga dalam satu transaksi",
      "Dukungan teknis sampai perjalanan selesai",
    ],
    process: [
      "Cek dukungan eSIM ponsel Anda",
      "Pilih paket data & terima QR via email",
      "Aktivasi saat mendarat (panduan singkat dikirim)",
      "Dukungan teknis aktif sepanjang perjalanan",
    ],
    priceNote: "Mulai Rp 150 ribu untuk paket 3 GB/10 hari; varian lebih besar tersedia",
    priceFrom: 150000,
    faqs: [
      {
        q: "Ponsel saya mendukung eSIM?",
        a: "iPhone dari XS/XR ke atas mendukung, sebagian besar flagship Android (Samsung S20+, Pixel) juga. Ponsel lokal dan kelas menengah sering tidak mendukung — cek di setelan seluler Anda. Bila tidak mendukung, SIM fisik adalah jalurnya, dan keduanya tersedia di layanan kami.",
      },
      {
        q: "eSIM bisa diaktifkan sebelum berangkat?",
        a: "Paket eSIM bisa dipasang sebelum keberangkatan, tapi masa aktifnya biasanya mulai saat menyala di jaringan Saudi — jadi pasang di rumah, aktifkan data-nya saat tiba. Panduan tepatnya dikirim bersama QR code supaya tidak ada masa aktif yang terbuang sebelum Anda sampai.",
      },
    ],
    keywords: [
      "esim saudi",
      "esim umrah",
      "internet tanpa kartu fisik",
      "esim jeddah",
    ],
  },
  {
    slug: "router-wifi-grup-portabel",
    name: "Router WiFi Grup Portabel (5–10 Perangkat)",
    categorySlug: "komunikasi-gadget",
    shortDesc:
      "Satu router, seluruh grup online — WiFi portabel untuk rombongan yang menghemat biaya SIM per orang dan membuat koordinasi grup tetap menyala.",
    longDesc:
      "Untuk grup, membeli SIM per orang sering buang uang — router WiFi portabel menyediakan satu koneksi yang berbagi ke 5–10 perangkat sekaligus dengan biaya yang jauh lebih efisien per kepala. Router masuk kabin, menyala di bus, di hotel yang WiFi-nya lemah, dan di titik ziarah — menjadi jaringan darurat seluruh rombongan yang membuat koordinasi tidak pernah putus.\n\nRouter kami datang dengan baterai yang menutup satu hari penggunaan normal, koneksi ke jaringan terbaik yang tersedia (bukan terkunci satu operator), dan pengaturan yang sederhana: satu nama WiFi dan sandi yang dibagikan ke grup. Untuk keluarga besar, satu router di bus + satu di kamar adalah kombinasi yang paling praktis. Perhatian teknisnya kami urus — pemilihan jaringan, pengaturan, dan cadangan bila satu operator lemah di suatu kawasan.",
    features: [
      "Berbagi ke 5–10 perangkat sekaligus",
      "Baterai menutup penggunaan satu hari",
      "Koneksi multi-jaringan (bukan terkunci satu operator)",
      "WiFi & sandi yang seragam untuk grup",
      "Sewa per perjalanan atau per minggu",
      "Cadangan pengaturan bila jaringan berubah",
    ],
    process: [
      "Sewa & terima router sebelum keberangkatan",
      "Aktivasi paket data router",
      "Bagikan WiFi ke grup",
      "Kembalikan setelah perjalanan",
    ],
    priceNote: "Sewa mulai Rp 250–400 ribu/perjalanan + paket data terpisah",
    priceFrom: 250000,
    faqs: [
      {
        q: "Router atau SIM per orang untuk keluarga 5 orang?",
        a: "Untuk 5 orang, router biasanya menang biaya — satu paket data router dibagi lima jauh lebih murah daripada lima SIM. Yang router kalah: saat grup berpencah (satu di Haram, satu di hotel). Pola yang sehat: router untuk pergerakan bersama, satu-dua SIM untuk jamaah yang sering berpisah.",
      },
      {
        q: "Kecepatannya cukup untuk video call?",
        a: "Untuk satu-dua video call bersamaan di jaringan yang baik, cukup. Di keramaian Haram saat jutaan orang berbagi jaringan, semua koneksi (termasuk SIM) turun — itu keterbatasan infrastruktur, bukan router Anda. Video call paling lancar dilakukan dari hotel atau area yang lebih sepi.",
      },
    ],
    keywords: [
      "router wifi saudi",
      "wifi portabel umrah",
      "pocket wifi jamaah",
      "internet grup saudi",
    ],
  },
  {
    slug: "power-bank-20000mah-sewa",
    name: "Power Bank Besar 20.000 mAh (Sewa/Beli)",
    categorySlug: "komunikasi-gadget",
    shortDesc:
      "Daya yang menutup satu hari penuh — power bank besar untuk jamaah yang ponselnya bekerja sepanjang hari: navigasi, kamera, dan grup koordinasi.",
    longDesc:
      "Ponsel jamaah bekerja jauh lebih keras dari biasanya — navigasi yang menyala, kamera yang merekam setiap momen, dan grup koordinasi yang tidak berhenti membunyikan. Baterai yang di rumah cukup sampai malam, di Tanah Suci habis sebelum Asar. Power bank 20.000 mAh menutup itu: mengisi ponsel 3–5 kali, muat koper tangan, dan tahan dibawa sepanjang hari di saku jaket.\n\nYang perlu dipahami tentang aturan: power bank hanya boleh di kabin pesawat (tidak boleh di bagasi), dan kapasitas di atas 27.000 mAh dilarang — jadi 20.000 mAh adalah titik maksimal yang aman. Kami menyewakan atau menjual unit yang sudah terverifikasi label kapasitasnya (yang penting bila diperiksa di bandara), dengan kabel yang lengkap untuk tipe ponsel semua anggota keluarga.",
    features: [
      "20.000 mAh — maksimal yang aman dibawa pesawat",
      "Mengisi ponsel 3–5 kali penuh",
      "Label kapasitas yang terverifikasi",
      "Kabel lengkap untuk semua tipe ponsel",
      "Sewa per perjalanan atau beli",
      "Hanya boleh di kabin — panduan disertakan",
    ],
    process: [
      "Sewa/beli & terima sebelum keberangkatan",
      "Bawa di kabin (bukan bagasi)",
      "Gunakan sepanjang perjalanan",
      "Kembalikan (bila sewa) setelah pulang",
    ],
    priceNote: "Sewa Rp 75–150 ribu/perjalanan; beli mulai Rp 250 ribu",
    priceFrom: 75000,
    faqs: [
      {
        q: "Kenapa power bank tidak boleh di bagasi?",
        a: "Karena baterai lithium berisiko terbakar bila tertekan atau terlukai di bagasi — dan di kabin, kejadian semacam itu terlihat dan ditangani cepat. Ini aturan global penerbangan. Yang berisiko dilarang di kabin juga: power bank tanpa label kapasitas atau yang rusak — pilih unit yang labelnya jelas.",
      },
      {
        q: "Satu power bank cukup untuk keluarga?",
        a: "Untuk keluarga 4 orang dengan pola penggunaan normal, dua unit (satu per pasangan) lebih aman daripada satu yang dikeroyok. Power bank yang dipakai satu orang saja tahan sehari; yang dibagi empat orang akan habis di tengah siang — dan inilah yang membuatnya jadi sumber drama keluarga.",
      },
    ],
    keywords: [
      "power bank umrah",
      "powerbank saudi",
      "baterai perjalanan jamaah",
      "power bank pesawat aturan",
    ],
  },
  {
    slug: "adapter-colokan-tipe-g",
    name: "Adapter Colokan Tipe G & Strip Listrik",
    categorySlug: "komunikasi-gadget",
    shortDesc:
      "Colokan Indonesia tidak cocok di Saudi — adapter tipe G dan strip listrik yang membuat semua gadget keluarga menyala dari satu titik colok.",
    longDesc:
      "Arab Saudi memakai colokan tipe G (tiga kaki persegi, standar UK) — dan hampir semua perangkat dari Indonesia tidak cocok langsung. Kesalahan yang paling murah diperbaiki adalah yang paling sering terjadi: jamaah yang menyadari adapter-nya kurang di jam sepuluh malam di hotel, dan sebagian resepsi menjualnya dengan harga yang membuat Anda mengumpat dalam hati.\n\nLayanan ini menyusun perlengkapan listrik keluarga dengan benar sejak Indonesia: adapter tipe G per perangkat penting, satu strip listrik yang mengubah satu colokan hotel menjadi empat-keenam (kamar hotel terkenal colokannya sedikit), dan kabel pengisi cadangan. Untuk keluarga dengan perangkat medis (nebulizer, CPAP), perlengkapan listriknya lebih penting dari yang dikira — kami memastikan tidak ada titik lemah di sana.",
    features: [
      "Adapter tipe G untuk setiap perangkat penting",
      "Strip listrik untuk menggandakan colokan hotel",
      "Kabel pengisi cadangan",
      "Paket keluarga yang tertata per kamar",
      "Perhatian khusus untuk perangkat medis",
    ],
    process: [
      "Hitung perangkat yang dibawa per kamar",
      "Paket adapter & strip dikirim sebelum berangkat",
      "Perlengkapan masuk koper tangan",
    ],
    priceNote: "Paket keluarga mulai Rp 120 ribu (4 adapter + strip)",
    priceFrom: 120000,
    faqs: [
      {
        q: "Berapa voltage listrik di Saudi?",
        a: "230V 50Hz — sama dengan standar adapter charger modern Indonesia (100–240V), jadi charger Anda aman. Yang tidak cocok adalah bentuk colokannya saja. Untuk peralatan yang hanya mendukung 110V (jarang dari Indonesia), konverter dibutuhkan — dan itu sangat jarang untuk charger ponsel.",
      },
      {
        q: "Strip listrik boleh dibawa ke pesawat?",
        a: "Boleh — strip listrik tanpa baterai tidak punya aturan baterai lithium. Letakkan di koper tangan karena memang paling berguna saat tiba. Satu catatan: strip yang punya saklar USB bawaan biasanya aman, tapi periksa spesifikasinya bila ragu.",
      },
    ],
    keywords: [
      "adapter colokan saudi",
      "tipe g adapter",
      "strip listrik umrah",
      "colokan hotel makkah",
    ],
  },
  {
    slug: "koper-tas-khusus-jamaah",
    name: "Koper & Tas Khusus Jamaah",
    categorySlug: "komunikasi-gadget",
    shortDesc:
      "Koper yang dirancang untuk jamaah — tanda nomor grup, saku dokumen, roda yang tahan jalanan, dan tas tangan yang muat perlengkapan ihram.",
    longDesc:
      "Koper jamaah bekerja lebih keras daripada koper liburan biasa: diangkat-turunkan berpuluh kali, digeser di jalanan yang tidak rata, dan dimuat berlebih saat pulang. Koper khusus jamaah menjawabnya: roda yang tahan, gagang yang kuat, tanda nomor grup yang menempel permanen (bukan label kertas yang rontok di bandara pertama), dan saku dokumen terpisah yang membuat paspor-vaksin-tiket tidak tercerai-cerai.\n\nPaketnya juga mencakup tas tangan yang sering diremehkan: tas yang muat perlengkapan ihram, buku doa, snak, dan power bank — tas yang benar-benar dikenakan sepanjang hari di Haram, bukan tas yang mempersakiti bahu di jam kedua. Untuk grup, koper dengan warna dan nomor yang seragam membuat identifikasi di karosel menjadi pekerjaan 10 detik, bukan 10 menit penat.",
    features: [
      "Roda & gagang yang tahan jalanan jamaah",
      "Tanda nomor grup yang menempel permanen",
      "Saku dokumen terpisah",
      "Tas tangan muat perlengkapan ihram",
      "Warna seragam untuk identifikasi grup",
      "Ukuran yang sesuai aturan bagasi",
    ],
    process: [
      "Pilih ukuran & warna sesuai aturan bagasi grup",
      "Koper diserahkan dengan tanda grup",
      "Pakai sepanjang perjalanan",
    ],
    priceNote: "Koper mulai Rp 450 ribu; paket koper + tas tangan mulai Rp 650 ribu",
    priceFrom: 450000,
    faqs: [
      {
        q: "Ukuran koper apa yang sesuai aturan bagasi?",
        a: "Untuk bagasi 23–30 kg, koper ukuran medium (24–26 inci) adalah titik manis — besar cukup untuk bawaan sembilan hari, tetap bisa diangkat manusiawi, dan tidak memaksakan berat yang membuat Anda kena excess. Koper besar 28 inci cocok untuk yang membawa banyak bingkisan pulang — dengan konsekuensi berat yang harus dihitung.",
      },
      {
        q: "Lebih baik koper keras atau lunak?",
        a: "Koper keras melindungi isi dan tahan lecet, tapi beratnya sendiri memakan jatah kilo. Koper lunak lebih ringan dan bisa mengembang saat pulang penuh belanjaan — tapi kurang melindungi isi. Jamaah yang berpengalaman sering memakai kombinasi: keras untuk berangkat, lunak yang dilipat untuk pulang.",
      },
    ],
    keywords: [
      "koper umrah",
      "tas jamaah",
      "koper grup seragam",
      "tas ihram",
    ],
  },
  {
    slug: "sistem-headset-whisper-mutawif",
    name: "Sistem Headset Whisper (Panduan Suara Mutawif)",
    categorySlug: "komunikasi-gadget",
    shortDesc:
      "Headset nirkabel yang membuat suara mutawif terdengar jelas di tengah keramaian — teknologi yang mengubah pengalaman pendengaran seluruh grup.",
    longDesc:
      "Keluhan paling klasik grup besar: 'tidak dengar apa yang dijelaskan mutawif' — jamaah di belakang rombongan mendengar samar-samar, yang di tengah keramaian Haram tidak dengar sama sekali. Sistem headset whisper menyelesaikannya: mutawif berbicara lewat mikrofon kecil, seluruh grup menerima suaranya jelas di headset masing-masing — di tengah tawaf yang penuh, di titik ziarah yang berisik, dan di bus yang berderak.\n\nSistem ini yang membedakan pengalaman grup profesional dari grup biasa — dan yang sering tidak dimiliki grup komunitas karena tidak tahu itu ada. Sewa per perjalanan mencakup unit penerima per jamaah, pemancar untuk mutawif, pengisian harian, dan pelatihan singkat pemakaiannya (yang perlu dipahami: headset ini bukan pengganti perhatian — jamaah yang melamun tetap tidak dengar apa yang penting).",
    features: [
      "Unit penerima per jamaah + pemancar mutawif",
      "Suara jelas di tengah keramaian tertinggal",
      "Pengisian harian terorganisir",
      "Pelatihan singkat pemakaian",
      "Sewa per perjalanan untuk grup 15+ orang",
      "Mengubah kualitas pendengaran seluruh ziarah",
    ],
    process: [
      "Tentukan jumlah unit sesuai ukuran grup",
      "Set dikirim/diserahkan sebelum keberangkatan",
      "Mutawif memakai pemancar sepanjang program",
      "Headset dikembalikan setelah perjalanan",
    ],
    priceNote: "Sewa mulai Rp 60–100 ribu/unit/perjalanan (grup 15+ orang)",
    priceFrom: 60000,
    faqs: [
      {
        q: "Apakah headset dilarang di dalam Haram?",
        a: "Tidak dilarang — headset penerima tanpa pemutar musik adalah alat bantu pendengaran, dan banyak grup profesional memakainya di Haram. Yang dianjurkan adalah adab: volume yang tidak bocor keluar, dan headset dilepas saat shalat berjamaah — semuanya dilatihkan dalam briefing singkatnya.",
      },
      {
        q: "Berapa banyak unit untuk grup 40 orang?",
        a: "Unit penerima satu per jamaah yang butuh mendengar (umumnya semua), plus satu pemancar untuk mutawif dan satu cadangan. Untuk grup 40, 40–42 unit adalah pola normal — dan biaya per orangnya jauh lebih murah daripada nilai dari apa yang mereka dengar di setiap penjelasan.",
      },
    ],
    keywords: [
      "headset whisper umrah",
      "alat bantu mutawif",
      "audio guide saudi",
      "sistem suara rombongan",
    ],
  },
  {
    slug: "kipas-portabel-misting-panas",
    name: "Kipas Portabel & Misting Fan (Musim Panas)",
    categorySlug: "komunikasi-gadget",
    shortDesc:
      "Kipas tangan & misting fan untuk musim panas Saudi — alat kecil yang membuat perjalanan siang menjadi mungkin, bukan penderitaan yang ditahan-tahan.",
    longDesc:
      "Musim panas Makkah (Juni–Agustus) menekan suhu di atas 45°C — dan untuk jamaah yang jadwalnya tidak bisa menghindarinya, kipas portabel bukan gadget mewah, ia alat bertahan. Kipas tangan baterai yang bisa dipasang di leher atau dipegang membuat perjalanan antar titik menjadi bisa; misting fan (kipas dengan semprotan air) menurunkan suhu kulit beberapa derajat dalam hitungan detik.\n\nYang perlu dipahami dengan jujur: alat ini membantu — tidak menyelamatkan. Hydrasi dan jam aktivitas yang benar tetap yang menentukan (jalan di pagi dan sore, rehat di siang). Kipas kami disewa atau dijual dalam paket keluarga: kipas leher untuk setiap orang, misting fan untuk yang paling rentan panas (lansia, anak), dan baterai cadangan — karena baterai kipas yang habis di tengah siang adalah kekecewaan yang bisa dihindari dengan satu-dua unit tambahan.",
    features: [
      "Kipas leher & tangan baterai",
      "Misting fan dengan semprotan air",
      "Paket keluarga dengan baterai cadangan",
      "Ringan untuk dibawa di tas tangan",
      "Sewa per perjalanan atau beli",
      "Bukan pengganti hydrasi — pelengkap",
    ],
    process: [
      "Pilih paket sesuai musim & komposisi keluarga",
      "Terima sebelum keberangkatan",
      "Gunakan di perjalanan siang yang tidak terhindarkan",
      "Kembalikan (bila sewa) setelah pulang",
    ],
    priceNote: "Sewa mulai Rp 40–80 ribu/unit/perjalanan; beli mulai Rp 120 ribu",
    priceFrom: 40000,
    faqs: [
      {
        q: "Kipas ini dilarang di dalam Haram?",
        a: "Kipas kecil berbaterai diizinkan — banyak jamaah memakainya. Yang perlu dijaga adalah adab: jangan mengarahkan kipas ke jamaah lain yang shalat, dan matikan saat shalat berjamaah. Misting (semprotan air) sebaiknya tidak dipakai di dalam masjid yang penuh orang — air yang menyebar membuat lantai licin untuk orang lain.",
      },
      {
        q: "Baterai kipas tahan berapa lama?",
        a: "Unit standar 3–6 jam tergantung kecepatan. Untuk hari penuh di luar, baterai cadangan atau power bank untuk mengisi ulang adalah yang menentukan. Kipas yang mati di jam tiga siang adalah penderitaan yang bisa dihindari dengan satu unit baterai cadangan.",
      },
    ],
    keywords: [
      "kipas portabel umrah",
      "misting fan saudi",
      "alat musim panas jamaah",
      "kipas leher haji",
    ],
  },
  {
    slug: "quran-digital-smart-qibla",
    name: "Al-Qur'an Digital & Smart Qibla",
    categorySlug: "komunikasi-gadget",
    shortDesc:
      "Mushaf digital dengan terjemah dan kompas kiblat elektronik — alat bantu ibadah harian yang membuat shalat dan bacaan tetap tertata di perjalanan.",
    longDesc:
      "Dua hal yang jamaah paling sering mencari di ponselnya: mushaf dan arah kiblat — dan keduanya bisa disiapkan dengan alat yang jauh lebih nyaman daripada layar ponsel yang terus habis baterainya. Al-Qur'an digital (tablet khusus dengan mushaf terjemah) menyala di kegelapan kamar tanpa mengganggu teman sekamar, tidak memerlukan internet, dan baterainya bertahan berminggu-minggu. Smart Qibla — kompas elektronik yang menunjuk arah dengan akurat — menjawab kebingungan arah yang nyata di kamar hotel yang bentuknya tidak standar.\n\nYang perlu dijelaskan dengan jujur: alat-alat ini membantu — mushaf fisik yang Anda pegang dan baca dengan mata tetap pengalaman yang berbeda, dan kompas fisik yang sederhana bekerja tanpa baterai. Digital menang di kegelapan, kepraktisan, dan fitur terjemah yang bisa diperbesar untuk mata lansia. Untuk keluarga dengan lansia, combo al-Qur'an digital + smart Qibla adalah paket yang paling sering dipakai berulang-ulang di Tanah Suci.",
    features: [
      "Al-Qur'an digital dengan terjemah Indonesia",
      "Layar yang menyala tanpa mengganggu sekamar",
      "Baterai bertahan berminggu-minggu",
      "Smart Qibla dengan arah elektronik akurat",
      "Combo paket untuk keluarga lansia",
      "Tanpa internet — bekerja di mana saja",
    ],
    process: [
      "Pilih perangkat & paket keluarga",
      "Terima sebelum keberangkatan",
      "Gunakan sepanjang perjalanan",
    ],
    priceNote: "Al-Qur'an digital mulai Rp 350 ribu; smart Qibla mulai Rp 150 ribu; combo Rp 450 ribu",
    priceFrom: 150000,
    faqs: [
      {
        q: "Apakah al-Qur'an digital boleh di Haram?",
        a: "Boleh — mushaf digital diperlakukan sebagai alat bantu bacaan, dan banyak jamaah memakainya. Yang perlu dijaga adalah adab yang sama dengan mushaf fisik: tidak diletakkan sembarangan, tidak dibawa ke tempat yang tidak pantas. Untuk yang baca di Haram, mushaf fisik kecil tetap yang paling banyak dipilih jamaah Indonesia.",
      },
      {
        q: "Smart Qibla akurat di dalam ruangan?",
        a: "Mayoritas bekerja dengan magnetometer yang cukup akurat di ruangan biasa — yang bisa mengganggu adalah metal yang dekat (kaca lift, rak besi). Untuk jaminan tertinggi, kalibrasi di luar ruangan dulu, dan bandingkan dengan arah di mushala hotel yang sudah pasti — dua sumber lebih baik dari satu.",
      },
    ],
    keywords: [
      "quran digital umrah",
      "smart qibla",
      "kompas kiblat elektronik",
      "mushaf digital jamaah",
    ],
  },
  {
    slug: "bundel-komunikasi-grup",
    name: "Bundel Komunikasi Grup (SIM + Router + Headset)",
    categorySlug: "komunikasi-gadget",
    shortDesc:
      "Paket lengkap komunikasi rombongan — SIM per orang, router grup, dan headset whisper — dalam satu kontrak yang lebih hemat dari beli terpisah.",
    longDesc:
      "Komunikasi grup yang baik butuh tiga lapisan: SIM per orang (jalur pribadi tiap jamaah), router grup (jaringan bersama di pergerakan), dan headset whisper (pendengaran yang jelas saat program) — dan ketiganya paling hemat dibeli sebagai bundel dalam satu kontrak, bukan tiga transaksi terpisah dengan tiga waktu kirim yang berbeda.\n\nBundel kami disusun sesuai ukuran grup: grup kecil (10–15 orang) dengan konfigurasi hemat, grup menengah (25–40) dengan pola yang paling sering dipakai komunitas, dan grup besar (50+) dengan konfigurasi yang melibatkan dua router dan pembagian channel headset. Semua diserahkan dalam satu titik sebelum keberangkatan dengan briefing singkat — karena alat yang baik tanpa yang paham memakainya adalah alat yang menjadi beban, bukan penolong.",
    features: [
      "SIM per orang + router grup + headset whisper",
      "Konfigurasi disesuaikan ukuran grup",
      "Hemat dibanding beli tiga komponen terpisah",
      "Diserahkan satu titik dengan briefing",
      "Dukungan teknis sepanjang perjalanan",
      "Pengembalian router & headset tertata",
    ],
    process: [
      "Kirim ukuran grup & jadwal",
      "Bundel disusun & diserahkan sebelum berangkat",
      "Briefing singkat pemakaian",
      "Pengembalian tertata setelah perjalanan",
    ],
    priceNote: "Mulai Rp 180 ribu/jamaah untuk grup 25+ orang (bundel penuh)",
    priceFrom: 180000,
    faqs: [
      {
        q: "Apakah semua komponen bundel wajib untuk grup kami?",
        a: "Tidak — bundel bisa dikurangi. Grup yang semua anggotanya paham teknologi mungkin tidak butuh briefing panjang; grup yang anggapannya muda mungkin hanya butuh SIM tanpa router. Sebutkan kebutuhan riil grup Anda — kami susun yang pas, bukan yang paling mahal.",
      },
      {
        q: "Siapa yang mengelola router & headset saat di sana?",
        a: "Satu orang penanggung jawab teknis dari grup (biasanya sekretaris atau koordinator muda) yang kami beri briefing singkat sebelum keberangkatan. Bila grup tidak punya siapa pun yang mau memegang peran itu, pendamping teknis kami tersedia sebagai tambahan — kecil biayanya, besar nilainya.",
      },
    ],
    keywords: [
      "bundel komunikasi grup umrah",
      "paket perangkat rombongan",
      "komunikasi jamaah lengkap",
      "sewa headset router saudi",
    ],
  },
  {
    slug: "sim-transit-malaysia-singapura",
    name: "SIM Transit Malaysia / Singapura (Rute Transit)",
    categorySlug: "komunikasi-gadget",
    shortDesc:
      "SIM untuk jamaah dengan rute transit KL atau Singapura — tetap online di bandara transit, bisa menghubungi keluarga selama jam tunggu yang panjang.",
    longDesc:
      "Jamaah dengan rute transit Kuala Lumpur atau Singapura menghadapi jam-jam tunggu yang bisa memakan 4–8 jam — dan di situlah koneksi yang tetap menyala bernilai: menghubungi keluarga, mengatur ulang rencana bila penerbangan bergeser, dan tidak menjadi penumpang yang hilang saat grup berpisah di bandara transit yang luas.\n\nSIM transit ini aktif di jaringan Malaysia/Singapura dengan paket harian yang cukup untuk jam-jam transitnya — dan tetap bisa dipakai saat sampai Saudi bila paketnya mencakup multi-negara. Yang perlu dipahami: SIM ini untuk jalur transit, bukan pengganti SIM Saudi — keduanya punya kegunaan berbeda. Untuk jamaah dengan eSIM multi-negara, paket ini sudah tercakup dan layanan ini tidak dibutuhkan.",
    features: [
      "Aktif di jaringan Malaysia/Singapura",
      "Paket harian untuk jam-jam transit",
      "Varian multi-negara yang mencakup Saudi",
      "Aktif sebelum keberangkatan",
      "Bukan pengganti SIM Saudi — pelengkap transit",
    ],
    process: [
      "Cek rute transit Anda",
      "Pilih paket harian / multi-negara",
      "Aktivasi sebelum keberangkatan",
      "Pakai selama transit & perjalanan (bila multi-negara)",
    ],
    priceNote: "Mulai Rp 80–150 ribu tergantung durasi & cakupan negara",
    priceFrom: 80000,
    faqs: [
      {
        q: "Berapa lama transit yang layak dibeli SIM ini?",
        a: "Transit di atas 4 jam membuat SIM ini layak — di bawah itu, WiFi gratis bandara biasanya cukup untuk beberapa pesan. Untuk transit yang lebih panjang atau grup yang butuh koordinasi di bandara luas, SIM ini menghemat banyak energi yang tidak perlu.",
      },
      {
        q: "Bisa satu SIM untuk Malaysia dan Saudi sekaligus?",
        a: "Bisa — paket multi-negara mencakup keduanya, dan itu pilihan yang paling praktis untuk jamaah dengan rute transit. Harganya sedikit lebih tinggi dari SIM transit harian, tapi menghilangkan kebutuhan kartu kedua — dan untuk jamaah yang tidak mau ribet, selisih harganya murah dibanding kerapian yang diberikan.",
      },
    ],
    keywords: [
      "sim transit malaysia",
      "sim singapore transit",
      "internet bandara transit",
      "sim multi negara",
    ],
  },
  {
    slug: "tas-anti-maling-jamaah",
    name: "Tas Anti-Maling untuk Jamaah",
    categorySlug: "komunikasi-gadget",
    shortDesc:
      "Tas pinggang & selempang dengan zipper tersembunyi dan bahan anti-belah — dokumen, uang, dan ponsel yang aman di tengah keramaian Haram.",
    longDesc:
      "Kawasan Haram adalah tempat dengan kepadatan manusia tertinggi yang pernah Anda alami — dan di keramaian seperti itu, dompet yang menyembul dari saku belakang adalah undangan yang tidak perlu. Tas anti-maling menyusun pertahanannya: zipper yang tersembunyi menghadap tubuh, bahan yang tidak mudah dibelah, tali yang tidak bisa dipotong sekali tarikan, dan kompartemen yang memisahkan uang tunai dari ponsel dan dokumen.\n\nYang perlu diluruskan dengan jujur: Tanah Suci secara umum aman — pencurian yang kasar jarang terjadi. Yang nyata adalah risiko penjimpangan di keramaian puncak dan kehilangan yang tidak disengaja (tas yang tergeser saat tawaf). Tas anti-maling menjawab keduanya — dan yang lebih penting: ia memberi ketenangan pikiran yang membuat ibadah tidak terpecah antara dzikir dan cek dompet setiap lima menit.",
    features: [
      "Zipper tersembunyi menghadap tubuh",
      "Bahan anti-belah & tali yang kuat",
      "Kompartemen terpisah: uang, ponsel, dokumen",
      "Format pinggang & selempang",
      "Ringan untuk dipakai sepanjang hari ihram",
      "Bahan yang tahan keringat",
    ],
    process: [
      "Pilih format (pinggang/selempang) & ukuran",
      "Terima sebelum keberangkatan",
      "Pakai sepanjang perjalanan",
    ],
    priceNote: "Mulai Rp 120–250 ribu tergantung format & bahan",
    priceFrom: 120000,
    faqs: [
      {
        q: "Tas pinggang atau selempang untuk jamaah lansia?",
        a: "Selempang yang dipakai menyilang di depan dada biasanya paling aman dan paling mudah dipantau — tas pinggang butuh fleksibilitas mengangkat baju saat ihram yang kadang merepotkan lansia. Yang penting: tas yang benar-benar dipakai, bukan tas yang disandarkan di kursi Haram saat shalat — itu risiko terbesar dari semuanya.",
      },
      {
        q: "Apakah tas ini muat paspor & buku doa?",
        a: "Ukuran yang kami sarankan memuat ponsel, dompet kecil, paspor (untuk yang memilih membawanya), dan buku doa saku. Buku panduan lengkap lebih baik di kamar atau di tas koper tangan — tas anti-maling bukan tempat memuat semuanya; ia tempat yang paling penting saja.",
      },
    ],
    keywords: [
      "tas anti maling umrah",
      "tas pinggang jamaah",
      "dompet aman haram",
      "tas dokumen saudi",
    ],
  },
  {
    slug: "gps-tracker-anak-lansia",
    name: "GPS Tracker Anak & Lansia",
    categorySlug: "komunikasi-gadget",
    shortDesc:
      "Pelacak kecil untuk yang paling rentan tercecer — tombol darurat, lokasi real-time di ponsel keluarga, dan notifikasi bila keluar dari radius grup.",
    longDesc:
      "Jamaah yang paling mudah hilang di Tanah Suci adalah dua kelompok: anak-anak yang bergerak cepat dan lansia yang tertinggal di antrean. GPS tracker kecil yang dikalungkan atau dimasukkan saku menjawabnya: lokasi real-time terlihat di ponsel keluarga, tombol darurat yang ditekan mengirim notifikasi ke semua anggota grup, dan geo-fence yang memberi peringatan bila penggunanya keluar dari radius yang ditetapkan.\n\nAlat ini bukan pengganti pengawasan — mutawif dan keluarga tetap yang menjaga. Ia pengganti kepanikan: saat anak tidak terlihat di tengah tawaf, ibu yang punya tracker melihat ponselnya dan tahu anaknya 30 meter di belakang — bukan menyapu seluruh Haram dengan jerit yang mengganggu jamaah lain. Untuk jamaah demensia, tracker ini yang memungkinkan mereka tetap ikut perjalanan dengan aman — kombinasi dengan pendamping khusus di kategori Keluarga & Lansia.",
    features: [
      "Lokasi real-time di ponsel keluarga",
      "Tombol darurat (SOS) ke semua anggota grup",
      "Geo-fence dengan notifikasi bila keluar radius",
      "Baterai bertahan 2–5 hari per pengisian",
      "Ukuran kecil: kalung, saku, atau gelang",
      "Beroperasi di jaringan Saudi",
    ],
    process: [
      "Sewa & atur akun keluarga sebelum keberangkatan",
      "Aktivasi & pasang ke pengguna",
      "Pantau dari aplikasi keluarga",
      "Kembalikan setelah perjalanan",
    ],
    priceNote: "Sewa mulai Rp 150–250 ribu/unit/perjalanan + paket data",
    priceFrom: 150000,
    faqs: [
      {
        q: "Apakah anak perlu tahu memakai tracker?",
        a: "Tidak — tracker dikenakan oleh orang tua dan bekerja sendiri. Yang perlu diajarkan anak hanya tombol darurat: 'kalau kehilangan ayah/ibu, tekan tombol ini'. Satu pelajaran sederhana yang bisa dijelaskan di pesawat — dan yang memberi anak rasa aman juga, bukan hanya orang tuanya.",
      },
      {
        q: "Apakah tracker bekerja di dalam Masjidil Haram?",
        a: "Di dalam bangunan masjid, akurasi GPS menurun — lokasi bisa tersendat beberapa ratus meter atau menunjuk area terdekat. Di area terbuka dan area hotel, akurasinya baik. Untuk penggunaan di Haram, anggap tracker sebagai penunjuk kasar — pengawasan langsung tetap yang utama.",
      },
    ],
    keywords: [
      "gps tracker anak",
      "pelacak lansia umrah",
      "alat jejak keluarga saudi",
      "tracker jamaah",
    ],
  },
  {
    slug: "speaker-quran-mini-hotel",
    name: "Speaker Al-Qur'an Mini untuk Kamar Hotel",
    categorySlug: "komunikasi-gadget",
    shortDesc:
      "Speaker kecil pemutar murottal untuk kamar — suara Qur'an yang menemani bangun subuh dan menjelang tidur, tanpa layar yang menyilaukan.",
    longDesc:
      "Ada pengalaman kecil di kamar hotel Tanah Suci yang membuat perjalanan terasa berbeda: bangun subuh dengan suara murottal yang lembut menyala dari sisi kamar, bukan alarm ponsel yang memekik. Speaker Qur'an mini menyediakan itu — perangkat kecil dengan murottal lengkap, volume yang bisa diatur senyap, dan baterai yang bertahan berminggu-minggu tanpa perlu diisi harian.\n\nUntuk keluarga, speaker ini menemani rutinitas yang tidak terlihat: bangun anak untuk sahur, menemani lansia yang sulit tidur dengan bacaan yang menenangkan, dan mengisi kamar saat jamaah lain sedang di Haram. Formatnya sederhana dan tidak perlu dikonfigurasi — satu tombol memutar, tombol lain mengubah surah. Untuk hadiah kepada jamaah yang berangkat, ini pilihan yang sering dipilih karena kegunaannya nyata sepanjang perjalanan, bukan suvenir yang berakhir di koper.",
    features: [
      "Murottal lengkap dengan suara yang lembut",
      "Volume yang bisa diatur sangat senyap",
      "Baterai bertahan berminggu-minggu",
      "Satu tombol memutar — tanpa konfigurasi",
      "Ringan & muat saku koper",
      "Hadiah yang benar-benar dipakai berulang",
    ],
    process: [
      "Pilih unit & kirim ke alamat",
      "Bawa dalam koper tangan",
      "Gunakan sepanjang perjalanan — dan di rumah setelahnya",
    ],
    priceNote: "Mulai Rp 150–300 ribu tergantung model",
    priceFrom: 150000,
    faqs: [
      {
        q: "Speaker ini boleh dipakai di kamar bersama orang lain?",
        a: "Ya dengan volume yang dijaga — speaker ini dirancang untuk kamar, bukan untuk ruang bersama. Saat teman sekamar tidur, volume senyap atau posisikan mengarah ke sisi tempat tidur Anda. Adab kamar bersama adalah bagian dari adab umrah yang tidak tertulis.",
      },
      {
        q: "Murottalnya bacaan siapa?",
        a: "Model standar memuat beberapa qari pilihan (umumnya mengikuti gaya yang paling akrab pendengar Indonesia). Bila Anda punya qari favorit, cek modelnya sebelum membeli — beberapa model terbatas qarinya, dan yang lain memuat banyak pilihan.",
      },
    ],
    keywords: [
      "speaker quran mini",
      "murottal hotel",
      "hadiah jamaah umrah",
      "perangkat ibadah kamar",
    ],
  },
  {
    slug: "panduan-roaming-telkomsel-saudi",
    name: "Panduan Roaming Telkomsel/XL di Saudi",
    categorySlug: "komunikasi-gadget",
    shortDesc:
      "Aktifkan roaming kartu Indonesia dengan benar — paket yang tepat, pengaturan yang benar, dan batasan biaya yang tidak mengejutkan di akhir bulan.",
    longDesc:
      "Roaming kartu Indonesia adalah opsi yang valid untuk jamaah yang tidak mau ribet — tapi jalurnya penuh jebakan kecil yang mahal: roaming tanpa paket memakan puluhan ribu per menit, paket yang tidak diaktifkan dengan benar tidak bekerja sama sekali, dan data yang menyala di luar paket menjadi tagihan yang mengejutkan di akhir bulan.\n\nLayanan ini menyusun pemandu yang benar untuk kartu Anda: paket roaming yang cocok dengan pola perjalanan (umumnya paket harian atau mingguan yang lebih murah dari tarif per-menit), pengaturan ponsel yang benar (data roaming, pemilihan jaringan manual ke operator Saudi yang partner), dan batasan penggunaan yang disetel di aplikasi operator. Untuk keluarga, kami memeriksa kartu setiap anggota — karena satu kartu yang salah konfigurasi bisa menjadi tagihan yang membekas lama.",
    features: [
      "Pemilihan paket roaming yang cocok pola perjalanan",
      "Konfigurasi ponsel yang benar (jaringan & data)",
      "Pembatasan penggunaan via aplikasi operator",
      "Pemeriksaan kartu setiap anggota keluarga",
      "Panduan berhenti data bila paket habis",
    ],
    process: [
      "Kirim operator & tipe kartu setiap anggota",
      "Panduan paket & konfigurasi dikirim",
      "Aktivasi sebelum keberangkatan",
      "Pemeriksaan ulang saat tiba di Saudi (opsional)",
    ],
    priceNote: "Biaya paket roaming mengikuti operator; jasa panduan Rp 50 ribu/keluarga",
    priceFrom: 50000,
    faqs: [
      {
        q: "Roaming atau SIM lokal — mana yang lebih baik?",
        a: "Untuk data yang dipakai intensif, SIM lokal/eSIM jauh lebih murah. Roaming menang untuk jamaah yang mengutamakan nomor aslinya tetap menyala (panggilan penting, verifikasi bank) dengan pemakaian data yang ringan. Kombinasi yang paling sehat: SIM Saudi untuk data, nomor Indonesia dengan paket roaming minimal untuk menerima panggilan.",
      },
      {
        q: "Bagaimana bila saya lupa mematikan data saat paket habis?",
        a: "Pembatasan di aplikasi operator adalah pertahanan pertamanya — setel limit harian yang aman. Tambahan yang lebih pasti: matikan data roaming di setelan ponsel saat paket habis, dan hanya nyalakan saat WiFi tersedia. Tagihan roaming yang mengejutkan hampir selalu lahir dari data yang menyala tanpa disadari.",
      },
    ],
    keywords: [
      "roaming telkomsel saudi",
      "roaming xl umrah",
      "aktifkan roaming indonesia",
      "biaya roaming saudi",
    ],
  },
];
