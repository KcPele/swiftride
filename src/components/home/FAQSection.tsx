"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is Swift Pickup & Logistics?",
    answer:
      "Swift Pickup & Logistics is a leading on-demand service in Nigeria offering fast ride-hailing, secure package delivery, and logistics solutions. We primarily serve Minna, Niger State, providing safe and reliable transportation 24/7.",
  },
  {
    question: "How do I book a ride?",
    answer:
      "Simply download the Swift Ride app from the Google Play Store or use our Web App. Create an account, enter your pickup and drop-off locations, choose your ride type, and confirm. A driver will be with you shortly!",
  },
  {
    question: "Can I schedule a ride in advance?",
    answer:
      "Yes! Swift Ride allows you to schedule rides for later. Just choose the 'Schedule' option when booking, select your desired date and time, and we'll ensure a driver is ready for you.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept flexible payment options including Cash, Wallet (fundable via transfer/card), and secure Card payments directly in the app. You can choose your preferred method before booking.",
  },
  {
    question: "How do I become a Swift driver?",
    answer:
      "We are always looking for partners! Visit our office at Shop 19, Marnona Plaza, Minna, or contact us via the app to start the verification process. You'll need a valid license and a vehicle inspection.",
  },
  {
    question: "Is my package safe during delivery?",
    answer:
      "Absolutely. We provide real-time tracking for all deliveries. Our drivers are verified, and you can share the trip status with the receiver so everyone stays informed until the package arrives safely.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section style={{ padding: "80px 0", background: "#f9f9f9" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 20px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: 800,
              marginBottom: 10,
              color: "#222",
            }}
          >
            Frequently Asked Questions
          </h2>
          <p style={{ color: "#666", fontSize: "1.1rem" }}>
            Everything you need to know about riding and driving with Swift.
          </p>
        </div>

        {/* 2-column grid */}
        <div
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
          }}
        >
          {faqs.map((faq, i) => {
            const isActive = openIndex === i;
            return (
              <div
                key={i}
                style={{
                  background: "#fff",
                  borderRadius: 8,
                  boxShadow: isActive
                    ? "0 8px 24px rgba(255,102,0,0.15)"
                    : "0 4px 12px rgba(0,0,0,0.05)",
                  overflow: "hidden",
                  transition: "0.3s",
                  border: isActive
                    ? "1px solid rgba(255,102,0,0.3)"
                    : "1px solid transparent",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isActive ? null : i)}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    padding: "20px 25px",
                    textAlign: "left",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: isActive ? "#ff6600" : "#333",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    transition: "color 0.3s",
                  }}
                >
                  {faq.question}
                  <span
                    style={{
                      fontSize: "0.9rem",
                      color: "#ff6600",
                      transition: "transform 0.3s",
                      transform: isActive ? "rotate(45deg)" : "rotate(0deg)",
                      flexShrink: 0,
                      marginLeft: 15,
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: isActive ? 200 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.3s ease-out, padding 0.3s",
                    padding: isActive ? "0 25px 25px" : "0 25px",
                  }}
                >
                  <p
                    style={{
                      color: "#555",
                      lineHeight: 1.6,
                      margin: 0,
                      fontSize: "0.95rem",
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
