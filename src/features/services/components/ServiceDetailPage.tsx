import Link from "next/link";
import { Button, Card } from "@/components/ui";
import type { Service } from "@/types/service.types";

type ServiceDetailPageProps = {
  service: Service;
};

export function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  return (
    <>
      <section className="page-intro">
        <div className="container narrow stack">
          <span className="eyebrow">{service.category}</span>
          <h1>{service.title}</h1>
          <p className="lead">{service.summary}</p>
          <div className="actions">
            <Button asChild>
              <Link href="/contact">Discuss this service</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/services">All services</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container narrow stack">
          <h2>What is included</h2>
          <div className="grid cards-grid">
            {service.highlights.map((highlight) => (
              <Card key={highlight}>
                <h3>{highlight}</h3>
                <p>{service.detail}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
