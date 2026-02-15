
"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const getStyle = (active: boolean) => ({
    padding: "0.5rem 0.75rem",
    border: "1px solid #ddd",
    borderRadius: 8,
    cursor: "pointer",
    background: active ? "#0070f3" : "transparent", 
    color: active ? "#fff" : "inherit",
    fontWeight: active ? "bold" : "normal",
    transition: "all 0.2s ease"
  });

  return (
    <div style={{ display: "inline-flex", gap: "0.5rem", alignItems: "center" }}>
      <button
        onClick={() => setTheme("light")}
        aria-pressed={theme === "light"}
        style={getStyle(theme === "light")}
      >
        Light
      </button>
      <button
        onClick={() => setTheme("dark")}
        aria-pressed={theme === "dark"}
        style={getStyle(theme === "dark")}
      >
        Dark
      </button>
    </div>
  );
}
