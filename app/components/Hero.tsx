
"use client";
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
          <button className="hero-btn">{t("submit") || "Submit Grievance"}</button>
          <button className="hero-btn hero-btn--secondary">My Grievances</button>
        </div>
      </div>
    </section>
  );
}
