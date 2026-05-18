import type { Metadata } from "next";
import { ServicesPage } from "@/features/services/components/ServicesPage";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Services",
  description: "Explore RCT24 services for strategy, delivery, and digital growth.",
});

export default function Page() {
  return <ServicesPage />;
}
