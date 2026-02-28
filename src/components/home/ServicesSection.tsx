"use client";

import { useState } from "react";
import { Car, Utensils, Package } from "lucide-react";

const services = [
  {
    id: "ride",
    title: "Ride",
    icon: <Car size={40} />,
    description:
      "Get a comfortable, affordable ride to your destination with verified drivers available 24/7.",
  },
  {
    id: "eat",
    title: "Eat",
    icon: <Utensils size={40} />,
    description:
      "Order your favorite meals from local restaurants and get them delivered to your doorstep.",
  },
  {
    id: "delivery",
    title: "Delivery",
    icon: <Package size={40} />,
    description:
      "Send and receive packages across town with real-time tracking and secure handling.",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState("ride");

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex justify-center gap-2.5 mb-10">
          {services.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`py-3 px-7.5 border-none rounded-full cursor-pointer font-semibold text-base transition-all duration-300 ${
                active === s.id
                  ? "bg-primary text-surface"
                  : "bg-surface-muted text-text"
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-7.5">
          {services.map((s) => (
            <div
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`rounded-2xl p-10 text-center transition-all duration-300 cursor-pointer border-2 ${
                active === s.id
                  ? "bg-primary-light border-primary"
                  : "bg-surface-light border-transparent"
              }`}
            >
              <div className="text-5xl mb-4 text-primary flex justify-center">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-2.5 text-dark">
                {s.title}
              </h3>
              <p className="text-text-medium leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
