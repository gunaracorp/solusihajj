"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

/* Chrome bersama untuk seluruh halaman SEO statis (App Router).
   Konsisten dengan Design System "Amanah" — hijau #0e6b4e, emas #c9a227. */

const NAV = [
  { href: "/", label: "Beranda" },
  { href: "/layanan", label: "Layanan" },
  { href: "/paket", label: "Paket Umrah" },
  { href: "/direktori", label: "Direktori" },
  { href: "/kota", label: "Per Kota" },
  { href: "/artikel", label: "Artikel" },
  { href: "/glosarium", label: "Glosarium" },
  { href: "/maskapai", label: "Maskapai" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line-warm bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
        <Link href="/" className="flex items-center gap-2.5" aria-label="SolusiHajj — Beranda">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-white">
            <ShieldCheck className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-extrabold tracking-tight text-brand-deep">SolusiHajj</span>
            <span className="block text-[11px] font-medium text-ink-muted">Amanah Anda, Aman.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigasi utama">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-ink transition-colors hover:bg-brand-soft hover:text-brand-deep"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="bg-brand text-white hover:bg-brand-deep">
            <Link href="/#/verifikasi/cek-izin-ppiu">Cek Izin PPIU</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line-warm text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="seo-mobile-nav"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav id="seo-mobile-nav" className="border-t border-line-warm bg-white px-4 py-3 lg:hidden" aria-label="Navigasi mobile">
          <ul className="grid gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-semibold text-ink hover:bg-brand-soft hover:text-brand-deep"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#/verifikasi/cek-izin-ppiu"
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-lg bg-brand px-3 py-3 text-center text-base font-bold text-white"
              >
                Cek Izin PPIU — Gratis
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
