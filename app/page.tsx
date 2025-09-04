
"use client";

import { Button } from "@carbon/react";

export default function HomePage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Gunaso System Setup</h1>
      <p>This is my F0 setup page demonstrating Carbon theming.</p>

     
     <Button kind="primary" className="green-button" style={{ marginTop: "1rem" }}>
        Carbon Button Test
      </Button>

    </main>
  );
}
