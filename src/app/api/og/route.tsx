/**
 * API OG IMAGE — kartu share dinamis 1200×630 (Prioritas 1 God Mode).
 * GET /api/og?t={judul}&chip={label}&price={rupiah}&foot={teks-footer}
 *
 * Dipakai generateMetadata halaman matrix (/layanan/[slug]/dari-[kota]) dan
 * detail layanan via openGraph.images — menghindari konflik file-convention
 * opengraph-image dengan segmen dinamis [kota] (Turbopack shadowing).
 * Query dikontrol aplikasi (bukan user) — cache panjang aman.
 */
import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function GET(req: NextRequest) {
  const sp = req.nextUrl.searchParams;
  const title = (sp.get("t") || "SolusiHajj — Layanan Haji & Umrah").slice(0, 120);
  const chip = (sp.get("chip") || "").slice(0, 40);
  const price = (sp.get("price") || "").slice(0, 30);
  const foot = (sp.get("foot") || "Penyelenggara terverifikasi · Dana dijaga escrow").slice(0, 70);

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
                background: "#c9a227",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 34, fontWeight: 700, letterSpacing: 1 }}>SolusiHajj</span>
              <span style={{ fontSize: 22, color: "#f5eeda" }}>Amanah Anda, Aman.</span>
            </div>
          </div>
          {chip ? (
            <div
              style={{
                display: "flex",
                padding: "10px 24px",
                borderRadius: 999,
                background: "#c9a227",
                fontSize: 24,
                fontWeight: 700,
                color: "#0a4a36",
              }}
            >
              {chip}
            </div>
          ) : null}
        </div>

        {/* Judul + harga */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: title.length > 60 ? 56 : 68,
              fontWeight: 700,
              lineHeight: 1.12,
              maxWidth: 980,
            }}
          >
            {title}
          </div>
          {price ? (
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  display: "flex",
                  padding: "12px 28px",
                  borderRadius: 999,
                  background: "#c9a227",
                  color: "#0a4a36",
                  fontSize: 30,
                  fontWeight: 700,
                }}
              >
                {price}
              </div>
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
          <span style={{ fontSize: 24, color: "#f5eeda" }}>{foot}</span>
          <span style={{ fontSize: 26, fontWeight: 700, color: "#c9a227" }}>solusihajj.com</span>
        </div>
      </div>
    ),
    size
  );
}
