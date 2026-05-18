/* eslint-disable @next/next/no-img-element */

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
  return (
    <div className="rct-page">
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

      <section id="services" className="rct-section">
        <div className="rct-section-heading">
          <span className="rct-label">Services / Products</span>
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
      </section>

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

      <section id="contact" className="rct-section rct-contact">
        <div className="rct-contact-copy">
          <span className="rct-label">Contact / Footer</span>
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
