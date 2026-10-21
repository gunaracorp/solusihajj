import Link from "next/link";
import {
  BedDouble,
  Bus,
  Check,
  ChevronRight,
  Clock,
  Compass,
  FileCheck,
  GraduationCap,
  HeartPulse,
  Landmark,
  Laptop,
  MapPinned,
  Moon,
  PackageCheck,
  Plane,
  PlaneTakeoff,
  Smartphone,
  Star,
  Users,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { Pkg } from "@/data/types";

/* Komponen UI bersama khusus silo /layanan & /kota (Task 2-c).
   Semua server components — tanpa state, tanpa "use client". */

/* Pemetaan nama ikon lucide-react (dari data kategori) ke komponen ikon, dengan fallback Compass. */
const CATEGORY_ICONS: Record<string, LucideIcon> = {
  FileCheck,
  Plane,
  BedDouble,
  Bus,
  GraduationCap,
  PackageCheck,
  UtensilsCrossed,
  HeartPulse,
  Landmark,
  MapPinned,
  Smartphone,
  Users,
  Moon,
  Laptop,
};

export function CategoryIcon({ name, className }: { name: string; className?: string }) {
  const Icon = CATEGORY_ICONS[name] ?? Compass;
  return <Icon className={className} aria-hidden="true" />;
}

const rupiahFormatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

export function formatRupiah(n: number): string {
  return rupiahFormatter.format(n);
}

export function formatJam(h: number): string {
  return `${h.toLocaleString("id-ID", { maximumFractionDigits: 1 })} jam`;
}

/* Breadcrumb visual (dipasangkan dengan breadcrumbJsonLd di tiap halaman). */
export function BreadcrumbTrail({ items }: { items: Array<{ name: string; href?: string }> }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-line-warm bg-white">
      <ol className="mx-auto flex max-w-6xl flex-wrap items-center gap-1.5 px-4 py-3 text-sm">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${item.name}-${i}`} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3.5 w-3.5 shrink-0 text-ink-muted" aria-hidden="true" />}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-ink-muted underline-offset-4 transition-colors hover:text-brand hover:underline"
                >
                  {item.name}
                </Link>
              ) : (
                <span aria-current="page" className="font-semibold text-brand-deep">
                  {item.name}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

type ServiceLike = { slug: string; name: string; shortDesc: string; priceFrom?: number };

/* Kartu layanan untuk grid indeks & kategori — link ke /layanan/[slug]. */
export function ServiceCard({ service }: { service: ServiceLike }) {
  return (
    <Link
      href={`/layanan/${service.slug}`}
      className="group block h-full rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
    >
      <Card className="h-full gap-3 border-line-warm bg-white transition-all group-hover:border-brand/40 group-hover:shadow-md">
        <CardHeader className="pb-0">
          <CardTitle className="text-base leading-snug font-bold text-brand-deep transition-colors group-hover:text-brand">
            {service.name}
          </CardTitle>
          <CardDescription className="line-clamp-2 text-sm leading-relaxed text-ink-muted">
            {service.shortDesc}
          </CardDescription>
        </CardHeader>
        {typeof service.priceFrom === "number" && service.priceFrom > 0 ? (
          <CardContent className="pt-0">
            <Badge className="border-transparent bg-gold-soft text-gold-deep hover:bg-gold-soft">
              Mulai {formatRupiah(service.priceFrom)}
            </Badge>
          </CardContent>
        ) : null}
      </Card>
    </Link>
  );
}

type CityLike = {
  slug: string;
  name: string;
  province: string;
  airport: string;
  airportCode: string;
  flightTimeHours: number;
  directCharter: boolean;
};

/* Kartu kota untuk indeks /kota — link ke /kota/[slug]. */
export function CityCard({ city }: { city: CityLike }) {
  return (
    <Link
      href={`/kota/${city.slug}`}
      className="group block h-full rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
    >
      <Card className="h-full gap-3 border-line-warm bg-white transition-all group-hover:border-brand/40 group-hover:shadow-md">
        <CardHeader className="pb-0">
          <CardTitle className="text-base font-bold text-brand-deep transition-colors group-hover:text-brand">
            {city.name}
          </CardTitle>
          <CardDescription className="text-sm text-ink-muted">{city.province}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-1.5 pt-0 text-sm text-ink-muted">
          <p className="flex items-center gap-2">
            <PlaneTakeoff className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
            <span className="truncate">
              {city.airport} ({city.airportCode})
            </span>
          </p>
          <p className="flex items-center gap-2">
            <Clock className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
            <span>± {formatJam(city.flightTimeHours)} ke Jeddah</span>
          </p>
        </CardContent>
        <CardFooter className="pt-0">
          {city.directCharter ? (
            <Badge className="border-transparent bg-brand text-white hover:bg-brand">Charter Langsung</Badge>
          ) : (
            <Badge variant="outline" className="border-line-warm text-ink-muted">
              Via Transit
            </Badge>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
}

/* Kartu paket ringkas untuk halaman kota — link ke /paket/[slug]. */
export function PackageMiniCard({ pkg }: { pkg: Pkg }) {
  return (
    <Link
      href={`/paket/${pkg.slug}`}
      className="group block h-full rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
    >
      <Card className="h-full gap-3 border-line-warm bg-white transition-all group-hover:border-brand/40 group-hover:shadow-md">
        <CardHeader className="pb-0">
          <CardTitle className="line-clamp-2 text-base leading-snug font-bold text-brand-deep transition-colors group-hover:text-brand">
            {pkg.title}
          </CardTitle>
          <CardDescription className="text-sm text-ink-muted">
            Berangkat {pkg.departCity} · {pkg.durationDays} hari
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap items-center gap-2 pt-0">
          <Badge className="border-transparent bg-gold-soft text-gold-deep hover:bg-gold-soft">
            <Star className="h-3 w-3" aria-hidden="true" /> {pkg.rating.toFixed(1)}
          </Badge>
          <span className="text-sm font-semibold text-brand-deep">{formatRupiah(pkg.basePrice)}</span>
        </CardContent>
      </Card>
    </Link>
  );
}

/* Akordeon FAQ bersama (shadcn) untuk halaman detail layanan, kategori, dan kota. */
export function FaqAccordion({ faqs }: { faqs: Array<{ q: string; a: string }> }) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full rounded-2xl border border-line-warm bg-white px-4 sm:px-6"
    >
      {faqs.map((f, i) => (
        <AccordionItem key={i} value={`faq-${i}`} className="border-line-warm">
          <AccordionTrigger className="py-4 text-left text-base font-semibold text-ink hover:no-underline">
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed text-ink-muted">{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

/* Daftar bercentang untuk features & highlights. */
export function CheckList({ items, columns = 1 }: { items: string[]; columns?: 1 | 2 }) {
  return (
    <ul className={`grid gap-2.5 ${columns === 2 ? "sm:grid-cols-2" : ""}`}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft">
            <Check className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
