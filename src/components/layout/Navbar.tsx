"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#process", label: "Process" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#team", label: "Team" },
    { href: "#gallery", label: "Gallery" },
    { href: "#faqs", label: "FAQs" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="rct-nav" aria-label="Primary navigation">
      <a href="#home" className="rct-brand" aria-label="RCT24 home">
        <img
          src="/images/rct-logo-full.png"
          alt="RCT - Restoration Construction Team - Disaster Recovery"
        />
      </a>

      {/* Desktop Links */}
      <div className="rct-nav-links">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>

      <div className="rct-nav-right">
        <a className="rct-nav-phone" href="tel:18668275277">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          1-866-827-5277
        </a>
        <a className="rct-nav-call" href="#services">
          Services
        </a>

        {/* Hamburger Menu Toggle */}
        <button
          className={`rct-hamburger-btn${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`rct-mobile-panel${menuOpen ? " open" : ""}`}>
        <div className="rct-mobile-panel-links">
          {links.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              style={{ transitionDelay: menuOpen ? `${idx * 0.05}s` : "0s" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            className="rct-mobile-panel-phone"
            href="tel:18668275277"
            onClick={() => setMenuOpen(false)}
          >
            📞 Emergency: 1-866-827-5277
          </a>
        </div>
      </div>
    </nav>
  );
}
