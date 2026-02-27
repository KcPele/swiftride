import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import RentalGrid from "@/components/rent-car/RentalGrid";

export const metadata: Metadata = {
  title: "Rent a Car",
  description:
    "Need a car for a day, a weekend, or a special event? Choose from our premium selection and book instantly.",
  openGraph: {
    title: "Rent a Car | Swift Pickup",
    description:
      "Rent premium vehicles in Minna for any occasion. Choose from our selection and book instantly.",
  },
  alternates: {
    canonical: "/rent-car",
  },
};

export default function RentCarPage() {
  return (
    <>
      <PageHero
        title="Rent a Ride"
        subtitle="Need a car for a day, a weekend, or a special event? Choose from our premium selection and book instantly."
      />
      <RentalGrid />
    </>
  );
}
