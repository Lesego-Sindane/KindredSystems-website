import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kindredsystems.co.za"),
  title: "Kindred Systems | Business Growth Systems for South African Service Businesses",
  description:
    "Kindred Systems helps service businesses capture more enquiries, respond faster, simplify bookings, and convert more conversations into paying customers.",
  openGraph: {
    title: "Kindred Systems",
    description:
      "Premium growth systems for businesses that cannot afford missed enquiries.",
    url: "https://kindredsystems.co.za",
    siteName: "Kindred Systems",
    images: [
      {
        url: "/images/kindred-growth-system.png",
        width: 1200,
        height: 900,
        alt: "Kindred Systems business growth visual"
      }
    ],
    locale: "en_ZA",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en-ZA">
      <body>{children}</body>
    </html>
  );
}
