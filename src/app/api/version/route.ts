import { NextResponse } from "next/server";
import {
  APP_VERSION,
  APP_CODENAME,
  APP_BUILD_DATE,
  RELEASE_LABEL,
  RELEASE_AUTHORITY,
} from "@/lib/version";

/**
 * GET /api/version — identitas rilis aktif (GunaraCorp Release System).
 * Dipakai untuk verifikasi pasca-deploy: versi yang berjalan di server
 * harus sama dengan VERSION di root repo & tag git rilis.
 */
export async function GET() {
  return NextResponse.json(
    {
      version: APP_VERSION,
      label: RELEASE_LABEL,
      codename: APP_CODENAME,
      buildDate: APP_BUILD_DATE,
      scheme: "semver",
      authority: RELEASE_AUTHORITY,
      timestamp: new Date().toISOString(),
    },
    { headers: { "Cache-Control": "no-store" } }
  );
}
