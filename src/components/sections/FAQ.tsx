import { faqs } from "@/data/faqs";

export function FAQ() {
  return (
    <section className="section">
      <div className="container narrow stack">
        <div className="section-heading">
          <span className="eyebrow">FAQ</span>
          <h2>Common questions before we begin.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
