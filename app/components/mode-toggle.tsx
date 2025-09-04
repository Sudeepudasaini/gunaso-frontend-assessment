"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export default function ModeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const current = theme === "system" ? systemTheme : theme;

  return (
    <div style={{ display: "inline-flex", gap: "0.5rem", alignItems: "center" }}>
      <button
        onClick={() => setTheme("light")}
        aria-pressed={current === "light"}
        style={{
          padding: "0.5rem 0.75rem",
          border: "1px solid #ddd",
          borderRadius: 8,
          background: current === "light" ? "#f5f5f5" : "transparent",
          cursor: "pointer"
        }}
      >
        Light
      </button>
      <button
        onClick={() => setTheme("dark")}
        aria-pressed={current === "dark"}
        style={{
          padding: "0.5rem 0.75rem",
          border: "1px solid #ddd",
          borderRadius: 8,
          background: current === "dark" ? "#222" : "transparent",
          color: current === "dark" ? "#fff" : "inherit",
          cursor: "pointer"
        }}
      >
        Dark
      </button>
      <button
        onClick={() => setTheme("system")}
        aria-pressed={theme === "system"}
        style={{
          padding: "0.5rem 0.75rem",
          border: "1px solid #ddd",
          borderRadius: 8,
          background: theme === "system" ? "#eaeaea" : "transparent",
          cursor: "pointer"
        }}
      >
        System
      </button>
    </div>
  );
}
