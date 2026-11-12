import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import localFont from "next/font/local";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollFx } from "@/components/layout/ScrollFx";
import { ToastProvider } from "@/components/ui/Toast";
import { buildSiteMetadata } from "@/lib/seo";

import "./globals.css";

// Editorial redesign: Bricolage Grotesque carries display/headline type,
// Instrument Sans is the body face. Both are exposed as CSS variables that
// globals.css consumes (--font-display / --font-body). JetBrains Mono stays
// bundled locally for code and editorial index labels.
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  preload: true,
});

const body = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});

const mono = localFont({
  src: "./fonts/JetBrainsMono-Variable.ttf",
  weight: "100 800",
  variable: "--font-mono",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = buildSiteMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body
        className={`${body.className} min-h-full bg-[var(--bg)] text-[var(--ink)]`}
      >
        <ToastProvider>
          <div id="top" className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <ScrollFx />
        </ToastProvider>
      </body>
    </html>
  );
}
