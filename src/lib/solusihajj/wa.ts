/** Helper konversi funnel WA (dok 05 P0 #7: WA pre-filled) + format Indonesia */

export const WA_NUMBER = "6281316516524"; // WA resmi PT Syarikat Solution Haji Indonesia (go-live)

export function waLink(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const waMessages = {
  general:
    "Assalamualaikum, saya menemukan SolusiHajj di internet. Boleh saya bertanya tentang paket umrah?",
  package: (title: string, ppiu: string, price: string) =>
    `Assalamualaikum, saya tertarik dengan paket "${title}" dari ${ppiu} (harga mulai ${price}) yang saya lihat di SolusiHajj. Mohon info ketersediaan tanggal & rinciannya. Terima kasih.`,
  ppiuStore: (name: string) =>
    `Assalamualaikum, saya menemukan ${name} di SolusiHajj dan melihat izin PPIU-nya sudah terverifikasi. Mohon info paket yang tersedia.`,
  checkLicense: (name: string) =>
    `Assalamualaikum, saya baru saja mengecek izin "${name}" melalui tool Cek Izin PPIU di SolusiHajj dan ingin bertanya lebih lanjut.`,
  calculator: (
    targetYear: string,
    needed: string,
    monthly: string
  ) =>
    `Assalamualaikum, saya baru menggunakan Kalkulator Simpanan Haji SolusiHajj.\n\nTarget berangkat: ${targetYear}\nEstimasi dana dibutuhkan: ${needed}\nRekomendasi setoran: ${monthly}/bulan\n\nMohon bantuannya untuk perencanaan lebih lanjut.`,
  waitlist: "Assalamualaikum, saya ingin mendaftar waitlist Hafizh Track — fitur pendampingan digital keluarga untuk jamaah umrah. Mohon info ketika fitur ini dirilis.",
  ppiuPartner:
    "Assalamualaikum, saya pengelola PPIU dan tertarik menjadi Founding Partner di SolusiHajj. Mohon info proses verifikasi 5 lapis dan onboarding-nya.",
  lead: (name: string, interest: string) =>
    `Assalamualaikum, saya ${name || "(nama)"} ingin konsultasi gratis tentang ${interest || "paket umrah"}.`,
};

export function formatRupiah(n: number, opts?: { compact?: boolean }): string {
  if (opts?.compact) {
    if (n >= 1_000_000_000) return `Rp ${(n / 1_000_000_000).toFixed(1).replace(".", ",")} M`;
    if (n >= 1_000_000) return `Rp ${Math.round(n / 1_000_000)} jt`;
  }
  return "Rp " + n.toLocaleString("id-ID");
}

const MONTHS = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember",
];

const MONTHS_SHORT = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];

export function formatDate(iso: string, style: "long" | "short" = "long"): string {
  const d = new Date(iso + (iso.length === 10 ? "T00:00:00" : ""));
  const months = style === "long" ? MONTHS : MONTHS_SHORT;
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

export function formatMonthYear(iso: string): string {
  const d = new Date(iso + (iso.length === 10 ? "T00:00:00" : ""));
  return `${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}
