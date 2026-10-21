import type { Service, ServiceCategory, ServiceFaq } from "./types";
import { serviceCategoryList as categoriesRaw } from "./categories";
import { servicesPart1 } from "./part-1";
import { servicesPart2 } from "./part-2";
import { servicesPart3 } from "./part-3";
import { servicesPart4 } from "./part-4";
import { servicesPart5, servicesPart5Extra } from "./part-5";

/**
 * KATALOG LAYANAN HAJI & UMAH — agregat seluruh part.
 * Ekspor publik: serviceList, serviceCategoryList, getService, getServiceCategory,
 * servicesByCategory, relatedServices.
 */

export type { Service, ServiceCategory, ServiceFaq };

export const serviceCategoryList: ServiceCategory[] = categoriesRaw;

export const serviceList: Service[] = [
  ...servicesPart1,
  ...servicesPart2,
  ...servicesPart3,
  ...servicesPart4,
  ...servicesPart5,
  ...servicesPart5Extra,
];

export function getService(slug: string): Service | undefined {
  return serviceList.find((s) => s.slug === slug);
}

export function getServiceCategory(slug: string): ServiceCategory | undefined {
  return serviceCategoryList.find((c) => c.slug === slug);
}

export function servicesByCategory(categorySlug: string): Service[] {
  return serviceList.filter((s) => s.categorySlug === categorySlug);
}

/** Layanan terkait: se-kategori, bukan dirinya sendiri, dibatasi `limit`. */
export function relatedServices(slug: string, limit = 6): Service[] {
  const me = getService(slug);
  if (!me) return [];
  return serviceList
    .filter((s) => s.categorySlug === me.categorySlug && s.slug !== slug)
    .slice(0, limit);
}
