
"use client";

import React from "react";
import { Button } from "@carbon/react";
import ModeToggle from "./components/mode-toggle";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation("common");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; 

  return (
    <main style={{ padding: "2rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <h1>{t("welcome")}</h1>
        <ModeToggle />
      </div>

      <p>{t("description")}</p>

      <Button kind="primary" className="green-button" style={{ marginTop: "1rem" }}>
        {t("submit")}
      </Button>
    </main>
  );
}


