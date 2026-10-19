"use client";

/**
 * CHROME R1.5 — Header (3 dropdown + kontrol tema/lansia/bahasa), Footer,
 * WaFloat, Breadcrumb. Palet & komponen tetap Design System "Amanah" (dok 14).
 */

import { useEffect, useState, useSyncExternalStore } from "react";
import { ChevronDown, Menu, X, MessageCircle, ShieldCheck, Moon, Sun, Type, Globe, Sparkles, GitCompareArrows } from "lucide-react";
import { Link, useHashRoute, scrollToId } from "@/lib/solusihajj/router";
import { waLink, waMessages } from "@/lib/solusihajj/wa";
import { I18nProvider, useI18n, type Lang } from "@/lib/solusihajj/i18n";
import { cn } from "@/lib/utils";

/* ================= UI PREFS — dark mode & mode lansia (persist, hydration-safe) ================= */
type Prefs = { dark: boolean; elder: boolean };

const PREFS_EVT = "shj-prefs";
let prefsCache = "{}";

function prefsSubscribe(cb: () => void): () => void {
  window.addEventListener(PREFS_EVT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(PREFS_EVT, cb);
    window.removeEventListener("storage", cb);
  };
}

function prefsSnapshot(): string {
  const raw = window.localStorage.getItem("shj_prefs") ?? "{}";
  if (raw !== prefsCache) prefsCache = raw;
  return prefsCache;
}

const prefsServerSnapshot = "{}";

function parsePrefs(json: string): Prefs {
  try {
    const p = JSON.parse(json) as Partial<Prefs>;
    return { dark: !!p.dark, elder: !!p.elder };
  } catch {
    return { dark: false, elder: false };
  }
}

function usePrefs(): [Prefs, (p: Prefs) => void] {
  const json = useSyncExternalStore(prefsSubscribe, prefsSnapshot, () => prefsServerSnapshot);
  const prefs = parsePrefs(json);
  // Sinkronkan class ke <html> setiap kali prefs berubah (eksternal: DOM)
  useEffect(() => {
    document.documentElement.classList.toggle("dark", prefs.dark);
    document.documentElement.classList.toggle("elder", prefs.elder);
  }, [prefs.dark, prefs.elder]);
  const set = (p: Prefs) => {
    try {
      window.localStorage.setItem("shj_prefs", JSON.stringify(p));
    } catch {
      /* noop */
    }
    prefsCache = JSON.stringify(p);
    window.dispatchEvent(new Event(PREFS_EVT));
  };
  return [prefs, set];
}

/* ================= LOGO ================= */
export function Logo({ compact = false, light = false }: { compact?: boolean; light?: boolean }) {
  return (
    <Link to="/" className="inline-flex items-center gap-2.5" ariaLabel="SolusiHajj — Beranda">
      <img src="/logo.svg" alt="Logo SolusiHajj" className="h-9 w-9" />
      {!compact && (
        <span
          className={cn(
            "text-xl font-extrabold tracking-tight",
            light ? "text-ivory" : "text-brand-deep dark:text-ivory"
          )}
        >
          SolusiHajj<span className="text-gold">.</span>
        </span>
      )}
    </Link>
  );
}

/* ================= NAV DATA ================= */
function useNavData() {
  const { t } = useI18n();
  return {
    cariPaketItems: [
      { to: "/paket?produk=full", label: t("nav.full") },
      { to: "/paket?produk=land", label: t("nav.land") },
      { to: "/tiket-grup", label: t("nav.flights") },
      { to: "/nurmatch", label: t("nav.nurmatch"), icon: Sparkles },
      { to: "/bandingkan", label: "Bandingkan Paket", icon: GitCompareArrows },
    ],
    direktoriItems: [
      { to: "/ppiu", label: t("nav.providers") },
      { to: "/verifikasi/cek-izin-ppiu", label: "Cek Izin PPIU ⭐", highlight: true },
      { to: "/verifikasi", label: t("nav.verify") },
      { to: "/escrow", label: t("nav.escrow") },
    ],
    panduanItems: [
      { to: "/edukasi", label: t("nav.education") },
      { to: "/glosarium", label: t("nav.glossary") },
      { to: "/travel-kit", label: t("nav.kit") },
      { to: "/kalkulator-haji", label: "Kalkulator Simpanan Haji" },
      { to: "/faq", label: "FAQ" },
    ],
    directItems: [
      { to: "/partner", label: t("nav.partner") },
      { to: "/tentang", label: t("nav.about") },
    ],
  };
}

