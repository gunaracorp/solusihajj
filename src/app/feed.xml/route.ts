/**
 * /feed.xml — kanal RSS 2.0 kanonik SolusiHajj (v2.1.0, Prioritas 5).
 * 50 artikel PUBLISHED terbaru dari DB; bila DB gagal ATAU kosong,
 * fallback deterministik ke 112 artikel statis (src/data/articles.ts).
 * Feed ini TIDAK BOLEH 500 — seluruh akses DB dibungkus try/catch.
 */
import { SITE } from "@/lib/og";
import { db } from "@/lib/db";
import { articleList } from "@/data/articles";

export const dynamic = "force-dynamic";

const TAKE = 50;

/** Baris feed seragam (shape sama untuk sumber DB maupun fallback statis). */
interface FeedEntry {
  slug: string;
  title: string;
  excerpt: string;
  category?: string | null;
  author?: string | null;
  date: Date;
}

/** Escape karakter khusus XML — urutan replace & PERTAMA agar tidak dobel-escape. */
function xmlEscape(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/**
 * Muat entri feed. Prisma client pada schema aktif belum mengekspos model
 * `article`, jadi akses dilakukan lewat adapter ketat yang tetap kompatibel
 * maju begitu model Article ditambahkan ke Prisma schema — tanpa men-hardcode
 * tipe client. Setiap kegagalan (model tak ada, DB down, hasil kosong) jatuh
 * ke fallback statis 112 artikel.
 */
async function loadEntries(): Promise<FeedEntry[]> {
  try {
    const prisma = db as unknown as {
      article?: {
        findMany(args: {
          where: { status: string };
          orderBy: { updatedAt: "desc" };
          take: number;
        }): Promise<
          Array<{
            slug: string;
            title: string;
            excerpt: string;
            category?: string | null;
            author?: string | null;
            publishedAt?: Date | string | null;
            updatedAt?: Date | string | null;
          }>
        >;
      };
    };
    if (!prisma.article) throw new Error("model Article belum tersedia di Prisma client");

    const rows = await prisma.article.findMany({
      where: { status: "PUBLISHED" },
      orderBy: { updatedAt: "desc" },
      take: TAKE,
    });
    if (rows.length === 0) throw new Error("DB kosong — pakai fallback statis");

    return rows.map((r) => {
      const raw = r.publishedAt ?? r.updatedAt;
      const date =
        raw instanceof Date ? raw : raw ? new Date(raw) : new Date();
      return {
        slug: r.slug,
        title: r.title,
        excerpt: r.excerpt,
        category: r.category ?? null,
        author: r.author ?? null,
        date,
      };
    });
  } catch {
    // Fallback statis: 112 artikel E-E-A-T — date dari lastReviewed ?? publishedAt.
    return articleList
      .map((a) => ({
        slug: a.slug,
        title: a.title,
        excerpt: a.excerpt,
        category: a.category,
        author: a.author,
        date: new Date(a.lastReviewed ?? a.publishedAt),
      }))
      .sort((a, b) => b.date.getTime() - a.date.getTime())
      .slice(0, TAKE);
  }
}

export async function GET(): Promise<Response> {
  const entries = await loadEntries();
  const self = `${SITE}/feed.xml`;

  const items = entries
    .map((e) => {
      const link = `${SITE}/artikel/${e.slug}`;
      return [
        "    <item>",
        `      <title>${xmlEscape(e.title)}</title>`,
        `      <link>${xmlEscape(link)}</link>`,
        `      <guid isPermaLink="true">${xmlEscape(link)}</guid>`,
        `      <pubDate>${e.date.toUTCString()}</pubDate>`,
        `      <description>${xmlEscape(e.excerpt)}</description>`,
        ...(e.category ? [`      <category>${xmlEscape(e.category)}</category>`] : []),
        "    </item>",
      ].join("\n");
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${xmlEscape("SolusiHajj — Artikel & Panduan Umrah Haji")}</title>
    <link>${xmlEscape(`${SITE}/artikel`)}</link>
    <description>${xmlEscape("Panduan, berita, dan artikel E-E-A-T seputar umrah & haji — SolusiHajj, Amanah Anda, Aman.")}</description>
    <language>id-ID</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <generator>SolusiHajj Release System</generator>
    <atom:link rel="self" type="application/rss+xml" href="${xmlEscape(self)}"/>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=900",
    },
  });
}
