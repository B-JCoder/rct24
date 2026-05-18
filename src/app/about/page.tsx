import type { Metadata } from "next";
import { AboutPage } from "@/components/sections/AboutPage";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "About",
  description: "Learn about RCT24 and the way we help teams ship better digital work.",
});

export default function Page() {
  return <AboutPage />;
}
