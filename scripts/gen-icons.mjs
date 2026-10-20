/**
 * gen-icons.mjs — SolusiHajj v7 Final
 * Meraster SVG brand menjadi ikon lengkap:
 *   public/favicon.ico (16/32/48 — pengganti logo Z lama di tab browser)
 *   public/icon-192.png, public/icon-512.png (PWA / manifest)
 *   public/apple-touch-icon.png (180 — iOS home screen)
 *   public/favicon-32.png, public/favicon-16.png (fallback modern)
 * Jalankan: node scripts/gen-icons.mjs
 */
import sharp from "sharp";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const PUB = join(process.cwd(), "public");
mkdirSync(PUB, { recursive: true });

const maskable = readFileSync(join(PUB, "icon-maskable.svg"));
const mark = readFileSync(join(PUB, "logo.svg"));

async function png(svg, size, out) {
  const buf = await sharp(svg, { density: 384 })
    .resize(size, size, { fit: "cover", position: "centre" })
    .png({ compressionLevel: 9 })
    .toBuffer();
  writeFileSync(join(PUB, out), buf);
  return buf;
}

/** ICO container dengan payload PNG (Vista+) — tanpa dependensi tambahan */
function makeIco(entries) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(entries.length, 4);
  const dirSize = 16 * entries.length;
  let offset = 6 + dirSize;
  const dirs = [];
  const blobs = [];
  for (const { size, buffer } of entries) {
    const e = Buffer.alloc(16);
    e.writeUInt8(size >= 256 ? 0 : size, 0); // width
    e.writeUInt8(size >= 256 ? 0 : size, 1); // height
    e.writeUInt8(0, 2); // palette
    e.writeUInt8(0, 3); // reserved
    e.writeUInt16LE(1, 4); // planes
    e.writeUInt16LE(32, 6); // bpp
    e.writeUInt32LE(buffer.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += buffer.length;
    dirs.push(e);
    blobs.push(buffer);
  }
  return Buffer.concat([header, ...dirs, ...blobs]);
}

const [i16, i32, i48] = await Promise.all([
  png(mark, 16, "favicon-16.png"),
  png(mark, 32, "favicon-32.png"),
  png(mark, 48, "favicon-48.png"),
]);

writeFileSync(join(PUB, "favicon.ico"), makeIco([
  { size: 16, buffer: i16 },
  { size: 32, buffer: i32 },
  { size: 48, buffer: i48 },
]));

await Promise.all([
  png(maskable, 192, "icon-192.png"),
  png(maskable, 512, "icon-512.png"),
  png(maskable, 180, "apple-touch-icon.png"),
]);

console.log("OK: favicon.ico (16/32/48) + icon-192/512 + apple-touch-icon 180 — logo Z diganti SolusiHajj Gerbang Amanah");
