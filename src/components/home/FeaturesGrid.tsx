"use client";

import { Rocket, ShieldCheck, MapPin, Wallet, Clock, HandCoins } from "lucide-react";

const features = [
  {
    icon: <Rocket size={28} />,
    title: "Fast & Reliable",
    description:
      "Smart matching technology connects you to the nearest driver in seconds. No more long waits.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Safe & Secure",
    description:
      "Every driver is verified. Features like SOS and live location sharing keep you protected 24/7.",
  },
  {
    icon: <MapPin size={28} />,
    title: "Live Tracking",
    description:
      "Watch your ride in real-time from pickup to drop-off. You are always in control of your journey.",
  },
  {
    icon: <Wallet size={28} />,
    title: "Flexible Payments",
    description:
      "Pay with Cash, Card, or your Swift Wallet. We support all methods for your absolute convenience.",
  },
  {
    icon: <Clock size={28} />,
    title: "24/7 Availability",
    description:
      "Whether it's an early morning run or a late-night ride, Swift is always awake and ready to move you.",
  },
  {
    icon: <HandCoins size={28} />,
    title: "Affordable Rates",
    description:
      "Premium service shouldn't break the bank. Enjoy competitive, transparent pricing with no hidden fees.",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="pt-25 pb-20 bg-surface text-center">
      <div className="max-w-[1180px] mx-auto px-5">
        {/* Header */}
        <div className="mb-15 max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-4 text-text-heading">
            Why Choose Swift?
          </h2>
          <p className="text-lg text-text-light leading-relaxed">
            Experience the difference with a service designed for your safety, speed, and convenience.
          </p>
        </div>

        {/* Grid */}
        <div className="flex flex-wrap justify-center gap-7.5">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-surface rounded-2xl py-9 px-7.5 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-black/[0.03] w-[calc(33.333%-20px)] min-w-75 max-w-sm text-left relative overflow-hidden cursor-default transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,102,0,0.15)] hover:border-primary/20"
            >
              <div className="w-15 h-15 bg-primary-light rounded-xl flex items-center justify-center text-primary mb-6 transition-all duration-300 group-hover:bg-primary group-hover:text-surface">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-dark">
                {f.title}
              </h3>
              <p className="text-base text-text-medium leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
