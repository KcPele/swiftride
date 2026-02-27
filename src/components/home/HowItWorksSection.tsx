"use client";

import {
  UserPlusIcon,
  MapMarkedAltIcon,
  CarSideIcon,
  ArrowRightIcon,
} from "@/components/icons";

const steps = [
  {
    number: "1",
    title: "Sign Up",
    description:
      "Download the app, create your account, and set up your profile in seconds.",
    icon: <UserPlusIcon size={36} />,
  },
  {
    number: "2",
    title: "Request Ride",
    description:
      "Enter your destination, select your preferred ride type, and see upfront pricing.",
    icon: <MapMarkedAltIcon size={36} />,
  },
  {
    number: "3",
    title: "Arrive Safely",
    description:
      "Track your driver, enjoy a safe trip, and pay seamlessly with your wallet or cash.",
    icon: <CarSideIcon size={36} />,
  },
];

export default function HowItWorksSection() {
  return (
    <section style={{ background: "#fff", padding: "80px 0", textAlign: "center" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 20px" }}>
        {/* Header */}
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 800,
            marginBottom: 10,
            color: "#222",
          }}
        >
          How Swift Works
        </h2>
        <p
          style={{
            fontSize: "1.13em",
            color: "#000",
            marginBottom: 50,
          }}
        >
          Your journey in 3 simple steps
        </p>

        {/* Steps */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: 20,
            position: "relative",
            maxWidth: 1000,
            margin: "0 auto 50px",
            flexWrap: "wrap",
          }}
        >
          {steps.map((step, i) => (
            <div key={step.number} style={{ display: "flex", alignItems: "flex-start" }}>
              {/* Step */}
              <div
                style={{
                  flex: 1,
                  padding: 20,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                {/* Icon Box */}
                <div
                  className="hw-icon-box"
                  style={{
                    width: 90,
                    height: 90,
                    background: "#fff",
                    border: "2px solid #ffefe5",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 25,
                    position: "relative",
                    color: "#ff6600",
                    fontSize: "2rem",
                    boxShadow: "0 10px 30px rgba(255,102,0,0.1)",
                    transition: "transform 0.3s, box-shadow 0.3s, background 0.3s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 15px 40px rgba(255,102,0,0.2)";
                    e.currentTarget.style.background = "#ff6600";
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.borderColor = "#ff6600";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 10px 30px rgba(255,102,0,0.1)";
                    e.currentTarget.style.background = "#fff";
                    e.currentTarget.style.color = "#ff6600";
                    e.currentTarget.style.borderColor = "#ffefe5";
                  }}
                >
                  {step.icon}
                  {/* Badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: -5,
                      right: -5,
                      width: 30,
                      height: 30,
                      background: "#222",
                      color: "#fff",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      border: "3px solid #fff",
                    }}
                  >
                    {step.number}
                  </div>
                </div>

                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    marginBottom: 15,
                    color: "#333",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "#666",
                    lineHeight: 1.6,
                    maxWidth: 280,
                  }}
                >
                  {step.description}
                </p>
              </div>

              {/* Connector arrow */}
              {i < steps.length - 1 && (
                <div
                  style={{
                    paddingTop: 30,
                    color: "#ddd",
                    fontSize: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ArrowRightIcon size={20} color="#ddd" />
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
          style={{
            display: "inline-block",
            background: "#ff6600",
            color: "#fff",
            padding: "15px 40px",
            borderRadius: 50,
            fontWeight: 700,
            fontSize: "1rem",
            textDecoration: "none",
            transition: "transform 0.2s, background 0.2s, box-shadow 0.2s",
            boxShadow: "0 5px 15px rgba(255,102,0,0.3)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#e65c00";
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 8px 20px rgba(255,102,0,0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#ff6600";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 5px 15px rgba(255,102,0,0.3)";
          }}
        >
          Download Now
        </a>
      </div>
    </section>
  );
}
