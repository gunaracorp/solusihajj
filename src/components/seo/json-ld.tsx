/* Utilitas JSON-LD bersama untuk halaman SEO App Router.
   Render: <JsonLd data={...} /> — Next.js menyarankan <script type="application/ld+json">. */

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export const SITE = "https://solusihajj.com";

export function breadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE}${item.url}`,
    })),
  };
}

export function faqJsonLd(faqs: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceJsonLd(opts: {
  name: string;
  description: string;
  url: string;
  category?: string;
  priceFrom?: number;
}) {
  const offers =
    typeof opts.priceFrom === "number" && opts.priceFrom > 0
      ? {
          "@type": "Offer",
          priceCurrency: "IDR",
          price: opts.priceFrom,
          url: opts.url.startsWith("http") ? opts.url : `${SITE}${opts.url}`,
          availability: "https://schema.org/InStock",
        }
      : undefined;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    serviceType: opts.category,
    url: opts.url.startsWith("http") ? opts.url : `${SITE}${opts.url}`,
    provider: { "@id": `${SITE}/#organization` },
    areaServed: [
      { "@type": "Country", name: "Indonesia" },
      { "@type": "Country", name: "Saudi Arabia" },
    ],
    ...(offers ? { offers } : {}),
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE}/#organization`,
    name: "SolusiHajj",
    legalName: "PT Syarikat Solution Haji Indonesia",
    url: SITE,
    logo: `${SITE}/logo-gerbang-nur.svg`,
    slogan: "Amanah Anda, Aman.",
    foundingDate: "2023-02-11",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Menara Cakrawala Lt. 12 Unit 05A, Jl. MH Thamrin Kav. 9",
      addressLocality: "Jakarta Pusat",
      addressRegion: "DKI Jakarta",
      postalCode: "10340",
      addressCountry: "ID",
    },
    sameAs: [
      "https://www.facebook.com/bossdanling",
      "https://x.com/gunzz_krenzz",
      "https://www.instagram.com/prabudanling",
      "https://www.tiktok.com/@gunaracorp",
    ],
  };
}
