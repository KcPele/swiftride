"use client";

/* ── SVG Icons ── */

const CarIcon = () => (
  <svg width="40" height="40" viewBox="0 0 512 512" fill="currentColor">
    <path d="M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91zm-352.06-17.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L384 208H128l19.93-49.83zM96 319.8c-19.2 0-32-12.76-32-31.9S76.8 256 96 256s48 12.76 48 31.9-28.8 31.9-48 31.9zm320 0c-19.2 0-48-12.76-48-31.9S396.8 256 416 256s32 12.76 32 31.9-12.8 31.9-32 31.9z" />
  </svg>
);

const BoxOpenIcon = () => (
  <svg width="40" height="40" viewBox="0 0 640 512" fill="currentColor">
    <path d="M425.7 256c-16.9 0-32.8-9-41.4-23.4L320 126l-64.3 106.6c-8.6 14.4-24.5 23.4-41.4 23.4-8.2 0-16.3-2.2-23.6-6.5L64 168v172c0 13.3 10.7 24 24 24h464c13.3 0 24-10.7 24-24V168l-127.1 81.5c-7.2 4.3-15.3 6.5-23.2 6.5zm-40.8-33.1L320 103.2l-64.9 119.7c-3.2 5.9-9.6 9.3-16.3 8.2L64 192v-48c0-13.3 10.7-24 24-24h464c13.3 0 24 10.7 24 24v48l-174.8 38.9c-6.7 1.1-13.1-2.3-16.3-8.2zM88 384h464c30.9 0 56-25.1 56-56V120c0-30.9-25.1-56-56-56H88c-30.9 0-56 25.1-56 56v208c0 30.9 25.1 56 56 56zm-32 48c0 17.7 14.3 32 32 32h464c17.7 0 32-14.3 32-32v-16H56v16z" />
  </svg>
);

const WalletIcon = () => (
  <svg width="40" height="40" viewBox="0 0 512 512" fill="currentColor">
    <path d="M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 512 512"
    fill="#28a745"
    style={{ flexShrink: 0, marginTop: 4 }}
  >
    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
  </svg>
);

/* ── Data ── */

interface Feature {
  label: string;
  description: string;
}

interface ServiceData {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: Feature[];
  reversed?: boolean;
  bgColor?: string;
}

const services: ServiceData[] = [
  {
    icon: <CarIcon />,
    title: "Swift Rides",
    description:
      "Getting around shouldn't be a hassle. With Swift Ride, you get a comfortable, air-conditioned vehicle at your doorstep in minutes.",
    features: [
      {
        label: "Safety First:",
        description:
          "Verified drivers, live tracking, and SOS features.",
      },
      {
        label: "Transparent Pricing:",
        description: "Know your fare before you book. No haggling.",
      },
      {
        label: "Variety:",
        description:
          "Choose from standard sedans to premium SUVs for any occasion.",
      },
    ],
  },
  {
    icon: <BoxOpenIcon />,
    title: "Logistics & Delivery",
    description:
      "Sending a package? We've got you covered. From documents to bulk goods, our delivery fleet moves your items fast and securely.",
    features: [
      {
        label: "Same-Day Delivery:",
        description: "Fast dispatch within the city.",
      },
      {
        label: "Real-Time Updates:",
        description: "Track your package from pickup to drop-off.",
      },
      {
        label: "Secure Handling:",
        description:
          "Insurance coverage for high-value items (terms apply).",
      },
    ],
    reversed: true,
    bgColor: "#fafafa",
  },
  {
    icon: <WalletIcon />,
    title: "Wallet & Bill Payments",
    description:
      "The Swift App is also your digital wallet. Manage your funds and pay for essential services all in one place.",
    features: [
      {
        label: "Seamless Payments:",
        description:
          "Pay for rides and deliveries instantly from your wallet.",
      },
      {
        label: "Bill Pay:",
        description:
          "Buy Airtime, Data, and pay Electricity bills directly in the app.",
      },
      {
        label: "Secure Transactions:",
        description:
          "Encrypted technology keeps your money safe.",
      },
    ],
  },
];

/* ── Service Section Component ── */

function ServiceSection({ service }: { service: ServiceData }) {
  const iconBlock = (
    <div>
      <div
        style={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          backgroundColor: "#fff5eb",
          color: "#ff6600",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2.5rem",
          marginBottom: 20,
        }}
      >
        {service.icon}
      </div>
    </div>
  );

  const contentBlock = (
    <div>
      <h2
        style={{
          fontSize: "2.2rem",
          fontWeight: 700,
          color: "#222",
          marginBottom: 20,
        }}
      >
        {service.title}
      </h2>
      <p
        style={{
          fontSize: "1.1rem",
          color: "#555",
          lineHeight: 1.7,
          marginBottom: 20,
        }}
      >
        {service.description}
      </p>
      <ul style={{ listStyle: "none", padding: 0, margin: "20px 0" }}>
        {service.features.map((f) => (
          <li
            key={f.label}
            style={{
              display: "flex",
              gap: 15,
              alignItems: "flex-start",
              marginBottom: 20,
              color: "#444",
              fontSize: "1.05rem",
            }}
          >
            <CheckCircleIcon />
            <div>
              <strong
                style={{
                  display: "block",
                  color: "#222",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  marginBottom: 4,
                }}
              >
                {f.label}
              </strong>
              <p style={{ margin: 0, color: "#555", fontSize: "1rem" }}>
                {f.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section
      style={{
        padding: "80px 0",
        backgroundColor: service.bgColor || "transparent",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 20px" }}>
        <div
          className="service-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "center",
          }}
        >
          {service.reversed ? (
            <>
              {contentBlock}
              {iconBlock}
            </>
          ) : (
            <>
              {iconBlock}
              {contentBlock}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

/* ── Main Component ── */

export default function LearnMoreContent() {
  return (
    <>
      {services.map((service) => (
        <ServiceSection key={service.title} service={service} />
      ))}

      {/* CTA Banner */}
      <section
        style={{
          backgroundColor: "#111",
          padding: "60px 0",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 20px" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              marginBottom: 20,
            }}
          >
            Ready to experience the difference?
          </h2>
          <p style={{ fontSize: "1rem", marginBottom: 20 }}>
            Download the Swift App today and enjoy convenience at your
            fingertips.
          </p>
          <a
            href="https://app.swiftpickup.com.ng/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "#ff6600",
              color: "#fff",
              padding: "15px 30px",
              borderRadius: 8,
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
              marginTop: 20,
              transition: "background 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#e65000")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#ff6600")
            }
          >
            Get Started Now
          </a>
        </div>
      </section>

      <style jsx global>{`
        @media (max-width: 768px) {
          .service-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}
