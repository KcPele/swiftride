"use client";

export default function AppDownloadSection() {
  return (
    <section
      style={{
        backgroundColor: "#ff6600",
        padding: "80px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 20px" }}>
        <h2
          style={{
            color: "#fff",
            fontSize: "2rem",
            fontWeight: 800,
            textAlign: "center",
            marginBottom: 40,
          }}
        >
          There&apos;s more to love in the apps
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            flexWrap: "wrap",
          }}
        >
          {/* Google Play Card */}
          <a
            href="https://play.google.com/store/apps/details?id=com.swiftpickup.ride"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit", transition: "transform 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <div
              style={{
                background: "#fff",
                borderRadius: 12,
                padding: "15px 25px",
                display: "flex",
                alignItems: "center",
                minWidth: 300,
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                transition: "box-shadow 0.3s",
              }}
            >
              <img
                src="/images/logo.png"
                alt="Swift Logo"
                style={{
                  height: 40,
                  width: "auto",
                  marginRight: 15,
                  flexShrink: 0,
                  objectFit: "contain",
                }}
              />
              <span
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#333",
                  marginRight: "auto",
                }}
              >
                Get it on Playstore
              </span>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "rgba(255,102,0,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ff6600",
                  fontSize: "0.9rem",
                  marginLeft: 16,
                  transition: "background 0.3s, color 0.3s",
                }}
              >
                →
              </div>
            </div>
          </a>

          {/* App Store Card */}
          <a
            href="https://apps.apple.com/ng/app/swiftride/id6757348422"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit", transition: "transform 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <div
              style={{
                background: "#fff",
                borderRadius: 12,
                padding: "15px 25px",
                display: "flex",
                alignItems: "center",
                minWidth: 300,
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                transition: "box-shadow 0.3s",
              }}
            >
              <img
                src="/images/logo.png"
                alt="Swift Logo"
                style={{
                  height: 40,
                  width: "auto",
                  marginRight: 15,
                  flexShrink: 0,
                  objectFit: "contain",
                }}
              />
              <span
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#333",
                  marginRight: "auto",
                }}
              >
                Get it on Appstore
              </span>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "rgba(255,102,0,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ff6600",
                  fontSize: "0.9rem",
                  marginLeft: 16,
                  transition: "background 0.3s, color 0.3s",
                }}
              >
                →
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
