import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import {
  AIRLINES_INDONESIA,
  AIRLINES_GCC,
  AIRLINES_ASIA,
  AIRLINES_AFRICA_EUROPE,
  airlineLogo,
} from "@/lib/airlines";
import { flightList } from "@/data/flights";
import { getPpiu } from "@/data/ppiu";
import { slugify, formatTanggal, formatRupiah } from "@/components/seo/pkg-ui";
import { JsonLd, SITE, breadcrumbJsonLd } from "@/components/seo/json-ld";
import { ogImage } from "@/lib/og";
import { PageHero, SectionHeading, MetaChip, BackLink } from "@/components/seo/pkg-ui";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plane, Route, ArrowRight, Armchair, Luggage, Users } from "lucide-react";

/* Detail maskapai — 76 halaman statis dari daftar statis lib + rute riil DB. */

export const revalidate = 3600;

const ALL_AIRLINES = [
  ...AIRLINES_INDONESIA,
  ...AIRLINES_GCC,
  ...AIRLINES_ASIA,
  ...AIRLINES_AFRICA_EUROPE,
];

function getAirlineBySlug(slug: string) {
  return ALL_AIRLINES.find((a) => slugify(a.name) === slug);
}

export function generateStaticParams() {
  return ALL_AIRLINES.map((a) => ({ slug: slugify(a.name) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const airline = getAirlineBySlug(slug);
  if (!airline) return { title: "Maskapai tidak ditemukan" };
  const description =
    `Profil ${airline.name} (kode IATA ${airline.code}) untuk penerbangan haji & umrah: rute riil ke Jeddah/Madinah dari database nasional, ` +
    `tipe pesawat, frekuensi, dan jadwal charter grup yang tersedia.`
      .slice(0, 157) + "…";
  const ogTitle = `${airline.name} — Rute & Jadwal Penerbangan Umrah Haji`;
  const ogCard = ogImage({
    title: airline.name,
    kicker: "Maskapai Penerbangan Jamaah",
    chip: airline.code,
    sub: "Rute riil ke Jeddah & Madinah · jadwal charter grup",
    foot: "Database nasional rute penerbangan",
  });
  return {
    title: ogTitle,
    description,
    alternates: { canonical: `${SITE}/maskapai/${slugify(airline.name)}` },
    openGraph: {
      title: ogTitle,
      description,
      url: `${SITE}/maskapai/${slugify(airline.name)}`,
      type: "website",
      siteName: "SolusiHajj",
      images: [ogCard],
    },
    twitter: { card: "summary_large_image", images: [ogCard.url] },
  };
}

const KATEGORI_LABEL: Record<string, string> = {
  PEMERINTAH_HAJI: "Maskapai Pemerintah Haji",
  REGULER: "Penerbangan Reguler",
  CHARTER_UMRAH: "Charter Umrah",
};

const SERVICE_LABEL: Record<string, string> = {
  REGULER: "Reguler",
  CHARTER_UMRAH: "Charter Umrah",
  CHARTER_HAJI: "Charter Haji",
};

export default async function MaskapaiDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const airline = getAirlineBySlug(slug);
  if (!airline) notFound();

  const dbAirline = await db.airline.findUnique({
    where: { iata: airline.code },
    include: { routes: { orderBy: [{ destCode: "asc" }, { originCity: "asc" }] } },
  });

  const routes = dbAirline?.routes ?? [];
  const charters = flightList.filter((f) => f.airline.startsWith(`${airline.name} (`));

  const airlineJsonLd = {
    "@context": "https://schema.org",
    "@type": "Airline",
    name: airline.name,
    iataCode: airline.code,
    url: `${SITE}/maskapai/${slugify(airline.name)}`,
    ...(routes.length > 0
      ? {
          makesOffer: routes.map((r) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Flight",
              flightNumber: `${airline.code}`,
              departureAirport: { "@type": "Airport", name: r.originCity, iataCode: r.originCode },
              arrivalAirport: { "@type": "Airport", name: r.destCity, iataCode: r.destCode },
            },
          })),
        }
      : {}),
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Rute penerbangan ${airline.name}`,
    numberOfItems: routes.length,
    itemListElement: routes.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${r.originCity} (${r.originCode}) → ${r.destCity} (${r.destCode})`,
    })),
  };

  return (
    <>
      <JsonLd
        data={[
          airlineJsonLd,
          itemListJsonLd,
          breadcrumbJsonLd([
            { name: "Beranda", url: "/" },
            { name: "Maskapai", url: "/maskapai" },
            { name: airline.name, url: `/maskapai/${slugify(airline.name)}` },
          ]),
        ]}
      />

      <PageHero
        breadcrumbs={[
          { name: "Beranda", url: "/" },
          { name: "Maskapai", url: "/maskapai" },
          { name: airline.name, url: `/maskapai/${slugify(airline.name)}` },
        ]}
        title={airline.name}
        lead={
          dbAirline?.notes ??
          `Maskapai dengan kode IATA ${airline.code} yang melayani rute jamaah haji & umrah menuju Arab Saudi. Data rute ditarik dari kanal resmi maskapai dan otoritas penerbangan.`
        }
      >
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <img
            src={airlineLogo(airline.code)}
            alt={`Logo ${airline.name}`}
            width={56}
            height={56}
            className="h-14 w-14 rounded-xl bg-white p-1.5"
          />
          <MetaChip icon={<Plane className="h-4 w-4 text-gold" aria-hidden="true" />}>
            IATA {airline.code}
          </MetaChip>
          {dbAirline?.category && (
            <MetaChip icon={<Plane className="h-4 w-4 text-gold" aria-hidden="true" />}>
              {KATEGORI_LABEL[dbAirline.category] ?? dbAirline.category}
            </MetaChip>
          )}
          <MetaChip icon={<Route className="h-4 w-4 text-gold" aria-hidden="true" />}>
            {routes.length > 0 ? `${routes.length} rute terindeks` : "Rute belum terindeks"}
          </MetaChip>
          {dbAirline?.hub && <MetaChip icon={<Route className="h-4 w-4 text-gold" aria-hidden="true" />}>Hub: {dbAirline.hub}</MetaChip>}
        </div>
      </PageHero>

      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <BackLink href="/maskapai" label="Kembali ke Daftar Maskapai" />

        <div className="mt-6 space-y-12">
          {/* Tabel rute dari DB */}
          <section aria-labelledby="rute">
            <SectionHeading
              id="rute"
              title="Rute Penerbangan Jamaah Terindeks"
              desc={
                routes.length > 0
                  ? "Data riil dari database nasional: kota asal, tujuan, frekuensi, tipe pesawat, dan jenis layanannya."
                  : "Belum ada rute terindeks untuk maskapai ini di database nasional — biasanya berarti layanan musiman atau via kerja sama charter."
              }
            />
            {routes.length > 0 ? (
              <div className="overflow-x-auto rounded-2xl border border-line-warm bg-white">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-brand-soft/60">
                      <TableHead className="text-xs font-bold uppercase tracking-wide text-brand-deep">Rute</TableHead>
                      <TableHead className="text-xs font-bold uppercase tracking-wide text-brand-deep">Frekuensi</TableHead>
                      <TableHead className="text-xs font-bold uppercase tracking-wide text-brand-deep">Pesawat</TableHead>
                      <TableHead className="text-xs font-bold uppercase tracking-wide text-brand-deep">Layanan</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {routes.map((r) => (
                      <TableRow key={r.id}>
                        <TableCell>
                          <span className="font-bold text-ink">
                            {r.originCity} ({r.originCode})
                          </span>
                          <ArrowRight className="inline h-4 w-4 mx-1.5 text-brand" aria-hidden="true" />
                          <span className="font-bold text-ink">
                            {r.destCity} ({r.destCode})
                          </span>
                          {r.seats ? (
                            <span className="block text-xs text-ink-muted">±{r.seats} kursi/pekan</span>
                          ) : null}
                        </TableCell>
                        <TableCell className="text-sm text-ink-muted">{r.freqText ?? "—"}</TableCell>
                        <TableCell className="text-sm text-ink-muted">{r.aircraft ?? "—"}</TableCell>
                        <TableCell>
                          <Badge className="border-transparent bg-brand-soft text-brand-deep">
                            {SERVICE_LABEL[r.serviceType] ?? r.serviceType}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <p className="rounded-2xl border border-dashed border-line-warm bg-white p-6 text-sm text-ink-muted">
                Rute untuk {airline.name} belum masuk indeks rute nasional. Jadwal charter di bawah tetap bisa
                tersedia secara musiman.
              </p>
            )}
          </section>

          {/* Charter terkait dari flightList */}
          <section aria-labelledby="charter">
            <SectionHeading
              id="charter"
              title="Jadwal Charter & Seat Allotment Grup"
              desc="Kursi grosir untuk rombongan — harga per pax, minimal order, dan penyelenggara handling-nya. Transaksi melalui escrow SolusiHajj."
            />
            {charters.length > 0 ? (
              <ul className="grid gap-4 md:grid-cols-2">
                {charters.map((f) => {
                  const ppiu = getPpiu(f.ppiuSlug);
                  return (
                    <li key={f.id}>
                      <Card className="h-full gap-3 border-line-warm py-5">
                        <CardHeader className="px-5 pt-5">
                          <CardTitle className="text-base">
                            {f.route}
                          </CardTitle>
                          <p className="text-xs text-ink-muted">
                            {formatTanggal(f.depart)} · {f.transit} · {f.notes}
                          </p>
                        </CardHeader>
                        <CardContent className="space-y-3 px-5 pb-5">
                          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink-muted">
                            <span className="inline-flex items-center gap-1">
                              <Armchair className="h-4 w-4 text-brand" aria-hidden="true" />
                              Sisa {f.seatsLeft} dari {f.seatsTotal} kursi
                            </span>
                            <span className="inline-flex items-center gap-1">
                              <Luggage className="h-4 w-4 text-brand" aria-hidden="true" />
                              {f.baggageKg} kg
                            </span>
                            <span className="inline-flex items-center gap-1">
                              <Users className="h-4 w-4 text-brand" aria-hidden="true" />
                              Min. {f.minOrder} kursi
                            </span>
                          </div>
                          <p className="text-lg font-extrabold text-brand-deep">
                            {formatRupiah(f.pricePerPax)}
                            <span className="text-xs font-medium text-ink-muted"> /kursi grosir</span>
                          </p>
                          {ppiu && (
                            <Link
                              href={`/ppiu/${ppiu.slug}`}
                              className="inline-flex min-h-11 items-center text-sm font-semibold text-brand underline-offset-4 hover:underline"
                            >
                              Handling: {ppiu.shortName} <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                            </Link>
                          )}
                        </CardContent>
                      </Card>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="rounded-2xl border border-dashed border-line-warm bg-white p-6 text-sm text-ink-muted">
                Belum ada jadwal charter terbuka untuk {airline.name} saat ini. Pantau vertikal Tiket Grup untuk
                pembukaan allotment berikutnya.
              </p>
            )}
          </section>

          {/* Cross-link rute lain */}
          <section className="rounded-3xl bg-brand-soft/60 p-6 md:p-8" aria-labelledby="lainnya">
            <h2 id="lainnya" className="text-xl font-extrabold tracking-tight text-brand-deep">
              Bandingkan dengan Maskapai Lain
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {ALL_AIRLINES.filter((a) => a.code !== airline.code)
                .slice(0, 12)
                .map((a) => (
                  <li key={a.code}>
                    <Link
                      href={`/maskapai/${slugify(a.name)}`}
                      className="inline-flex min-h-11 items-center rounded-xl border border-line-warm bg-white px-4 text-sm font-semibold text-ink transition-colors hover:bg-brand-soft hover:text-brand-deep"
                    >
                      {a.name}
                    </Link>
                  </li>
                ))}
              <li>
                <Link
                  href="/maskapai"
                  className="inline-flex min-h-11 items-center rounded-xl bg-brand px-4 text-sm font-bold text-white transition-colors hover:bg-brand-deep"
                >
                  Semua maskapai
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
