"use client";

import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("lang");
    if (saved && saved !== i18n.language) {
      i18n.changeLanguage(saved).catch(() => {});
      document.documentElement.lang = saved;
    }
  }, [i18n]);

  const changeLang = (lng: string) => {
    i18n.changeLanguage(lng).catch(() => {});
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", lng);
      document.documentElement.lang = lng;
    }
  };

  return (
    <div style={{ textAlign: "right", padding: "1rem" }}>
      <button className="lang-btn" onClick={() => changeLang("en")}>
        EN
      </button>
      <button className="lang-btn" onClick={() => changeLang("np")}>
        NP
      </button>
    </div>
  );
}
