import type { Metadata } from "next";
import { Anton, DM_Sans, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";
import "./globals.css";
import "./home.css";

const display = Anton({
  subsets: ["latin", "vietnamese"],
  weight: "400",
  variable: "--font-display",
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin", "vietnamese"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Quyen Nguyen | Portfolio",
    template: "%s | Quyen Nguyen",
  },
  description:
    "The portfolio of Quyen Nguyen, a research and strategy professional transitioning into product management.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <div className="site-shell">
          <Navigation />
          <main className="page-container">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
