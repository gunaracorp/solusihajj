import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  /* Aset brand selalu direvalidasi — cegah logo lama (Z) bangkit dari cache
     browser/middlebox. File kecil, dampak performa bisa diabaikan. */
  async headers() {
    const brandAssets = [
      "/logo.svg",
      "/logo-gerbang-nur.svg",
      "/logo-full.svg",
      "/favicon.ico",
      "/favicon-16.png",
      "/favicon-32.png",
      "/favicon-48.png",
      "/icon-192.png",
      "/icon-512.png",
      "/apple-touch-icon.png",
      "/og-image.png",
    ];
    return brandAssets.map((source) => ({
      source,
      headers: [{ key: "Cache-Control", value: "no-cache, must-revalidate" }],
    }));
  },
};

export default nextConfig;
