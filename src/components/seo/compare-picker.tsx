"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Check, GitCompare, MapPin, Plus, Star, X } from "lucide-react";
import { formatRupiah } from "@/components/seo/pkg-ui";

/* Alat perbandingan interaktif /bandingkan (v2.1.0 Prioritas 5).
   Pilih 2–3 paket → tabel perbandingan berdampingan dirender di bawahnya.
   useState saja (tanpa state eksternal); formatRupiah = fungsi murni (aman di klien). */

export interface ComparePkg {
  slug: string;
  title: string;
  durationDays: number;
  basePrice: number;
  departCity: string;
  rating: number;
  reviewCount: number;
  hotelMakkahName: string;
  hotelMakkahDistance: number;
  hotelMadinahName: string;
  hotelMadinahDistance: number;
}

const MAX_COMPARE = 3;

export function ComparePicker({ packages }: { packages: ComparePkg[] }) {
  const [selected, setSelected] = useState<string[]>([]);

  const chosen = selected
    .map((slug) => packages.find((p) => p.slug === slug))
    .filter((p): p is ComparePkg => p !== undefined);
  const bisaBandingkan = chosen.length >= 2;

  /* Nilai terbaik per baris: harga per hari termurah & jarak hotel Makkah terdekat. */
  const minPerHari = chosen.length
    ? Math.min(...chosen.map((p) => Math.round(p.basePrice / p.durationDays)))
    : 0;
  const minJarakMakkah = chosen.length
    ? Math.min(...chosen.map((p) => p.hotelMakkahDistance))
    : 0;

  function toggle(slug: string) {
    setSelected((prev) => {
      if (prev.includes(slug)) return prev.filter((s) => s !== slug);
      if (prev.length >= MAX_COMPARE) return prev; /* maks 3 — inline hint menjelaskan */
      return [...prev, slug];
    });
  }

  const hint =
    chosen.length === 0
      ? "Pilih 2–3 paket"
      : chosen.length === 1
        ? "Pilih minimal 1 paket lagi"
        : chosen.length >= MAX_COMPARE
          ? "Maksimal 3 paket — hapus satu untuk mengganti"
          : "Bisa ditambah 1 paket lagi";

  const rows: Array<{ label: string; render: (p: ComparePkg) => ReactNode }> = [
    {
      label: "Harga",
      render: (p) => <span className="font-bold text-brand-deep">{formatRupiah(p.basePrice)}</span>,
    },
    {
      label: "Per hari",
      render: (p) => {
        const perHari = Math.round(p.basePrice / p.durationDays);
        return (
          <span className="flex flex-wrap items-center gap-1.5">
            {formatRupiah(perHari)}
            {perHari === minPerHari && (
              <Badge className="border-transparent bg-gold-soft text-gold-deep hover:bg-gold-soft">
                Terhemat
              </Badge>
            )}
          </span>
        );
      },
    },
    { label: "Durasi", render: (p) => `${p.durationDays} hari` },
    { label: "Keberangkatan", render: (p) => p.departCity },
    {
      label: "Hotel Makkah",
      render: (p) => (
        <span>
          {p.hotelMakkahName}
          <span className="mt-0.5 flex flex-wrap items-center gap-1.5 text-xs text-ink-muted">
            <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {p.hotelMakkahDistance} m ke Haram
            {p.hotelMakkahDistance === minJarakMakkah && (
              <Badge className="border-transparent bg-gold-soft text-gold-deep hover:bg-gold-soft">
                Terdekat
              </Badge>
            )}
          </span>
        </span>
      ),
    },
    {
      label: "Hotel Madinah",
      render: (p) => (
        <span>
          {p.hotelMadinahName}
          <span className="mt-0.5 flex items-center gap-1.5 text-xs text-ink-muted">
            <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {p.hotelMadinahDistance} m ke Masjid Nabawi
          </span>
        </span>
      ),
    },
    {
      label: "Rating",
      render: (p) => (
        <span className="inline-flex items-center gap-1 font-semibold text-ink">
          <Star className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
          {p.rating.toFixed(1)}
          <span className="sr-only">dari 5</span>
        </span>
      ),
    },
    { label: "Review", render: (p) => `${p.reviewCount} review` },
  ];

  return (
    <div>
      {/* Pemilih paket — fieldset/legend + checkbox asli */}
      <fieldset className="rounded-2xl border border-line-warm bg-white p-4 shadow-sm md:p-5">
        <legend className="px-1 text-base font-bold text-brand-deep md:text-lg">
          Pilih paket untuk dibandingkan
        </legend>

        <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm text-ink-muted">{hint}.</p>
          {chosen.length > 0 && (
            <button
              type="button"
              onClick={() => setSelected([])}
              className="inline-flex min-h-11 items-center gap-1.5 rounded-xl px-3 text-sm font-semibold text-ink-muted underline-offset-4 transition-colors hover:text-brand-deep hover:underline"
            >
              <X className="h-4 w-4" aria-hidden="true" /> Bersihkan pilihan
            </button>
          )}
        </div>

        <p aria-live="polite" className="sr-only">
          {chosen.length} paket dipilih
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {packages.map((p) => {
            const isSelected = selected.includes(p.slug);
            return (
              <label
                key={p.slug}
                className={`flex min-h-11 cursor-pointer items-center gap-2 rounded-xl border px-4 py-2 text-sm transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand ${
                  isSelected
                    ? "border-brand bg-brand text-white shadow-sm"
                    : "border-line-warm bg-white text-ink hover:border-brand/50"
                }`}
              >
                <input
                  type="checkbox"
                  name="bandingkan-paket"
                  value={p.slug}
                  checked={isSelected}
                  onChange={() => toggle(p.slug)}
                  className="sr-only"
                />
                <span
                  aria-hidden="true"
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                    isSelected ? "border-white/60 bg-white/15" : "border-line-warm bg-ivory"
                  }`}
                >
                  {isSelected ? <Check className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                </span>
                <span className="max-w-[220px] truncate font-semibold sm:max-w-[280px]">{p.title}</span>
                <span className={`text-xs font-medium ${isSelected ? "text-white/85" : "text-ink-muted"}`}>
                  {formatRupiah(p.basePrice)}
                </span>
                <span className="inline-flex items-center gap-0.5 text-xs font-bold">
                  <Star
                    className={`h-3.5 w-3.5 ${isSelected ? "fill-white text-white" : "fill-gold text-gold"}`}
                    aria-hidden="true"
                  />
                  {p.rating.toFixed(1)}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      {/* Tabel perbandingan / empty state */}
      {bisaBandingkan ? (
        <div className="mt-6">
          <div className="overflow-x-auto rounded-2xl border border-line-warm bg-white shadow-sm">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <caption className="sr-only">
                Perbandingan {chosen.length} paket umrah pilihan Anda berdampingan
              </caption>
              <thead>
                <tr className="border-b border-line-warm bg-brand-soft/60">
                  <th
                    scope="col"
                    className="px-4 py-3 text-xs font-bold uppercase tracking-wide text-brand-deep"
                  >
                    Atribut
                  </th>
                  {chosen.map((p) => (
                    <th scope="col" key={p.slug} className="min-w-[180px] px-4 py-3 align-top">
                      <Link
                        href={`/paket/${p.slug}`}
                        className="font-bold text-brand-deep underline-offset-4 hover:underline"
                      >
                        {p.title}
                      </Link>
                      <span className="mt-0.5 block text-xs font-normal text-ink-muted">
                        {p.departCity} · {p.durationDays} hari
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-line-warm">
                {rows.map((row) => (
                  <tr key={row.label}>
                    <th
                      scope="row"
                      className="px-4 py-3 align-top text-xs font-bold uppercase tracking-wide text-ink-muted"
                    >
                      {row.label}
                    </th>
                    {chosen.map((p) => (
                      <td key={p.slug} className="px-4 py-3 align-top text-ink">
                        {row.render(p)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-ink-muted">
            Harga per hari dihitung dari harga dasar dibagi durasi (dibulatkan ke rupiah terdekat). Jarak hotel
            diukur dari pintu hotel ke Masjidil Haram/Masjid Nabawi lewat rute jalan kaki (±). Badge emas
            menandai nilai terbaik di setiap baris.
          </p>
        </div>
      ) : (
        <div className="mt-6 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-line-warm bg-white/60 px-6 py-12 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft">
            <GitCompare className="h-6 w-6 text-brand" aria-hidden="true" />
          </span>
          <p className="mt-4 text-base font-bold text-brand-deep">
            {chosen.length === 1 ? "Baru 1 paket dipilih" : "Belum ada paket dipilih"}
          </p>
          <p className="mt-1 max-w-md text-sm leading-relaxed text-ink-muted">
            {chosen.length === 1
              ? "Pilih minimal satu paket lagi di daftar di atas untuk melihat tabel perbandingan berdampingan."
              : "Centang 2–3 paket pada daftar di atas, lalu tabel perbandingan harga, hotel, jarak ke Haram, dan rating akan muncul di sini."}
          </p>
        </div>
      )}
    </div>
  );
}
