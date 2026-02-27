"use client";

/* ── SVG icons matching FontAwesome used on the original site ── */
const ShippingFastIcon = () => (
  <svg width="32" height="32" viewBox="0 0 640 512" fill="currentColor">
    <path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z" />
  </svg>
);

const ShieldAltIcon = () => (
  <svg width="32" height="32" viewBox="0 0 512 512" fill="currentColor">
    <path d="M466.5 83.7l-192-80a48.15 48.15 0 00-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z" />
  </svg>
);

const ThumbsUpIcon = () => (
  <svg width="32" height="32" viewBox="0 0 512 512" fill="currentColor">
    <path d="M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z" />
  </svg>
);

const values = [
  {
    icon: <ShippingFastIcon />,
    title: "Speed",
    description:
      "We value your time. Our systems are optimized for the fastest possible response and delivery times.",
  },
  {
    icon: <ShieldAltIcon />,
    title: "Safety",
    description:
      "Safety is our priority. From ride tracking to driver verification, we ensure you are always secure.",
  },
  {
    icon: <ThumbsUpIcon />,
    title: "Reliability",
    description:
      "We deliver on our promises. Rain or shine, day or night, you can count on Swift.",
  },
];

export default function AboutContent() {
  return (
    <section style={{ padding: "60px 0" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 20px" }}>
        {/* Our Story */}
        <h2
          style={{
            fontSize: "1.8rem",
            fontWeight: 700,
            color: "#ff6600",
            margin: "40px 0 20px",
          }}
        >
          Our Story
        </h2>
        <p
          style={{
            color: "#333",
            lineHeight: 1.7,
            fontSize: "1.05rem",
            marginBottom: 20,
          }}
        >
          Swift Pickup &amp; Logistics was born out of a simple need: to make
          moving people and goods easier, faster, and more reliable. We observed
          the challenges of urban transportation and delivery—delays,
          uncertainty, and lack of transparency—and decided to build a solution
          that serves everyone.
        </p>
        <p
          style={{
            color: "#333",
            lineHeight: 1.7,
            fontSize: "1.05rem",
            marginBottom: 20,
          }}
        >
          Started in Niger State, we have rapidly grown to become a trusted
          partner for daily commuters and businesses alike. Our platform
          leverages technology to connect users with verified nearby drivers and
          delivery riders instantly.
        </p>

        {/* Our Mission */}
        <h2
          style={{
            fontSize: "1.8rem",
            fontWeight: 700,
            color: "#ff6600",
            margin: "40px 0 20px",
          }}
        >
          Our Mission
        </h2>
        <p
          style={{
            color: "#333",
            lineHeight: 1.7,
            fontSize: "1.05rem",
            marginBottom: 20,
          }}
        >
          To redefine urban mobility by providing a seamless, safe, and efficient
          transportation and logistics ecosystem that empowers businesses and
          simplifies lives.
        </p>

        {/* Our Vision */}
        <h2
          style={{
            fontSize: "1.8rem",
            fontWeight: 700,
            color: "#ff6600",
            margin: "40px 0 20px",
          }}
        >
          Our Vision
        </h2>
        <p
          style={{
            color: "#333",
            lineHeight: 1.7,
            fontSize: "1.05rem",
            marginBottom: 20,
          }}
        >
          To be the leading logistics and ride-sharing platform in Africa, known
          for innovation, reliability, and customer-centric service.
        </p>

        {/* Our Core Values */}
        <h2
          style={{
            fontSize: "1.8rem",
            fontWeight: 700,
            color: "#ff6600",
            margin: "40px 0 20px",
          }}
        >
          Our Core Values
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 30,
            marginTop: 40,
          }}
        >
          {values.map((v) => (
            <div
              key={v.title}
              style={{
                background: "#fff",
                borderRadius: 12,
                padding: 30,
                textAlign: "center",
                boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  color: "#ff6600",
                  fontSize: "2rem",
                  marginBottom: 15,
                }}
              >
                {v.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "#111",
                  marginBottom: 10,
                }}
              >
                {v.title}
              </h3>
              <p
                style={{
                  color: "#333",
                  lineHeight: 1.7,
                  fontSize: "0.95rem",
                }}
              >
                {v.description}
              </p>
            </div>
          ))}
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
