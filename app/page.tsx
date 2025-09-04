
"use client";

import { Button } from "@carbon/react";
import ModeToggle from "./components/mode-toggle";

export default function HomePage() {
  return (
    <main style={{ padding: "2rem" }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "1rem"
      }}>
        <h1>Gunaso System Setup</h1>
        <ModeToggle />
      </div>

      <p>This is my F0 setup page demonstrating theming.</p>

      <Button kind="primary" className="green-button" style={{ marginTop: "1rem" }}>
        Carbon Button Test
      </Button>
    </main>
  );
}
