import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import TermsContent from "@/components/terms/TermsContent";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read the terms and conditions for using Swift Pickup & Logistics services.",
  openGraph: {
    title: "Terms & Conditions | Swift Pickup & Logistics",
    description:
      "Read the terms and conditions for using Swift Pickup & Logistics services.",
  },
  alternates: {
    canonical: "/terms-conditions",
  },
};

export default function TermsConditionsPage() {
  return (
    <>
      <PageHero
        title="Terms and Conditions"
        subtitle="Effective Date: Updated: 02/08/2025"
      />
      <TermsContent />
    </>
  );
}
