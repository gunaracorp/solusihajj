import type { Metadata } from "next";
import { SITE, JsonLd, breadcrumbJsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/seo/pkg-ui";

export const metadata: Metadata = {
  title: "Kebijakan Privasi — Perlindungan Data Pribadi Jamaah",
  description:
    "Bagaimana SolusiHajj mengumpulkan, memakai, dan melindungi data pribadi Anda sesuai UU Perlindungan Data Pribadi No. 27 Tahun 2022 — bahasa yang bisa dipahami jamaah.",
  alternates: { canonical: `${SITE}/kebijakan-privasi` },
};

const SECTIONS = [
  {
    h: "Ringkasan dalam Satu Paragraf",
    p: [
      "SolusiHajj hanya mengumpulkan data yang diperlukan untuk menjalankan layanan marketplace: identitas untuk pemesanan, kontak untuk komunikasi, dan data transaksi untuk escrow. Kami tidak menjual data Anda, tidak membagikannya ke pihak yang tidak terlibat perjalanan Anda, dan memberi Anda akses untuk melihat, memperbaiki, atau menghapus data tersebut.",
    ],
  },
  {
    h: "Dasar Hukum",
    p: [
      "Pemrosesan data pribadi di SolusiHajj mengikuti Undang-Undang Perlindungan Data Pribadi No. 27 Tahun 2022 (UU PDP). Dasar pemrosesan kami: pelaksanaan kontrak (saat Anda memesan paket), kepentingan yang sah (pencegahan penipuan), persetujuan (newsletter, cookie non-esensial), dan kewajiban hukum (pelaporan yang diwajibkan peraturan).",
    ],
  },
  {
    h: "Data yang Kami Kumpulkan",
    p: [
      "Data identitas: nama, nomor paspor, tanggal lahir, kewarganegaraan — diperlukan untuk penerbitan visa dan tiket.",
      "Data kontak: email, nomor WhatsApp, alamat — untuk komunikasi pesanan dan darurat perjalanan.",
      "Data transaksi: riwayat pemesanan, status escrow, kwitansi — untuk audit dan perlindungan sengketa.",
      "Data teknis: alamat IP, jenis perangkat, log akses — untuk keamanan platform dan perbaikan layanan.",
    ],
  },
  {
    h: "Data yang TIDAK Kami Kumpulkan",
    p: [
      "Kami tidak meminta data kesehatan rinci (riwayat penyakit) — kondisi medis Anda hanya diberitahukan kepada penyelenggara bila Anda memilih untuk itu. Kami juga tidak menyimpan nomor kartu kredit; pembayaran berjalan melalui virtual account bank mitra escrow.",
    ],
  },
  {
    h: "Dengan Siapa Data Dibagikan",
    p: [
      "Data dibagikan seminimal mungkin kepada: penyelenggara yang Anda pilih (data pemesanan), maskapai dan hotel (data yang diwajibkan penerbitan tiket/booking), bank mitra escrow (data transaksi), dan otoritas berwenang bila diwajibkan hukum. Setiap penerima data terikat kewajiban kerahasiaan.",
    ],
  },
  {
    h: "Berapa Lama Data Disimpan",
    p: [
      "Data pemesanan disimpan selama akun aktif plus 5 tahun — mengikuti kebutuhan audit escrow dan batas klaim. Data teknis disimpan maksimal 12 bulan. Setelah itu, data dihapus atau dianonimkan.",
    ],
  },
  {
    h: "Hak Anda",
    p: [
      "Anda berhak: mengakses data Anda, memperbaiki yang tidak akurat, menghapus (sepanjang tidak bertentangan dengan kewajiban audit), menarik persetujuan pemasaran, dan mengajukan keberatan. Ajukan lewat halo@solusihajj.com — kami merespons maksimal 14 hari kerja.",
    ],
  },
  {
    h: "Keamanan",
    p: [
      "Data dienkripsi saat transit (TLS), akses internal dibatasi per peran, dan seluruh akses administratif tercatat dalam audit trail. Bila terjadi pelanggaran data yang berdampak, kami memberitahu Anda dan otoritas sesuai kewajiban UU PDP.",
    ],
  },
  {
    h: "Perubahan Kebijakan",
    p: [
      "Bila kebijakan ini berubah, versi terbaru selalu tersedia di halaman ini dengan tanggal pembaruan. Perubahan yang berdampak signifikan akan kami sampaikan lewat email atau notifikasi dalam aplikasi.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div>
      <PageHero
        breadcrumbs={[
          { name: "Beranda", url: "/" },
          { name: "Kebijakan Privasi", url: "/kebijakan-privasi" },
        ]}
        title="Kebijakan Privasi"
        lead="Perlindungan data pribadi jamaah sesuai UU PDP No. 27/2022 — ditulis dengan bahasa yang bisa dipahami, bukan legalese."
      />
      <article className="mx-auto max-w-4xl px-4 py-10">
        <p className="text-sm text-ink-muted">Terakhir diperbarui: 1 Oktober 2026</p>
        <div className="mt-6 space-y-8">
          {SECTIONS.map((s) => (
            <section key={s.h}>
              <h2 className="text-xl font-extrabold text-brand-deep">{s.h}</h2>
              <div className="mt-2 space-y-2">
                {s.p.map((par, i) => (
                  <p key={i} className="text-sm leading-relaxed text-ink-muted">
                    {par}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-line-warm bg-brand-soft p-6">
          <h2 className="text-lg font-extrabold text-brand-deep">Hubungi Petugas Data Kami</h2>
          <p className="mt-2 text-sm text-ink-muted">
            Untuk permintaan akses, koreksi, atau penghapusan data: halo@solusihajj.com dengan subjek
            &quot;Permintaan Data Pribadi&quot; — sertakan identitas agar kami bisa memverifikasi Anda.
          </p>
        </div>
      </article>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Beranda", url: SITE },
          { name: "Kebijakan Privasi", url: `${SITE}/kebijakan-privasi` },
        ])}
      />
    </div>
  );
}
