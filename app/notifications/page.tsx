
"use client";

import * as React from "react";
import { Button } from "@carbon/react";
import Link from "next/link";

const MOCK = [
  { id: 1, text: "Your report status has been updated. Check that out", ref: 56 },
  { id: 2, text: "Your grievance has been submitted. Check that out", ref: 57 },
  { id: 3, text: "Your report status has been updated. Check that out", ref: 57 },
];

export default function NotificationsPage() {
 
  let items = MOCK;
  try {
    const saved = JSON.parse(localStorage.getItem("notifications") || "[]");
    if (Array.isArray(saved) && saved.length) {
      
      items = [...saved, ...MOCK];
    }
  } catch {}

  return (
    <main className="min-h-screen has-mobile-footer" style={{ padding: "1rem 1rem 6rem" }}>
      <button className="mb-2" onClick={() => history.back()} aria-label="Back">◀ Back</button>

      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
        <h2 className="text-lg font-semibold" style={{ margin: 0 }}>Notifications</h2>
        <span style={{ marginLeft: "auto" }}>▲ Filter</span>
        <button aria-label="Mark all as read" className="hero-btn hero-btn--secondary">Mark all as read</button>
      </div>

      <div className="grid gap-2">
        {items.map(n => (
          <div key={n.id} style={{ background: "#D9D9D9", padding: 10, borderRadius: 6, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span>{n.text}</span>
           
            <Link href={`/my-grievances/id?ticket=${encodeURIComponent(String(n.ref))}`}>
              <Button kind="secondary" size="sm">View Details</Button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
