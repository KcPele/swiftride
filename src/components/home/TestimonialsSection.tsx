"use client";

const testimonials = [
  {
    quote: "Swift makes my daily commute in Minna so stress-free. The drivers are always professional!",
    name: "Chinedu O.",
    location: "Minna",
    color: "#ff6600",
  },
  {
    quote: "Finally, a logistics app that actually delivers on time. Sent a package to my mum and she got it same day.",
    name: "Fatima B.",
    location: "Niger State",
    color: "#28a745",
  },
  {
    quote: "The live tracking is a game changer. I always know exactly where my ride is.",
    name: "Emmanuel K.",
    location: "Regular Rider",
    color: "#007bff",
  },
  {
    quote: "Safe, affordable, and easy to use. I recommend Swift to everyone in school.",
    name: "Grace A.",
    location: "FUT Minna",
    color: "#6610f2",
  },
  {
    quote: "I love the wallet feature. Cashless rides are just smoother and faster.",
    name: "Tunde L.",
    location: "Business Owner",
    color: "#dc3545",
  },
  {
    quote: "Best delivery service in town. My business relies on them for local dispatch.",
    name: "Sarah's Cakes",
    location: "Vendor",
    color: "#fd7e14",
  },
  {
    quote: "Very polite drivers and clean cars. A truly premium experience compared to keke.",
    name: "Dr. Ibrahim",
    location: "Commuter",
    color: "#20c997",
  },
  {
    quote: "Works perfectly even when network is shaky. Really optimized app.",
    name: "Miracle U.",
    location: "Student",
    color: "#e83e8c",
  },
  {
    quote: "Cheap rates compared to others but the service is top notch. Love it.",
    name: "Yusuf M.",
    location: "Daily Rider",
    color: "#17a2b8",
  },
  {
    quote: "Customer support is actually helpful. Had an issue and they resolved it in minutes.",
    name: "Zainab K.",
    location: "Trader",
    color: "#6f42c1",
  },
];

// Duplicate for infinite scroll
const allTestimonials = [...testimonials, ...testimonials];

export default function TestimonialsSection() {
  return (
    <section style={{ padding: "0", margin: "0", position: "relative" }}>
      <div style={{ position: "relative", zIndex: 2, paddingBottom: 32 }}>
        <h2
          style={{
            textAlign: "center",
            paddingTop: 60,
            fontSize: "2rem",
            fontWeight: 800,
            marginBottom: 10,
            color: "#222",
          }}
        >
          What Our Users Say
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#666",
            fontSize: "1.1rem",
            marginBottom: 40,
          }}
        >
          Trusted by thousands of riders and businesses across Minna and beyond.
        </p>

        {/* Marquee */}
        <div
          style={{
            width: "100%",
            overflow: "hidden",
            position: "relative",
            maskImage:
              "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
            padding: "20px 0",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 30,
              width: "max-content",
              animation: "marquee-scroll 60s linear infinite",
            }}
          >
            {allTestimonials.map((t, i) => (
              <div
                key={i}
                style={{
                  flex: "0 0 320px",
                  background: "#fff",
                  padding: 25,
                  borderRadius: 16,
                  boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
                  border: "1px solid #f0f0f0",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  userSelect: "none",
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.12)";
                  e.currentTarget.style.borderColor = "#ff6600";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.06)";
                  e.currentTarget.style.borderColor = "#f0f0f0";
                }}
              >
                {/* Stars */}
                <div
                  style={{
                    color: "#ffb400",
                    fontSize: "0.9rem",
                    marginBottom: 15,
                  }}
                >
                  ★ ★ ★ ★ ★
                </div>

                {/* Quote */}
                <p
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                    color: "#555",
                    marginBottom: 20,
                    fontStyle: "italic",
                    flexGrow: 1,
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* User */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    borderTop: "1px solid #f9f9f9",
                    paddingTop: 15,
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: t.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: "#fff",
                      flexShrink: 0,
                    }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <span
                      style={{
                        display: "block",
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        color: "#222",
                      }}
                    >
                      {t.name}
                    </span>
                    <span
                      style={{
                        display: "block",
                        fontSize: "0.75rem",
                        color: "#999",
                        textTransform: "uppercase",
                        letterSpacing: 0.5,
                      }}
                    >
                      {t.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .testimonial-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
