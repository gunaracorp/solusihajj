"use client";

import { useHashRoute } from "@/lib/solusihajj/router";
import { Header, Footer, WaFloat } from "./chrome";
import HomePage from "./pages/home";
import { CatalogPage, PackageDetailPage } from "./pages/catalog";
import { PpiuDirectoryPage, PpiuStorePage } from "./pages/ppiu";
import { VerifyPage, CheckLicensePage, EscrowPage } from "./pages/trust";
import { CalculatorPage, EducationPage, ArticlePage } from "./pages/tools";
import { AboutPage, ContactPage, FaqPage, PrivacyPage, TermsPage, NotFoundPage } from "./pages/static-pages";

/**
 * SolusiHajj R1 — "Gerbang Kepercayaan"
 * SPA berbasis hash-route: seluruh halaman R1 (beranda, katalog, detail paket,
 * direktori & toko PPIU, verifikasi, cek izin, escrow, kalkulator, edukasi,
 * halaman legal) dirender di bawah satu route `/` sesuai batas preview sandbox.
 * Untuk deployment shared hosting (dok 29/31), tiap view dipetakan ke route
 * statis Next.js dengan slug identik (URL tidak berubah dari sitemap dok 06).
 */
export default function SolusiHajjApp() {
  const { path, query } = useHashRoute();

  const segs = path.split("/").filter(Boolean);
  let view: React.ReactNode;

  if (path === "/") {
    view = <HomePage />;
  } else if (segs[0] === "paket" && segs[1]) {
    view = <PackageDetailPage slug={segs[1]} />;
  } else if (segs[0] === "paket") {
    view = <CatalogPage query={query} />;
  } else if (segs[0] === "ppiu" && segs[1]) {
    view = <PpiuStorePage slug={segs[1]} />;
  } else if (segs[0] === "ppiu") {
    view = <PpiuDirectoryPage />;
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
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{view}</main>
      <Footer />
      <WaFloat />
    </div>
  );
}
