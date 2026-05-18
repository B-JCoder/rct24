import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";

type PageMetadataInput = {
  title: string;
  description: string;
};

export function generatePageMetadata({ title, description }: PageMetadataInput): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      siteName: siteConfig.name,
      type: "website",
    },
  };
}
