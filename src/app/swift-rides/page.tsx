import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import FleetGrid from "@/components/swift-rides/FleetGrid";

export const metadata: Metadata = {
  title: "Swift Rides - Meet Our Fleet",
  description:
    "Explore the comfortable and reliable vehicles that power your daily journeys. Meet the proud owners behind the wheel.",
  openGraph: {
    title: "Swift Rides - Meet Our Fleet",
    description:
      "Explore the comfortable and reliable vehicles that power your daily journeys in Minna, Niger State.",
  },
  alternates: {
    canonical: "/swift-rides",
  },
};

export default function SwiftRidesPage() {
  return (
    <>
      <PageHero
        title="Meet Our Fleet"
        subtitle="Explore the comfortable and reliable vehicles that power your daily journeys. Meet the proud owners behind the wheel."
      />
      <FleetGrid />
    </>
  );
}
