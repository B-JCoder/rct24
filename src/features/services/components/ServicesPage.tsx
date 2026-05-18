import { CTABanner } from "@/components/sections/CTABanner";
import { ServiceGrid } from "@/components/sections/ServiceGrid";

export function ServicesPage() {
  return (
    <>
      <section className="page-intro">
        <div className="container narrow stack">
          <span className="eyebrow">Services</span>
          <h1>Digital services shaped for real business work.</h1>
          <p className="lead">
            Choose a focused engagement or combine services into one delivery
            plan that fits your timeline.
          </p>
        </div>
      </section>
      <ServiceGrid />
      <CTABanner />
    </>
  );
}
