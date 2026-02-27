"use client";

import { useState } from "react";

const services = [
  {
    id: "ride",
    title: "Ride",
    icon: "🚗",
    description:
      "Get a comfortable, affordable ride to your destination with verified drivers available 24/7.",
  },
  {
    id: "eat",
    title: "Eat",
    icon: "🍔",
    description:
      "Order your favorite meals from local restaurants and get them delivered to your doorstep.",
  },
  {
    id: "delivery",
    title: "Delivery",
    icon: "📦",
    description:
      "Send and receive packages across town with real-time tracking and secure handling.",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState("ride");

  return (
    <section style={{ padding: "80px 0", backgroundColor: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 10,
            marginBottom: 40,
          }}
        >
          {services.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              style={{
                padding: "12px 30px",
                border: "none",
                borderRadius: 30,
                cursor: "pointer",
                fontWeight: 600,
                fontSize: "1rem",
                transition: "all 0.3s",
                backgroundColor: active === s.id ? "#ff6600" : "#f0f0f0",
                color: active === s.id ? "#fff" : "#333",
              }}
            >
              {s.title}
            </button>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 30,
          }}
        >
          {services.map((s) => (
            <div
              key={s.id}
              style={{
                background: active === s.id ? "#fff8f0" : "#f8f9fa",
                borderRadius: 16,
                padding: 40,
                textAlign: "center",
                transition: "all 0.3s",
                border:
                  active === s.id
                    ? "2px solid #ff6600"
                    : "2px solid transparent",
                cursor: "pointer",
              }}
              onClick={() => setActive(s.id)}
            >
              <div style={{ fontSize: "3rem", marginBottom: 15 }}>
                {s.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  marginBottom: 10,
                  color: "#111",
                }}
              >
                {s.title}
              </h3>
              <p style={{ color: "#555", lineHeight: 1.7 }}>
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
