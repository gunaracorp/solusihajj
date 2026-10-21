import Link from "next/link";
import { ShieldCheck, Mail, MapPin, Phone } from "lucide-react";

/* Footer hub internal-linking untuk seluruh halaman SEO.
   Struktur mengikuti pola silo: Layanan → Kategori → Detail. */

const LAYANAN_POPULER = [
  { href: "/layanan/pengurusan-visa-umrah", label: "Pengurusan Visa Umrah" },
  { href: "/layanan/hotel-makkah-dekat-masjidil-haram", label: "Hotel Makkah Dekat Haram" },
  { href: "/layanan/tiket-pesawat-umrah", label: "Tiket Pesawat Umrah" },
  { href: "/layanan/paket-manasik-umrah", label: "Paket Manasik Umrah" },
  { href: "/layanan/land-arrangement-umrah", label: "Land Arrangement" },
  { href: "/layanan/handling-bandara-jeddah", label: "Handling Bandara Jeddah" },
  { href: "/layanan/bus-transport-makkah-madinah", label: "Bus Makkah–Madinah" },
  { href: "/layanan/mutawif-pendamping-ibadah", label: "Mutawif Pendamping" },
];

const JELAJAH = [
  { href: "/layanan", label: "Semua Layanan (A–Z)" },
  { href: "/paket", label: "Katalog Paket Umrah" },
  { href: "/direktori", label: "Direktori Penyelenggara" },
  { href: "/kota", label: "Umrah per Kota" },
  { href: "/maskapai", label: "Jaringan Maskapai" },
  { href: "/artikel", label: "Artikel & Panduan" },
  { href: "/glosarium", label: "Glosarium A–Z" },
  { href: "/pusat-data", label: "Pusat Data Nasional" },
];

const BANTUAN = [
  { href: "/#/verifikasi/cek-izin-ppiu", label: "Cek Izin PPIU" },
  { href: "/#/kalkulator-haji", label: "Kalkulator Simpanan Haji" },
  { href: "/#/nurmatch", label: "NurMatch AI" },
  { href: "/#/travel-kit", label: "Travel Kit Jamaah" },
  { href: "/faq", label: "FAQ" },
  { href: "/#/kontak", label: "Hubungi Kami" },
  { href: "/kebijakan-privasi", label: "Kebijakan Privasi" },
  { href: "/syarat-ketentuan", label: "Syarat & Ketentuan" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-brand-deep text-white/90">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
                <ShieldCheck className="h-5 w-5 text-white" aria-hidden="true" />
              </span>
              <span className="text-lg font-extrabold tracking-tight text-white">SolusiHajj</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              Marketplace umrah &amp; haji lintas Asia — PPIU, PIHK, BPW, dan KBIHU terverifikasi
              dalam satu gerbang. Dana dijaga escrow syariah, review dari jamaah nyata.
            </p>
            <address className="mt-4 space-y-2 text-sm not-italic text-white/75">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                Menara Cakrawala Lt. 12 Unit 05A, Jl. MH Thamrin Kav. 9, Jakarta Pusat 10340
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                halo@solusihajj.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                +62 21 500 600 800
              </p>
            </address>
          </div>

          <nav aria-label="Layanan populer">
            <h2 className="text-sm font-bold uppercase tracking-wider text-gold">Layanan Populer</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {LAYANAN_POPULER.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/layanan" className="font-semibold text-gold underline-offset-4 hover:underline">
                  Lihat semua 200+ layanan →
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Jelajahi portal">
            <h2 className="text-sm font-bold uppercase tracking-wider text-gold">Jelajahi Portal</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {JELAJAH.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Bantuan dan alat">
            <h2 className="text-sm font-bold uppercase tracking-wider text-gold">Bantuan &amp; Alat</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {BANTUAN.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/15 pt-6 text-xs text-white/60 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} PT Syarikat Solution Haji Indonesia — SolusiHajj.com. Seluruh hak cipta dilindungi.</p>
          <p>NIB 1102230000845 · Terikat UU PDP No. 27/2022</p>
        </div>
      </div>
    </footer>
  );
}
