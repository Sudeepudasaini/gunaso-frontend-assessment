
"use client";
import Link from "next/link";

const items = [
  { label: "Home", href: "/" },
  { label: "My Grievances", href: "/my-grievances" },
  { label: "Submit Grievances", href: "/submit" },
  { label: "Notifications", href: "/notifications" },
];

export default function FooterNav() {
  return (
    <nav className="footer-bar" aria-label="Bottom navigation">
      <div className="footer-inner">
        {items.map(it => (
          <Link key={it.label} href={it.href} className="footer-item">
            <i className="tri" aria-hidden />
            <span>{it.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
