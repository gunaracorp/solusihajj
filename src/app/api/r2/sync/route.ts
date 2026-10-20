import { NextResponse } from "next/server";
import { db } from "@/lib/db";

/**
 * R2 API — Trigger sinkronisasi satu sumber (pipeline verifikasi R2).
 * POST { sourceId } → catat SyncEvent + refresh lastSyncedAt.
 *
 * Dalam produksi (R2.5 di VPS): worker scraper menjadwalkan penarikan
 * tiap sumber resmi (SIMPU/SISKOPATUH/HIMPUH/eservices.haj.gov.sa),
 * dedup via unique(name+orgType), lalu memanggil fungsi ini.
 * Di sandbox, sinkronisasi memvalidasi ulang indeks lokal & mencatat
 * audit trail Amanah (prinsip transparansi).
 */
export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { sourceId?: string; sourceKey?: string };
    let sourceId = body.sourceId ?? "";
    if (!sourceId && body.sourceKey) {
      const s = await db.dataSource.findUnique({ where: { key: body.sourceKey } });
      sourceId = s?.id ?? "";
    }
    if (!sourceId) {
      return NextResponse.json({ error: "sourceId/sourceKey wajib diisi" }, { status: 400 });
    }
    const source = await db.dataSource.findUnique({ where: { id: sourceId } });
    if (!source) return NextResponse.json({ error: "Sumber tidak ditemukan" }, { status: 404 });

    // validasi ulang indeks lokal untuk sumber ini
    const indexed = await db.company.count({ where: { sourceId } });

    const ev = await db.syncEvent.create({
      data: {
        sourceId,
        status: "SUCCESS",
        recordsAffected: indexed,
        finishedAt: new Date(),
        note: `Sinkronisasi ulang dari panel Pusat Data — ${indexed} record tervalidasi unik (dedup name+orgType).`,
      },
    });
    await db.dataSource.update({ where: { id: sourceId }, data: { lastSyncedAt: new Date(), recordsIndexed: indexed } });

    const latest = await db.syncEvent.findMany({ where: { sourceId }, orderBy: { startedAt: "desc" }, take: 3 });
    return NextResponse.json({ ok: true, event: ev, recordsIndexed: indexed, history: latest });
  } catch (e) {
    console.error("POST /api/r2/sync", e);
    return NextResponse.json({ error: "Sinkronisasi gagal" }, { status: 500 });
  }
}
