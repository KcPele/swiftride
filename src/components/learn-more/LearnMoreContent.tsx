"use client";

import { Car, PackageOpen, Wallet, CircleCheck } from "lucide-react";

const services = [
  {
    icon: <Car size={40} />,
    title: "Swift Rides",
    description:
      "Getting around shouldn't be a hassle. With Swift Ride, you get a comfortable, air-conditioned vehicle at your doorstep in minutes.",
    features: [
      {
        label: "Safety First:",
        description: "Verified drivers, live tracking, and SOS features.",
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
    icon: <PackageOpen size={40} />,
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
        description: "Insurance coverage for high-value items (terms apply).",
      },
    ],
    reversed: true,
    bgColor: "bg-surface-subtle",
  },
  {
    icon: <Wallet size={40} />,
    title: "Wallet & Bill Payments",
    description:
      "The Swift App is also your digital wallet. Manage your funds and pay for essential services all in one place.",
    features: [
      {
        label: "Seamless Payments:",
        description: "Pay for rides and deliveries instantly from your wallet.",
      },
      {
        label: "Bill Pay:",
        description:
          "Buy Airtime, Data, and pay Electricity bills directly in the app.",
      },
      {
        label: "Secure Transactions:",
        description: "Encrypted technology keeps your money safe.",
      },
    ],
  },
];

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

function ServiceSection({ service }: { service: ServiceData }) {
  const iconBlock = (
    <div>
      <div className="w-25 h-25 rounded-full bg-primary-light text-primary inline-flex items-center justify-center mb-5">
        {service.icon}
      </div>
    </div>
  );

  const contentBlock = (
    <div>
      <h2 className="text-4xl font-bold text-text-dark mb-5">{service.title}</h2>
      <p className="text-lg text-text-medium leading-relaxed mb-5">
        {service.description}
      </p>
      <ul className="list-none p-0 my-5">
        {service.features.map((f) => (
          <li
            key={f.label}
            className="flex gap-4 items-start mb-5 text-text-medium text-base"
          >
            <CircleCheck size={19} className="text-accent-green shrink-0 mt-1" />
            <div>
              <strong className="block text-text-dark text-lg font-bold mb-1">
                {f.label}
              </strong>
              <p className="m-0 text-text-medium text-base">{f.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className={`py-20 ${service.bgColor || ""}`}>
      <div className="max-w-[1180px] mx-auto px-5">
        <div className="service-grid grid grid-cols-2 gap-15 items-center">
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

export default function LearnMoreContent() {
  return (
    <>
      {services.map((service) => (
        <ServiceSection key={service.title} service={service} />
      ))}

      {/* CTA Banner */}
      <section className="bg-dark py-15 text-center text-surface">
        <div className="max-w-[1180px] mx-auto px-5">
          <h2 className="text-2xl font-bold mb-5">
            Ready to experience the difference?
          </h2>
          <p className="text-base mb-5">
            Download the Swift App today and enjoy convenience at your
            fingertips.
          </p>
          <a
            href="https://app.swiftpickup.com.ng/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-surface py-4 px-7.5 rounded-lg font-bold text-base no-underline mt-5 transition-colors duration-300 hover:bg-primary-dark"
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
