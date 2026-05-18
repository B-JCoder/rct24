import Link from "next/link";
import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container narrow stack">
        <span className="eyebrow">404</span>
        <h1>Page not found</h1>
        <p className="lead">
          The page you are looking for is not available. Head back home or
          explore the services page.
        </p>
        <div className="actions">
          <Button asChild>
            <Link href="/">Go home</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/services">View services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
