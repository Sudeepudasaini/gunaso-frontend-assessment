
"use client";

import * as React from "react";
import { Button, Tag } from "@carbon/react";
import Link from "next/link";

export default function MyGrievances() {
  const [items, setItems] = React.useState<any[]>([]);

  React.useEffect(() => {
    (async () => {
      const res = await fetch("/api/grievances");
      setItems(await res.json());
    })();
  }, []);

  return (
    <main className="min-h-screen has-mobile-footer" style={{ padding: "1rem 1rem 6rem" }}>
      <h2 className="text-lg font-semibold mb-4">My Grievances</h2>
      <p className="mb-2">Ticket List</p>

      <div className="grid gap-2" role="list">
        {items.map((g) => (
          <div
            key={g.id}
            role="listitem"
            style={{
              background: "#D9D9D9",
              padding: 10,
              borderRadius: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
              <span>Ticket no : {String(g.id).padStart(4, "0")}</span>
              <span> Status : {g.status}</span>
              {g.status === "Resolved" && <Tag type="green">Resolved</Tag>}
              {g.status === "Pending" && <Tag type="gray">Pending</Tag>}
              {g.status === "Closed" && <Tag type="red">Closed</Tag>}
            </div>

            {/* Updated href only */}
            <Link href={`/my-grievances/id?ticket=${g.id}`}>
              <Button kind="secondary" size="sm">View Details</Button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
