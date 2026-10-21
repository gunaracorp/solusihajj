"use client";

import { useHashRoute } from "@/lib/solusihajj/router";
import { useSeo, useSeoDetail } from "@/lib/solusihajj/seo";
import { Header, Footer, WaFloat, I18nProvider } from "./chrome";
import HomePage from "./pages/home";
import { CatalogPage, PackageDetailPage } from "./pages/catalog";
import { PpiuDirectoryPage, PpiuStorePage } from "./pages/ppiu";
import { VerifyPage, CheckLicensePage, EscrowPage } from "./pages/trust";
import { CalculatorPage, EducationPage, ArticlePage } from "./pages/tools";
import { AboutPage, ContactPage, FaqPage, PrivacyPage, TermsPage, NotFoundPage } from "./pages/static-pages";
import { FlightGroupPage, ComparePage, NurMatchPage } from "./pages/market";
import { TravelKitPage, GlossaryPage, PartnerPage, SitemapPage } from "./pages/resources";
import NationalDataPage from "./pages/data";
import AirlinesPage from "./pages/airlines";
import EscrowLivePage from "./pages/escrow-live";
import NurMatchAiPage from "./pages/nurmatch-ai";
import BenchmarkPage from "./pages/benchmark";
import KadoPage from "./pages/kado";
import CicilanPage from "./pages/cicilan";
import { getPackage } from "@/data/packages";
import { getPpiu } from "@/data/ppiu";

/**
 * SolusiHajj R1.5 — "Marketplace Asia Superapp"
 * SPA berbasis hash-route: seluruh halaman dirender di bawah satu route `/`
 * sesuai batas preview sandbox. Untuk deployment shared hosting (dok 29/31),
 * tiap view dipetakan ke route statis Next.js dengan slug identik.
 *
 * Rute R1 (dipertahankan) + Rute baru R1.5:
 * /tiket-grup • /bandingkan • /nurmatch • /travel-kit • /glosarium
 * /partner • /peta-situs
 * Rute baru R2 (Fondasi Data Nasional):
 * /pusat-data • /maskapai
 * Rute baru R3 (AmanahEscrow Aktif + NurMatch AI Live):
 * /escrow-aktif • /nurmatch-ai
 * Rute baru R4 (Kado Umrah + Cicilan Syariah):
 * /kado-umrah • /cicilan-syariah
 */
export default function SolusiHajjApp() {
  const { path, query } = useHashRoute();
  useSeo(path);

  // SEO dinamis untuk view detail (paket/toko)
  const pkgDetail = path.startsWith("/paket/") ? getPackage(path.split("/")[2] ?? "") : undefined;
  const ppiuDetail = path.startsWith("/ppiu/") ? getPpiu(path.split("/")[2] ?? "") : undefined;
  useSeoDetail(
    "paket",
    pkgDetail?.title ?? "",
    pkgDetail
      ? `${pkgDetail.title} — ${pkgDetail.durationDays} hari, mulai Rp ${pkgDetail.basePrice.toLocaleString("id-ID")}, diselenggarakan ${getPpiu(pkgDetail.ppiuSlug)?.name}. Harga transparan, escrow, review Saksi Jamaah.`
      : undefined
  );
  useSeoDetail(
    "ppiu",
    ppiuDetail?.name ?? "",
    ppiuDetail
      ? `${ppiuDetail.name} — ${ppiuDetail.about.slice(0, 150)}…`
      : undefined
  );

  const segs = path.split("/").filter(Boolean);
  let view: React.ReactNode;

  if (path === "/") {
    view = <HomePage />;
  } else if (segs[0] === "paket" && segs[1]) {
    view = <PackageDetailPage slug={segs[1]} />;
  } else if (segs[0] === "paket") {
    view = <CatalogPage query={query} />;
  } else if (segs[0] === "tiket-grup") {
    view = <FlightGroupPage />;
  } else if (segs[0] === "maskapai") {
    view = <AirlinesPage />;
  } else if (segs[0] === "pusat-data") {
    view = <NationalDataPage />;
  } else if (segs[0] === "bandingkan") {
    view = <ComparePage />;
  } else if (segs[0] === "nurmatch") {
    view = <NurMatchPage />;
  } else if (segs[0] === "nurmatch-ai") {
    view = <NurMatchAiPage />;
  } else if (segs[0] === "escrow-aktif") {
    view = <EscrowLivePage />;
  } else if (segs[0] === "benchmark") {
    view = <BenchmarkPage />;
  } else if (segs[0] === "kado-umrah") {
    view = <KadoPage />;
  } else if (segs[0] === "cicilan-syariah") {
    view = <CicilanPage />;
  } else if (segs[0] === "ppiu" && segs[1]) {
    view = <PpiuStorePage slug={segs[1]} />;
  } else if (segs[0] === "ppiu") {
    view = <PpiuDirectoryPage query={query} />;
  } else if (segs[0] === "travel-kit") {
    view = <TravelKitPage />;
  } else if (segs[0] === "glosarium") {
    view = <GlossaryPage />;
  } else if (segs[0] === "partner") {
    view = <PartnerPage />;
  } else if (segs[0] === "peta-situs") {
    view = <SitemapPage />;
  } else if (segs[0] === "verifikasi" && segs[1] === "cek-izin-ppiu") {
    view = <CheckLicensePage />;
  } else if (segs[0] === "verifikasi") {
    view = <VerifyPage />;
  } else if (segs[0] === "escrow") {
    view = <EscrowPage />;
  } else if (segs[0] === "edukasi" && segs[1]) {
    view = <ArticlePage slug={segs[1]} />;
  } else if (segs[0] === "edukasi") {
    view = <EducationPage />;
  } else if (segs[0] === "kalkulator-haji") {
    view = <CalculatorPage />;
  } else if (segs[0] === "tentang") {
    view = <AboutPage />;
  } else if (segs[0] === "kontak") {
    view = <ContactPage />;
  } else if (segs[0] === "faq") {
    view = <FaqPage />;
  } else if (segs[0] === "kebijakan-privasi") {
    view = <PrivacyPage />;
  } else if (segs[0] === "syarat-ketentuan") {
    view = <TermsPage />;
  } else {
    view = <NotFoundPage />;
  }

  return (
    <I18nProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1" id="konten-utama">{view}</main>
        <Footer />
        <WaFloat />
      </div>
    </I18nProvider>
  );
}
