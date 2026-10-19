import type { Review } from "./types";

/**
 * Saksi Jamaah (dok 03 FR-5xx): review HANYA dari booking selesai.
 * ⚠️ DATA DEMO R1 — review asli mengalir otomatis di R2 (review-gating).
 */
export const reviewList: Review[] = [
  {
    id: "rv-001",
    packageSlug: "umrah-reguler-9-hari-amanah-barokah",
    ppiuSlug: "amanah-barokah-wisata",
    name: "Hj. Siti Maryam",
    city: "Jakarta",
    returnedAt: "2025-12-02",
    rating: 5,
    dimensions: { kejujuran: 5, mutawif: 5, hotel: 5, makanan: 4, bus: 5, handling: 5 },
    text: "Awalnya ragu karena pernah ditipu travel nakal tahun 2019. Tapi di sini izinnya kelihatan, bayar lewat escrow, dan ternyata semua sesuai janji. Hotel benar-benar 300 meter — saya bisa shalat di Haram 5 kali sehari tanpa capek. Mutawif Ust. Fauzi sabar sekali dengan ibu-ibu yang banyak tanya.",
    ppiuReply: "Terima kasih, Ibu Maryam. Merupakan amanah kami menemani ibadah Ibu sekeluarga. Semoga diterima ibadahnya.",
  },
  {
    id: "rv-002",
    packageSlug: "umrah-reguler-9-hari-amanah-barokah",
    ppiuSlug: "amanah-barokah-wisata",
    name: "Bpk. Andi Wijaya",
    city: "Tangerang",
    returnedAt: "2025-11-18",
    rating: 4.5,
    dimensions: { kejujuran: 5, mutawif: 4, hotel: 4, makanan: 4, bus: 5, handling: 5 },
    text: "Ketepatan berangkat juara — briefing akurat, tidak ada jam bolong. Makanan buffet enak tapi kadang kurang pedas untuk lidah Betawi. Handling bandara Jeddah cepat, tidak menunggu lama seperti cerita teman di travel lain.",
  },
  {
    id: "rv-003",
    packageSlug: "umrah-ramadhan-10-hari-nur-hidayah",
    ppiuSlug: "nur-hidayah-utama",
    name: "H. Dedi Mulyadi",
    city: "Bandung",
    returnedAt: "2025-03-21",
    rating: 5,
    dimensions: { kejujuran: 5, mutawif: 5, hotel: 5, makanan: 5, bus: 4, handling: 5 },
    text: "Malam ganjil di Haram dengan hotel 100 meter — istirahat cukup, ibadah maksimal. Berbuka buffet Swissotel luar biasa. Anak saya yang kuliah ikut serta dan sampai sekarang masih cerita-cerita. Worth every rupiah.",
    ppiuReply: "Alhamdulillah, Pak Dedi. Terima kasih sudah mempercayakan momen paling berharga di Ramadhan kepada kami.",
  },
  {
    id: "rv-004",
    packageSlug: "umrah-hemat-9-hari-baitul-karim",
    ppiuSlug: "baitul-karim-tour",
    name: "Ibu Retno Wulandari",
    city: "Yogyakarta",
    returnedAt: "2025-10-06",
    rating: 4.5,
    dimensions: { kejujuran: 5, mutawif: 4, hotel: 4, makanan: 5, bus: 4, handling: 4 },
    text: "Sebagai pensiunan guru, budget saya terbatas. Paket hemat ini jujur: hotel memang 800 meter (dijelaskan sejak awal, tidak dibungkus), tapi nyaman dan bersih. Jadwal longgar cocok untuk usia 60+. Makanan homestyle Jogja, bisa nambah.",
  },
  {
    id: "rv-005",
    packageSlug: "umrah-bersama-orang-tua-10-hari-zamzam",
    ppiuSlug: "zamzam-insani-perkasa",
    name: "Rina Kartika",
    city: "Semarang",
    returnedAt: "2025-09-12",
    rating: 5,
    dimensions: { kejujuran: 5, mutawif: 5, hotel: 5, makanan: 4, bus: 5, handling: 5 },
    text: "Saya umrahkan ayah-ibu (74 & 70 thn). Program pendampingannya nyata: dua jamaah senior satu pendamping, kursi roda siap, dan setiap hari saya di Semarang dapat update foto di grup WA. Saat ayah demam di Madinah, tim medis langsung datang ke hotel. Terima kasih Zamzam Insani.",
    ppiuReply: "Kabar ayah-ibu adalah prioritas kami. Semoga kesehatan ayah & ibu terjaga, dan semoga ada kesempatan kedua.",
  },
  {
    id: "rv-006",
    packageSlug: "umrah-reguler-9-hari-safar-suci",
    ppiuSlug: "safar-suci-nusantara",
    name: "H. Muhammad Ridwan",
    city: "Surabaya",
    returnedAt: "2025-11-30",
    rating: 4.5,
    dimensions: { kejujuran: 5, mutawif: 5, hotel: 4, makanan: 4, bus: 4, handling: 5 },
    text: "Grup kecil 38 orang terasa beda: tidak antre lama, mutawif hafal nama semua jamaah, dan manasik pra-berangkat 4 sesi membuat saya paham makna setiap rangkaian. Hotel bagus, meski jaraknya bukan yang terdekat.",
  },
  {
    id: "rv-007",
    packageSlug: "umrah-plus-turki-12-hari-rahmatan",
    ppiuSlug: "rahmatan-lil-alamin",
    name: "Dr. Farah Nabila",
    city: "Jakarta",
    returnedAt: "2025-10-19",
    rating: 4.5,
    dimensions: { kejujuran: 5, mutawif: 4, hotel: 4, makanan: 5, bus: 4, handling: 5 },
    text: "Satu grup satu pesawat benar-benar mengurangi drama: dari Jakarta sampai Istanbul tidak ada yang tercecer. Tour leader Turki fasih, makanan halal tersertifikasi. Hibah Blue Mosque maghrib waktu — menangis.",
  },
  {
    id: "rv-008",
    packageSlug: "umrah-9-hari-hidayah-sumatera",
    ppiuSlug: "hidayah-sumatera-tour",
    name: "Bpk. Juanda Harahap",
    city: "Medan",
    returnedAt: "2025-08-25",
    rating: 4,
    dimensions: { kejujuran: 4, mutawif: 4, hotel: 4, makanan: 5, bus: 4, handling: 4 },
    text: "Penerbangan langsung Medan–Jeddah menghemat banyak tenaga untuk orang tua saya. Menu Melayu-Deli seperti balao, ayam gulai — cocok untuk lidah Batak-Muslim. Kamar hotel standar tapi bersih.",
  },
  {
    id: "rv-009",
    packageSlug: "umrah-ramadhan-awal-12-hari-nur-hidayah",
    ppiuSlug: "nur-hidayah-utama",
    name: "Hj. Nurlela Siregar",
    city: "Bekasi",
    returnedAt: "2025-03-14",
    rating: 5,
    dimensions: { kejujuran: 5, mutawif: 5, hotel: 5, makanan: 5, bus: 4, handling: 5 },
    text: "Ketiga kalinya umrah, pertama kali se-TARAWIH-nya di depan Ka'bah setiap malam. Hotel Al Shohada benar-benar 60 meter. Sepanjang 12 hari tidak ada satu pun biaya tambahan yang tiba-tiba ditagih — semua sesuai rincian di kontrak.",
  },
];

export function reviewsOfPackage(slug: string): Review[] {
  return reviewList.filter((r) => r.packageSlug === slug);
}

export function reviewsOfPpiu(slug: string): Review[] {
  return reviewList.filter((r) => r.ppiuSlug === slug);
}
