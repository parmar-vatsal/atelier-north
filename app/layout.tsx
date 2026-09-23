import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Atelier North — Architectural Interior Styling",
    default: "Atelier North — Architectural Interior Styling & Spatial Curation",
  },
  description:
    "Atelier North is an architectural interior styling consultancy crafting restrained, emotive spaces grounded in organic materials, daylight modulation, and enduring artisanal craft.",
  keywords: [
    "interior styling",
    "architectural interiors",
    "bespoke furniture",
    "residential design",
    "hospitality interior design",
    "minimalist architecture",
    "material curation"
  ],
  authors: [{ name: "Atelier North Studio" }],
  openGraph: {
    title: "Atelier North — Architectural Interior Styling",
    description:
      "Crafting restrained, emotive spaces grounded in organic materials, daylight modulation, and artisanal craft.",
    type: "website",
    locale: "en_US",
    siteName: "Atelier North"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF8F5] text-[#1C1C1A]">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
