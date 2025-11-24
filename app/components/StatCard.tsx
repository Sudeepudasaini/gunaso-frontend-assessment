
"use client";
import * as React from "react";

export default function StatCard({
  label,
  value,
  loading,
  error,
}: {
  label: string;
  value: number;
  loading: boolean;
  error?: string | null;
}) {
  return (
    <div className="stat-box" role="status" aria-live="polite">
      {loading ? (
        <div className="skeleton" />
      ) : error ? (
        <div className="text-red-600 text-sm">{error}</div>
      ) : (
        <>
          <div className="stat-value">{value}</div>
          <div className="stat-label">{label}</div>
        </>
      )}
    </div>
  );
}
