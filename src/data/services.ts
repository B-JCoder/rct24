import type { Service } from "@/types/service.types";

export const services: Service[] = [
  {
    slug: "web-design",
    title: "Web Design",
    category: "Experience",
    summary: "Modern websites that are easy to scan, maintain, and extend.",
    detail: "We define the page structure, visual system, and interaction patterns needed for a polished launch.",
    highlights: ["Information architecture", "Responsive interface", "Launch-ready pages"],
  },
  {
    slug: "product-development",
    title: "Product Development",
    category: "Build",
    summary: "Practical product builds from first workflow to production release.",
    detail: "We shape the feature set, build the core experience, and keep delivery visible from start to finish.",
    highlights: ["Feature planning", "Full-stack implementation", "Release support"],
  },
  {
    slug: "digital-strategy",
    title: "Digital Strategy",
    category: "Planning",
    summary: "Clear direction for teams deciding what to build next.",
    detail: "We turn goals, constraints, and customer needs into an actionable roadmap.",
    highlights: ["Discovery sessions", "Roadmaps", "Operational clarity"],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
