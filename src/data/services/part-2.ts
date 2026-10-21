import type { Service } from "./types";

/**
 * PART 2 — Kategori: manasik-edukasi (15) + handling-logistik (14) +
 * makanan-konsumsi (15) + kesehatan-asuransi (14) + keuangan-syariah (15).
 */
export const servicesPart2: Service[] = [
  // ================= KATEGORI 5: MANASIK & EDUKASI =================
  {
    slug: "paket-manasik-umrah",
    name: "Paket Manasik Umrah Terpandu",
    categorySlug: "manasik-edukasi",
    shortDesc:
      "Rangkaian manasik umrah lengkap dengan buku, praktik tawaf, dan ujian kesiapan — jamaah yang paham ilmunya ibadahnya lebih tenang.",
    longDesc:
      "Manasik bukan formalitas pra-keberangkatan — ia adalah pembeda antara jamaah yang berjalan mengikuti kerumunan dan jamaah yang tahu persis apa yang sedang ia kerjakan di setiap tahap: niat ihram di miqat, tawaf tujuh putaran, shalat di Maqam Ibrahim, sa'i dari Shafa ke Marwah, dan tahallul sebagai penutup. Paket manasik kami menyusun seluruh itu dalam sesi terpandu oleh pembicara yang berpengalaman memandu jamaah, dengan buku panduan dan simulasi praktik.\n\nFormatnya terbagi dua: kelas reguler yang mengumpulkan jamaah dari beberapa grup (efisien untuk komunitas kecil), dan kelas terpisah untuk rombongan sendiri (disesuaikan dengan perfilman grup, termasuk waktu subuh-malam untuk pengurus masjid). Setiap sesi ditutup dengan tanya-jawab bebas — pertanyaan yang tidak sempat terjawab dijawab lewat kanal grup sampai hari keberangkatan.",
    features: [
      "Materi lengkap: ihram, tawaf, sa'i, tahallul, larangan ihram",
      "Buku panduan & doa harian siap bawa berangkat",
      "Simulasi praktik tawaf & sa'i (mock lab)",
      "Pembicara berpengalaman lintas madzhab",
      "Kanal tanya-jawab aktif sampai hari keberangkatan",
      "Sertifikat keikutsertaan untuk PPIU",
    ],
    process: [
      "Pilih format: kelas reguler gabungan atau kelas rombongan",
      "Jadwalkan sesi (biasanya H-30 sampai H-14)",
      "Ikuti sesi teori + praktik simulasi",
      "Terima buku panduan & kanal grup bimbingan",
    ],
    priceNote: "Rp 150–350 ribu/jamaah tergantung format & fasilitas",
    priceFrom: 150000,
    faqs: [
      {
        q: "Kapan waktu ideal mengikuti manasik?",
        a: "Empat minggu sampai dua minggu sebelum keberangkatan — cukup jauh agar materi sempat dicerna dan dipraktikkan, cukup dekat agar masih segar di ingatan. Manasik yang dilakukan semalam sebelum terbang biasanya hanya berhenti di kepala, tidak sampai ke kaki.",
      },
      {
        q: "Apakah manasik wajib?",
        a: "Secara syariat tidak wajib — keabsahan umrah tidak bergantung pada sertifikat manasik. Tapi secara kenyataan lapangan, jamaah tanpa manasik menghabiskan energi untuk hal-hal yang seharusnya sudah dipelajari: cara wudhu saat padat, urutan tawaf, dan apa yang dilakukan saat tertinggal dari grup.",
      },
    ],
    keywords: [
      "manasik umrah",
      "paket manasik",
      "bimbingan manasik",
      "kelas manasik umrah",
      "persiapan umrah",
    ],
  },
  {
    slug: "mutawif-pendamping-ibadah",
    name: "Mutawif Pendamping Ibadah",
    categorySlug: "manasik-edukasi",
    shortDesc:
      "Mutawif bersertifikat Kemenag yang mendampingi ibadah Anda di Tanah Suci — dari niat ihram sampai tahallul, dengan rasio yang manusiawi.",
    longDesc:
      "Mutawif adalah pihak yang paling menentukan kualitas ibadah Anda di lapangan — lebih dari hotel, lebih dari bus, lebih dari makanan. Mutawif yang baik memandu tawaf dengan sabar di tengah keramaian, menjelaskan doa di setiap titik, menjaga grup tidak tercecer, dan menjawab pertanyaan fikih yang muncul mendadak tanpa merendahkan siapa pun.\n\nLayanan ini menyediakan mutawif bersertifikat untuk jamaah yang menyusun perjalanan mandiri, atau tambahan mutawif khusus untuk subgrup (lansia, keluarga besar). Rasio yang kami pegang: maksimal 1:45 untuk grup reguler, dan 1:25 atau lebih rapat untuk grup lansia. Semua mutawif melalui verifikasi sertifikat, pengalaman angkatan, dan penilaian dari jamaah sebelumnya — karena cerita jamaah yang sudah pulang lebih jujur daripada brosur apa pun.",
    features: [
      "Mutawif bersertifikat & terverifikasi pengalaman",
      "Rasio jelas: 1:45 reguler, 1:25 untuk lansia",
      "Pendampingan teknis ibadah dari ihram sampai tahallul",
      "Tanya-jawab fikih selama perjalanan",
      "Koordinasi dengan koordinator grup & handling",
      "Penilaian terbuka dari jamaah sebelumnya",
    ],
    process: [
      "Sampaikan profil grup (usia, ukuran, kebutuhan khusus)",
      "Kami usulkan mutawif dengan profil yang cocok",
      "Wawancara singkat dengan mutawif (opsional, disarankan)",
      "Konfirmasi & mutawif tergabung dalam program Anda",
    ],
    priceNote: "Rp 1–2,5 juta/jamaah untuk umrah 9 hari tergantung rasio & durasi",
    priceFrom: 1000000,
    faqs: [
      {
        q: "Apa bedanya mutawif dan tour guide biasa?",
        a: "Tour guide mengantar; mutawif membimbing ibadah. Mutawif paham urutan ritual, madzhab, dam, dan situasi-f situasi yang hanya muncul saat ibadah — dari jamaah yang batal ihram sampai yang lemas di tengah sa'i. Pemisahan ini penting saat memilih pendamping: yang pandai memotret bukan otomatis yang paham fikih umrah.",
      },
      {
        q: "Berapa mutawif yang dibutuhkan grup 40 orang?",
        a: "Untuk 40 orang reguler, satu mutawif utama dengan satu asisten adalah standar yang masih manusiawi — dua-duanya bisa memantau depan dan belakang rombongan saat bergerak. Untuk grup lansia, tambah satu lagi. Jangan menghitung mutawif dari sisi hemat; hitung dari sisi keselamatan dan ketenangan ibadah.",
      },
    ],
    keywords: [
      "mutawif umrah",
      "pendamping ibadah",
      "mutawif sertifikat kemenag",
      "sewa mutawif",
      "bimbingan umrah tanah suci",
    ],
  },
  {
    slug: "kelas-manasik-online-live",
    name: "Kelas Manasik Online (Live Zoom)",
    categorySlug: "manasik-edukasi",
    shortDesc:
      "Manasik dari rumah via Zoom dengan sesi live dan rekaman — untuk jamaah di kota tanpa kelas fisik, pekerja dengan jam kantor padat, dan keluarga di berbagai kota.",
    longDesc:
      "Tidak semua jamaah tinggal di kota yang punya kelas manasik fisik — dan tidak semua yang punya akses punya waktu datangnya. Kelas manasik online menjawab itu dengan format yang tetap interaktif: live Zoom empat sesi (teori, teknis, fikih khusus, simulasi tanya-jawab), rekaman yang tersedia sampai selesai perjalanan, dan kanal grup untuk pertanyaan di luar jam kelas.\n\nKualitas kelas online menuntut pembicara yang lebih disiplin — tidak bisa mengandalkan papan tulis dan tatap muka, materi harus terstruktur dengan visual yang benar. Kelas kami dipandu pembicara yang sudah membawa kelas fisiknya ke online sejak lama, dengan demo simulasi tawaf via video dan peta interaktif Masjidil Haram. Untuk keluarga yang tersebar di beberapa kota, ini cara paling praktis berumrah dengan bekal yang sama.",
    features: [
      "Empat sesi live Zoom + rekaman seumur perjalanan",
      "Demo simulasi tawaf & peta interaktif",
      "Kanal grup pertanyaan aktif sampai pulang",
      "Buku panduan digital dikirim sebelum kelas",
      "Jam kelas menyesuaikan zona waktu peserta",
    ],
    process: [
      "Daftar & pilih batch sesuai tanggal keberangkatan",
      "Terima buku digital + tautan kelas",
      "Ikuti 4 sesi live (2 jam/sesi, dua minggu)",
      "Kanal grup tetap aktif sampai kembali ke Indonesia",
    ],
    priceNote: "Rp 200 ribu/jamaah (diskon grup 10+ orang Rp 150 ribu)",
    priceFrom: 200000,
    faqs: [
      {
        q: "Apakah kelas online seefektif manasik fisik?",
        a: "Untuk pemahaman materi, online bahkan lebih terstruktur. Yang hilang adalah dinamika ruangan — tapi kelas online kami menutup celahnya dengan simulasi video yang lebih detail dari mock lab biasa dan kanal tanya-jawab yang lebih panjang. Jamaah introvert bahkan sering lebih aktif bertanya secara online.",
      },
      {
        q: "Saya ketinggalan satu sesi live, bagaimana?",
        a: "Rekaman tersedia segera setelah sesi dan berlaku sampai perjalanan Anda selesai. Yang kami sarankan tetap menontonnya sebelum sesi berikutnya supaya pemahamannya berlapis — dan tetap bertanya di kanal grup bila ada yang tersangkut.",
      },
    ],
    keywords: [
      "manasik online",
      "kelas manasik zoom",
      "manasik virtual umrah",
      "belajar umrah online",
    ],
  },
  {
    slug: "manasik-privat-rumah-kantor",
    name: "Manasik Privat di Rumah / Kantor",
    categorySlug: "manasik-edukasi",
    shortDesc:
      "Pembicara datang ke rumah atau kantor Anda — manasik untuk keluarga besar, tim kantor, atau majelis yang ingin jadwal dan materinya sendiri.",
    longDesc:
      "Keluarga besar yang berumrah bersama, tim perusahaan yang diberi cuti ibadah sekaligus, atau majelis taklim yang hendak berangkat rombongan — semuanya punya karakter yang lebih baik dilayani di tempatnya sendiri. Manasik privat membawa pembicara, materi, dan alat peraga ke lokasi Anda, dengan jadwal yang menyesuaikan: malam hari untuk majelis, jam kerja untuk kantor, atau akhir pekan untuk keluarga yang datang dari berbagai arah.\n\nMaterinya disesuaikan dengan profil peserta: keluarga dengan anak kecil butuh penekanan pada logistik ibadah dengan balita; tim kantor sibuk butuh versi padat dua jam yang menutup semua esensial; majelis yang sudah pernah berumrah butuh materi lanjutan, bukan pengulangan dasar. Konsultasi kecil sebelum sesi memastikan itu — dan sering inilah yang membuat manasik privat terasa jauh lebih berharga daripada kelas umum.",
    features: [
      "Pembicara datang ke lokasi Anda",
      "Materi disesuaikan profil peserta (keluarga/kantor/majelis)",
      "Jadwal fleksibel: malam, akhir pekan, atau jam kerja",
      "Buku panduan fisik untuk tiap peserta",
      "Sesi tanya-jawab panjang tanpa batas waktu kelas",
    ],
    process: [
      "Konsultasi profil peserta & tanggal yang diinginkan",
      "Kami atur pembicara + materi yang disesuaikan",
      "Sesi di lokasi Anda (2–3 jam)",
      "Buku panduan & kanal tanya-jawab menyusul",
    ],
    priceNote: "Rp 2–5 juta/sesi (hingga 50 peserta) tergantung lokasi & durasi",
    priceFrom: 2000000,
    faqs: [
      {
        q: "Berapa minimal peserta untuk manasik privat?",
        a: "Layak mulai 10 peserta — di bawah itu, biaya per orang menjadi tidak rasional dibanding kelas gabungan. Untuk keluarga kecil di bawah 10 orang, kelas online privat dengan jadwal pilihan Anda adalah alternatif yang lebih hemat.",
      },
      {
        q: "Bisa dua sesi dengan materi berbeda?",
        a: "Bisa — pola yang sering dipakai majelis: sesi pertama dasar untuk semua, sesi kedua lanjutan untuk yang sudah pernah berumrah atau calon pendamping grup. Diskon tersedia untuk paket dua sesi.",
      },
    ],
    keywords: [
      "manasik privat",
      "manasik di rumah",
      "manasik kantor",
      "manasik majelis taklim",
    ],
  },
  {
    slug: "buku-panduan-doa-umrah",
    name: "Buku & Panduan Doa Umrah (Fisik/Digital)",
    categorySlug: "manasik-edukasi",
    shortDesc:
      "Panduan lengkap doa dan tuntunan umrah — terjemah, transliterasi, peta ritual, dan catatan lapangan — dalam format buku saku yang muat di saku ihram.",
    longDesc:
      "Jamaah di lapangan butuh satu hal di tangan mereka: panduan yang terbuka cepat, jelas terlihat di cahaya malam, dan tidak menuntut internet. Buku panduan kami disusun dengan struktur mengikuti alur ibadah — bukan alfabetis — sehingga di titik mana pun Anda berdiri, halaman yang dibutuhkan mudah ditemukan: doa saat memakai ihram, doa tiap putaran tawaf, doa antara dua tiang hijau, doa minum zamzam.\n\nFormatnya lengkap: buku saku fisik dengan kertas yang tahan terciprat air wudhu, versi digital untuk ponsel, dan lembar ringkas satu-halaman untuk dicetak dan dilipat di saku ihram. Terjemah dan transliterasinya disusun dengan peduli — huruf Arab yang cukup besar untuk mata yang lelah, dan transliterasi yang memakai ejaan yang biasa dibaca jamaah Indonesia, bukan sistem linguistik yang membuat orang bingung saat paling butuh.",
    features: [
      "Struktur mengikuti alur ibadah, bukan alfabetis",
      "Huruf Arab besar + transliterasi ejaan Indonesia",
      "Tiga format: buku saku, digital, lembar lipat",
      "Kertas tahan air untuk versi fisik",
      "Peta titik ritual Masjidil Haram & Nabawi",
    ],
    process: [
      "Pilih format: fisik, digital, atau paket lengkap",
      "Buku fisik dikirim 5–7 hari; digital langsung",
      "Lembar lipat bonus untuk dicetak sendiri",
    ],
    priceNote: "Digital Rp 75 ribu; fisik Rp 120–180 ribu; paket lengkap Rp 250 ribu",
    priceFrom: 75000,
    faqs: [
      {
        q: "Apakah boleh membawa buku doa saat beribadah?",
        a: "Boleh — membaca doa dari buku sah selama masih memahami apa yang dibaca. Yang perlu dijaga adalah adab: jangan membaca sambil mendorong orang di tengah tawaf. Pola yang baik: pelajari doa utama sampai hafal dari buku sebelum berangkat, dan pakai buku untuk doa-doa tambahan di hotel.",
      },
      {
        q: "Terjemah mana yang dipakai buku ini?",
        a: "Terjemah standar Kemenag RI dengan penyesuaian redaksional agar mudah dibaca keras. Untuk doa-doa yang punya riwayat berbeda antar madzhab, buku mencantumkan keduanya dengan penanda yang jelas — Anda bebas memilih mengikuti pembimbing Anda.",
      },
    ],
    keywords: [
      "buku doa umrah",
      "panduan manasik pdf",
      "doa tawaf sa'i",
      "buku umrah saku",
    ],
  },
  {
    slug: "kajian-persiapan-hati-tafsir-umrah",
    name: "Kajian Persiapan Hati & Tafsir Umrah",
    categorySlug: "manasik-edukasi",
    shortDesc:
      "Kajian yang menyiapkan hati sebelum kaki — makna di balik setiap ritual umrah, dari makna tawaf sebagai putaran tauhid sampai sa'i sebagai kisah pengharapan.",
    longDesc:
      "Banyak jamaah pulang dari umrah dengan koper yang penuh dan hati yang belum tentu. Penyebabnya sederhana: persiapan yang semua orang tuntaskan adalah persiapan fisik — dokumen, koper, vaksin — sementara persiapan yang sesungguhnya menentukan pengalaman ibadah adalah persiapan hati. Kajian ini mengisi ruang kosong itu: mengapa tawaf mengelilingi bukan mengunjungi, mengapa sa'i mengulang lari Hajar, dan apa yang sebenarnya kita minta saat berdiri di Maqam Ibrahim.\n\nFormatnya santai dan terbuka untuk non-jamaah yang sekadar ingin memahami. Dua sesi per gelombang: sesi pertama makna-makna dasar tiap ritual, sesi kedua tema 'apa yang saya bawa pulang dari Baitullah' — persiapan mental yang membuat jamaah datang bukan untuk menghabiskan daftar aktivitas, tapi untuk menghadap. Sesi ini juga yang paling kami sarankan untuk jamaah yang berangkat karena dorongan keluarga, bukan keinginan sendiri.",
    features: [
      "Dua sesi: makna ritual & persiapan hati",
      "Terbuka untuk calon jamaah & keluarga yang mendampingi",
      "Pembicara yang memadukan fikih & pemaknaan",
      "Tidak menggantikan manasik teknis — melengkapinya",
      "Rekaman sesi untuk ditonton ulang di Tanah Suci",
    ],
    process: [
      "Daftar sesi (online atau lokasi tertentu)",
      "Ikuti dua sesi (2 jam per sesi)",
      "Terima rekaman & lembar refleksi",
      "Lembar refleksi dibawa untuk diisi selama perjalanan",
    ],
    priceNote: "Rp 100 ribu/sesi; paket dua sesi Rp 150 ribu",
    priceFrom: 100000,
    faqs: [
      {
        q: "Apakah kajian ini menggantikan manasik teknis?",
        a: "Tidak — keduanya berbeda ranah. Manasik teknis mengajarkan cara beribadah yang benar; kajian ini mengajarkan kenapa ibadah itu bermakna. Jamaah yang mengikuti keduanya pulang dengan dua bekal sekaligus: ibadah yang sah dan ibadah yang menyentuh.",
      },
      {
        q: "Saya belum yakin mau berumrah tahun ini, boleh ikut?",
        a: "Sangat boleh — banyak jamaah justru lahir dari kajian semacam ini. Keputusan berumrah lebih baik lahir dari pemahaman daripada tekanan sosial, dan kajian ini dirancang persis untuk membantu keputusan itu menjadi matang.",
      },
    ],
    keywords: [
      "kajian umrah",
      "persiapan hati umrah",
      "tafsir tawaf",
      "makna ibadah umrah",
    ],
  },
  {
    slug: "pelatihan-sertifikasi-mutawif",
    name: "Pelatihan & Sertifikasi Mutawif",
    categorySlug: "manasik-edukasi",
    shortDesc:
      "Pelatihan profesional untuk calon mutawif — teknis ibadah, manajemen grup, penanganan darurat, dan persiapan sertifikasi Kemenag.",
    longDesc:
      "Permintaan mutawif berkualitas tumbuh lebih cepat dari pasokannya — dan jalurnya lebih bisa ditempuh daripada yang dikira banyak orang. Pelatihan ini menyiapkan calon mutawif di tiga lapisan: penguasaan teknis ibadah umrah dan haji yang lebih dalam dari materi jamaah, manajemen rombongan (hitung, gerak, koordinasi dengan handling dan bus), dan penanganan situasi lapangan — jamaah yang lemas di sa'i, yang hilang di Haram, yang emosional saat berpisah.\n\nModul terakhir disiapkan untuk menghadapi mekanisme sertifikasi Kemenag dan kemitraan dengan PPIU. Lulusan pelatihan masuk jaringan rekomendasi kami dan PPIU partner — bukan jaminan pekerjaan, tapi pintu yang terbuka lebih lebar. Peserta idealnya sudah hafal teknis dasar umrah (pernah berumrah lebih utama); pelatihan ini membangun di atas fondasi itu, bukan memulainya dari nol.",
    features: [
      "Modul teknis ibadah lanjutan + fiqih lintas madzhab",
      "Manajemen rombongan: hitung, gerak, koordinasi",
      "Simulasi situasi lapangan & penanganan darurat",
      "Persiapan sertifikasi Kemenag",
      "Jaringan rekomendasi ke PPIU partner",
      "Mentoring pasca-pelatihan untuk keberangkatan pertama",
    ],
    process: [
      "Daftar dengan bukti pengalaman umrah",
      "Pelatihan intensif (5 hari atau 10 sesi malam)",
      "Ujian teknis + simulasi lapangan",
      "Sertifikasi internal + persiapan sertifikasi Kemenag",
    ],
    priceNote: "Rp 1,5–2,5 juta/peserta termasuk materi & ujian",
    priceFrom: 1500000,
    faqs: [
      {
        q: "Apakah wajib pernah berumrah untuk ikut pelatihan?",
        a: "Sangat disarankan, bukan wajib formal. Calon mutawif yang belum pernah mengalami ibadah sendiri akan kesulitan membayangkan dinamika lapangan yang justru menjadi inti pekerjaan ini. Bila belum pernah, kami anjurkan menunaikan umrah dulu dengan grup reguler sambil mengamati mutawifnya.",
      },
      {
        q: "Apa penghasilan mutawif yang layak?",
        a: "Untuk umrah 9 hari, honor yang wajar berada di kisaran Rp 5–15 juta per trip tergantung PPIU dan rasio jamaah — ditanggung penyelenggara, bukan ditagih ke jamaah secara terpisah. Bila PPIU membebankan mutawif ke jamaah tanpa transparansi, itu tanda yang perlu Anda pertanyakan.",
      },
    ],
    keywords: [
      "pelatihan mutawif",
      "sertifikasi mutawif kemenag",
      "karier mutawif",
      "pendamping ibadah profesional",
    ],
  },
  {
    slug: "simulasi-praktik-tawaf-sai",
    name: "Simulasi Praktik Tawaf & Sa'i (Mock Lab)",
    categorySlug: "manasik-edukasi",
    shortDesc:
      "Praktik fisik tawaf dan sa'i sebelum berangkat — berputar mengelilingi tiruan Ka'bah, berjalan jalur sa'i, dan mengoreksi teknik di samping pembimbing.",
    longDesc:
      "Paham di kepala dan lancar di kaki adalah dua kemampuan yang berbeda. Simulasi praktik menjembatani itu: peserta benar-benar memutari tiruan Ka'bah tujuh putaran sambil mengetahui di mana Hajar Aswad berada di setiap putaran, berjalan jalur sa'i dari titik Shafa ke Marwah, dan mengerjakan urutan lengkap di bawah koreksi pembimbing yang menonton tekniknya.\n\nYang dikoreksi paling banyak di kelas ini justru hal-hal kecil yang besar dampaknya: arah putaran yang terbalik saat panik, posisi menunjuk Hajar Aswad, jarak antar putaran sa'i yang salah hitung, dan cara berpindah antar ritual tanpa kehilangan urutan. Semua itu jauh lebih mudah diperbaiki di lantai mock lab daripada di tengah dua juta orang di Masjidil Haram. Kelas dibuka terbatas per batch supaya setiap peserta benar-benar dipraktikkan, bukan menonton.",
    features: [
      "Tiruan Ka'bah & jalur sa'i yang bisa dipraktikkan",
      "Koreksi teknik langsung oleh pembimbing",
      "Latihan urutan lengkap: ihram → tawaf → sa'i → tahallul",
      "Kelas terbatas (maks 25 peserta)",
      "Bisa digabung dengan kelas teori pada hari yang sama",
    ],
    process: [
      "Daftar batch yang tersedia (jendela H-30)",
      "Ikuti sesi praktik 3 jam di lokasi mock lab",
      "Koreksi pribadi diberikan per peserta",
      "Ulangi di rumah dengan lembar latihan",
    ],
    priceNote: "Rp 250 ribu/peserta; paket gabungan teori+praktik Rp 350 ribu",
    priceFrom: 250000,
    faqs: [
      {
        q: "Apakah simulasi ini penting untuk yang sudah manasik?",
        a: "Sangat membantu — kelas teori dan kelas praktik menempel di otak pada jalur yang berbeda. Jamaah yang pernah praktik fisik biasanya tidak mengalami 'blank moment' di titik-titik penting saat tawaf nyata, terutama di tengah kepadatan yang membuat semua orang lupa arah.",
      },
      {
        q: "Anak-anak boleh ikut simulasi?",
        a: "Boleh dan malah bagus — anak belajar dengan tubuh jauh lebih cepat daripada dengan ceramah. Bawa anak Anda ke sesi praktik: mereka akan mengingat 'putar tujuh kali keliling Ka'bah' jauh lebih lama daripada penjelasan apa pun, dan di Tanah Suci mereka bisa menjadi asisten kecil yang menghitung putaran.",
      },
    ],
    keywords: [
      "simulasi tawaf",
      "praktik manasik",
      "mock lab umrah",
      "latihan sa'i",
    ],
  },
  {
    slug: "bahasa-arab-praktis-jamaah",
    name: "Bahasa Arab Praktis untuk Jamaah",
    categorySlug: "manasik-edukasi",
    shortDesc:
      "Bahasa Arab yang benar-benar dipakai di Tanah Suci — bertanya arah, berbelanja, di apotek, dan di restoran — dalam empat sesi yang tidak membebani.",
    longDesc:
      "Jamaah tidak butuh tata bahasa Arab yang sempurna — mereka butuh kalimat yang menyelamatkan: 'أين الحمام؟' untuk toilet, 'كم السعر؟' untuk harga, 'أنا آسف، لا أفهم' untuk meminta ulang. Kelas ini menyusun empat puluh kalimat dan seratus kosakata yang benar-benar dipakai jamaah, diajarkan dengan metode pendengaran-ulang yang tidak menuntut latar belakang bahasa apa pun.\n\nEmpat sesi membahas konteks yang berbeda: di masjid (bertanya arah, menegur dengan sopan), di pasar (menawar dengan ramah — keterampilan yang menghemat jutaan rupiah di pasar kurma), di layanan kesehatan (menyebutkan keluhan yang paling penting), dan di restoran/kendaraan. Rekaman audio disertakan untuk latihan di perjalanan — dan justru di pesawat menuju Jeddah adalah saat yang paling baik untuk mengulangnya.",
    features: [
      "40 kalimat & 100 kosakata yang benar-benar dipakai",
      "Empat konteks: masjid, pasar, kesehatan, restoran",
      "Rekaman audio untuk latihan mandiri",
      "Tanpa tata bahasa — metode dengar dan ulang",
      "Kartu kalimat saku untuk dibawa berangkat",
    ],
    process: [
      "Daftar & terima kartu kalimat saku",
      "Ikuti 4 sesi (1,5 jam per sesi, online/offline)",
      "Latihan dengan rekaman audio di sela persiapan",
      "Kartu saku dibawa berangkat sebagai penolong cepat",
    ],
    priceNote: "Rp 250 ribu termasuk kartu saku & rekaman",
    priceFrom: 250000,
    faqs: [
      {
        q: "Apakah tanpa bahasa Arab tetap bisa berumrah?",
        a: "Tentu bisa — banyak petugas Haram dan penjaga kawasan wisatawan paham bahasa sederhana Inggris, dan komunitas Indonesia di Tanah Suci besar. Bahasa Arab praktis bukan keharusan, tapi pengalih kepanikan: satu kalimat yang tepat mengubah situasi membingungkan menjadi selesai dalam satu menit.",
      },
      {
        q: "Saya sudah tua, masih mungkin belajar bahasa?",
        a: "Metode kelas ini memang dirancang tanpa menghafal tata bahasa — murni pendengaran dan pengulangan kalimat jadi. Jamaah lansia sering justru paling sukses di kelas ini karena tidak terbebani aturan, hanya menirukan suara — keterampilan yang tidak pernah selesai seumur hidup kita.",
      },
    ],
    keywords: [
      "bahasa arab untuk jamaah",
      "belajar arab umrah",
      "bahasa arab praktis",
      "kalimat arab tanah suci",
    ],
  },
  {
    slug: "manasik-anak-remaja",
    name: "Manasik untuk Anak & Remaja (Fun Learning)",
    categorySlug: "manasik-edukasi",
    shortDesc:
      "Kelas manasik yang dirancang untuk anak 7–15 tahun — permainan, peta petualangan sejarah Nabi, dan doa-doa pendek yang benar-benar bisa mereka hafalkan.",
    longDesc:
      "Anak yang ikut orang tua berumrah adalah penumpang yang paling cepat bosan dan paling mudah menjadi pemandu terbaik — tergantung persiapannya. Kelas ini menyusun materi manasik untuk dunia mereka: peta petualangan hijrah Nabi ﷺ, permainan hitung putaran tawaf, tantangan hafalan doa pendek, dan cerita-cerita di titik-titik ziarah yang dibungkus sebagai kisah petualangan.\n\nHasil di lapangan terasa nyata: anak yang mengikuti kelas ini menjadi penolong orang tua — menghitung putaran, mengingatkan doa, dan yang terpenting, tidak menangis di tengah keramaian karena ia paham apa yang sedang terjadi. Kelas dibagi dua rentang usia: 7–10 tahun dengan pendekatan permainan penuh, dan 11–15 tahun dengan materi yang lebih dalam tapi tetap ringan. Orang tua diundang ikut sesi terakhir supaya rumah dan kelas berbicara bahasa yang sama.",
    features: [
      "Dua rentang usia: 7–10 dan 11–15 tahun",
      "Permainan, peta petualangan & tantangan hafalan",
      "Doa-doa pendek yang realistis untuk dihafal anak",
      "Sesi bersama orang tua di akhir",
      "Modul peran anak sebagai 'asisten ibadah' orang tua",
    ],
    process: [
      "Daftar dengan usia anak",
      "Ikuti 3 sesi sesuai rentang usia",
      "Orang tua ikut sesi penutup bersama",
      "Kartu misi dibawa berangkat — diisi selama perjalanan",
    ],
    priceNote: "Rp 175 ribu/anak (kartu misi & materi termasuk)",
    priceFrom: 175000,
    faqs: [
      {
        q: "Berapa usia minimal anak untuk ikut?",
        a: "Kelas dirancang mulai 7 tahun — di bawah itu, perhatian mereka lebih baik dilayani lewat pengalaman langsung di Tanah Suci daripada kelas. Untuk bayi dan balita, yang perlu disiapkan justru logistik orang tuanya (stroller, jadwal tidur), bukan kelas ibadah.",
      },
      {
        q: "Apakah anak wajib ikut manasik sebelum berumrah?",
        a: "Tidak wajib — tapi manfaatnya sangat nyata. Anak yang paham urutan ibadah menjadi lebih tenang di keramaian, dan lebih terlibat daripada sekadar digotong. Kelas ini juga membuat mereka punya 'pekerjaan' di Tanah Suci — hal yang anak-anak sangat butuhkan untuk merasa penting.",
      },
    ],
    keywords: [
      "manasik anak",
      "kelas ibadah anak umrah",
      "umrah keluarga anak",
      "manasik remaja",
    ],
  },
  {
    slug: "kelas-fikih-wanita-umrah",
    name: "Kelas Fikih Khusus Wanita Umrah",
    categorySlug: "manasik-edukasi",
    shortDesc:
      "Fikih yang hanya dibahas untuk wanita — ihram perempuan, istihadhah, tawaf di keramaian, dan praktik yang jarang dijelaskan di kelas campuran.",
    longDesc:
      "Banyak hal yang hanya dialami jamaah wanita tidak pernah dibahas mendalam di kelas campuran: cara berihram tanpa menampakkan rambut, fiqih istihadhah dan nifas saat berumrah, tawaf dengan tangan menutup dada, dan strategi menjaga tempat berjamaah di keramaian yang tidak ramah ruang. Kelas khusus ini membahas semuanya secara terbuka — dengan pembicara perempuan yang sendiri pernah mengerjakannya di lapangan.\n\nMateri juga menyentuh hal-hal praktis yang sering tidak diberitahu: bagaimana antrean Raudhah yang berbeda antar jamaah pria dan wanita, area-area yang lebih tenang untuk shalat, dan bagaimana mengelola ihram di cuaca panas. Kelas online atau fisik dengan suasana tertutup, jadi pertanyaan yang paling personal pun aman ditanyakan.",
    features: [
      "Pembicara perempuan berpengalaman lapangan",
      "Fiqih istihadhah, nifas, dan niat ihram wanita",
      "Strategi tawaf & Raudhah untuk jamaah wanita",
      "Suasana tertutup untuk pertanyaan personal",
      "Panduan ringkas dicetak untuk dibawa berangkat",
    ],
    process: [
      "Daftar & pilih kelas online atau fisik",
      "Ikuti dua sesi (2 jam per sesi)",
      "Terima panduan ringkas & rekaman",
      "Kanal pertanyaan pribadi aktif sampai keberangkatan",
    ],
    priceNote: "Rp 200 ribu/peserta",
    priceFrom: 200000,
    faqs: [
      {
        q: "Kenapa butuh kelas terpisah untuk wanita?",
        a: "Bukan karena materi ibadahnya berbeda — tapi karena ada bagian fikih dan pengalaman yang hanya dimiliki jamaah wanita, dan keberanian bertanya sangat dipengaruhi suasana. Kelas tertutup wanita membuat pertanyaan yang paling praktis (yang paling menentukan ibadah!) akhirnya ditanyakan.",
      },
      {
        q: "Saya berumrah saat haid — apa yang saya kerjakan?",
        a: "Itu salah satu topik utama kelas ini. Ringkasnya: ibadah yang tetap bisa dikerjakan (dzikir, doa, mengiringi grup) dan yang ditunda (tawaf), plus strategi mengatur waktu agar tidak kehilangan malam-malam terbaik di Madinah. Detailnya dibahas lengkap dengan kasus-kasus nyata jamaah sebelumnya.",
      },
    ],
    keywords: [
      "fikih umrah wanita",
      "istihadhah umrah",
      "ihram wanita",
      "kelas khusus muslimah umrah",
    ],
  },
  {
    slug: "kelas-fikih-umrah-lanjutan",
    name: "Kelas Fikih Umrah Lanjutan (Dam, Qashar, Batal Ihram)",
    categorySlug: "manasik-edukasi",
    shortDesc:
      "Kelas untuk jamaah berpengalaman — kasus dam, kebatalan ihram, umrah susulan, dan situasi-f situasi yang hanya muncul pada umrah kedua dan seterusnya.",
    longDesc:
      "Umrah pertama mengajarkan urutan dasar; umrah kedua dan ketiga menghadapkan Anda pada pertanyaan yang lebih rumit: lupa menunjuk Hajar Aswad di putaran ketiga, ihram batal karena sengaja memakai wewangian, sakit di tengah sa'i dan tidak mampu melanjutkan, atau berniat umrah susulan tiga kali dalam satu perjalanan. Situasi-f inilah yang dibedah di kelas lanjutan — dengan rujukan pendapat ulama dan cara penerapannya yang aman.\n\nKelas ini juga membahas umrah susulan secara teknis: dari miqat mana, bagaimana ihramnya, dan bagaimana mengaturnya dengan jadwal grup yang tidak ikut. Banyak jamaah kehilangan peluang umrah susulan bukan karena tidak mampu, tapi karena tidak tahu mekanismenya — dan kelas ini menutup celah itu dengan kasus-kasus nyata.",
    features: [
      "Kasus kebatalan ihram & kewajiban dam",
      "Fiqih umrah susulan & pilihan miqat",
      "Situasi sakit, lemas, dan tidak mampu di tengah ritual",
      "Rujukan lintas madzhab dengan penerapan aman",
      "Konsultasi kasus pribadi setelah kelas",
    ],
    process: [
      "Daftar (disarankan sudah pernah berumrah)",
      "Ikuti dua sesi kasus",
      "Kirim kasus pribadi Anda untuk dibahas",
      "Terima ringkasan keputusan fikih per kasus",
    ],
    priceNote: "Rp 250 ribu/peserta termasuk konsultasi kasus pribadi",
    priceFrom: 250000,
    faqs: [
      {
        q: "Saya lupa satu putaran tawaf di umrah lalu — apa hukumnya?",
        a: "Tawaf tujuh putaran adalah rukun, jadi kekurangan putaran wajib diqadha (diulang putaran yang kurang) bila masih di Tanah Suci, atau dikenai dam bila sudah pulang. Perinciannya bergantung situasi — dan inilah jenis kasus yang dibahas langsung di kelas dengan pendapat yang berbeda antar ulama.",
      },
      {
        q: "Berapa banyak umrah susulan yang wajar dalam satu perjalanan?",
        a: "Jangan berlomba jumlah — umrah susulan yang melelahkan tubuh bisa mengorbankan ibadah utama dan kesehatan. Umumnya satu-dua umrah susulan dengan pemulihan di antaranya adalah ukuran yang sehat; lebih dari itu sebaiknya konsultasi kondisi fisik Anda.",
      },
    ],
    keywords: [
      "fikih umrah lanjutan",
      "dam umrah",
      "umrah susulan",
      "batal ihram",
    ],
  },
  {
    slug: "video-manasik-rekaman",
    name: "Paket Video Manasik & Podcast Persiapan",
    categorySlug: "manasik-edukasi",
    shortDesc:
      "Rekaman manasik lengkap dalam video pendek dan podcast — dipelajari sambil menemani kerja, memasak, atau di perjalanan menuju bandara.",
    longDesc:
      "Tidak semua orang belajar dari kelas — sebagian besar belajar dari menonton berulang. Paket video ini merangkum materi manasik dalam format pendek: tiap ritual satu video 5–10 menit dengan pengambilan gambar nyata di Tanah Suci (bukan animasi datar), sehingga Anda melihat persis seperti apa Mas'aa dari dalam, di mana posisi berhenti tiap putaran, dan bagaimana keramaian itu sebenarnya terasa.\n\nPelengkapnya berupa podcast persiapan — percakapan santai tentang hal-hal yang tidak masuk buku: bagaimana menangani ketakutan pertama tawaf, apa yang dilakukan saat terpisah dari grup, dan kisah-kisah jamaah yang lucu sekaligus mengajarkan. Formatnya dirancang untuk waktu yang terbuang: perjalanan kerja, antrian, atau malam-malam menjelang keberangkatan.",
    features: [
      "12 video ritual dengan footage nyata Tanah Suci",
      "6 episode podcast persiapan",
      "Akses selamanya — bisa ditonton ulang kapan pun",
      "Sesuai untuk jamaah visual & pendengar",
      "Lembar ringkasan tiap video untuk dicetak",
    ],
    process: [
      "Beli paket & terima akses segera",
      "Tonton video 1–2 per hari dalam dua minggu",
      "Dengarkan podcast di perjalanan sehari-hari",
      "Cetak lembar ringkasan untuk dibawa berangkat",
    ],
    priceNote: "Rp 150 ribu akses penuh (video + podcast + lembar ringkasan)",
    priceFrom: 150000,
    faqs: [
      {
        q: "Apakah video ini menggantikan kelas manasik?",
        a: "Untuk sebagian orang yang disiplin belajarnya, hampir — seluruh esensi materi ada di dalamnya. Yang hilang adalah kesempatan bertanya, dan itulah kenapa akses paket ini termasuk kanal tanya-jawab tertulis. Bila budget sempit, video ini pilihan terbaik; bila bisa, kombinasikan dengan kelas fisik.",
      },
      {
        q: "Bisakah ditonton di Saudi tanpa internet?",
        a: "Ya — unduh semua video sebelum berangkat saat WiFi hotel masih baik, dan mereka akan tersedia offline. Formatnya juga ringan sengaja supaya tidak memakan kuota SIM card Anda di Tanah Suci.",
      },
    ],
    keywords: [
      "video manasik",
      "podcast umrah",
      "belajar umrah video",
      "manasik online rekaman",
    ],
  },
  {
    slug: "grup-bimbingan-ibadah-wa",
    name: "Grup Bimbingan Ibadah (WhatsApp) Selama Perjalanan",
    categorySlug: "manasik-edukasi",
    shortDesc:
      "Ustadz pendamping di grup WhatsApp Anda dari persiapan sampai pulang — tanya kapan saja, jawab dalam hitungan jam, bahasa yang hangat.",
    longDesc:
      "Pertanyaan ibadah paling penting sering muncul di momen yang tidak terduga: tengah malam sebelum tawaf pertama, di antara dua tiang hijau, atau saat saudara yang tidak ikut bertanya lewat keluarga di rumah. Grup bimbingan ini menyediakan ustadz pendamping yang aktif di WhatsApp grup Anda — dari persiapan dokumen di Indonesia sampai tiba kembali di rumah.\n\nYang membedakan dari grup gratisan yang penuh spam: satu ustadz tetap yang mengenal konteks perjalanan Anda, batasan jam tanggap yang jelas (pertanyaan mendesak dijawab cepat, pertanyaan umum dalam beberapa jam), dan larangan iklan yang ditegakkan. Grup ini cocok untuk keluarga mandiri yang tidak berangkat dengan PPIU, atau rombongan yang mutawifnya sibuk dan butuh saluran kedua.",
    features: [
      "Ustadz pendamping tetap sepanjang perjalanan",
      "Tanggapan cepat untuk pertanyaan mendesak",
      "Konteks perjalanan Anda dipahami ustadznya",
      "Grup bebas iklan & bebas spam",
      "Arsip jawaban yang bisa dicari kembali",
    ],
    process: [
      "Daftar & buat grup WhatsApp Anda sendiri",
      "Tambahkan ustadz pendamping ke grup",
      "Aktif dari persiapan sampai pulang (30–45 hari)",
      "Arsip jawaban tersedia untuk grup Anda selamanya",
    ],
    priceNote: "Rp 300 ribu/grup (hingga 50 anggota) untuk satu siklus perjalanan",
    priceFrom: 300000,
    faqs: [
      {
        q: "Apakah ustadz respons 24 jam?",
        a: "Untuk pertanyaan mendesak yang menyangkut keselamatan atau ibadah yang sedang berlangsung, ustadz kami merespons secepat mungkin — termasuk malam. Pertanyaan umum seperti 'kapan waktu baik ke Quba' dijawab dalam beberapa jam. Yang perlu dipahami: ini layanan pendamping, bukan pengganti darurat medis — untuk darurat kesehatan, gunakan medical assistance.",
      },
      {
        q: "Grup saya sudah ada sendiri (keluarga), bisa ditambah ustadz?",
        a: "Sangat bisa — justru pola paling umum. Anda tetap di grup keluarga yang sudah hidup, dan ustadz bergabung sebagai anggota yang menjawab. Semua anggota keluarga di Indonesia juga bisa bertanya — sering keluarga di rumah yang paling banyak bertanya.",
      },
    ],
    keywords: [
      "ustadz online umrah",
      "tanya jawab ibadah whatsapp",
      "bimbingan ibadah online",
      "pendamping ibadah jarak jauh",
    ],
  },
  {
    slug: "manasik-mualaf-pembinaan",
    name: "Manasik Khusus Mualaf (Pembinaan Intensif)",
    categorySlug: "manasik-edukasi",
    shortDesc:
      "Pembinaan ibadah untuk jamaah mualaf — dari dasar shalat sampai umrah, dengan tempo yang tenang, bahasa yang sederhana, dan pendampingan yang tulus.",
    longDesc:
      "Jamaah mualaf membawa perjalanan yang berbeda: banyak yang baru beberapa tahun mengenal shalat, belum hafal doa-doa panjang, dan menghadapi rasa cemas yang tidak dialami jamaah keluarga Muslim turun-temurun. Pembinaan ini dirancang untuk itu — tempo yang lebih lambat, penekanan pada makna sebelum rumitnya aturan, dan pendampingan yang membuat mereka tidak merasa menjadi 'penumpang' di kelas yang menganggap semua orang sudah hafal sejak kecil.\n\nMaterinya disusun bertahap: fondasi (shalat, wudhu, doa harian) dikuasai dulu, baru manasik umrah dibangun di atasnya. Pendampingan berlanjut ke perjalanan itu sendiri — bila diminta, pendamping khusus bisa ditugaskan di Tanah Suci. Untuk komunitas mualaf atau lembaga dakwah yang menyelenggarakan umrah jamaah mereka, format kelas privat tersedia dengan kerahasiaan yang dijaga bila diperlukan.",
    features: [
      "Tempo pembinaan yang menyesuaikan, bukan kelas standar",
      "Fondasi shalat & doa dikuasai sebelum manasik",
      "Pendamping khusus di Tanah Suci (opsional)",
      "Kerahasiaan identitas dijaga bila diminta",
      "Komunitas alumni untuk saling menyertakan",
    ],
    process: [
      "Konsultasi awal: tahap keimanan & kesiapan ibadah",
      "Susun program pembinaan bertahap (2–6 bulan)",
      "Ikuti pembinaan + praktik bertahap",
      "Pendampingan berlanjut sampai pulang dari Tanah Suci",
    ],
    priceNote: "Mulai Rp 500 ribu/bulan program pembinaan; pendamping Tanah Suci terpisah",
    priceFrom: 500000,
    faqs: [
      {
        q: "Apakah mualaf harus bisa bahasa Arab untuk berumrah?",
        a: "Tidak — umrah sah dengan doa dalam bahasa apa pun yang dipahami. Klas ini menekankan doa-doa inti dalam Arab sambil menempuh penerjemahannya, jadi jamaah mualaf beribadah dengan yang ia pahami, bukan dengan bunyi yang tidak ia kenal maknanya.",
      },
      {
        q: "Identitas mualaf aman di kelas ini?",
        a: "Kami memperlakukan kerahasiaan sebagai kebutuhan nyata, bukan formalitas: kelas privat tersedia, daftar peserta tidak dipublikasikan, dan dokumentasi hanya dengan persetujuan. Bila kerahasiaan penuh dibutuhkan, pendampingan satu-lawan-satu adalah opsi yang kami sediakan.",
      },
    ],
    keywords: [
      "manasik mualaf",
      "umrah mualaf",
      "pembinaan mualaf",
      "umrah muslim baru",
    ],
  },

  // ================= KATEGORI 6: HANDLING & LOGISTIK =================
  {
    slug: "handling-bandara-jeddah",
    name: "Handling Bandara Jeddah (Grup)",
    categorySlug: "handling-logistik",
    shortDesc:
      "Tim handling resmi yang memandu rombongan di bandara Jeddah — dari turun pesawat, imigrasi, sampai koper naik bus — tanpa antre yang menguras badan.",
    longDesc:
      "Jeddah King Abdulaziz International Airport adalah gerbang yang dijebol jutaan jamaah setiap tahun — dan pengalaman antre imigrasi di sana berbeda jauh antara grup yang punya handling dan grup yang mengandalkan keberuntungan. Tim handling yang baik bekerja sebelum pesawat mendarat: data jamaah sudah tersalurkan, jalur imigrasi sudah dipetakan, dan petugasnya menunggu di titik temu dengan papan nama yang terlihat dari jauh.\n\nLayanan ini mencakup pemimpin rombongan yang menjaga grup sejak pintu pesawat, koordinasi jalur imigrasi (termasuk jalur khusus yang tersedia untuk program tertentu), pengambilan koper yang terorganisir, dan pengantaran sampai bus yang menunggu. Untuk grup PPIU, handling biasanya sudah termasuk — layanan ini relevan untuk jamaah mandiri, komunitas tanpa partner handling, atau tambahan kapasitas saat musim puncak ketika handler utama kelebihan muatan.",
    features: [
      "Pemimpin rombongan sejak pintu pesawat",
      "Pemetaan jalur imigrasi & slot kedatangan",
      "Pengambilan koper terorganisir per keluarga",
      "Titik temu yang jelas sampai bus berangkat",
      "Sistem pelaporan waktu antre yang transparan",
    ],
    process: [
      "Kirim data penerbangan & daftar jamaah",
      "Tim menyiapkan slot & petugas sesuai jadwal tiba",
      "Eskort di lapangan dari pesawat sampai bus",
      "Laporan waktu kedatangan & antrean dikirim ke koordinator",
    ],
    priceNote: "Rp 350–600 ribu/jamaah tergantung ukuran grup & musim",
    priceFrom: 350000,
    faqs: [
      {
        q: "Berapa lama biasanya proses imigrasi Jeddah?",
        a: "Dengan handling yang baik dan jam kedatangan yang tepat, 1–2 jam dari turun pesawat sampai di bus. Tanpa handling di jam puncak, bisa 3–6 jam — dan itu yang membuat jamaah datang ke hotel dalam kondisi sudah lelah sebelum ibadah dimulai. Perbedaan waktu ini adalah alasan layanan handling dianggap investasi, bukan biaya.",
      },
      {
        q: "Handling bisa mengutamakan jalur VIP?",
        a: "Jalur fast-track dan lounge VIP tersedia di bandara Jeddah dengan biaya terpisah yang cukup signifikan — untuk jamaah dengan kebutuhan khusus medis atau grup premium. Untuk grup reguler, yang lebih berdampak adalah jam kedatangan yang dipilih dengan cerdas dan petugas yang sudah menunggu, bukan jalur VIP.",
      },
    ],
    keywords: [
      "handling jeddah",
      "handling bandara jamaah",
      "imigrasi jeddah umrah",
      "handler tanah suci",
    ],
  },
  {
    slug: "handling-bandara-madinah",
    name: "Handling Bandara Madinah",
    categorySlug: "handling-logistik",
    shortDesc:
      "Handling di bandara Pangeran Mohammad bin Abdulaziz — bandara yang lebih ringan dari Jeddah, dengan petugas yang terbiasa menerima gelombang grup subuh.",
    longDesc:
      "Bandara Madinah adalah pintu masuk yang jauh lebih tenang daripada Jeddah — antrean imigrasinya lebih pendek, jalannya lebih ringkas, dan keluar ke lobi butuh waktu jauh lebih sedikit. Namun gelombang penerbangan subuh dari Indonesia bisa tetap membuat parkirnya penuh bus dan antrean taksi panjang — dan di situlah handling tetap berperan: petugas yang menunggu dengan papan nama, koordinasi koper, dan pengantaran sampai bus hotel.\n\nUntuk pola perjalanan Madinah-dulu (masuk Madinah, keluar Jeddah), handling Madinah adalah yang pertama dikerjakan — dan kesan pertama perjalanan dibentuk di sini. Tim kami juga mengkoordinasi dengan hotel agar kamar early check-in siap untuk grup yang tiba subuh, sehingga jamaah tidak menunggu di lobi dengan koper setelah 12 jam di udara.",
    features: [
      "Petugas menunggu dengan papan nama grup",
      "Koordinasi koper keluar terminal",
      "Pengantaran sampai bus hotel",
      "Sinkronisasi dengan hotel untuk early check-in",
      "Laporan kedatangan ke koordinator grup",
    ],
    process: [
      "Kirim data penerbangan & daftar jamaah",
      "Petugas disiapkan sesuai jam tiba",
      "Eskort dari pintu pesawat ke bus",
      "Laporan kedatangan & jam hotel dikirim",
    ],
    priceNote: "Rp 250–450 ribu/jamaah tergantung ukuran grup & jam kedatangan",
    priceFrom: 250000,
    faqs: [
      {
        q: "Apakah Madinah butuh handling padahal bandaranya ringan?",
        a: "Untuk grup kecil tiba di jam sepi, mungkin tidak. Untuk grup besar tiba subuh bersama tiga penerbangan lain — sangat perlu. Nilai handling di Madinah bukan memangkas antrean imigrasi (sudah ringan), tapi menata koper 40 keluarga dan memastikan bus yang benar terisi jamaah yang benar.",
      },
      {
        q: "Handling Madinah dan Jeddah bisa satu paket?",
        a: "Bisa dan biasanya begitu untuk perjalanan open-jaw — satu penyedia untuk kedua bandara membuat koordinasi jauh lebih mudah. Paket dua bandara tersedia dengan tarif yang lebih hemat daripada dua layanan terpisah.",
      },
    ],
    keywords: [
      "handling madinah",
      "handling bandara madinah",
      "imigrasi madinah",
      "jemput grup madinah",
    ],
  },
  {
    slug: "handling-keberangkatan-indonesia",
    name: "Handling Keberangkatan di Bandara Indonesia",
    categorySlug: "handling-logistik",
    shortDesc:
      "Tim pendamping di bandara keberangkatan Indonesia — dari titik temu awal, check-in bagasi grup, sampai embaring — malam yang paling rawan kekacauan tertata rapi.",
    longDesc:
      "Malam keberangkatan di bandara Indonesia adalah momen paling rawan kekacauan dalam seluruh perjalanan: empat puluh keluarga datang dari arah berbeda, koper yang lupa label, orang tua yang tidak tahu di mana harus antre, dan waktu check-in yang berakhir sebelum semua orang sampai. Tim handling keberangkatan mengambil beban itu: titik temu yang diumumkan jelas, petugas yang menunggu di sana tiga jam sebelum terbang, check-in bagasi grup yang dikoordinasikan sekaligus, dan pengantar sampai gerbang embaring.\n\nUntuk komunitas yang menyusun keberangkatan sendiri, layanan ini mungkin yang paling terasa nilainya — bukan di Tanah Suci, tapi di malam ketika seluruh kampung datang mengantar dan emosinya tinggi. Petugas kami terbiasa itu: hitung jamaah, bagi label koper, atur barisan check-in, dan memastikan tidak ada satu orang pun tertinggal di luar gerbang.",
    features: [
      "Titik temu & petugas menunggu H-3 jam",
      "Check-in bagasi grup terkoordinasi",
      "Label koper & pengelompokan bus dibagikan",
      "Pengantar sampai gerbang embaring",
      "Koordinasi dengan lounge bila grup memakainya",
    ],
    process: [
      "Kirim daftar jamaah & jadwal terbang",
      "Jadwal jemput & titik temu diumumkan ke grup",
      "Petugas menerima jamaah satu per satu di titik temu",
      "Check-in grup & pengantar ke gerbang",
    ],
    priceNote: "Rp 200–400 ribu/jamaah tergantung bandara & ukuran grup",
    priceFrom: 200000,
    faqs: [
      {
        q: "Berapa jam sebelum terbang jamaah harus tiba?",
        a: "Untuk penerbangan internasional grup, tiba 4 jam sebelum keberangkatan adalah standar yang aman — check-in grup membutuhkan waktu, dan maskapai menutup counter 1 jam sebelum terbang tanpa pengecualian. Handling kami mengatur jam kumpul sedemikian rupa agar semua tiba dalam jendela yang aman.",
      },
      {
        q: "Bisa menangani grup yang berangkat dari kota berbeda?",
        a: "Bisa — grup lintas kota (misalnya 20 orang Jakarta, 15 Surabaya, bertemu di Madinah) menuntut handling terpisah di tiap bandara dengan koordinator tunggal yang melihat keduanya. Struktur ini umum di komunitas yang anggotanya tersebar, dan kami menanganinya dalam satu kontrak.",
      },
    ],
    keywords: [
      "handling keberangkatan",
      "check in grup umrah",
      "pendamping bandara indonesia",
      "keberangkatan rombongan",
    ],
  },
  {
    slug: "konsinyasi-bagasi-grup",
    name: "Konsinyasi Bagasi Grup",
    categorySlug: "handling-logistik",
    shortDesc:
      "Konsinyasi bagasi rombongan — koper grup diurus satu pintu dari penomoran, pengecekan berat, sampai pengambilan di sisi lain dengan daftar yang terekam.",
    longDesc:
      "Konsinyasi bagasi grup adalah layanan yang tidak terlihat sampai ia gagal: koper keluarga A masuk bus keluarga B, koper koordinator tertinggal di hotel kedua, dan koper berisi perlengkapan ibadah rombongan tidak pernah muncul. Sistem konsinyasi kami mencatat setiap koper sejak titik kumpul — nomor urut, nama pemilik, kontak — lalu mengawalnya melalui seluruh perpindahan dengan pemeriksaan di setiap titik.\n\nLayanan ini cocok untuk grup besar dengan perpindahan banyak (bandara-hotel-hotel-bandara) dan untuk rombongan yang menyertakan perlengkapan bersama (bendera, kotak P3K, perlengkapan ihram grup). Daftar koper yang terekam juga menjadi dasar klaim bila satu-dua koper tercecer di bandara — tanpa daftar, klaim menjadi menyusun kepingan puzzle di tengah antrean yang lelah.",
    features: [
      "Penomoran & registrasi koper sejak titik kumpul",
      "Pemeriksaan berat awal (menghindari kejutan bandara)",
      "Pengawalan koper di setiap perpindahan",
      "Daftar koper digital yang bisa dibuka koordinator",
      "Dasar klaim siap pakai bila koper tercecer",
    ],
    process: [
      "Registrasi koper saat titik kumpul (nomor, nama, foto)",
      "Label tertempel + berat dicatat",
      "Pengawalan melalui setiap perpindahan",
      "Verifikasi jumlah di tiap titik tiba",
    ],
    priceNote: "Rp 50–100 ribu/koper untuk seluruh perjalanan; grup 50+ koper diskon",
    priceFrom: 50000,
    faqs: [
      {
        q: "Apakah konsinyasi menggantikan bagasi maskapai?",
        a: "Tidak — bagasi tetap dicek ke maskapai seperti biasa. Konsinyasi adalah lapisan pengelolaan di atasnya: memastikan koper yang benar naik bus yang benar, koper berat yang melebihi limit ditemukan sejak awal, dan saat pulang, semua koper kembali ke pemiliknya masing-masing.",
      },
      {
        q: "Koper berat melebihi limit, bagaimana penanganannya?",
        a: "Pengecekan berat awal membuat ini terdeteksi sebelum bandara — pilihan penanganannya: distribusi ulang ke koper lain yang masih longgar, beli kilo tambahan (lebih murah sejak awal), atau koper dijadikan barang terpisah. Semua jauh lebih mudah dikerjakan di titik kumpul daripada di konter check-in yang penuh antrean.",
      },
    ],
    keywords: [
      "konsinyasi bagasi",
      "pengelolaan koper grup",
      "bagasi rombongan",
      "koper jamaah",
    ],
  },
  {
    slug: "pengiriman-koper-cargo-tanah-suci",
    name: "Pengiriman Koper Cargo Indonesia ↔ Tanah Suci",
    categorySlug: "handling-logistik",
    shortDesc:
      "Kirim koper berlebih lewat cargo — perlengkapan grup, hadiah, atau belanjaan pulang — dengan tarif per kilo yang jauh lebih hemat dari excess baggage pesawat.",
    longDesc:
      "Setiap musim, ribuan koper berpindah antara Indonesia dan Jeddah/Madinah tanpa pernah naik pesawat bersama pemiliknya — itu bisnis cargo yang sudah berjalan puluhan tahun. Untuk jamaah dengan bagasi berlebih besar (perlengkapan rombongan, bingkisan kurma dalam jumlah banyak, atau barang titipan komunitas), cargo adalah solusi yang jauh lebih hemat: tarif per kilo sekitar sepertiga hingga setengah dari excess baggage maskapai, dengan waktu tunggu beberapa hari.\n\nYang perlu dipahami sebelum memilih cargo: barangnya tidak terbang bersama Anda — koper yang dikirim hari keberangkatan akan tiba beberapa hari kemudian (atau dikirim pulang dan tiba di rumah setelah Anda). Jadwalnya harus dirancang: koper perlengkapan dikirim lebih awal supaya menunggu Anda di hotel; koper pulang dikirim sebelum keberangkatan supaya menunggu di rumah. Layanan ini mengatur jadwal keduanya dengan titik jemput yang jelas di kedua sisi.",
    features: [
      "Tarif per kilo 50–70% lebih hemat dari excess baggage",
      "Dua arah: ke Tanah Suci & pulang ke Indonesia",
      "Jadwal dikalibrasi: menunggu di hotel atau di rumah",
      "Penjemputan dari rumah/hotel di kedua sisi",
      "Tracking nomor resi yang bisa dipantau keluarga",
    ],
    process: [
      "Kirim daftar barang & berat perkiraan",
      "Kutipan tarif & estimasi waktu dikirim",
      "Kurir jemput dari alamat Anda",
      "Pantau resi sampai barang diterima di sisi tujuan",
    ],
    priceNote: "Mulai Rp 45–75 ribu/kg tergantung arah & musim; minimum pengiriman berlaku",
    priceFrom: 45000,
    faqs: [
      {
        q: "Berapa lama cargo Jeddah–Indonesia?",
        a: "Umumnya 5–10 hari setelah barang diterima di gudang Jeddah, tergantung musim dan kapal/penerbangan pengangkutnya. Saat musim puncak pulang (akhir Ramadhan, Dzulhijjah) waktu bisa memanjang — jangan menghitung barang tiba besoknya setelah Anda pulang; rencanakan lebih awal.",
      },
      {
        q: "Barang apa yang tidak boleh dikirim cargo?",
        a: "Barang terlarang udara/daulat: baterai loose, cairan berbahaya, dan barang-barang yang butuh izin khusus. Zamzam kemasan resmi umumnya boleh lewat jalur khusus — konfirmasi saat pemesanan. Yang penting diingat: jangan kirim dokumen penting (paspor, uang) lewat cargo — itu selalu berjalan bersama Anda.",
      },
    ],
    keywords: [
      "cargo koper umrah",
      "kirim koper jeddah indonesia",
      "pengiriman barang tanah suci",
      "kargo jamaah",
    ],
  },
  {
    slug: "pengiriman-air-zamzam-massal",
    name: "Pengiriman Air ZamZam Massal (Cargo)",
    categorySlug: "handling-logistik",
    shortDesc:
      "Kirim air zamzam kemasan resmi dalam jumlah besar lewat jalur cargo — untuk masjid, majelis, dan keluarga besar yang membagikannya sejak kembali.",
    longDesc:
      "Kebutuhan zamzam komunitas berbeda dari kebutuhan pribadi: masjid yang menyediakan zamzam untuk majelis, keluarga besar yang berbagi ke ratusan sanak saudara, atau organisasi yang membagikannya di acara — semuanya membutuhkan belasan sampai puluhan karton 5 liter. Membawanya sendiri di pesawat adalah ketidakmungkinan; jalur cargo massal adalah jalurnya.\n\nLayanan ini mengelola pembelian zamzam kemasan resmi dari supermarket Saudi (± SAR 15–20/karton 5 liter, harga resmi pemerintah), pengiriman lewat jalur cargo yang terbiasa, sampai distribusi di Indonesia. Yang perlu diperhatikan: zamzam hanya boleh dibeli dan dikirim dalam kemasan resmi — jangan pernah membeli 'zamzam' botolan di sekitar Haram yang asal-usulnya tidak jelas, dan kami menolak mengirimnya bila Anda memintanya.",
    features: [
      "Pembelian kemasan resmi supermarket Saudi",
      "Pengiriman massal lewat jalur cargo terbiasa",
      "Distribusi ke alamat di Indonesia",
      "Estimasi total biaya transparan (beli + kirim)",
      "Penolakan tegas pada zamzam non-resmi",
    ],
    process: [
      "Tentukan jumlah karton & alamat tujuan",
      "Kami kirim estimasi total (beli + cargo)",
      "Pembelian & pengiriman dieksekusi di Saudi",
      "Zamzam tiba di alamat Anda dalam 1–3 minggu",
    ],
    priceNote: "Mulai Rp 250–400 ribu/karton 5 liter (beli + kirim) tergantung volume & musim",
    priceFrom: 250000,
    faqs: [
      {
        q: "Berapa batas zamzam yang boleh dibawa sendiri di pesawat?",
        a: "Zamzam kemasan resmi 5 liter umumnya diizinkan sebagai bagasi terpisah di luar jatah bagasi pada banyak maskapai di rute Jeddah — aturannya per maskapai dan bisa berubah, jadi cek saat booking. Untuk kebutuhan di atas 2–3 karton per orang, cargo massal adalah pilihan yang lebih rasional.",
      },
      {
        q: "Kenapa zamzam harus kemasan resmi?",
        a: "Kemasan resmi menjamin airnya benar-benar dari pengelolaan sumur zamzam yang disurveilans pemerintah Saudi — bukan air biasa yang diisi dalam botol hijau. Sebagian pedagang di sekitar Haram menjual botol mirip dengan isi yang tidak jelas; pembeliannya sia-sia secara ilmu dan tidak kami layani pengirimannya.",
      },
    ],
    keywords: [
      "kirim zamzam indonesia",
      "zamzam cargo",
      "beli zamzam saudi",
      "zamzam 5 liter resmi",
    ],
  },
  {
    slug: "layanan-terminal-simona-madinah",
    name: "Layanan Terminal Haji SIMONA Madinah",
    categorySlug: "handling-logistik",
    shortDesc:
      "Pendampingan di terminal khusus haji SIMONA Madinah — pemisahan arus jamaah haji dari umrah yang membuat keberangkatan haji jauh lebih tertata.",
    longDesc:
      "Terminal Khusus Haji Madinah — dikenal luas sebagai SIMONA — adalah terminal terpisah di Bandara Pangeran Mohammad bin Abdulaziz Madinah yang dibangun khusus melayani jamaah haji — memisahkan arus mereka dari penumpang umrah reguler dengan fasilitas antrean, penginapan singkat, dan proses pemeriksaan yang dirancang untuk gelombang besar.\n\nBagi PIHK dan jamaah haji khusus, memahami mekanisme terminal ini menentukan kenyamanan keberangkatan: jam tiba ke terminal, alur check-in khusus, area istirahat, dan pemisahan bagasi program. Layanan pendampingan kami bekerja di sisi persiapan dan koordinasi — memastikan data program sudah tersalurkan ke handler terminal, jadwal bus dari hotel diatur, dan jamaah tahu persis apa yang terjadi di tiap antrian. Untuk grup besar, petugas pendamping mengikuti rombongan dari hotel sampai pesawat.",
    features: [
      "Koordinasi data program dengan handler terminal",
      "Jadwal bus hotel → terminal yang tepat",
      "Pendamping petugas mengikuti rombongan",
      "Pemahaman alur antrian & area istirahat terminal",
      "Khusus program haji khusus & furoh",
    ],
    process: [
      "Kirim data program haji (jumlah, tanggal, maskapai)",
      "Koordinasi dengan handler terminal SIMONA",
      "Jadwal kedatangan & pendamping dikunci",
      "Eskort dari hotel sampai pesawat",
    ],
    priceNote: "Mulai Rp 400–700 ribu/jamaah (koordinasi + pendamping; biaya terminal terpisah sesuai program)",
    priceFrom: 400000,
    faqs: [
      {
        q: "Apa beda SIMONA dengan terminal biasa Madinah?",
        a: "SIMONA adalah terminal yang dirancang khusus untuk arus haji — prosesnya berbeda dari terminal reguler yang dipakai umrah. Jamaah haji khusus keberangkatannya diatur lewat terminal ini dengan mekanisme penjadwalan program, bukan check-in biasa — itulah kenapa pendampingan yang paham alurnya berpengaruh besar.",
      },
      {
        q: "Untuk umrah biasa apakah lewat SIMONA?",
        a: "Tidak — jamaah umrah menggunakan terminal reguler. Layanan ini relevan hanya untuk program haji (khusus/furoh) yang keberangkatannya terselenggara lewat terminal khusus haji.",
      },
    ],
    keywords: [
      "terminal haji madinah",
      "simona",
      "keberangkatan haji khusus",
      "terminal pihk",
    ],
  },
  {
    slug: "terminal-khusus-haji-jeddah-mpu",
    name: "Layanan Terminal Khusus Haji Jeddah (MPU)",
    categorySlug: "handling-logistik",
    shortDesc:
      "Pendampingan di terminal khusus haji Jeddah — gerbang keberangkatan dan kedatangan arus haji terbesar di dunia, dengan mekanisme yang khas.",
    longDesc:
      "Terminal Khusus Haji Jeddah — di kalangan penyelenggara sering disebut MPU (Mu'assasah/establishment pelayanan haji) — adalah gerbang yang melayani jutaan jamaah haji setiap tahun dengan mekanisme yang berbeda dari terminal reguler: proses kedatangan yang terjadwal per angkatan, penginapan singkat (moktabar), dan pengaturan bus ke Makkah yang mengikuti sistem program.\n\nUntuk jamaah haji reguler Indonesia, alur ini sebagian dikelola PPIH (Pusat Penyelenggara Haji) resmi — layanan kami berada di sisi pelengkap: pendampingan saat kedatangan kelompok khusus, koordinasi untuk jamaah yang terpisah dari angkatan utama (sakit, delay), dan penataan kembali saat pulang. Untuk PIHK yang menyusun program sendiri, pendampingan terminal ini menjadi bagian penting dari rangkaian program yang tertata.",
    features: [
      "Pemahaman alur terminal khusus haji Jeddah",
      "Pendampingan kelompok terpisah dari angkatan utama",
      "Koordinasi bus ke Makkah sesuai program",
      "Penataan kembali saat musim pulang",
      "Khusus program haji khusus, furoh, dan kasus khusus",
    ],
    process: [
      "Kirim konteks program & kebutuhan pendampingan",
      "Koordinasi dengan handler terminal",
      "Petugas disiapkan pada tanggal & slot yang relevan",
      "Laporan alur program ke koordinator",
    ],
    priceNote: "Mulai Rp 400–700 ribu/jamaah (pendampingan; biaya terminal mengikuti program)",
    priceFrom: 400000,
    faqs: [
      {
        q: "Apakah jamaah haji reguler lewat terminal khusus ini?",
        a: "Ya — jamaah haji reguler BPKH datang dan pulang lewat terminal khusus haji Jeddah dengan mekanisme angkatan yang dikelola PPIH dan PPIU. Layanan ini bukan pengganti mekanisme resmi itu, melainkan pendampingan untuk kebutuhan khusus di sekelilingnya.",
      },
      {
        q: "Berapa lama jamaah bertahan di terminal saat kedatangan?",
        a: "Tergantung angkatan dan jam kedatangan — dari beberapa jam sampai semalam di moktabar bila gelombangnya padat. Persiapan mental dan fisik untuk kenyataan ini (perlengkapan tidur singkat, bekal, obat) sebaiknya disiapkan sejak Indonesia; panduannya tersedia untuk jamaah program kami.",
      },
    ],
    keywords: [
      "terminal haji jeddah",
      "mpu jeddah",
      "moktabar",
      "kedatangan haji jeddah",
    ],
  },
  {
    slug: "pendampingan-bagasi-tercicier",
    name: "Pendampingan Bagasi Tercicier & Klaim",
    categorySlug: "handling-logistik",
    shortDesc:
      "Koper tidak muncul di karosel? Pendamping kami mengurus laporan, pelacakan, dan klaim — sebelum panik mengambil alih keputusan Anda.",
    longDesc:
      "Koper yang tidak muncul di karosel adalah kejadian yang mengubah suasana grup dalam hitungan menit — dan sebagian besar masalahnya bisa selesai bila langkah pertamanya benar: laporan PIR di konter maskapai sebelum meninggalkan area bagasi, dengan deskripsi koper yang tepat dan nomor pelacakan yang tercatat. Kegagalan paling mahal adalah meninggalkan bandara tanpa laporan — klaim setelahnya menjadi jauh lebih sulit.\n\nLayanan ini mengambil peran itu: pendamping yang paham prosedur menemani proses laporan (berbahasa Arab/Inggris), melacak status koper harian, mengoordinasi pengiriman koper ke hotel Anda bila ditemukan, dan menyiapkan klaim kompensasi maskapai bila koper tidak kembali. Untuk grup, satu pendamping menangani seluruh koper yang tertinggal supaya jamaah tidak menunggu di area bagasi sementara rombongan sudah bergerak.",
    features: [
      "Pendamping berbahasa lokal di area bagasi",
      "Laporan PIR segera dengan deskripsi yang tepat",
      "Pelacakan harian & koordinasi pengiriman ke hotel",
      "Penyusunan klaim kompensasi maskapai",
      "Belanja darurat kebutuhan ibadah hari pertama (opsional)",
    ],
    process: [
      "Hubungi hotline sebelum meninggalkan area bagasi",
      "Pendamping menemani laporan di konter maskapai",
      "Pelacakan harian dengan update ke Anda",
      "Koper ditemukan → dikirim ke hotel; tidak → klaim disusun",
    ],
    priceNote: "Rp 350 ribu/kasus (kota Saudi); belanja darurat terpisah sesuai kebutuhan",
    priceFrom: 350000,
    faqs: [
      {
        q: "Seberapa sering koper jamaah benar-benar hilang?",
        a: "Mayoritas 'hilang' adalah keterlambatan — koper menumpuk di penerbangan sebelumnya dan tiba di flight berikutnya, biasanya dalam 24–48 jam. Benar-benar tidak kembali itu jarang, tapi prosedurnya harus dijalani dengan benar sejak menit pertama. Itulah mengapa 'jangan panik, lapor dulu' adalah aturan pertama kami.",
      },
      {
        q: "Apa yang saya pakai sebelum koper kembali?",
        a: "Koper tangan yang selalu bersama Anda (ihram, obat, dokumen, baju satu-dua) menutup kebutuhan hari pertama. Bila koper utama telat lebih dari sehari, layanan belanja darurat mengisi kebutuhan inti — biayanya kemudian masuk klaim maskapai untuk perlengkapan yang tertunda.",
      },
    ],
    keywords: [
      "bagasi hilang umrah",
      "koper tercecer jeddah",
      "klaim bagasi maskapai",
      "laporan koper hilang",
    ],
  },
  {
    slug: "perlengkapan-konvoi-koordinasi-grup",
    name: "Perlengkapan Konvoi & Koordinasi Grup",
    categorySlug: "handling-logistik",
    shortDesc:
      "Set perlengkapan konvoi rombongan — bendera, kartu nama, walkie-talkie, label koper, dan tanda grup — yang membuat 40 orang terlihat seperti satu organisasi.",
    longDesc:
      "Perbedaan antara grup yang tertata dan grup yang menjerit saling memanggil di tengah Haram sering terletak pada perlengkapan yang sederhana: bendera yang tinggi dan mudah dikenali, kartu nama dengan nomor bus dan kontak koordinator, label koper yang tidak tertukar, dan walkie-talkie yang menghubungkan ujung rombongan dengan kepalanya. Perlengkapan ini murah — tapi menyusunnya sendiri untuk 40 orang menjelang keberangkatan adalah pekerjaan yang tidak kecil.\n\nPaket konvoi kami menyusun semuanya dalam satu set yang dikirim sebelum keberangkatan: bendera grup dengan nama komunitas, kartu nama berlaminasi per jamaah, label koper bernomor, walkie-talkie (sewa) dengan channel yang diatur, dan tanda titik kumpul yang bisa ditempel di hotel. Untuk komunitas yang berangkat berkali-kali, set ini jadi aset tahunan mereka — kami simpan desainnya untuk pengiriman berikutnya.",
    features: [
      "Bendera grup custom dengan nama komunitas",
      "Kartu nama jamaah berlaminasi (nomor bus, kontak)",
      "Label koper bernomor sesuai daftar",
      "Sewa walkie-talkie dengan channel terorganisir",
      "Tanda titik kumpul untuk hotel & Haram",
    ],
    process: [
      "Kirim daftar jamaah & nama komunitas",
      "Kami susun set konvoi & kirim desain untuk disetujui",
      "Set dikirim 1–2 minggu sebelum keberangkatan",
      "Walkie-talkie sewa dipakai selama perjalanan lalu dikembalikan",
    ],
    priceNote: "Mulai Rp 75 ribu/jamaah untuk set lengkap (bendera, kartu, label); walkie-talkie sewa terpisah",
    priceFrom: 75000,
    faqs: [
      {
        q: "Berapa banyak walkie-talkie yang dibutuhkan?",
        a: "Pola yang umum: satu untuk koordinator, satu untuk mutawif, satu di bus, dan satu-dua di posisi belakang rombongan — total 4–6 unit untuk grup 40 orang. Lebih banyak unit membuat frekuensi menjadi ramai; yang penting adalah disiplin channel dan jam aktifnya.",
      },
      {
        q: "Bendera boleh dibawa ke dalam Haram?",
        a: "Bendera kecil diizinkan, tapi ada etika yang kami sarankan: jangan mengibasnya di depan jamaah lain yang sedang shalat, dan simpan saat tawaf yang padat — di situ menandai titik kumpul di lantai berbeda lebih aman daripada bendera yang menyapu orang.",
      },
    ],
    keywords: [
      "perlengkapan rombongan umrah",
      "bendera grup jamaah",
      "walkie talkie umrah",
      "kartu nama jamaah",
    ],
  },
  {
    slug: "penitipan-bagasi-makkah-madinah",
    name: "Penitipan Bagasi di Makkah/Madinah",
    categorySlug: "handling-logistik",
    shortDesc:
      "Titip koper di kota yang Anda tinggalkan — pindah Makkah ke Madinah tanpa menyeret koper, ambil kembali saat kembali ke kota itu.",
    longDesc:
      "Perjalanan yang menyentuh satu kota dua kali (misalnya Makkah → Madinah → Makkah untuk tawaf wada) menghadapi dilema koper: membawa semuanya ke Madinah berarti menumpuk kamar, meninggalkan di hotel Makkah berarti memakai satu kamar 'papan alamat' yang tetap dibayar. Layanan penitipan bagasi menawarkan jalan ketiga: koper Anda dititipkan di titik penitipan resmi yang aman, dan Anda bergerak ringan dengan koper tangan saja.\n\nPenitipan kami mencakup registrasi digital (foto, nomor, nama), rak berlabel, dan jam ambil yang fleksibel. Untuk jamaah transit dengan cerita perjalanan yang rumit — tiba pagi sebelum check-in, berangkat malam setelah check-out — penitipan mengubah jam-jam kosong itu menjadi waktu ibadah yang bebas koper. Titik penitipan tersedia di kawasan Haram Makkah dan Central Area Madinah.",
    features: [
      "Registrasi digital: foto, nomor, nama pemilik",
      "Rak berlabel dengan pengawasan",
      "Jam ambil fleksibel sesuai jadwal Anda",
      "Lokasi di kawasan Haram Makkah & Central Madinah",
      "Opsi penitipan multi-hari untuk perjalanan dua kota",
    ],
    process: [
      "Datang ke titik penitipan & registrasi koper",
      "Terima nomor tanda terima digital",
      "Bergerak ringan tanpa koper",
      "Ambil kembali dengan nomor tanda terima",
    ],
    priceNote: "Rp 60–120 ribu/koper/hari tergantung lokasi; diskon multi-hari",
    priceFrom: 60000,
    faqs: [
      {
        q: "Seberapa aman menitipkan koper?",
        a: "Titik penitipan kami menjalankan registrasi dengan foto koper dan tanda tangan digital — barang yang tidak sesuai nomor tidak bisa diambil. Tetap berlaku aturan umum: jangan titipkan dokumen, uang, dan barang tak terganti; itu selalu di koper tangan Anda.",
      },
      {
        q: "Bisa titipkan koper penuh zamzam?",
        a: "Bisa, dengan catatan berat — rak penitipan dirancang untuk koper standar. Untuk koper pulang yang berat (zamzam, kurma), lebih baik langsung dikirim cargo atau dibawa ke titik jemput bandara; penitipan dirancang untuk gerak-gerik di tengah perjalanan, bukan penyimpanan pulang.",
      },
    ],
    keywords: [
      "penitipan bagasi makkah",
      "luggage storage saudi",
      "titip koper madinah",
      "locker umrah",
    ],
  },
  {
    slug: "jasa-packing-wrap-koper",
    name: "Jasa Wrap & Packing Koper",
    categorySlug: "handling-logistik",
    shortDesc:
      "Balut koper dengan film plastik di bandara atau hotel — koper pulang dengan tampilan yang masih layak, tanpa gesekan dan tanpa kunci yang tersangkut.",
    longDesc:
      "Koper yang berangkat baru dan pulang lecet adalah keluhan yang nyata: gesekan konveyor, roda yang tersangkut, dan kunci yang patah di keramaian bagasi. Film wrap plastik yang dibalutkan di konter bandara (atau di hotel sebelum keberangkatan) melindungi permukaan koper dari gesekan itu — investasi kecil yang menyelamatkan koper yang mungkin akan dipakai bertahun-tahun lagi.\n\nLayanan kami menyediakan wrap di dua titik: konter di bandara keberangkatan Indonesia (untuk melindungi koper baru yang berangkat) dan di hotel Tanah Suci sebelum pulang (melindungi koper penuh belanjaan). Opsi kedua sering lebih tepat — koper yang paling berisiko lecet adalah yang pulang, karena isinya penuh dan beratnya maksimal. Kami juga menyediakan opsi strap pengikat tambahan untuk koper yang zip-nya sudah lelah.",
    features: [
      "Wrap film profesional di bandara & hotel",
      "Opsi strap pengikat untuk koper zip tua",
      "Wrap koper pulang yang penuh belanjaan",
      "Harga per koper yang transparan",
      "Layanan di titik kumpul grup (massal)",
    ],
    process: [
      "Datang ke konter wrap atau pesan ke titik hotel",
      "Koper dibalut film + strap bila diperlukan",
      "Selesai dalam 3–5 menit per koper",
    ],
    priceNote: "Rp 60–90 ribu/koper tergantung ukuran",
    priceFrom: 60000,
    faqs: [
      {
        q: "Apakah wrap mengganggu pemeriksaan bandara?",
        a: "Petugas keamanan berhak membuka wrap bila perlu pemeriksaan — dan itu terjadi pada sebagian kecil koper. Bila koper Anda dipilih pemeriksaan, wrap bisa dibuka dan dibalut ulang (ada jasa balut ulang di konter). Risiko ini jauh lebih kecil daripada kerusakan fisik yang dicegah wrap.",
      },
      {
        q: "Wrap lebih baik dari hard case?",
        a: "Dua hal yang berbeda tujuan — hard case melindungi dengan struktur, wrap melindungi permukaan dari gesekan dan memberi tanda visual (koper wrap mudah dikenali di karosel). Banyak jamaah menggabungkan keduanya: koper lama yang lecet di-wrap supaya jahannya tidak melebar di perjalanan pulang.",
      },
    ],
    keywords: [
      "wrap koper bandara",
      "balut koper",
      "pelindung koper umrah",
      "packing koper pulang",
    ],
  },
  {
    slug: "handling-grup-korporat-besar",
    name: "Handling Grup Korporat & Komunitas Besar (50+ pax)",
    categorySlug: "handling-logistik",
    shortDesc:
      "Handling terintegrasi untuk rombongan besar — 50 sampai 500 jamaah dengan struktur tim, penugasan bus, dan penanggung jawab per subgrup.",
    longDesc:
      "Grup di atas 50 orang beroperasi dengan hukum yang berbeda: tidak bisa diatur seperti keluarga besar, harus diorganisasi seperti perusahaan. Layanan handling korporat menyusun struktur itu — penanggung jawab per subgrup (per bus), penomoran jamaah yang mengikuti penugasan bus, titik kumpul bertingkat (subgrup dulu, lalu grup utama), dan rapat koordinasi dengan handler, bus, dan hotel sebagai satu sistem.\n\nUntuk perusahaan yang mengirim karyawan berumrah bersama atau komunitas lintas cabang, struktur ini membuat keberangkatan 200 orang terasa seperti keberangkatan 20. Kami menyediakan dashboard pengelolaan yang memetakan jamaah per bus per hotel, laporan harian selama perjalanan, dan struktur eskalasi bila ada masalah — karena di grup besar, masalah kecil yang tidak tertangani cepat tumbuh menjadi drama.",
    features: [
      "Struktur penanggung jawab per subgrup/bus",
      "Dashboard jamaah per bus per hotel",
      "Titik kumpul bertingkat & protokol hitung",
      "Rapat koordinasi handler-bus-hotel terintegrasi",
      "Laporan harian selama perjalanan",
    ],
    process: [
      "Rapat perencanaan dengan penyelenggara",
      "Susun struktur subgrup & penugasan bus",
      "Eksekusi handling dengan tim bertingkat",
      "Laporan harian & evaluasi pasca-perjalanan",
    ],
    priceNote: "Mulai Rp 300–500 ribu/jamaah tergantung kompleksitas program",
    priceFrom: 300000,
    faqs: [
      {
        q: "Grup 100 orang butuh berapa petugas handling?",
        a: "Pola umumnya: satu kepala rombongan handling, satu petugas per bus (2 bus), satu pengelola koper, dan satu koordinator lini belakang — total 5–6 orang untuk grup 100. Struktur ini bukan pemborosan; grup besar tanpa struktur adalah grup yang mengandalkan keberuntungan.",
      },
      {
        q: "Bisa digabung dengan program ibadah dari PPIU?",
        a: "Bisa — banyak program korporat menggandakan PPIU untuk ibadah sementara handling kami menangani logistik keberangkatan dan perpindahan. Pembagian peran yang jelas sejak kontrak membuat tidak ada yang saling menganggap 'sudah diurus pihak lain'.",
      },
    ],
    keywords: [
      "handling grup besar",
      "umrah kantor",
      "umrah korporat",
      "rombongan besar jamaah",
    ],
  },
  {
    slug: "pengiriman-titipan-kado-jamaah",
    name: "Pengiriman Titipan & Kado ke Jamaah di Tanah Suci",
    categorySlug: "handling-logistik",
    shortDesc:
      "Kirim hadiah dan titipan dari keluarga Indonesia ke jamaah yang sedang beribadah — kartu ucapan, perlengkapan yang tertinggal, atau kejutan di tengah perjalanan.",
    longDesc:
      "Ada kebutuhan yang muncul di tengah perjalanan: obat yang tertinggal di rumah, mukena yang ketinggalan di hotel transit, atau sekadar kado kejutan dari anak untuk ayahnya yang sedang tawaf pertama kali. Mengirim barang dari Indonesia ke jamaah yang sedang berada di Tanah Suci membutuhkan kanal yang tahu persis hotelnya, jamnya, dan siapa yang harus menerimanya.\n\nLayanan ini bekerja dengan koordinasi ganda: penerimaan barang dari keluarga di Indonesia (titik jemput), pengiriman lewat jalur cepat ke handler lokal, dan penyerahan ke jamaah di hotelnya dengan konfirmasi foto. Untuk barang kecil mendesak (obat, dokumen) tersedia jalur prioritas 2–4 hari; untuk kado yang tidak mendesak, jalur reguler lebih hemat. Setiap pengiriman dikoordinasi dengan koordinator grup supaya barang sampai ke tangan yang benar — bukan ke resepsi yang 'kira-kira tahu'.",
    features: [
      "Jemput titipan dari alamat keluarga di Indonesia",
      "Jalur prioritas 2–4 hari untuk barang mendesak",
      "Penyerahan langsung di hotel jamaah (dengan foto)",
      "Koordinasi dengan koordinator grup",
      "Tracking lengkap dua arah",
    ],
    process: [
      "Keluarga kirim titipan ke titik kumpul (jemput tersedia)",
      "Barang diverifikasi & diberangkatkan sesuai jalur",
      "Handler lokal menerima & mengantar ke hotel jamaah",
      "Foto penyerahan dikirim ke keluarga pengirim",
    ],
    priceNote: "Mulai Rp 500 ribu/barang kecil (jalur prioritas); reguler lebih hemat",
    priceFrom: 500000,
    faqs: [
      {
        q: "Bisakah mengirim obat resep ke jamaah?",
        a: "Bisa dengan catatan: obat resep butuh dokumen pendukung sederhana (salinan resep) dan waktu kliring yang sedikit lebih panjang. Untuk obat mendesak, jalur prioritas tersedia — tapi bila kondisinya darurat medis, jalur medis lokal di Saudi jauh lebih cepat daripada mengirim dari Indonesia.",
      },
      {
        q: "Kado bisa sampai di hari tertentu (misalnya malam akhir)?",
        a: "Bisa diatur — karena pengiriman ke hotel dikoordinasi, tanggal penyerahan bisa ditargetkan. Kejutan di momen-momen tertentu (malam terakhir, ulang tahun di Tanah Suci) adalah permintaan yang sering datang dan kami sambut dengan senang hati.",
      },
    ],
    keywords: [
      "kirim barang ke saudi",
      "titipan jamaah umrah",
      "kado jamaah",
      "kirim obat ke saudi",
    ],
  },

  // ================= KATEGORI 7: MAKANAN & KONSUMSI =================
  {
    slug: "catering-indonesia-grup-umrah",
    name: "Catering Masakan Indonesia untuk Grup Umrah",
    categorySlug: "makanan-konsumsi",
    shortDesc:
      "Dapur masakan Indonesia di Tanah Suci — nasi, lauk rumahan, sambal — untuk grup dengan menu harian yang bisa disesuaikan dan jadwal yang mengikuti ibadah.",
    longDesc:
      "Makanan Indonesia di Tanah Suci bukan kemewahan — ia penentu stamina. Jamaah yang makan nasi dan lauk yang dikenal tubuhnya setiap hari beribadah dengan tenaga yang stabil; jamaah yang hidup dari roti dan ayam goreng selama sembilan hari sering berakhir dengan maag dan tubuh yang drop. Dapur catering kami memasak masakan Indonesia yang sebenarnya: nasi hangat, sayur lodeh, ayam bumbu, tempe, sambal terasi level yang bisa diminta — disiapkan di dapur bersertifikat keamanan pangan Saudi dan diantar sesuai jadwal ibadah grup.\n\nMenu harian disusun berkala: Subuh ringan (sarapan sebelum ibadah pagi), Zuhur yang mengenyangkan, dan Malam yang menghangatkan. Untuk grup besar (20+ pax), menu bisa dikonsultasikan dengan koordinator — termasuk penyesuaian untuk jamaah dengan batasan diet. Jadwal antar mengikuti ritme ibadah: bukan jam dapur, tapi jam shalat dan jam kembali dari Haram.",
    features: [
      "Masakan Indonesia sebenarnya — bukan 'gaya Indonesia'",
      "Dapur bersertifikat keamanan pangan Saudi",
      "Menu harian bisa dikonsultasikan per grup",
      "Antar sesuai ritme ibadah, bukan jam dapur",
      "Sambal & level pedas yang bisa diminta",
      "Opsi paket lauk beku untuk grup di apartemen",
    ],
    process: [
      "Sampaikan jumlah pax & jadwal ibadah grup",
      "Terima contoh menu mingguan untuk disetujui",
      "Konfirmasi & mulai antar sejak hari pertama di hotel",
      "Evaluasi menu bersama koordinator tiap 3 hari",
    ],
    priceNote: "Rp 75–150 ribu/makan/jamaah tergantung menu & frekuensi harian",
    priceFrom: 75000,
    faqs: [
      {
        q: "Berapa minimal grup untuk katering harian?",
        a: "Layak mulai 15–20 jamaah untuk pengantaran harian hotel. Di bawah itu, paket lauk beku (semur, rendang) yang dipanaskan sendiri di kamar adalah opsi yang lebih rasional — dan sering lebih murah.",
      },
      {
        q: "Bisa menu khusus untuk jamaah diabetes atau hipertensi?",
        a: "Bisa — catering diet khusus tersedia sebagai layanan tersendiri dalam kategori ini. Sebutkan kebutuhannya saat pemesanan supaya porsi dan komposisinya disiapkan terpisah; menu umum grup tidak perlu diubah untuk itu.",
      },
      {
        q: "Antar ke kamar atau ke ruang makan?",
        a: "Keduanya — pola yang umum: lauk diantar ke ruang makan hotel untuk makan grup, dengan opsi antar kamar untuk jamaah yang sedang sakit atau lansia yang tidak turun. Koordinasikan preferensinya saat pemesanan.",
      },
    ],
    keywords: [
      "catering indonesia makkah",
      "masakan indonesia tanah suci",
      "katering umrah",
      "makanan indonesia jamaah",
    ],
  },
  {
    slug: "voucher-buffet-hotel-makkah",
    name: "Voucher Buffet Hotel Makkah & Madinah",
    categorySlug: "makanan-konsumsi",
    shortDesc:
      "Voucher buffet restoran hotel untuk jamaah — makan hangat tanpa ribet, dengan harga voucher yang lebih hemat dari harga pintu.",
    longDesc:
      "Buffet hotel adalah pilihan makan paling praktis untuk jamaah yang menginap dekat Haram: turun lift, makan hangat sebanyak yang dibutuhkan, naik lift lagi. Yang tidak praktis adalah membelinya di tempat — harga pintu buffet hotel Makkah bisa jauh lebih mahal daripada voucher yang dibeli sebelumnya, apalagi saat musim puncak ketika okupansi penuh.\n\nVoucher kami berlaku untuk jaringan restoran buffet hotel-hotel kawasan Haram dan Central Area, dengan pilihan sarapan, makan siang, atau malam. Untuk grup, voucher dibeli dalam blok dengan jadwal makan yang dikoordinasi — karena buffet hotel di jam prime (pasca Isya) antreannya nyata. Untuk jamaah yang tinggal di hotel dengan buffet sendiri, voucher ini lebih relevan untuk hari-hari sela atau keluarga yang ingin variasi.",
    features: [
      "Harga voucher lebih hemat dari harga pintu",
      "Jaringan restoran hotel kawasan Haram & Central Area",
      "Pilihan sarapan / siang / malam",
      "Blok voucher grup dengan jadwal terkoordinasi",
      "Berlaku untuk periode perjalanan Anda",
    ],
    process: [
      "Pilih hotel/restoran & jam makan",
      "Terbitkan voucher dengan kode unik per jamaah",
      "Datang sesuai jadwal, scan voucher — tanpa bayar di tempat",
    ],
    priceNote: "Rp 90–250 ribu/voucher tergantung hotel & jam makan",
    priceFrom: 90000,
    faqs: [
      {
        q: "Apakah buffet hotel halal?",
        a: "Semua restoran hotel di Makkah dan Madinah menyajikan makanan halal — kota ini seluruhnya di bawah aturan halal pemerintah Saudi. Yang berbeda antar restoran adalah gaya masaknya ( banyak menu Timur Tengah, India, dan Asia) — bukan status halalnya.",
      },
      {
        q: "Buffet jam berapa paling tenang?",
        a: "Buffet malam paling ramai pasca Isya (grup pulang dari Haram); paling tenang setelah 21.30. Untuk sarapan, sebelum 6.00 lebih ringan daripada jam 7.00 yang digilas grup Subuh. Voucher kami bisa dipakai di jendela jam yang fleksibel — pilih jendela yang cocok dengan ibadah Anda.",
      },
    ],
    keywords: [
      "buffet hotel makkah",
      "voucher makan hotel saudi",
      "restoran hotel haram",
      "makan buffet jamaah",
    ],
  },
  {
    slug: "paket-lauk-kupon-jamaah",
    name: "Paket Lauk Jamaah (Kupon Makan Harian)",
    categorySlug: "makanan-konsumsi",
    shortDesc:
      "Sistem kupon makan untuk grup — jamaah menukar kupon dengan lauk di titik distribusi, cocok untuk rombongan besar dengan anggaran makan yang tertata.",
    longDesc:
      "Untuk rombongan besar, mengatur makan per orang satu per satu adalah pekerjaan penuh drama: yang tidak kebagian, yang menolak menunya, yang menukar milik temannya. Sistem kupon memotong drama itu: grup membeli kupon makan (sarapan, siang, malam atau kombinasinya), jamaah menukarkan kupon di titik distribusi — di hotel, di bus, atau di titik ziarah — dan koordinator tinggal mengecek sisa kupon, bukan mengecek orang.\n\nMenu kupon disusun standar yang layak: nasi, lauk protein, sayur, dan buah/tambalan — dengan variasi yang berganti hari supaya sembilan hari tidak terasa seperti satu menu yang diulang sembilan kali. Kupon ini juga yang membuat grup bisa menyediakan makan bagi jamaah yang datang terlambat dari Haram — lauk tetap tersedia dalam jendela waktu yang lebih panjang daripada jam makan kaku.",
    features: [
      "Kupon per makan dengan variasi menu harian",
      "Titik distribusi fleksibel: hotel, bus, titik ziarah",
      "Jendela waktu yang lebih panjang dari jam makan kaku",
      "Laporan sisa kupon untuk koordinator",
      "Harga per kupon yang tertata untuk anggaran grup",
    ],
    process: [
      "Tentukan jumlah kupon & frekuensi makan per orang",
      "Terbitkan kupon dengan kode grup",
      "Distribusi kupon saat briefing grup",
      "Laporan sisa kupon dikirim tiap 3 hari",
    ],
    priceNote: "Rp 70–120 ribu/kupon tergantung menu & volume grup",
    priceFrom: 70000,
    faqs: [
      {
        q: "Kalau jamaah tidak makan sesuai kuponnya, apa yang terjadi?",
        a: "Kupon yang tidak ditukar tetap valid di jendela waktunya — bisa ditukar esoknya (bila menu tersedia) atau dikembalikan ke grup untuk dihitung di akhir. Kebijakan refund kupon tidak terpakai disepakati saat kontrak grup, bukan ditawar satu per satu di titik distribusi.",
      },
      {
        q: "Apa bedanya dengan buffet hotel?",
        a: "Kupon memberi menu yang tertata dan biaya yang pasti — cocok untuk grup besar dengan anggaran rapat. Buffet memberi kebebasan memilih tapi biaya per orang lebih tinggi. Grup yang cermat sering memakai campuran: kupon untuk makan utama, buffet untuk malam senggang.",
      },
    ],
    keywords: [
      "kupon makan umrah",
      "paket lauk jamaah",
      "makan rombongan saudi",
      "katering grup kupon",
    ],
  },
  {
    slug: "air-zamzam-kemasan-5-liter",
    name: "Air ZamZam Kemasan Resmi 5 Liter",
    categorySlug: "makanan-konsumsi",
    shortDesc:
      "Zamzam kemasan resmi pemerintah Saudi 5 liter — beli dari kanal yang benar, bawa atau kirim pulang dengan aturannya.",
    longDesc:
      "Air zamzam tersedia gratis dari keran-keran di Masjidil Haram — dan itulah yang Anda minum selama ibadah. Yang dibeli untuk dibawa pulang adalah kemasan 5 liter resmi yang dijual pemerintah Saudi dengan harga tetap (± SAR 15–20) di supermarket dan titik penjualan resmi — bukan botol-botol hijau yang ditawarkan di sekitar Haram dengan asal-usul yang tidak jelas.\n\nLayanan ini membantu tiga hal: mengarahkan pembelian ke kanal resmi, menghitung berapa yang realistis dibawa di pesawat (aturan bagasi zamzam berbeda antar maskapai dan bisa berubah), dan menyiapkan pengiriman lewat cargo untuk kebutuhan yang melebihi kapasitas bagasi. Untuk keluarga yang pulang dengan dua orang, dua karton 5 liter biasanya cukup; untuk komunitas yang membagikan, jalur cargo massal adalah jalurnya.",
    features: [
      "Pembelian hanya dari kanal resmi berharga tetap",
      "Perhitungan kapasitas bawa pesawat per maskapai",
      "Kombinasi dengan pengiriman cargo bila lebih banyak",
      "Penanganan kemasan yang tidak bocor di perjalanan",
      "Panduan adab membagikan zamzam di rumah",
    ],
    process: [
      "Tentukan jumlah karton yang dibutuhkan",
      "Kami petakan: dibawa sendiri atau dikirim cargo",
      "Pembelian dari kanal resmi",
      "Penyeraan di titik yang disepakati",
    ],
    priceNote: "Harga resmi ± SAR 15–20/karton 5 liter; jasa pengurusan mulai Rp 100 ribu/karton",
    priceFrom: 100000,
    faqs: [
      {
        q: "Kenapa zamzam dijual tetap oleh pemerintah?",
        a: "Karena zamzam adalah amanah publik — pemerintah Saudi mengelola sumurnya, mengatur pengeluarannya, dan menjual kemasannya dengan harga tetap untuk mencegah komersialisasi yang merusak. Beli dari kanal resmi berarti ikut menjaga keberkahan aturan itu, dan air yang Anda bawa pasti asli.",
      },
      {
        q: "Bisakah zamzam dibawa di kabin pesawat?",
        a: "Tidak — aturan cairan kabin melarang botol 5 liter di kabin. Zamzam kemasan resmi ditempatkan di bagasi (dan beberapa maskapai memberi perlakuan khusus pada rute Jeddah). Yang bisa di kabin hanya botol kecil kosong yang diisi zamzam di Haram untuk konsumsi perjalanan.",
      },
    ],
    keywords: [
      "air zamzam 5 liter",
      "beli zamzam resmi",
      "zamzam bawa pulang",
      "aturan zamzam pesawat",
    ],
  },
  {
    slug: "kurma-ajwa-grade-a",
    name: "Kurma Ajwa Grade A (Kiloan & Bingkisan)",
    categorySlug: "makanan-konsumsi",
    shortDesc:
      "Kurma Ajwa asli Madinah grade A — dari kiloan untuk keluarga sampai bingkisan premium, dengan kejujuran grade dan asal kebunnya.",
    longDesc:
      "Kurma Ajwa adalah kurma Madinah paling dicari — dan paling banyak dipalsukan. Pasar Madinah penuh penjual yang menyebut semua kurma hitam sebagai 'Ajwa', sementara Ajwa asli tumbuh di kebun tertentu di Madinah dengan karakter yang bisa dibedakan: ukurannya lebih kecil dan rapi, teksturnya lembut kering, dan rasanya yang tidak bisa ditiru kurma biasa yang diberi hitam.\n\nLayanan ini menyuplai Ajwa dengan kejujuran grade: grade A (kebun asli, ukuran rapi, tekstur terbaik) sampai grade mengikuti yang harganya jauh lebih ramah. Untuk pembelian kiloan, kurma datang dari pengemas harian — bukan stok tua; untuk bingkisan, kemasan kaleng/kardus resmi yang layak dibawa pulang dan dibagikan. Semua pembelian disertai panduan menyimpannya di iklim Indonesia — kurma yang disalahsimpan akan mengering atau berfermentasi sebelum sempat dibagikan.",
    features: [
      "Grade jujur: A asli kebun Madinah s.d. ekonomis",
      "Pengemas harian — bukan stok lama",
      "Kiloan & bingkisan kaleng/kardus resmi",
      "Panduan penyimpanan di iklim Indonesia",
      "Pengiriman langsung ke Indonesia atau dibawa sendiri",
    ],
    process: [
      "Pilih grade & format (kiloan/bingkisan)",
      "Konfirmasi harga pasar harian",
      "Pengemasan & penyeraan (di Saudi atau kirim ke Indonesia)",
      "Panduan penyimpanan & bagi-bagi disertakan",
    ],
    priceNote: "Ajwa grade A mulai SAR 45–60/kg (± Rp 220–290 ribu); grade ekonomis jauh lebih ramah",
    priceFrom: 220000,
    faqs: [
      {
        q: "Bagaimana membedakan Ajwa asli dan palsu?",
        a: "Karakter fisiknya: Ajwa asli berukuran kecil-kecil rapi, hitam kecokelatan lembut (bukan hitam mengkilap), kulitnya halus, dan rasanya lembut dengan manis yang tidak menusuk. Kurma hitam besar mengkilap dengan tekstur keras hampir pasti bukan Ajwa. Membeli dari penyuplai yang jujur soal grade adalah perlindungan paling praktis.",
      },
      {
        q: "Berapa lama kurma bertahan di Indonesia?",
        a: "Ajwa kering bisa bertahan berbulan-bulan di wadah tertutup pada suhu ruangan yang tidak lembap — jauh lebih awet daripada kurma lembap seperti Sukkari. Hindari kulkas biasa (kondensasi membuatnya lembap); wadah kaca/kaleng di lemari adalah simpanan terbaik.",
      },
    ],
    keywords: [
      "kurma ajwa asli",
      "ajwa madinah grade a",
      "jual kurma ajwa",
      "bingkisan kurma umrah",
    ],
  },
  {
    slug: "kurma-safawi-sukkari-bingkisan",
    name: "Kurma Safawi, Sukkari & Bingkisan Variatif",
    categorySlug: "makanan-konsumsi",
    shortDesc:
      "Varietas kurma Saudi yang lebih ramah di kantong — Safawi yang lembap manis, Sukkari yang gemuk karamel — dalam paket bingkisan siap bagikan.",
    longDesc:
      "Tidak semua bingkisan harus Ajwa — dan justru variasi adalah hadiah yang lebih hidup. Safawi: hitam mengkilap, lembap, manis lembut, favorit untuk dimakan langsung. Sukkari: kuning keemasan, gemuk, rasa karamel yang membuatnya dijuluki 'ratu kurma' di Saudi. Khudri dan Saffri menutup jajaran varietas yang lebih ramah di kantong untuk dibagikan dalam jumlah besar.\n\nPaket bingkisan kami menyusun komposisinya: box campuran varietas untuk hadiah ke sosok penting, kemasan kiloan untuk dibagi ke tetangga, dan paket komunitas untuk dibagikan di majelis. Semua kurma berasal dari pengepul resmi dengan penanganan yang benar — dan karena varietas lembap (Sukkari) memang tidak awet seumur Ajwa, kami menandai mana yang harus segera dikonsumsi dan mana yang bisa menunggu di lemari Anda.",
    features: [
      "Varietas: Safawi, Sukkari, Khudri, Saffri",
      "Paket bingkisan, kiloan, dan komunitas",
      "Penanda awet pendek vs panjang per varietas",
      "Pengemasan yang layak dibawa pesawat",
      "Harga jauh lebih ramah dari Ajwa",
    ],
    process: [
      "Pilih paket varietas & jumlah",
      "Konfirmasi harga harian",
      "Pengemasan & penyeraan / pengiriman",
      "Panduan urutan konsumsi disertakan",
    ],
    priceNote: "Mulai SAR 20–35/kg (± Rp 100–170 ribu) tergantung varietas & grade",
    priceFrom: 100000,
    faqs: [
      {
        q: "Sukkari atau Safawi untuk dibagikan?",
        a: "Sukkari adalah favorit universal — hampir tidak ada yang menolak rasanya. Tapi teksturnya lembap sehingga tidak tahan lama di iklim lembap Indonesia; bagikan segera. Safawi lebih awet dengan manis yang lebih kalem — pilihan aman untuk dibagikan bertahap.",
      },
      {
        q: "Kurma ini berasal dari mana?",
        a: "Varietas-varietas ini berasal dari kebun di Madinah, Qassim, dan kawasan lain di Saudi — kami bekerja dengan pengepul resmi yang menyertakan asal kebunnya. Untuk pembelian bingkisan kecil, yang penting adalah kejujuran varietas dan penanganannya; untuk pembelian besar, sertifikat asal bisa diminta.",
      },
    ],
    keywords: [
      "kurma safawi",
      "kurma sukkari",
      "bingkisan kurma murah",
      "kurma madinah variatif",
    ],
  },
  {
    slug: "snack-box-bus-perjalanan",
    name: "Snack Box Bus Perjalanan",
    categorySlug: "makanan-konsumsi",
    shortDesc:
      "Kotak snack untuk perjalanan bus antar kota — roti, buah kering, air, dan kurma — yang menyelamatkan energi saat perjalanan 4–5 jam tanpa berhenti memakan waktu.",
    longDesc:
      "Perjalanan bus Makkah–Madinah memakan 4–5 jam — dan jamaah yang berangkat tanpa bekal akan menghabiskan sebagian perjalanan untuk mencari toko di berhenti-berhenti yang tidak selalu nyaman. Snack box menyusun bekal itu sejak awal: roti isi yang tidak cepat basi, buah kering, kurma, air mineral, dan sedikit manis untuk jamaah yang darah gulasnya turun di perjalanan.\n\nFormatnya ringan untuk dibawa naik-turun bus dan tidak membuat kotor — pertimbangan yang terasa saat 40 orang makan di kursi berjajar. Untuk grup, snack box didistribusikan saat naik bus dengan jumlah yang sama per orang, menghindari drama 'yang dekat koridor kebagian duluan'. Untuk perjalanan subuh (berangkat sebelum sarapan), box bisa diperbesar menjadi sarapan penuh yang dimakan di bus.",
    features: [
      "Isi tahan perjalanan: roti, buah kering, kurma, air",
      "Ukuran ringan & tidak berantakan di bus",
      "Opsi box sarapan penuh untuk perjalanan subuh",
      "Distribusi merata per orang",
      "Harga per box untuk grup besar",
    ],
    process: [
      "Sampaikan jadwal bus & jumlah jamaah",
      "Pilih tipe box (ringan / sarapan penuh)",
      "Box dikirim ke titik naik bus",
      "Distribusi saat boarding",
    ],
    priceNote: "Rp 35–75 ribu/box tergantung isi & volume",
    priceFrom: 35000,
    faqs: [
      {
        q: "Isi snack box bertahan berapa lama di bus ber-AC?",
        a: "Isi dirancang untuk 8–12 jam di suhu bus — roti yang tidak mudah basi, buah kering, dan air. Yang tidak kami masukkan: isi berkuah dan yang butuh dingin. Untuk perjalanan yang lebih panjang, bekal bertahap dikonsumsi akan lebih baik daripada satu box besar.",
      },
      {
        q: "Bisa isi khusus untuk anak-anak?",
        a: "Bisa — box anak dengan porsi kecil, isi yang mereka kenal, dan kemasan yang mudah dibuka sendiri. Sebutkan jumlah anak saat pemesanan supaya box-nya dipisahkan dari box dewasa saat distribusi.",
      },
    ],
    keywords: [
      "snack box bus umrah",
      "bekal perjalanan jamaah",
      "snack rombongan saudi",
      "box makan bus makkah madinah",
    ],
  },
  {
    slug: "catering-diet-khusus-diabetes",
    name: "Catering Diet Khusus (Diabetes, Hipertensi, Alergi)",
    categorySlug: "makanan-konsumsi",
    shortDesc:
      "Menu khusus untuk jamaah dengan batasan medis — porsi terukur, garam rendah, tanpa pemicu alergi — tanpa membuat jamaah merasa sedang 'dipinggirkan'.",
    longDesc:
      "Jamaah dengan diabetes, hipertensi, atau alergi menghadapi dilema di Tanah Suci: makan menu umum yang bisa menaikkan gula dan tekanan, atau makan sendiri dengan menu yang membuatnya merasa sedang dipunish. Catering diet khusus menyelesaikan dilema itu dengan menu yang benar-benar layak disantap — porsi terukur, karbohidrat yang dikendalikan, garam rendah yang tetap berbumbu, dan pemicu alergi yang dikeluarkan dengan hati-hati.\n\nMenu disusun bersama data medis yang Anda berikan (bukan sekadar label penyakitnya): obat yang diminum, jam makan yang disarankan dokter, dan gejala yang perlu diwaspadai. Antaran mengikuti jam obat dan jam ibadah — karena jamaah diabetes yang menghabiskan waktu panjang di Haram butuh makan tepat waktu, bukan makan saat bus sampai. Untuk rombongan, layanan ini biasanya hanya untuk beberapa jamaah dari grup sementara grup lain memakai katering reguler — dua jalur dalam satu grup yang berjalan bersama.",
    features: [
      "Menu disusun dari data medis, bukan label penyakit",
      "Porsi & karbohidrat terukur untuk gula stabil",
      "Garam rendah yang tetap berbumbu",
      "Antar mengikuti jam obat & ibadah",
      "Bisa berjalan paralel dengan katering grup",
    ],
    process: [
      "Sampaikan kondisi medis & jam makan yang disarankan",
      "Menu mingguan disusun & ditinjau",
      "Antar harian sesuai jadwal yang disepakati",
      "Penyesuaian menu diberlakukan bila kondisi berubah",
    ],
    priceNote: "Rp 100–180 ribu/makan tergantung kompleksitas menu",
    priceFrom: 100000,
    faqs: [
      {
        q: "Apakah saya butuh katering khusus bila diabetes saya ringan?",
        a: "Tidak selalu — banyak jamaah diabetes ringan cukup dengan manajemen porsi di menu umum (makan nasi sebatas kebutuhan, kurangi yang manis). Katering khusus bernilai bila gula Anda memang mudah goyah, ada komplikasi, atau dokter Anda menyarankan pola makan yang terukur. Konsultasikan kebutuhannya sebelum memilih.",
      },
      {
        q: "Bagaimana bila saya lewat jam makan karena di Haram?",
        a: "Untuk jamaah dengan kebutuhan makan tepat waktu, kami menyiapkan bekal saku ringan (kurma terukur, roti gandum) yang dibawa ke Haram — plus antar makan yang bisa dijadwalkan ke titik yang Anda capai. Jangan menunda makan sampai gejala datang; itu jauh lebih mengganggu ibadah daripada makan 10 menit di sela.",
      },
    ],
    keywords: [
      "catering diabetes umrah",
      "menu diet jamaah",
      "makanan hipertensi tanah suci",
      "diet khusus umrah",
    ],
  },
  {
    slug: "makanan-beku-siap-panas",
    name: "Makanan Beku Siap Panas (Semur, Rendang, Kari)",
    categorySlug: "makanan-konsumsi",
    shortDesc:
      "Lauk beku masakan Indonesia untuk grup di apartemen — dikirim beku dari Indonesia atau beli di Saudi, dipanaskan sendiri saat dibutuhkan.",
    longDesc:
      "Untuk grup yang menginap di apartemen — dengan dapur yang berfungsi dan jadwal ibadah yang bebas — makanan beku adalah solusi yang sangat rasional: semur daging, rendang, kari ayam, dan sambal terasi yang dikirim beku dari dapur Indonesia (atau dibeli dari distribusi di Saudi), disimpan di freezer apartemen, dan dipanaskan sesuai kebutuhan. Biayanya jauh lebih rendah dari katering harian, dan fleksibilitasnya penuh: makan saat pulang dari Haram larut, makan dua kali, atau menyimpan untuk jamaah yang tiba menyusul.\n\nYang perlu direncanakan: rantai beku — dari dapur Indonesia sampai freezer apartemen Anda, barang harus tetap beku; pengiriman lewat jalur cargo beku yang menjaga suhu. Untuk grup yang membeli di Saudi, kami menyediakan daftar distribusi yang tersedia di Jeddah/Madinah dan meninjau ketersediaannya saat kedatangan Anda. Kombinasi terbaik untuk apartemen: beku untuk lauk utama, belanja segar untuk sayur dan buah.",
    features: [
      "Menu beku Indonesia: semur, rendang, kari, sambal",
      "Kirim beku dari Indonesia atau beli distribusi Saudi",
      "Untuk grup di apartemen berdapur",
      "Biaya per porsi jauh lebih rendah dari katering",
      "Panduan rantai beku & pemanasan yang benar",
    ],
    process: [
      "Pilih menu & hitung kebutuhan porsi",
      "Pilih jalur: kirim beku dari Indonesia atau beli di Saudi",
      "Pengiriman/pembelian dieksekusi",
      "Panduan simpan & panas dikirim bersama",
    ],
    priceNote: "Rp 25–45 ribu/porsi (belum termasuk pengiriman beku)",
    priceFrom: 25000,
    faqs: [
      {
        q: "Kelas apartemen seberapa penting dapurnya?",
        a: "Sangat — freezer yang berfungsi adalah prasyarat utama. Sebelum memilih jalur beku, pastikan apartemen Anda punya freezer yang cukup (bukan hanya chiller), dan tanyakan ke tempat sewanya. Bila freezer terbatas, kombinasi beku terbatas + belanja harian adalah solusi yang lebih realistis.",
      },
      {
        q: "Apakah beku dari Indonesia legal dikirim ke Saudi?",
        a: "Pengiriman makanan beku antarnegara menuntut jalur khusus dengan izin yang benar — dan tidak semua menu boleh masuk. Kami bekerja dengan ekspedisi beku yang paham regulasinya dan hanya menawarkan menu yang jalurnya sah. Jangan mengirim beku lewat koper jamaah — itu melanggar aturan bagasi dan berisiko disita.",
      },
    ],
    keywords: [
      "makanan beku umrah",
      "lauk beku saudi",
      "masakan indonesia beku",
      "makan apartemen makkah",
    ],
  },
  {
    slug: "paket-sahur-iftar-ramadhan",
    name: "Paket Sahur & Iftar Umrah Ramadhan",
    categorySlug: "makanan-konsumsi",
    shortDesc:
      "Paket sahur dan iftar untuk umrah Ramadhan — makanan tepat waktu di jam-jam yang paling padat sepanjang tahun, dengan logistik yang sudah dipikirkan.",
    longDesc:
      "Umrah Ramadhan membalik semua jadwal makan: sahur jam 2–4 pagi, iftar saat magrib dengan kurma dan air — dan di antara keduanya, jamaah berada di Haram yang digilas jutaan orang. Paket sahur-iftar menyusun logistiknya: sahur diantar ke kamar atau disajikan di ruang makan dengan jam yang tidak membuat jamaah ketinggalan waktu; iftar siap di titik yang bisa dicapai sebelum magrib — karena berbuka di jalanan Makkah Ramadhan adalah pengalaman yang tidak perlu dialami bila bisa dihindari.\n\nUntuk grup, koordinasi iftar adalah pekerjaan yang paling sensitif: jamaah yang ingin berbuka di Haram (pengalaman yang tak tergantikan) vs yang butuh makan sebelum berjalan. Paket kami menyediakan dua jalur: paket iftar ringan saku (kurma, air, buah) yang dibawa ke Haram, dan iftar penuh di hotel untuk yang pulang sebelum magrib. Sahur disusun dengan jam yang mengikuti imsaak hari itu — yang bergeser beberapa menit setiap hari sepanjang Ramadhan.",
    features: [
      "Sahur tepat waktu mengikuti imsaak harian",
      "Dua jalur iftar: saku di Haram atau penuh di hotel",
      "Menu yang mempertahankan energi ibadah malam",
      "Logistik air & kurma yang tak pernah habis",
      "Koordinasi jam dengan jadwal tawaf grup",
    ],
    process: [
      "Sampaikan tanggal Ramadhan & pola ibadah grup",
      "Menu & jadwal disusun mengikuti imsaak",
      "Antar harian dengan titik yang disepakati",
      "Penyesuaian jam tiap minggu mengikuti pergeseran",
    ],
    priceNote: "Rp 100–180 ribu/orang/hari (sahur + iftar) tergantung menu",
    priceFrom: 100000,
    faqs: [
      {
        q: "Berapa awal sebaiknya pesan paket Ramadhan?",
        a: "Jauh — supply dapur dan hotel di Ramadhan terkunci berbulan-bulan sebelumnya, dan yang memesan mendekati bulan puasa tinggal pilihan yang tersisa. Idealnya pesan bersama paket perjalanan, sekitar 3–6 bulan sebelumnya.",
      },
      {
        q: "Berbuka di Haram atau di hotel?",
        a: "Keduanya bermakna berbeda — berbuka di Haram dengan ribuan orang adalah pengalaman yang sering jadi kenangan terbaik, tapi menuntut strategi: datang ke Haram lebih awal, bawa iftar saku, dan jangan berharap makan penuh sebelum tawaf. Paket saku kami dirancang persis untuk itu; iftar penuh di hotel disajikan untuk yang memilih jalan yang lebih tenang.",
      },
    ],
    keywords: [
      "paket sahur iftar umrah",
      "umrah ramadhan makanan",
      "iftar makkah",
      "sahur hotel makkah",
    ],
  },
  {
    slug: "air-mineral-grup-karton",
    name: "Air Mineral Grup (Karton & Dispenser)",
    categorySlug: "makanan-konsumsi",
    shortDesc:
      "Pasokan air mineral grup — botol per orang per hari, karton per bus, atau dispenser untuk hotel — logistik kecil yang paling sering kehabisan di tengah perjalanan.",
    longDesc:
      "Air adalah kebutuhan yang paling sering kehabisan tepat ketika paling dibutuhkan: tengah siang Makkah yang panas, di bus yang AC-nya kering, atau di kamar yang dispenser-nya kosong. Layanan pasokan air mengatur ketersediaan itu secara sistematis: botol per orang per hari yang diantar ke hotel, karton di bus untuk perjalanan antar kota, dan dispenser galon untuk apartemen atau ruang kumpul grup.\n\nUntuk grup besar, pasokan yang tertata menghilangkan satu pekerjaan koordinator sehari-hari — membeli air di minimarket dekat hotel untuk 40 orang adalah antrean harian yang tidak perlu. Pengaturan cadangan juga disertakan: hari-hari puncak (ziarah panjang, musim panas) mendapat alokasi yang lebih banyak, dan sisa air tak terpakai dihitung di akhir supaya tidak ada pemborosan yang diserahkan ke grup.",
    features: [
      "Botol per orang per hari diantar ke hotel",
      "Karton cadangan di bus untuk perjalanan",
      "Dispenser galon untuk apartemen/ruang grup",
      "Alokasi lebih besar di hari puncak",
      "Perhitungan sisa di akhir tanpa pemborosan",
    ],
    process: [
      "Sampaikan jumlah pax & hari perjalanan",
      "Kami susun alokasi harian + cadangan",
      "Antar rutin ke hotel/bus sesuai jadwal",
      "Rekonsiliasi sisa di akhir perjalanan",
    ],
    priceNote: "Mulai Rp 8–15 ribu/botol tergantung volume; galon mulai SAR 8–12",
    priceFrom: 8000,
    faqs: [
      {
        q: "Kenapa tidak sekadar beli air sendiri di toko?",
        a: "Untuk individu, boleh — toko di sekitar hotel bukan tempat asing. Tapi untuk grup, satu orang yang mengatur belanja air untuk 40 orang setiap hari adalah pekerjaan yang bisa dihindari dengan pasokan tertata, dan harga volume yang kami berikan lebih baik daripada harga minimarket.",
      },
      {
        q: "Berapa liter air per orang per hari yang wajar?",
        a: "Di cuaca Makkah dengan aktivitas ibadah, 2,5–3,5 liter per orang adalah angka yang realistis untuk jamaah aktif — lebih untuk jamaah yang banyak berjalan di siang. Alokasi kami menyiapkan sedikit di atas itu supaya tidak ada yang menahan haus sementara pasokan sudah dibayar.",
      },
    ],
    keywords: [
      "air mineral grup umrah",
      "pasokan air saudi",
      "galon hotel makkah",
      "logistik air jamaah",
    ],
  },
  {
    slug: "katering-hotel-madinah",
    name: "Katering Hotel Madinah",
    categorySlug: "makanan-konsumsi",
    shortDesc:
      "Katering untuk grup yang menginap di Madinah — menu lebih ringan dan segar, cocok untuk fase pemulihan sebelum Makkah yang lebih padat.",
    longDesc:
      "Fase Madinah dalam perjalanan umrah punya karakter yang berbeda: jamaah biasanya baru tiba dari penerbangan panjang, hari-harinya diisi shalat di Nabawi dan ziarah yang santai, dan tubuhnya sedang menyesuaikan. Katering Madinah kami disusun untuk fase itu — menu yang lebih ringan dan segar, porsi yang tidak membuat jamaah mengantuk di siang, dan hidangan yang menghangatkan malam-malam Nabawi.\n\nBanyak grup menggunakan Madinah sebagai fase penyesuaian menu: makanan yang lebih ringan di sini membuat tubuh siap untuk fase Makkah yang lebih berat. Jadwal antarnya mengikuti ritme Nabawi — Subuh sebelum shalat, siang yang ringan, dan malam yang lebih santai karena jamaah Madinah biasanya kembali lebih awal dari Haram. Untuk grup besar, menu bisa disinkronkan dengan jadwal ziarah supaya tidak ada jamaah yang makan sendirian karena busnya belum kembali.",
    features: [
      "Menu ringan-segar untuk fase pemulihan",
      "Jadwal mengikuti ritme Nabawi & ziarah",
      "Sinkron dengan jadwal bus ziarah grup",
      "Porsi siang yang tidak membuat mengantuk",
      "Kombinasi dengan katering Makkah dalam satu kontrak",
    ],
    process: [
      "Sampaikan jumlah pax & jadwal di Madinah",
      "Menu fase Madinah disusun & disetujui",
      "Antar harian ke hotel sesuai ritme",
      "Sinkronisasi dengan grup sebelum pindah ke Makkah",
    ],
    priceNote: "Rp 70–140 ribu/makan/jamaah tergantung menu & volume",
    priceFrom: 70000,
    faqs: [
      {
        q: "Kenapa menu Madinah berbeda dari Makkah?",
        a: "Karena fase perjalanannya berbeda — Madinah adalah fase tiba dan menyesuaikan, Makkah adalah fase ibadah berat. Jamaah yang makan berat di Madinah cenderung lambat beradaptasi; yang makan ringan dan segar langsung bisa beribadah penuh. Detail kecil seperti ini yang membedakan katering yang paham konteks umrah.",
      },
      {
        q: "Bisa satu kontrak untuk dua kota?",
        a: "Bisa dan itulah pola yang paling praktis — satu penyuplai untuk Madinah dan Makkah berarti satu standar mutu, satu laporan, dan tidak ada kejutan menu saat grup berpindah. Diskon tersedia untuk kontrak dua kota.",
      },
    ],
    keywords: [
      "katering madinah",
      "catering hotel nabawi",
      "makanan grup madinah",
      "catering umrah dua kota",
    ],
  },
  {
    slug: "paket-feast-arab-mandhi-biryani",
    name: "Paket Feast Arab: Mandhi, Biryani & Kambing Panggang",
    categorySlug: "makanan-konsumsi",
    shortDesc:
      "Hidangan Arab otentik untuk acara grup — kambing mandhi, biryani besar, dan aneka timur tengah — untuk syukuran, kumpul komunitas, atau sekadar variasi yang ditunggu.",
    longDesc:
      "Sebagian besar jamaah diam-diam menantikan satu hal: mencicipi masakan Arab yang otentik di tanahnya sendiri — dan paket feast ini menjawabnya dengan skala yang layak untuk grup: kambing mandhi yang dimasak dalam lubang tanah sampai lembutnya memisah dari tulang, biryani besar untuk puluhan orang, hummus, fatoush, dan roti yang keluar dari oven tepat saat disajikan.\n\nFormatnya dirancang untuk acara: malam kumpul komunitas, syukuran atas amanah yang ditunaikan, walimah kecil di Makkah, atau sekadar malam terakhir sebelum pulang yang ingin diakhiri dengan makan bersama yang hangat. Semuanya disajikan di ruang yang dikoordinasi dengan hotel atau tempat khusus — dan untuk grup besar, tim penyajian datang lengkap. Hidangan Arab yang benar adalah pengalaman budaya, bukan sekadar menu pengganti.",
    features: [
      "Kambing mandhi, biryani besar, aneka timur tengah",
      "Skala acara: dari 20 sampai 300 orang",
      "Ruang penyajian dikoordinasi dengan tempat",
      "Tim penyajian lengkap untuk acara besar",
      "Sesuai untuk syukuran, walimah & kumpul komunitas",
    ],
    process: [
      "Tentukan tanggal acara & jumlah pax",
      "Pilih paket feast & ruang penyajiannya",
      "Konfirmasi menu & waktu penyajian",
      "Acara berlangsung dengan tim penyajian lengkap",
    ],
    priceNote: "Mulai Rp 150–300 ribu/orang tergantung paket; kambing utuh tersedia untuk acara besar",
    priceFrom: 150000,
    faqs: [
      {
        q: "Berapa orang minimal untuk paket kambing mandhi?",
        a: "Satu kambing mandhi menyaji sekitar 12–18 orang tergantung menu pendampingnya — jadi acara dari 15 orang sudah layak. Untuk grup besar, beberapa kambing dimasak berurutan supaya yang keluar ke meja tetap hangat, bukan semua sekali waktu.",
      },
      {
        q: "Apakah bisa untuk walimah di Makkah?",
        a: "Sangat bisa — pasangan yang menikah di Tanah Suci sering mengadakan walimah kecil dengan feast Arab, dan pengalamannya jauh lebih khas daripada katering kota besar. Ruang perlu dikoordinasi lebih awal, dan kami membantu sejak pemilihan tempatnya.",
      },
    ],
    keywords: [
      "paket mandhi makkah",
      "biryani arab jamaah",
      "feast arab saudi",
      "walimah di makkah",
    ],
  },
  {
    slug: "pesan-antar-makan-hotel-makkah",
    name: "Pesan-Antar Makan ke Hotel Makkah (Konsinyasi)",
    categorySlug: "makanan-konsumsi",
    shortDesc:
      "Pesan makan dari restoran lokal ke kamar Anda — dengan bantuan pemesan berbahasa Indonesia yang tahu restoran mana yang benar-benar layak.",
    longDesc:
      "Aplikasi pesan-antar lokal di Saudi (HungerStation, Jahez, dan lainnya) sangat matang — tapi jamaah baru tiba menghadapi tiga penghalang sekaligus: bahasa, alamat hotel yang tidak jelas di peta, dan tidak tahu restoran mana yang memang layak. Layanan konsinyasi ini menjembatani itu: Anda pesan lewat kanal Indonesia, tim kami menerjemahkan ke aplikasi lokal, mengarahkan kurir ke titik penyerahan hotel yang benar, dan makanan tiba di resepsi atau kamar Anda.\n\nDaftar restoran yang kami sarankan sudah tersaring: masakan Indonesia yang otentik, masakan Arab yang layak, dan opsi ringan untuk jamaah yang tidak mau berat. Harga makanannya harga restoran — jasa pemesanan kami tipis dan transparan. Untuk keluarga dengan anak kecil yang tidak bisa keluar ke restoran, layanan ini mengubah malam-malam sela menjadi mudah.",
    features: [
      "Pesan lewat kanal Indonesia, tiba di kamar Anda",
      "Daftar restoran tersaring (Indonesia, Arab, ringan)",
      "Arahkan kurir ke titik penyerahan yang benar",
      "Jam makan fleksibel termasuk larut malam",
      "Jasa pemesanan tipis & transparan",
    ],
    process: [
      "Pilih restoran dari daftar yang dikirim",
      "Pesan lewat WhatsApp kanal layanan",
      "Tim memesan via aplikasi lokal & arahkan kurir",
      "Makanan tiba di resepsi/kamar Anda",
    ],
    priceNote: "Harga makanan sesuai restoran (mulai SAR 20–40/porsi); jasa pemesanan Rp 15 ribu/pesanan",
    priceFrom: 15000,
    faqs: [
      {
        q: "Apakah semua restoran bisa dipesan lewat layanan ini?",
        a: "Mayoritas restoran di aplikasi lokal bisa — karena kami hanya menjembatani pemesanan Anda. Yang kami tambahkan adalah daftar rekomendasi yang tersaring, penanganan alamat, dan konfirmasi sampai. Bila Anda sudah tahu restoran yang mau, sebutkan saja namanya.",
      },
      {
        q: "Bagaimana bila makanan sampai terlambat atau salah?",
        a: "Karena pemesanan tercatat di akun kanal kami, keberatan langsung diurus tim di Saudi — bukan Anda yang menegosiasi di aplikasi dengan bahasa yang tidak dikuasai. Penyelesaian refund atau pengiriman ulang dijalankan dari sisi kami.",
      },
    ],
    keywords: [
      "pesan makan makkah",
      "food delivery saudi",
      "hungerstation jamaah",
      "antar makan hotel makkah",
    ],
  },
  {
    slug: "paket-syukuran-walimah-makkah",
    name: "Paket Syukuran & Walimatul-Ukür di Makkah",
    categorySlug: "makanan-konsumsi",
    shortDesc:
      "Perayaan syukur di Tanah Suci — walimatul-ukür penyelesaian umrah, aqiqah, atau syukuran keluarga — dengan catering, ruang, dan rangkaian doa yang tertata.",
    longDesc:
      "Menunaikan umrah adalah momen yang layak disyukuri bersama — dan banyak keluarga memilih merayakannya di tempat peristiwa itu terjadi: walimatul-ukür (pesta penyelesaian ibadah), aqiqah untuk anak yang baru lahir, syukuran pernikahan, atau kumpul kecil keluarga besar yang kebetulan berumrah di waktu yang sama. Paket syukuran mengatur semuanya: ruang yang dikoordinasi dengan hotel, catering (Indonesia, Arab, atau campuran), rangkaian doa yang dipandu, dan — bila diperlukan — dokumentasi kecil.\n\nYang membuat acara semacam ini layak ditata adalah detailnya: ruang yang tersedia di musim yang padat, jam yang tidak bentrok dengan jadwal Haram, menu yang bisa dimakan semua umur, dan pemanggilan tamu dari grup-grup lain yang kebetulan berada di Makkah. Untuk aqiqah, kami juga mengkoordinasi penyembelihan yang benar sesuai syariat dan distribusinya.",
    features: [
      "Ruang acara dikoordinasi dengan hotel/tempat",
      "Catering Indonesia, Arab, atau campuran",
      "Rangkaian doa dipandu oleh pembicara",
      "Aqiqah: penyembelihan sesuai syariat & distribusi",
      "Dokumentasi kecil (foto) bila diminta",
    ],
    process: [
      "Ceritakan jenis acara & tanggalnya",
      "Kami susun paket: ruang, menu, rangkaian",
      "Konfirmasi & tamu diundang (bila dari grup lain)",
      "Acara berlangsung dengan tim penata acara",
    ],
    priceNote: "Mulai Rp 3–15 juta/acara tergantung jumlah tamu & menu",
    priceFrom: 3000000,
    faqs: [
      {
        q: "Bisakah aqiqah diselenggarakan di Makkah?",
        a: "Bisa — dan banyak keluarga memilihnya karena penyembelihan di Tanah Suci punya makna tersendiri. Kami mengkoordinasi penyembelihan lewat kanal yang sah, penamaan, dan distribusi daging ke yang berhak. Untuk keluarga yang ingin dagingnya dibagikan ke jamaah kurang mampu di Makkah, itu juga bisa diatur.",
      },
      {
        q: "Ruang acara dari mana?",
        a: "Sebagian hotel menyediakan ruang pertemuan yang bisa disewa, dan ada restoran privat di sekitar kawasan Haram yang cocok untuk acara tertutup. Pemilihannya bergantung jumlah tamu dan jam acara — kami menawarkan beberapa opsi dengan perbandingan biayanya.",
      },
    ],
    keywords: [
      "walimatul ukur makkah",
      "syukuran umrah",
      "aqiqah di makkah",
      "acara keluarga tanah suci",
    ],
  },

  // ================= KATEGORI 8: KESEHATAN & ASURANSI =================
  {
    slug: "asuransi-perjalanan-umrah-komprehensif",
    name: "Asuransi Perjalanan Umrah Komprehensif",
    categorySlug: "kesehatan-asuransi",
    shortDesc:
      "Perlindungan kesehatan dan perjalanan penuh untuk umrah — biaya rumah sakit, evakuasi, pembatalan, bagasi — dengan polis yang dijelaskan bahasa manusia.",
    longDesc:
      "Asuransi perjalanan umrah adalah produk yang paling sering dibeli sembarangan: dicentang dalam paket tanpa pernah dibaca, lalu mengejutkan pemiliknya justru saat dibutuhkan. Layanan ini berbeda dalam dua hal: polisnya disesuaikan dengan profil jamaah (usia, kondisi kronis, durasi, musim) dan setiap klaim batasannya dijelaskan dalam bahasa manusia sebelum Anda membayar — apa yang ditanggung, sampai berapa, apa yang dikecualikan, dan bagaimana langkah klaimnya saat darurat.\n\nCakupan komprehensif mencakup biaya pengobatan rumah sakit di Saudi (yang bisa sangat mahal tanpa proteksi), evakuasi medis ke Indonesia bila diperlukan, penanggungan pembatalan perjalanan, kehilangan bagasi, dan tanggung jawab pribadi. Untuk jamaah lansia dan penyakit kronis, tambahan atas pre-existing condition tersedia — tambahan yang sering menentukan, karena itulah klaim yang paling sering ditolak pada polis standar.",
    features: [
      "Biaya pengobatan rumah sakit Saudi dengan plafon jelas",
      "Evakuasi medis ke Indonesia bila diperlukan",
      "Perlindungan pembatalan & penundaan perjalanan",
      "Kehilangan bagasi & dokumen",
      "Tambahan pre-existing condition untuk jamaah kronis",
      "Ringkasan polis & langkah klaim dalam bahasa Indonesia",
    ],
    process: [
      "Isi profil: usia, kondisi kronis, durasi, musim",
      "Terima penawaran dengan perbandingan plafon",
      "Terbitkan polis sebelum keberangkatan",
      "Kartu klaim & nomor darurat dibawa berangkat",
    ],
    priceNote: "Mulai Rp 350 ribu/jamaah untuk proteksi 12 hari; lansia & kronis menyesuaikan",
    priceFrom: 350000,
    faqs: [
      {
        q: "Apakah asuransi bawaan visa tidak cukup?",
        a: "Untuk jamaah muda sehat, cakupan bawaan visa umumnya cukup untuk kejadian darurat dasar. Tapi plafonnya terbatas, pengecualian pre-existing-nya lebar, dan tidak semua RS Saudi terhubung. Untuk lansia, ibu hamil, atau kondisi kronis, polis tambahan dari Indonesia yang melengkapi celah itu sangat layak.",
      },
      {
        q: "Bagaimana langkah pertama saat harus ke rumah sakit di Saudi?",
        a: "Hubungi nomor darurat asuransi Anda sebelum atau sesegera mungkin — banyak polis menuntut pemberitahuan cepat, dan perusahaan bisa mengarahkan Anda ke RS jaringan yang prosesnya tanpa bayar di muka. Langkah ini yang paling sering dilewatkan jamaah yang panik, dan inilah yang panduan klaim kami tekankan.",
      },
    ],
    keywords: [
      "asuransi perjalanan umrah",
      "asuransi jamaah umrah",
      "asuransi lansia umrah",
      "klaim asuransi saudi",
    ],
  },
  {
    slug: "medical-assistance-saudi-24-jam",
    name: "Medical Assistance 24 Jam di Saudi",
    categorySlug: "kesehatan-asuransi",
    shortDesc:
      "Layanan darurat medis 24 jam di Tanah Suci — petugas Indonesia yang mengarahkan, menemani, dan menerjemahkan saat Anda atau keluarga jatuh sakit.",
    longDesc:
      "Sakit di negeri orang dengan bahasa yang tidak dikuasai adalah situasi yang mengubah masalah kecil menjadi krisis: mana rumah sakit yang tepat, bagaimana mendaftar, siapa yang menerjemahkan keluhan, dan siapa yang menghubungi keluarga di Indonesia. Layanan medical assistance menyediakan jalur darurat berbahasa Indonesia yang aktif 24 jam — petugas yang mengarahkan Anda ke fasilitas yang tepat, menemani (bila diperlukan), menerjemahkan, dan mengoordinasi dengan keluarga di rumah.\n\nLayanan ini bukan pengganti asuransi — biaya pengobatan tetap urusan asuransi atau kantong Anda. Yang layanan ini beri adalah kejernihan saat panik: nomor yang dihubungi, rumah sakit yang dicapai, dan seseorang yang memanggil taksi pukul tiga pagi. Untuk rombongan, layanan ini biasanya dibeli untuk grup sehingga seluruh jamaah tertutup — dan koordinator grup mendapat salinan laporannya.",
    features: [
      "Hotline berbahasa Indonesia aktif 24 jam",
      "Pengarahan ke rumah sakit yang tepat sesuai kasus",
      "Pendampingan & penerjemahan di RS (kota Makkah/Madinah/Jeddah)",
      "Koordinasi informasi dengan keluarga di Indonesia",
      "Laporan kasus ke koordinator grup",
    ],
    process: [
      "Daftar dengan data jamaah (individu atau grup)",
      "Terima nomor hotline & kartu layanan",
      "Hubungi saat darurat — arahan & pendampingan diberikan",
      "Laporan kasus dikirim ke keluarga & koordinator",
    ],
    priceNote: "Rp 150 ribu/jamaah/perjalanan (grup 20+ orang Rp 100 ribu/orang)",
    priceFrom: 150000,
    faqs: [
      {
        q: "Apa bedanya dengan asuransi perjalanan?",
        a: "Asuransi menanggung biaya; medical assistance menjalankan tindakan saat darurat. Asuransi yang baik tanpa assistance membuat Anda sendiri menghadapi RS Saudi di tengah malam; assistance tanpa asuransi membuat Anda tertata tapi menanggung biaya. Untuk jamaah lansia, keduanya bersama-sama adalah standar yang kami anjurkan.",
      },
      {
        q: "Bisakah menemani sampai ke dalam ruang periksa?",
        a: "Bisa dalam batas aturan rumah sakit — ruang periksa dan rawat inap umumnya mengizinkan pendamping, dan itulah di mana penerjemahan paling dibutuhkan. Di area yang membatasi pendamping (ICU, prosedur tertentu), pendamping menunggu di luar dan tetap menjadi penghubung.",
      },
    ],
    keywords: [
      "medical assistance saudi",
      "darurat medis umrah",
      "pendamping rumah sakit saudi",
      "bantuan medis jamaah",
    ],
  },
  {
    slug: "pendamping-medis-perawat-lansia",
    name: "Pendamping Medis / Perawat untuk Jamaah",
    categorySlug: "kesehatan-asuransi",
    shortDesc:
      "Perawat atau pendamping medis profesional yang menemani jamaah sepanjang perjalanan — obat tepat waktu, tanda vital terpantau, dan keluarga di rumah ikut tenang.",
    longDesc:
      "Ada jamaah yang sehatnya bergantung pada keteraturan: tekanan darah yang dijaga obat jam tertentu, diabetes yang butuh pengukuran harian, atau pemulihan pasca-stroke yang tidak boleh berjalan sendiri. Pendamping medis mengambil peran itu — perawat atau tenaga kesehatan terlatih yang menemani jamaah dari bandara Indonesia, memantau obat dan tanda vital setiap hari, dan bersiaga di titik-titik ibadah yang berat.\n\nPendamping diberikan dalam dua format: pendamping tetap yang mengikuti satu jamaah/keluarga sepanjang perjalanan (format premium yang paling nyaman), atau pendamping untuk subgrup lansia (misalnya satu perawat untuk lima-delapan lansia). Semua pendamping dibekali ringkasan kondisi medis yang Anda sampaikan, protokol darurat, dan komunikasi harian ke keluarga di Indonesia — satu pesan setiap malam yang berbunyi 'kondisi ayah baik hari ini' yang membuat seluruh keluarga bisa tidur.",
    features: [
      "Perawat/tenaga medis terlatih menemani sepanjang perjalanan",
      "Pemantauan obat & tanda vital harian",
      "Dua format: pendamping tetap atau per subgrup lansia",
      "Protokol darurat & tautan medis di Saudi",
      "Laporan kondisi harian ke keluarga di Indonesia",
    ],
    process: [
      "Sampaikan riwayat medis & kebutuhan pendampingan",
      "Penilaian kelayakan perjalanan bersama tim medis",
      "Pendamping ditugaskan & diberi brief lengkap",
      "Pendampingan berjalan; laporan harian ke keluarga",
    ],
    priceNote: "Pendamping tetap Rp 18–35 juta/perjalanan; subgrup Rp 3–5 juta/jamaah",
    priceFrom: 3000000,
    faqs: [
      {
        q: "Kapan jamaah benar-benar butuh pendamping medis?",
        a: "Tiga indikator utama: kebutuhan obat yang tepat waktu dengan konsekuensi sering bila terlewat (insulin, jantung), keterbatasan fisik yang membuat berjalan sendiri berisiko jatuh, dan kondisi yang bisa berubah cepat (pasca-stroke, jantung tidak stabil). Di luar itu, pendamping normal (keluarga sendiri) biasanya cukup.",
      },
      {
        q: "Apakah pendamping bisa mengerjakan ibadahnya sendiri?",
        a: "Ya — pendamping adalah jamaah juga, dan waktu ibadahnya diatur sedemikian rupa agar bertepatan dengan klien: shalat bersama, tawaf bersama. Format subgrup membuat ini lebih efisien karena satu pendamping melayani beberapa jamaah yang jadwalnya sama.",
      },
    ],
    keywords: [
      "pendamping lansia umrah",
      "perawat jamaah saudi",
      "pendamping medis umrah",
      "umrah penyakit kronis",
    ],
  },
  {
    slug: "sewa-kursi-roda-tanah-suci",
    name: "Sewa Kursi Roda di Tanah Suci",
    categorySlug: "kesehatan-asuransi",
    shortDesc:
      "Kursi roda yang menunggu Anda — dari tiba di bandara sampai tawaf, dengan operator yang tahu jalur mana yang ramah roda dan ramah waktu.",
    longDesc:
      "Kursi roda di Tanah Suci punya dua jalur: layanan gratis/komersial di dalam Haram (dengan antrean dan jam yang menentukan) dan kursi roda pribadi yang mengikuti Anda sepanjang perjalanan. Layanan kami berdiri di jalur kedua — kursi roda yang dipesan sebelum keberangkatan, menunggu di bandara saat Anda tiba, dan menjadi bagian keluarga selama sembilan hari: di hotel, di bus, di jalur Mas'aa.\n\nKursi pribadi mengubah pengalaman lansia secara fundamental: tidak perlu menunggu layanan di titik kumpul, tidak perlu menyerahkan waktu pada antrean, dan keluarga yang mendorongnya tetap mengatur ritmenya sendiri. Kami menyediakan tipe standar dan tipe kemah (reclining) untuk jamaah yang harus duduk lama, plus pelatihan singkat bagi keluarga pengdorong — cara menaiki tangga eskalator alternatif, jalur lift, dan etika mendorong di keramaian.",
    features: [
      "Kursi roda menunggu di bandara saat kedatangan",
      "Tipe standar & reclining untuk penggunaan lama",
      "Pelatihan singkat pengdorong (keluarga)",
      "Kombinasi dengan layanan kursi roda Haram saat puncak",
      "Pengiriman/pengembalian diatur dari hotel",
    ],
    process: [
      "Sampaikan kebutuhan & ukuran kursi",
      "Kursi disiapkan & menunggu di bandara tiba",
      "Pemakaian sepanjang perjalanan",
      "Pengembalian diatur di akhir",
    ],
    priceNote: "SAR 100–150/kursi per penggunaan di Haram; sewa perjalanan penuh mulai Rp 900 ribu",
    priceFrom: 900000,
    faqs: [
      {
        q: "Apa beda sewa kursi pribadi dengan layanan Haram?",
        a: "Layanan kursi Haram (berbayar ± SAR 100–150 per penggunaan) beroperasi dari titik-titik tertentu dengan antrean — cocok untuk penggunaan sesekali. Kursi pribadi menemani Anda sepanjang perjalanan tanpa antrean. Untuk jamaah yang butuh kursi setiap hari, sewa pribadi jauh lebih murah dan jauh lebih tenang dihitung dari totalnya.",
      },
      {
        q: "Bisakah tawaf dengan kursi roda di lantai bawah?",
        a: "Ada jalur khusus kursi roda di lantai tertentu Masjidil Haram — tawaf di lantai atas sekitar Maqam Ibrahim adalah rute yang dianjurkan untuk kursi roda saat padat. Untuk yang ingin tawaf lantai dasar, jam-jam subuh adalah jendela yang paling memungkinkan. Panduan jalurnya kami sertakan.",
      },
    ],
    keywords: [
      "sewa kursi roda makkah",
      "kursi roda umrah",
      "kursi roda lansia saudi",
      "tawaf kursi roda",
    ],
  },
  {
    slug: "trip-kit-obat-jamaah",
    name: "Trip Kit Obat-Obatan Jamaah",
    categorySlug: "kesehatan-asuransi",
    shortDesc:
      "Perangkat obat lengkap untuk perjalanan — sakit kepala, maag, diare, luka ringan, plus obat pribadi yang terorganisir — tanpa berburu apotek dalam bahasa yang tak dikenal.",
    longDesc:
      "Keluhan kesehatan yang paling sering mengganggu umrah bukan penyakit besar — tapi maag yang datang karena makan telat, sakit kepala karena kurang tidur, batuk karena AC bus, dan kaki yang lecet dari jalan kaki berlebih. Trip kit menyusun jawaban semua itu dalam satu organiser: obat bebas yang paling relevan untuk perjalanan, perban dan salep, termometre, masker, plus — yang paling penting — slot terorganisir untuk obat pribadi Anda dengan label jam minumnya.\n\nKit dikirim sebelum keberangkatan dengan buku panduan kecil: obat mana untuk keluhan mana, dosis umum, dan batas kapan harus berhenti main dokter-dokteran dan mulai ke fasilitas medis. Untuk jamaah dengan obat resep, kami menyiapkan slotnya dengan petunjuk membawa salinan resep (penting untuk pemeriksaan bea cukai dan bila obatnya habis di Saudi).",
    features: [
      "Organiser obat lengkap: bebas + slot obat pribadi",
      "Panduan kecil: obat, dosis, batas pergi ke dokter",
      "Perlengkapan luka & termometre",
      "Petunjuk membawa salinan resep ke Saudi",
      "Ukuran saku yang muat koper tangan",
    ],
    process: [
      "Isi profil: kondisi kronis & obat yang diminum",
      "Kit disusun sesuai profil & dikirim sebelum berangkat",
      "Brief singkat pemakaian (video 10 menit)",
      "Slot obat pribadi diberi label jam minum",
    ],
    priceNote: "Rp 250–450 ribu/kit tergantung isi",
    priceFrom: 250000,
    faqs: [
      {
        q: "Apakah isi kit ini legal dibawa ke Arab Saudi?",
        a: "Obat bebas dalam kemasan asli dengan jumlah wajar pemakaian pribadi aman dibawa. Untuk obat tertentu (kodein, psikotropika, obat suntik), aturan ketat — bawa salinan resep dan deklarasi bila diminta. Panduan lengkapnya ada di kit, dan kami menandai obat yang butuh perhatian khusus.",
      },
      {
        q: "Kalau obat saya habis di tengah perjalanan?",
        a: "Bawa resep/salinan — farmasi di Saudi lengkap dan banyak obatnya setara. Jasa beli obat & antar resep tersedia di kategori ini untuk yang butuh bantuan penerjemahan. Jangan mengandalkan sisa obat tanpa cadangan — bawa kelebihan satu minggu dari kebutuhan perjalanan.",
      },
    ],
    keywords: [
      "trip kit umrah",
      "obat perjalanan jamaah",
      "bekal obat umrah",
      "organiser obat saudi",
    ],
  },
  {
    slug: "asuransi-pembatalan-perjalanan",
    name: "Asuransi Pembatalan Perjalanan (Trip Cancellation)",
    categorySlug: "kesehatan-asuransi",
    shortDesc:
      "Perlindungan bila perjalanan harus dibatalkan — sakit mendadak, kematian keluarga, musibah — biaya yang sudah dibayar kembali sesuai ketentuan polis.",
    longDesc:
      "Rencana umrah yang dibatalkan mendadak adalah kejadian yang menggabungkan dua luka: duka atau musibahnya, dan ratusan juta rupiah yang sudah mengalir. Asuransi pembatalan menanggung luka kedua itu — bila pembatalan terjadi karena penyebab yang ditanggung polis (sakit mendadak yang dibuktikan medis, kematian keluarga inti, musibah alam yang menimpa tempat tinggal), biaya yang sudah dibayar dikembalikan sesuai ketentuan.\n\nYang penting dipahami dengan jujur: polis ini menanggung penyebab yang tercantum, bukan semua pembatalan — berubah pikiran, izin kantor yang gagal, atau visa yang telat karena pengurusan sendiri umumnya tidak masuk. Polis harus diterbitkan dalam jangka waktu tertentu setelah pembayaran pertama perjalanan (biasanya 7–14 hari) agar perlindungannya penuh. Layanan kami menyusunnya bersama pembayaran paket Anda supaya tidak ada celah waktu yang tidak terlindungi.",
    features: [
      "Pengembalian biaya sesuai penyebab yang ditanggung",
      "Penyebab medis, duka, dan musibah alam",
      "Perlu diterbitkan dekat pembayaran pertama",
      "Batas waktu & plafon dijelaskan sebelum beli",
      "Bisa menggabung perlindungan paket + tiket + hotel",
    ],
    process: [
      "Daftar saat pembayaran pertama perjalanan",
      "Kami susun polis yang menutup seluruh komponen",
      "Ringkasan penyebab yang ditanggung ditandatangani",
      "Bila terjadi pembatalan — klaim disusun bersama",
    ],
    priceNote: "Mulai 3–5% dari nilai perjalanan yang dilindungi",
    priceFrom: 1000000,
    faqs: [
      {
        q: "Apakah pembatalan karena 'berubah pikiran' ditanggung?",
        a: "Tidak — dan jujur itu memang bukan fungsi polis ini. Yang ditanggung adalah penyebab di luar kendali yang tercantum: sakit yang dibuktikan medis, kematian keluarga inti, musibah. Untuk kekhawatiran perubahan rencana yang lebih ringan, tiket flexi dan kebijakan pembatalan penyelenggara yang jelas adalah alat yang lebih tepat.",
      },
      {
        q: "Kapan batas akhir membeli polis ini?",
        a: "Umumnya dalam 7–14 hari setelah pembayaran pertama perjalanan (DP paket) agar perlindungan penuh — setelah itu, sebagian penyebab yang terjadi sebelum polis terbit tidak ditanggung. Pola yang aman: terbitkan polis di hari yang sama dengan pembayaran DP.",
      },
    ],
    keywords: [
      "asuransi pembatalan umrah",
      "trip cancellation",
      "refund paket umrah",
      "perlindungan batal perjalanan",
    ],
  },
  {
    slug: "ambulans-privat-makkah-jeddah",
    name: "Layanan Ambulans Privat (Makkah–Jeddah–Madinah)",
    categorySlug: "kesehatan-asuransi",
    shortDesc:
      "Ambulans privat untuk perpindahan medis — dari hotel ke rumah sakit, antar kota untuk pengobatan, atau transfer bandara dengan kondisi medis yang terjaga.",
    longDesc:
      "Ada situasi yang tidak bisa menunggu taksi biasa: jamaah yang kondisinya memburuk tengah malam, yang perlu perpindahan dari RS Madinah ke RS Jeddah yang lebih lengkap, atau jamaah dengan kondisi yang harus tetap terbaring sampai bandara. Ambulans privat menyediakan perpindahan itu dengan peralatan medis dasar dan tenaga pendamping — bukan kendaraan darurat sirene, tapi kendaraan medis yang terjadwal dan terencana.\n\nLayanan mencakup tiga skenario: transfer darurat ke RS terdekat (dikombinasikan dengan medical assistance), transfer antar RS untuk pengobatan lanjutan (dengan rekam medis yang diantar bersama), dan transfer bandara untuk jamaah yang pulang dalam kondisi terbaring (mengkoordinasi dengan maskapai untuk perlakuan khusus). Setiap transfer dikoordinasi dengan RS asal dan tujuan — penerimaan yang sudah siap membuat transfer tidak berakhir dengan menunggu di lobi.",
    features: [
      "Kendaraan medis dengan perlengkapan dasar",
      "Transfer hotel→RS, antar RS, dan RS→bandara",
      "Tenaga pendamping medis dalam kendaraan",
      "Koordinasi penerimaan di RS tujuan",
      "Sinkronisasi dengan maskapai untuk transfer bandara",
    ],
    process: [
      "Hubungi hotline dengan kondisi & lokasi",
      "Penilaian kebutuhan & tujuan transfer",
      "Ambulans bergerak dengan koordinasi RS",
      "Penyerahan ke tim medis tujuan",
    ],
    priceNote: "Mulai SAR 400–900/transfer dalam kota; antar kota lebih tinggi",
    priceFrom: 1700000,
    faqs: [
      {
        q: "Kapan pakai ambulans ini dan kapan darurat 997?",
        a: "Untuk keadaan yang mengancam nyata seketika (nyeri dada hebat, kehilangan kesadaran), hubungi darurat nasional 997 dulu — kecepatan respons resmi tidak bisa ditandingi. Ambulans privat kami untuk kondisi yang butuh perpindahan medis tapi terencana: kondisi yang memburuk bertahap, transfer antar RS, atau pulang terbaring.",
      },
      {
        q: "Apakah asuransi menanggung ambulans privat?",
        a: "Sebagian polis menanggung transfer medis yang dinilai perlu oleh dokter — simpan bukti keperluan medisnya (surat dokter RS) dan klaimkan. Transfer yang tidak dinilai perlu secara medis (mobil pribadi juga bisa) umumnya tidak ditanggung asuransi mana pun.",
      },
    ],
    keywords: [
      "ambulans privat saudi",
      "transfer medis makkah",
      "ambulans jamaah",
      "transfer rs jeddah madinah",
    ],
  },
  {
    slug: "sewa-oksigen-portabel-nebulizer",
    name: "Sewa Oksigen Portabel & Nebulizer",
    categorySlug: "kesehatan-asuransi",
    shortDesc:
      "Peralatan pernapasan yang mengikuti perjalanan — oksigen portabel untuk jamaah yang membutuhkan, nebulizer untuk asma dan pernapasan, disiapkan sejak Indonesia.",
    longDesc:
      "Jamaah dengan keterbatasan pernapasan — PPOK, asma berat, pasca-operasi jantung — menghadapi tantangan yang spesifik di Tanah Suci: jalan kaki yang lebih panjang dari biasanya, udara yang berdebu di musim tertentu, dan kepadatan yang membuat pernapasan bekerja lebih keras. Oksigen portabel dan nebulizer yang mengikuti perjalanan mengubah batasan itu menjadi terkelola — istirahat singkat dengan oksigen di tengah sa'i, nebulizer di kamar sebelum ibadah pagi, dan perjalanan bus yang tetap aman.\n\nPeralatan disewakan dari Indonesia (dikirim sebelum keberangkatan) atau disiapkan menunggu di hotel Saudi — pilihan kedua yang menghemat bagasi. Setiap unit datang dengan pengaturan yang disesuaikan kondisi yang Anda sampaikan, cadangan baterai, dan briefing singkat bagi keluarga pendamping. Catatan penting: aturan oksigen di pesawat sangat ketat — peralatan yang dibawa harus terverifikasi maskapai, dan kami memverifikasinya sebelum Anda terbang.",
    features: [
      "Konsentrator oksigen portabel & nebulizer",
      "Kirim sebelum berangkat atau tunggu di hotel Saudi",
      "Pengaturan disesuaikan kondisi yang disampaikan",
      "Briefing keluarga pendamping",
      "Verifikasi aturan maskapai untuk peralatan",
    ],
    process: [
      "Sampaikan kondisi pernapasan & kebutuhan",
      "Pilih jalur: kirim dari Indonesia atau tunggu di Saudi",
      "Peralatan disiapkan dengan pengaturan yang benar",
      "Briefing & pemakaian selama perjalanan",
    ],
    priceNote: "Sewa mulai Rp 900 ribu–2 juta/perjalanan tergantung peralatan",
    priceFrom: 900000,
    faqs: [
      {
        q: "Bisakah oksigen portabel dibawa di kabin pesawat?",
        a: "Konsentrator oksigen portabel (POC) tertentu diizinkan di kabin dengan persetujuan maskapai dan dokumen medis — tandanya peralatan harus disiapkan jauh hari, bukan menebak di bandara. Tangki oksigen murni dilarang di kabin. Kami memverifikasi aturan maskapai Anda sebelum perjalanan.",
      },
      {
        q: "Apakah kamar hotel menyediakan colokan yang cukup?",
        a: "Untuk peralatan medis, kami menyediakan strip listrik dalam paket sewa — dan menyarankan kamar yang dekat lift untuk mengurangi jarak tarik peralatan. Kombinasi dengan layanan kamar dekat lift di kategori Keluarga & Lansia sangat disarankan untuk jamaah dengan peralatan medis.",
      },
    ],
    keywords: [
      "sewa oksigen portabel umrah",
      "nebulizer jamaah saudi",
      "oksigen perjalanan haji",
      "peralatan medis sewa saudi",
    ],
  },
  {
    slug: "sewa-alat-bantu-jalan-walker",
    name: "Sewa Alat Bantu Jalan (Walker & Tongkat)",
    categorySlug: "kesehatan-asuransi",
    shortDesc:
      "Walker dan tongkat yang membuat jalan kaki ke Haram tetap mungkin — alat yang ringan, bisa dilipat, dan menunggu Anda di bandara.",
    longDesc:
      "Untuk jamaah yang masih bisa berjalan tapi jaraknya sudah menjadi batas — walker dan tongkat adalah alat yang jauh lebih murah daripada kursi roda dan jauh lebih memuliakan kemandirian. Walker yang bisa dilipat masuk bagasi, keluar di bandara Madinah, dan menjadi penolong sepanjang sembilan hari: ke Haram lima waktu, di koridor Mas'aa yang panjang, dan di ruang hotel yang kadang jauh dari lift.\n\nPilihan alatnya menyesuaikan: walker dua roda untuk yang butuh stabilitas di jalan datar, walker empat kaki untuk yang lebih berat keseimbangannya, dan tongkat lipat untuk yang hanya butuh sedikit penolong. Semua datang dengan grip yang nyata (bukan foam yang sudah mengempis) dan briefing singkat pemakaiannya — karena walker yang dipakai salah justru menambah risiko jatuh.",
    features: [
      "Walker 2 roda, 4 kaki, dan tongkat lipat",
      "Ringan & dilipat untuk masuk bagasi",
      "Grip baru & briefing pemakaian",
      "Tersedia di Indonesia atau tunggu di hotel Saudi",
      "Kombinasi bertahap: walker ke Haram, kursi roda saat ekstrem",
    ],
    process: [
      "Sampaikan kondisi berjalan Anda",
      "Kami sarankan alat yang cocok",
      "Kirim sebelum berangkat atau tunggu di hotel",
      "Briefing pemakaian singkat",
    ],
    priceNote: "Sewa mulai Rp 250–600 ribu/perjalanan; beli tersedia",
    priceFrom: 250000,
    faqs: [
      {
        q: "Walker atau kursi roda untuk orang tua saya?",
        a: "Tes sederhananya: bisakah ia berjalan 10–15 menit dengan berhenti-berhenti tanpa risiko jatuh? Bila ya, walker menang — kemandiriannya terjaga dan ia tetap bergerak. Bila tidak, kursi roda yang jujur lebih aman. Banyak jamaah lansia memakai keduanya: walker untuk hari yang baik, kursi roda untuk hari yang berat.",
      },
      {
        q: "Apakah walker boleh di dalam Haram?",
        a: "Boleh sepenuhnya — berbeda dengan kursi roda yang punya jalur khusus, walker berjalan bersama pejalan kaki. Yang perlu diwaspadai: jalur yang licin saat basah (area wudhu) dan antrean yang berhenti mendadak. Jaga jarak dan pilih sisi yang lebih tenang.",
      },
    ],
    keywords: [
      "sewa walker umrah",
      "alat bantu jalan lansia",
      "tongkat jamaah saudi",
      "walker lipat saudi",
    ],
  },
  {
    slug: "telemedicine-dokter-indonesia-24",
    name: "Telemedicine Dokter Indonesia 24 Jam",
    categorySlug: "kesehatan-asuransi",
    shortDesc:
      "Konsultasi dokter Indonesia via video call saat di Tanah Suci — dokter yang paham konteks ibadah Anda, berbahasa Indonesia, dan aktif saat Anda butuh.",
    longDesc:
      "Keluhan kesehatan jamaah sering bukan darurat — tapi maag yang naik tengah malam, demam yang menurun-naik, atau lelah yang tidak biasa — dan setiap keputusan yang salah (menahan, berobat sendiri, atau ke RS di jam yang tidak perlu) menambah beban. Telemedicine menyediakan dokter Indonesia yang dihubungi via video call kapan pun: dokter yang paham konteksnya (jamaah, sedang ibadah, jadwalnya padat), menjawab dalam bahasa Anda, dan menimbang keputusan yang tepat — rehat, obat, atau memang ke fasilitas.\n\nDokter yang bertugas memahami pula kekhasan ibadah: mana keluhan yang wajar dari aktivitas tawaf, mana tanda yang tidak boleh diabaikan. Untuk jamaah dengan kondisi kronis, telemedicine menjadi kanal pemantauan berkala yang membuat dokter di Indonesia juga ikut memantau perjalanan — laporan yang bisa diteruskan ke dokter pribadi Anda di rumah.",
    features: [
      "Dokter Indonesia via video call 24 jam",
      "Dokter paham konteks ibadah & aktivitas jamaah",
      "Keputusan yang tepat: rehat, obat, atau ke fasilitas",
      "Riwayat konsultasi tersimpan & bisa diteruskan ke dokter pribadi",
      "Tanpa antre — respons dalam menit",
    ],
    process: [
      "Daftar dengan profil kesehatan singkat",
      "Terima nomor & kanal konsultasi",
      "Video call saat butuh — dokter menilai",
      "Riwayat konsultasi tersimpan untuk keluarga",
    ],
    priceNote: "Rp 200 ribu/perjalanan (konsultasi tak terbatas); keluarga Rp 300 ribu",
    priceFrom: 200000,
    faqs: [
      {
        q: "Apa batasan telemedicine?",
        a: "Telemedicine menjawab pertanyaan dan keputusan awal — ia tidak bisa memeriksa fisik, tidak bisa memberi resep di Saudi, dan tidak menggantikan darurat. Bila dokter menilai kondisinya butuh pemeriksaan, dia langsung mengarahkan ke fasilitas yang tepat (dan di situlah medical assistance bergabung). Keunggulannya: keputusan salah menghindar — yang paling mahal harganya di negeri orang.",
      },
      {
        q: "Jaringan internet di Saudi cukup untuk video call?",
        a: "Di hotel dan area kota, jaringan cukup baik untuk video call standar. Di dalam Haram yang padat, video bisa tersendat — konsultasi bisa beralih ke suara atau teks dengan foto. Tips praktis: lakukan konsultasi non-darurat dari kamar, bukan dari antrean Haram.",
      },
    ],
    keywords: [
      "telemedicine jamaah",
      "dokter online umrah",
      "konsultasi dokter saudi",
      "dokter indonesia 24 jam",
    ],
  },
  {
    slug: "pendampingan-rawat-inap-jeddah",
    name: "Pendampingan Rawat Inap di Jeddah/Madinah",
    categorySlug: "kesehatan-asuransi",
    shortDesc:
      "Seseorang yang mengurus semuanya saat Anda dirawat — administrasi RS, asuransi, keluarga di Indonesia, dan kebutuhan harian pendamping Anda.",
    longDesc:
      "Dirawat di RS negeri orang menghadirkan rangkaian yang tidak terduga: administrasi yang penuh istilah Arab, klaim asuransi yang menuntut dokumen, keluarga di Indonesia yang menunggu kabar setiap jam, dan kebutuhan harian pendamping Anda sendiri (tempat tidur, makan, transport) yang tidak ada yang mengaturnya. Layanan pendampingan rawat inap mengurus seluruhnya — koordinator yang jadi satu titik hubung antara Anda, RS, asuransi, dan keluarga.\n\nKoordinator hadir setiap hari dengan laporan kondisi yang dikirim ke keluarga, mengurus dokumen klaim sejak hari pertama (bukan setelah pulang saat dokumen sudah tercecer), mengatur kebutuhan pendamping yang menunggu di RS, dan — bila kondisinya memungkinkan perpindahan — menata proses pulang yang aman. Ini layanan yang Anda berdoa tidak pernah butuhkan; dan bila terjadi, yang membedakan semua adalah apakah ada orang yang tahu harus mulai dari mana.",
    features: [
      "Koordinator harian di sisi RS & keluarga",
      "Dokumen klaim asuransi dikumpulkan sejak hari pertama",
      "Laporan kondisi berkala ke Indonesia",
      "Aturan kebutuhan pendamping yang menunggu di RS",
      "Penataan pulang aman (transfer bandara, pendamping)",
    ],
    process: [
      "Hubungi hotline saat perawatan dimulai",
      "Koordinator ditugaskan & mengunjungi RS",
      "Laporan harian & dokumen klaim terkumpul",
      "Penataan pulang bila kondisi memungkinkan",
    ],
    priceNote: "Mulai Rp 1,5–3 juta/hari pendampingan tergantung intensitas",
    priceFrom: 1500000,
    faqs: [
      {
        q: "Bagaimana bila keluarga di Indonesia ingin datang?",
        a: "Kami bantu mengaturnya — informasi kebutuhan visa, tiket, dan akomodasi pendamping di Saudi. Untuk kondisi yang berat, kehadiran keluarga adalah hak yang bisa didukung; yang penting diatur dengan jadwal yang realistis supaya kehadiran itu tidak berubah menjadi kerepotan tambahan di RS.",
      },
      {
        q: "Apakah ini layanan medis?",
        a: "Bukan — tindakan medis sepenuhnya di tangan tim RS. Layanan ini berada di sisi administrasi, koordinasi, dan kemanusiaan yang berkeliling perawatan: dokumen, keluarga, pendamping, dan keputusan-keputusan yang menuntut bahasa dan konteks lokal.",
      },
    ],
    keywords: [
      "pendampingan rawat inap saudi",
      "perawatan rumah sakit jeddah",
      "koordinator rs jamaah",
      "rawat inap tanah suci",
    ],
  },
  {
    slug: "dialisis-terjadwal-makkah",
    name: "Layanan Dialisis Terjadwal di Makkah/Jeddah",
    categorySlug: "kesehatan-asuransi",
    shortDesc:
      "Jadwal dialisis yang dirancang sebelum keberangkatan — sesi yang tepat waktu di fasilitas Saudi, dikoordinasi dengan ritme ibadah Anda.",
    longDesc:
      "Jamaah dengan kebutuhan dialisis bisa menunaikan umrah — dengan syarat satu: jadwalnya direncanakan sejak Indonesia. Sesi dialisis harus tetap berjalan 2–3 kali seminggu dengan jeda yang ketat, dan fasilitasnya harus dipilih sesuai tanggal perjalanan. Layanan ini mengatur seluruhnya: pemesanan slot di pusat dialisis yang terakreditasi di Makkah/Jeddah, sinkronisasi dengan itinerary ibadah (sesi dialisis dijadwalkan di hari yang tidak mengganggu momen ibadah utama), dan koordinasi dokumen medis dengan pusatnya.\n\nKeberhasilan umrah dengan dialisis bergantung pada tiga disiplin: jadwal sesi yang tidak pernah bergeser, kontrol cairan dan diet yang berjalan konsisten di perjalanan, dan pendamping yang paham kondisinya. Kami menyiapkan ketiganya — termasuk pendamping medis opsional dan catatan darurat yang terhubung ke pusat dialisis Anda di Indonesia. Umrah dengan dialisis adalah ibadah yang bisa — dengan rencana yang serius.",
    features: [
      "Slot dialisis dipesan sebelum keberangkatan",
      "Fasilitas terakreditasi di Makkah/Jeddah",
      "Jadwal sesi yang menghindari momen ibadah utama",
      "Koordinasi dokumen medis dengan pusat Indonesia",
      "Pendamping medis opsional",
    ],
    process: [
      "Sampaikan jadwal dialisis & resep dokter Indonesia",
      "Kami pesan slot di fasilitas sesuai tanggal perjalanan",
      "Itinerary ibadah disusun mengelilingi jadwal sesi",
      "Evaluasi medis pra-keberangkatan",
    ],
    priceNote: "Biaya sesi SAR 300–600/session tergantung fasilitas; koordinasi Rp 1,5 juta/perjalanan",
    priceFrom: 1500000,
    faqs: [
      {
        q: "Berapa awal harus merencanakan umrah dengan dialisis?",
        a: "Minimal 2–3 bulan sebelum keberangkatan — slot pusat dialisis di musim puncak terbatas dan dokumen medisnya butuh waktu diatur dua arah. Jangan merencanakan ini mendekati tanggal; keterlambatan slot adalah risiko yang tidak bisa ditawar.",
      },
      {
        q: "Apakah jadwal ibadahnya benar-benar bisa berjalan?",
        a: "Bisa dengan penyesuaian yang jujur: ibadah utama dipadatkan di hari antar sesi, hari sesi dialisis dijadwalkan di pagi hari (dengan siang untuk pemulihan), dan ekspektasi jumlah tawaf disesuaikan kondisi. Jamaah yang pernah melakukannya dengan rencana baik melaporkan pengalaman yang sangat bermakna — dengan batasan yang dipahami sejak awal.",
      },
    ],
    keywords: [
      "dialisis umrah",
      "hemodialisis saudi jamaah",
      "umrah pasien ginjal",
      "dialisis terjadwal makkah",
    ],
  },
  {
    slug: "asesmen-fit-to-travel-lansia",
    name: "Asesmen Kelayakan Ibadah Lansia (Fit-to-Travel)",
    categorySlug: "kesehatan-asuransi",
    shortDesc:
      "Penilaian menyeluruh kelayakan perjalanan lansia — dari dokter yang paham konteks ibadah, dengan rekomendasi jujur dan rencana penyesuaiannya.",
    longDesc:
      "Pertanyaan yang paling sulit dijawab keluarga: 'apakah ayah/ibu masih sanggup berumrah tahun ini?' — dan jawaban yang paling murah biasanya adalah jawaban yang paling berbahaya: 'yang penting niat'. Asesmen fit-to-travel menjawab pertanyaan itu dengan serius: pemeriksaan menyeluruh oleh dokter yang paham konteks perjalanan ibadah (jarak jalan, cuaca, keramaian, jam yang tak teratur), penilaian risiko yang jujur, dan rekomendasi dalam tiga bentuk: layak mandiri, layak dengan penyesuaian, atau perlu menunda.\n\nHasil asesmen bukan dokumen yang dibuang — ia menjadi peta rencana: penyesuaian apa yang dibutuhkan (pendamping medis, kursi roda, kamar dekat lift, jadwal yang longgar), obat apa yang harus disiapkan, dan tanda-tanda yang harus diwaspadai keluarga di perjalanan. Untuk keluarga yang ragu-ragu, sesi ini yang paling berharga: keputusan yang diambil dengan informasi, bukan dengan harapan semata.",
    features: [
      "Pemeriksaan menyeluruh oleh dokter yang paham konteks ibadah",
      "Rekomendasi jujur: mandiri, dengan penyesuaian, atau tunda",
      "Peta penyesuaian: pendamping, alat, kamar, jadwal",
      "Daftar tanda bahaya untuk keluarga pendamping",
      "Dokumen asesmen yang bisa dipakai untuk asuransi",
    ],
    process: [
      "Jadwalkan asesmen (klinik mitra / kunjungan)",
      "Pemeriksaan menyeluruh + riwayat medis",
      "Diskusi rekomendasi dengan keluarga",
      "Dokumen asesmen & peta rencana dikirim",
    ],
    priceNote: "Rp 750 ribu–1,5 juta tergantung kedalaman pemeriksaan",
    priceFrom: 750000,
    faqs: [
      {
        q: "Kalau hasilnya 'perlu menunda', apakah berarti tidak pernah bisa?",
        a: "Tidak — 'menunda' berarti 'tunda hingga kondisi memenuhi' atau 'tunda sampai penyesuaiannya siap'. Sebagian lansia yang ditunda tahun ini berangkat tahun depan dengan kondisi yang lebih tertata (obat yang stabil, berat badan yang turun, pendamping yang siap). Asesmen ini bukan vonis — ia peta.",
      },
      {
        q: "Apakah hasil asesmen dipakai asuransi?",
        a: "Ya — dokumen asesmen kami dapat digunakan untuk pengajuan asuransi perjalanan lansia, karena menunjukkan bahwa penyakit yang ada sudah dinilai dan dikelola. Banyak penolakan asuransi lansia terjadi karena kondisi yang tidak terdokumentasi dengan baik; asesmen ini menjawabnya.",
      },
    ],
    keywords: [
      "asesmen lansia umrah",
      "fit to travel jamaah",
      "kelayakan ibadah lansia",
      "cek kesehatan lansia umrah",
    ],
  },
  {
    slug: "jasa-beli-obat-antar-hotel",
    name: "Jasa Beli Obat & Antar Resep ke Hotel",
    categorySlug: "kesehatan-asuransi",
    shortDesc:
      "Butuh obat mendesak di tengah perjalanan? Kami beli dari apotek Saudi dan antar ke hotel Anda — termasuk menjelaskan resep yang tidak bisa dibaca.",
    longDesc:
      "Kebutuhan obat di tengah perjalanan datang tanpa jadwal: obat maag habis di hari keempat, obat tekanan darah tertinggal di kamar hotel sebelumnya, atau dokter lokal memberi resep yang huruf Arabnya tidak bisa dibaca pembacanya. Layanan ini menjembatani: Anda sebutkan kebutuhan (atau kirim foto resep), tim kami menerjemahkannya, membeli dari apotek yang tepat, dan mengantar ke hotel Anda dengan label yang jelas.\n\nUntuk resep dari dokter Saudi, tim kami memverifikasi kecocokan obat dengan yang Anda minum sebelumnya — interaksi obat adalah risiko yang sering terlewat saat jamaah mengganti merek di negeri orang. Untuk obat khusus yang butuh resep, koordinasi dengan dokter lokal disiapkan. Semuanya dalam hitungan jam — dan untuk kebutuhan malam yang tidak bisa menunggu pagi, jalur darurat tersedia.",
    features: [
      "Pembelian & pengantaran ke hotel dalam hitungan jam",
      "Penerjemahan resep Arab → obat yang benar",
      "Verifikasi kecocokan obat dengan yang sebelumnya",
      "Koordinasi dokter lokal untuk obat khusus",
      "Jalur darurat untuk kebutuhan malam",
    ],
    process: [
      "Kirim kebutuhan / foto resep via WhatsApp",
      "Tim menerjemahkan & memverifikasi",
      "Pembelian di apotek",
      "Antar ke hotel dengan label yang jelas",
    ],
    priceNote: "Harga obat sesuai apotek; jasa mulai Rp 75 ribu/pesanan",
    priceFrom: 75000,
    faqs: [
      {
        q: "Semua obat tersedia di Saudi?",
        a: "Mayoritas obat generik internasional tersedia, dan banyak obat Indonesia punya padanan setara. Beberapa obat tertentu (kodein, obat psikotropika) butuh resep ketat dan tidak bisa dibeli bebas — bawa salinan resep dari Indonesia untuk mempercepat. Bila obat Anda langka, bawa cadangan memadai dari rumah.",
      },
      {
        q: "Apakah aman mengganti merek obat di Saudi?",
        a: "Zat aktifnya yang penting — dan tim kami memverifikasi itu, bukan hanya mereknya. Jamaah yang mengganti obat tekanan darah dengan padanan yang zatnya berbeda adalah kesalahan yang sering terjadi; verifikasi kecocokan adalah bagian inti layanan ini, bukan tambahan.",
      },
    ],
    keywords: [
      "beli obat saudi",
      "apotek makkah",
      "antar obat hotel jamaah",
      "terjemah resep arab",
    ],
  },

  // ================= KATEGORI 9: KEUANGAN SYARIAH =================
  {
    slug: "amanahescrow-dana-umrah",
    name: "AmanahEscrow — Dana Umrah Ditahan Pihak Ketiga",
    categorySlug: "keuangan-syariah",
    shortDesc:
      "Dana paket Anda ditahan di rekening escrow bank syariah — baru dirilis bertahap 40/40/20 sesuai progres perjalanan. Memutus rantai travel mangkir.",
    longDesc:
      "AmanahEscrow adalah skema yang memutus rantai kasus travel mangkir yang berulang setiap tahun: dana jamaah tidak masuk rekening penyelenggara, melainkan rekening penampungan (escrow) di bank syariah mitra. Dana baru dirilis bertahap 40/40/20 — saat tiba & check-in Makkah, selama ibadah berjalan, dan setelah pulang dengan seluruh komponen terverifikasi.\n\nBagi jamaah, skema ini berarti satu hal yang sederhana dan besar: penyelenggara tidak pernah memegang seluruh uang Anda sebelum pekerjaannya selesai. Bagi penyelenggara yang jujur, ini bukan ancaman — justru bukti yang paling kuat bahwa mereka memang akan menunaikan amanahnya. Setiap kontrak escrow tercatat, dan jamaah (beserta keluarganya) bisa memantau status rilis dana lewat dasbor. Biaya layanannya kecil — jauh lebih kecil daripada risiko yang dipotongnya.",
    features: [
      "Dana ditahan di rekening escrow bank syariah",
      "Rilis bertahap 40/40/20 sesuai progres perjalanan",
      "Dasbor pemantauan untuk jamaah & keluarga",
      "Kontrak escrow tercatat resmi",
      "Memutus rantai gagal bayar & travel mangkir",
      "Biaya kecil yang transparan",
    ],
    process: [
      "Sepakati paket dengan penyelenggara lewat platform",
      "Setor dana ke rekening escrow (bukan rekening travel)",
      "Rilis tahap 1 saat tiba & check-in Makkah terverifikasi",
      "Rilis tahap 2 selama ibadah berjalan",
      "Rilis tahap 3 setelah pulang & komponen selesai",
    ],
    priceNote: "Biaya layanan 0,5–1% dari nilai transaksi, minimum Rp 150 ribu",
    priceFrom: 150000,
    faqs: [
      {
        q: "Apakah penyelenggara menerima skema escrow?",
        a: "Penyelenggara yang jujur dan kuat modalnya menerima — karena skema ini justru pemasaran terbaik mereka: 'dana Anda aman, kami tidak butuh uang Anda duluan'. Penyelenggara yang menolak keras dan memaksa transfer langsung memberi Anda satu informasi penting tentang bagaimana mereka mengelola kasnya.",
      },
      {
        q: "Apa yang terjadi bila penyelenggara mangkir saat dana di escrow?",
        a: "Itulah titik terbesar perlindungan ini: dana yang belum dirilis masih di tangan bank syariah, bukan di tangan yang mangkir. Sesuai kontrak, dana dikembalikan ke jamaah (dengan pemotongan komponen yang benar-benar telah dipakai, yang harus terverifikasi). Kekacauan perjalanan tetap menyakitkan — tapi kehilangan seluruh dana bisa dicegah.",
      },
    ],
    keywords: [
      "escrow umrah",
      "amanah escrow",
      "dana aman umrah",
      "rekening penampungan umrah",
      "travel amanah",
    ],
  },
  {
    slug: "cicilan-umrah-syariah",
    name: "Cicilan Umrah Syariah (Tanpa Riba)",
    categorySlug: "keuangan-syariah",
    shortDesc:
      "Bagi biaya umrah jadi cicilan bulanan dengan akad syariah yang jelas — tanpa bunga, dengan margin yang transparan dan tenor yang bisa dipilih.",
    longDesc:
      "Umrah tidak harus menunggu uang tunai penuh di tangan — tapi juga tidak boleh dibeli dengan utang yang kaburnya bunga. Cicilan syariah menjalankan jalur tengahnya: akad yang jelas (murabahah atau ijarah sesuai produknya), margin yang transparan dan diketahui di awal (bukan bunga yang berjalan diam-diam), dan tenor yang bisa dipilih — 6, 12, hingga 24 bulan — sesuai kemampuan bulanan Anda.\n\nYang membuat cicilan ini berbeda dari KPR-kartu-kredit yang menyamar: pengecekan kemampuan yang jujur. Kami tidak menyarankan cicilan yang menggerus lebih dari 25–30% penghasilan bulanan — umrah yang membawa beban utang berat bukanlah umrah yang tenang. Angsurannya bisa dibayar lewat kanal mitra bank syariah, dan status akadnya tercatat agar keluarga Anda tahu persis status kewajibannya bila terjadi apa-apa.",
    features: [
      "Akad syariah jelas: murabahah/ijarah",
      "Margin transparan sejak awal — tanpa bunga berjalan",
      "Tenor fleksibel 6–24 bulan",
      "Angsuran lewat kanal bank syariah mitra",
      "Kewajiban tercatat untuk ketenangan keluarga",
      "Pendampingan hitung cicilan yang sehat",
    ],
    process: [
      "Hitung cicilan yang sehat bersama konsultan",
      "Ajukan dengan dokumen penghasilan",
      "Akad ditandatangani & margin disepakati",
      "Angsuran bulanan berjalan; perjalanan berangkat sesuai jadwal",
    ],
    priceNote: "DP mulai 30%, tenor 6–24 bulan, margin syariah transparan",
    faqs: [
      {
        q: "Berapa cicilan yang masih sehat?",
        a: "Aturan kasar yang kami pegang: total angsuran semua kewajiban (termasuk cicilan umrah) tidak melebihi 30–35% penghasilan bulanan. Cicilan umrah 12 bulan dari penghasilan Rp 6 juta dengan kewajiban lain minim, masih masuk akal; dari penghasilan yang sudah tertekan KPR — pikirkan ulang. Umrah yang tenang lahir dari keuangan yang tenang.",
      },
      {
        q: "Kalau saya jatuh tempo angsuran saat sudah berumrah?",
        a: "Bila kemampuannya sehat dari awal, itu jarang terjadi — dan bila terjadi karena keadaan, komunikasikan ke pemberi akad lebih awal. Status akad yang tercatat membuat penyelesaian mengikuti hukumnya, bukan menghilang. Itulah salah satu alasan kami tidak menyediakan cicilan yang 'hanya verbal'.",
      },
    ],
    keywords: [
      "cicilan umrah syariah",
      "umrah cicilan tanpa riba",
      "murabahah umrah",
      "umrah dicicil",
    ],
  },
  {
    slug: "tabungan-umrah-haji-syariah",
    name: "Tabungan Umrah & Haji (Bank Syariah)",
    categorySlug: "keuangan-syariah",
    shortDesc:
      "Simpan teratur menuju keberangkatan — tabungan dengan target otomatis, imbalan syariah, dan proteksi yang membuat niat tidak tergerus kebutuhan lain.",
    longDesc:
      "Sebagian besar kegagalan menabung umrah bukan karena uang tidak ada — tapi karena tabungannya selalu menangkal kebutuhan lain: kado anak, urgensi kerabat, dan 'satu-dua juta saja dulu'. Tabungan dengan target memperbaiki itu secara struktural: nominal yang menarik otomatis setiap tanggal tertentu, penarikan yang dibatasi (tidak bisa diambil sehari-hari), dan target yang terlihat bergerak setiap bulan menuju jumlah keberangkatan.\n\nKami membantu menyusun rencananya: hitung kebutuhan total (paket, perlengkapan, kontingensi), tetapkan tanggal target keberangkatan, dan hitung setoran bulanan yang realistis — jangan yang mengagungkan niat sampai menggerus kebutuhan hidup. Tabungan syariah mitra memberi imbalan sesuai akadnya, dan — yang penting bagi keluarga — bisa disertai manfaat kematian yang membuat dana tetap jadi umrah, bukan hilang bersama penabungnya.",
    features: [
      "Setoran otomatis dengan tanggal yang dipilih",
      "Penarikan dibatasi agar niat tidak tergerus",
      "Imbalan sesuai akad bank syariah",
      "Kalkulasi target: paket + perlengkapan + kontingensi",
      "Manfaat kematian yang menjaga niat tetap jadi umrah",
    ],
    process: [
      "Hitung kebutuhan & tanggal target bersama kami",
      "Tetapkan setoran bulanan yang realistis",
      "Buka tabungan di bank syariah mitra",
      "Pantau target & sambut keberangkatan",
    ],
    priceNote: "Tidak ada biaya layanan; imbalan mengikuti akad bank syariah",
    faqs: [
      {
        q: "Berapa sebaiknya menabung per bulan untuk umrah?",
        a: "Contoh nyata: target umrah Rp 35 juta dua tahun lagi berarti sekitar Rp 1,4–1,5 juta per bulan (belum termasuk imbalan). Bila nominal itu terlalu berat, geser target — tiga tahun bukan kegagalan, melainkan kejujuran yang membuat rencana berjalan. Tabungan yang gagal di bulan kedua lebih buruk daripada target yang jujur di tahun ketiga.",
      },
      {
        q: "Lebih baik menabung atau langsung DP paket?",
        a: "Untuk mayoritas orang, menabung dulu lebih aman — DP mengunci perjalanan yang tanggalnya masih jauh dan bisa bergeser bila keuangan berubah. DP cocok untuk yang uangnya sudah siap dan mengejar musim tertentu (misalnya akhir Ramadhan). Kombinasi yang sehat: menabung sampai 60–70%, baru kunci paket dengan DP.",
      },
    ],
    keywords: [
      "tabungan umrah",
      "tabungan haji syariah",
      "menabung umrah",
      "target umrah",
    ],
  },
  {
    slug: "money-changer-riyal-saudi",
    name: "Money Changer Riyal (Jual-Beli SAR)",
    categorySlug: "keuangan-syariah",
    shortDesc:
      "Tukar riyal dengan kurs yang jujur — beli SAR sebelum berangkat, dan kembalikan sisa SAR saat pulang tanpa menukar di bandara yang rugi.",
    longDesc:
      "Dua momen pengeluaran yang paling tidak jujur kursnya dalam perjalanan umrah: membeli SAR mendadak di bandara Indonesia (kurs jualnya paling tinggi) dan mengembalikan sisa SAR di bandara pulang (kurs belinya paling rendah). Selisihnya kecil per transaksi — tapi akumulasinya dalam perjalanan keluarga bisa mencapai ratusan ribu sampai jutaan rupiah.\n\nLayanan money changer ini mengatur kedua momennya: pembelian SAR sebelum berangkat dengan kurs yang transparan (dikirim ke alamat Anda atau diambil), dan buyback sisa SAR saat pulang dengan kurs yang lebih adil. Untuk grup, layanan beli kolektif dengan kurs volume tersedia. Kami juga memberi panduan praktis: berapa SAR yang realistis dibawa (bukan semua dalam uang tunai), kombinasi kartu dan tunai yang sehat, dan aturan deklarasi bawaan uang saat keluar-masuk negara.",
    features: [
      "Kurs transparan sebelum berangkat",
      "Pengiriman/ambil SAR di alamat Anda",
      "Buyback sisa SAR saat pulang dengan kurs adil",
      "Pembelian kolektif grup dengan kurs volume",
      "Panduan kombinasi tunai-kartu & aturan deklarasi",
    ],
    process: [
      "Cek kurs harian & tentukan kebutuhan",
      "Pesan & terima SAR sebelum keberangkatan",
      "Pakai sesuai kebutuhan perjalanan",
      "Kembalikan sisa SAR saat pulang (buyback)",
    ],
    priceNote: "Kurs mengikuti pasar harian; margin 1–2% (bandara bisa 3–5%)",
    priceFrom: 1000000,
    faqs: [
      {
        q: "Berapa SAR yang sebaiknya dibawa tunai?",
        a: "Untuk umrah 9 hari, kebutuhan tunai umumnya SAR 500–1.500 per orang (makan sela, taksi sela, belanja kecil) — sisa kebutuhan besar lewat kartu. Jangan membawa seluruh dana dalam bentuk tunai: risiko hilangnya nyata, dan aturan deklarasi untuk bawaan besar berlaku di kedua arah.",
      },
      {
        q: "Lebih baik bawa SAR atau tukar di Saudi?",
        a: "Kurs di Saudi untuk penukaran dari rupiah jarang lebih baik — rupiah bukan mata uang yang likuid di sana. Beli SAR di Indonesia dengan kurs yang jujur adalah jalur yang paling terkendali; kartu multi-mata uang menjadi pelengkap untuk pengeluaran yang lebih besar.",
      },
    ],
    keywords: [
      "money changer riyal",
      "tukar riyal saudi",
      "kurs sar hari ini",
      "beli riyal sebelum umrah",
    ],
  },
  {
    slug: "perlindungan-dana-jaminan-refund",
    name: "Perlindungan Dana & Jaminan Refund",
    categorySlug: "keuangan-syariah",
    shortDesc:
      "Perlindungan dana jamaah dari kegagalan penyelenggaraan — jaminan refund yang tertulis, dengan eskalasi yang jelas bila perjalanan gagal berjalan.",
    longDesc:
      "Di luar skema escrow, ada lapisan perlindungan yang bisa disusun untuk transaksi yang tidak lewat escrow: jaminan refund tertulis dari penyelenggara (yang menjelaskan persentase kembali di tiap skenario pembatalan), verifikasi kewenangan rekening tempat Anda transfer, dan eskalasi yang jelas bila perjalanan gagal berjalan — siapa yang dihubungi, dalam berapa hari, dan apa dasar pengembaliannya.\n\nLayanan ini mengambil peran pemeriksa: menelaah syarat-syarat penawaran penyelenggara sebelum Anda transfer (syarat refund yang tidak masuk akal adalah tanda paling dini), memverifikasi bahwa rekening penerima sesuai badan hukumnya (bukan rekening pribadi), dan mendokumentasikan seluruh korrespondensi. Bila kegagalan terjadi, dokumentasi ini menjadi dasar penegakan yang jauh lebih kuat — karena kasus refund yang paling sering gagal bukan yang tidak berhak, tapi yang tidak punya bukti.",
    features: [
      "Telaah syarat refund penyelenggara sebelum transfer",
      "Verifikasi rekening sesuai badan hukum",
      "Dokumentasi korrespondensi yang terarsip",
      "Eskalasi & jalur penegakan yang jelas",
      "Pelengkap untuk transaksi di luar escrow",
    ],
    process: [
      "Kirim penawaran/syarat penyelenggara untuk ditelaah",
      "Verifikasi rekening & badan hukum",
      "Dokumentasi kesepakatan terarsip",
      "Pendampingan eskalasi bila terjadi kegagalan",
    ],
    priceNote: "Rp 500 ribu/penelaahan transaksi (hingga Rp 100 juta nilai)",
    priceFrom: 500000,
    faqs: [
      {
        q: "Kenapa tidak semua transaksi pakai escrow saja?",
        a: "Escrow memerlukan kesiapan penyelenggara dan platform — untuk penyelenggara kecil atau transaksi tertentu (tiket, hotel langsung), jalurnya belum tersedia. Perlindungan dana ini adalah lapisan yang bisa dipakai di mana pun: telaah, verifikasi, dan dokumentasi. Setara tombol rem di mobil yang belum punya rem canggih.",
      },
      {
        q: "Tanda apa yang paling berbahaya di syarat refund?",
        a: "Tiga yang paling sering kami temukan: refund 'sesuai kebijakan' tanpa persentase tertulis, pembatalan yang menanggung 100% kerugian jamaah untuk semua skenario, dan klause yang mengalihkan tanggung jawab ke pihak ketiga yang tidak jelas identitasnya. Satu saja dari ketiganya — tanyakan ulang sebelum transfer.",
      },
    ],
    keywords: [
      "perlindungan dana umrah",
      "jaminan refund travel",
      "refund paket umrah",
      "verifikasi rekening travel",
    ],
  },
  {
    slug: "kartu-prabayar-multi-mata-uang",
    name: "Kartu Prabayar Multi-Mata Uang untuk Jamaah",
    categorySlug: "keuangan-syariah",
    shortDesc:
      "Kartu prabayar yang bisa diisi rupiah dan dipakai SAR — belanja dan tarik tunai di Saudi tanpa membawa tunai berlebih, dengan biaya yang tertata.",
    longDesc:
      "Kartu prabayar multi-mata uang menutup celah antara dua kebutuhan yang bertabrakan: tidak mau membawa terlalu banyak tunai, tapi tidak semua tempat menerima kartu kredit. Kartu ini diisi rupiah (atau dikonversi ke SAR sejak awal), dipakai di ATM dan merchant yang menerima kartu debit internasional, dan diblokir seketika lewat aplikasi bila hilang — proteksi yang tidak dimiliki uang tunai.\n\nYang kami bantu adalah pemilih dan pengaturannya: kartu yang fee tarik tunainya masuk akal di ATM Saudi, konversi yang dilakukan di momen yang tepat (kurs berjalan vs dikunci), batas pengeluaran per hari yang disetel untuk disiplin, dan kartu keluarga — orang tua berangkat dengan kartu yang diisi anaknya di rumah, dan habisnya terpantau jauh dari sana. Untuk jamaah lansia yang tidak terbiasa aplikasi, kartu dibekali panduan telepon yang lebih ramah daripada layar ponsel.",
    features: [
      "Isi rupiah, pakai SAR — tanpa tunai berlebih",
      "Fee tarik tunai yang dipilih dari yang masuk akal",
      "Blokir seketika via aplikasi bila hilang",
      "Kartu keluarga: diisi dari rumah, terpantau jauh",
      "Batas harian yang disetel untuk disiplin",
    ],
    process: [
      "Pilih kartu & daftar dengan dokumen",
      "Isi saldo & atur limit harian",
      "Pakai di ATM/merchant Saudi",
      "Pantau pengeluaran dari aplikasi/telepon",
    ],
    priceNote: "Biaya penerbitan mulai Rp 50–100 ribu; fee transaksi mengikuti kartu",
    priceFrom: 50000,
    faqs: [
      {
        q: "ATM Saudi ramai menerima kartu asing?",
        a: "ATM bank besar Saudi menerima jaringan Visa/Mastercard dengan baik, dan di kawasan jamaah ATM-nya banyak — tapi antreannya nyata saat puncak. Strategi yang sehat: tarik tunai dalam jumlah moderat sekali-sekali (bukan kecil-kecil setiap hari), dan andalkan kartu untuk merchant yang menerima.",
      },
      {
        q: "Untuk orang tua saya yang takut kartu, apa solusinya?",
        a: "Format yang paling nyaman: kartu dibuat di nama orang tua, diatur penuh oleh anak di rumah, dan disertai nomor layanan yang bisa ditelepon dalam bahasa Indonesia. Orang tua hanya perlu tahu satu hal: kartu ini untuk belanja dan tarik tunai — sisanya ditangani orang yang ada di rumah.",
      },
    ],
    keywords: [
      "kartu prabayar saudi",
      "kartu multi mata uang",
      "forex card umrah",
      "kartu debit saudi jamaah",
    ],
  },
  {
    slug: "pembiayaan-umrah-koperasi-syariah",
    name: "Pembiayaan Umrah Koperasi Syariah",
    categorySlug: "keuangan-syariah",
    shortDesc:
      "Pembiayaan umrah lewat koperasi syariah — untuk anggota koperasi, pegawai yayasan, dan komunitas dengan jalur akad yang dekat dan personal.",
    longDesc:
      "Koperasi syariah adalah jalur pembiayaan yang sering terlupakan — padahal untuk jamaah yang menjadi anggotanya (pegawai yayasan, anggota koperasi pegawai, komunitas koperasi) jalurnya paling dekat dan paling personal: akad dengan pihak yang mengenal Anda, angsuran yang dipotong dari kanal yang sudah akrab, dan penanggung jawab yang bisa ditemui di ruang yang sama.\n\nLayanan ini membantu dua sisi sekaligus: untuk jamaah anggota, memetakan produk pembiayaan koperasinya dan menyusun pengajuan yang benar (akad, kemampuan, dan jadwal perjalanan yang selaras); untuk koperasi yang ingin menyelenggarakan program umrah anggotanya, kami bantu menyusun skema pembiayaan + perjalanan yang tertata — banyak koperasi kehilangan kesempatan ini karena tidak tahu dari mana memulai, dan justru koperasi adalah lembaga yang paling cocok menghidupkan umrah anggotanya.",
    features: [
      "Pemetaan produk pembiayaan koperasi anggota",
      "Pengajuan yang benar: akad, kemampuan, jadwal",
      "Angsuran lewat kanal koperasi yang akrab",
      "Untuk koperasi: skema program umrah anggota",
      "Pendampingan penyelenggaraan end-to-end",
    ],
    process: [
      "Cek status anggota & produk koperasi",
      "Susun pengajuan pembiayaan",
      "Akad & pencairan sesuai ketentuan koperasi",
      "Perjalanan diselenggarakan sesuai jadwal akad",
    ],
    priceNote: "Margin mengikuti kebijakan koperasi; layanan koordinasi mulai Rp 500 ribu",
    priceFrom: 500000,
    faqs: [
      {
        q: "Saya bukan anggota koperasi — bisa ikut?",
        a: "Beberapa koperasi menerima anggota baru dengan persyaratan keanggotaan sederhana — dan bila jalur koperasinya memang paling cocok untuk kondisi Anda, menjadi anggota adalah langkah yang wajar. Tapi jujur: bila Anda tidak berada di ekosistem koperasi mana pun, produk pembiayaan syariah bank atau cicilan langsung biasanya lebih sederhana.",
      },
      {
        q: "Koperasi saya ingin program umrah anggota, mulai dari mana?",
        a: "Dari perencanaan yang kecil dan benar: hitung anggota yang berminat, susun skema pembiayaannya (akad, angsuran, jadwal), dan mulai dari angkatan pertama yang ukurannya masih terkendali (20–40 orang). Program yang sukses kecil lebih baik daripada program besar yang membebani kas koperasi — kami pendampingi seluruhnya.",
      },
    ],
    keywords: [
      "pembiayaan umrah koperasi",
      "koperasi syariah umrah",
      "program umrah koperasi",
      "pinjaman umrah syariah",
    ],
  },
  {
    slug: "konsultasi-dana-haji-siskopatuh",
    name: "Konsultasi Keuangan Haji (SISKOPATUH & BPKH)",
    categorySlug: "keuangan-syariah",
    shortDesc:
      "Memahami posisi Anda dalam antrean haji reguler — SISKOPATUH, estimasi biaya BPKH, dan strategi keputusan: menunggu, haji khusus, atau keduanya.",
    longDesc:
      "Antrean haji reguler adalah keputusan keuangan jangka panjang yang paling sering diserahkan pada kekaburan: berapa lama lagi, berapa biayanya nanti, dan apakah menunggu itu keputusan yang benar untuk usia Anda sekarang. Konsultasi ini merapikan kekaburan itu dengan data: posisi antrean Anda di SISKOPATUH, estimasi biaya BPKH yang berlaku dan proyeksinya, dan — yang paling penting — pemetaan keputusannya: menunggu antrean, beralih ke haji khusus (dengan implikasi biayanya yang jujur), atau menggabungkan keduanya.\n\nSesi ini juga menutup kebingungan administratif yang menumpuk: cara membaca buku dan kartu haji, perubahan data yang perlu diperbarui, dan apa yang terjadi bila jamaah meninggal sebelum panggilan (warisannya dan proses pengembaliannya). Untuk keluarga yang mewarisi status haji orang tuanya, sesi ini yang menjawab pertanyaan yang bertahun-tahun tidak pernah dijawab.",
    features: [
      "Pembacaan posisi antrean SISKOPATUH",
      "Estimasi biaya BPKH & proyeksinya",
      "Peta keputusan: menunggu vs haji khusus",
      "Perapihan administrasi: buku, kartu, data",
      "Jawaban untuk warisan status haji",
    ],
    process: [
      "Kirim data SISKOPATUH & tahun pendaftaran",
      "Sesi konsultasi (60 menit) dengan analisis",
      "Dokumen ringkasan & peta keputusan dikirim",
      "Tindak lanjut administratif bila diperlukan",
    ],
    priceNote: "Rp 300 ribu/sesi konsultasi",
    priceFrom: 300000,
    faqs: [
      {
        q: "Apakah konsultasi ini bisa mempercepat panggilan haji?",
        a: "Tidak — dan siapa pun yang menjanjikan percepatan antrean reguler adalah tanda bahaya. Yang dilakukan sesi ini adalah memahami posisi Anda dan membuat keputusan yang benar di atasnya: bila antrean 15 tahun dan usia Anda 68, haji khusus adalah keputusan yang layak dipertimbangkan dengan mata terbuka; bila antrean 7 tahun dan Anda 45, menunggu adalah keputusan yang sehat.",
      },
      {
        q: "Orang tua saya meninggal sebelum dipanggil, apa yang terjadi dana dan statusnya?",
        a: "Dana BPKH (BPKH-KSPU) dapat diajukan kembali ke waris dengan prosedur tertentu, dan status antreannya bisa dialihkan ke ahli waris sesuai ketentuan yang berlaku. Prosedurnya bervariasi dan butuh dokumen yang benar — sesi konsultasi memetakan langkahnya, dan pendampingan administratifnya tersedia bila diperlukan.",
      },
    ],
    keywords: [
      "siskopatuh",
      "konsultasi haji",
      "bpkh biaya haji",
      "antrean haji reguler",
      "warisan haji",
    ],
  },
  {
    slug: "sedekah-wakaf-tanah-suci",
    name: "Sedekah & Wakaf Terverifikasi di Tanah Suci",
    categorySlug: "keuangan-syariah",
    shortDesc:
      "Sedekah iftar, wakaf mushaf, sumur wakaf — kanal amanah dengan bukti penyaluran yang bisa dilihat, bukan sekadar transfer ke nomor yang tidak jelas.",
    longDesc:
      "Niat sedekah di Tanah Suci datang dari hati yang sedang terbuka — dan justru di momen itulah jamaah paling rentan pada kanal yang tidak jelas: nomor transfer yang muncul di grup, 'pengurus' yang tidak bisa menunjukkan apa, dan sedekah yang hilang di tengah jalan tanpa jejak. Layanan ini menyediakan kanal yang tertata: program sedekah yang jelas bentuknya (iftar jamaah di Haram, wakaf mushaf ke masjid kecil, sumur wakaf di kawasan kekurangan air, bantuan pekerja kebersihan Haram) dengan mitra penyaluran yang terverifikasi dan bukti penyaluran yang dikirim.\n\nUntuk program besar (sumur wakaf), buktinya datang bertahap: dokumentasi lokasi, proses, dan serah terima. Untuk sedekah harian, laporan agregat per program. Prinsipnya satu: sedekah yang Anda niatkan sampai ke tujuannya — dan Anda bisa menunjukkan kepada keluarga bahwa itu benar-benar terjadi.",
    features: [
      "Program jelas: iftar Haram, wakaf mushaf, sumur, pekerja Haram",
      "Mitra penyaluran terverifikasi",
      "Bukti penyaluran dikirim (foto/dokumen)",
      "Laporan agregat per program",
      "Sesuai kaidah penyaluran sedekah & wakaf",
    ],
    process: [
      "Pilih program & nominal",
      "Pembayaran lewat kanal resmi platform",
      "Penyaluran oleh mitra terverifikasi",
      "Bukti & laporan dikirim ke Anda",
    ],
    priceNote: "Nominal sedekah penuh tersalurkan; biaya operasional platform jelas terpisah",
    priceFrom: 100000,
    faqs: [
      {
        q: "Bagaimana memastikan sedekah benar-benar sampai?",
        a: "Dengan bukti yang bisa dilihat — foto penyaluran iftar, dokumen serah terima wakaf, dan laporan agregat per program. Kami bekerja hanya dengan mitra yang menyetujui transparansi ini; mitra yang menolak melaporkan penyaluran tidak masuk daftar. Itu filter yang paling sederhana dan paling menentukan.",
      },
      {
        q: "Apakah sedekah iftar di Haram sah?",
        a: "Sah — menyediakan berbuka bagi jamaah di Haram adalah amalan yang dianjurkan dengan banyak riwayat tentang keutamaannya, dan pemerintah Saudi mengatur mekanisme penyediaannya (termasuk mewajibkan izin bagi penyelenggara). Kanal kami menjalankan lewat penyelenggara yang berizin — sedekah yang sah dan tertata.",
      },
    ],
    keywords: [
      "sedekah tanah suci",
      "wakaf sumur",
      "iftar haram",
      "wakaf mushaf makkah",
      "sedekah jamaah",
    ],
  },
  {
    slug: "konsultasi-zakat-jamaah",
    name: "Konsultasi Zakat Jamaah (Zakat Penghasilan & Harta)",
    categorySlug: "keuangan-syariah",
    shortDesc:
      "Menghitung zakat yang benar sebelum dan sesudah umrah — penghasilan, emas, usaha, dan pensiun — dengan amil yang paham konteks keuangan jamaah Indonesia.",
    longDesc:
      "Umrah sering menjadi momen kebangkitan zakat — jamaah yang selama ini menabung bertahun-tahun mendadak bertanya: apakah tabungan yang sedang terkumpul ini kena zakat, bagaimana emas keluarga yang lama tidak dihitung, dan bagaimana zakat penghasilan yang belum pernah dibayarkan bertahun-tahun. Konsultasi ini menjawab dengan sistem: inventarisasi harta (kas, emas, usaha, pensiun, piutang), hitungan nisab dan haul yang benar, dan — untuk yang ada kewajiban menunggak — skema pembayaran yang realistis.\n\nKonsultan kami memahami konteks keuangan Indonesia: DPLK, BPJS, dana pensiun, dan koperasi — karena pertanyaan zakat paling rumit justru di situ. Untuk jamaah usaha (pedagang, pemilik usaha kecil), perhitungan zakat usaha yang benar sering mengubah jumlahnya secara besar — kadang lebih kecil dari yang ditakuti, kadang lebih besar dari yang dikira. Yang penting: hitungan yang benar, bukan yang nyaman.",
    features: [
      "Inventarisasi harta: kas, emas, usaha, pensiun",
      "Hitungan nisab & haul yang benar",
      "Skema pembayaran untuk kewajiban menunggak",
      "Pemahaman DPLK, BPJS & dana pensiun",
      "Riwayat hitungan tersimpan untuk tahun berikutnya",
    ],
    process: [
      "Kumpulkan data harta & penghasilan",
      "Sesi konsultasi dengan konsultan zakat",
      "Hitungan final & rekomendasi penyaluran",
      "Riwayat tersimpan untuk hitungan tahun berikutnya",
    ],
    priceNote: "Rp 250 ribu/sesi konsultasi",
    priceFrom: 250000,
    faqs: [
      {
        q: "Apakah tabungan untuk umrah kena zakat?",
        a: "Ya — tabungan (termasuk yang ditujukan untuk umrah) termasuk harta yang berjalan (mal nadhirah) dan kena zakat bila mencapai nisab dan haulnya terpenuhi, dengan perbedaan pendapat ulama yang dibahas di sesi. Yang penting dipahami: niat baik untuk ibadah tidak mengubah status zakat hartanya.",
      },
      {
        q: "Zakat saya bisa disalurkan ke mana?",
        a: "Kami menyarankan lewat amil resmi (BAZNAS, LAZ terdaftar) untuk zakat — karena itu kewenangannya — dengan pilihan program yang jelas. Untuk sedekah dan infak, kanalnya lebih luas. Yang kami hindari: menyarankan penyaluran ke pihak yang tidak jelas amilnya, meski nominalnya sama besar.",
      },
    ],
    keywords: [
      "konsultasi zakat",
      "zakat penghasilan",
      "zakat tabungan umrah",
      "hitung zakat jamaah",
    ],
  },
  {
    slug: "kiriman-dana-darurat-jamaah",
    name: "Kiriman Dana Darurat ke Jamaah di Tanah Suci",
    categorySlug: "keuangan-syariah",
    shortDesc:
      "Keluarga butuh mengirim dana mendesak ke jamaah yang sedang beribadah — kanal cepat yang tahu persis bagaimana menyerahkannya ke tangan yang benar.",
    longDesc:
      "Kebutuhan mendesak tidak memilih waktunya: jamaah kehilangan dompetnya di hari ketiga, butuh dana untuk pengobatan mendadak, atau keluarga di rumah yang ingin mengirim 'bekal belanja terakhir' sebelum keberangkatan pulang. Mengirim dana dari Indonesia ke jamaah yang sedang di Tanah Suci punya tantangan yang spesifik: kanal transfer butuh waktu, jamaah tidak punya rekening lokal, dan penyerahan ke hotel yang tepat butuh tahu sistemnya.\n\nLayanan ini menjalankan tiga jalur sesuai urgensi: transfer ke kartu/bank yang sudah dimiliki jamaah (jalur tercepat bila kartunya aktif), kiriman dana tunai yang diserahterimakan langsung ke jamaah di hotelnya dengan foto konfirmasi (untuk yang tanpa kartu), dan koordinasi dengan koordinator grup untuk penyerahan yang tepat. Untuk dana pengobatan mendesak, jalur ini menyatu dengan medical assistance supaya dana sampai tepat ke titik yang dibutuhkannya.",
    features: [
      "Tiga jalur sesuai urgensi: transfer, tunai langsung, via koordinator",
      "Penyerahan di hotel dengan foto konfirmasi",
      "Kanal berbahasa Indonesia untuk keluarga pengirim",
      "Penyatu dengan layanan medis bila dana untuk pengobatan",
      "Bukti serah terima yang tertata",
    ],
    process: [
      "Keluarga menghubungi kanal dengan data jamaah",
      "Jalur pengiriman ditentukan sesuai urgensi",
      "Dana bergerak dengan pemantauan",
      "Bukti serah terima dikirim ke pengirim",
    ],
    priceNote: "Biaya layanan mulai Rp 150 ribu + biaya kanal transfer",
    priceFrom: 150000,
    faqs: [
      {
        q: "Berapa cepat dana bisa sampai ke jamaah?",
        a: "Jalur tercepat (transfer ke kartu yang aktif) bisa dalam hitungan menit setelah verifikasi. Jalur tunai langsung ke hotel dalam 3–8 jam tergantung lokasi dan jam. Untuk kebutuhan pengobatan mendesak, sebutkan konteksnya sejak awal — jalur medisnya yang akan digerakkan.",
      },
      {
        q: "Bagaimana memastikan dana sampai ke orang yang benar?",
        a: "Verifikasi identitas tiga lapis: data jamaah yang cocok dengan grup perjalanannya, penyerahan dengan pemeriksaan identitas (bukan hanya nama), dan foto serah terima yang dikirim ke pengirim. Untuk hotel yang banyak jamaahnya, koordinasi dengan koordinator grup adalah lapisan yang paling menentukan.",
      },
    ],
    keywords: [
      "kirim uang ke saudi",
      "dana darurat jamaah",
      "transfer uang jamaah umrah",
      "kiriman keluarga tanah suci",
    ],
  },
  {
    slug: "pembiayaan-multiguna-syariah-umrah",
    name: "Pembiayaan Multiguna Syariah untuk Umrah",
    categorySlug: "keuangan-syariah",
    shortDesc:
      "Pembiayaan multiguna dengan agunan aset — jalur yang sering paling murah untuk umrah besar, dengan akad syariah yang tertulis dan jangka yang dikendalikan.",
    longDesc:
      "Untuk umrah keluarga besar atau haji khusus yang nilainya ratusan juta, pembiayaan multiguna (dengan agunan properti atau aset berharga) sering menjadi jalur yang paling murah per bulannya — tenor lebih panjang membuat cicilannya lebih ringan daripada pinjaman konsumtif, dan akad syariahnya (murabahah atau musyarakah) tertulis dan terdokumentasi.\n\nLayanan ini menjalankan peran penasihat yang jujur: membandingkan jalur-jalurnya (multiguna dengan agunan, tabungan dipercepat, atau menunda), menghitung total biayanya secara jujur (termasuk yang sering disembunyikan), dan — yang paling penting — menilai apakah keputusan ini sehat untuk keluarga Anda. Umrah dengan agunan rumah adalah keputusan yang bisa benar; ia juga bisa menjadi beban yang menggerus keberkahan perjalanan. Sesi ini memastikan keputusannya diambil dengan mata terbuka.",
    features: [
      "Perbandingan jalur: multiguna, tabungan, menunda",
      "Hitungan total biaya yang jujur",
      "Akad syariah tertulis & terdokumentasi",
      "Penilaian kesehatan keputusan untuk keluarga",
      "Dokumen pengajuan yang dirapikan",
    ],
    process: [
      "Sesi penilaian kebutuhan & aset",
      "Perbandingan jalur dengan angka nyata",
      "Pengajuan ke lembaga syariah terpilih",
      "Akad & pencairan sesuai jadwal perjalanan",
    ],
    priceNote: "Margin mengikuti lembaga; layanan konsultasi Rp 750 ribu",
    priceFrom: 750000,
    faqs: [
      {
        q: "Apakah mengagunkan rumah untuk umrah itu benar?",
        a: "Tidak ada jawaban tunggal — jawabannya bergantung pada situasi yang lengkap: sisa cicilan rumah, stabilitas penghasilan, jumlah yang dibutuhkan, dan dampaknya pada kebutuhan lain keluarga. Bila cicilan multigunanya tetap ringan dan penghasilan stabil, keputusan itu bisa sehat. Bila ia menggerus kebutuhan anak — menunda umrah dua tahun adalah keputusan yang lebih berkah. Sesi ini ada untuk menjawab dengan situasi Anda, bukan dengan prinsip yang dilekatkan.",
      },
      {
        q: "Kenapa multiguna bisa lebih murah dari cicilan konsumtif?",
        a: "Karena ada agunannya — risiko pemberi dana lebih kecil sehingga margin lebih rendah dan tenornya bisa lebih panjang. Untuk nominal besar, selisihnya per bulan sangat terasa. Konsekuensinya juga harus jujur dihitung: aset yang menjadi agunan berisiko bila kewajiban tidak tertangani — itulah kenapa disiplin angsuran menjadi syarat utama jalur ini.",
      },
    ],
    keywords: [
      "pembiayaan multiguna syariah",
      "kpr syariah umrah",
      "pinjaman besar umrah",
      "murabahah multiguna",
    ],
  },
  {
    slug: "keuangan-grup-umrah-transparan",
    name: "Keuangan Grup Umrah yang Transparan",
    categorySlug: "keuangan-syariah",
    shortDesc:
      "Sistem pembukuan untuk pengurus komunitas — kolektif dana, laporan terbuka ke jamaah, dan penyelesaian yang membuat kepercayaan tidak goyah.",
    longDesc:
      "Grup umrah komunitas yang paling sering pecah bukan karena ibadahnya — tapi karena keuangannya: kolektif yang tidak tercatat, laporan yang 'nanti dijelaskan', sisa dana yang tidak jelas, dan satu-dua anggota yang merasa dirugikan. Sistem keuangan grup membangun struktur yang mencegah semuanya: rekening kolektif yang terpisah dari rekening pribadi pengurus, pencatatan setiap pemasukan dan pengeluaran dengan bukti, laporan berkala yang dibagikan ke seluruh jamaah, dan rekonsiliasi akhir yang dikeluarkan di depan semua orang.\n\nUntuk pengurus takmir masjid, komunitas mahasiswa, atau grup kantoran yang menyusun program sendiri, sistem ini mengubah peran pengurus dari 'yang dicurigai diam-diam' menjadi 'yang dilaporkan kepercayaannya'. Template-nya disediakan — spreadsheet yang mudah dioperasikan, format laporan yang siap bagikan ke grup WhatsApp, dan panduan penyelesaian sisa dana yang adil (refund proporsional, donasi ke program berikutnya, atau keduanya sesuai kesepakatan).",
    features: [
      "Rekening kolektif terpisah dari rekening pribadi",
      "Pencatatan berbukti setiap transaksi",
      "Laporan berkala siap bagikan ke grup jamaah",
      "Rekonsiliasi akhir di depan semua anggota",
      "Template spreadsheet & format laporan",
      "Panduan penyelesaian sisa dana yang adil",
    ],
    process: [
      "Rapat awal: kesepakatan sistem & rekening",
      "Pencatatan berjalan dengan template",
      "Laporan berkala ke grup jamaah",
      "Rekonsiliasi akhir & penyelesaian sisa",
    ],
    priceNote: "Rp 500 ribu/setup sistem + pendampingan; template gratis untuk komunitas",
    priceFrom: 500000,
    faqs: [
      {
        q: "Pengurus kami hanya dua orang, perlu sistem semacam ini?",
        a: "Justru grup kecil yang paling perlu — karena di grup kecil, setiap keraguan berhadapan langsung dengan orang yang sama setiap Jumat di masjid. Sistem ini bukan untuk mengawasi pengurus; ia untuk membebaskan pengurus dari keraguan yang tidak pernah terucap. Dua orang pengurus dengan buku terbuka lebih aman daripada lima pengurus dengan catatan di kepala.",
      },
      {
        q: "Sisa dana grup biasanya diapakan?",
        a: "Tiga jalur yang umum: dikembalikan proporsional ke jamaah (yang paling aman), dialihkan ke program umrah berikutnya dengan persetujuan tertulis, atau disedekahkan dengan kesepakatan. Yang tidak boleh: tetap diam di rekening pengurus. Kesepakatannya dibuat di rapat awal, bukan di akhir ketika sudah ada yang bertanya.",
      },
    ],
    keywords: [
      "keuangan grup umrah",
      "buku kas rombongan",
      "transparansi komite umrah",
      "laporan dana jamaah",
    ],
  },
  {
    slug: "konsultasi-perencanaan-dana-umrah",
    name: "Konsultasi Perencanaan Dana Umrah Keluarga",
    categorySlug: "keuangan-syariah",
    shortDesc:
      "Rencana 1–5 tahun untuk keluarga — kapan berangkat, berapa yang disiapkan, dan bagaimana mengaturnya agar keberangkatan tidak membebani masa depan.",
    longDesc:
      "Umrah keluarga bukan keputusan satu musim — ia keputusan keuangan jangka menengah yang melibatkan pendidikan anak, kebutuhan orang tua, dan kestabilan pekerjaan. Konsultasi perencanaan menyusun semua itu dalam satu peta: total kebutuhan yang jujur (paket, perlengkapan, kontingensi, pengeluaran di Tanah Suci), tanggal target yang realistis, skema penyiapan dana (menabung, cicilan, kombinasi), dan — yang sering lupa — pengaruhnya pada kebutuhan finansial lain keluarga.\n\nSesi ini untuk keluarga yang serius tapi belum tahu mulai dari mana: pasangan muda yang menargetkan umrah bersama sebelum punya anak, keluarga yang ingin membawa orang tua tahun depan tapi bingung membiayainya, atau penghasilan yang naik dan ingin mengarahkannya dengan benar. Hasilnya: dokumen rencana yang bisa dibaca ulang setiap tahun — dan ditinjau ulang saat kehidupan berubah, karena rencana yang tidak pernah ditinjau bukanlah rencana.",
    features: [
      "Hitungan kebutuhan jujur per komponen",
      "Tanggal target yang realistis per keluarga",
      "Skema penyiapan dana: menabung, cicilan, kombinasi",
      "Keseimbangan dengan kebutuhan keluarga lain",
      "Dokumen rencana yang ditinjau tiap tahun",
    ],
    process: [
      "Sesi data: penghasilan, kewajiban, target",
      "Susun rencana 1–5 tahun dengan skenario",
      "Diskusi & penyempurnaan bersama keluarga",
      "Dokumen final dikirim & ditinjau tiap tahun",
    ],
    priceNote: "Rp 400 ribu/sesi rencana + tinjauan tahunan gratis",
    priceFrom: 400000,
    faqs: [
      {
        q: "Kapan waktu paling tepat mulai perencanaan?",
        a: "Setiap saat adalah tepat — tapi yang paling berdampak adalah sebelum keputusan besar keuangan lain diambil (membeli kendaraan, cicilan rumah, pendidikan). Umrah yang menyelinap di antara kewajiban yang sudah penuh akan selalu menunda; umrah yang masuk perencanaan dari awal punya tempatnya.",
      },
      {
        q: "Berapa kontingensi yang sebaiknya disiapkan?",
        a: "10–15% dari total rencana adalah angka yang sehat: upgrade yang tidak terduga, pengobatan sela, atau perpanjangan kecil yang timbul di perjalanan. Keluarga yang berangkat tanpa kontingensi biasanya memotong sesuatu yang penting di tengah jalan — atau pulang dengan utang yang tidak direncanakan.",
      },
    ],
    keywords: [
      "perencanaan dana umrah",
      "rencana keuangan umrah keluarga",
      "siapkan dana umrah",
      "umrah keluarga rencana",
    ],
  },
  {
    slug: "buyback-riyal-saat-pulang",
    name: "Buyback Riyal — Kembalikan Sisa SAR Saat Pulang",
    categorySlug: "keuangan-syariah",
    shortDesc:
      "Sisa riyal di dompet pulang dengan kurs yang jujur — dikirim atau diserahterimakan, tanpa menukar di bandara yang selalu paling rugi.",
    longDesc:
      "Setiap jamaah pulang membawa sisa riyal — dan sebagian besar mengakhirinya sampai menjadi koper kecil berisi uang yang tidak dipakai, karena mengembalikannya terasa merepotkan. Buyback menjadikan langkah itu sederhana: foto uang sisa, kirim ke kanal layanan (atau serahkan saat titik temu tertentu), terima rupiah di rekening Anda dengan kurs beli yang lebih jujur daripada bandara.\n\nKami menerima semua pecahan termasuk koin dalam jumlah wajar, dan memeriksa keaslian dengan alat yang benar — uang yang dianggap curang bila terbukti mengikuti prosedurnya, bukan diadili di tempat. Untuk komunitas yang pulang bersama-sama, buyback kolektif tersedia: seluruh sisa SAR grup dikumpulkan dan dikonversi sekaligus dengan kurs volume — kecil, tapi jujur, dan yang paling penting: selesai sebelum uang itu mengendap berbulan-bulan di lemari.",
    features: [
      "Kurs beli yang lebih jujur dari bandara",
      "Semua pecahan; koin dalam jumlah wajar",
      "Kirim lewat kurir atau serah di titik temu",
      "Rupiah dikirim ke rekening Anda",
      "Buyback kolektif grup dengan kurs volume",
    ],
    process: [
      "Foto & hitung sisa SAR Anda",
      "Kirim / serahkan sesuai jalur pilihan",
      "Verifikasi & konversi",
      "Rupiah masuk rekening Anda",
    ],
    priceNote: "Kurs mengikuti pasar harian; tanpa biaya tambahan",
    faqs: [
      {
        q: "Berapa lama proses buyback?",
        a: "Bila uang sampai ke titik penerimaan, konversi dalam 1 hari kerja dan rupiah masuk rekening hari yang sama atau berikutnya. Untuk pengiriman lewat kurir, totalnya mengikuti jangkauan kurirnya — umumnya 2–4 hari dari tanggal kirim.",
      },
      {
        q: "Sisa SAR saya sedikit — Rp 200 ribuan, layak dikirim?",
        a: "Layak — dan memang untuk nominal kecil seperti itu, bandara atau changer lokal bisa cukup praktis. Buyback memberi nilai terbesar di nominal yang lebih besar (SAR 300 ke atas), di uang yang mengendap lama, dan di kolektif grup. Pilih yang paling masuk akal untuk nominal Anda.",
      },
    ],
    keywords: [
      "jual riyal kembali",
      "buyback sar",
      "sisa riyal umrah",
      "tukar uang pulang saudi",
    ],
  },
];


