"use client";

import {
  RocketIcon,
  UserShieldIcon,
  MapMarkedAltIcon,
  WalletIcon,
  ClockIcon,
  HandHoldingUsdIcon,
} from "@/components/icons";

const features = [
  {
    icon: <RocketIcon size={28} />,
    title: "Fast & Reliable",
    description:
      "Smart matching technology connects you to the nearest driver in seconds. No more long waits.",
  },
  {
    icon: <UserShieldIcon size={28} />,
    title: "Safe & Secure",
    description:
      "Every driver is verified. Features like SOS and live location sharing keep you protected 24/7.",
  },
  {
    icon: <MapMarkedAltIcon size={28} />,
    title: "Live Tracking",
    description:
      "Watch your ride in real-time from pickup to drop-off. You are always in control of your journey.",
  },
  {
    icon: <WalletIcon size={28} />,
    title: "Flexible Payments",
    description:
      "Pay with Cash, Card, or your Swift Wallet. We support all methods for your absolute convenience.",
  },
  {
    icon: <ClockIcon size={28} />,
    title: "24/7 Availability",
    description:
      "Whether it's an early morning run or a late-night ride, Swift is always awake and ready to move you.",
  },
  {
    icon: <HandHoldingUsdIcon size={28} />,
    title: "Affordable Rates",
    description:
      "Premium service shouldn't break the bank. Enjoy competitive, transparent pricing with no hidden fees.",
  },
];

export default function FeaturesGrid() {
  return (
    <section style={{ padding: "100px 0 80px", background: "#fff", textAlign: "center" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 20px" }}>
        {/* Header */}
        <div style={{ marginBottom: 60, maxWidth: 700, marginLeft: "auto", marginRight: "auto" }}>
          <h2
            style={{
              fontSize: "2.2rem",
              fontWeight: 800,
              marginBottom: 15,
              color: "#1a1a1a",
            }}
          >
            Why Choose Swift?
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#666", lineHeight: 1.6 }}>
            Experience the difference with a service designed for your safety, speed, and convenience.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 30,
          }}
        >
          {features.map((f) => (
            <div
              key={f.title}
              style={{
                background: "#fff",
                borderRadius: 16,
                padding: "35px 30px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                border: "1px solid rgba(0,0,0,0.03)",
                width: "calc(33.333% - 20px)",
                minWidth: 300,
                maxWidth: 380,
                textAlign: "left",
                transition: "transform 0.3s, box-shadow 0.3s",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(255,102,0,0.15)";
                e.currentTarget.style.borderColor = "rgba(255,102,0,0.2)";
                const iconBox = e.currentTarget.querySelector(".why-icon-box") as HTMLElement;
                if (iconBox) {
                  iconBox.style.background = "#ff6600";
                  iconBox.style.color = "#fff";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)";
                e.currentTarget.style.borderColor = "rgba(0,0,0,0.03)";
                const iconBox = e.currentTarget.querySelector(".why-icon-box") as HTMLElement;
                if (iconBox) {
                  iconBox.style.background = "#fff5eb";
                  iconBox.style.color = "#ff6600";
                }
              }}
            >
              <div
                className="why-icon-box"
                style={{
                  width: 60,
                  height: 60,
                  background: "#fff5eb",
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  color: "#ff6600",
                  marginBottom: 25,
                  transition: "background 0.3s, color 0.3s",
                }}
              >
                {f.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  marginBottom: 12,
                  color: "#222",
                }}
              >
                {f.title}
              </h3>
              <p style={{ fontSize: "1rem", color: "#555", lineHeight: 1.6 }}>
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
