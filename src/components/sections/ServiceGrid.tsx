import { ServiceCard } from "@/components/sections/ServiceCard";
import { services } from "@/data/services";

export function ServiceGrid() {
  return (
    <section className="section">
      <div className="container stack">
        <div className="section-heading">
          <span className="eyebrow">Services</span>
          <h2>Focused help where it moves the work forward.</h2>
        </div>
        <div className="grid cards-grid">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
