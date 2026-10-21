// Check current organization counts in DB vs the ~3.500 national target
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();
async function main() {
  const byType = await db.company.groupBy({
    by: ["orgType", "country"],
    _count: { _all: true },
  });
  console.log("=== ORGANISASI PER TIPE & NEGARA ===");
  for (const r of byType) {
    console.log(`${r.orgType.padEnd(12)} ${r.country ?? "??"} : ${r._count._all}`);
  }
  const total = await db.company.count();
  const idn = await db.company.count({ where: { country: "ID" } });
  console.log(`\nTOTAL: ${total} | Indonesia: ${idn}`);
  const bySource = await db.dataSource.findMany({ select: { name: true, recordsIndexed: true, status: true } });
  console.log("\n=== SUMBER DATA ===");
  for (const s of bySource) console.log(`${s.name.padEnd(30)} ${String(s.recordsIndexed).padStart(6)} [${s.status}]`);
  const samples = await db.company.findMany({
    where: { orgType: { in: ["PPIU", "PIHK"] }, country: "ID" },
    select: { name: true, licenseNo: true, province: true, sourceRef: true },
    take: 3, orderBy: { createdAt: "asc" },
  });
  console.log("\n=== SAMPEL ===");
  for (const s of samples) console.log(JSON.stringify(s));
  await db.$disconnect();
}
main().catch((e) => { console.error(e); process.exit(1); });
