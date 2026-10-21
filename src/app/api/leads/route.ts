/**
 * API LEAD PENAWARAN — Prioritas 1 God Mode (lapis lead capture).
 *
 * POST /api/leads : PUBLIK — form "Minta Penawaran" halaman matrix /layanan/[slug]/dari-[kota]
 *                   rate limit 5/menit/IP + honeypot + validasi slug service & kota.
 * GET  /api/leads : SUPER_ADMIN/ADMIN — 200 lead terbaru (dashboard).
 */
import { NextRequest } from "next/server";
import { Prisma } from "@prisma/client";
import { db } from "@/lib/db";
import { guardRole, ok, fail } from "@/lib/api-helpers";
import { rateLimit } from "@/lib/ratelimit";
import { cityList } from "@/data/cities";
import { serviceList } from "@/data/services";

const CITY_SLUGS = new Set(cityList.map((c) => c.slug));
const SERVICE_SLUGS = new Set(serviceList.map((s) => s.slug));

/** Ref berurutan "SH-LEAD-2026-00001" — dengan 3× percobaan bila tabrakan unik. */
async function nextRef(): Promise<string> {
  const year = new Date().getFullYear();
  for (let attempt = 0; attempt < 3; attempt++) {
    const count = await db.serviceLead.count();
    const ref = `SH-LEAD-${year}-${String(count + 1).padStart(5, "0")}`;
    const exists = await db.serviceLead.findUnique({ where: { ref }, select: { id: true } });
    if (!exists) return ref;
  }
  // Fallback anti-tabrakan ekstrem.
  return `SH-LEAD-${year}-${Date.now().toString(36).toUpperCase()}`;
}

export async function GET() {
  const denied = await guardRole(["SUPER_ADMIN", "ADMIN"]);
  if (denied) return denied;
  try {
    const leads = await db.serviceLead.findMany({ orderBy: { createdAt: "desc" }, take: 200 });
    return ok(leads);
  } catch {
    return fail("Gagal memuat lead.", 500);
  }
}

export async function POST(req: NextRequest) {
  if (!rateLimit(req, "leads")) {
    return fail("Terlalu banyak percobaan. Coba lagi beberapa saat.", 429);
  }
  try {
    const body = await req.json();

    // Honeypot: kolom "website" wajib kosong — terisi = bot, balas sukses palsu.
    if (typeof body.website === "string" && body.website.trim() !== "") {
      return ok({ ok: true, ref: "SH-LEAD-OK" }, 201);
    }

    const fullName = String(body.fullName || "").trim();
    const phoneRaw = String(body.phone || "").trim();
    const phone = phoneRaw.replace(/[\s-]/g, "");
    const note = body.note ? String(body.note).trim().slice(0, 500) : null;
    const serviceSlug = String(body.serviceSlug || "").trim();
    const citySlug = String(body.citySlug || "").trim();
    const pagePath = String(body.pagePath || "").trim().slice(0, 200);

    if (fullName.length < 2 || fullName.length > 80) return fail("Nama tidak valid.");
    if (!/^(\+?62|0)8\d{7,13}$/.test(phone)) return fail("Nomor WhatsApp tidak valid — contoh: 0812xxxxxxx.");
    if (!SERVICE_SLUGS.has(serviceSlug)) return fail("Layanan tidak dikenal.");
    if (!CITY_SLUGS.has(citySlug)) return fail("Kota keberangkatan tidak dikenal.");

    const service = serviceList.find((s) => s.slug === serviceSlug)!;
    const city = cityList.find((c) => c.slug === citySlug)!;
    const ref = await nextRef();

    const lead = await db.serviceLead.create({
      data: {
        ref,
        fullName,
        phone,
        note: note || null,
        serviceSlug,
        serviceName: service.name,
        citySlug,
        cityName: city.name,
        pagePath: pagePath || `/layanan/${serviceSlug}/dari-${citySlug}`,
      },
    });

    return ok({ ok: true, ref: lead.ref }, 201);
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2002") {
      return fail("Permintaan sudah tercatat. Tim kami akan menghubungi Anda.", 409);
    }
    return fail("Gagal menyimpan permintaan. Coba lagi sebentar.", 500);
  }
}
