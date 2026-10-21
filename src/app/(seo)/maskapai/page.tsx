import type { Metadata } from "next";
import Link from "next/link";
import { db } from "@/lib/db";
import {
  AIRLINES_INDONESIA,
  AIRLINES_GCC,
  AIRLINES_ASIA,
  AIRLINES_AFRICA_EUROPE,
  AIRLINES_COUNT,
  AIRLINE_COUNTRIES,
  airlineLogo,
} from "@/lib/airlines";
import { slugify } from "@/components/seo/pkg-ui";
import { JsonLd, SITE, breadcrumbJsonLd } from "@/components/seo/json-ld";
import { PageHero, SectionHeading, MetaChip } from "@/components/seo/pkg-ui";
import { Badge } from "@/components/ui/badge";
import { Plane, Route, Globe2, CalendarClock } from "lucide-react";

/* Indeks maskapai penerbangan ibadah — data statis lib + agregat rute dari DB. */

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Daftar Maskapai Penerbangan Umrah & Haji (76+ Maskapai, 45 Negara)",
  description:
    "Jaringan maskapai yang melayani penerbangan jamaah ke Jeddah, Madinah & Riyadh: Garuda, Saudia, Lion, Citilink, Turkish, EgyptAir, dan 70+ lainnya — lengkap dengan rute riil dari database.",
  alternates: { canonical: `${SITE}/maskapai` },
  openGraph: {
    title: "Daftar Maskapai Penerbangan Umrah & Haji",
    description:
      "76+ maskapai dari 45 negara yang melayani rute jamaah ke Arab Saudi, lengkap rute riil, frekuensi, dan jadwal charter grup dari database nasional.",
    url: `${SITE}/maskapai`,
    type: "website",
  },
};

interface AirlineWithMeta {
  code: string;
  name: string;
  routeCount: number;
  dbCategory: string | null;
}

const AIRLINES_ALL_CODES = new Set(
  [...AIRLINES_INDONESIA, ...AIRLINES_GCC, ...AIRLINES_ASIA, ...AIRLINES_AFRICA_EUROPE].map((a) => a.code),
);

