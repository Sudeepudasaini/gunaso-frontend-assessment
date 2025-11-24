
"use client";

import * as React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button, TextArea, TextInput } from "@carbon/react";

export default function SavedTicketPage() {
  const search = useSearchParams();
  const ticket = search.get("ticket");        // <-- id from query, e.g. ?ticket=58
  const router = useRouter();
  const [data, setData] = React.useState<any>(null);

  React.useEffect(() => {
    if (!ticket) return;
    (async () => {
      const res = await fetch(`/api/grievances/id?ticket=${encodeURIComponent(ticket)}`);
      if (res.ok) setData(await res.json());
    })();
  }, [ticket]);

  if (!ticket) return null;
  if (!data) return null;

  return (
    <main className="min-h-screen has-mobile-footer" style={{ padding: "1rem 1rem 6rem" }}>
      <h2 className="text-lg font-semibold mb-4">Grievances Submitted!!</h2>

      <div className="grid gap-3">
        <TextInput id="tid" labelText="Ticket ID" value={String(data.id).padStart(4, "0")} readOnly />
        <TextInput id="sdate" labelText="Submitted Date" value={new Date(data.createdAt).toLocaleDateString()} readOnly />
        <TextInput id="cat" labelText="Category" value={data.category} readOnly />
        <TextArea id="gdesc" labelText="Grievance" value={data.description} readOnly />
      </div>

      <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
        <Button kind="secondary" onClick={() => window.print()}>Share / Save Ticket</Button>
        <Button kind="tertiary" onClick={() => router.push("/")}>Return Home</Button>
      </div>
    </main>
  );
}

