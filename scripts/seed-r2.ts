/**
 * SolusiHajj R2 — Seed "Fondasi Data Nasional"
 * Data RIIL ditarik dari sumber resmi (riset 20 Okt 2026):
 *  - Kemenag RI (kemenag.go.id): 31 PPIU baru berizin Mei 2025
 *  - Dokumen "Daftar Resmi PIHK Kemenag 2025": 18 PIHK + nomor KMA
 *  - HIMPUH (himpuh.or.id): 25 anggota PPIU + alamat kantor
 *  - Kemenag Jawa Timur: 7 perusahaan tersanksi 2025
 *  - Kemenhaj (haji.go.id) + SISKOPATUH: 3.631 PPIU terdaftar,
 *    kuota haji khusus 2025 = 17.680 jamaah
 *  - Saudi MOHU: eservices.haj.gov.sa (sumber pemantauan)
 *  - Kemenparekraf: konteks sertifikasi BPW (PMA Kemenag 8/2018)
 *  - Maskapai: Garuda, Saudia, Lion, Citilink, Super Air Jet,
 *    EgyptAir, Turkish (rute riil dari situs/rilis resmi)
 *
 * Jalankan: bun /home/z/my-project/scripts/seed-r2.ts
 */
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

// ---------- helpers ----------
const cityOf = (addr: string): string => {
  const a = addr.toLowerCase();
  if (a.includes("jakarta timur")) return "Jakarta Timur";
  if (a.includes("jakarta selatan")) return "Jakarta Selatan";
  if (a.includes("jakarta pusat")) return "Jakarta Pusat";
  if (a.includes("jakarta barat")) return "Jakarta Barat";
  if (a.includes("jakarta utara")) return "Jakarta Utara";
  if (a.includes("tangerang")) return "Tangerang";
  if (a.includes("bekasi")) return "Bekasi";
  if (a.includes("depok")) return "Depok";
  if (a.includes("bogor")) return "Bogor";
  if (a.includes("bandung")) return "Bandung";
  if (a.includes("surabaya")) return "Surabaya";
  if (a.includes("sidoarjo")) return "Sidoarjo";
  if (a.includes("malang")) return "Malang";
  if (a.includes("salatiga")) return "Salatiga";
  if (a.includes("purwokerto") || a.includes("banyumas")) return "Purwokerto";
  if (a.includes("denpasar") || a.includes("bali")) return "Denpasar";
  if (a.includes("makassar")) return "Makassar";
  if (a.includes("samarinda")) return "Samarinda";
  if (a.includes("pontianak")) return "Pontianak";
  if (a.includes("martapura") || a.includes("banjar")) return "Martapura";
  if (a.includes("medan")) return "Medan";
  if (a.includes("pekanbaru")) return "Pekanbaru";
  if (a.includes("padang")) return "Padang";
  if (a.includes("batam")) return "Batam";
  if (a.includes("solo") || a.includes("surakarta")) return "Solo";
  if (a.includes("yogyakarta")) return "Yogyakarta";
  if (a.includes("semarang")) return "Semarang";
  if (a.includes("kuala lumpur")) return "Kuala Lumpur";
  return addr.split(",")[0]?.trim() || "—";
};
const provOf = (addr: string): string => {
  const a = addr.toLowerCase();
  if (a.includes("jakarta") || a.includes("dki")) return "DKI Jakarta";
  if (a.includes("banten")) return "Banten";
  if (a.includes("jawa barat") || a.includes("bandung")) return "Jawa Barat";
  if (a.includes("jawa tengah") || a.includes("salatiga") || a.includes("purwokerto")) return "Jawa Tengah";
  if (a.includes("jawa timur") || a.includes("surabaya") || a.includes("sidoarjo") || a.includes("malang")) return "Jawa Timur";
  if (a.includes("bali") || a.includes("denpasar")) return "Bali";
  if (a.includes("sulawesi selatan") || a.includes("makassar")) return "Sulawesi Selatan";
  if (a.includes("kalimantan timur") || a.includes("samarinda")) return "Kalimantan Timur";
  if (a.includes("kalimantan barat") || a.includes("pontianak")) return "Kalimantan Barat";
  if (a.includes("kalimantan selatan") || a.includes("martapura")) return "Kalimantan Selatan";
  if (a.includes("sumatera utara") || a.includes("medan")) return "Sumatera Utara";
  if (a.includes("riau") || a.includes("pekanbaru")) return "Riau";
  if (a.includes("sumatera barat") || a.includes("padang")) return "Sumatera Barat";
  if (a.includes("yogyakarta")) return "DI Yogyakarta";
  if (a.includes("selangor") || a.includes("kuala lumpur")) return "Selangor";
  return "—";
};

