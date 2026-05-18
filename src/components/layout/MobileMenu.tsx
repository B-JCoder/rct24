"use client";

import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/data/navigation";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mobile-menu">
      <button
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
        className="menu-button"
        onClick={() => setIsOpen((value) => !value)}
        type="button"
      >
        <span />
        <span />
      </button>
      {isOpen ? (
        <div className="mobile-panel">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
