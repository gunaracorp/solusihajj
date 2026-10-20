import { NextResponse } from "next/server";
import ZAI from "z-ai-web-dev-sdk";
import { db } from "@/lib/db";
import { packageList } from "@/data/packages";
import { getPpiu } from "@/data/ppiu";

/**
 * R3 API — NurMatch AI (LLM live)
 * GET  /api/r3/ai/match → sesi terakhir (riwayat transparan)
 * POST /api/r3/ai/match → profil jamaah → rekomendasi paket + penyelenggara
 *
 * Alur: filter kandidat nyata (27+ paket katalog + penyelenggara database
 * nasional) → LLM menyusun rekomendasi + alasan → simpan sesi (audit).
 * AI TIDAK mengarang produk: hanya boleh memilih dari kandidat yang diberikan.
 */

interface Candidate {
  kind: "paket" | "penyelenggara";
  refId: string;
  title: string;
  meta: string;
}

export async function GET() {
  try {
    const sessions = await db.aiMatchSession.findMany({
      orderBy: { createdAt: "desc" },
      take: 8,
      select: { id: true, profile: true, verdict: true, model: true, latencyMs: true, createdAt: true },
    });
    return NextResponse.json({ sessions });
  } catch (e) {
    console.error("GET /api/r3/ai/match", e);
    return NextResponse.json({ error: "Gagal memuat riwayat NurMatch" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const started = Date.now();
  try {
    const body = await request.json();
    const budgetJt = Math.max(3, Math.min(200, Number(body.budgetJt ?? 25)));
    const city = String(body.city ?? "Jakarta").trim().slice(0, 40);
    const month = String(body.month ?? "").trim().slice(0, 20);
    const pax = Math.max(1, Math.min(40, Math.round(Number(body.pax ?? 2))));
    const hasPassport = Boolean(body.hasPassport ?? true);
    const style = String(body.style ?? "reguler"); // reguler | hemat | vip | keluarga
    const priorities: string[] = Array.isArray(body.priorities) ? body.priorities.slice(0, 6).map(String) : [];
    const notes = String(body.notes ?? "").slice(0, 400);

    // ---------- kandidat paket (data katalog riil) ----------
    const budget = budgetJt * 1_000_000;
    const paketCandidates = packageList
      .filter((p) => p.basePrice <= budget * 1.15) // toleransi 15%
      .sort((a, b) => a.basePrice - b.basePrice)
      .slice(0, 10)
      .map<Candidate>((p) => ({
        kind: "paket",
        refId: p.slug,
        title: p.title,
        meta: `${p.durationDays} hari • Rp ${p.basePrice.toLocaleString("id-ID")} • berangkat ${p.departCity} • ${p.departWindow} • hotel Makkah ${p.hotelMakkah.name} (${p.hotelMakkah.distanceToHaramMeters} m) • rating ${p.rating} (${p.reviewCount} review Saksi Jamaah)`,
      }));

    // ---------- kandidat penyelenggara (database nasional) ----------
    const operators = await db.company.findMany({
      where: { orgType: { in: ["PPIU", "PIHK"] }, status: { in: ["AKTIF", "BARU"] } },
      orderBy: [{ status: "asc" }, { name: "asc" }],
      take: 40,
    });
    const opCandidates = operators.slice(0, 8).map<Candidate>((c) => ({
      kind: "penyelenggara",
      refId: c.id,
      title: c.name,
      meta: `${c.orgType} • ${c.status}${c.city ? ` • ${c.city}` : ""}${c.province ? `, ${c.province}` : ""}${c.licenseNo ? ` • ${c.licenseNo}` : ""} • sumber: ${c.sourceRef ? "terverifikasi dokumen resmi" : "database"}`,
    }));

    if (paketCandidates.length === 0) {
      return NextResponse.json(
        { error: `Belum ada paket dalam anggaran ${budgetJt} jt — anggaran tertinggi katalog saat ini lebih dari itu` },
        { status: 422 }
      );
    }

    const profileText = [
      `Anggaran per orang: ${budgetJt} juta rupiah`,
      `Kota keberangkatan: ${city}`,
      month ? `Rencana berangkat: ${month}` : "Rencana berangkat: fleksibel",
      `Jumlah jamaah: ${pax} orang`,
      `Paspor sudah siap: ${hasPassport ? "ya" : "belum"}`,
      `Gaya perjalanan: ${style}`,
      priorities.length ? `Prioritas: ${priorities.join(", ")}` : "Prioritas: belum ditentukan",
      notes ? `Catatan tambahan: ${notes}` : "",
    ].filter(Boolean).join("\n");

    const system = `Kamu adalah NurMatch AI, penasihat perjalanan ibadah platform SolusiHajj (solusihajj.com).
TUGAS: mencocokkan profil jamaah dengan paket & penyelenggara dari KANDIDAT yang diberikan — jangan pernah mengarang produk yang tidak ada di daftar.
ATURAN WAJIB:
1. Bahasa Indonesia hangat dan jujur, ramah lansia (kalimat pendek, tanpa jargon teknis).
2. Rekomendasikan 2-3 paket TERBAIK (refId = slug paket) + 1-2 penyelenggara (refId = id database).
3. Jelaskan ALASAN konkret: harga vs anggaran, durasi, hotel & jarak ke Haram, kota keberangkatan, rating Saksi Jamaah. JANGAN pernah menyebutkan refId/slug/id mentah di dalam kalimat — sebutkan hanya nama yang manusiawi.
4. Sebutkan prinsip AmanahEscrow bila relevan: dana jamaah ditahan escrow 40/40/20 sehingga aman.
5. Jika paspor belum siap atau data kurang, sampaikan langkah yang perlu disiapkan.
6. Jawab HANYA JSON valid (tanpa markdown fence) dengan skema:
{"verdict":"1 kalimat kesimpulan","reasoning":"penjelasan markdown 120-180 kata","picks":[{"kind":"paket|penyelenggara","refId":"...","title":"...","reason":"1-2 kalimat"}],"advice":["tips 1","tips 2","tips 3"],"followUps":["pertanyaan lanjutan 1","pertanyaan lanjutan 2","pertanyaan lanjutan 3"]}`;

    const user = `PROFIL JAMAAH:\n${profileText}\n\nKANDIDAT PAKET (maks 10):\n${paketCandidates
      .map((p, i) => `${i + 1}. [${p.refId}] ${p.title} — ${p.meta}`)
      .join("\n")}\n\nKANDIDAT PENYELENGGARA (maks 8):\n${opCandidates
      .map((p, i) => `${i + 1}. [${p.refId}] ${p.title} — ${p.meta}`)
      .join("\n")}`;

    let verdict = "";
    let reasoning = "";
    let picks: unknown[] = [];
    let advice: string[] = [];
    let followUps: string[] = [];
    let model = "glm-4.6";

    try {
      const zai = await ZAI.create();
      const completion = await zai.chat.completions.create({
        messages: [
          { role: "assistant", content: system },
          { role: "user", content: user },
        ],
        thinking: { type: "disabled" },
        temperature: 0.4,
      });
      const raw = completion.choices[0]?.message?.content ?? "";
      const cleaned = raw.replace(/```json\s*|```/g, "").trim();
      const parsed = JSON.parse(cleaned);
      verdict = String(parsed.verdict ?? "");
      reasoning = String(parsed.reasoning ?? "");
      picks = Array.isArray(parsed.picks) ? parsed.picks.slice(0, 6) : [];
      advice = Array.isArray(parsed.advice) ? parsed.advice.slice(0, 4).map(String) : [];
      followUps = Array.isArray(parsed.followUps) ? parsed.followUps.slice(0, 4).map(String) : [];
      model = completion.model ?? model;
    } catch (aiErr) {
      console.error("NurMatch AI fallback:", aiErr);
      // FALLBACK deterministik (tanpa LLM): skor transparan
      const scored = paketCandidates
        .map((c) => {
          const pkg = packageList.find((p) => p.slug === c.refId)!;
          const fit = Math.max(0, 100 - Math.abs(pkg.basePrice - budget) / budget * 100);
          return { c, pkg, score: fit + (pkg.featured ? 5 : 0) + pkg.rating };
        })
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);
      verdict = `Berdasarkan anggaran ${budgetJt} jt dari ${city}, kami menyaring ${paketCandidates.length} paket kandidat dan merekomendasikan ${scored.length} paket paling sesuai.`;
      reasoning = `Mode transparan (skor otomatis): pencocokan berdasarkan kedekatan harga terhadap anggaran, kota keberangkatan, dan rating Saksi Jamaah.\n\n${scored
        .map((s, i) => `${i + 1}. **${s.pkg.title}** — ${s.pkg.durationDays} hari, Rp ${s.pkg.basePrice.toLocaleString("id-ID")}, berangkat ${s.pkg.departCity} (skor kecocokan ${Math.round(Math.min(99, s.score))}).`)
        .join("\n")}\n\nSemua paket dilindungi AmanahEscrow: dana ditahan rekening pihak ketiga dan cair bertahap 40/40/20 sesuai progres perjalanan.`;
      picks = scored.map((s) => ({
        kind: "paket",
        refId: s.pkg.slug,
        title: s.pkg.title,
        reason: `${s.pkg.durationDays} hari • Rp ${s.pkg.basePrice.toLocaleString("id-ID")} • ${s.pkg.departCity} • rating ${s.pkg.rating}`,
      }));
      if (opCandidates.length) picks = [...picks, opCandidates[0]];
      advice = [
        "Pastikan paspor aktif minimal 7 bulan sebelum keberangkatan.",
        "Bandingkan jarak hotel ke Haram — makin dekat, makin hemat tenaga untuk jamaah lansia.",
        `Untuk ${pax} jamaah, tanyakan diskon grup ke penyelenggara lewat tombol WhatsApp.`,
      ];
      followUps = [
        "Apakah saya perlu paket dengan hotel terdekat Haram meski lebih mahal?",
        "Kapan tanggal keberangkatan paling hemat dari kota saya?",
        "Bagaimana skema pembayaran escrow melindungi saya?",
      ];
    }

    const latencyMs = Date.now() - started;
    const session = await db.aiMatchSession.create({
      data: {
        profile: JSON.stringify({ budgetJt, city, month, pax, hasPassport, style, priorities, notes }),
        verdict,
        reasoning,
        packageIds: JSON.stringify(picks.filter((p) => (p as { kind?: string }).kind === "paket").map((p) => (p as { refId: string }).refId)),
        companyIds: JSON.stringify(picks.filter((p) => (p as { kind?: string }).kind === "penyelenggara").map((p) => (p as { refId: string }).refId)),
        followUps: JSON.stringify(followUps),
        model,
        latencyMs,
      },
    });

    return NextResponse.json({
      sessionId: session.id,
      verdict,
      reasoning,
      picks,
      advice,
      followUps,
      model,
      latencyMs,
      candidateCount: { paket: paketCandidates.length, operator: opCandidates.length },
    });
  } catch (e) {
    console.error("POST /api/r3/ai/match", e);
    return NextResponse.json({ error: "NurMatch AI sibuk — coba lagi sesaat" }, { status: 500 });
  }
}