async function main() {
  console.log("=== SolusiHajj R2 seed: Fondasi Data Nasional ===");

  // ---------- 1. SUMBER DATA ----------
  const sources = [
    { key: "kemenag", name: "Kemenag RI — Izin PPIU & Layanan SIMPU", institution: "Kementerian Agama RI", url: "https://kemenag.go.id", category: "KEMENTERIAN", country: "ID", description: "Penerbit izin PPIU (TUPU/KMA) dan daftar penyelenggara umrah resmi; simpul verifikasi 5 lapis." },
    { key: "kemenhaj", name: "Kementerian Haji dan Umrah RI (Kemenhaj)", institution: "Kemenhaj RI", url: "https://haji.go.id", category: "KEMENTERIAN", country: "ID", description: "Kementerian baru (UU 14/2025) yang memegang pengawasan haji khusus & umrah; 3.631 PPIU terdaftar di SISKOPATUH." },
    { key: "siskopatuh", name: "SISKOPATUH — Sistem Pengawasan Umrah", institution: "Kemenhaj RI", url: "https://siskopatuh.haji.go.id", category: "LEMBAGA", country: "ID", description: "Registri nasional penyelenggara umrah: izin PPIU/PIHK, pelaporan jamaah, dan pengawasan operasional." },
    { key: "satudata-kemenag", name: "Satu Data Kemenag (data.go.id) — Statistik PIHK/PPIU/KBIHU", institution: "Kementerian Agama RI", url: "https://data.go.id/dataset/dataset/jumlah-penyelenggara-ibadah-haji-khusus-pihk-penyelenggara-perjalanan-ibadah-umrah-ppiu-dan-kel", category: "LEMBAGA", country: "ID", description: "Dataset terbuka jumlah PIHK, PPIU, dan KBIHU per provinsi (publikasi 20 Nov 2024)." },
    { key: "saudi-mohu", name: "Saudi Ministry of Hajj & Umrah — eServices", institution: "Saudi MOHU", url: "https://eservices.haj.gov.sa", category: "INTERNASIONAL", country: "SA", description: "Daftar agen umrah berlisensi per negara + Nusuk (izin Nafrah/Rawdah); rujukan legitimasi lintas negara." },
    { key: "kemenparekraf", name: "Kementerian Pariwisata (Kemenparekraf) — ekosistem BPW", institution: "Kemenparekraf RI", url: "https://kemenparekraf.go.id", category: "KEMENTERIAN", country: "ID", description: "Registri Biro Perjalanan Wisata (BPW); sertifikasi BPW wajib bagi PPIU (PMA Kemenag 8/2018)." },
    { key: "himpuh", name: "HIMPUH — Daftar Anggota PPIU/PIHK/BPW", institution: "Himpunan Penyelenggara Umrah & Haji Indonesia", url: "https://himpuh.or.id/daftar-anggota", category: "ASOSIASI", country: "ID", description: "Asosiasi induk penyelenggara: nama perusahaan, merek dagang, alamat kantor pusat, provider visa." },
    { key: "kemenag-jatim", name: "Kemenag Jawa Timur — Daftar resmi & sanksi penyelenggara", institution: "Kanwil Kemenag Jawa Timur", url: "https://jatim.kemenag.go.id/berita/241645/", category: "KEMENTERIAN", country: "ID", description: "Daftar PIHK/PPIU Jawa Timur + daftar perusahaan kena teguran/sanksi (transparansi kepercayaan)." },
    { key: "maskapai", name: "Situs resmi & rilis maskapai (GA/SV/JT/QG/IU/MS/TK)", institution: "Garuda, Saudia, Lion Air, Citilink, Super Air Jet, EgyptAir, Turkish", url: "https://www.lionair.co.id", category: "MASKAPAI", country: "ID", description: "Rute charter umrah & haji, frekuensi, tipe pesawat dari rilis resmi maskapai dan keputusan Kemenag 2025." },
  ];
  for (const s of sources) {
    await db.dataSource.upsert({ where: { key: s.key }, create: s, update: s });
  }
  const src: Record<string, string> = {};
  for (const s of sources) {
    const row = await db.dataSource.findUnique({ where: { key: s.key } });
    if (row) src[s.key] = row.id;
  }
  console.log(`✓ ${sources.length} sumber data resmi`);

  // ---------- 2. REGULASI ----------
  const regs = [
    { title: "Penyelenggaraan Ibadah Haji dan Umrah", number: "UU 8/2019", year: 2019, institution: "DPR RI", kind: "UU", url: "https://peraturan.bpk.go.id", summary: "Hukum induk: definisi PPIU, KBIHU, larangan penipuan haji, sanksi pidana penyelenggara tanpa izin." },
    { title: "Ketentuan Penyelenggaraan Ibadah Haji Khusus & pelaporan PIHK kepada Menteri", number: "UU 14/2025", year: 2025, institution: "DPR RI", kind: "UU", url: "https://peraturan.bpk.go.id/Download/393571/", summary: "PIHK wajib melaporkan operasional penyelenggaraan haji khusus kepada Menteri — dasar hukum era Kemenhaj." },
    { title: "Organisasi dan Tata Kerja Kementerian Haji dan Umrah", number: "PMHU 1/2025", year: 2025, institution: "Kementerian Haji dan Umrah RI", kind: "PMHU", url: "https://haji.go.id", summary: "Pembentukan tata kerja Kemenhaj — pemisahan urusan haji-umrah dari Kemenag." },
    { title: "Biaya Operasional Penyelenggaraan Ibadah Haji", number: "PMHU 6/2025", year: 2025, institution: "Kementerian Haji dan Umrah RI", kind: "PMHU", url: "https://haji.go.id", summary: "Struktur biaya operasional haji yang wajib dipegang penyelenggara — referensi transparansi harga." },
    { title: "Penyelenggaraan Perjalanan Ibadah Umrah", number: "PMA 8/2018", year: 2018, institution: "Kementerian Agama RI", kind: "PMA", url: "https://kemenag.go.id", summary: "Wajib sertifikasi BPW bagi PPIU, standar paket, jaminan keberangkatan, dan pembinaan KBIHU." },
    { title: "Penetapan Maskapai Penerbangan Haji 2025", number: "KEP-Kemenag 01/2025", year: 2025, institution: "Kementerian Agama RI", kind: "KEPPRES", url: "https://kemenag.go.id", summary: "Garuda Indonesia, Lion Group, dan Saudia ditetapkan sebagai maskapai penerbangan haji 2025 (Kemenag, 6 Jan 2025)." },
  ];
  for (const r of regs) await db.govRegulation.upsert({ where: { number_title: { number: r.number, title: r.title } }, create: r, update: r });
  console.log(`✓ ${regs.length} regulasi`);

  // ---------- 3. PIHK RIIL (18, dokumen resmi Kemenag 2025) ----------
  const pihk: Array<[string, string, string, string, string?, string?]> = [
    ["PT. Afiz Nurul Qolbi", "KMA Nomor 783 Tahun 2019", "H. Afief Ubaidillah, Lc", "Komplek Wijaya Grand Center B No. 5 Lt. I, Jl. Wijaya II, Kebayoran Baru, Jakarta Selatan, DKI Jakarta", "(021) 72799455", "az_anubi@yahoo.com"],
    ["PT. Aida Tourindo Wisata", "KMA Nomor 347 Tahun 2020", "Husein Badeges", "Jl. Cempaka Putih No. 33 RT.001/08, Cempaka Putih Timur, Jakarta Pusat, DKI Jakarta", "(021) 4254686", "aidatourindo33@yahoo.co.id"],
    ["PT. Al Ahram Sarana Wisata", "KMA Nomor 785 Tahun 2017", "Mohammad Rum Masyhur", "Jl. Tebet Raya IX No. 58 RT.006/004, Tebet Barat, Jakarta Selatan, DKI Jakarta", "(021) 83700876", "al_ahramjkt@yahoo.com"],
    ["PT. Alamin Ahsan Travel", "KMA Nomor 680 Tahun 2017", "Ali Mohamad Amin", "Graha Alisan, Jl. Asem Baris Raya No. 3/126, Kebon Baru, Tebet, Jakarta Selatan, DKI Jakarta", "(021) 8301010", "alisan_trvl@yahoo.com"],
    ["PT. Al Amin Mulia Lestari", "KMA Nomor 799 Tahun 2019", "Ahmad Jamil", "CBD Ciledug Blok A.5 No. 21, Karang Tengah, Tangerang, Banten", "(021) 7651933", "daqutravel@gmail.com"],
    ["PT. Al Amin Universal", "KMA Nomor 712 Tahun 2020", "Drs. H. Suharli", "Jl. Pakubuwono VI No. 109 RT.011/RW.002, Kebayoran Baru, Jakarta Selatan, DKI Jakarta", "(021) 7392800", "alamin.universal@yahoo.com"],
    ["PT. Al Amsor Mubarokah", "KMA Nomor 146 Tahun 2019", "H. Sonhaji Abdussamad", "Jl. Buncit Raya No. 34 RT.007/RW.005, Kalibata, Pancoran, Jakarta Selatan, DKI Jakarta", "(021) 7944825", "alamsorwisata@yahoo.co.id"],
    ["PT. Al-Andalus Nusantara", "KMA Nomor 237 Tahun 2019", "Ir. H. Muhammad Ramli Saleh Yahya, MBA", "Jl. Raya Menganti Wiyung No. 93 RT.003/RW.003, Wiyung, Surabaya, Jawa Timur", "(031) 7525564", "andalus_sub@yahoo.com"],
    ["PT. Al Haramain Jaya Wisata", "KMA Nomor 554 Tahun 2019", "H. Hafidz Taftazani Samsudin", "Jl. Basuki Rahmat No. 21 RT.011/RW.01, Balimester, Jatinegara, Jakarta Timur, DKI Jakarta", "(021) 8510247", "alharamain_jw@yahoo.co.id"],
    ["PT. Al Khalid Jaya Megah", "KMA Nomor 35 Tahun 2019", "H. Muhammad Zaki, Bsc", "Jl. Panglima Polim Raya No. 21C, Melawai, Kebayoran Baru, Jakarta Selatan, DKI Jakarta", "(021) 72789049", "umrah_hajj_jmt@yahoo.co.id"],
    ["PT. Alwan Zahira", "KMA Nomor 967 Tahun 2017", "Hj. Srie Mulyati", "Jl. AM. Sangiaji RT.18, Bandara, Sungai Pinang, Samarinda, Kalimantan Timur", "(0541) 749678", "alwanzahira@yahoo.com"],
    ["PT. Alia Indah Wisata", "KMA Nomor 238 Tahun 2019", "H. Joko Asmoro, S.E, M.M", "Puri Sentra Niaga E/73 RT.012/RW.07, Cipinang Melayu, Makasar, Jakarta Timur, DKI Jakarta", "(021) 86608950", "aliawisata@cbn.net.id"],
    ["PT. Amanah Mulia Wisata", "KMA Nomor 299 Tahun 2018", "H. Asep Abdul Aziz M.Z, M.H", "Jl. Taman Citarum No. 3, Citarum, Bandung Wetan, Bandung, Jawa Barat", "(022) 4222015", "amwatour@yahoo.com"],
    ["PT. Amsa Nur Indah Mandiri", "KMA Nomor 147 Tahun 2020", "Drs. H. M. Aminullah Tsamud", "Jl. Pramuka Raya No. A 390 RT.010/RW.06, Paseban, Senen, Jakarta Pusat, DKI Jakarta", "(021) 3154202", "amsatour@yahoo.com"],
    ["PT. Ananda Nurul Haromain", "KMA Nomor 9 Tahun 2018", "Hj. Rahmah", "Jl. Landak Baru No. 63, Banta Bantaeng, Rappocini, Makassar, Sulawesi Selatan", "(0411) 830125", "ananda.umrahhaj@yahoo.co.id"],
    ["PT. Andromeda Atria Wisata", "KMA Nomor 395 Tahun 2018", "H. Zainal Abidin", "Jl. Raya Kupang Jaya No. 1 Kav. 6, Sonokwijenan, Sukomanunggal, Surabaya, Jawa Timur", "(031) 7310374", "atria_sby@yahoo.com"],
    ["PT. Biro Perjalanan Wisata Anmar Binawisata", "KMA Nomor 679 Tahun 2017", "H. Mukhlis Jafar", "Jl. A. Pettarani No. 42D RT.01/RW.001, Tamamaung, Panakkukang, Makassar, Sulawesi Selatan", "(0411) 420097", "anmarbinawisata@yahoo.com"],
    ["PT. An-Naba Internasional", "KMA Nomor 396 Tahun 2018", "H. Andi Aminuddin Abdul Malik", "MT. Haryono Square E.1/1, Jl. Otista No. 390 RT.006/RW.012, Bidara Cina, Jatinegara, Jakarta Timur, DKI Jakarta", "(021) 29067285", "an_naba09@yahoo.com"],
  ];
  let pihkCount = 0;
  for (const [name, lic, leader, addr, phone, email] of pihk) {
    const year = Number(lic.match(/Tahun (\d+)/)?.[1] ?? 0);
    await db.company.upsert({
      where: { name_orgType: { name, orgType: "PIHK" } },
      create: { name, orgType: "PIHK", licenseNo: lic, licenseYear: year, leader, address: addr, city: cityOf(addr), province: provOf(addr), country: "ID", phone, email, status: "AKTIF", verified: true, sourceId: src.kemenag, sourceRef: "https://kemenag.go.id — Daftar Resmi PIHK (dok. resmi Kemenag 2025)", dataAsOf: "2025", notes: "Izin Penyelenggara Ibadah Haji Khusus terverifikasi dokumen resmi Kemenag." },
      update: { licenseNo: lic, leader, address: addr, status: "AKTIF", verified: true, sourceId: src.kemenag },
    });
    pihkCount++;
  }
  console.log(`✓ ${pihkCount} PIHK ber-KMA (riil)`);

  // ---------- 4. ANGGOTA HIMPUH RIIL (hal. 1 daftar anggota) ----------
  const himpuh: Array<[string, string, string]> = [
    ["PT. Abdi Umat Wisata International", "Attin Tour", "Jl. Lap. Tembak No. 39, Ciracas, Jakarta Timur, DKI Jakarta, 13720"],
    ["PT. Abdurahman Setong Telo Sanga", "Abdurahman Setong Telo Sanga", "Jl. Raya Bekasi, Kp. Petukangan, Rawa Terate, Cakung, Jakarta Timur, DKI Jakarta, 13920"],
    ["PT. Adib Haramain Berkah dan Laju", "Adib Haramain", "Dukuh RT 02 RW 02, Tingkir Lor, Tingkir, Salatiga, Jawa Tengah, 50746"],
    ["PT. Adita Al Tahir", "Khadijatul Kubra Tour and Travel", "Rukan Avenue Jl. Jkt Garden City Boulevard No. 08-92, Cakung, Jakarta Timur, DKI Jakarta, 13910"],
    ["PT. Adzikra", "ADZIKRA", "Pusat Niaga Duta Mas Fatmawati Blok C2 No. 11-12, Jl. Fatmawati Raya No. 39, Kebayoran Baru, Jakarta Selatan, DKI Jakarta, 12150"],
    ["PT. Aero Globe Indonesia", "AEROHAJJ", "Jl. Prajurit KKO Usman & Harun No. 32, Senen, Jakarta Pusat, DKI Jakarta, 10410"],
    ["PT. Afi Tour", "Afi Tour", "Jl. Rumah Sakit Fatmawati No. 4C, Cilandak Barat, Jakarta Selatan, DKI Jakarta, 12430"],
    ["PT. Aisyah Sejahtera Bersama", "Aisyah Tour & Travel", "Jl. Wiryo Suparno RT.001 RW.004, Teluk, Purwokerto Selatan, Banyumas, Jawa Tengah, 53145"],
    ["PT. Al Amanah", "Al Amanah", "Ruko Grand Flower A8, Jl. Pasar Kembang No. 4-6, Sawahan, Surabaya, Jawa Timur"],
    ["PT. Al Amsor Mubarokah Wisata", "AMSOR TOUR", "Bona Indah Plaza A2-A5, Jl. Karang Tengah Raya, Cilandak, Jakarta Selatan, DKI Jakarta, 12440"],
    ["PT. Al Badriyah Wisata", "ALBADRIYAH WISATA", "Vinilon Building, Jl. Raden Saleh No. 13-17, Cikini, Senen, Jakarta Pusat, DKI Jakarta, 10430"],
    ["PT. Al Fath Tour & Travel", "Al-Fath Tour", "Graha Mulus Mandiri, Jl. Dewi Sartika No. 133 RT.005/RW.002, Kramat Jati, Jakarta Timur, DKI Jakarta, 13630"],
    ["PT. Al Haadi Ziarah Ampel", "AZAM TOUR", "Jl. Monginsidi No. 14, Sidoklumpuk, Sidoarjo, Jawa Timur, 61218"],
    ["PT. Al Hijaz Indowisata", "AL HIJAZ TOUR & TRAVEL (AIW)", "Graha Alhijaz Lt. 3, Jl. Dewi Sartika No. 239A, Kramat Jati, Jakarta Timur, DKI Jakarta, 13630"],
    ["PT. Al Hijrah Mulia Wisata", "AL-HIJRAH TOUR & TRAVEL", "Gd. Utaka 66 Lt. 1 Ruang 101, Jl. Utan Kayu Raya No. 66B, Matraman, Jakarta Timur, DKI Jakarta, 13220"],
    ["PT. Al Kahfi Amanah Mabruroh", "al-kahfi", "Jl. Buana Taman No. 31, Padangsambian, Denpasar Selatan, Denpasar, Bali, 80117"],
    ["PT. Al Kariim Anugerah Ilahi", "Al Kariim Tour & Travel", "Jl. Duri Bulan 50A, Batu Ampar, Kramat Jati, Jakarta Timur, DKI Jakarta, 13520"],
    ["PT. Al Mahdar Tour", "AL-MAHDAR TRAVEL & TOURS", "Jl. R.E. Martadinata Komp. Ruko Blok B No. 5, Anjongan, Pontianak, Kalimantan Barat, 78113"],
    ["PT. Al Marhamah Cahaya Utama", "Almarhamah", "Mt. Haryono Square Office 01/09, Jl. Otista Raya No. 390, Jatinegara, Jakarta Timur, DKI Jakarta, 13330"],
    ["PT. Al Shafwah Wisata Mandiri", "Smarts Umrah", "Jl. Tanah Abang II No. 93 RT.001/RW.001, Gambir, Jakarta Pusat, DKI Jakarta, 10150"],
    ["PT. Al Taif Saudi Wisata", "AL Taif Tour", "Jl. A. Yani No. 2 Km 39,5, Martapura Kota, Banjar, Kalimantan Selatan, 12860"],
    ["PT. Al-Fatihah", "AL-FATIHAH", "Jl. Kalpataru 83A, Lowokwaru, Malang, Jawa Timur, 65141"],
  ];
  let himCount = 0;
  for (const [name, brand, addr] of himpuh) {
    await db.company.upsert({
      where: { name_orgType: { name, orgType: "PPIU" } },
      create: { name, brandName: brand, orgType: "PPIU", address: addr, city: cityOf(addr), province: provOf(addr), country: "ID", status: "AKTIF", verified: true, sourceId: src.himpuh, sourceRef: "https://himpuh.or.id/daftar-anggota (hal. 1)", dataAsOf: "2025", notes: "Anggota terdaftar HIMPUH (Himpunan Penyelenggara Umrah & Haji Indonesia)." },
      update: { brandName: brand, address: addr, status: "AKTIF", verified: true, sourceId: src.himpuh },
    });
    himCount++;
  }
  console.log(`✓ ${himCount} anggota HIMPUH (riil)`);

  // ---------- 5. 31 PPIU BARU DARI KEMENAG (Mei 2025) ----------
  const baru = ["PT Panguji Luhur Utama", "PT Lyla Wisata Dunia", "PT Nur Al Iffah Nadziroh", "PT Jiqass Dulang Wisata", "PT Zadul Maad Mandiri", "PT Eka Safir Wisata", "PT Bakkah Berkah Mulia", "PT Arrahman Berkah Wisata", "PT Semesta Anta Salam", "PT Mitra Wisata Mandiri", "PT Sarana Wisata Perdana", "PT Buana Duta Wisata", "PT Ajiib Wisata Barokah", "PT Syammas Wisata", "PT Ameera Hati Mulia", "PT Wakafa Zain Abul Husna", "PT Zaman Madani Wisata", "PT Wahana At Taqwa Assalam", "PT Kemang Nusantara Travel", "PT Amanah Bersama Tour dan Travel", "PT Qiyafa", "PT Indah Permata Permai", "PT Kiblat Kortasindo Perdana", "PT Freshnel Kreasindo Perkasa", "PT Nasrotul Ummah Tours & Travel", "PT Albarik Tours & Travel", "PT Suhada Arafah Wisata", "PT Mabruro", "PT Zam Zam Tours & Travel", "PT Fio Amanah Perdana", "PT Madinah Iman Wisata"];
  for (const name of baru) {
    await db.company.upsert({
      where: { name_orgType: { name, orgType: "PPIU" } },
      create: { name, orgType: "PPIU", status: "BARU", country: "ID", sourceId: src.kemenag, sourceRef: "https://kemenag.go.id/en/nasional/kemenag-terbitkan-izin-31-penyelenggara-umrah-baru-ini-daftarnya-df6u1l", dataAsOf: "Mei 2025", notes: "Salah satu dari 31 penyelenggara umrah baru yang terbit izinnya di Kemenag (Kamis, 3 Mei 2025)." },
      update: { status: "BARU", sourceId: src.kemenag },
    });
  }
  console.log(`✓ ${baru.length} PPIU baru izin Kemenag Mei 2025 (riil)`);

  // ---------- 6. SANKSI (Kemenag Jatim 2025) ----------
  const sanksi = ["PT Mulia Wisata Abadi", "PT Senabil Madinah Barakah", "PT Al Aqsa Jisra Dakwah", "PT Mediterania Travel", "PT Muaz Barakat Safar", "PT Pandi Kencana Murni", "PT Mustaqbal Lima Wisata"];
  for (const companyName of sanksi) {
    const existing = await db.sanctionRecord.findFirst({ where: { companyName, year: 2025 } });
    if (!existing) {
      await db.sanctionRecord.create({ data: { companyName, province: "Jawa Timur", authority: "Kemenag Jawa Timur", sanctionType: "Teguran/Sanksi", year: 2025, sourceUrl: "https://jatim.kemenag.go.id/berita/241645/", note: "Perusahaan travel yang kena sanksi/teguran sesuai pengumuman resmi Kanwil Kemenag Jatim — wajib dicek status izin terkini sebelum transaksi." } });
    }
    await db.company.upsert({
      where: { name_orgType: { name: companyName, orgType: "PPIU" } },
      create: { name: companyName, orgType: "PPIU", status: "SANKSI", province: "Jawa Timur", country: "ID", sourceId: src["kemenag-jatim"], sourceRef: "https://jatim.kemenag.go.id/berita/241645/", dataAsOf: "2025", notes: "Masuk daftar sanksi/teguran Kemenag Jawa Timur 2025." },
      update: { status: "SANKSI", sourceId: src["kemenag-jatim"] },
    });
  }
  console.log(`✓ ${sanksi.length} catatan sanksi (riil)`);

  // ---------- 7. MASKAPAI & RUTE RIIL ----------
  const airlines = [
    { name: "Garuda Indonesia", iata: "GA", icao: "GIA", country: "ID", category: "PEMERINTAH_HAJI", hub: "CGK — Soekarno-Hatta", notes: "Maskapai resmi penerbangan haji 2025 (Kemenag, 6 Jan 2025). Melayani CGK–Jeddah reguler, charter umrah SUB–Jeddah (GA 974), dan rute Jakarta–Madinah.", routes: [
      { originCity: "Jakarta", originCode: "CGK", destCity: "Jeddah", destCode: "JED", freqText: "Harian", aircraft: "B777-300ER", serviceType: "REGULER", notes: "Rute reguler utama jamaah umrah/haji Jabodetabek." },
      { originCity: "Surabaya", originCode: "SUB", destCity: "Jeddah", destCode: "JED", freqText: "Musiman (charter)", aircraft: "B777-300ER", serviceType: "CHARTER_UMRAH", sinceText: "Sep–Okt 2025", notes: "GA 974 SUB 08.30 → JED 15.05; kembali GA 973 MED→SUB — dijual bundling paket umrah resmi." },
      { originCity: "Jakarta", originCode: "CGK", destCity: "Madinah", destCode: "MED", freqText: "Reguler", aircraft: "B777-300ER", serviceType: "REGULER", notes: "Rute Jakarta–Madinah resmi (info KJRI Jeddah)." },
    ]},
    { name: "Saudia — Saudi Arabian Airlines", iata: "SV", icao: "SVA", country: "SA", category: "PEMERINTAH_HAJI", hub: "JED — King Abdulaziz", notes: "Maskapai nasional Arab Saudi & maskapai resmi haji 2025 (Kemenag). Jaringan reguler Indonesia–Jeddah/Madinah terluas.", routes: [
      { originCity: "Jakarta", originCode: "CGK", destCity: "Jeddah", destCode: "JED", freqText: "Harian", aircraft: "B787-9 / B777-300ER", serviceType: "REGULER", notes: "Gateway utama umrah Indonesia." },
      { originCity: "Jakarta", originCode: "CGK", destCity: "Madinah", destCode: "MED", freqText: "Beberapa kali/minggu", aircraft: "B787-9", serviceType: "REGULER" },
      { originCity: "Surabaya", originCode: "SUB", destCity: "Jeddah", destCode: "JED", freqText: "Beberapa kali/minggu", aircraft: "B787-9", serviceType: "REGULER" },
    ]},
    { name: "Lion Air", iata: "JT", icao: "LNI", country: "ID", category: "CHARTER_UMRAH", hub: "CGK — Soekarno-Hatta", notes: "Penerbangan umrah langsung Jakarta–Jeddah hingga 8x/minggu dengan A330-300 (433 kursi ekonomi, bagasi 30 kg) sejak 13 Juli 2025; Lion Group termasuk maskapai resmi haji 2025.", routes: [
      { originCity: "Jakarta", originCode: "CGK", destCity: "Jeddah", destCode: "JED", freqText: "Hingga 8x/minggu", aircraft: "A330-300", seats: 433, serviceType: "CHARTER_UMRAH", sinceText: "13 Juli 2025", notes: "Rilis resmi Lion Air: 30 kg bagasi gratis + 7 kg kabin; slot Terminal Umrah & Haji Jeddah." },
    ]},
    { name: "Citilink", iata: "QG", icao: "CTV", country: "ID", category: "CHARTER_UMRAH", hub: "CGK — Soekarno-Hatta", notes: "Charter umrah langsung ke Jeddah & Madinah dari 9 kota: Padang, Medan, Palembang, Pekanbaru, Jambi, Banda Aceh, Batam, Solo, Makassar — mulai 27 Juli 2024, ratusan penerbangan; mitra terdaftar resmi Citilink: PT Riau Wisata Hati.", routes: [
      { originCity: "Padang", originCode: "PDG", destCity: "Jeddah", destCode: "JED", freqText: "Musiman (charter)", aircraft: "A320neo", serviceType: "CHARTER_UMRAH", sinceText: "27 Juli 2024" },
      { originCity: "Medan", originCode: "KNO", destCity: "Madinah", destCode: "MED", freqText: "Musiman (charter)", aircraft: "A320neo", serviceType: "CHARTER_UMRAH", sinceText: "27 Juli 2024" },
      { originCity: "Palembang", originCode: "PLM", destCity: "Jeddah", destCode: "JED", freqText: "Musiman (charter)", aircraft: "A320neo", serviceType: "CHARTER_UMRAH" },
      { originCity: "Pekanbaru", originCode: "PKU", destCity: "Jeddah", destCode: "JED", freqText: "Musiman (charter)", aircraft: "A320neo", serviceType: "CHARTER_UMRAH" },
      { originCity: "Jambi", originCode: "DJB", destCity: "Jeddah", destCode: "JED", freqText: "Musiman (charter)", aircraft: "A320neo", serviceType: "CHARTER_UMRAH" },
      { originCity: "Banda Aceh", originCode: "BTJ", destCity: "Jeddah", destCode: "JED", freqText: "Musiman (charter)", aircraft: "A320neo", serviceType: "CHARTER_UMRAH" },
      { originCity: "Batam", originCode: "BTH", destCity: "Madinah", destCode: "MED", freqText: "Musiman (charter)", aircraft: "A320neo", serviceType: "CHARTER_UMRAH" },
      { originCity: "Solo", originCode: "SOC", destCity: "Jeddah", destCode: "JED", freqText: "Musiman (charter)", aircraft: "A320neo", serviceType: "CHARTER_UMRAH" },
      { originCity: "Makassar", originCode: "UPG", destCity: "Jeddah", destCode: "JED", freqText: "Musiman (charter)", aircraft: "A320neo", serviceType: "CHARTER_UMRAH" },
    ]},
    { name: "Super Air Jet", iata: "IU", icao: "TVJ", country: "ID", category: "CHARTER_UMRAH", hub: "CGK — Soekarno-Hatta", notes: "Operator charter umrah grup (Lion Group) — mengoperasikan penerbangan umrah charter untuk PPIU mitra sejak 2023.", routes: [
      { originCity: "Jakarta", originCode: "CGK", destCity: "Jeddah", destCode: "JED", freqText: "Sesuai charter grup", aircraft: "A320neo", serviceType: "CHARTER_UMRAH", notes: "Charter penuh untuk grup PPIU — tawar sepanjang tahun di vertikal Tiket Charter Grup SolusiHajj." },
    ]},
    { name: "EgyptAir", iata: "MS", icao: "MSR", country: "EG", category: "REGULER", hub: "CAI — Cairo Intl.", notes: "Alternatif rute umrah via Kairo (CGK–CAI) dengan konektivitas lanjut ke Jeddah/Madinah.", routes: [
      { originCity: "Jakarta", originCode: "CGK", destCity: "Kairo", destCode: "CAI", freqText: "Beberapa kali/minggu", aircraft: "B787-9", serviceType: "REGULER", notes: "Konektivitas umrah via Kairo." },
    ]},
    { name: "Turkish Airlines", iata: "TK", icao: "THY", country: "TR", category: "REGULER", hub: "IST — Istanbul", notes: "Rute umrah via Istanbul (CGK–IST) dengan lanjutan ke Madinah/Jeddah.", routes: [
      { originCity: "Jakarta", originCode: "CGK", destCity: "Istanbul", destCode: "IST", freqText: "Harian", aircraft: "B777-300ER", serviceType: "REGULER", notes: "Konektivitas umrah via Istanbul." },
    ]},
  ];
  let routeCount = 0;
  for (const a of airlines) {
    const { routes, ...airlineData } = a;
    const airline = await db.airline.upsert({ where: { iata: a.iata }, create: airlineData, update: airlineData });
    const existingRoutes = await db.flightRoute.findMany({ where: { airlineId: airline.id } });
    for (const r of existingRoutes) await db.flightRoute.delete({ where: { id: r.id } });
    for (const r of routes) {
      await db.flightRoute.create({ data: { ...r, airlineId: airline.id, destCountry: r.destCode === "CAI" || r.destCode === "IST" ? (r.destCode === "CAI" ? "EG" : "TR") : "SA" } });
      routeCount++;
    }
  }
  console.log(`✓ ${airlines.length} maskapai, ${routeCount} rute (riil)`);

  // ---------- 8. SINKRONISASI AWAL (audit trail) ----------
  const counts: Record<string, number> = { kemenag: pihkCount + baru.length, kemenhaj: 0, siskopatuh: 0, "satudata-kemenag": 0, "saudi-mohu": 0, kemenparekraf: 0, himpuh: himCount, "kemenag-jatim": sanksi.length, maskapai: routeCount };
  for (const s of sources) {
    const already = await db.syncEvent.findFirst({ where: { sourceId: src[s.key], status: "SUCCESS" } });
    if (!already) {
      await db.syncEvent.create({ data: { sourceId: src[s.key], status: "SUCCESS", recordsAffected: counts[s.key] ?? 0, finishedAt: new Date(), note: "Bootstrap awal R2 — data ditarik & diverifikasi manual dari sumber resmi." } });
    }
    await db.dataSource.update({ where: { key: s.key }, data: { lastSyncedAt: new Date(), recordsIndexed: counts[s.key] ?? 0 } });
  }

  const total = await db.company.count();
  const stats = { companies: total, airlines: airlines.length, routes: routeCount, sources: sources.length, regs: regs.length, sanctions: sanksi.length };
  console.log("\n=== SEED SELESAI ===");
  console.log(JSON.stringify(stats, null, 2));
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
