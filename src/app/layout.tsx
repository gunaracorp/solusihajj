import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./theme-extra.css";
import { Toaster } from "@/components/ui/toaster";
import SolusiHajjApp from "@/components/solusihajj/app";

export const metadata: Metadata = {
  title: {
    default: "SolusiHajj — Marketplace Umrah & Haji Terbesar Asia | Amanah Anda, Aman.",
    template: "%s | SolusiHajj",
  },
  description:
    "Marketplace umrah & haji lintas Asia: bandingkan 30+ paket lengkap, land arrangement, dan tiket charter grup dari 18 penyelenggara terverifikasi (PPIU, PIHK, BPW, KBIHU) di 5 negara. Dana dijaga escrow syariah, review hanya dari jamaah nyata. Amanah Anda, Aman.",
  keywords: [
    "paket umrah",
    "marketplace umrah",
    "travel umrah terpercaya",
    "cek izin PPIU",
    "umrah 2026",
    "umrah 2027",
    "paket umrah murah",
    "biaya umrah",
    "land arrangement umrah",
    "tiket charter umrah grup",
    "haji khusus",
    "haji furoh",
    "PIHK",
    "BPW umrah malaysia",
    "umrah singapura",
    "escrow umrah",
    "PPIU terverifikasi",
    "umrah plus turki",
    "umrah ramadhan",
    "kalkulator simpanan haji",
  ],
  authors: [{ name: "SolusiHajj" }],
  creator: "PT SolusiHajj Digital Amanah",
  publisher: "PT SolusiHajj Digital Amanah",
  metadataBase: new URL("https://solusihajj.com"),
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.ico?v=8", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicon-32.png?v=8", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png?v=8", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png?v=8",
  },
  openGraph: {
    title: "SolusiHajj — Marketplace Umrah & Haji Terbesar Asia",
    description:
      "Bandingkan paket umrah, land arrangement, dan tiket charter grup dari 18 penyelenggara terverifikasi di 5 negara Asia. Dana dijaga escrow syariah, review dari jamaah nyata.",
    url: "https://solusihajj.com",
    siteName: "SolusiHajj",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.png?v=8",
        width: 1200,
        height: 630,
        alt: "SolusiHajj — Gerbang Nur: Marketplace Umrah & Haji Terbesar di Asia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SolusiHajj — Marketplace Umrah & Haji Terbesar Asia",
    description:
      "PPIU, PIHK, BPW & KBIHU terverifikasi 5 lapis dalam satu gerbang. Escrow syariah 40/40/20, review Saksi Jamaah, tool Cek Izin publik.",
    images: ["/og-image.png?v=8"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  category: "travel",
};

export const viewport: Viewport = {
  themeColor: "#0e6b4e",
  width: "device-width",
  initialScale: 1,
};

/** Pre-paint: terapkan preferensi dark/elder sebelum render (hindari flash) */
const themeInitScript = `(function(){try{var r=JSON.parse(localStorage.getItem("shj_prefs")||"{}");if(r.dark)document.documentElement.classList.add("dark");if(r.elder)document.documentElement.classList.add("elder");}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Amiri:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="antialiased bg-background text-foreground min-h-screen flex flex-col">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
