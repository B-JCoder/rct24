import { ContactForm } from "@/components/sections/ContactForm";

export function ContactPage() {
  return (
    <section className="section">
      <div className="container contact-grid">
        <div className="stack">
          <span className="eyebrow">Contact</span>
          <h1>Tell us what you want to build.</h1>
          <p className="lead">
            Share a few details and we will respond with a clear next step.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
