/**
 * Peta rute terlokalisasi id ↔ en — sumber tunggal hreflang alternates.
 *
 * Kontrak v2.1.0: hanya halaman indeks/marketing utama yang punya padanan EN
 * (strategi "translate top landing pages first"). Halaman detail (profil
 * direktori, artikel, matrix layanan×kota) tetap id-only + canonical mandiri.
 *
 * Dipakai oleh: metadata halaman id, halaman /en, dan sitemap alternates.
 */
import { SITE } from "@/lib/og";

export const LOCALE_ROUTE_MAP = {
  "/": "/en",
  "/layanan": "/en/services",
  "/paket": "/en/packages",
  "/direktori": "/en/directory",
  "/kota": "/en/cities",
  "/artikel": "/en/articles",
  "/glosarium": "/en/glossary",
  "/bandingkan": "/en/compare",
  "/faq": "/en/faq",
  "/katalog": "/en/catalog",
} as const;

export type LocaleRouteId = keyof typeof LOCALE_ROUTE_MAP;

/** Kembalikan blok `alternates.languages` hreflang untuk halaman id. */
export function languageAlternates(idPath: LocaleRouteId): {
  languages: Record<string, string>;
} {
  const enPath = LOCALE_ROUTE_MAP[idPath];
  return {
    languages: {
      id: `${SITE}${idPath === "/" ? "/" : idPath}`,
      en: `${SITE}${enPath}`,
      "x-default": `${SITE}${idPath === "/" ? "/" : idPath}`,
    },
  };
}

/** Padanan en untuk path id (tanpa origin), atau null bila tak ada. */
export function enCounterpart(idPath: string): string | null {
  return (LOCALE_ROUTE_MAP as Record<string, string>)[idPath] ?? null;
}

/** Daftar halaman en untuk sitemap. */
export const EN_ROUTES: Array<{ path: string; idPath: LocaleRouteId }> =
  Object.entries(LOCALE_ROUTE_MAP).map(([idPath, path]) => ({
    path,
    idPath: idPath as LocaleRouteId,
  }));
