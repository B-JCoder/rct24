/* eslint-disable @next/next/no-img-element */

export function Footer() {
  return (
    <footer className="rct-footer">
      <div>
        <div className="rct-footer-brand">
          <a href="#home" className="rct-footer-logo">
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
          <p>
            Tampa-based disaster recovery and restoration support for Florida
            homes, businesses, and emergency response needs.
          </p>
        </div>
        <div className="rct-footer-links">
          <a href="https://rct24.com/">Original Website</a>
          <a href="https://rct24.com/contact-us/">Contact Us</a>
          <a
            href="https://www.facebook.com/RestorationConstructionTeam/"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.facebook.com/RestorationConstructionTeam/"
            target="_blank"
            rel="noreferrer"
          >
            Youtube
          </a>
        </div>
      </div>
      <p className="rct-footer-meta">
        CGC153880 | Copyright @ 2024 Restoration Construction Team, All Right Reserved
      </p>
    </footer>
  );
}
