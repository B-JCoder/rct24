import Link from "next/link";
import { Badge, Card } from "@/components/ui";
import type { Service } from "@/types/service.types";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="service-card">
      <Badge>{service.category}</Badge>
      <h3>{service.title}</h3>
      <p>{service.summary}</p>
      <Link href={`/services/${service.slug}`}>View details</Link>
    </Card>
  );
}
