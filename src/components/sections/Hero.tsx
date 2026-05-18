import Link from "next/link";
import { Button } from "@/components/ui";
import { siteConfig } from "@/data/siteConfig";

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="stack">
          <span className="eyebrow">Reliable digital delivery</span>
          <h1>{siteConfig.name} builds practical systems for growing teams.</h1>
          <p className="lead">
            Strategy, implementation, and support for businesses that need a
            clean web presence and dependable product workflows.
          </p>
          <div className="actions">
            <Button asChild>
              <Link href="/services">Explore services</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/contact">Start a project</Link>
            </Button>
          </div>
        </div>
        <div className="hero-panel" aria-hidden="true">
          <div className="metric">
            <strong>24/7</strong>
            <span>delivery mindset</span>
          </div>
          <div className="metric">
            <strong>3x</strong>
            <span>faster launch planning</span>
          </div>
          <div className="metric">
            <strong>100%</strong>
            <span>clear ownership</span>
          </div>
        </div>
      </div>
    </section>
  );
}
