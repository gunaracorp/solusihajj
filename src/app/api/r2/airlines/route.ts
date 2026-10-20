import { NextResponse } from "next/server";
import { db } from "@/lib/db";

/**
 * R2 API — Jaringan maskapai ibadah (data riil rilis resmi)
 * GET /api/r2/airlines
 */
export async function GET() {
  try {
    const airlines = await db.airline.findMany({
      where: { active: true },
      orderBy: [{ category: "asc" }, { name: "asc" }],
      include: { routes: { orderBy: { originCode: "asc" } } },
    });
    const routeTotal = await db.flightRoute.count();
    const byService = await db.flightRoute.groupBy({ by: ["serviceType"], _count: { serviceType: true } });
    return NextResponse.json({
      total: airlines.length,
      routeTotal,
      byService: byService.map((s) => ({ service: s.serviceType, count: s._count.serviceType })),
      airlines,
    });
  } catch (e) {
    console.error("GET /api/r2/airlines", e);
    return NextResponse.json({ error: "Gagal memuat jaringan maskapai" }, { status: 500 });
  }
}
