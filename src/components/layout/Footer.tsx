/* eslint-disable @next/next/no-img-element */

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Process", href: "#process" },
  { label: "Gallery", href: "#gallery" },
  { label: "Team", href: "#team" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  { label: "Fire & Smoke Damage", href: "#services" },
  { label: "Water Damage", href: "#services" },
  { label: "Storm Damage", href: "#services" },
  { label: "Mold Remediation", href: "#services" },
  { label: "Commercial Disaster", href: "#services" },
  { label: "Greenlight Program", href: "#services" },
  { label: "Residential Emergency", href: "#services" },
  { label: "Contents Cleaning", href: "#services" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/RestorationConstructionTeam/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="rct-footer">
      <div className="rct-footer-main">
        {/* Brand Column */}
        <div className="rct-footer-brand">
          <a href="#home" className="rct-footer-logo">
            <img
              src="/images/rct-logo-full.png"
              alt="RCT - Restoration Construction Team - Disaster Recovery"
            />
          </a>
          <p>
            Tampa-based disaster recovery and restoration support for Florida
            homes, businesses, and emergency response needs since 1989.
          </p>
          <div className="rct-footer-social">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                title={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="rct-footer-col">
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="rct-footer-col">
          <h4>Our Services</h4>
          <ul>
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="rct-footer-col">
          <h4>Contact Us</h4>
          <ul className="rct-footer-contact">
            <li>
              <strong>Emergency:</strong>
              <a href="tel:18668275277">1-866-827-5277</a>
            </li>
            <li>
              <strong>Office:</strong>
              <a href="tel:18138725959">1-813-872-5959</a>
            </li>
            <li>
              <strong>Email:</strong>
              <a href="mailto:info@rct24.com">info@rct24.com</a>
            </li>
            <li>
              <strong>Address:</strong>
              <span>310 E Harrison St Tampa, FL 33602</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="rct-footer-bottom">
        <p className="rct-footer-meta">
          CGC153880 | Copyright @ 2026 Restoration Construction Team, All Right
          Reserved
        </p>
        <p className="rct-footer-dev">
          Developed by{" "}
          <a
            href="https://www.bshsolutionss.com/"
            target="_blank"
            rel="noreferrer"
          >
            BSH Solutions
          </a>
        </p>
      </div>
    </footer>
  );
}
