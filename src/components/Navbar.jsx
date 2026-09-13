"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import portfolioConfig from "@/data/portfolioConfig.json";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { navigation } = portfolioConfig;

  return (
    <header className="navbar-wrapper">
      <div className="container">
        <nav className="navbar-container">
          {/* Brand Logo (Clean initial + name) */}
          <Link href="/" className="brand-logo" onClick={() => setMobileMenuOpen(false)}>
            <div className="brand-avatar font-display">
              <span>{navigation.brandName.charAt(0)}</span>
            </div>
            <span className="brand-name font-display">{navigation.brandName}</span>
          </Link>

          {/* Right-Aligned Group: Nav Links + CTA Button */}
          <div className="nav-right-group">
            <div className="nav-links-desktop">
              {navigation.navLinks.map((link, idx) => (
                <Link key={idx} href={link.href} className="nav-link font-display">
                  {link.label}
                </Link>
              ))}
            </div>

            <a
              href={navigation.ctaButton.href}
              className="btn-primary nav-cta font-display"
            >
              <span>{navigation.ctaButton.label}</span>
              <ArrowUpRight size={14} />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu-dropdown">
            {navigation.navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="mobile-nav-link font-display"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mobile-menu-actions">
              <a
                href={navigation.ctaButton.href}
                className="btn-primary font-display"
                onClick={() => setMobileMenuOpen(false)}
                style={{ width: "100%", justifyContent: "center" }}
              >
                <span>{navigation.ctaButton.label}</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .navbar-wrapper {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(255, 255, 255, 0.90);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--border-subtle);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 4.25rem;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
        }

        .brand-avatar {
          width: 2.1rem;
          height: 2.1rem;
          border-radius: var(--radius-xs);
          background: #18181b;
          color: #ffffff;
          font-weight: 800;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .brand-name {
          font-weight: 800;
          font-size: 1.25rem;
          color: var(--text-primary);
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .nav-right-group {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-links-desktop {
          display: flex;
          align-items: center;
          gap: 1.75rem;
        }

        .nav-link {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-secondary);
          transition: color var(--transition-fast);
          display: inline-flex;
          align-items: center;
          letter-spacing: 0.02em;
        }

        .nav-link:hover {
          color: var(--text-primary);
        }

        .nav-cta {
          font-size: 0.85rem;
          padding: 0.55rem 1.15rem;
          border-radius: var(--radius-full);
        }

        .mobile-toggle-btn {
          display: none;
          padding: 0.4rem;
          color: var(--text-primary);
        }

        .mobile-menu-dropdown {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1.25rem 0 1.5rem 0;
          border-top: 1px solid var(--border-subtle);
        }

        .mobile-nav-link {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
          padding: 0.4rem 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .mobile-menu-actions {
          margin-top: 0.5rem;
        }

        @media (max-width: 768px) {
          .nav-links-desktop {
            display: none;
          }

          .nav-cta {
            display: none;
          }

          .mobile-toggle-btn {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      `}</style>
    </header>
  );
}
