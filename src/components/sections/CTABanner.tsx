import Link from "next/link";
import { Button } from "@/components/ui";

export function CTABanner() {
  return (
    <section className="cta-band">
      <div className="container cta-content">
        <div>
          <span className="eyebrow">Ready</span>
          <h2>Bring the next project into focus.</h2>
        </div>
        <Button asChild variant="secondary">
          <Link href="/contact">Contact RCT24</Link>
        </Button>
      </div>
    </section>
  );
}
