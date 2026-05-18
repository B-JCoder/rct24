import { getServiceBySlug } from "@/data/services";

export function useService(slug: string) {
  return getServiceBySlug(slug);
}
