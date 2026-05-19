/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

const services = [
  {
    title: "Fire & Smoke Damage",
    image: "https://rct24.com/wp-content/uploads/2024/08/fire-1024x724.jpg",
    text: "The effects of fire damage will often be serious. RCT dispatches professionals to begin the entire restoration process.",
  },
  {
    title: "Flood & Water Damage",
    image: "https://rct24.com/wp-content/uploads/2024/08/flood-1024x768.jpg",
    text: "If flooding or water damage follows a storm or disaster, RCT can send disaster response crews now.",
  },
  {
    title: "Wind / Storm Damage",
    image: "https://rct24.com/wp-content/uploads/2024/08/1621241649_59120_url-1024x575.jpeg",
    text: "Hurricanes, tornados, tropical storms, and extreme Florida weather can leave a wake of damage in their paths.",
  },
  {
    title: "Residential Emergency",
    image: "https://rct24.com/wp-content/uploads/2024/10/Family-in-front-of-Home-scaled-1.jpg",
    text: "In emergencies, RCT is ready to act quickly and professionally to repair damage to your home or office.",
  },
  {
    title: "Commercial Disaster",
    image: "https://rct24.com/wp-content/uploads/2024/08/4.jpg",
    text: "RCT provides drying, document restoration, electronics restoration, communications, and reporting support.",
  },
  {
    title: "Mold Remediation",
    image: "https://rct24.com/wp-content/uploads/2024/08/123.jpeg",
    text: "Mold remediation reduces mold, cleans and treats affected areas, and helps prevent spreading.",
  },
];

const stats = [
  ["1989", "Serving Florida from Tampa corporate offices"],
  ["24/7", "Reliable year-round emergency service"],
  ["70+", "Combined management years in restoration"],
  ["IICRC", "Certified technicians and project managers"],
];

const processSteps = [
  {
    step: "01",
    title: "Emergency Response",
    desc: "RCT responds 24/7 with trained professionals who assess damage and begin immediate mitigation to prevent further loss.",
  },
  {
    step: "02",
    title: "Contents & Cleaning",
    desc: "Virtually every project has affected contents that need cleaning and restoration. RCT restores even the most difficult items.",
  },
  {
    step: "03",
    title: "Restoration & Rebuild",
    desc: "Any disaster may require a rebuild, temporary roofing, board-up, or expansion. RCT's full-service structural division has the expertise.",
  },
  {
    step: "04",
    title: "Pre-Plan (Greenlight)",
    desc: "RCT will work with you to develop a pre-disaster plan specific to your business needs through our GREENLIGHT program.",
  },
];

const testimonials = [
  {
    name: "Michael Thompson",
    role: "Homeowner, Tampa",
    text: "After a devastating fire, RCT was there within hours. Their team handled everything from start to finish — from emergency mitigation to full reconstruction. They truly restored our lives.",
    rating: 5,
    photo: "/images/michael-thompson.png",
  },
  {
    name: "Sarah Mitchell",
    role: "Property Manager, Orlando",
    text: "We've used RCT for multiple commercial properties. Their GREENLIGHT pre-plan saved us thousands when Hurricane season hit. Professional, reliable, and truly caring.",
    rating: 5,
    photo: "/images/sarah-mitchell.png",
  },
  {
    name: "James Rodriguez",
    role: "Business Owner, St. Petersburg",
    text: "When flooding damaged our warehouse, RCT dispatched crews immediately. They worked around the clock to get us operational again. Outstanding service and communication throughout.",
    rating: 5,
    photo: "/images/james-rodriguez.png",
  },
  {
    name: "Linda Garcia",
    role: "Homeowner, Clearwater",
    text: "Mold was spreading in our home and we were terrified. RCT's team was compassionate and thorough. They remediated everything and made our home safe again. Highly recommend!",
    rating: 5,
    photo: "/images/linda-garcia.png",
  },
];

