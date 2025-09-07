"use client";

import * as React from "react";
import { useParams, useRouter } from "next/navigation";
import { Button, TextInput, TextArea } from "@carbon/react";
import Link from "next/link";

export default function TicketDetail() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [data, setData] = React.useState<any>(null);
  const [comment, setComment] = React.useState("");

  React.useEffect(() => {
    (async () => {
      const res = await fetch(`/api/grievances/${id}`);
      if (res.ok) setData(await res.json());
    })();
  }, [id]);

  if (!data) return null;

  return (
    <main className="min-h-screen has-mobile-footer" style={{ padding: "1rem 1rem 6rem" }}>
      <button className="mb-2" onClick={() => router.back()} aria-label="Back">◀ Back</button>
      <h2 className="text-lg font-semibold mb-4">Ticket Details</h2>

      <div className="grid gap-3">
        <TextInput id="tid" labelText="Ticket ID" value={String(data.id).padStart(4, "0")} readOnly />
        <TextInput id="status" labelText="Status" value={data.status} readOnly />
        <TextInput id="sdate" labelText="Submitted Date" value={new Date(data.createdAt).toLocaleDateString()} readOnly />
        <TextInput id="cat" labelText="Category" value={data.category} readOnly />
        <TextArea id="griev" labelText="Grievance" value={data.description} readOnly />
      </div>

      <div style={{ marginTop: 16 }}>
        <TextInput id="comment" labelText="Add Comment" placeholder="Comment here..."
          value={comment} onChange={(e: any) => setComment(e.target.value)} />
        <div style={{ marginTop: 8 }}>
          <Button size="sm" onClick={() => { setComment(""); alert("Comment submitted!"); }}>
            Submit comment
          </Button>
        </div>
      </div>

      <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
        <Button kind="secondary" onClick={() => window.print()}>Share / Save Ticket</Button>
        <Link href="/"><Button kind="tertiary">Return Home</Button></Link>
      </div>
    </main>
  );
}
