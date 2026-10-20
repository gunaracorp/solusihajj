import type { FaqItem } from "./types";

export const faqList: FaqItem[] = [
  {
    q: "Apakah SolusiHajj menyelenggarakan perjalanan umrah?",
    a: "Tidak. SolusiHajj adalah platform teknologi yang mempertemukan jamaah dengan PPIU (Penyelia Perjalanan Ibadah Umrah) berizin resmi Kemenag. Kontrak perjalanan dibuat langsung antara Anda dan PPIU. Peran kami adalah memverifikasi keabsahan PPIU, melindungi dana lewat escrow, dan mendokumentasikan review nyata — bukan menjalankan travel.",
    category: "umum",
  },
  {
    q: "Apa itu Verifikasi 5 Lapis dan mengapa penting?",
    a: "Setiap PPIU di SolusiHajj melewati lima lapis pemeriksaan: (1) cek izin resmi Kemenag, (2) audit kantor fisik, (3) verifikasi legalitas perusahaan & rekening, (4) pengecekan track record dari jamaah sebelumnya, dan (5) pemantauan berkelanjutan tiap kuartal. Ini menjawab masalah terbesar jamaah: sulit membedakan travel berizin dan penipuan berkedok travel.",
    category: "verifikasi",
  },
  {
    q: "Bagaimana cara mengecek izin PPIU sendiri?",
    a: "Buka halaman Cek Izin PPIU, ketik nama travel atau nomor izinnya, dan sistem akan menampilkan status dari basis data kami beserta tanggal verifikasi. Untuk verifikasi hukum penuh, setiap hasil juga menautkan ke kanal resmi Kemenag (SIMPU) yang bisa Anda buka langsung. Sebaiknya cek izin SEBELUM transfer uang sepeser pun ke travel mana pun.",
    category: "verifikasi",
  },
  {
    q: "Bagaimana AmanahEscrow melindungi dana saya?",
    a: "Saat Anda memutuskan booking, dana tidak masuk rekening PPIU maupun SolusiHajj — melainkan ke rekening escrow di bank syariah mitra. Dana baru dirilis ke PPIU secara bertahap (40%/40%/20%) sesuai progres perjalanan yang terkonfirmasi: tiba di Makkah, ibadah berjalan sesuai itinerary, dan Anda pulang dengan selamat. Jika perjalanan bermasalah sebelum berangkat, dana kembali 100%.",
    category: "escrow",
  },
  {
    q: "Berapa komisi yang dibayar PPIU ke SolusiHajj?",
    a: "PPIU membayar komisi 4–6% dari nilai transaksi yang BERHASIL (dana escrow cair) plus langganan opsional untuk fitur promosi. Kami sengaja membebankan biaya pada PPIU, bukan jamaah, agar harga yang Anda lihat adalah harga wajarnya. PPIU terpercaya tidak keberatan — mereka justru memakai verifikasi kami sebagai keunggulan bersaing.",
    category: "umum",
  },
  {
    q: "Apakah review di SolusiHajj bisa dipalsukan?",
    a: "Tidak. Sistem Saksi Jamaah hanya membuka form review untuk akun yang memiliki booking dengan status 'selesai' (sudah pulang). Review tanpa perjalanan nyata tidak bisa masuk. Kami juga menampilkan tanggal pulang pada setiap review, sehingga Anda bisa menilai konteksnya sendiri.",
    category: "verifikasi",
  },
  {
    q: "Kalau saya membatalkan booking, apakah dana saya hilang?",
    a: "Tidak hilang. Dana di escrow mengikuti skema refund kontrak PPIU yang tercantum transparan di setiap halaman paket (umumnya 100% refund jika lebih dari H-30, bertahap menjelang keberangkatan). Selama dana belum dirilis ke PPIU, klaim refund Anda tetap terlindungi di rekening escrow.",
    category: "pembatalan",
  },
  {
    q: "Apa itu Hafizh Track?",
    a: "Hafizh Track adalah fitur pendampingan digital (rilis pada fase R3): keluarga di Indonesia bisa menerima undangan untuk melihat status perjalanan jamaah — e-itinerary, notifikasi 'Aman tiba' di titik penting, dan tombol SOS 24 jam. Mengikuti prinsip privasi, tracking bersifat opt-in dan lokasi hanya disimpan 30 hari sesuai UU PDP No. 27/2022.",
    category: "umum",
  },
  {
    q: "Berapa biaya umrah yang wajar saat ini?",
    a: "Per awal 2026, paket umrah reguler 9 hari dari Indonesia umumnya Rp 28–38 juta per orang (quad share), umrah Ramadhan Rp 45–65 juta, dan umrah plus (Turki/Dubai) Rp 39–50 juta. Harga jauh di bawah rentang itu patut dicurigai — biasanya hotel diganti di menit terakhir atau jadwal dipotong. Gunakan Kalkulator Simpanan Haji kami untuk merencanakan dana.",
    category: "umum",
  },
  {
    q: "Saya pemilik PPIU, bagaimana cara menjadi partner?",
    a: "Kami menyambut PPIU berizin yang siap menjalani Verifikasi 5 Lapis. Prosesnya: kirim data izin & legalitas, tim kami mengaudit kantor, referensi jamaah dicek, lalu profil dan paket Anda tayang dengan badge verifikasi. Hubungi kami melalui WhatsApp dengan pesan 'PPIU Partner' — tim onboarding akan menjelaskan skema komisi 4–6% dan langganan opsional.",
    category: "umum",
  },
];

export const homepageFaq = faqList.slice(0, 6);
