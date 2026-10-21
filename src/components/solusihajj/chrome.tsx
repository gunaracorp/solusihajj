"use client";

/**
 * CHROME R2 — Header premium kelas konsultan global: utility bar kepercayaan,
 * mega menu 3 grup (panel terpusat, hover dengan intent-delay), kontrol
 * tema/lansia/bahasa, drawer mobile slide-in, Footer, WaFloat, Breadcrumb.
 * Palet & komponen tetap Design System "Amanah" (dok 14).
 *
 * Dukungan arsitektur & sistem: by Gugun Gunara — Muhammad Lutfi Azmi
 * (prabudanling · Santri Angon) · PT Top Konsultan Internasional
 * (topkonsultan.web.id) · PT Digital Bisnis Manajemen (digiman.id)
 */

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  BookMarked,
  BookOpen,
  Briefcase,
  Building2,
  Calculator,
  ChevronDown,
  Database,
  Gift,
  GitCompareArrows,
  HandCoins,
  HelpCircle,
  Luggage,
  Lock,
  Menu,
  MessageCircle,
  Moon,
  Plane,
  PlaneTakeoff,
  ShieldCheck,
  Sparkles,
  Sun,
  Trophy,
  Type,
  Users,
  X,
} from "lucide-react";
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
    <Link to="/" className="group/logo inline-flex items-center gap-2.5" ariaLabel="SolusiHajj — Beranda">
      <img
        src="/logo-gerbang-nur.svg?v=8"
        alt="Logo SolusiHajj — Gerbang Nur"
        className="h-9 w-9 transition-transform duration-300 group-hover/logo:scale-105"
      />
      {!compact && (
        <span className="flex flex-col">
          <span
            className={cn(
              "text-[19px] font-extrabold leading-none tracking-tight",
              light ? "text-ivory" : "text-brand-deep dark:text-ivory"
            )}
          >
            SolusiHajj<span className="text-gold">.</span>
          </span>
          <span
            className={cn(
              "mt-1.5 hidden text-[9px] font-bold uppercase tracking-[0.24em] sm:block",
              light ? "text-ivory/50" : "text-ink-muted dark:text-ivory/50"
            )}
          >
            Umrah · Haji · Amanah
          </span>
        </span>
      )}
    </Link>
  );
}

/* ================= NAV DATA — mega menu & drawer ================= */

interface NavItem {
  to: string;
  label: string;
  desc: string;
  icon: React.ElementType;
  highlight?: boolean;
}

interface NavGroup {
  id: string;
  label: string;
  hub: string;
  active: (p: string) => boolean;
  items: NavItem[];
  featured: { kicker: string; title: string; desc: string; cta: string; to: string };
}