/* ================= DROPDOWN NAV ================= */
function NavDropdown({ label, items, active }: { label: string; items: { to: string; label: string; highlight?: boolean; icon?: React.ElementType }[]; active: boolean }) {
  return (
    <div className="group relative">
      <button
        className={cn(
          "inline-flex h-11 items-center gap-1 rounded-xl px-4 text-[15px] font-semibold text-ink transition-colors hover:bg-brand-soft dark:text-ivory dark:hover:bg-white/10",
          active && "text-brand dark:text-gold"
        )}
        aria-haspopup="true"
      >
        {label} <ChevronDown size={15} className="transition-transform group-hover:rotate-180" />
      </button>
      <div className="invisible absolute left-0 top-full w-72 translate-y-1 rounded-2xl border border-line-warm bg-card p-2 opacity-0 shadow-warm transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 dark:border-white/10 dark:bg-[#12332a]">
        {items.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={cn(
              "flex min-h-11 items-center rounded-xl px-4 py-2.5 text-[15px] text-ink transition-colors hover:bg-brand-soft dark:text-ivory dark:hover:bg-white/10",
              item.highlight && "font-bold text-brand dark:text-gold"
            )}
          >
            {item.icon && <item.icon size={15} className="mr-2 text-gold-deep dark:text-gold" />}
            {item.highlight && !item.icon && <ShieldCheck size={16} className="mr-2 text-gold" />}
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ================= HEADER ================= */
export function Header() {
  const { path } = useHashRoute();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prefs, setPrefs] = usePrefs();
  const { lang, setLang, t } = useI18n();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Tutup drawer saat berpindah halaman — pola "adjust state during render"
  const [prevPath, setPrevPath] = useState(path);
  if (prevPath !== path) {
    setPrevPath(path);
    if (open) setOpen(false);
  }

  const nav = useNavData();
  const isActive = (p: string) => path === p || path.startsWith(p + "/");

  const langs: { v: Lang; l: string }[] = [
    { v: "id", l: "ID" },
    { v: "en", l: "EN" },
    { v: "ar", l: "ع" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-ivory/95 backdrop-blur transition-shadow dark:bg-[#0d2b23]/95",
        scrolled ? "border-line-warm shadow-card dark:border-white/10" : "border-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 md:h-[72px] md:px-8">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigasi utama">
          <NavDropdown label={t("nav.packages")} items={nav.cariPaketItems} active={isActive("/paket") || isActive("/tiket-grup") || isActive("/nurmatch")} />
          <NavDropdown label={t("nav.directory")} items={nav.direktoriItems} active={isActive("/ppiu") || isActive("/verifikasi") || isActive("/escrow")} />
          <NavDropdown label={t("nav.guide")} items={nav.panduanItems} active={isActive("/edukasi") || isActive("/glosarium") || isActive("/travel-kit")} />
          {nav.directItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "inline-flex h-11 items-center rounded-xl px-4 text-[15px] font-semibold text-ink transition-colors hover:bg-brand-soft dark:text-ivory dark:hover:bg-white/10",
                isActive(item.to) && "text-brand dark:text-gold"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          {/* Bahasa */}
          <div className="hidden items-center rounded-xl border border-line-warm p-0.5 sm:flex dark:border-white/15" role="group" aria-label="Pilih bahasa (demo)">
            {langs.map((l) => (
              <button
                key={l.v}
                onClick={() => setLang(l.v)}
                className={cn(
                  "min-h-9 rounded-lg px-2 text-xs font-extrabold transition-colors",
                  lang === l.v ? "bg-brand text-ivory" : "text-ink-muted hover:text-brand dark:text-ivory/60"
                )}
                aria-pressed={lang === l.v}
              >
                {l.l}
              </button>
            ))}
          </div>
          {/* Mode lansia */}
          <button
            onClick={() => setPrefs({ ...prefs, elder: !prefs.elder })}
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-xl border transition-colors",
              prefs.elder ? "border-gold bg-gold-soft text-gold-deep" : "border-line-warm text-ink hover:bg-brand-soft dark:border-white/15 dark:text-ivory dark:hover:bg-white/10"
            )}
            aria-pressed={prefs.elder}
            aria-label="Mode lansia — perbesar huruf"
            title="Mode Lansia (A+)"
          >
            <Type size={18} />
          </button>
          {/* Dark mode */}
          <button
            onClick={() => setPrefs({ ...prefs, dark: !prefs.dark })}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line-warm text-ink transition-colors hover:bg-brand-soft dark:border-white/15 dark:text-ivory dark:hover:bg-white/10"
            aria-pressed={prefs.dark}
            aria-label={prefs.dark ? "Matikan mode gelap" : "Aktifkan mode gelap"}
            title={prefs.dark ? "Terang" : "Malam Madinah (gelap)"}
          >
            {prefs.dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link
            to="/paket"
            className="hidden h-11 items-center rounded-xl bg-brand px-5 text-[15px] font-bold text-ivory transition-colors hover:bg-brand-deep md:inline-flex"
          >
            {t("nav.packages")} →
          </Link>
          <a
            href={waLink(waMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand/30 text-brand transition-colors hover:bg-brand-soft dark:text-gold"
            aria-label="Hubungi kami via WhatsApp"
          >
            <MessageCircle size={20} />
          </a>
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-ink transition-colors hover:bg-brand-soft lg:hidden dark:text-ivory"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "overflow-hidden border-t border-line-warm bg-ivory transition-[max-height] duration-300 lg:hidden dark:border-white/10 dark:bg-[#0d2b23]",
          open ? "max-h-[900px]" : "max-h-0 border-t-0"
        )}
      >
        <nav className="space-y-1 px-4 py-4" aria-label="Navigasi mobile">
          <p className="px-3 pb-1 text-xs font-bold uppercase tracking-wider text-ink-muted">{t("nav.packages")}</p>
          {nav.cariPaketItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center rounded-xl px-3 py-2 text-[16px] text-ink hover:bg-brand-soft dark:text-ivory"
            >
              {item.icon && <item.icon size={16} className="mr-2 text-gold-deep" />}
              {item.label}
            </Link>
          ))}
          <p className="px-3 pb-1 pt-2 text-xs font-bold uppercase tracking-wider text-ink-muted">{t("nav.directory")}</p>
          {nav.direktoriItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={cn("flex min-h-12 items-center rounded-xl px-3 py-2 text-[16px] text-ink hover:bg-brand-soft dark:text-ivory", item.highlight && "font-bold text-brand dark:text-gold")}
            >
              {item.label}
            </Link>
          ))}
          <p className="px-3 pb-1 pt-2 text-xs font-bold uppercase tracking-wider text-ink-muted">{t("nav.guide")}</p>
          {nav.panduanItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center rounded-xl px-3 py-2 text-[16px] text-ink hover:bg-brand-soft dark:text-ivory"
            >
              {item.label}
            </Link>
          ))}
          <div className="my-2 border-t border-line-warm dark:border-white/10" />
          {nav.directItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center rounded-xl px-3 py-2 text-[16px] text-ink hover:bg-brand-soft dark:text-ivory"
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center justify-between gap-2 px-3 pt-2">
            <div className="flex items-center gap-1 rounded-xl border border-line-warm p-0.5 dark:border-white/15">
              {langs.map((l) => (
                <button
                  key={l.v}
                  onClick={() => setLang(l.v)}
                  className={cn("min-h-9 rounded-lg px-2.5 text-xs font-extrabold", lang === l.v ? "bg-brand text-ivory" : "text-ink-muted dark:text-ivory/60")}
                >
                  {l.l}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setPrefs({ ...prefs, elder: !prefs.elder })}
                className={cn("inline-flex h-10 w-10 items-center justify-center rounded-xl border", prefs.elder ? "border-gold bg-gold-soft text-gold-deep" : "border-line-warm text-ink dark:border-white/15 dark:text-ivory")}
                aria-label="Mode lansia"
              >
                <Type size={17} />
              </button>
              <button
                onClick={() => setPrefs({ ...prefs, dark: !prefs.dark })}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line-warm text-ink dark:border-white/15 dark:text-ivory"
                aria-label="Mode gelap"
              >
                {prefs.dark ? <Sun size={17} /> : <Moon size={17} />}
              </button>
            </div>
          </div>
          <Link
            to="/paket"
            onClick={() => setOpen(false)}
            className="mt-2 flex min-h-12 items-center justify-center rounded-xl bg-brand px-5 font-bold text-ivory"
          >
            {t("nav.packages")} →
          </Link>
        </nav>
      </div>
    </header>
  );
}

/* ================= FOOTER (dok 06: 3 kolom + NAP + legal line) ================= */
export function Footer() {
  return (
    <footer className="mt-auto bg-brand-deep text-ivory dark:bg-[#07211a]">
      <div className="pattern-light">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          <div className="grid gap-10 md:grid-cols-4">
            <div>
              <Logo light />
              <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-ivory/70">
                Marketplace umrah & haji terbesar Asia — menampung PPIU, PIHK, BPW, dan KBIHU lintas negara. Dana jamaah
                dijaga escrow syariah, review hanya dari jamaah nyata, izin bisa dicek publik.
              </p>
              <p className="font-amiri mt-4 text-2xl text-gold">أمانتك، آمنة</p>
            </div>
            <nav aria-label="Footer — Marketplace">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-gold">Marketplace</h3>
              <ul className="space-y-2.5 text-[15px]">
                {[
                  { to: "/paket", label: "Cari Paket Umrah" },
                  { to: "/paket?produk=land", label: "Land Arrangement" },
                  { to: "/tiket-grup", label: "Tiket Charter Grup" },
                  { to: "/bandingkan", label: "Bandingkan Paket" },
                  { to: "/nurmatch", label: "NurMatch AI" },
                  { to: "/ppiu", label: "Direktori Penyelenggara Asia" },
                ].map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-ivory/75 transition-colors hover:text-gold">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Footer — Kepercayaan dan Panduan">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-gold">Kepercayaan & Panduan</h3>
              <ul className="space-y-2.5 text-[15px]">
                {[
                  { to: "/verifikasi", label: "Verifikasi 5 Lapis" },
                  { to: "/escrow", label: "AmanahEscrow" },
                  { to: "/verifikasi/cek-izin-ppiu", label: "Cek Izin PPIU" },
                  { to: "/travel-kit", label: "Travel Kit Jamaah" },
                  { to: "/kalkulator-haji", label: "Kalkulator Simpanan Haji" },
                  { to: "/glosarium", label: "Glosarium Istilah" },
                  { to: "/edukasi", label: "Panduan Umrah (Edukasi)" },
                  { to: "/faq", label: "FAQ" },
                ].map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-ivory/75 transition-colors hover:text-gold">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Footer — Perusahaan">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-gold">Perusahaan</h3>
              <ul className="space-y-2.5 text-[15px]">
                {[
                  { to: "/partner", label: "Untuk Penyelenggara" },
                  { to: "/tentang", label: "Tentang Kami" },
                  { to: "/kontak", label: "Kontak" },
                  { to: "/peta-situs", label: "Peta Situs" },
                  { to: "/kebijakan-privasi", label: "Kebijakan Privasi" },
                  { to: "/syarat-ketentuan", label: "Syarat & Ketentuan" },
                ].map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-ivory/75 transition-colors hover:text-gold">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="mt-10 rounded-2xl bg-white/5 p-5">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-gold">Kontak & Legal</h3>
            <address className="space-y-1.5 text-[15px] not-italic text-ivory/75">
              <p>PT SolusiHajj Digital Amanah — Jl. Bumi Raya No. 8, Pasar Minggu, Jakarta Selatan 12520</p>
              <p>
                WA:{" "}
                <a href={waLink(waMessages.general)} target="_blank" rel="noopener noreferrer" className="font-semibold text-gold hover:underline">
                  +62 812-0000-0000
                </a>{" "}
                • Email:{" "}
                <a href="mailto:salam@solusihajj.com" className="font-semibold text-gold hover:underline">
                  salam@solusihajj.com
                </a>
              </p>
              <p>Jam operasional: Senin–Sabtu, 08.00–17.00 WIB (respons WhatsApp &lt; 15 menit jam kerja)</p>
            </address>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-[13px] leading-relaxed text-ivory/60">
              © 2026 PT SolusiHajj Digital Amanah — Platform teknologi perlindungan jamaah. SolusiHajj bukan penyelenggara
              perjalanan ibadah; kontrak perjalanan dibuat langsung antara jamaah dan penyelenggara (PPIU/PIHK/BPW).
            </p>
            <p className="mt-2 text-[12px] text-ivory/40">
              Data pada versi R1.5 ini merupakan data demo pengembangan. Verifikasi resmi izin tetap melalui kanal Kemenag
              / otoritas negara masing-masing.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ================= WA FLOAT ================= */
export function WaFloat() {
  const { path } = useHashRoute();
  // Di detail paket, sticky buy bar menempati dasar layar (mobile) — angkat float di atasnya
  const onDetail = path.startsWith("/paket/");
  const onTray = path === "/paket" || path === "/bandingkan";
  return (
    <a
      href={waLink(waMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1E7F4F] text-white shadow-green transition-transform hover:scale-105",
        onDetail ? "bottom-24 md:bottom-5" : onTray ? "bottom-20 md:bottom-5" : "bottom-5"
      )}
      aria-label="Chat WhatsApp — respons kurang dari 15 menit jam kerja"
    >
      <MessageCircle size={26} />
      <span className="absolute -top-0.5 -right-0.5 inline-flex h-3.5 w-3.5 rounded-full border-2 border-ivory bg-gold" />
    </a>
  );
}

/* ================= BREADCRUMB ================= */
export function Breadcrumb({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink-muted dark:text-ivory/60">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden="true">›</span>}
            {item.to ? (
              <Link to={item.to} className="hover:text-brand hover:underline dark:hover:text-gold">
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-ink dark:text-ivory" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export { scrollToId, I18nProvider };
