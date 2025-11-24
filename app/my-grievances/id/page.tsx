
"use client";

import * as React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button, TextArea, TextInput } from "@carbon/react";

export default function TicketDetailsPage() {
  const search = useSearchParams();
  const ticket = search.get("ticket"); // e.g. ?ticket=58
  const router = useRouter();

  const [data, setData] = React.useState<any>(null);
  const [comment, setComment] = React.useState("");

  React.useEffect(() => {
    if (!ticket) return;
    (async () => {
      const res = await fetch(`/api/grievances/id?ticket=${encodeURIComponent(ticket)}`);
      if (res.ok) setData(await res.json());
    })();
  }, [ticket]);

  if (!ticket || !data) return null;

  return (
    <main className="min-h-screen has-mobile-footer" style={{ padding: "1rem 1rem 6rem" }}>
      <button className="link back" onClick={() => router.back()} aria-label="Back">◀ Back</button>
      <h2 className="text-lg font-semibold mb-4">Ticket Details</h2>

      <div className="grid gap-3">
        <TextInput id="tid" labelText="Ticket ID" value={String(data.id).padStart(4, "0")} readOnly />
        <TextInput id="status" labelText="Status" value={data.status} readOnly />
        <TextInput id="sdate" labelText="Submitted Date" value={new Date(data.createdAt).toLocaleDateString()} readOnly />
        <TextInput id="cat" labelText="Category" value={data.category} readOnly />
        <TextArea id="gdesc" labelText="Grievance" value={data.description} readOnly />
      </div>

      <div className="grid gap-2" style={{ marginTop: 12 }}>
        <TextInput
          id="comment"
          labelText="Add Comment"
          placeholder="Comment Here……"
          value={comment}
          onChange={(e: any) => setComment(e.target.value)}
        />
        <Button kind="secondary" size="sm" onClick={() => {/* mock submit */}}>
          Submit comment
        </Button>
      </div>

      <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
        <Button kind="secondary" onClick={() => window.print()}>Share / Save Ticket</Button>
        <Button kind="tertiary" onClick={() => router.push("/")}>Return Home</Button>
      </div>
    </main>
  );
}
