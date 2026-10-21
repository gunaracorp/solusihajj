import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { JsonLd, SITE, breadcrumbJsonLd } from "@/components/seo/json-ld";
import { languageAlternates } from "@/lib/i18n-routes";
import { ogImage } from "@/lib/og";
import { BreadcrumbTrail, CityCard } from "@/components/seo/silo-bits";
import { citiesByIsland, cityList, type CityPage } from "@/data/cities";

/* Indeks kota keberangkatan — 45 kota dikelompokkan per pulau. */

export function generateMetadata(): Metadata {
  const description =
    `Temukan paket dan jadwal umrah dari ${cityList.length} kota di seluruh Indonesia: bandara keberangkatan, waktu terbang ke Jeddah, ketersediaan charter langsung, hingga paket umrah terdekat dari kota Anda.`;
  return {
    title: `Umrah dari ${cityList.length} Kota Indonesia — Paket & Jadwal per Kota`,
    description,
    alternates: { canonical: "/kota", ...languageAlternates("/kota") },
    openGraph: {
      title: `Umrah dari ${cityList.length} Kota Indonesia — Paket & Jadwal per Kota`,
      description,
      url: `${SITE}/kota`,
      type: "website",
      siteName: "SolusiHajj",
      images: [
        ogImage({
          title: `Umrah dari ${cityList.length} Kota Indonesia`,
          kicker: "Paket & Jadwal per Kota",
          sub: "Bandara keberangkatan, waktu terbang, charter langsung — dari kota Anda",
          foot: "45 kota · Seluruh pulau Indonesia",
        }),
      ],
    },
  };
}

export default function KotaIndexPage() {
  /* Kelompokkan kota per pulau — urutan sesuai kemunculan pertama di data. */
  const groups: Array<{ island: string; cities: CityPage[] }> = [];
  for (const city of cityList) {
    const group = groups.find((g) => g.island === city.island);
    if (group) {
      group.cities.push(city);
    } else {
      groups.push({ island: city.island, cities: [city] });
    }
  }

  const provincesSeen: string[] = [];
  for (const c of cityList) {
    if (!provincesSeen.includes(c.province)) provincesSeen.push(c.province);
  }
  const totalProvinces = provincesSeen.length;
  const totalCharter = cityList.filter((c) => c.directCharter).length;

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Daftar ${cityList.length} kota keberangkatan umrah di Indonesia`,
    numberOfItems: cityList.length,
    itemListElement: cityList.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `Umrah dari ${c.name}`,
      url: `${SITE}/kota/${c.slug}`,
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Beranda", url: "/" }, { name: "Umrah per Kota", url: "/kota" }])} />
      <JsonLd data={itemListJsonLd} />

      <BreadcrumbTrail items={[{ name: "Beranda", href: "/" }, { name: "Umrah per Kota" }]} />

      {/* Hero */}
      <section className="bg-brand-deep text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
          <p className="text-sm font-semibold tracking-wider text-gold uppercase">Keberangkatan Nasional</p>
          <h1 className="mt-2 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Umrah dari {cityList.length} Kota Indonesia
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85">
            Dari Sabang sampai Sorong — pilih kota keberangkatan Anda dan lihat paket umrah terdekat, bandara yang
            melayani penerbangan ke Jeddah/Madinah, serta ketersediaan charter langsung.
          </p>
          <dl className="mt-8 grid max-w-2xl grid-cols-3 gap-3">
            <div className="rounded-2xl bg-white/10 px-4 py-3">
              <dt className="text-xs font-medium text-white/70">Kota</dt>
              <dd className="text-2xl font-extrabold text-white">{cityList.length}</dd>
            </div>
            <div className="rounded-2xl bg-white/10 px-4 py-3">
              <dt className="text-xs font-medium text-white/70">Provinsi</dt>
              <dd className="text-2xl font-extrabold text-white">{totalProvinces}</dd>
            </div>
            <div className="rounded-2xl bg-white/10 px-4 py-3">
              <dt className="text-xs font-medium text-white/70">Rute Charter Langsung</dt>
              <dd className="text-2xl font-extrabold text-white">{totalCharter}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Group per pulau */}
      {groups.map((group, idx) => (
        <section
          key={group.island}
          aria-labelledby={`pulau-${idx}`}
          className={idx % 2 === 0 ? "bg-ivory" : "bg-white"}
        >
          <div className="mx-auto max-w-6xl px-4 py-12">
            <div className="flex items-center gap-2.5">
              <MapPin className="h-6 w-6 text-brand" aria-hidden="true" />
              <h2 id={`pulau-${idx}`} className="text-2xl font-extrabold tracking-tight text-brand-deep">
                {group.island}
                <span className="ml-3 align-middle text-sm font-semibold text-ink-muted">
                  {group.cities.length} kota
                </span>
              </h2>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.cities.map((city) => (
                <CityCard key={city.slug} city={city} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Catatan bawah */}
      <section aria-labelledby="catatan-kota" className="bg-gold-soft">
        <div className="mx-auto max-w-3xl px-4 py-12 text-center">
          <h2 id="catatan-kota" className="text-2xl font-extrabold tracking-tight text-brand-deep">
            Kota Anda belum ada di daftar?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink">
            Tim kami rutin membuka keberangkatan baru mengikuti permintaan jamaah. Hubungi kami — kami bantu carikan
            rute terdekat dari bandara di dekat kota Anda, termasuk opsi gabungan bus antar kota menuju titik
            keberangkatan charter.
          </p>
        </div>
      </section>
    </>
  );
}
