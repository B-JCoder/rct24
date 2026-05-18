import { Card } from "@/components/ui";

const principles = ["Clarity before scope", "Simple systems", "Measured delivery"];

export function AboutPage() {
  return (
    <section className="section">
      <div className="container stack">
        <div className="section-heading">
          <span className="eyebrow">About</span>
          <h1>RCT24 helps teams turn ideas into reliable digital products.</h1>
          <p className="lead">
            We work with founders, operators, and local teams that need practical
            execution without unnecessary complexity.
          </p>
        </div>
        <div className="grid cards-grid">
          {principles.map((principle) => (
            <Card key={principle}>
              <h3>{principle}</h3>
              <p>
                A steady process keeps decisions visible and makes every release
                easier to understand.
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
