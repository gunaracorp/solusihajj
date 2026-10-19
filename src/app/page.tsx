import SolusiHajjApp from "@/components/solusihajj/app";
import { homepageFaq } from "@/data/faq";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homepageFaq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SolusiHajj",
  url: "https://solusihajj.com",
  logo: "https://solusihajj.com/logo.svg",
  slogan: "Amanah Anda, Aman.",
  description:
    "Platform pembanding paket umrah dari PPIU terverifikasi, dengan perlindungan dana escrow dan ulasan jamaah nyata.",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+62-812-0000-0000",
      contactType: "customer service",
      availableLanguage: ["Indonesian"],
    },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SolusiHajj",
  url: "https://solusihajj.com",
  inLanguage: "id-ID",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <SolusiHajjApp />
    </>
  );
}
