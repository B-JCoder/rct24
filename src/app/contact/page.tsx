import type { Metadata } from "next";
import { ContactPage } from "@/features/contact/components/ContactPage";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact",
  description: "Start a conversation with RCT24 about your next project.",
});

export default function Page() {
  return <ContactPage />;
}
