/* eslint-disable @next/next/no-img-element */

export function Navbar() {
  return (
    <nav className="rct-nav" aria-label="Primary navigation">
      <a href="#home" className="rct-brand" aria-label="RCT24 home">
        <span>
          <img
            src="https://rct24.com/wp-content/uploads/2024/08/24-removebg-preview-1.png"
            alt="RCT24 logo"
          />
        </span>
        <strong>
          RCT24
          <small>Restoration Construction Team</small>
        </strong>
      </a>
      <div className="rct-nav-links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#why">Why RCT</a>
        <a href="#contact">Contact</a>
      </div>
      <a className="rct-nav-call" href="tel:18668275277">
        24/7: 1-866-827-5277
      </a>
    </nav>
  );
}
