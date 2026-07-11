import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kindredsystems.co.za"),
  title: "Kindred Systems | Growth Systems for Service Businesses",
  description:
    "Kindred Systems helps South African service businesses turn everyday enquiries into organised growth with calm, reliable systems.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg"
  },
  openGraph: {
    title: "Kindred Systems",
    description:
      "Practical growth systems for barbers, dentists, builders, mechanics, and other service businesses.",
    url: "https://kindredsystems.co.za",
    siteName: "Kindred Systems",
    images: [
      {
        url: "/images/Dentistry%20image.png",
        width: 1200,
        height: 900,
        alt: "Kindred Systems serving a service business with calm, human-centred growth"
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
