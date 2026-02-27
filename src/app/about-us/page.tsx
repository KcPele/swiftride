import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About Us - Our Mission & Vision",
  description:
    "Driving the future of logistics and urban mobility in Nigeria. Learn about our story, mission, and values.",
  openGraph: {
    title: "About Us - Swift Pickup & Logistics",
    description:
      "Driving the future of logistics and urban mobility in Nigeria. Learn about our story, mission, and values.",
  },
  alternates: {
    canonical: "/about-us",
  },
};

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        title="Who We Are"
        subtitle="Driving the future of logistics and urban mobility in Nigeria."
      />
      <AboutContent />
    </>
  );
}
