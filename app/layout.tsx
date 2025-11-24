
import "@carbon/styles/css/styles.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientProviders from "./providers";

import Header from "@/app/components/Header";
import FooterNav from "@/app/components/FooterNav";
import LanguageSwitcher from "@/app/components/language-switcher";
import ModeToggle from "@/app/components/mode-toggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gunaso System",
  description: "F0 setup with theming",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientProviders>
         
          <div className="utility-bar">
            <div className="utility-inner">
              <div><LanguageSwitcher /></div>
              <div><ModeToggle /></div>
            </div>
          </div>

          
          <Header />

          {children}

          <FooterNav />
        </ClientProviders>
      </body>
    </html>
  );
}