const teamMembers = [
  {
    name: "Timothy D. Lentz",
    role: "Environmental Consultant – PG, LAC",
    desc: "Professional Geologist and Licensed Asbestos Consultant with over 28 years of experience in environmental consulting.",
    initials: "TL",
  },
  {
    name: "Geoffrey Stebbins",
    role: "Project Manager / Superintendent",
    desc: "Led construction teams on commercial projects. Extensive experience in planning, directing, and coordinating construction activities.",
    initials: "GS",
  },
  {
    name: "Dennis K. Phiefer",
    role: "Construction Manager / Qualifier",
    desc: "Over 35 years in construction including commercial and multi-family projects. CGC1537352 licensed. US Air Force veteran.",
    initials: "DP",
  },
  {
    name: "Robert H. Haag",
    role: "Construction Manager / Consultant",
    desc: "Expertise in commercial, industrial, processing, distribution, and high-rise project management.",
    initials: "RH",
  },
  {
    name: "Nickolas Alfonso",
    role: "Marketing Rep / Project Manager",
    desc: "Over 15 years in construction industry including managing budgets, supervising contractors, and estimating.",
    initials: "NA",
  },
  {
    name: "Sergio Augular S.",
    role: "Water & Mold Remediation Expert",
    desc: "IICRC Certified in Water and Mold damage restoration. Works with insurance providers for full restoration.",
    initials: "SA",
  },
];

const faqs = [
  {
    q: "What should I do immediately after a fire or flood?",
    a: "Contact RCT immediately at 1-866-827-5277. Our 24/7 emergency team will be dispatched to assess the damage and begin mitigation to prevent further loss. Do not enter the property until it's been deemed safe by professionals.",
  },
  {
    q: "Does RCT work with insurance companies?",
    a: "Yes. RCT has extensive experience working with all major insurance companies. We assist with documentation, estimating, and the claims process to help ensure a smooth restoration experience.",
  },
  {
    q: "How quickly can RCT respond to an emergency?",
    a: "RCT provides 24/7 emergency response. Our trained crews can be on-site quickly, depending on your location in Florida. We prioritize rapid response to minimize further damage to your property.",
  },
  {
    q: "What is the GREENLIGHT Pre-Plan program?",
    a: "GREENLIGHT is RCT's pre-disaster planning program. We work with businesses to identify mission-critical needs and priorities in advance, so immediate response measures can focus on restarting operations after a disaster.",
  },
  {
    q: "What areas does RCT serve?",
    a: "RCT serves all of Florida from our corporate offices in Tampa. We have been providing disaster recovery and restoration services throughout the state since 1989.",
  },
  {
    q: "Is RCT licensed and certified?",
    a: "Yes. RCT holds CGC153880 General Contractor license. All of our Technicians and Project Managers are certified with the IICRC in Water Damage Restoration and Fire & Smoke Damage Restoration.",
  },
];

const galleryImages = [
  { src: "https://rct24.com/wp-content/uploads/2024/08/fire-1024x724.jpg", title: "Fire Damage Restoration" },
  { src: "https://rct24.com/wp-content/uploads/2024/08/flood-1024x768.jpg", title: "Flood Recovery" },
  { src: "https://rct24.com/wp-content/uploads/2024/08/1621241649_59120_url-1024x575.jpeg", title: "Storm Damage Repair" },
  { src: "https://rct24.com/wp-content/uploads/2024/08/4.jpg", title: "Commercial Restoration" },
  { src: "https://rct24.com/wp-content/uploads/2024/08/123.jpeg", title: "Mold Remediation" },
  { src: "https://rct24.com/wp-content/uploads/2024/10/Family-in-front-of-Home-scaled-1.jpg", title: "Residential Recovery" },
  { src: "https://rct24.com/wp-content/uploads/2024/08/hose-in-hands-female-firefighter-in-protective-un-2023-11-27-04-53-28-utc-1024x683.jpg", title: "Emergency Response" },
  { src: "https://cdn.pixabay.com/photo/2020/02/02/04/03/tampa-4811962_1280.jpg", title: "Tampa Operations" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/RestorationConstructionTeam/",
  },
  {
    label: "Youtube",
    href: "https://www.facebook.com/RestorationConstructionTeam/",
  },
];

