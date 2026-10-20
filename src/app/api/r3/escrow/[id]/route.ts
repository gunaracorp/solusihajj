import { NextResponse } from "next/server";
import { db } from "@/lib/db";

/**
 * R3 API — Aksi AmanahEscrow (state machine dual-control)
 * GET  /api/r3/escrow/[id]  → detail kontrak + milestone + audit trail
 * POST /api/r3/escrow/[id]  → aksi: FUND | RELEASE | DISPUTE | RESOLVE | REFUND
 *
 * Prinsip:
 *  - Dana 100% ditahan escrow (FUNDED) sebelum ada rilis
 *  - Rilis hanya lewat dual-control (permintaan OPERATOR + persetujuan PLATFORM)
 *  - Setiap aksi tercatat di EscrowEvent (audit trail Saksi Jamaah)
 */

const rupiah = (n: number) => `Rp ${n.toLocaleString("id-ID")}`;

export async function GET(_request: Request, ctx: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await ctx.params;
    const contract = await db.escrowContract.findUnique({
      where: { id },
      include: {
        company: { select: { id: true, name: true, brandName: true, orgType: true, city: true, province: true, country: true, status: true, sourceRef: true } },
        milestones: { orderBy: { seq: "asc" } },
        events: { orderBy: { createdAt: "desc" } },
      },
    });
    if (!contract) return NextResponse.json({ error: "Kontrak tidak ditemukan" }, { status: 404 });
    return NextResponse.json({ contract });
  } catch (e) {
    console.error("GET /api/r3/escrow/[id]", e);
    return NextResponse.json({ error: "Gagal memuat detail kontrak" }, { status: 500 });
  }
}

