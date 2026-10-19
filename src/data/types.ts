/** Tipe data inti SolusiHajj R1.5 (statis — sumber tunggal sebelum migrasi DB di R2) */

export type Tier = "platinum" | "gold" | "silver";

export type PackageType = "reguler" | "ramadhan" | "plus-turki" | "plus-dubai";

/** Vertikal produk marketplace: paket lengkap (dengan tiket) atau land arrangement (darat saja) */
export type ProductKind = "full" | "land";

/** Jenis organisasi jamaah yang ditampung marketplace (lintas Asia) */
export type OrgType = "PPIU" | "PIHK" | "BPW" | "KBIHU";

export const ORG_META: Record<OrgType, { label: string; full: string; note: string }> = {
  PPIU: { label: "PPIU", full: "Penyelenggara Perjalanan Ibadah Umrah", note: "Berizin Kemenag RI — spesialis paket umrah lengkap." },
  PIHK: { label: "PIHK", full: "Penyelenggara Ibadah Haji Khusus", note: "Kuota resmi Kemenag — penyelenggara haji khusus & furoh." },
  BPW: { label: "BPW", full: "Biro Perjalanan Wisata", note: "Berlisensi otoritas negara masing-masing di Asia." },
  KBIHU: { label: "KBIHU", full: "Konsultan Biro Haji & Umrah", note: "Layanan konsultasi, administrasi & pendampingan manasik." },
};

export const PRODUCT_META: Record<ProductKind, { label: string; tagline: string }> = {
  full: { label: "Paket Lengkap", tagline: "Tiket + visa + hotel + mutawif — tinggal berangkat." },
  land: { label: "Land Arrangement", tagline: "Hotel + visa + bus + muthawif di Tanah Suci (tanpa tiket)." },
};

/** Jadwal penerbangan charter/kelompok grosir (vertikal Tiket Grup) */
export interface FlightSchedule {
  id: string;
  ppiuSlug: string; // penyelenggara handling
  airline: string;
  route: string; // contoh: "Jakarta (CGK) → Jeddah (JED)"
  fromCity: string;
  transit: string; // "Langsung" | "1 transit"
  depart: string; // ISO tanggal
  arrive: string; // ISO tanggal tiba
  seatsTotal: number;
  seatsLeft: number;
  minOrder: number; // minimal kursi per pesanan grup
  pricePerPax: number; // harga grosir per kursi (IDR)
  baggageKg: number;
  notes: string;
}

/** Entri glosarium istilah haji & umrah (senjata SEO) */
export interface GlossaryTerm {
  term: string;
  arabic?: string;
  category: "ritual" | "lokasi" | "logistik" | "regulasi";
  short: string; // definisi 1 kalimat untuk kartu
  detail: string; // 2–4 kalimat untuk konteks & SEO
}

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
  /** Negara domisili organisasi (default Indonesia bila kosong) */
  country?: string;
  /** Jenis organisasi (default PPIU bila kosong) */
  orgType?: OrgType;
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
  /** Vertikal produk (default "full" bila kosong) */
  product?: ProductKind;
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
