import { NextResponse } from "next/server";
import { db } from "@/lib/db";

/**
 * R2 API — Pusat Sumber Data & riwayat sinkronisasi
 * GET /api/r2/sources
 */
export async function GET() {
  try {
    const sources = await db.dataSource.findMany({
      orderBy: [{ category: "asc" }, { name: "asc" }],
      include: { syncEvents: { orderBy: { startedAt: "desc" }, take: 3 } },
    });
    return NextResponse.json({
      total: sources.length,
      sources: sources.map((s) => ({
        ...s,
        syncEvents: s.syncEvents.map((e) => ({
          id: e.id,
          status: e.status,
          recordsAffected: e.recordsAffected,
          note: e.note,
          startedAt: e.startedAt,
          finishedAt: e.finishedAt,
        })),
      })),
    });
  } catch (e) {
    console.error("GET /api/r2/sources", e);
    return NextResponse.json({ error: "Gagal memuat sumber data" }, { status: 500 });
  }
}
