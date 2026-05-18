import { Card } from "@/components/ui";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="section muted">
      <div className="container stack">
        <div className="section-heading">
          <span className="eyebrow">Clients</span>
          <h2>Built around clear communication and steady progress.</h2>
        </div>
        <div className="grid cards-grid">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name}>
              <p>&quot;{testimonial.quote}&quot;</p>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.role}</span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