const heroSlides = [
  "https://cdn.pixabay.com/photo/2020/02/02/04/03/tampa-4811962_1280.jpg",
  "https://rct24.com/wp-content/uploads/2024/08/fire-1024x724.jpg",
  "https://rct24.com/wp-content/uploads/2024/08/hose-in-hands-female-firefighter-in-protective-un-2023-11-27-04-53-28-utc-1024x683.jpg",
];

export function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="rct-page">
      {/* ─── Hero ─────────────────────────────────── */}
      <section id="home" className="rct-hero">
        <div className="rct-hero-photos" aria-hidden="true">
          {heroSlides.map((image) => (
            <div
              key={image}
              className="rct-hero-photo"
              style={{
                backgroundImage:
                  `linear-gradient(90deg, rgba(6, 17, 31, 0.15) 0%, rgba(6, 17, 31, 0.35) 40%, rgba(6, 17, 31, 0.85) 65%, rgba(6, 17, 31, 0.95) 100%), url("${image}")`,
              }}
            />
          ))}
        </div>
        <div className="rct-grid-overlay" />
        <div className="rct-hero-inner">
          <div className="rct-hero-copy">
            <div className="rct-hero-glass">
              <span className="rct-kicker">
                <span />
                Tampa, Florida | Since 1989
              </span>
              <h1>Building Trust. Restoring Lifestyle.</h1>
              <p>
                Restoration Construction Team is a full service Disaster Recovery
                and Restoration company with corporate offices in Tampa, serving
                Florida since 1989.
              </p>
            </div>
            <div className="rct-actions">
              <a className="rct-button rct-button-light" href="#contact">
                Start Emergency Response
              </a>
              <a className="rct-button rct-button-glass" href="#services">
                Explore Services
              </a>
            </div>
            <div className="rct-stat-row">
              <div>
                <strong>24/7</strong>
                <span>Everyday response</span>
              </div>
              <div>
                <strong>CGC</strong>
                <span>153880 licensed contractor</span>
              </div>
              <div>
                <strong>A-Z</strong>
                <span>Emergency to reconstruction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Marquee ──────────────────────────────── */}
      <div className="rct-marquee" aria-hidden="true">
        <div>
          <span>Fire & Smoke Damage</span>
          <span>Water Damage</span>
          <span>Storm Damage</span>
          <span>Mold Remediation</span>
          <span>Commercial Disaster</span>
          <span>Greenlight Pre-Plan</span>
          <span>Fire & Smoke Damage</span>
          <span>Water Damage</span>
          <span>Storm Damage</span>
          <span>Mold Remediation</span>
          <span>Commercial Disaster</span>
          <span>Greenlight Pre-Plan</span>
        </div>
      </div>

      {/* ─── About ────────────────────────────────── */}
      <section id="about" className="rct-section">
        <div className="rct-two-column">
          <div>
            <span className="rct-label">Who We Are</span>
            <h2>A leader in Florida restoration since 1989.</h2>
          </div>
          <div className="rct-copy">
            <p>
              Since 1989, Restoration Construction Team has been and continues
              to be a leader in the Restoration Industry. The company goal is to
              deliver exceptional service from start to finish, every single
              time.
            </p>
            <p>
              RCT handles everything from the moment the emergency happens until
              the keys are handed back over to the client and everything in
              between.
            </p>
            <p>
              The team is driven by compassion and remains committed to earning
              the trust of customers one customer at a time.
            </p>
            <a className="rct-button rct-button-light rct-section-cta" href="#contact">
              Get Free Consultation
            </a>
          </div>
        </div>
        <div className="rct-stats">
          {stats.map(([value, label]) => (
            <div className="rct-glass-card" key={value}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Services ─────────────────────────────── */}
      <section id="services" className="rct-section">
        <div className="rct-section-heading">
          <span className="rct-label">Our Services</span>
          <h2>
            Disaster response built for homes, businesses, and critical
            operations.
          </h2>
        </div>
        <div className="rct-services">
          {services.map((service) => (
            <article className="rct-service-card" key={service.title}>
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
        <div className="rct-section-cta-wrap">
          <a className="rct-button rct-button-light rct-section-cta" href="#contact">
            Need Help? Contact Us Now
          </a>
        </div>
      </section>

      {/* ─── Our Process ──────────────────────────── */}
      <section id="process" className="rct-section rct-section-alt">
        <div className="rct-section-heading">
          <span className="rct-label">Our Process</span>
          <h2>How we work for you — from emergency to completion.</h2>
        </div>
        <div className="rct-process-grid">
          {processSteps.map((step) => (
            <div className="rct-process-card" key={step.step}>
              <div className="rct-process-step-num">{step.step}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="rct-section-cta-wrap">
          <a className="rct-button rct-button-light rct-section-cta" href="tel:18668275277">
            📞 Call Now: 1-866-827-5277
          </a>
          <a className="rct-button rct-button-glass rct-section-cta" href="#contact">
            Request a Callback
          </a>
        </div>
      </section>

      {/* ─── Why Choose Us ────────────────────────── */}
      <section id="why" className="rct-section rct-why">
        <div className="rct-greenlight">
          <span className="rct-label">Why Choose Us</span>
          <h2>Greenlight disaster pre-plan.</h2>
          <p>
            Through GREENLIGHT, mission-critical needs and priorities are
            identified in advance so immediate response measures can focus on
            restarting operations.
          </p>
          <ul>
            <li>Dedicated resources that respond 24 hours a day, 7 days a week.</li>
            <li>
              Pre-designed priorities, recovery plans, pre-approved pricing, and
              coordinated vendors.
            </li>
            <li>Priority resources in cases of an area-wide disaster.</li>
          </ul>
          <a className="rct-button rct-button-light rct-section-cta" href="#contact" style={{ marginTop: "1rem" }}>
            Get Your Free Pre-Plan
          </a>
        </div>
        <div className="rct-process">
          <div className="rct-process-lead">
            <span>How RCT Works</span>
            <strong>Emergency. Contents. Restoration. Pre-Plan.</strong>
          </div>
          {["Emergency", "Contents", "Restoration", "Pre-Plan"].map((item) => (
            <div className="rct-glass-card" key={item}>
              <strong>{item}</strong>
              <span>Clear ownership from first call to final handoff.</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Testimonials ─────────────────────────── */}
      <section id="testimonials" className="rct-section rct-section-alt">
        <div className="rct-section-heading rct-center-heading">
          <span className="rct-label">Voices of Survival</span>
          <h2>What our clients say about us.</h2>
        </div>
        <div className="rct-testimonials">
          {testimonials.map((t) => (
            <div className="rct-testimonial-card" key={t.name}>
              <div className="rct-testimonial-stars">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p>&ldquo;{t.text}&rdquo;</p>
              <div className="rct-testimonial-author">
                <img className="rct-testimonial-avatar" src={t.photo} alt={t.name} />
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="rct-section-cta-wrap">
          <a className="rct-button rct-button-light rct-section-cta" href="#contact">
            Share Your Experience
          </a>
        </div>
      </section>

      {/* ─── Our Team ─────────────────────────────── */}
      <section id="team" className="rct-section">
        <div className="rct-section-heading rct-center-heading">
          <span className="rct-label">Guardians of Life</span>
          <h2>Meet our expert team.</h2>
        </div>
        <div className="rct-team-grid">
          {teamMembers.map((member) => (
            <div className="rct-team-card" key={member.name}>
              <div className="rct-team-avatar">{member.initials}</div>
              <h3>{member.name}</h3>
              <span className="rct-team-role">{member.role}</span>
              <p>{member.desc}</p>
            </div>
          ))}
        </div>
        <div className="rct-section-cta-wrap">
          <a className="rct-button rct-button-light rct-section-cta" href="#contact">
            Work With Our Team
          </a>
        </div>
      </section>

      {/* ─── Gallery ──────────────────────────────── */}
      <section id="gallery" className="rct-section rct-section-alt">
        <div className="rct-section-heading rct-center-heading">
          <span className="rct-label">Our Work</span>
          <h2>Project gallery & restorations.</h2>
        </div>
        <div className="rct-gallery-grid">
          {galleryImages.map((img) => (
            <div className="rct-gallery-item" key={img.title}>
              <img src={img.src} alt={img.title} />
              <div className="rct-gallery-overlay">
                <span>{img.title}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="rct-section-cta-wrap">
          <a className="rct-button rct-button-light rct-section-cta" href="#contact">
            Start Your Restoration
          </a>
        </div>
      </section>

      {/* ─── FAQs ─────────────────────────────────── */}
      <section id="faqs" className="rct-section">
        <div className="rct-section-heading rct-center-heading">
          <span className="rct-label">Common Questions</span>
          <h2>Frequently asked questions.</h2>
        </div>
        <div className="rct-faq-list">
          {faqs.map((faq, i) => (
            <div
              className={`rct-faq-item${openFaq === i ? " rct-faq-open" : ""}`}
              key={i}
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
            >
              <div className="rct-faq-question">
                <span>{faq.q}</span>
                <span className="rct-faq-icon">{openFaq === i ? "−" : "+"}</span>
              </div>
              {openFaq === i && (
                <div className="rct-faq-answer">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="rct-section-cta-wrap">
          <a className="rct-button rct-button-light rct-section-cta" href="#contact">
            Have More Questions? Contact Us
          </a>
        </div>
      </section>

      {/* ─── Contact ──────────────────────────────── */}
      <section id="contact" className="rct-section rct-contact">
        <div className="rct-contact-copy">
          <span className="rct-label">Get In Touch</span>
          <h2>Need us? We are always available 24 hours.</h2>
          <p>
            24 hours a day, 7 days a week. RCT is committed to earning the trust
            of customers one customer at a time.
          </p>
          <a href="tel:18668275277">
            <span>Emergency Number</span>
            <strong>1-866-827-5277</strong>
          </a>
          <a href="mailto:info@rct24.com">
            <span>Email</span>
            <strong>info@rct24.com</strong>
          </a>
          <div>
            <span>Location</span>
            <strong>Restoration Construction Team, LLC</strong>
            <p>310 E Harrison St Tampa, FL 33602</p>
          </div>
        </div>
        <form className="rct-form">
          <div className="rct-form-heading">
            <span>Get in touch</span>
            <h3>Tell us what happened and we will point you to the right next step.</h3>
          </div>
          <label>
            <span>Name</span>
            <input placeholder="Your name" required />
          </label>
          <label>
            <span>Email</span>
            <input placeholder="you@example.com" required type="email" />
          </label>
          <label>
            <span>Subject</span>
            <input placeholder="How can we help?" />
          </label>
          <label>
            <span>Message</span>
            <textarea placeholder="Share a few details about the property or project." />
          </label>
          <button type="submit">Submit Now</button>
          <div className="rct-social-links">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </form>
      </section>

      {/* Floating Emergency Call Button */}
      <a
        href="tel:18668275277"
        className="rct-emergency-fab"
        aria-label="Emergency Call"
        title="Call Emergency: 1-866-827-5277"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>
    </div>
  );
}