export default async function MaskapaiIndexPage() {
  const [routeGroups, dbAirlines, totalRoutes] = await Promise.all([
    db.flightRoute.groupBy({ by: ["airlineId"], _count: { _all: true } }),
    db.airline.findMany(),
    db.flightRoute.count(),
  ]);

  const countByIata = new Map<string, { count: number; category: string | null }>();
  for (const g of routeGroups) {
    const a = dbAirlines.find((x) => x.id === g.airlineId);
    if (a) countByIata.set(a.iata, { count: g._count._all, category: a.category });
  }

  const enrich = (list: { code: string; name: string }[]): AirlineWithMeta[] =>
    list.map((a) => ({
      ...a,
      routeCount: countByIata.get(a.code)?.count ?? 0,
      dbCategory: countByIata.get(a.code)?.category ?? null,
    }));

  // Maskapai di DB yang tidak ada di daftar statis (cth. Citilink, Super Air Jet)
  const dbOnly: AirlineWithMeta[] = dbAirlines
    .filter((a) => !AIRLINES_ALL_CODES.has(a.iata))
    .map((a) => ({ code: a.iata, name: a.name, routeCount: 0, dbCategory: a.category }));

  const allCodes = new Set(AIRLINES_ALL_CODES);
  for (const a of dbOnly) allCodes.add(a.code);

  const groups = [
    { title: "Maskapai Indonesia", desc: "Maskapai nasional — penerbangan reguler & charter umrah dari seluruh Indonesia.", list: enrich([...AIRLINES_INDONESIA, ...dbOnly]) },
    { title: "Timur Tengah & Teluk", desc: "Maskapai Gulf dan Timur Tengah dengan kuota penerbangan jamaah terbesar ke Jeddah & Madinah.", list: enrich(AIRLINES_GCC) },
    { title: "Asia", desc: "Jaringan Asia — dari Malaysia, Singapura, Thailand, hingga Asia Selatan & Asia Tengah.", list: enrich(AIRLINES_ASIA) },
    { title: "Afrika & Eropa", desc: "Koneksi jamaah diaspora dan transit Eropa menuju Tanah Suci.", list: enrich(AIRLINES_AFRICA_EUROPE) },
  ];

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Daftar Maskapai Penerbangan Ibadah",
    numberOfItems: allCodes.size,
    itemListElement: [...allCodes].map((code, i) => {
      const name =
        [...AIRLINES_INDONESIA, ...AIRLINES_GCC, ...AIRLINES_ASIA, ...AIRLINES_AFRICA_EUROPE, ...dbOnly].find(
          (a) => a.code === code,
        )?.name ?? code;
      return {
        "@type": "ListItem",
        position: i + 1,
        name,
        url: `${SITE}/maskapai/${slugify(name)}`,
      };
    }),
  };

  return (
    <>
      <JsonLd
        data={[
          itemListJsonLd,
          breadcrumbJsonLd([
            { name: "Beranda", url: "/" },
            { name: "Maskapai", url: "/maskapai" },
          ]),
        ]}
      />

      <PageHero
        breadcrumbs={[
          { name: "Beranda", url: "/" },
          { name: "Maskapai", url: "/maskapai" },
        ]}
        title="Jaringan Maskapai Penerbangan Ibadah"
        lead="Daftar maskapai yang melayani jamaah haji & umrah menuju Arab Saudi — dari penerbangan reguler harian hingga charter umrah musiman. Kartu maskapai menampilkan jumlah rute riil yang terindeks di database nasional."
      >
        <div className="mt-6 flex flex-wrap gap-2">
          <MetaChip icon={<Plane className="h-4 w-4 text-gold" aria-hidden="true" />}>
            {AIRLINES_COUNT + dbOnly.length} maskapai
          </MetaChip>
          <MetaChip icon={<Globe2 className="h-4 w-4 text-gold" aria-hidden="true" />}>
            {AIRLINE_COUNTRIES}+ negara asal
          </MetaChip>
          <MetaChip icon={<Route className="h-4 w-4 text-gold" aria-hidden="true" />}>
            {totalRoutes} rute riil terindeks
          </MetaChip>
        </div>
      </PageHero>

      <div className="mx-auto max-w-6xl space-y-12 px-4 py-10 md:py-14">
        {groups.map((g) => (
          <section key={g.title} aria-labelledby={`grup-${slugify(g.title)}`}>
            <SectionHeading id={`grup-${slugify(g.title)}`} title={g.title} desc={g.desc} />
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {g.list.map((a) => (
                <li key={a.code}>
                  <Link
                    href={`/maskapai/${slugify(a.name)}`}
                    className="flex min-h-11 items-center gap-3 rounded-2xl border border-line-warm bg-white p-4 transition-shadow hover:shadow-md"
                  >
                    <img
                      src={airlineLogo(a.code)}
                      alt={`Logo ${a.name}`}
                      width={40}
                      height={40}
                      loading="lazy"
                      className="h-10 w-10 shrink-0 rounded-lg object-contain"
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-bold text-ink">{a.name}</span>
                      <span className="block text-xs text-ink-muted">
                        Kode IATA {a.code}
                        {a.routeCount > 0 ? ` · ${a.routeCount} rute terindeks` : ""}
                      </span>
                    </span>
                    {a.routeCount > 0 && (
                      <Badge className="shrink-0 border-transparent bg-brand-soft text-brand-deep">
                        {a.routeCount} rute
                      </Badge>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="rounded-3xl bg-brand-soft/60 p-6 md:p-8" aria-labelledby="charter-note">
          <h2 id="charter-note" className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-brand-deep">
            <CalendarClock className="h-5 w-5" aria-hidden="true" />
            Butuh Kursi Charter Grup?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-muted">
            Selain penerbangan reguler, database kami mengindeks jadwal charter & seat allotment grosir untuk
            rombongan (minimal 10 kursi). Buka vertikal Tiket Grup di aplikasi untuk melihat harga per kursi,
            sisa seat, dan penyelenggara handling-nya.
          </p>
          <Link
            href="/#/tiket-grup"
            className="mt-4 inline-flex min-h-11 items-center rounded-xl bg-brand px-5 text-sm font-bold text-white transition-colors hover:bg-brand-deep"
          >
            Lihat Jadwal Charter Grup
          </Link>
        </section>
      </div>
    </>
  );
}
