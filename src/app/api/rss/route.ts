/**
 * /api/rss — LEGACY ENDPOINT (SolusiHajj v2.1.0, Prioritas 5).
 * Endpoint lama menayangkan feed RSS ber-branding lama dengan item hash-route
 * #/berita/{slug}; kanal kanonik kini adalah /feed.xml (domain-aware dari SITE,
 * fallback 112 artikel statis, item /artikel/{slug}). Route ini dipertahankan
 * hanya sebagai jembatan kompatibilitas: permanent redirect 308 (RFC 9110)
 * sehingga pembaca feed lama dan crawler memindahkan langganan tanpa kehilangan riwayat.
 */
import { NextResponse } from "next/server";
import { SITE } from "@/lib/og";

export const dynamic = "force-dynamic";

export async function GET(): Promise<Response> {
  return NextResponse.redirect(`${SITE}/feed.xml`, 308);
}
