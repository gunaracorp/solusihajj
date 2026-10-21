"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Star, MapPin, Plane, BedDouble, Search } from "lucide-react";
import { formatRupiah, TierBadge } from "@/components/seo/pkg-ui";
import type { PackageType, ProductKind, Tier } from "@/data/types";

/* Filter & grid katalog paket — satu-satunya komponen client di /paket.
   SSR tetap merender seluruh kartu (SEO aman), filter hanya menyembunyikan. */

export interface PaketCardDto {
  slug: string;
  title: string;
  type: PackageType;
  product: ProductKind;
  durationDays: number;
  basePrice: number;
  departCity: string;
  departWindow: string;
  airline: string;
  hotelMakkahName: string;
  makkahDistance: number;
  hotelMadinahName: string;
  madinahDistance: number;
  rating: number;
  reviewCount: number;
  tier: Tier;
  ppiuShortName: string;
  ppiuSlug: string;
  featured: boolean;
}

const JENIS_LABEL: Record<PackageType, string> = {
  reguler: "Umrah Reguler",
  ramadhan: "Umrah Ramadhan",
  "plus-turki": "Plus Turki",
  "plus-dubai": "Plus Dubai",
};

export function PaketExplorer({ paket }: { paket: PaketCardDto[] }) {
  const kotaList = useMemo(
    () => [...new Set(paket.map((p) => p.departCity))].sort((a, b) => a.localeCompare(b, "id")),
    [paket],
  );
  const jenisList = useMemo(() => [...new Set(paket.map((p) => p.type))], [paket]);

  const [kota, setKota] = useState<string>("semua");
  const [jenis, setJenis] = useState<string>("semua");
  const [q, setQ] = useState("");

  const hasil = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return paket.filter((p) => {
      if (kota !== "semua" && p.departCity !== kota) return false;
      if (jenis !== "semua" && p.type !== jenis) return false;
      if (needle) {
        const hay = `${p.title} ${p.ppiuShortName} ${p.hotelMakkahName} ${p.hotelMadinahName}`.toLowerCase();
        if (!hay.includes(needle)) return false;
      }
      return true;
    });
  }, [paket, kota, jenis, q]);

  return (
    <div>
      {/* Filter panel */}
      <div className="rounded-2xl border border-line-warm bg-white p-4 shadow-sm md:p-5">
        <div className="grid gap-4 md:grid-cols-[1fr_1fr_1fr_auto] md:items-end">
          <div className="space-y-1.5">
            <Label htmlFor="filter-q" className="text-xs font-bold uppercase tracking-wide text-ink-muted">
              Cari paket / hotel
            </Label>
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" aria-hidden="true" />
              <Input
                id="filter-q"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="cth. Al Kiswa, Ramadhan…"
                className="min-h-11 pl-9"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="filter-kota" className="text-xs font-bold uppercase tracking-wide text-ink-muted">
              Kota keberangkatan
            </Label>
            <Select value={kota} onValueChange={setKota}>
              <SelectTrigger id="filter-kota" className="min-h-11 w-full">
                <SelectValue placeholder="Semua kota" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="semua">Semua kota</SelectItem>
                {kotaList.map((k) => (
                  <SelectItem key={k} value={k}>
                    {k}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="filter-jenis" className="text-xs font-bold uppercase tracking-wide text-ink-muted">
              Jenis paket
            </Label>
            <Select value={jenis} onValueChange={setJenis}>
              <SelectTrigger id="filter-jenis" className="min-h-11 w-full">
                <SelectValue placeholder="Semua jenis" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="semua">Semua jenis</SelectItem>
                {jenisList.map((j) => (
                  <SelectItem key={j} value={j}>
                    {JENIS_LABEL[j] ?? j}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button
            type="button"
            variant="outline"
            className="min-h-11 border-line-warm"
            onClick={() => {
              setKota("semua");
              setJenis("semua");
              setQ("");
            }}
          >
            Reset
          </Button>
        </div>
        <p className="mt-3 text-sm text-ink-muted" role="status" aria-live="polite">
          Menampilkan <strong className="text-brand-deep">{hasil.length}</strong> dari {paket.length} paket.
        </p>
      </div>

      {/* Grid paket */}
      {hasil.length === 0 ? (
        <p className="mt-10 rounded-2xl border border-dashed border-line-warm bg-white p-10 text-center text-ink-muted">
          Tidak ada paket yang cocok dengan filter. Coba reset filter Anda.
        </p>
      ) : (
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {hasil.map((p) => (
            <li key={p.slug}>
              <Card className="h-full gap-4 border-line-warm py-0 transition-shadow hover:shadow-md">
                <CardHeader className="gap-2 pt-5">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <Badge className="border-transparent bg-brand-soft text-brand-deep">
                      {p.product === "land" ? "Land Arrangement" : "Paket Lengkap"}
                    </Badge>
                    <Badge variant="outline" className="border-line-warm text-ink-muted">
                      {JENIS_LABEL[p.type] ?? p.type}
                    </Badge>
                    <TierBadge tier={p.tier} />
                  </div>
                  <CardTitle className="text-base leading-snug">
                    <Link href={`/paket/${p.slug}`} className="underline-offset-4 hover:text-brand hover:underline">
                      {p.title}
                    </Link>
                  </CardTitle>
                  <p className="text-xs font-medium text-ink-muted">
                    Diselenggarakan oleh{" "}
                    <Link href={`/ppiu/${p.ppiuSlug}`} className="font-semibold text-brand hover:underline">
                      {p.ppiuShortName}
                    </Link>
                  </p>
                </CardHeader>
                <CardContent className="space-y-3 pb-5">
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
                    <span className="font-bold text-ink">
                      {p.rating.toLocaleString("id-ID", { minimumFractionDigits: 1 })}
                    </span>
                    <span className="text-ink-muted">({p.reviewCount} review)</span>
                  </div>

                  <dl className="space-y-1.5 text-sm text-ink-muted">
                    <div className="flex items-start gap-2">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                      <span>
                        Berangkat <strong className="text-ink">{p.departCity}</strong> · {p.departWindow}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Plane className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                      <span>{p.airline}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <BedDouble className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                      <span>
                        Makkah {p.makkahDistance} m · Madinah {p.madinahDistance} m ke Haram
                      </span>
                    </div>
                  </dl>

                  <div className="flex items-end justify-between border-t border-line-warm pt-3">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
                        Mulai dari
                      </p>
                      <p className="text-lg font-extrabold text-brand-deep">{formatRupiah(p.basePrice)}</p>
                      <p className="text-xs text-ink-muted">/jamaah · {p.durationDays} hari</p>
                    </div>
                    <Button asChild className="min-h-11 bg-brand hover:bg-brand-deep">
                      <Link href={`/paket/${p.slug}`}>Lihat detail</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
