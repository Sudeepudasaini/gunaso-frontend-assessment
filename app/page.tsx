
"use client";

import React from "react";
import { Button } from "@carbon/react";
import { useTranslation } from "react-i18next";
import Hero from "./components/Hero";
import Stats from "./components/Stats";

export default function HomePage() {
  const { t } = useTranslation("common");
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <main className="min-h-screen flex flex-col has-mobile-footer">
      <Hero />

      <section className="px-6 pt-4 pb-2">
        <h1 className="text-xl font-semibold">{t("welcome")}</h1>
        <p className="mt-1">{t("description")}</p>
        <Button kind="primary" className="green-button mt-3">
          {t("submit")}
        </Button>
      </section>

      <Stats />
      <div className="flex-1" />
      
    </main>
  );
}
