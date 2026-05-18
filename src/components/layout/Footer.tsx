/* eslint-disable @next/next/no-img-element */

export function Footer() {
  return (
    <footer className="rct-footer">
      <div>
        <div className="rct-footer-brand">
          <a href="#home" className="rct-footer-logo">
            <img
              src="/images/rct-logo-full.png"
              alt="RCT - Restoration Construction Team - Disaster Recovery"
            />
          </a>
          <p>
            Tampa-based disaster recovery and restoration support for Florida
            homes, businesses, and emergency response needs.
          </p>
        </div>
        <div className="rct-footer-links">
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
