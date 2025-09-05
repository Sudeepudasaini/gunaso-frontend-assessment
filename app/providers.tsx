"use client";

import { ThemeProvider } from "./components/theme-provider";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import LanguageSwitcher from "./components/language-switcher";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <LanguageSwitcher />
        {children}
      </ThemeProvider>
    </I18nextProvider>
  );
}
