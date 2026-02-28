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
    <header className="bg-surface border-b-2 border-border-dark">
      <nav className="max-w-[1180px] mx-auto px-5 flex items-center justify-between h-16 relative">
        {/* Logo */}
        <div className="flex items-center gap-3.5">
          <Link href="/" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Swift Logo"
              className="h-11 flex items-center"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                if (target.parentElement && !target.parentElement.querySelector("span")) {
                  const span = document.createElement("span");
                  span.innerHTML =
                    '<span class="text-xl font-bold text-primary">SWIFT</span>';
                  target.parentElement.appendChild(span);
                }
              }}
            />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-toggle-btn hidden w-8 h-7 flex-col justify-between items-center bg-transparent border-none cursor-pointer z-[100]"
          aria-label="Toggle menu"
        >
          <span
            className="w-full h-[3px] bg-text-dark rounded-sm transition-transform duration-300"
            style={{
              transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
            }}
          />
          <span
            className="w-full h-[3px] bg-text-dark rounded-sm transition-opacity duration-300"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="w-full h-[3px] bg-text-dark rounded-sm transition-transform duration-300"
            style={{
              transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
            }}
          />
        </button>

        {/* Nav links */}
        <ul
          className={`nav-links ${menuOpen ? "nav-links-open" : ""} flex gap-12 list-none m-0 p-0`}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`no-underline text-sm transition-colors duration-200 hover:text-primary ${
                  pathname === link.href
                    ? "text-primary font-bold"
                    : "text-text-dark font-normal"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/learn-more"
          className="nav-cta bg-primary text-surface py-2 px-4.5 rounded text-sm font-medium border-none ml-4 transition-colors duration-200 hover:bg-primary-dark"
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
