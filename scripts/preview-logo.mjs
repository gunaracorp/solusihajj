/**
 * preview-logo.mjs — render logo.svg ke PNG (besar + kecil) untuk inspeksi visual.
 * Jalankan: node scripts/preview-logo.mjs
 */
import sharp from "sharp";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const PUB = join(process.cwd(), "public");
const svg = readFileSync(join(PUB, "logo.svg"));

const targets = [
  { size: 512, out: join(PUB, "_preview-512.png") },
  { size: 48, out: join(PUB, "_preview-48.png") },
  { size: 32, out: join(PUB, "_preview-32.png") },
];

for (const t of targets) {
  await sharp(svg, { density: 384 })
    .resize(t.size, t.size)
    .png()
    .toFile(t.out);
  console.log("OK", t.out);
}
