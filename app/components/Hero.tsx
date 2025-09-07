
"use client";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation("common");
  return (
    <section className="hero-band">
      <div className="hero-inner">
        <p className="hero-small">Welcome Text</p>
        <p className="hero-title">“तपाईंको समस्या हामीले समाधान गर्नेछौं”</p>
        <div className="hero-actions">
          <Link href="/submit" className="hero-btn">{t("submit") || "Submit Grievance"}</Link>
          <Link href="/my-grievances" className="hero-btn hero-btn--secondary">My Grievances</Link>
        </div>
      </div>
    </section>
  );
}
