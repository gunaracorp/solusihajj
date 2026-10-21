import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown, HelpCircle, Mail, MessageCircle } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { JsonLd, SITE, breadcrumbJsonLd, faqJsonLd } from "@/components/seo/json-ld";
import { ogImage } from "@/lib/og";
import { languageAlternates } from "@/lib/i18n-routes";

/**
 * /en/faq — 8 straight answers about licenses, escrow, verification and booking.
 * hreflang counterpart: /faq (id).
 */

const FAQS = [
  {
    q: "Which licenses should an Umrah operator have, and does SolusiHajj check them?",
    a: "Indonesian Umrah organizers must hold a PPIU license (Penyelenggara Perjalanan Ibadah Umrah) issued by the Ministry of Religious Affairs (Kemenag) under PMA 21/2020. Special Hajj requires a PIHK quota holder license, and operators based in Saudi Arabia need a Ministry of Hajj and Umrah (UTO) license. Yes — we check every one: a listing only appears after the license number, issuing office and validity are confirmed against official registries, and the license number is printed on each operator's profile so you can re-verify it yourself.",
  },
  {
    q: "What does escrow 40/40/20 actually mean for my money?",
    a: "Your payment goes into a third-party shariah escrow account — never into the operator's own account. It is released in three tranches: 40% once your visa, tickets and Makkah hotel voucher are issued and you check in; 40% in stages while the pilgrimage is actually running (hotels occupied, buses delivered, mutawif services rendered); and the final 20% after your group returns home. If a trip is cancelled or an operator fails to deliver, money that has not been released comes straight back — that is the whole point.",
  },
  {
    q: "What is 5-layer verification?",
    a: "Before an operator appears anywhere on SolusiHajj we run five checks: (1) the government license registry (Kemenag/SIMPU or the equivalent foreign authority), (2) association rosters such as HIMPUH, (3) Nusuk provider lists for Saudi-side registration, (4) sanctions and dispute screening, and (5) live status checks — office audits, track record of departures, and current standing. Verification is not a one-time badge; profiles show when each layer was last confirmed.",
  },
  {
    q: "Where do the reviews come from — can operators write their own?",
    a: "No. Reviews on SolusiHajj come exclusively through the Saksi Jamaah system: only pilgrims who completed a booked trip — paid through escrow and confirmed returned — can leave a review. Each score covers six dimensions: honesty of the offer, mutawif quality, hotels, food, buses, and airport handling. Operator replies are allowed and shown, but self-promotion from unverified accounts is not.",
  },
  {
    q: "Can I get a refund if my plans change?",
    a: "Yes, on a published ladder. Roughly 30+ days before departure you get close to a full refund minus already-issued visa and non-recoverable hotel deposits; 29–14 days out, 70%; 13–7 days, 50%; 6–1 days, 30%; and a no-show can usually be transferred to a family member with complete passport data instead of being forfeited. Exact percentages per package are printed on every package page — and because escrow holds the funds, refunds are actually recoverable rather than dependent on the operator's goodwill.",
  },
  {
    q: "How do I verify an operator by myself, before paying anything?",
    a: "Three steps: (1) ask for the exact legal entity name and license number — never accept a trade name alone; (2) check it on the official Kemenag channel (SIMPU) or use the free Cek Izin PPIU tool on this platform, which shows status, license number and verification date; (3) match the receiving account — a company account in the licensed entity's name, never a personal bank account. If an agent resists any of these steps, walk away; legitimate PPIU get these questions daily and answer happily.",
  },
  {
    q: "Do group charter flights exist from my city?",
    a: "For most of the year, charter group flights concentrate on the biggest hubs — Jakarta, Surabaya, Medan and Makassar — with Jakarta carrying the densest schedule, including direct Garuda, Saudia and Lion Air services to Jeddah and Madinah. Our cities index covers 45 Indonesian departure cities and flags which ones currently have direct charter availability versus transit routings, so you can judge realistically whether a 'depart from your hometown' offer is convenient or a connection in disguise.",
  },
  {
    q: "How do I contact SolusiHajj?",
    a: "Every package, service and operator page carries a contact button that routes to our team, and each operator profile links to its own official channels. For platform-level questions — escrow status, review disputes, data corrections — reach us through the contact desk on the Indonesian portal or by email. We track and publish our median response time, because a trust company that answers slowly is making a statement.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({ locale: "en", namespace: "Faq" });
  const title = "Hajj & Umrah FAQ — Licenses, Escrow, Verification & Refunds";
  const description = t("sub");
  return {
    title,
    description,
    alternates: { canonical: `${SITE}/en/faq`, ...languageAlternates("/faq") },
    openGraph: {
      title,
      description,
      url: `${SITE}/en/faq`,
      siteName: "SolusiHajj",
      locale: "en_US",
      type: "website",
      images: [
        ogImage({
          title: "Hajj & Umrah FAQ",
          kicker: "Licenses · escrow · verification",
          badge: "5-Layer Verified",
          sub: "Straight answers before you book",
          foot: "SolusiHajj",
        }),
      ],
    },
  };
}

export default async function EnFaqPage() {
  const t = await getTranslations({ locale: "en", namespace: "Faq" });
  const tc = await getTranslations({ locale: "en", namespace: "Common" });

  return (
    <>
      {/* hreflang alternates — explicit lowercase <link> (React 19 hoists to <head>). */}
      <link rel="alternate" hreflang="id" href={`${SITE}/faq`} />
      <link rel="alternate" hreflang="en" href={`${SITE}/en/faq`} />
      <link rel="alternate" hreflang="x-default" href={`${SITE}/faq`} />

      <JsonLd data={breadcrumbJsonLd([
        { name: "Home", url: `${SITE}/en` },
        { name: "FAQ", url: `${SITE}/en/faq` },
      ])} />
      <JsonLd data={faqJsonLd(FAQS)} />

      {/* HERO */}
      <section className="border-b border-line-warm bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-gold-deep">
            <HelpCircle className="h-4 w-4" aria-hidden="true" /> Straight answers
          </p>
          <h1 className="mt-4 max-w-3xl text-2xl font-extrabold leading-tight tracking-tight text-brand-deep md:text-3xl">
            {t("title")}
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-muted">{t("sub")}</p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
            Eight questions cover most of what pilgrims ask us before their first booking — from
            which licenses matter (PPIU, PIHK, UTO) to exactly when your escrow money moves. No
            hedging: if something depends on the operator&rsquo;s own terms, we say where to find them.
          </p>
        </div>
      </section>

      {/* FAQ — native details/summary (SSR content always in DOM, no hydration risk) */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="rounded-2xl border border-line-warm bg-white px-4 sm:px-6">
          {FAQS.map((f, i) => (
            <details
              key={i}
              name="faq-en"
              className="group border-b border-line-warm last:border-b-0"
            >
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-base font-semibold text-ink transition-colors hover:text-brand [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDown
                  className="h-4 w-4 shrink-0 text-ink-muted transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="pb-5 text-sm leading-relaxed text-ink-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CONTACT & CROSS-LINK */}
      <section className="border-t border-line-warm bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-xl font-extrabold text-brand-deep md:text-2xl">Still deciding?</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl border border-line-warm bg-ivory p-6">
              <MessageCircle className="h-6 w-6 text-brand" aria-hidden="true" />
              <p className="mt-3 text-sm font-extrabold text-brand-deep">Talk to the team</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                Open any package or service page and use the contact button — you will reach a
                coordinator who can verify licenses and escrow terms for the exact offer you are
                looking at.
              </p>
            </article>
            <article className="rounded-2xl border border-line-warm bg-ivory p-6">
              <Mail className="h-6 w-6 text-brand" aria-hidden="true" />
              <p className="mt-3 text-sm font-extrabold text-brand-deep">Platform questions</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                Escrow status, review disputes or data corrections: use the contact desk on the
                Indonesian portal. Details and response-time stats are published there.
              </p>
            </article>
          </div>
          <p className="mt-8 text-sm text-ink-muted">
            <Link href="/faq" hrefLang="id" className="font-semibold text-brand hover:underline">
              {tc("inIndonesian")}
            </Link>{" "}
            — FAQ lengkap dengan 10 pertanyaan tambahan tersedia dalam Bahasa Indonesia.
          </p>
        </div>
      </section>
    </>
  );
}
