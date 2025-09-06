"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import np from "./locales/np.json";

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: { common: en },
        np: { common: np },
      },
      
      lng:
        typeof window !== "undefined" && localStorage.getItem("lang")
          ? (localStorage.getItem("lang") as string)
          : "en",
      fallbackLng: "en",
      ns: ["common"],
      defaultNS: "common",
      interpolation: {
        escapeValue: false,
      },
    })
    .catch((err) => {
    
      console.error("i18n init error:", err);
    });
}

export default i18n;
