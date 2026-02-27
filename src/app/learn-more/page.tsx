import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import LearnMoreContent from "@/components/learn-more/LearnMoreContent";

export const metadata: Metadata = {
  title: "Learn More - Our Services",
  description:
    "Discover Swift Logistics — rides, delivery, wallet, and bill payments. A complete logistics ecosystem for Minna and beyond.",
  openGraph: {
    title: "Learn More - Swift Pickup & Logistics Services",
    description:
      "Discover Swift Logistics — rides, delivery, wallet, and bill payments. A complete logistics ecosystem for Minna and beyond.",
  },
  alternates: {
    canonical: "/learn-more",
  },
};

export default function LearnMorePage() {
  return (
    <>
      <PageHero
        title="Discover Swift Logistics"
        subtitle="We are more than just a ride-hailing app. We are a complete logistics ecosystem designed to simplify your daily life in Minna and beyond."
      />
      <LearnMoreContent />
    </>
  );
}