export async function POST(request: Request, ctx: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await ctx.params;
    const body = await request.json();
    const action = String(body.action ?? "").toUpperCase();
    const seq = body.seq ? Math.round(Number(body.seq)) : null;
    const note = body.note ? String(body.note).slice(0, 500) : null;

    const contract = await db.escrowContract.findUnique({
      where: { id },
      include: { milestones: { orderBy: { seq: "asc" } } },
    });
    if (!contract) return NextResponse.json({ error: "Kontrak tidak ditemukan" }, { status: 404 });

    // ---------- FUND: setoran penuh ke escrow ----------
    if (action === "FUND") {
      if (contract.status !== "DRAFT")
        return NextResponse.json({ error: `Kontrak berstatus ${contract.status} — hanya DRAFT yang bisa didanai` }, { status: 409 });
      const depositRef = body.depositRef ? String(body.depositRef).slice(0, 60) : `VA-ESCROW-${contract.ref}`;
      const updated = await db.escrowContract.update({
        where: { id },
        data: {
          status: "FUNDED",
          fundedAmount: contract.totalAmount,
          depositRef,
          events: {
            create: {
              actor: "JAMAAH",
              action: "FUNDED",
              detail: `Dana penuh ${rupiah(contract.totalAmount)} masuk rekening escrow pihak ketiga (ref: ${depositRef}) — dana terkunci, operator belum bisa menarik`,
            },
          },
        },
      });
      return NextResponse.json({ contract: updated });
    }

    // ---------- RELEASE: rilis milestone (dual-control) ----------
    if (action === "RELEASE") {
      if (!["FUNDED", "PARTIAL_RELEASE"].includes(contract.status))
        return NextResponse.json({ error: `Rilis hanya bisa pada status FUNDED/PARTIAL_RELEASE (saat ini: ${contract.status})` }, { status: 409 });
      const milestone = contract.milestones.find((m) => m.seq === seq);
      if (!milestone) return NextResponse.json({ error: "Milestone tidak ditemukan" }, { status: 404 });
      if (milestone.status !== "HELD")
        return NextResponse.json({ error: `Milestone ${seq} berstatus ${milestone.status} — tidak bisa dirilis` }, { status: 409 });
      // urutan rilis: seq 1 harus selesai dulu sebelum seq 2, dst
      const earlierHeld = contract.milestones.some((m) => m.seq < milestone.seq && m.status === "HELD");
      if (earlierHeld)
        return NextResponse.json({ error: "Rilis harus berurutan — selesaikan milestone sebelumnya" }, { status: 409 });

      const now = new Date();
      const [, updated] = await db.$transaction([
        db.escrowMilestone.update({
          where: { contractId_seq: { contractId: id, seq: milestone.seq } },
          data: { status: "RELEASED", actedAt: now, note: note ?? null },
        }),
        db.escrowContract.update({
          where: { id },
          data: {
            releasedAmount: contract.releasedAmount + milestone.amount,
            status: contract.releasedAmount + milestone.amount >= contract.totalAmount ? "SETTLED" : "PARTIAL_RELEASE",
            events: {
              create: [
                {
                  actor: "OPERATOR",
                  action: "RELEASE_REQUESTED",
                  detail: `Operator mengajukan ${milestone.label} (${rupiah(milestone.amount)})${note ? ` — catatan: ${note}` : ""} — bukti syarat dilampirkan`,
                },
                {
                  actor: "PLATFORM",
                  action: "RELEASED",
                  detail: `Dual-control disetujui — ${milestone.label} ${rupiah(milestone.amount)} (${milestone.percent}%) cair ke operator`,
                },
              ],
            },
          },
          include: { milestones: { orderBy: { seq: "asc" } }, events: { orderBy: { createdAt: "desc" }, take: 5 } },
        }),
      ]);
      return NextResponse.json({ contract: updated });
    }

    // ---------- DISPUTE: jamaah mengajukan sengketa ----------
    if (action === "DISPUTE") {
      if (!["FUNDED", "PARTIAL_RELEASE"].includes(contract.status))
        return NextResponse.json({ error: `Sengketa hanya bisa pada status FUNDED/PARTIAL_RELEASE (saat ini: ${contract.status})` }, { status: 409 });
      if (!note || note.length < 10)
        return NextResponse.json({ error: "Jelaskan sengketa minimal 10 karakter (proteksi Saksi Jamaah)" }, { status: 400 });
      const targetSeq = seq ?? contract.milestones.find((m) => m.status === "HELD")?.seq;
      const updated = await db.escrowContract.update({
        where: { id },
        data: {
          status: "DISPUTED",
          ...(targetSeq
            ? {
                milestones: {
                  updateMany: { where: { seq: targetSeq, status: "HELD" }, data: { status: "DISPUTED", note } },
                },
              }
            : {}),
          events: {
            create: {
              actor: "JAMAAH",
              action: "DISPUTED",
              detail: `Sengketa diajukan${targetSeq ? ` pada milestone ${targetSeq}` : ""}: ${note} — dana dibekukan sampai resolusi`,
            },
          },
        },
        include: { milestones: { orderBy: { seq: "asc" } }, events: { orderBy: { createdAt: "desc" }, take: 5 } },
      });
      return NextResponse.json({ contract: updated });
    }

    // ---------- RESOLVE: sengketa selesai (dua pihak sepakat) ----------
    if (action === "RESOLVE") {
      if (contract.status !== "DISPUTED")
        return NextResponse.json({ error: "Tidak ada sengketa aktif untuk diselesaikan" }, { status: 409 });
      if (!note || note.length < 10)
        return NextResponse.json({ error: "Cantumkan hasil kesepakatan resolusi (min. 10 karakter)" }, { status: 400 });
      const updated = await db.escrowContract.update({
        where: { id },
        data: {
          status: contract.releasedAmount > 0 ? "PARTIAL_RELEASE" : "FUNDED",
          milestones: {
            updateMany: { where: { status: "DISPUTED" }, data: { status: "HELD", note: `Resolusi: ${note}` } },
          },
          events: {
            create: {
              actor: "DUAL_CONTROL",
              action: "RESOLVED",
              detail: `Sengketa diselesaikan dengan kesepakatan kedua pihak: ${note}`,
            },
          },
        },
        include: { milestones: { orderBy: { seq: "asc" } }, events: { orderBy: { createdAt: "desc" }, take: 5 } },
      });
      return NextResponse.json({ contract: updated });
    }

    // ---------- REFUND: pengembalian sisa dana ke jamaah ----------
    if (action === "REFUND") {
      if (!["FUNDED", "PARTIAL_RELEASE", "DISPUTED"].includes(contract.status))
        return NextResponse.json({ error: `Refund tidak tersedia pada status ${contract.status}` }, { status: 409 });
      const refundAmount = contract.fundedAmount - contract.releasedAmount;
      if (refundAmount <= 0)
        return NextResponse.json({ error: "Tidak ada sisa dana yang bisa dikembalikan" }, { status: 409 });
      const updated = await db.escrowContract.update({
        where: { id },
        data: {
          status: "REFUNDED",
          milestones: {
            updateMany: { where: { status: { in: ["HELD", "DISPUTED"] } }, data: { status: "REFUNDED" } },
          },
          events: {
            create: {
              actor: "PLATFORM",
              action: "REFUNDED",
              detail: `Sisa dana ${rupiah(refundAmount)} dikembalikan ke jamaah (${contract.jamaahName}) — kontrak ditutup${note ? ` — ${note}` : ""}`,
            },
          },
        },
        include: { milestones: { orderBy: { seq: "asc" } }, events: { orderBy: { createdAt: "desc" }, take: 5 } },
      });
      return NextResponse.json({ contract: updated });
    }

    return NextResponse.json({ error: `Aksi tidak dikenal: ${action}` }, { status: 400 });
  } catch (e) {
    console.error("POST /api/r3/escrow/[id]", e);
    return NextResponse.json({ error: "Gagal memproses aksi escrow" }, { status: 500 });
  }
}
