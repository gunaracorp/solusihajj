import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  MapPin,
  ShieldCheck,
  Star,
  Users,
  Wallet,
} from "lucide-react";
import { packageList } from "@/data/packages";
import { JsonLd, SITE, breadcrumbJsonLd, faqJsonLd } from "@/components/seo/json-ld";
import { ogImage } from "@/lib/og";
import { languageAlternates } from "@/lib/i18n-routes";
import { PageHero, SectionHeading, formatRupiah, MetaChip } from "@/components/seo/pkg-ui";
import { ComparePicker, type ComparePkg } from "@/components/seo/compare-picker";

/* Halaman SEO /bandingkan (v2.1.0 Prioritas 5) — alat perbandingan 2–3 paket
   berdampingan + tabel SEO 5 paket berperingkat tertinggi. Server component;
   satu-satunya bagian client adalah <ComparePicker />. */

const SORTED_PACKAGES = [...packageList].sort(
  (a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount,
);
const TOP_PACKAGES = SORTED_PACKAGES.slice(0, 5);

/** Bentuk serial aman server→klien: plain object, tanpa Date/class instance. */
const PACKAGES: ComparePkg[] = SORTED_PACKAGES.map((p) => ({
  slug: p.slug,
  title: p.title,
  durationDays: p.durationDays,
  basePrice: p.basePrice,
  departCity: p.departCity,
  rating: p.rating,
  reviewCount: p.reviewCount,
  hotelMakkahName: p.hotelMakkah.name,
  hotelMakkahDistance: p.hotelMakkah.distanceToHaram,
  hotelMadinahName: p.hotelMadinah.name,
  hotelMadinahDistance: p.hotelMadinah.distanceToHaram,
}));

const FAQ_BANDINGKAN = [
  {
    q: "Apa yang dibandingkan di halaman ini?",
    a: "Harga, harga per hari, durasi, kota keberangkatan, nama hotel Makkah & Madinah beserta jarak meter nyata ke Haram, serta rating dan jumlah review Saksi Jamaah. Gunakan alat perbandingan interaktif untuk memilih 2–3 paket, atau lihat tabel statis 5 paket berperingkat tertinggi.",
  },
  {
    q: "Apakah harga yang ditampilkan live?",
    a: "Harga adalah harga dasar (quad share) terkini per pembaruan katalog dan dapat berubah mengikuti jadwal keberangkatan, tipe kamar, dan kurs. Harga final selalu dikonfirmasi penyelenggara sebelum Anda menyetujui kontrak escrow — tidak ada biaya yang muncul tiba-tiba setelah booking.",
  },
  {
    q: "Bagaimana escrow melindungi dana saya?",
    a: "Dana Anda ditahan di rekening penampungan bank syariah, bukan rekening penyelenggara. Dana dirilis bertahap 40/40/20: 40% setelah visa & tiket terbit, 40% saat keberangkatan, dan 20% setelah perjalanan selesai. Jika perjalanan bermasalah, sisa dana Anda tetap aman di escrow.",
  },
  {
    q: "Apa itu Verifikasi 5 Lapis?",
    a: "Proses penyaringan penyelenggara di SolusiHajj: (1) izin resmi Kemenag/PPIU, (2) keanggotaan asosiasi seperti HIMPUH/AMSHI, (3) pencocokan daftar penyelenggara Nusuk, (4) screening sanksi & blacklisting, dan (5) pengecekan status live berkala. Hanya penyelenggara yang lolos kelima lapis ini tampil di hasil perbandingan.",
  },
];

const CARA_MEMBACA = [
  {
    icon: ShieldCheck,
    title: "Escrow syariah 40/40/20",
    body: "Dana jamaah ditahan rekening penampungan bank syariah — bukan rekening penyelenggara — lalu dirilis bertahap: 40% setelah visa & tiket, 40% saat keberangkatan, 20% setelah kepulangan.",
  },
  {
    icon: BadgeCheck,
    title: "Verifikasi 5 Lapis",
    body: "Izin Kemenag, keanggotaan asosiasi, daftar Nusuk, screening sanksi, dan pengecekan status live. Penyelenggara yang gagal di salah satu lapis tidak tampil di perbandingan ini.",
  },
  {
    icon: MapPin,
    title: "Jarak hotel ke Haram itu penting",
    body: "Angka meter diukur dari pintu hotel ke Masjidil Haram lewat rute jalan kaki (±, bukan garis lurus di peta). Selisih 200 m bisa berarti 10–15 menit berjalan — signifikan saat jam sibuk atau bagi jamaah lanjut usia.",
  },
  {
    icon: Star,
    title: "Review hanya dari jamaah nyata",
    body: "Rating Saksi Jamaah hanya berasal dari traveler yang tercatat pernah berangkat lewat paket terkait — tidak bisa dibeli dan tidak bisa dihapus oleh penyelenggara.",
  },
];

type Pkg = (typeof packageList)[number];

const SEO_ROWS: Array<{ label: string; cell: (p: Pkg) => ReactNode }> = [
  {
    label: "Harga",
    cell: (p) => <span className="font-bold text-brand-deep">{formatRupiah(p.basePrice)}</span>,
  },
  { label: "Per hari", cell: (p) => formatRupiah(Math.round(p.basePrice / p.durationDays)) },
  { label: "Durasi", cell: (p) => `${p.durationDays} hari` },
  { label: "Keberangkatan", cell: (p) => p.departCity },
  {
    label: "Hotel Makkah",
    cell: (p) => (
      <>
        {p.hotelMakkah.name}
        <span className="block text-xs text-ink-muted">± {p.hotelMakkah.distanceToHaram} m ke Haram</span>
      </>
    ),
  },
  {
    label: "Hotel Madinah",
    cell: (p) => (
      <>
        {p.hotelMadinah.name}
        <span className="block text-xs text-ink-muted">
          ± {p.hotelMadinah.distanceToHaram} m ke Masjid Nabawi
        </span>
      </>
    ),
  },
  {
    label: "Rating & review",
    cell: (p) => (
      <span className="inline-flex items-center gap-1 font-semibold">
        <Star className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
        {p.rating.toFixed(1)}
        <span className="font-normal text-ink-muted">· {p.reviewCount} review</span>
      </span>
    ),
  },
];

export function generateMetadata(): Metadata {
  const description =
    "Bandingkan paket umrah berdampingan: harga, harga per hari, durasi, hotel Makkah & Madinah beserta jarak nyata ke Haram, dan rating Saksi Jamaah. Semua penyelenggara lolos Verifikasi 5 Lapis dan dana Anda dilindungi escrow syariah 40/40/20.";
  return {
    title: "Bandingkan Paket Umrah — Harga, Hotel, & Rating Berdampingan",
    description,
    alternates: { canonical: "/bandingkan", ...languageAlternates("/bandingkan") },
    openGraph: {
      title: "Bandingkan Paket Umrah",
      description,
      url: `${SITE}/bandingkan`,
      type: "website",
      siteName: "SolusiHajj",
      images: [
        ogImage({
          title: "Bandingkan Paket Umrah",
          kicker: "Alat Perbandingan",
          badge: "Escrow Syariah 40/40/20",
          sub: "Harga, durasi, hotel & jarak ke Haram, rating Saksi Jamaah — berdampingan",
          foot: "Pilih 2–3 paket · bandingkan sebelum memutuskan",
        }),
      ],
    },
  };
}

export default function BandingkanPage() {
  const hargaTermurah = Math.min(...packageList.map((p) => p.basePrice));
  const jumlahPenyelenggara = [...new Set(packageList.map((p) => p.ppiuSlug))].length;

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "5 Paket Umrah Berperingkat Tertinggi",
    numberOfItems: TOP_PACKAGES.length,
    itemListElement: TOP_PACKAGES.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.title,
      url: `${SITE}/paket/${p.slug}`,
    })),
  };

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Beranda", url: "/" },
          { name: "Bandingkan Paket", url: "/bandingkan" },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQ_BANDINGKAN)} />
      <JsonLd data={itemListJsonLd} />

      <PageHero
        breadcrumbs={[
          { name: "Beranda", url: "/" },
          { name: "Bandingkan Paket", url: "/bandingkan" },
        ]}
        title="Bandingkan Paket Umrah Berdampingan"
        lead="Letakkan 2–3 paket bersebelahan dan timbang sendiri: harga, durasi, hotel & jarak nyata ke Haram, hingga rating Saksi Jamaah. Semua penyelenggara lolos Verifikasi 5 Lapis, dan setiap dana jamaah dilindungi escrow syariah 40/40/20."
      >
        <div className="mt-6 flex flex-wrap gap-2">
          <MetaChip icon={<Users className="h-4 w-4 text-gold" aria-hidden="true" />}>
            {packageList.length} paket · {jumlahPenyelenggara} penyelenggara
          </MetaChip>
          <MetaChip icon={<Wallet className="h-4 w-4 text-gold" aria-hidden="true" />}>
            Mulai {formatRupiah(hargaTermurah)}
          </MetaChip>
          <MetaChip icon={<ShieldCheck className="h-4 w-4 text-gold" aria-hidden="true" />}>
            Escrow Syariah 40/40/20
          </MetaChip>
          <MetaChip icon={<BadgeCheck className="h-4 w-4 text-gold" aria-hidden="true" />}>
            Verifikasi 5 Lapis
          </MetaChip>
        </div>
      </PageHero>

      {/* Alat perbandingan interaktif (client) */}
      <section aria-labelledby="alat-bandingkan" className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <SectionHeading
          id="alat-bandingkan"
          title="Alat Perbandingan Interaktif"
          desc="Centang 2–3 paket pada daftar di bawah. Tabel perbandingan muncul otomatis — lengkap dengan badge emas untuk harga per hari termurah dan jarak hotel Makkah terdekat."
        />
        <ComparePicker packages={PACKAGES} />
      </section>

      {/* Tabel SEO statis — 5 paket rating tertinggi */}
      <section
        aria-labelledby="tabel-bandingkan"
        className="border-t border-line-warm bg-white py-10 md:py-14"
      >
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            id="tabel-bandingkan"
            title="5 Paket Umrah dengan Rating Tertinggi"
            desc="Peringkat berdasarkan rating Saksi Jamaah (tertinggi dulu), lalu jumlah review. Harga adalah harga dasar quad share per jamaah — periksa detail paket untuk tipe kamar dan tanggal keberangkatan."
          />
          <div className="overflow-x-auto rounded-2xl border border-line-warm">
            <table className="w-full min-w-[820px] border-collapse text-left text-sm">
              <caption className="border-b border-line-warm bg-ivory px-4 py-3 text-left text-xs leading-relaxed text-ink-muted">
                Perbandingan 5 paket umrah berperingkat tertinggi di katalog SolusiHajj — harga, harga per
                hari, durasi, keberangkatan, hotel & jarak ke Haram, serta rating Saksi Jamaah.
              </caption>
              <thead>
                <tr className="border-b border-line-warm bg-brand-soft/60">
                  <th
                    scope="col"
                    className="px-4 py-3 text-xs font-bold uppercase tracking-wide text-brand-deep"
                  >
                    Atribut
                  </th>
                  {TOP_PACKAGES.map((p) => (
                    <th scope="col" key={p.slug} className="min-w-[190px] px-4 py-3 align-top">
                      <Link
                        href={`/paket/${p.slug}`}
                        className="font-bold text-brand-deep underline-offset-4 hover:underline"
                      >
                        {p.title}
                      </Link>
                      <span className="mt-0.5 block text-xs font-normal text-ink-muted">
                        {p.departCity} · {p.durationDays} hari
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-line-warm">
                {SEO_ROWS.map((row) => (
                  <tr key={row.label}>
                    <th
                      scope="row"
                      className="px-4 py-3 align-top text-xs font-bold uppercase tracking-wide text-ink-muted"
                    >
                      {row.label}
                    </th>
                    {TOP_PACKAGES.map((p) => (
                      <td key={p.slug} className="px-4 py-3 align-top text-ink">
                        {row.cell(p)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cara membaca perbandingan */}
      <section aria-labelledby="cara-membaca" className="py-10 md:py-14">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            id="cara-membaca"
            title="Cara Membaca Perbandingan"
            desc="Empat prinsip yang membuat perbandingan di SolusiHajj bisa Anda percaya."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {CARA_MEMBACA.map((item) => (
              <div key={item.title} className="rounded-2xl border border-line-warm bg-white p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft">
                    <item.icon className="h-5 w-5 text-brand" aria-hidden="true" />
                  </span>
                  <h3 className="font-bold text-brand-deep">{item.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tautan lanjutan */}
      <section
        aria-labelledby="tautan-lanjut"
        className="border-t border-line-warm bg-brand-soft/50 py-10 md:py-14"
      >
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            id="tautan-lanjut"
            title="Lanjutkan Penelusuran Anda"
            desc="Setelah membandingkan, dalami katalog, periksa izin penyelenggara, atau buka versi bahasa Inggris."
          />
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/paket"
              className="group rounded-2xl border border-line-warm bg-white p-5 transition-all hover:border-brand/40 hover:shadow-md"
            >
              <h3 className="flex items-center gap-2 font-bold text-brand-deep group-hover:text-brand">
                Katalog 27 Paket Umrah
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Semua paket & land arrangement dengan filter kota keberangkatan, jenis paket, dan harga.
              </p>
            </Link>
            <Link
              href="/direktori"
              className="group rounded-2xl border border-line-warm bg-white p-5 transition-all hover:border-brand/40 hover:shadow-md"
            >
              <h3 className="flex items-center gap-2 font-bold text-brand-deep group-hover:text-brand">
                Direktori Penyelenggara
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Cek izin resmi, tier, dan profil 3.966 organisasi penyelenggara haji & umrah — data dari 9+
                sumber resmi.
              </p>
            </Link>
            <Link
              href="/en/compare"
              className="group rounded-2xl border border-line-warm bg-white p-5 transition-all hover:border-brand/40 hover:shadow-md"
            >
              <h3 className="flex items-center gap-2 font-bold text-brand-deep group-hover:text-brand">
                Compare Packages (English)
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Side-by-side package comparison in English — same catalog, same escrow protection.
              </p>
            </Link>
          </div>

          <div className="mt-6 rounded-2xl border border-line-warm bg-white p-5">
            <h3 className="text-sm font-bold text-brand-deep">Detail paket teratas:</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {TOP_PACKAGES.slice(0, 4).map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/paket/${p.slug}`}
                    className="inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-line-warm bg-ivory px-4 text-sm font-semibold text-brand underline-offset-4 transition-colors hover:border-brand/40 hover:text-brand-deep"
                  >
                    {p.title}
                    <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
