"use client";

import { Truck, ShieldCheck, ThumbsUp } from "lucide-react";

const values = [
  {
    icon: <Truck size={32} />,
    title: "Speed",
    description:
      "We value your time. Our systems are optimized for the fastest possible response and delivery times.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Safety",
    description:
      "Safety is our priority. From ride tracking to driver verification, we ensure you are always secure.",
  },
  {
    icon: <ThumbsUp size={32} />,
    title: "Reliability",
    description:
      "We deliver on our promises. Rain or shine, day or night, you can count on Swift.",
  },
];

export default function AboutContent() {
  return (
    <section className="py-15">
      <div className="max-w-3xl mx-auto px-5">
        <h2 className="text-3xl font-bold text-primary mt-10 mb-5">Our Story</h2>
        <p className="text-text leading-relaxed text-base mb-5">
          Swift Pickup &amp; Logistics was born out of a simple need: to make
          moving people and goods easier, faster, and more reliable. We observed
          the challenges of urban transportation and delivery—delays,
          uncertainty, and lack of transparency—and decided to build a solution
          that serves everyone.
        </p>
        <p className="text-text leading-relaxed text-base mb-5">
          Started in Niger State, we have rapidly grown to become a trusted
          partner for daily commuters and businesses alike. Our platform
          leverages technology to connect users with verified nearby drivers and
          delivery riders instantly.
        </p>

        <h2 className="text-3xl font-bold text-primary mt-10 mb-5">Our Mission</h2>
        <p className="text-text leading-relaxed text-base mb-5">
          To redefine urban mobility by providing a seamless, safe, and efficient
          transportation and logistics ecosystem that empowers businesses and
          simplifies lives.
        </p>

        <h2 className="text-3xl font-bold text-primary mt-10 mb-5">Our Vision</h2>
        <p className="text-text leading-relaxed text-base mb-5">
          To be the leading logistics and ride-sharing platform in Africa, known
          for innovation, reliability, and customer-centric service.
        </p>

        <h2 className="text-3xl font-bold text-primary mt-10 mb-5">Our Core Values</h2>
        <div className="values-grid grid grid-cols-2 gap-7.5 mt-10">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-surface rounded-xl p-7.5 text-center shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div className="text-primary mb-4 flex justify-center">{v.icon}</div>
              <h3 className="text-xl font-bold text-dark mb-2.5">{v.title}</h3>
              <p className="text-text leading-relaxed text-base">{v.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .values-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
