import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/features/services/components/ServiceDetailPage";
import { getServiceBySlug, services } from "@/data/services";
import { generatePageMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return generatePageMetadata({
      title: "Service not found",
      description: "The requested service could not be found.",
    });
  }

  return generatePageMetadata({
    title: service.title,
    description: service.summary,
  });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}
