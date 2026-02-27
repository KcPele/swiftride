"use client";

import { useState } from "react";
import Link from "next/link";
import { CarIcon, UtensilsIcon, BicycleIcon } from "@/components/icons";

const tabs = [
  { id: "ride", label: "Ride", icon: <CarIcon size={28} /> },
  { id: "eat", label: "Eat", icon: <UtensilsIcon size={28} /> },
  { id: "delivery", label: "Delivery", icon: <BicycleIcon size={28} /> },
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
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <img
        src="/images/hero-bg.png"
        alt="Swift Ride Hero Background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
          pointerEvents: "none",
        }}
        onError={(e) => {
          const t = e.target as HTMLImageElement;
          t.style.display = "none";
          if (t.parentElement) {
            t.parentElement.style.background =
              "linear-gradient(135deg, #111 0%, #1a1a2e 50%, #16213e 100%)";
          }
        }}
      />

      {/* Content */}
      <div
        className="hero-content-wrapper"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 1180,
          margin: "0 auto",
          padding: "40px 40px",
          zIndex: 2,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        {/* Hero Card */}
        <div
          style={{
            width: 470,
            maxWidth: "96vw",
            borderRadius: 18,
            background: "rgba(255,255,255,0.2)",
            boxShadow:
              "0 4px 40px rgba(0,0,0,0.15), 0 2px 8px rgba(0,0,0,0.08)",
            overflow: "hidden",
            border: "1.5px solid #eaeaea",
            backdropFilter: "blur(5px) saturate(1.4)",
            paddingBottom: 22,
          }}
        >
          {/* Tabs */}
          <div
            style={{
              display: "flex",
              width: "100%",
              borderRadius: "18px 18px 0 0",
              background: "#fff",
              overflow: "hidden",
              borderBottom: "1.5px solid #e0e0e0",
            }}
          >
            {tabs.map((tab) => (
              <div
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  flex: 1,
                  textAlign: "center",
                  padding: "14px 0 0",
                  fontSize: "1.08em",
                  fontWeight: activeTab === tab.id ? 600 : 500,
                  color: activeTab === tab.id ? "#ff6600" : "#555",
                  cursor: "pointer",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: 85,
                  transition: "color 0.18s",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 7,
                  }}
                >
                  {tab.icon}
                </span>
                {tab.label}
                {activeTab === tab.id && (
                  <div
                    style={{
                      width: "50%",
                      height: 3,
                      background: "#ff6600",
                      borderRadius: 2,
                      position: "absolute",
                      left: "25%",
                      bottom: 0,
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Card Content */}
          <div
            style={{
              padding: "22px 28px 8px",
              textAlign: "center",
              minHeight: 330,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h1
              style={{
                fontSize: "2.1em",
                fontWeight: 700,
                lineHeight: 1.13,
                margin: "0 0 14px",
                letterSpacing: -1,
                color: "#fff",
                whiteSpace: "pre-line",
              }}
            >
              <span style={{ color: "#ff6600", display: "inline-flex", verticalAlign: "middle", marginRight: 6 }}>
                <CarIcon size={32} />
              </span>{" "}
              {content.title}
            </h1>
            <p
              style={{
                fontSize: "1.08em",
                color: "#ddd",
                margin: "0 0 25px",
                fontWeight: 400,
              }}
            >
              {content.desc}
            </p>

            {/* App store badges */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 15,
                marginBottom: 20,
              }}
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.swiftpickup.ride"
                target="_blank"
                rel="noopener noreferrer"
                style={{ transition: "transform 0.2s" }}
              >
                <img
                  src="/images/google-play.png"
                  alt="Get it on Google Play"
                  style={{ height: 42, width: "auto", display: "block" }}
                />
              </a>
              <a
                href="https://app.swiftpickup.com.ng/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ transition: "transform 0.2s" }}
              >
                <img
                  src="/images/app-store.png"
                  alt="Download on the App Store"
                  style={{ height: 42, width: "auto", display: "block" }}
                />
              </a>
            </div>

            <Link
              href="/about-us"
              style={{
                color: "#fff",
                fontSize: "1.08em",
                textDecoration: "underline",
                fontWeight: 500,
                display: "inline-block",
                marginTop: 12,
              }}
            >
              Learn more about driving and delivering
            </Link>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .hero-content-wrapper {
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}
