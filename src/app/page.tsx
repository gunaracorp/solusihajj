import SolusiHajjApp from "@/components/solusihajj/app";
import { homepageFaq } from "@/data/faq";
import { packageList } from "@/data/packages";
import { flightList } from "@/data/flights";
import { ppiuList, orgOf, countryOf } from "@/data/ppiu";
import { glossaryList } from "@/data/glossary";
import { articleList } from "@/data/articles";

/* Dukungan arsitektur & sistem: by Gugun Gunara — Muhammad Lutfi Azmi
   (prabudanling · Santri Angon) · PT Top Konsultan Internasional
   (topkonsultan.web.id) · PT Digital Bisnis Manajemen (digiman.id) */

const BASE = "https://solusihajj.com";

/* ============================================================
   MEGA JSON-LD STACK — "SEO terlengkap yang pernah ada" (R1.5)
   12 tipe schema.org saling melengkapi untuk rich results:
   Organization, WebSite+SearchAction, Product+Offer+Rating,
   ItemList, FAQPage, BreadcrumbList, TravelAgency (per penyelenggara),
   TouristTrip, Event (Ramadhan), HowTo (cek izin), Service (escrow),
   DefinedTermSet (glosarium), ItemList (artikel & jadwal charter).
   ============================================================ */

const founderPersonJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE}/#founder`,
  name: "Muhammad Lutfi Azmi",
  alternateName: ["Gugun Gunara", "prabudanling", "Santri Angon"],
  jobTitle: "Founder & System Architect",
  description:
    "Master polymath dan arsitek sistem SolusiHajj — memimpin PT Top Konsultan Internasional (perizinan & sertifikasi) dan PT Digital Bisnis Manajemen (digiman.id — digitalisasi bisnis).",
  url: "https://topkonsultan.web.id",
  worksFor: [
    { "@type": "Organization", name: "PT Top Konsultan Internasional", url: "https://topkonsultan.web.id" },
    { "@type": "Organization", name: "PT Digital Bisnis Manajemen", url: "https://digiman.id" },
  ],
  sameAs: [
    "https://www.facebook.com/bossdanling",
    "https://x.com/gunzz_krenzz",
    "https://www.instagram.com/prabudanling",
    "https://www.tiktok.com/@gunaracorp",
    "https://www.threads.com/@prabudanling",
    "https://www.reddit.com/user/prabudanling/",
  ],
  knowsAbout: ["Umrah", "Haji", "Marketplace Syariah", "Arsitektur Sistem", "Perizinan Usaha", "Digitalisasi Bisnis", "Escrow Syariah"],
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE}/#organization`,
  name: "SolusiHajj",
  legalName: "PT Syarikat Solution Haji Indonesia",
  alternateName: "SolusiHajj.com",
  url: BASE,
  logo: `${BASE}/logo-gerbang-nur.svg`,
  slogan: "Amanah Anda, Aman.",
  founder: { "@id": `${BASE}/#founder` },
  description:
    "Marketplace umrah & haji terbesar di Asia yang menampung PPIU, PIHK, BPW, dan KBIHU lintas negara — dengan perlindungan dana escrow syariah dan review dari jamaah nyata.",
  foundingDate: "2023-02-11",
  identifier: [
    { "@type": "PropertyValue", name: "NIB (OSS-RBA)", value: "1102230000845" },
    { "@type": "PropertyValue", name: "Sertifikat Standar OSS", value: "11022300008450001" },
    { "@type": "PropertyValue", name: "Akta Pendirian Kemenkumham", value: "AHU-011258.AH.01.30 Tahun 2023" },
  ],
  taxID: "0627305550021000",
  address: [
    {
      "@type": "PostalAddress",
      name: "Kantor Terdaftar (NIB)",
      streetAddress: "Infiniti Office, Menara Cakrawala Lt. 12 Unit 05A, Jl. MH Thamrin Kav. 9, Kebon Sirih",
      addressLocality: "Menteng, Jakarta Pusat",
      addressRegion: "DKI Jakarta",
      postalCode: "10340",
      addressCountry: "ID",
    },
    {
      "@type": "PostalAddress",
      name: "Kantor Operasional",
      streetAddress: "Solusi Tour Lt. 1, Jl. Cinere Raya No. 32, Cinere",
      addressLocality: "Depok",
      addressRegion: "Jawa Barat",
      addressCountry: "ID",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+62-813-1651-6524",
      email: "syarikat.haji@gmail.com",
      contactType: "customer service",
      availableLanguage: ["id", "en", "ar", "ms"],
      areaServed: ["ID", "MY", "SG", "BN", "TH", "SA"],
    },
  ],
  areaServed: [
    { "@type": "Country", name: "Indonesia" },
    { "@type": "Country", name: "Malaysia" },
    { "@type": "Country", name: "Singapura" },
    { "@type": "Country", name: "Brunei Darussalam" },
    { "@type": "Country", name: "Thailand" },
  ],
  knowsAbout: ["Umrah", "Haji Khusus", "Haji Furoh", "Land Arrangement", "AmanahEscrow", "Verifikasi PPIU"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE}/#website`,
  name: "SolusiHajj",
  url: BASE,
  inLanguage: "id-ID",
  publisher: { "@id": `${BASE}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${BASE}/paket?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

/* Product + Offer + AggregateRating untuk 8 paket unggulan */
const productJsonLd = packageList
  .filter((p) => p.featured || p.product === "land")
  .slice(0, 8)
  .map((p) => {
    const ppiu = ppiuList.find((x) => x.slug === p.ppiuSlug);
    return {
      "@context": "https://schema.org",
      "@type": "Product",
      name: p.title,
      description: `${p.title} — ${p.durationDays} hari dari ${p.departCity}. Hotel Makkah: ${p.hotelMakkah.name} (${p.hotelMakkah.distanceToHaram} m dari Masjidil Haram). Diselenggarakan ${ppiu?.name}, lolos verifikasi 5 lapis.`,
      category: p.product === "land" ? "Land Arrangement Umrah" : "Paket Umrah",
      brand: { "@type": "Brand", name: "SolusiHajj Marketplace" },
      offers: {
        "@type": "Offer",
        url: `${BASE}/paket/${p.slug}`,
        priceCurrency: "IDR",
        price: p.basePrice,
        availability: "https://schema.org/InStock",
        validFrom: "2026-02-01",
        seller: { "@type": "Organization", name: ppiu?.name ?? "PPIU Partner" },
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: p.rating,
        reviewCount: p.reviewCount,
        bestRating: 5,
        worstRating: 1,
      },
    };
  });

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Paket Umrah & Land Arrangement Terverifikasi",
  numberOfItems: packageList.length,
  itemListElement: packageList.slice(0, 30).map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${BASE}/paket/${p.slug}`,
    name: p.title,
  })),
};

const flightItemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Jadwal Penerbangan Charter Grup Umrah",
  numberOfItems: flightList.length,
  itemListElement: flightList.map((f, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${f.airline} — ${f.route} (${f.transit})`,
    description: `Berangkat ${f.depart}, sisa ${f.seatsLeft} kursi dari ${f.seatsTotal}, harga grosir Rp ${f.pricePerPax.toLocaleString("id-ID")}/kursi, min. ${f.minOrder} kursi.`,
  })),
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homepageFaq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: BASE },
    { "@type": "ListItem", position: 2, name: "Katalog Paket", item: `${BASE}/paket` },
    { "@type": "ListItem", position: 3, name: "Direktori Penyelenggara", item: `${BASE}/ppiu` },
    { "@type": "ListItem", position: 4, name: "Cek Izin PPIU", item: `${BASE}/verifikasi/cek-izin-ppiu` },
  ],
};

/* TravelAgency (LocalBusiness) untuk 8 penyelenggara teratas — rich result lokal */
const travelAgencyJsonLd = ppiuList.slice(0, 8).map((p) => ({
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: p.name,
  description: p.about.slice(0, 180),
  address: {
    "@type": "PostalAddress",
    streetAddress: p.address,
    addressLocality: p.city,
    addressRegion: p.province,
    addressCountry: (p.country ?? "Indonesia").startsWith("Indo") ? "ID" : p.country === "Malaysia" ? "MY" : p.country === "Singapura" ? "SG" : p.country === "Thailand" ? "TH" : "BN",
  },
  telephone: `+${p.waPhone}`,
  areaServed: p.kemenagOffice,
  aggregateRating: { "@type": "AggregateRating", ratingValue: p.rating, reviewCount: p.reviewCount },
  MakesOffer: {
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: `${orgOf(p)} — ${countryOf(p)}` },
  },
}));

const touristTripJsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Umrah Reguler Makkah & Madinah 9 Hari dari Indonesia",
  description:
    "Itinerary umrah standar 9 hari: Jakarta → Jeddah → Makkah (umrah & ibadah di Masjidil Haram) → Madinah (Nabawi, Raudhah, Quba) → pulang. Diselenggarakan PPIU berizin Kemenag, dana dijaga escrow.",
  touristType: ["Jamaah Umrah", "Keluarga", "Lansia"],
  itinerary: {
    "@type": "ItemList",
    numberOfItems: 3,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Makkah — Masjidil Haram, Tawaf, Sa'i" },
      { "@type": "ListItem", position: 2, name: "Madinah — Masjid Nabawi, Raudhah, Masjid Quba" },
      { "@type": "ListItem", position: 3, name: "Ziarah internal — Jabal Rahmah, Jabal Uhud, Makkah & Madinah historis" },
    ],
  },
  provider: { "@id": `${BASE}/#organization` },
};

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Musim Umrah Ramadhan 1448 H",
  startDate: "2027-02-08",
  endDate: "2027-03-09",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Masjidil Haram, Makkah & Masjid Nabawi, Madinah",
    address: { "@type": "PostalAddress", addressLocality: "Makkah & Madinah", addressCountry: "SA" },
  },
  description:
    "Paket umrah Ramadhan 1448 H dari penyelenggara terverifikasi — itikaf, tarawih di Haram, dan berbuka bersama jamaah. Kuota terbatas; dana dijaga escrow 40/40/20.",
  organizer: { "@id": `${BASE}/#organization` },
  offers: {
    "@type": "Offer",
    priceCurrency: "IDR",
    availability: "https://schema.org/LimitedAvailability",
    url: `${BASE}/paket?type=ramadhan`,
  },
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Cara Mengecek Izin PPIU Sebelum Transfer Dana Umrah",
  description:
    "Empat langkah memverifikasi legalitas travel umrah Anda sebelum membayar apa pun — melindungi Anda dari travel tanpa izin.",
  totalTime: "P0DT0H10M",
  step: [
    { "@type": "HowToStep", position: 1, name: "Minta nomor izin", text: "Tanyakan nomor SK izin PPIU (format: PPIU-XXXX) kepada travel. Travel amanah tidak akan keberatan." },
    { "@type": "HowToStep", position: 2, name: "Cek di kanal resmi", text: "Masukkan nomor/nama di SIMPU Kemenag (simpu.kemenag.go.id) atau gunakan tool Cek Izin PPIU gratis di SolusiHajj." },
    { "@type": "HowToStep", position: 3, name: "Cocokkan identitas", text: "Pastikan nama PT, alamat kantor, dan masa berlaku izin sama dengan yang ditawarkan sales." },
    { "@type": "HowToStep", position: 4, name: "Amankan dana via escrow", text: "Transfer hanya ke rekening penampungan (escrow) bank syariah — bukan rekening pribadi — agar dana rilis bertahap setelah Anda terlayani." },
  ],
};

const escrowServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AmanahEscrow",
  serviceType: "Perlindungan dana jamaah (escrow syariah)",
  description:
    "Dana paket umrah jamaah disimpan di rekening penampungan bank syariah mitra dan dirilis bertahap 40/40/20 sesuai progres ibadah — bukan rekening travel.",
  provider: { "@id": `${BASE}/#organization` },
  areaServed: { "@type": "Country", name: "Indonesia" },
  offers: { "@type": "Offer", price: 0, priceCurrency: "IDR", description: "Termasuk dalam setiap transaksi di SolusiHajj — tanpa biaya tambahan untuk jamaah." },
};

const glossaryJsonLd = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  name: "Glosarium Istilah Haji & Umrah",
  description: `${glossaryList.length} istilah penting seputar umrah dan haji dijelaskan dengan bahasa manusia.`,
  hasDefinedTerm: glossaryList.slice(0, 20).map((g) => ({
    "@type": "DefinedTerm",
    name: g.term,
    description: g.short,
    url: `${BASE}/glosarium#${encodeURIComponent(g.term)}`,
  })),
};

const articleItemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Artikel Edukasi Umrah & Haji",
  itemListElement: articleList.map((a, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${BASE}/edukasi/${a.slug}`,
    name: a.title,
  })),
};

const reviewAggJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Marketplace SolusiHajj",
  description: "Platform pembanding paket umrah dengan escrow dan review terverifikasi.",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    reviewCount: ppiuList.reduce((a, p) => a + p.reviewCount, 0),
    bestRating: 5,
  },
};

const allSchemas = [
  orgJsonLd,
  founderPersonJsonLd,
  websiteJsonLd,
  ...productJsonLd,
  itemListJsonLd,
  flightItemListJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
  ...travelAgencyJsonLd,
  touristTripJsonLd,
  eventJsonLd,
  howToJsonLd,
  escrowServiceJsonLd,
  glossaryJsonLd,
  articleItemListJsonLd,
  reviewAggJsonLd,
];

export default function Page() {
  return (
    <>
      {allSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <SolusiHajjApp />
    </>
  );
}
