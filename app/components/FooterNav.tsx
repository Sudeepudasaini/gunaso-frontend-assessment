
"use client";

const items = [
  { label: "Home" },
  { label: "My Grievances" },
  { label: "Submit Grievances" },
  { label: "Notifications" },
];

export default function FooterNav() {
  return (
    <nav className="footer-bar">
      <div className="footer-inner">
        {items.map(it => (
          <a key={it.label} href="#" className="footer-item">
            <i className="tri" aria-hidden />
            <span>{it.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
