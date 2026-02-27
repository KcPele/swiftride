import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import JsonLd from "@/components/shared/JsonLd";

const siteUrl = "https://www.swiftpickup.com.ng";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Swift Pickup & Logistics",
    template: "%s | Swift Pickup & Logistics",
  },
  description:
    "Your Ride, Reimagined. Fast, safe, and reliable ride-sharing and logistics in Minna, Niger State.",
  keywords: [
    "Swift Pickup",
    "ride-hailing",
    "logistics",
    "Minna",
    "Niger State",
    "delivery",
    "transportation",
    "ride sharing Nigeria",
    "package delivery Minna",
    "car rental Niger State",
  ],
  authors: [{ name: "Swift Pickup & Logistics" }],
  creator: "Swift Pickup & Logistics",
  publisher: "Swift Pickup & Logistics",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    siteName: "Swift Pickup & Logistics",
    title: "Swift Pickup & Logistics",
    description:
      "Your Ride, Reimagined. Fast, safe, and reliable ride-sharing and logistics in Minna, Niger State.",
    images: [
      {
        url: "/icon.png",
        width: 350,
        height: 338,
        alt: "Swift Pickup & Logistics Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Swift Pickup & Logistics",
    description:
      "Your Ride, Reimagined. Fast, safe, and reliable ride-sharing and logistics in Minna, Niger State.",
    images: ["/icon.png"],
    creator: "@swiftpickupng",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <JsonLd />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
