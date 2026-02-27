import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import AppDownloadSection from "@/components/home/AppDownloadSection";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import FAQSection from "@/components/home/FAQSection";

export const metadata: Metadata = {
  title: "Swift Pickup & Logistics | Ride-Hailing & Delivery in Minna",
  description:
    "Book safe, affordable rides and fast deliveries in Minna, Niger State. Swift Pickup offers ride-hailing, package delivery, car rentals, wallet payments, and more.",
  openGraph: {
    title: "Swift Pickup & Logistics | Ride-Hailing & Delivery in Minna",
    description:
      "Book safe, affordable rides and fast deliveries in Minna, Niger State. Swift Pickup offers ride-hailing, package delivery, car rentals, wallet payments, and more.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AppDownloadSection />
      <FeaturesGrid />
      <TestimonialsSection />
      <HowItWorksSection />
      <FAQSection />
    </>
  );
}