function useNavData(): { groups: NavGroup[]; directItems: { to: string; label: string }[] } {
  const { t } = useI18n();
  const segActive = (segs: string[]) => (p: string) =>
    segs.some((s) => p === `/${s}` || p.startsWith(`/${s}/`));
  return {
    groups: [
      {
        id: "paket",
        label: t("nav.packages"),
        hub: "/paket",
        active: segActive(["paket", "tiket-grup", "maskapai", "nurmatch", "nurmatch-ai", "bandingkan", "kado-umrah", "cicilan-syariah"]),
        items: [
          { to: "/paket?produk=full", label: t("nav.full"), desc: "Tiket, hotel, visa & mutawif all-in", icon: Plane },
          { to: "/paket?produk=land", label: t("nav.land"), desc: "Hotel & handling tanpa tiket", icon: Building2 },
          { to: "/tiket-grup", label: t("nav.flights"), desc: "Kursi charter grosir per grup", icon: PlaneTakeoff },
          { to: "/maskapai", label: t("nav.airlines"), desc: "76 maskapai ibadah terdata", icon: Luggage },
          { to: "/nurmatch-ai", label: "NurMatch AI Live", desc: "Matching paket sesuai preferensi Anda", icon: Sparkles, highlight: true },
          { to: "/bandingkan", label: "Bandingkan Paket", desc: "Uji 3 paket berdampingan", icon: GitCompareArrows },
          { to: "/kado-umrah", label: t("nav.kado"), desc: "Hadiahkan umrah orang tersayang", icon: Gift, highlight: true },
          { to: "/cicilan-syariah", label: t("nav.cicilan"), desc: "Cicilan 0% tanpa riba", icon: HandCoins, highlight: true },
        ],
        featured: {
          kicker: "Unggulan R3",
          title: "NurMatch AI Live",
          desc: "AI mencocokkan budget, tanggal & preferensi ibadah Anda dengan paket yang tepat — dalam hitungan detik.",
          cta: "Coba Sekarang",
          to: "/nurmatch-ai",
        },
      },
      {
        id: "direktori",
        label: t("nav.directory"),
        hub: "/ppiu",
        active: segActive(["ppiu", "pusat-data", "verifikasi", "escrow", "escrow-aktif"]),
        items: [
          { to: "/ppiu", label: t("nav.providers"), desc: "18 penyelenggara lolos kurasi", icon: Users },
          { to: "/pusat-data", label: t("nav.data"), desc: "3.966 organisasi lintas negara", icon: Database, highlight: true },
          { to: "/verifikasi/cek-izin-ppiu", label: "Cek Izin PPIU", desc: "Gratis · 10 detik · kanal resmi", icon: ShieldCheck, highlight: true },
          { to: "/verifikasi", label: t("nav.verify"), desc: "Protokol verifikasi 5 lapis", icon: BadgeCheck },
          { to: "/escrow", label: t("nav.escrow"), desc: "Dana rilis bertahap 40/40/20", icon: Lock },
          { to: "/escrow-aktif", label: t("nav.escrowAktif"), desc: "Pantau kontrak escrow berjalan", icon: Activity },
        ],
        featured: {
          kicker: "Gratis · 10 Detik",
          title: "Cek Izin PPIU Sebelum Membayar",
          desc: "Masukkan nama travel atau nomor SK — data langsung dari registri resmi Kemenag.",
          cta: "Periksa Sekarang",
          to: "/verifikasi/cek-izin-ppiu",
        },
      },
      {
        id: "panduan",
        label: t("nav.guide"),
        hub: "/edukasi",
        active: segActive(["benchmark", "edukasi", "glosarium", "travel-kit", "kalkulator-haji", "faq"]),
        items: [
          { to: "/benchmark", label: t("nav.benchmark"), desc: "Posisi vs 20 platform dunia", icon: Trophy, highlight: true },
          { to: "/edukasi", label: t("nav.education"), desc: "112 artikel panduan ibadah", icon: BookOpen },
          { to: "/glosarium", label: t("nav.glossary"), desc: "Istilah haji & umrah A–Z", icon: BookMarked },
          { to: "/travel-kit", label: t("nav.kit"), desc: "Checklist, doa & tips koper", icon: Briefcase },
          { to: "/kalkulator-haji", label: "Kalkulator Simpanan Haji", desc: "Hitung target & waktu menabung", icon: Calculator },
          { to: "/faq", label: "FAQ", desc: "Jawaban pertanyaan tersering", icon: HelpCircle },
        ],
        featured: {
          kicker: "Pusat Pengetahuan",
          title: "112 Artikel E-E-A-T",
          desc: "Manasik, doa, fiqih praktis & perencanaan dana — ditinjau berkala tim editorial.",
          cta: "Baca Artikel",
          to: "/edukasi",
        },
      },
    ],
    directItems: [
      { to: "/partner", label: t("nav.partner") },
      { to: "/tentang", label: t("nav.about") },
    ],
  };
}

