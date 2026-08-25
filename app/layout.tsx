import type { Metadata, Viewport } from "next";
import { Anton, Fraunces, Inter_Tight } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter-tight",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_GINHAWA_URL ?? "https://ginhawa.gutguard.ph"),
  title: "GutGuard Ginhawa",
  description: "Free medical check-up at Gutguard.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0608A9",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${interTight.variable} ${anton.variable}`} suppressHydrationWarning>
      <body className="gg-surface" suppressHydrationWarning>{children}</body>
    </html>
  );
}
