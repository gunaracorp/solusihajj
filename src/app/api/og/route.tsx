/**
 * API OG IMAGE — kartu share dinamis 1200×630 (Prioritas 2 God Mode).
 * GET /api/og dengan query dikontrol aplikasi (bukan user) — cache panjang aman.
 *
 * Param:
 *  t      (wajib)  judul utama
 *  k               kicker kecil di atas judul (mis. "PAKET UMRAH · 9 HARI")
 *  chip            pill kanan-atas (mis. kode bandara "CGK")
 *  price           pill harga emas (mis. "Mulai Rp 2.850.000")
 *  rating          angka rating (mis. "4.8") → bintang + angka
 *  reviews         jumlah review (mis. "96") → "· 96 review"
 *  badge           pill outline terverifikasi (mis. "Terverifikasi 5 Lapis")
 *  sub             subjudul 1–2 baris di bawah judul
 *  foot            teks footer kiri
 *
 * Dipakai generateMetadata seluruh halaman SEO via src/lib/og.ts.
 */
import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const GOLD = "#c9a227";
const GREEN_DEEP = "#0a4a36";
const CREAM = "#f5eeda";

/* Ikon SVG data-URI — glyph unicode (★/✓) tidak ada di font bawaan satori. */
const ICON_STAR =
  "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23c9a227'%3E%3Cpath d='M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 9.5l7.1-.6z'/%3E%3C/svg%3E";
const ICON_CHECK =
  "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23c9a227' stroke-width='3.4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6L9 17l-5-5'/%3E%3C/svg%3E";

export async function GET(req: NextRequest) {
  const sp = req.nextUrl.searchParams;
  const title = (sp.get("t") || "SolusiHajj — Layanan Haji & Umrah").slice(0, 120);
  const kicker = (sp.get("k") || "").slice(0, 56);
  const chip = (sp.get("chip") || "").slice(0, 40);
  const price = (sp.get("price") || "").slice(0, 30);
  const rating = (sp.get("rating") || "").slice(0, 4);
  const reviews = (sp.get("reviews") || "").slice(0, 7);
  const badge = (sp.get("badge") || "").slice(0, 36);
  const sub = (sp.get("sub") || "").slice(0, 110);
  const foot = (sp.get("foot") || "Penyelenggara terverifikasi · Dana dijaga escrow").slice(0, 70);

  const hasRating = /^\d([.,]\d)?$/.test(rating);
  const hasMetaRow = Boolean(price || hasRating || badge);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0a4a36 0%, #0e6b4e 65%, #116b4e 100%)",
          padding: 64,
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* Baris brand */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 18,
                background: GOLD,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
                fontWeight: 800,
                color: GREEN_DEEP,
                letterSpacing: 1,
              }}
            >
              SH
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 34, fontWeight: 700, letterSpacing: 1 }}>SolusiHajj</span>
              <span style={{ fontSize: 22, color: CREAM }}>Amanah Anda, Aman.</span>
            </div>
          </div>
          {chip ? (
            <div
              style={{
                display: "flex",
                padding: "10px 24px",
                borderRadius: 999,
                background: GOLD,
                fontSize: 24,
                fontWeight: 700,
                color: GREEN_DEEP,
              }}
            >
              {chip}
            </div>
          ) : null}
        </div>

        {/* Kicker + judul + sub + baris meta */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {kicker ? (
            <div
              style={{
                display: "flex",
                fontSize: 24,
                fontWeight: 700,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: GOLD,
              }}
            >
              {kicker}
            </div>
          ) : null}
          <div
            style={{
              display: "flex",
              fontSize: title.length > 60 ? 52 : 64,
              fontWeight: 700,
              lineHeight: 1.12,
              maxWidth: 1020,
            }}
          >
            {title}
          </div>
          {sub ? (
            <div
              style={{
                display: "flex",
                fontSize: 28,
                color: CREAM,
                maxWidth: 980,
                lineHeight: 1.35,
              }}
            >
              {sub}
            </div>
          ) : null}
          {hasMetaRow ? (
            <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              {price ? (
                <div
                  style={{
                    display: "flex",
                    padding: "12px 28px",
                    borderRadius: 999,
                    background: GOLD,
                    color: GREEN_DEEP,
                    fontSize: 30,
                    fontWeight: 700,
                  }}
                >
                  {price}
                </div>
              ) : null}
              {hasRating ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "12px 24px",
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.12)",
                    fontSize: 28,
                    fontWeight: 700,
                  }}
                >
                  <img
                    src={ICON_STAR}
                    width={26}
                    height={26}
                    style={{ display: "flex" }}
                    alt=""
                  />
                  <span style={{ display: "flex" }}>{rating}</span>
                  {reviews ? (
                    <span style={{ display: "flex", fontSize: 24, color: CREAM, fontWeight: 400 }}>
                      · {reviews} review
                    </span>
                  ) : null}
                </div>
              ) : null}
              {badge ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "12px 24px",
                    borderRadius: 999,
                    border: "2px solid rgba(201,162,39,0.9)",
                    fontSize: 26,
                    fontWeight: 600,
                    color: GOLD,
                  }}
                >
                  <img
                    src={ICON_CHECK}
                    width={24}
                    height={24}
                    style={{ display: "flex" }}
                    alt=""
                  />
                  {badge}
                </div>
              ) : null}
            </div>
          ) : null}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.2)",
            paddingTop: 28,
          }}
        >
          <span style={{ fontSize: 24, color: CREAM }}>{foot}</span>
          <span style={{ fontSize: 26, fontWeight: 700, color: GOLD }}>solusihajj.com</span>
        </div>
      </div>
    ),
    {
      ...size,
      headers: {
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=31536000",
      },
    }
  );
}
