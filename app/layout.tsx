import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: site.siteTitle,
  description: site.metaDescription,
  openGraph: {
    title: site.siteTitle,
    description: site.metaDescription,
    url: site.siteUrl,
    siteName: site.name,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: site.siteTitle }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.siteTitle,
    description: site.metaDescription,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
