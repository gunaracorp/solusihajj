import type { Metadata } from "next";
import Link from "next/link";
import { APP_VERSION, RELEASE_LABEL } from "@/lib/version";

/**
 * Layout seksi EN — v2.1.0 "Sinyal Global".
 *
 * Chrome bahasa Inggris untuk /en/*. Rute statis murni di route group (en)
 * TANPA middleware: nol dampak ke 13.984 URL Indonesia, 100% SSG.
 * Terjemahan memakai next-intl `getTranslations({ locale: "en" })` eksplisit
 * (mode "without i18n routing").
 */

export const metadata: Metadata = {
  title: {
    default: "SolusiHajj — Asia's Hajj & Umrah Marketplace | Your Trust, Secured.",
    template: "%s | SolusiHajj",
  },
  description:
    "Compare verified Hajj & Umrah operators across Asia — packages, land arrangement and group charter flights. Shariah escrow 40/40/20, 5-layer verification, reviews from real pilgrims.",
  openGraph: { locale: "en_US", siteName: "SolusiHajj", type: "website" },
};

/** Navigasi seksi EN — hanya menunjuk halaman en yang benar-benar ada. */
export const EN_NAV = [
  { href: "/en", label: "Home" },
  { href: "/en/services", label: "Services" },
  { href: "/en/packages", label: "Packages" },
  { href: "/en/directory", label: "Directory" },
  { href: "/en/cities", label: "Cities" },
  { href: "/en/articles", label: "Guides" },
];

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-ivory">
      {/* Root <html lang="id"> milik layout utama — koreksi bahasa dokumen
          untuk seksi EN tanpa restrukturisasi root layout. */}
      <script dangerouslySetInnerHTML={{ __html: `document.documentElement.lang="en";` }} />

      <header className="sticky top-0 z-40 border-b border-line-warm bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
          <Link href="/en" className="flex items-baseline gap-2">
            <span className="text-lg font-extrabold tracking-tight text-brand-deep">
              Solusi<span className="text-brand">Hajj</span>
            </span>
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted sm:inline">
              Your trust, secured.
            </span>
          </Link>
          <nav aria-label="English navigation" className="hidden items-center gap-5 md:flex">
            {EN_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-ink transition-colors hover:text-brand"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/"
            lang="id"
            hrefLang="id"
            className="rounded-full bg-brand px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-brand-deep"
          >
            🇮🇩 Versi Indonesia
          </Link>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="mt-auto border-t border-line-warm bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="text-base font-extrabold text-brand-deep">SolusiHajj</p>
            <p className="mt-2 text-sm text-ink-muted">
              The trust-first Hajj &amp; Umrah marketplace — every licensed operator in Asia,
              one gateway. <span lang="id">Amanah Anda, Aman.</span>
            </p>
          </div>
          <nav aria-label="English sections">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink-muted">Explore</p>
            <ul className="mt-3 space-y-2 text-sm">
              {EN_NAV.slice(1).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-ink transition-colors hover:text-brand">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/en/compare" className="text-ink transition-colors hover:text-brand">
                  Compare
                </Link>
              </li>
              <li>
                <Link href="/en/faq" className="text-ink transition-colors hover:text-brand">
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>
          <nav aria-label="Indonesian pages" lang="id">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink-muted">
              Bahasa Indonesia
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/" hrefLang="id" className="text-ink hover:text-brand">Beranda (ID)</Link></li>
              <li><Link href="/artikel" hrefLang="id" className="text-ink hover:text-brand">112 Artikel &amp; Panduan</Link></li>
              <li><Link href="/glosarium" hrefLang="id" className="text-ink hover:text-brand">Glosarium Haji &amp; Umrah</Link></li>
              <li><Link href="/kebijakan-privasi" hrefLang="id" className="text-ink hover:text-brand">Kebijakan Privasi</Link></li>
              <li><Link href="/syarat-ketentuan" hrefLang="id" className="text-ink hover:text-brand">Syarat &amp; Ketentuan</Link></li>
            </ul>
          </nav>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink-muted">Data &amp; feeds</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="/feed.xml" className="text-ink hover:text-brand">RSS feed</a></li>
              <li><a href="/llms.txt" className="text-ink hover:text-brand">llms.txt</a></li>
              <li><a href="/sitemap.xml" className="text-ink hover:text-brand">Sitemap</a></li>
            </ul>
            <p
              className="mt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-muted/70"
              aria-label={`Release ${RELEASE_LABEL}`}
            >
              Release {RELEASE_LABEL} · SemVer {APP_VERSION}
            </p>
          </div>
        </div>
        <div className="border-t border-line-warm py-4 text-center text-xs text-ink-muted">
          © {new Date().getFullYear()} PT Syarikat Solution Haji Indonesia — SolusiHajj. Pure
          marketplace: operators sell, SolusiHajj verifies.
        </div>
      </footer>
    </div>
  );
}
