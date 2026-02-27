import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import PrivacyContent from "@/components/privacy/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Swift Pickup & Logistics collects, uses, and protects your personal information.",
  openGraph: {
    title: "Privacy Policy | Swift Pickup & Logistics",
    description:
      "Learn how Swift Pickup & Logistics collects, uses, and protects your personal information.",
  },
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="Effective Date: 02/08/2025"
      />
      <PrivacyContent />
    </>
  );
}