/* ================= HEADER — premium kelas konsultan global ================= */
export function Header() {
  const { path } = useHashRoute();
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>("paket");
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [prefs, setPrefs] = usePrefs();
  const { lang, setLang, t } = useI18n();
  const closeTimer = useRef<number | null>(null);

  // Scroll listener juga menangkap scrollTo() programatik dari router,
  // sehingga bayangan header selalu sinkron tanpa setState di effect body.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Tutup drawer/panel saat berpindah halaman — pola "adjust state during render"
  const [prevPath, setPrevPath] = useState(path);
  if (prevPath !== path) {
    setPrevPath(path);
    if (open) setOpen(false);
    if (openMenu) setOpenMenu(null);
  }

  // Drawer terbuka: ESC untuk menutup + kunci scroll body
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    };
  }, []);

  const nav = useNavData();
  const isActive = (p: string) => path === p || path.startsWith(p + "/");

  const langs: { v: Lang; l: string }[] = [
    { v: "id", l: "ID" },
    { v: "en", l: "EN" },
    { v: "ar", l: "ع" },
  ];

  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 140);
  };
  const cancelClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  };

  const activeGroup = openMenu ? nav.groups.find((g) => g.id === openMenu) : undefined;

  return (
    <>
      {/* Skip link — aksesibilitas keyboard */}
      <a
        href="#konten-utama"
        onClick={(e) => {
          e.preventDefault();
          scrollToId("konten-utama");
        }}
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-brand focus:px-4 focus:py-2.5 focus:text-sm focus:font-bold focus:text-ivory focus:shadow-warm"
      >
        Langsung ke konten utama
      </a>

      {/* ===== UTILITY BAR — sinyal kepercayaan (scroll-away, tablet & desktop) ===== */}
      <div className="hidden bg-brand-deep text-ivory md:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-4 px-4 md:px-8">
          <div className="flex items-center gap-5 text-[11.5px] font-medium text-ivory/75">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck size={13} className="text-gold" aria-hidden="true" />
              Dana jamaah dijaga escrow syariah
            </span>
            <span className="hidden items-center gap-1.5 lg:inline-flex">
              <BadgeCheck size={13} className="text-gold" aria-hidden="true" />
              Izin penyelenggara diverifikasi 5 lapis
            </span>
            <span className="hidden items-center gap-1.5 xl:inline-flex">
              <Database size={13} className="text-gold" aria-hidden="true" />
              3.966 organisasi terdata nasional
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={waLink(waMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-ivory/90 transition-colors hover:text-gold"
            >
              <MessageCircle size={13} aria-hidden="true" />
              +62 813-1651-6524
            </a>
            <span aria-hidden="true" className="h-3.5 w-px bg-white/20" />
            <div className="flex items-center gap-0.5" role="group" aria-label="Pilih bahasa (demo)">
              {langs.map((l) => (
                <button
                  key={l.v}
                  onClick={() => setLang(l.v)}
                  className={cn(
                    "min-h-7 rounded px-1.5 text-[11px] font-bold tracking-wide transition-colors",
                    lang === l.v ? "text-gold" : "text-ivory/55 hover:text-ivory"
                  )}
                  aria-pressed={lang === l.v}
                >
                  {l.l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===== HEADER UTAMA — sticky, hairline border muncul saat scroll ===== */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b bg-ivory/95 backdrop-blur-md transition-[border-color,box-shadow] duration-300 dark:bg-[#0d2b23]/95",
          scrolled ? "border-line-warm shadow-card dark:border-white/10" : "border-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:h-[76px] md:px-8">
          <Logo />

          {/* Desktop mega nav — trigger link uppercase dengan underline emas */}
          <nav
            className="relative hidden h-full items-stretch lg:flex"
            aria-label="Navigasi utama"
            onMouseLeave={scheduleClose}
          >
            {nav.groups.map((g) => (
              <div
                key={g.id}
                className="flex items-stretch"
                onMouseEnter={() => {
                  cancelClose();
                  setOpenMenu(g.id);
                }}
              >
                <Link
                  to={g.hub}
                  aria-haspopup="true"
                  aria-expanded={openMenu === g.id}
                  className={cn(
                    "group/t relative flex items-center gap-1.5 px-4 text-[12.5px] font-bold uppercase tracking-[0.09em] transition-colors hover:text-brand dark:text-ivory/90 dark:hover:text-gold",
                    g.active(path) ? "text-brand dark:text-gold" : "text-ink"
                  )}
                >
                  {g.label}
                  <ChevronDown
                    size={13}
                    aria-hidden="true"
                    className={cn("mt-px opacity-60 transition-transform duration-200", openMenu === g.id && "rotate-180")}
                  />
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-4 bottom-0 h-[2px] origin-left rounded-full bg-gold transition-transform duration-200 ease-out",
                      g.active(path) || openMenu === g.id ? "scale-x-100" : "scale-x-0 group-hover/t:scale-x-100"
                    )}
                  />
                </Link>
              </div>
            ))}
            {nav.directItems.map((item) => (
              <div
                key={item.to}
                className="flex items-stretch"
                onMouseEnter={() => {
                  cancelClose();
                  setOpenMenu(null);
                }}
              >
                <Link
                  to={item.to}
                  className={cn(
                    "group/t relative flex items-center px-4 text-[12.5px] font-bold uppercase tracking-[0.09em] transition-colors hover:text-brand dark:text-ivory/90 dark:hover:text-gold",
                    isActive(item.to) ? "text-brand dark:text-gold" : "text-ink"
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-4 bottom-0 h-[2px] origin-left rounded-full bg-gold transition-transform duration-200 ease-out",
                      isActive(item.to) ? "scale-x-100" : "scale-x-0 group-hover/t:scale-x-100"
                    )}
                  />
                </Link>
              </div>
            ))}

            {/* Mega panel — terpusat di bawah nav, aksen garis emas */}
            {activeGroup && (
              <div className="absolute left-1/2 top-full z-50 ml-[-440px] w-[880px] max-w-[92vw] animate-in fade-in-0 slide-in-from-top-1 overflow-hidden rounded-b-xl border border-line-warm border-t-2 border-t-gold bg-card shadow-[0_24px_48px_-12px_rgba(28,43,39,0.18)] duration-150 dark:border-white/10 dark:bg-[#12332a]">
                <div className="grid grid-cols-[1fr_252px]">
                  <div className="grid grid-cols-2 gap-x-3 gap-y-0.5 p-4">
                    {activeGroup.items.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={() => setOpenMenu(null)}
                        className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-brand-soft/70 dark:hover:bg-white/5"
                      >
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-line-warm bg-brand-soft/50 text-brand dark:border-white/10 dark:bg-white/5 dark:text-gold">
                          <item.icon size={17} strokeWidth={1.9} aria-hidden="true" />
                        </span>
                        <span className="min-w-0">
                          <span className="flex items-center gap-1.5 text-[14px] font-semibold leading-tight text-ink dark:text-ivory">
                            {item.label}
                            {item.highlight && <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />}
                          </span>
                          <span className="mt-1 block text-[12px] leading-snug text-ink-muted dark:text-ivory/55">{item.desc}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="flex flex-col justify-between border-l border-line-warm bg-brand-deep p-5 dark:border-white/10 dark:bg-[#0a4a36]">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold">{activeGroup.featured.kicker}</p>
                      <p className="mt-2.5 text-[15.5px] font-bold leading-snug text-ivory">{activeGroup.featured.title}</p>
                      <p className="mt-2 text-[12.5px] leading-relaxed text-ivory/70">{activeGroup.featured.desc}</p>
                    </div>
                    <Link
                      to={activeGroup.featured.to}
                      onClick={() => setOpenMenu(null)}
                      className="mt-5 inline-flex h-9 items-center justify-center gap-1.5 rounded-md bg-gold px-4 text-[12.5px] font-bold text-brand-deep transition-colors hover:bg-gold-deep hover:text-ivory"
                    >
                      {activeGroup.featured.cta}
                      <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </nav>

          {/* Kontrol kanan — hairline divider, toggle, CTA tunggal */}
          <div className="flex items-center gap-1.5">
            <span aria-hidden="true" className="mr-1 hidden h-6 w-px bg-line-warm sm:block dark:bg-white/15" />
            <button
              onClick={() => setPrefs({ ...prefs, elder: !prefs.elder })}
              className={cn(
                "hidden h-10 w-10 items-center justify-center rounded-md border transition-colors sm:inline-flex",
                prefs.elder
                  ? "border-gold bg-gold-soft text-gold-deep"
                  : "border-line-warm text-ink hover:bg-brand-soft dark:border-white/15 dark:text-ivory dark:hover:bg-white/10"
              )}
              aria-pressed={prefs.elder}
              aria-label="Mode lansia — perbesar huruf"
              title="Mode Lansia (A+)"
            >
              <Type size={17} />
            </button>
            <button
              onClick={() => setPrefs({ ...prefs, dark: !prefs.dark })}
              className="hidden h-10 w-10 items-center justify-center rounded-md border border-line-warm text-ink transition-colors hover:bg-brand-soft sm:inline-flex dark:border-white/15 dark:text-ivory dark:hover:bg-white/10"
              aria-pressed={prefs.dark}
              aria-label={prefs.dark ? "Matikan mode gelap" : "Aktifkan mode gelap"}
              title={prefs.dark ? "Terang" : "Malam Madinah (gelap)"}
            >
              {prefs.dark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <Link
              to="/paket"
              className="group/cta hidden h-10 items-center gap-2 rounded-md bg-brand px-5 text-[13.5px] font-bold text-ivory shadow-green transition-colors hover:bg-brand-deep md:inline-flex"
            >
              {t("nav.packages")}
              <ArrowRight size={15} aria-hidden="true" className="transition-transform duration-200 group-hover/cta:translate-x-0.5" />
            </Link>
            <a
              href={waLink(waMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-brand/25 text-brand transition-colors hover:bg-brand-soft md:hidden dark:border-gold/30 dark:text-gold"
              aria-label="Hubungi kami via WhatsApp"
            >
              <MessageCircle size={19} />
            </a>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink transition-colors hover:bg-brand-soft lg:hidden dark:text-ivory dark:hover:bg-white/10"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Tutup menu" : "Buka menu"}
              aria-expanded={open}
            >
              {open ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </header>

      {/* ===== DRAWER MOBILE — slide-in panel dengan backdrop & ESC ===== */}
      <div
        className={cn("fixed inset-0 z-[80] lg:hidden", open ? "pointer-events-auto" : "pointer-events-none")}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-ink/50 backdrop-blur-[2px] transition-opacity duration-300 dark:bg-black/60",
            open ? "opacity-100" : "opacity-0"
          )}
        />
        <aside
          role="dialog"
          aria-modal="true"
          aria-label="Menu navigasi"
          className={cn(
            "absolute right-0 top-0 flex h-full w-full max-w-[400px] flex-col bg-ivory shadow-2xl transition-all duration-300 ease-out dark:bg-[#0b2b22]",
            open ? "visible translate-x-0" : "invisible translate-x-full"
          )}
        >
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-line-warm px-4 dark:border-white/10">
            <Logo />
            <button
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink transition-colors hover:bg-brand-soft dark:text-ivory dark:hover:bg-white/10"
              aria-label="Tutup menu"
            >
              <X size={21} />
            </button>
          </div>

          <nav className="thin-scroll flex-1 overflow-y-auto px-4 py-2" aria-label="Navigasi mobile">
            {nav.groups.map((g) => {
              const exp = openGroup === g.id;
              return (
                <div key={g.id} className="border-b border-line-warm last:border-b-0 dark:border-white/10">
                  <button
                    onClick={() => setOpenGroup(exp ? null : g.id)}
                    aria-expanded={exp}
                    className="flex min-h-14 w-full items-center justify-between gap-2 text-left"
                  >
                    <span className="text-[12.5px] font-bold uppercase tracking-[0.14em] text-ink dark:text-ivory">{g.label}</span>
                    <span
                      className={cn(
                        "flex h-7 w-7 items-center justify-center rounded-full transition-all duration-200",
                        exp ? "rotate-180 bg-brand-soft text-brand dark:bg-white/10 dark:text-gold" : "text-ink-muted dark:text-ivory/55"
                      )}
                    >
                      <ChevronDown size={16} aria-hidden="true" />
                    </span>
                  </button>
                  <div className={cn("grid transition-[grid-template-rows] duration-300 ease-out", exp ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                    <div className="overflow-hidden">
                      <div className="space-y-0.5 pb-3">
                        {g.items.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            onClick={() => setOpen(false)}
                            className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-brand-soft/70 dark:hover:bg-white/5"
                          >
                            <item.icon
                              size={17}
                              strokeWidth={1.9}
                              aria-hidden="true"
                              className={cn("mt-0.5 shrink-0", item.highlight ? "text-gold-deep dark:text-gold" : "text-brand dark:text-gold/80")}
                            />
                            <span className="min-w-0">
                              <span
                                className={cn(
                                  "block text-[15px] font-medium leading-tight text-ink dark:text-ivory",
                                  item.highlight && "font-bold text-brand dark:text-gold"
                                )}
                              >
                                {item.label}
                              </span>
                              <span className="mt-0.5 block text-[12px] leading-snug text-ink-muted dark:text-ivory/55">{item.desc}</span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <p className="px-3 pb-1 pt-4 text-[11px] font-bold uppercase tracking-[0.14em] text-ink-muted dark:text-ivory/50">Perusahaan</p>
            <div className="space-y-0.5 pb-2">
              {nav.directItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center rounded-lg px-3 text-[15px] font-medium text-ink transition-colors hover:bg-brand-soft dark:text-ivory dark:hover:bg-white/5"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="shrink-0 space-y-3 border-t border-line-warm bg-card/70 p-4 dark:border-white/10 dark:bg-white/5">
            <div className="grid grid-cols-[1fr_auto] gap-2">
              <Link
                to="/paket"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-brand px-5 text-[14px] font-bold text-ivory transition-colors hover:bg-brand-deep"
              >
                {t("nav.packages")}
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <a
                href={waLink(waMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line-warm text-brand transition-colors hover:bg-brand-soft dark:border-white/15 dark:text-gold"
                aria-label="Chat WhatsApp"
              >
                <MessageCircle size={19} />
              </a>
            </div>
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-0.5 rounded-md border border-line-warm p-0.5 dark:border-white/15" role="group" aria-label="Pilih bahasa (demo)">
                {langs.map((l) => (
                  <button
                    key={l.v}
                    onClick={() => setLang(l.v)}
                    className={cn(
                      "min-h-8 rounded px-2.5 text-[11.5px] font-bold transition-colors",
                      lang === l.v ? "bg-brand text-ivory" : "text-ink-muted hover:text-brand dark:text-ivory/60"
                    )}
                    aria-pressed={lang === l.v}
                  >
                    {l.l}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setPrefs({ ...prefs, elder: !prefs.elder })}
                  className={cn(
                    "inline-flex h-10 w-10 items-center justify-center rounded-md border",
                    prefs.elder ? "border-gold bg-gold-soft text-gold-deep" : "border-line-warm text-ink dark:border-white/15 dark:text-ivory"
                  )}
                  aria-label="Mode lansia"
                >
                  <Type size={16} />
                </button>
                <button
                  onClick={() => setPrefs({ ...prefs, dark: !prefs.dark })}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line-warm text-ink dark:border-white/15 dark:text-ivory"
                  aria-label="Mode gelap"
                >
                  {prefs.dark ? <Sun size={16} /> : <Moon size={16} />}
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
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
                  { to: "/kado-umrah", label: "Kado Umrah (Gift)" },
                  { to: "/cicilan-syariah", label: "Cicilan Syariah 0%" },
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
                  { to: "/benchmark", label: "Benchmark 20 Teratas Dunia" },
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

          {/* Strip SEO — tautan ke halaman indeks rute nyata (server-rendered, terindeks Google) */}
          <nav aria-label="Jelajahi portal lengkap" className="mt-8 rounded-2xl bg-white/5 p-5">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-gold">Jelajahi 4.400+ Halaman Portal</h3>
            <div className="flex flex-wrap gap-2 text-[13px]">
              {[
                { href: "/layanan", label: "200+ Layanan Umrah" },
                { href: "/layanan/kategori/visa-dokumen", label: "Visa & Dokumen" },
                { href: "/layanan/kategori/hotel-akomodasi", label: "Hotel Makkah & Madinah" },
                { href: "/layanan/pengurusan-visa-umrah", label: "Pengurusan Visa" },
                { href: "/layanan/land-arrangement-umrah", label: "Land Arrangement" },
                { href: "/layanan/handling-bandara-jeddah", label: "Handling Jeddah" },
                { href: "/layanan/mutawif-pendamping-ibadah", label: "Mutawif" },
                { href: "/layanan/paket-manasik-umrah", label: "Manasik" },
                { href: "/paket", label: "Katalog Paket (SEO)" },
                { href: "/direktori", label: "Direktori 3.966 Penyelenggara" },
                { href: "/kota", label: "Umrah per 45 Kota" },
                { href: "/kota/jakarta", label: "Umrah dari Jakarta" },
                { href: "/kota/surabaya", label: "Umrah dari Surabaya" },
                { href: "/maskapai", label: "76 Maskapai" },
                { href: "/ppiu", label: "18 Penyelenggara Terverifikasi" },
                { href: "/artikel", label: "Artikel & Panduan" },
                { href: "/glosarium", label: "Glosarium A–Z" },
                { href: "/faq", label: "FAQ" },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-full bg-white/8 px-3.5 py-2 text-ivory/75 transition-colors hover:bg-white/15 hover:text-gold"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="mt-10 rounded-2xl bg-white/5 p-5">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-gold">Kontak & Legal</h3>
            <address className="space-y-1.5 text-[15px] not-italic text-ivory/75">
              <p>PT Syarikat Solution Haji Indonesia — Menara Cakrawala Lt. 12 Unit 05A, Jl. MH Thamrin Kav. 9, Kebon Sirih, Menteng, Jakarta Pusat 10340</p>
              <p>Kantor operasional: Perumahan Andalusia Garden Cluster Granada No.11, Mangkubumi, Mangkubumi, Tasikmalaya 46181</p>
              <p>
                WA:{" "}
                <a href={waLink(waMessages.general)} target="_blank" rel="noopener noreferrer" className="font-semibold text-gold hover:underline">
                  +62 813-1651-6524
                </a>{" "}
                • Email:{" "}
                <a href="mailto:syarikat.haji@gmail.com" className="font-semibold text-gold hover:underline">
                  syarikat.haji@gmail.com
                </a>
              </p>
              <p>Jam operasional: Senin–Sabtu, 08.00–17.00 WIB (respons WhatsApp &lt; 15 menit jam kerja)</p>
            </address>
            <p className="mt-3 text-[12px] leading-relaxed text-ivory/50">
              Legalitas: NIB 1102230000845 (Sertifikat Standar OSS 11022300008450001) • KBLI 79121 &amp; 79122 • NPWP 0627305550021000 • Akta Kemenkumham AHU-011258.AH.01.30 Tahun 2023
            </p>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-[13px] leading-relaxed text-ivory/60">
              © 2026 PT Syarikat Solution Haji Indonesia — Platform teknologi perlindungan jamaah. SolusiHajj bukan penyelenggara
              perjalanan ibadah; kontrak perjalanan dibuat langsung antara jamaah dan penyelenggara (PPIU/PIHK/BPW).
            </p>
            <p className="mt-2 text-[12px] text-ivory/40">
              Data direktori penyelenggara bersumber dari registri resmi (SISKOPATUH Kemenhaj, Kemenag, HIMPUH, Nusuk
              Saudi, MORA Pakistan). Verifikasi akhir izin tetap melalui kanal resmi negara masing-masing.
            </p>
            {/* Lapis brand halus — backlink dukungan sistem (tidak mencolok) */}
            <p className="mt-3 text-[11px] leading-relaxed text-ivory/30">
              Sistem &amp; arsitektur didukung oleh{" "}
              <a href="https://topkonsultan.web.id" target="_blank" rel="noopener" className="transition-colors hover:text-gold/70">
                PT Top Konsultan Internasional
              </a>{" "}
              •{" "}
              <a href="https://digiman.id" target="_blank" rel="noopener" className="transition-colors hover:text-gold/70">
                digiman.id
              </a>{" "}
              — by Gugun Gunara
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
