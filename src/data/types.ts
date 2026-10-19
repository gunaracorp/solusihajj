/** Tipe data inti SolusiHajj R1 (statis — sumber tunggal sebelum migrasi DB di R2) */

export type Tier = "platinum" | "gold" | "silver";

export type PackageType = "reguler" | "ramadhan" | "plus-turki" | "plus-dubai";

export type DimensionKey =
  | "kejujuran"
  | "mutawif"
  | "hotel"
  | "makanan"
  | "bus"
  | "handling";

export const DIMENSION_LABELS: Record<DimensionKey, string> = {
  kejujuran: "Kejujuran Informasi",
  mutawif: "Mutawif & Bimbingan",
  hotel: "Kualitas Hotel",
  makanan: "Makanan",
  bus: "Transportasi Bus",
  handling: "Handling & Keberangkatan",
};

export const TIER_META: Record<
  Tier,
  { label: string; color: string; bg: string; description: string }
> = {
  platinum: {
    label: "Platinum",
    color: "#111827",
    bg: "#E5E7EB",
    description: "Skor tertinggi: izin aktif, audit kantor lolos, track record 5+ angkatan, rating jamaah ≥ 4,7.",
  },
  gold: {
    label: "Gold",
    color: "#8A6D14",
    bg: "#F5EEDA",
    description: "Izin aktif, audit kantor lolos, track record 3+ angkatan, rating jamaah ≥ 4,4.",
  },
  silver: {
    label: "Silver",
    color: "#4B5563",
    bg: "#F3F4F6",
    description: "Lolos verifikasi 5 lapis lengkap — standar minimum yang sama untuk semua partner.",
  },
};

export interface Ppiu {
  slug: string;
  name: string;
  shortName: string;
  city: string;
  province: string;
  tier: Tier;
  licenseNo: string;
  licenseIssued: string;
  licenseValidUntil: string;
  kemenagOffice: string;
  yearFounded: number;
  jamaahSent: number;
  verifiedAt: string;
  about: string;
  address: string;
  waPhone: string;
  rating: number;
  reviewCount: number;
  dimensions: Record<DimensionKey, number>;
  departureAccuracy: number;
  responseMinutes: number;
  highlights: string[];
}

export interface LicenseRecord {
  aliases: string[];
  name: string;
  city: string;
  licenseNo: string;
  status: "aktif" | "perpanjangan" | "nonaktif";
  tier?: Tier;
  ppiuSlug?: string;
  issuedAt: string;
  validUntil: string;
  note: string;
}

export interface Hotel {
  name: string;
  stars: number;
  distanceToHaram: number; // meter
  walkMinutes: number;
  facilities: string[];
}

export interface PackageDate {
  id: string;
  depart: string; // ISO
  returnDate: string;
  quota: number;
  remaining: number;
  roomType: "quad" | "triple" | "double";
  priceDelta: number;
}

export interface ItineraryDay {
  day: number;
  title: string;
  desc: string;
  location: "JKT" | "JEDA" | "MK" | "MD" | "PLUS";
}

export interface PriceLine {
  label: string;
  amount: string;
}

export interface CancellationRow {
  moment: string;
  refund: string;
}

export interface Pkg {
  slug: string;
  ppiuSlug: string;
  title: string;
  type: PackageType;
  durationDays: number;
  basePrice: number;
  departCity: string;
  departWindow: string;
  hotelMakkah: Hotel;
  hotelMadinah: Hotel;
  airline: string;
  itinerary: ItineraryDay[];
  includes: string[];
  excludes: string[];
  cancellation: CancellationRow[];
  highlights: string[];
  featured: boolean;
  rating: number;
  reviewCount: number;
  visual: "makkah" | "madinah" | "ramadhan" | "turki" | "dubai";
}

export interface Review {
  id: string;
  packageSlug: string;
  ppiuSlug: string;
  name: string;
  city: string;
  returnedAt: string;
  rating: number;
  dimensions: Record<DimensionKey, number>;
  text: string;
  ppiuReply?: string;
}

export interface FaqItem {
  q: string;
  a: string;
  category: "umum" | "escrow" | "verifikasi" | "pembatalan";
}

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "arabic"; text: string; translation: string }
  | { type: "callout"; title: string; text: string; ctaLabel: string; ctaTo: string }
  | { type: "table"; head: string[]; rows: string[][] };

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readMinutes: number;
  publishedAt: string;
  lastReviewed: string;
  author: string;
  blocks: ArticleBlock[];
  related: string[];
}
