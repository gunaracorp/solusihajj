import type { Metadata } from "next";
import { packageList, featuredPackages } from "@/data/packages";
import { getPpiu } from "@/data/ppiu";
import { faqList } from "@/data/faq";
import { JsonLd, SITE, breadcrumbJsonLd, faqJsonLd } from "@/components/seo/json-ld";
import { ogImage } from "@/lib/og";
import { PageHero, MetaChip, SectionHeading, formatRupiah } from "@/components/seo/pkg-ui";
import { Users, Plane, Building2, Wallet, ShieldCheck } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PaketExplorer, type PaketCardDto } from "./pkg-paket-explorer";

/* Halaman indeks katalog paket umrah — server component + filter client kecil. */

export const metadata: Metadata = {
  title: "Katalog Paket Umrah 2026 — 27 Paket & Land Arrangement Terverifikasi",
  description:
    "Bandingkan 27 paket umrah reguler, Ramadhan, plus Turki/Dubai, dan land arrangement dari 10 penyelenggara terverifikasi. Harga transparan, jarak hotel nyata ke Haram, review jamaah asli.",
  alternates: { canonical: `${SITE}/paket` },
  openGraph: {
    title: "Katalog Paket Umrah 2026 — 27 Paket & Land Arrangement Terverifikasi",
    description:
      "Bandingkan 27 paket umrah dari 10 penyelenggara terverifikasi: harga transparan, jarak hotel nyata ke Haram, itinerary harian, dan review Saksi Jamaah.",
    url: `${SITE}/paket`,
    type: "website",
    images: [
      ogImage({
        title: "Katalog Paket Umrah 2026",
        kicker: "27 Paket & Land Arrangement",
        badge: "Terverifikasi 5 Lapis",
        sub: "Harga transparan · jarak hotel nyata ke Haram · review Saksi Jamaah",
        foot: "Bandingkan sebelum memutuskan",
      }),
    ],
  },
};

const FAQ_PAKET = faqList;

export default function PaketIndexPage() {
  const hargaTermurah = Math.min(...packageList.map((p) => p.basePrice));
  const kotaList = [...new Set(packageList.map((p) => p.departCity))];
  const ppiuPenyelenggara = [...new Set(packageList.map((p) => p.ppiuSlug))];

  const cards: PaketCardDto[] = packageList.map((p) => {
    const ppiu = getPpiu(p.ppiuSlug);
    return {
      slug: p.slug,
      title: p.title,
      type: p.type,
      product: p.product ?? "full",
      durationDays: p.durationDays,
      basePrice: p.basePrice,
      departCity: p.departCity,
      departWindow: p.departWindow,
      airline: p.airline,
      hotelMakkahName: p.hotelMakkah.name,
      makkahDistance: p.hotelMakkah.distanceToHaram,
      hotelMadinahName: p.hotelMadinah.name,
      madinahDistance: p.hotelMadinah.distanceToHaram,
      rating: p.rating,
      reviewCount: p.reviewCount,
      tier: ppiu?.tier ?? "silver",
      ppiuShortName: ppiu?.shortName ?? p.ppiuSlug,
      ppiuSlug: p.ppiuSlug,
      featured: p.featured,
    };
  });

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Katalog Paket Umrah & Land Arrangement SolusiHajj",
    numberOfItems: packageList.length,
    itemListElement: packageList.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.title,
      url: `${SITE}/paket/${p.slug}`,
    })),
  };

  return (
    <>
      <JsonLd data={[itemListJsonLd, breadcrumbJsonLd([
        { name: "Beranda", url: "/" },
        { name: "Paket Umrah", url: "/paket" },
      ]), faqJsonLd(FAQ_PAKET.map((f) => ({ q: f.q, a: f.a })))]} />

      <PageHero
        breadcrumbs={[
          { name: "Beranda", url: "/" },
          { name: "Paket Umrah", url: "/paket" },
        ]}
        title="Katalog Paket Umrah & Land Arrangement"
        lead="Seluruh paket di bawah diselenggarakan penyelenggara lolos Verifikasi 5 Lapis. Harga all-in tanpa asterisk tersembunyi, nama hotel dan jarak meter nyata ke Haram wajib dicantumkan."
      >
        <div className="mt-6 flex flex-wrap gap-2">
          <MetaChip icon={<Users className="h-4 w-4 text-gold" aria-hidden="true" />}>
            {packageList.length} paket · {featuredPackages.length} unggulan
          </MetaChip>
          <MetaChip icon={<Wallet className="h-4 w-4 text-gold" aria-hidden="true" />}>
            Mulai {formatRupiah(hargaTermurah)}
          </MetaChip>
          <MetaChip icon={<Building2 className="h-4 w-4 text-gold" aria-hidden="true" />}>
            {ppiuPenyelenggara.length} penyelenggara partner
          </MetaChip>
          <MetaChip icon={<Plane className="h-4 w-4 text-gold" aria-hidden="true" />}>
            {kotaList.length} kota keberangkatan
          </MetaChip>
        </div>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-10 md:py-14" aria-label="Daftar paket umrah">
        <SectionHeading
          title="Semua Paket — Filter Sesuai Kebutuhan Anda"
          desc="Gunakan pencarian dan filter kota keberangkatan/jenis paket. Setiap kartu menampilkan harga mulai, hotel, jarak ke Haram, maskapai, dan rating Saksi Jamaah."
        />
        <PaketExplorer paket={cards} />
      </section>

      <section className="border-t border-line-warm bg-brand-soft/50 py-10 md:py-14">
        <div className="mx-auto max-w-3xl px-4">
          <SectionHeading
            title="Pertanyaan Umum Sebelum Memilih Paket"
            desc="Ringkasan aturan pelindung dana yang berlaku untuk semua paket di katalog ini."
          />
          <Accordion type="single" collapsible className="rounded-2xl border border-line-warm bg-white px-5">
            {FAQ_PAKET.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-sm font-bold text-ink md:text-base">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-ink-muted">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="mt-6 flex items-start gap-2 text-sm text-ink-muted">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
            Semua booking berjalan di atas AmanahEscrow: dana ditahan rekening penampungan bank syariah dan
            dirilis bertahap 40/40/20 sesuai progres perjalanan Anda.
          </p>
        </div>
      </section>
    </>
  );
}
