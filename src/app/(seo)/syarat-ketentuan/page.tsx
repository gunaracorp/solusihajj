import type { Metadata } from "next";
import { SITE, JsonLd, breadcrumbJsonLd } from "@/components/seo/json-ld";
import { ogImage } from "@/lib/og";
import { PageHero } from "@/components/seo/pkg-ui";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan Layanan",
  description:
    "Ketentuan penggunaan SolusiHajj: peran platform sebagai marketplace, kewajiban jamaah dan penyelenggara, mekanisme escrow, pembatalan, sengketa, dan batasan tanggung jawab.",
  alternates: { canonical: `${SITE}/syarat-ketentuan` },
  openGraph: {
    title: "Syarat & Ketentuan Layanan SolusiHajj",
    description:
      "Peran marketplace, mekanisme escrow 40/40/20, pembatalan, dan penyelesaian sengketa.",
    url: `${SITE}/syarat-ketentuan`,
    type: "website",
    images: [
      ogImage({
        title: "Syarat & Ketentuan Layanan",
        kicker: "Marketplace · Escrow Syariah",
        sub: "Escrow 40/40/20 · pembatalan transparan · penyelesaian sengketa",
        foot: "Kontrak langsung dengan penyelenggara pilihan Anda",
      }),
    ],
  },
};

const SECTIONS = [
  {
    h: "1. Peran SolusiHajj",
    p: [
      "SolusiHajj adalah platform teknologi (marketplace) yang mempertemukan jamaah dengan penyelenggara perjalanan ibadah berizin — PPIU, PIHK, BPW, dan KBIHU. SolusiHajj BUKAN penyelenggara perjalanan: kontrak perjalanan dibuat langsung antara Anda dan penyelenggara yang Anda pilih. Peran kami adalah verifikasi, perlindungan dana via escrow, dokumentasi review, dan fasilitasi penyelesaian sengketa.",
    ],
  },
  {
    h: "2. Akun dan Kewajiban Jamaah",
    p: [
      "Anda wajib memberikan data yang benar dan akurat untuk penerbitan dokumen perjalanan (paspor, visa, tiket). Kelalaian memberi data benar dapat membuat dokumen tidak sah dan biaya yang timbul menjadi tanggungan Anda. Anda juga wajib membaca itinerary, rincian hotel, dan ketentuan pembatalan paket sebelum mengonfirmasi pemesanan.",
    ],
  },
  {
    h: "3. Kewajiban Penyelenggara",
    p: [
      "Penyelenggara wajib: berizin aktif dan memperbarui status izinnya, menyelenggarakan perjalanan sesuai itinerary yang dijanjikan, menempatkan dana jamaah sesuai regulasi (perbankan syariah/escrow), dan merespons keluhan jamaah melalui kanal yang tersedia. Pelanggaran dapat berakibat penurunan tier, penangguhan tampil, atau pemutusan kerja sama.",
    ],
  },
  {
    h: "4. AmanahEscrow — Alur Dana",
    p: [
      "Dana jamaah disetor ke rekening escrow pihak ketiga (bank syariah mitra), BUKAN ke rekening penyelenggara maupun SolusiHajj. Dana dirilis bertahap 40/40/20: (1) 40% saat visa & tiket terbit, (2) 40% saat keberangkatan & hotel terkonfirmasi, (3) 20% setelah pulang dan melewati 7 hari tanpa sengketa. Rilis tahap 1 dan 2 memerlukan persetujuan ganda (dual-control): pengajuan penyelenggara + persetujuan platform.",
    ],
  },
  {
    h: "5. Pembatalan oleh Jamaah",
    p: [
      "Pembatalan mengikuti tabel pembatalan yang tercantum pada masing-masing paket — dipandu aturan minimum Permenag No. 21/2020. Dana yang belum dirilis ke penyelenggara dikembalikan sesuai tabel; dana yang sudah dirilis untuk komponen nyata (visa, tiket) menyesuaikan potongan komponen tersebut. Seluruh perhitungan ditampilkan transparan di dashboard pesanan Anda.",
    ],
  },
  {
    h: "6. Sengketa",
    p: [
      "Bila perjalanan tidak sesuai janji, ajukan sengketa melalui halaman pesanan dengan bukti (foto, dokumen, korespondensi). Tim mediasi SolusiHajj memfasilitasi penyelesaian maksimal 14 hari kerja. Bila tidak tercapai, dana sisa escrow dikembalikan sesuai keputusan mediasi, dan jalur hukum tetap terbuka — identitas legal penyelenggara selalu tersedia di halaman profilnya.",
    ],
  },
  {
    h: "7. Review Saksi Jamaah",
    p: [
      "Review hanya dapat ditulis oleh jamaah dengan pesanan berstatus SELESAI (pulang). Ini menjaga review dari palsu dan berbayar. SolusiHajj tidak menghapus review negatif yang sah — hanya yang mengandung SARA, data pribadi pihak ketiga, atau fitnah terbukti.",
    ],
  },
  {
    h: "8. Batasan Tanggung Jawab",
    p: [
      "SolusiHajj tidak bertanggung jawab atas force majeure (bencana, kebijakan pemerintah Saudi/Indonesia mendadak, pandemi) yang di luar kendali semua pihak. Untuk kejadian tersebut, dana escrow yang belum dirilis dikembalikan sesuai ketentuan, dan komponen yang sudah dibelanjakan mengikuti kebijakan vendor (maskapai/hotel) yang dapat dibuktikan.",
    ],
  },
  {
    h: "9. Perubahan Ketentuan",
    p: [
      "Ketentuan ini dapat diperbarui; versi terbaru selalu tersedia di halaman ini dengan tanggal berlaku. Untuk pesanan yang sudah berjalan, ketentuan saat pemesanan tetap menjadi acuan kontrak Anda.",
    ],
  },
  {
    h: "10. Hukum yang Berlaku",
    p: [
      "Ketentuan ini tunduk pada hukum Republik Indonesia. Sengketa yang tidak selesai melalui mediasi diselesaikan melalui Pengadilan Negeri Jakarta Pusat.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div>
      <PageHero
        breadcrumbs={[
          { name: "Beranda", url: "/" },
          { name: "Syarat & Ketentuan", url: "/syarat-ketentuan" },
        ]}
        title="Syarat & Ketentuan Layanan"
        lead="Aturan main yang jelas untuk jamaah dan penyelenggara — termasuk alur dana escrow, pembatalan, dan penyelesaian sengketa."
      />
      <article className="mx-auto max-w-4xl px-4 py-10">
        <p className="text-sm text-ink-muted">Berlaku sejak: 1 Oktober 2026</p>
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
      </article>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Beranda", url: SITE },
          { name: "Syarat & Ketentuan", url: `${SITE}/syarat-ketentuan` },
        ])}
      />
    </div>
  );
}
