/**
 * R5 post-pass — tambahkan provenance SISKOPATUH pada record eksisting
 * (HIMPUH/Kemenag) yang ikut dinaiikkan/diperkaya oleh registri nasional.
 * Aturan: hanya record PIHK/PPIU ber-source lama yang notes-nya belum
 * menyebut SISKOPATUH, licenseNo-nya berformat SK SISKOPATUH (digit murni/U.x).
 */
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();
const SRC_KEY = "siskopatuh";

async function main() {
  const src = await db.dataSource.findUnique({ where: { key: SRC_KEY } });
  if (!src) throw new Error("siskopatuh source tidak ada");
  const targets = await db.company.findMany({
    where: { sourceId: { not: src.id }, orgType: { in: ["PPIU", "PIHK"] }, verified: true },
    select: { id: true, name: true, orgType: true, licenseNo: true, licenseYear: true, notes: true },
  });
  let n = 0;
  for (const c of targets) {
    const lic = (c.licenseNo ?? "").trim();
    const isSk = /^\d{10,}$/.test(lic.replace(/\s/g, "")) || /^NOMOR\s*U\./i.test(lic);
    if (!isSk) continue;
    if ((c.notes ?? "").includes("SISKOPATUH")) continue;
    const add = ` • Perizinan terverifikasi registri SISKOPATUH Kemenhaj (SK ${lic}${c.licenseYear ? `, ${c.licenseYear}` : ""})`;
    await db.company.update({ where: { id: c.id }, data: { notes: (c.notes ?? "") + add } });
    n++;
  }
  console.log(`Post-pass: ${n} record diberi provenance SISKOPATUH (dari ${targets.length} kandidat)`);
  await db.$disconnect();
}
main().catch((e) => { console.error(e); process.exit(1); });
