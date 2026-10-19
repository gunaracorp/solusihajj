import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import SolusiHajjApp from "@/components/solusihajj/app";

export const metadata: Metadata = {
  title: {
    default: "SolusiHajj — Paket Umrah PPIU Terverifikasi | Amanah Anda, Aman.",
    template: "%s | SolusiHajj",
  },
  description:
    "Bandingkan paket umrah dari PPIU berizin resmi Kemenag. Dana ditahan escrow hingga Anda berangkat, ulasan hanya dari jamaah nyata, izin setiap travel bisa Anda cek sendiri. Amanah Anda, Aman.",
  keywords: [
    "paket umrah",
    "travel umrah terpercaya",
    "cek izin PPIU",
    "umrah 2026",
    "paket umrah murah",
    "biaya umrah",
    "escrow umrah",
    "PPIU terverifikasi",
  ],
  authors: [{ name: "SolusiHajj" }],
  metadataBase: new URL("https://solusihajj.com"),
  alternates: { canonical: "/" },
  icons: { icon: "/logo.svg" },
  openGraph: {
    title: "SolusiHajj — Amanah Anda, Aman.",
    description:
      "Paket umrah dari PPIU berizin resmi — dana Anda ditahan escrow, ulasan hanya dari jamaah nyata, dan keluarga bisa menemani perjalanan Anda secara digital.",
    url: "https://solusihajj.com",
    siteName: "SolusiHajj",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SolusiHajj — Amanah Anda, Aman.",
    description:
      "Paket umrah dari PPIU terverifikasi 5 lapis, dana dilindungi escrow, review dari jamaah nyata.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0e6b4e",
  width: "device-width",
  initialScale: 1,
};

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
      </head>
      <body className="antialiased bg-background text-foreground min-h-screen flex flex-col">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
