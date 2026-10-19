"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, MessageCircle, ShieldCheck } from "lucide-react";
import { Link, useHashRoute, scrollToId } from "@/lib/solusihajj/router";
import { waLink, waMessages } from "@/lib/solusihajj/wa";
import { cn } from "@/lib/utils";

/* ================= LOGO ================= */
export function Logo({ compact = false, light = false }: { compact?: boolean; light?: boolean }) {
  return (
    <Link to="/" className="inline-flex items-center gap-2.5" ariaLabel="SolusiHajj — Beranda">
      <img src="/logo.svg" alt="Logo SolusiHajj" className="h-9 w-9" />
      {!compact && (
        <span
          className={cn(
            "text-xl font-extrabold tracking-tight",
            light ? "text-ivory" : "text-brand-deep"
          )}
        >
          SolusiHajj<span className="text-gold">.</span>
        </span>
      )}
    </Link>
  );
}

/* ================= HEADER ================= */
export function Header() {
  const { path } = useHashRoute();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const isActive = (p: string) => path === p || path.startsWith(p + "/");

  const cariPaketItems = [
    { to: "/paket?type=reguler", label: "Paket Umrah Reguler" },
    { to: "/paket?type=ramadhan", label: "Paket Umrah Ramadhan" },
    { to: "/paket?type=plus-turki", label: "Paket Umrah Plus Turki" },
    { to: "/verifikasi/cek-izin-ppiu", label: "Cek Izin PPIU ⭐", highlight: true },
    { to: "/ppiu", label: "Direktori PPIU" },
  ];

  const navItems = [
    { to: "/verifikasi", label: "Verifikasi" },
    { to: "/escrow", label: "Escrow" },
    { to: "/edukasi", label: "Edukasi" },
    { to: "/tentang", label: "Tentang" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-ivory/95 backdrop-blur transition-shadow",
        scrolled ? "border-line-warm shadow-card" : "border-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 md:h-[72px] md:px-8">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigasi utama">
          <div className="group relative">
            <button
              className={cn(
                "inline-flex h-11 items-center gap-1 rounded-xl px-4 text-[15px] font-semibold text-ink transition-colors hover:bg-brand-soft",
                isActive("/paket") && "text-brand"
              )}
              aria-haspopup="true"
            >
              Cari Paket <ChevronDown size={15} className="transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-0 top-full w-72 translate-y-1 rounded-2xl border border-line-warm bg-card p-2 opacity-0 shadow-warm transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              {cariPaketItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "flex min-h-11 items-center rounded-xl px-4 py-2.5 text-[15px] text-ink transition-colors hover:bg-brand-soft",
                    item.highlight && "font-bold text-brand"
                  )}
                >
                  {item.highlight && <ShieldCheck size={16} className="mr-2 text-gold" />}
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "inline-flex h-11 items-center rounded-xl px-4 text-[15px] font-semibold text-ink transition-colors hover:bg-brand-soft",
                isActive(item.to) && "text-brand"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/paket"
            className="hidden h-11 items-center rounded-xl bg-brand px-5 text-[15px] font-bold text-ivory transition-colors hover:bg-brand-deep md:inline-flex"
          >
            Cari Paket Umrah →
          </Link>
          <a
            href={waLink(waMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand/30 text-brand transition-colors hover:bg-brand-soft"
            aria-label="Hubungi kami via WhatsApp"
          >
            <MessageCircle size={20} />
          </a>
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-ink transition-colors hover:bg-brand-soft lg:hidden"
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
          "overflow-hidden border-t border-line-warm bg-ivory transition-[max-height] duration-300 lg:hidden",
          open ? "max-h-[560px]" : "max-h-0 border-t-0"
        )}
      >
        <nav className="space-y-1 px-4 py-4" aria-label="Navigasi mobile">
          <p className="px-3 pb-1 text-xs font-bold uppercase tracking-wider text-ink-muted">Cari Paket</p>
          {cariPaketItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={cn(
                "flex min-h-12 items-center rounded-xl px-3 py-2 text-[16px] text-ink hover:bg-brand-soft",
                item.highlight && "font-bold text-brand"
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="my-2 border-t border-line-warm" />
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center rounded-xl px-3 py-2 text-[16px] text-ink hover:bg-brand-soft"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/paket"
            onClick={() => setOpen(false)}
            className="mt-2 flex min-h-12 items-center justify-center rounded-xl bg-brand px-5 font-bold text-ivory"
          >
            Cari Paket Umrah →
          </Link>
        </nav>
      </div>
    </header>
  );
}

/* ================= FOOTER (dok 06: 3 kolom + NAP + legal line) ================= */
export function Footer() {
  return (
    <footer className="mt-auto bg-brand-deep text-ivory">
      <div className="pattern-light">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <Logo light />
              <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-ivory/70">
                Platform pembanding paket umrah dari PPIU terverifikasi — dana dilindungi escrow, review dari jamaah nyata, izin bisa Anda cek sendiri.
              </p>
              <p className="font-amiri mt-4 text-2xl text-gold">أمانتك، آمنة</p>
            </div>
            <nav aria-label="Footer — Jamaah">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-gold">Jamaah</h3>
              <ul className="space-y-2.5 text-[15px]">
                {[
                  { to: "/paket", label: "Cari Paket Umrah" },
                  { to: "/kalkulator-haji", label: "Kalkulator Simpanan Haji" },
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
            <nav aria-label="Footer — Kepercayaan dan Kontak">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-gold">Kepercayaan</h3>
              <ul className="space-y-2.5 text-[15px]">
                {[
                  { to: "/verifikasi", label: "Verifikasi 5 Lapis" },
                  { to: "/escrow", label: "AmanahEscrow" },
                  { to: "/verifikasi/cek-izin-ppiu", label: "Cek Izin PPIU" },
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
              perjalanan ibadah; kontrak perjalanan dibuat langsung antara jamaah dan PPIU.
            </p>
            <p className="mt-2 text-[12px] text-ivory/40">
              Data pada versi R1 ini merupakan data demo pengembangan. Verifikasi resmi izin PPIU tetap melalui kanal Kemenag.
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
  return (
    <a
      href={waLink(waMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1E7F4F] text-white shadow-green transition-transform hover:scale-105",
        onDetail ? "bottom-24 md:bottom-5" : "bottom-5"
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
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink-muted">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden="true">›</span>}
            {item.to ? (
              <Link to={item.to} className="hover:text-brand hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-ink" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export { scrollToId };
