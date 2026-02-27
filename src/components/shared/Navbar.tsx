"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/swift-rides", label: "Swift Rides" },
  { href: "/rent-car", label: "Rent Car" },
  { href: "/about-us", label: "About Us" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms-conditions", label: "Terms & Conditions" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header style={{ background: "#fff", borderBottom: "2px solid #0d0d0d" }}>
      <nav
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 62,
          position: "relative",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/images/logo.png"
              alt="Swift Logo"
              style={{ height: 44, display: "flex", alignItems: "center" }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                if (target.parentElement && !target.parentElement.querySelector("span")) {
                  const span = document.createElement("span");
                  span.innerHTML =
                    '<span style="font-size:1.35rem;font-weight:700;color:#ff6600">SWIFT</span>';
                  target.parentElement.appendChild(span);
                }
              }}
            />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-toggle-btn"
          style={{
            display: "none",
            width: 32,
            height: 28,
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            background: "none",
            border: "none",
            cursor: "pointer",
            zIndex: 100,
          }}
          aria-label="Toggle menu"
        >
          <span
            style={{
              width: "100%",
              height: 3,
              backgroundColor: "#222",
              borderRadius: 3,
              transition: "0.3s",
              transform: menuOpen
                ? "rotate(45deg) translate(5px, 5px)"
                : "none",
            }}
          />
          <span
            style={{
              width: "100%",
              height: 3,
              backgroundColor: "#222",
              borderRadius: 3,
              transition: "0.3s",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              width: "100%",
              height: 3,
              backgroundColor: "#222",
              borderRadius: 3,
              transition: "0.3s",
              transform: menuOpen
                ? "rotate(-45deg) translate(5px, -5px)"
                : "none",
            }}
          />
        </button>

        {/* Nav links */}
        <ul
          className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}
          style={{
            display: "flex",
            gap: 48,
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color:
                    pathname === link.href ? "#ff6600" : "#222",
                  textDecoration: "none",
                  fontSize: 15,
                  fontWeight:
                    pathname === link.href ? "bold" : 400,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#ff6600")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color =
                    pathname === link.href ? "#ff6600" : "#222")
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/learn-more"
          className="nav-cta"
          style={{
            background: "#ff6600",
            color: "#fff",
            padding: "8px 18px",
            borderRadius: 4,
            textDecoration: "none",
            fontSize: 15,
            fontWeight: 500,
            border: "none",
            marginLeft: 16,
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "#e65000")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "#ff6600")
          }
        >
          Learn More
        </Link>
      </nav>

      <style jsx global>{`
        @media (max-width: 600px) {
          .nav-toggle-btn {
            display: flex !important;
          }
          .nav-links {
            display: none !important;
            flex-direction: column;
            background: white;
            position: absolute;
            top: 60px;
            left: 50%;
            transform: translateX(-50%);
            width: 85%;
            z-index: 15;
            padding: 10px;
            border-radius: 10px;
            gap: 10px !important;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          }
          .nav-links-open {
            display: flex !important;
          }
          .nav-cta {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
