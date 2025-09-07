
// "use client";

// const items = [
//   { label: "Home" },
//   { label: "My Grievances" },
//   { label: "Submit Grievances" },
//   { label: "Notifications" },
// ];

// export default function FooterNav() {
//   return (
//     <nav className="footer-bar">
//       <div className="footer-inner">
//         {items.map(it => (
//           <a key={it.label} href="#" className="footer-item">
//             <i className="tri" aria-hidden />
//             <span>{it.label}</span>
//           </a>
//         ))}
//       </div>
//     </nav>
//   );
// }


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
