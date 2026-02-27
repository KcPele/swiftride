export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Swift Pickup & Logistics",
    url: "https://www.swiftpickup.com.ng",
    logo: "https://www.swiftpickup.com.ng/icon.png",
    sameAs: [
      "https://www.instagram.com/swift_pickup_logistics",
      "https://www.tiktok.com/@swiftpickupng",
      "https://twitter.com/swiftpickupng",
      "https://www.facebook.com",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+234-701-210-0006",
      contactType: "customer service",
      email: "support@swiftpickup.com.ng",
      areaServed: "NG",
      availableLanguage: "English",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Swift Pickup & Logistics",
    description:
      "Fast, safe, and reliable ride-hailing, delivery, and logistics services in Minna, Niger State, Nigeria.",
    url: "https://www.swiftpickup.com.ng",
    telephone: "+234-701-210-0006",
    email: "support@swiftpickup.com.ng",
    priceRange: "$$",
    image: "https://www.swiftpickup.com.ng/icon.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop 19, Marnona Plaza",
      addressLocality: "Minna",
      addressRegion: "Niger State",
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 9.6139,
      longitude: 6.5569,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  );
}
