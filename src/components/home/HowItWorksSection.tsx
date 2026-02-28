"use client";

import { UserPlus, MapPin, CarFront, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Sign Up",
    description: "Download the app, create your account, and set up your profile in seconds.",
    icon: <UserPlus size={36} />,
  },
  {
    number: "2",
    title: "Request Ride",
    description: "Enter your destination, select your preferred ride type, and see upfront pricing.",
    icon: <MapPin size={36} />,
  },
  {
    number: "3",
    title: "Arrive Safely",
    description: "Track your driver, enjoy a safe trip, and pay seamlessly with your wallet or cash.",
    icon: <CarFront size={36} />,
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-surface py-20 text-center">
      <div className="max-w-[1180px] mx-auto px-5">
        <h2 className="text-section-title font-extrabold mb-2.5 text-text-dark">
          How Swift Works
        </h2>
        <p className="text-lg text-black mb-12">
          Your journey in 3 simple steps
        </p>

        {/* Steps */}
        <div className="flex justify-center flex-wrap items-start gap-5 relative max-w-5xl mx-auto mb-12">
          {steps.map((step, i) => (
            <div key={step.number} className="flex items-start flex-1 min-w-[260px]">
              <div className="group flex-1 p-5 flex flex-col items-center relative z-[2] cursor-default">
                {/* Icon Box */}
                <div className="w-22.5 h-22.5 bg-surface border-2 border-primary-lighter rounded-full flex items-center justify-center mb-6 relative text-primary shadow-[0_10px_30px_rgba(255,102,0,0.1)] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_15px_40px_rgba(255,102,0,0.2)] group-hover:bg-primary group-hover:text-surface group-hover:border-primary">
                  {step.icon}
                  <div className="absolute -top-1.5 -right-1.5 w-7.5 h-7.5 bg-text-dark text-surface rounded-full flex items-center justify-center text-sm font-bold border-[3px] border-surface">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4 text-text">
                  {step.title}
                </h3>
                <p className="text-base text-text-light leading-relaxed max-w-70">
                  {step.description}
                </p>
              </div>

              {i < steps.length - 1 && (
                <div className="pt-7.5 text-divider-light hidden md:flex items-center justify-center">
                  <ArrowRight size={20} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="https://play.google.com/store/apps/details?id=com.swiftpickup.ride"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-surface py-4 px-10 rounded-full font-bold text-base no-underline transition-all duration-200 shadow-[0_5px_15px_rgba(255,102,0,0.3)] hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,102,0,0.4)]"
        >
          Download Now
        </a>
      </div>
    </section>
  );
}
