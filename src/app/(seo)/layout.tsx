import { SiteHeader } from "@/components/seo/site-header";
import { SiteFooter } from "@/components/seo/site-footer";

/* Layout bersama route group (seo) — semua halaman SEO statis App Router
   mendapat header/footer konsisten tanpa menyentuh SPA hash-route di "/". */

export default function SeoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-ivory">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
