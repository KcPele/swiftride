"use client";

import { useState } from "react";
import Link from "next/link";
import { Car, Utensils, Bike } from "lucide-react";

const tabs = [
  { id: "ride", label: "Ride", icon: <Car size={28} /> },
  { id: "eat", label: "Eat", icon: <Utensils size={28} /> },
  { id: "delivery", label: "Delivery", icon: <Bike size={28} /> },
];

const tabContent: Record<string, { title: string; desc: string }> = {
  ride: {
    title: "SWIFT Ride & Logistics –\nYour Ride, Reimagined.",
    desc: "Experience a smarter, faster, and more reliable ride-sharing service designed for today's urban adventurer.",
  },
  eat: {
    title: "SWIFT Eats –\nFood Delivered Fast.",
    desc: "Order from your favorite local restaurants and get meals delivered hot to your door.",
  },
  delivery: {
    title: "SWIFT Delivery –\nSend It. Track It.",
    desc: "Send and receive packages with real-time tracking and verified drivers across Minna.",
  },
};

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState("ride");
  const content = tabContent[activeTab];

  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src="/images/hero-bg.png"
        alt="Swift Ride Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-[1] pointer-events-none"
        onError={(e) => {
          const t = e.target as HTMLImageElement;
          t.style.display = "none";
          if (t.parentElement) {
            t.parentElement.style.background =
              "linear-gradient(135deg, var(--color-dark) 0%, var(--color-dark-alt) 50%, var(--color-dark-deep) 100%)";
          }
        }}
      />

      {/* Content */}
      <div className=" relative w-full max-w-[1180px] mx-auto px-10 py-10 z-[2] flex md:justify-start justify-center">
        {/* Hero Card */}
        <div className="w-[470px] max-w-[96vw] rounded-2xl bg-white/20 shadow-[0_4px_40px_rgba(0,0,0,0.15),0_2px_8px_rgba(0,0,0,0.08)] overflow-hidden border-2 border-border backdrop-blur-[5px] backdrop-saturate-[1.4] pb-5.5">
          {/* Tabs */}
          <div className="flex w-full rounded-t-2xl bg-surface overflow-hidden border-b-2 border-border-light">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 text-center pt-3.5 text-lg cursor-pointer relative flex flex-col items-center h-21 transition-colors duration-200 ${
                  activeTab === tab.id
                    ? "text-primary font-semibold"
                    : "text-text-medium font-medium"
                }`}
              >
                <span className="flex items-center justify-center mb-2">
                  {tab.icon}
                </span>
                {tab.label}
                {activeTab === tab.id && (
                  <div className="w-1/2 h-[3px] bg-primary rounded-sm absolute left-1/4 bottom-0" />
                )}
              </div>
            ))}
          </div>

          {/* Card Content */}
          <div className="px-7 pt-5.5 pb-2 text-center min-h-[330px] text-text-heading flex flex-col justify-center">
            <h1 className="sm:text-4xl text-text-heading text-2xl font-bold leading-[1.13] mb-3.5 -tracking-[1px] text-surface whitespace-pre-line">
              <span className="text-primary inline-flex align-middle mr-1.5">
                <Car size={32} />
              </span>{" "}
              {content.title}
            </h1>
            <p className="text-lg  mb-6 font-normal">
              {content.desc}
            </p>

            {/* App store badges */}
            <div className="flex justify-center gap-4 mb-5">
              <a href="https://play.google.com/store/apps/details?id=com.swiftpickup.ride" target="_blank" rel="noopener noreferrer" className="transition-transform duration-200">
                <img src="/images/google-play.png" alt="Get it on Google Play" className="h-10.5 w-auto block" />
              </a>
              <a href="https://app.swiftpickup.com.ng/" target="_blank" rel="noopener noreferrer" className="transition-transform duration-200">
                <img src="/images/app-store.png" alt="Download on the App Store" className="h-10.5 w-auto block" />
              </a>
            </div>

            <Link
              href="/about-us"
              className="text-surface text-lg underline font-medium inline-block mt-3"
            >
              Learn more about driving and delivering
            </Link>
          </div>
        </div>
      </div>

      
    </section>
  );
}
