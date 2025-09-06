
"use client";
import * as React from "react";
import StatCard from "./StatCard";

export default function Stats() {
  const [loading, setLoading] = React.useState(true);
  const [error] = React.useState<string | null>(null);
  const data = { submitted: 500, resolved: 300, pending: 100, escalated: 20 };

  React.useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="stats-wrap">
      <div className="stats-grid">
        <StatCard label="Gunaso submitted" value={data.submitted} loading={loading} error={error} />
        <StatCard label="Resolved" value={data.resolved} loading={loading} error={error} />
        <StatCard label="Pending" value={data.pending} loading={loading} error={error} />
        <StatCard label="Escalated" value={data.escalated} loading={loading} error={error} />
      </div>
    </section>
  );
}
