"use client";

import Link from "next/link";
import { PhoneAltIcon, EnvelopeIcon, MapMarkerAltIcon } from "@/components/icons";

const companyLinks = [
  { href: "/about-us", label: "About Us" },
  { href: "/swift-rides", label: "Swift Rides" },
  { href: "/rent-car", label: "Rent Car" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms-conditions", label: "Terms of Service" },
];

const supportLinks = [
  { href: "/about-us", label: "Help Center" },
  { href: "/about-us", label: "Contact Us" },
  { href: "/about-us", label: "Safety" },
  { href: "/about-us", label: "Lost & Found" },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/swift_pickup_logistics",
    label: "Instagram",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    href: "https://www.tiktok.com/@swiftpickupng",
    label: "TikTok",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.16v-3.44a4.85 4.85 0 01-3.77-1.26V6.69h3.77z" />
      </svg>
    ),
  },
  {
    href: "https://twitter.com/swiftpickupng",
    label: "Twitter",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com",
    label: "Facebook",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#111",
        color: "#fff",
        padding: "80px 0 0",
        fontSize: "0.95rem",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 20px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
            gap: 40,
            marginBottom: 60,
          }}
        >
          {/* Brand Column */}
          <div>
            <div
              style={{
                fontSize: "1.8rem",
                fontWeight: 800,
                color: "#fff",
                marginBottom: 20,
                letterSpacing: 1,
              }}
            >
              SWIFT
            </div>
            <p style={{ color: "#aaa", lineHeight: 1.6, marginBottom: 20, maxWidth: 300 }}>
              Your Ride, Reimagined. Fast, safe, and reliable logistics for
              everyone.
            </p>
            <div style={{ display: "flex", gap: 15, marginBottom: 25 }}>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  style={{
                    width: 36,
                    height: 36,
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    transition: "0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#ff6600";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <span style={{ color: "#bbb", display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ color: "#ff6600", display: "flex" }}>
                  <PhoneAltIcon size={16} />
                </span>
                07012100006
              </span>
              <span style={{ color: "#bbb", display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ color: "#ff6600", display: "flex" }}>
                  <EnvelopeIcon size={16} />
                </span>
                support@swiftpickup.com.ng
              </span>
              <span style={{ color: "#bbb", display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ color: "#ff6600", display: "flex" }}>
                  <MapMarkerAltIcon size={16} />
                </span>
                Minna, Niger State
              </span>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4
              style={{
                color: "#fff",
                fontSize: "1.1rem",
                fontWeight: 700,
                marginBottom: 25,
              }}
            >
              Company
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {companyLinks.map((link) => (
                <li key={link.label} style={{ marginBottom: 12 }}>
                  <Link
                    href={link.href}
                    style={{ color: "#aaa", transition: "color 0.3s" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#ff6600";
                      e.currentTarget.style.paddingLeft = "5px";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#aaa";
                      e.currentTarget.style.paddingLeft = "0";
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4
              style={{
                color: "#fff",
                fontSize: "1.1rem",
                fontWeight: 700,
                marginBottom: 25,
              }}
            >
              Support
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {supportLinks.map((link) => (
                <li key={link.label} style={{ marginBottom: 12 }}>
                  <Link
                    href={link.href}
                    style={{ color: "#aaa", transition: "color 0.3s" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#ff6600";
                      e.currentTarget.style.paddingLeft = "5px";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#aaa";
                      e.currentTarget.style.paddingLeft = "0";
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get the App */}
          <div>
            <h4
              style={{
                color: "#fff",
                fontSize: "1.1rem",
                fontWeight: 700,
                marginBottom: 25,
              }}
            >
              Get the App
            </h4>
            <p style={{ color: "#aaa", marginBottom: 20 }}>
              Book rides and track deliveries on the go.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
              <a
                href="https://play.google.com/store/apps/details?id=com.swiftpickup.ride"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/google-play.png"
                  alt="Get it on Google Play"
                  style={{ height: 40, width: "auto", opacity: 0.9, transition: "opacity 0.3s" }}
                  onMouseEnter={(e) => ((e.target as HTMLImageElement).style.opacity = "1")}
                  onMouseLeave={(e) => ((e.target as HTMLImageElement).style.opacity = "0.9")}
                />
              </a>
              <a
                href="https://app.swiftpickup.com.ng/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/app-store.png"
                  alt="Download on the App Store"
                  style={{ height: 40, width: "auto", opacity: 0.9, transition: "opacity 0.3s" }}
                  onMouseEnter={(e) => ((e.target as HTMLImageElement).style.opacity = "1")}
                  onMouseLeave={(e) => ((e.target as HTMLImageElement).style.opacity = "0.9")}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            padding: "25px 0",
            fontSize: "0.9rem",
            color: "#777",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p>&copy; 2025 Swift Pickup and Logistics. All rights reserved.</p>
          <div style={{ display: "flex", gap: 20 }}>
            <Link
              href="/privacy"
              style={{ color: "#777", transition: "color 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ff6600")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#777")}
            >
              Privacy
            </Link>
            <Link
              href="/terms-conditions"
              style={{ color: "#777", transition: "color 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ff6600")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#777")}
            >
              Terms
            </Link>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 992px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 576px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
            text-align: center;
          }
          footer > div > div:last-child {
            flex-direction: column !important;
            gap: 15px !important;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
