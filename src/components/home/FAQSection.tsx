"use client";

import { useState } from "react";

const faqs = [
  { question: "What is Swift Pickup & Logistics?", answer: "Swift Pickup & Logistics is a leading on-demand service in Nigeria offering fast ride-hailing, secure package delivery, and logistics solutions. We primarily serve Minna, Niger State, providing safe and reliable transportation 24/7." },
  { question: "How do I book a ride?", answer: "Simply download the Swift Ride app from the Google Play Store or use our Web App. Create an account, enter your pickup and drop-off locations, choose your ride type, and confirm. A driver will be with you shortly!" },
  { question: "Can I schedule a ride in advance?", answer: "Yes! Swift Ride allows you to schedule rides for later. Just choose the 'Schedule' option when booking, select your desired date and time, and we'll ensure a driver is ready for you." },
  { question: "What payment methods do you accept?", answer: "We accept flexible payment options including Cash, Wallet (fundable via transfer/card), and secure Card payments directly in the app. You can choose your preferred method before booking." },
  { question: "How do I become a Swift driver?", answer: "We are always looking for partners! Visit our office at Shop 19, Marnona Plaza, Minna, or contact us via the app to start the verification process. You'll need a valid license and a vehicle inspection." },
  { question: "Is my package safe during delivery?", answer: "Absolutely. We provide real-time tracking for all deliveries. Our drivers are verified, and you can share the trip status with the receiver so everyone stays informed until the package arrives safely." },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-surface-alt">
      <div className="max-w-[1180px] mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-section-title font-extrabold mb-2.5 text-text-dark">
            Frequently Asked Questions
          </h2>
          <p className="text-text-light text-lg">
            Everything you need to know about riding and driving with Swift.
          </p>
        </div>

        {/* 2-column grid */}
        <div className="faq-grid max-w-5xl mx-auto grid grid-cols-2 gap-5">
          {faqs.map((faq, i) => {
            const isActive = openIndex === i;
            return (
              <div
                key={i}
                className={`bg-surface rounded-lg overflow-hidden transition-all duration-300 ${
                  isActive
                    ? "shadow-[0_8px_24px_rgba(255,102,0,0.15)] border border-primary/30"
                    : "shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-transparent"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isActive ? null : i)}
                  className={`w-full bg-transparent border-none py-5 px-6 text-left text-lg font-semibold flex justify-between items-center cursor-pointer transition-colors duration-300 ${
                    isActive ? "text-primary" : "text-text"
                  }`}
                >
                  {faq.question}
                  <span
                    className="text-sm text-primary transition-transform duration-300 shrink-0 ml-4"
                    style={{ transform: isActive ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: isActive ? 200 : 0,
                    padding: isActive ? "0 25px 25px" : "0 25px",
                  }}
                >
                  <p className="text-text-medium leading-relaxed m-0 text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .faq-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
