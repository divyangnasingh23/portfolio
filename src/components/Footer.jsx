"use client";

import React from "react";
import portfolioConfig from "@/data/portfolioConfig.json";
import { Mail } from "lucide-react";

function LinkedinIcon({ size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export default function Footer() {
  const { footer } = portfolioConfig;

  return (
    <footer className="footer-wrapper" id="contact">
      <div className="container">
        <div className="footer-hero-cta">
          <span className="badge badge-indigo font-mono">{footer.badge}</span>
          <h2 className="footer-headline font-display">{footer.headline}</h2>
          <p className="footer-subheadline">{footer.subheadline}</p>

          {/* Icon Buttons for Mail and LinkedIn */}
          <div className="contact-icon-buttons">
            <a
              href={footer.emailUrl}
              className="icon-btn mail-btn"
              aria-label={`Send email to ${footer.email}`}
              title={`Email: ${footer.email}`}
            >
              <Mail size={22} />
            </a>

            <a
              href={footer.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn linkedin-btn"
              aria-label="Connect on LinkedIn"
              title="Connect on LinkedIn"
            >
              <LinkedinIcon size={22} />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-wrapper {
          border-top: 1px solid var(--border-subtle);
          background: #fafafa;
          padding: 6.5rem 0;
          margin-top: auto;
        }

        .footer-hero-cta {
          max-width: 680px;
          margin: 0 auto;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .footer-headline {
          font-size: clamp(2.5rem, 5vw, 4.25rem);
          font-weight: 800;
          letter-spacing: -0.035em;
          margin-top: 0.75rem;
          margin-bottom: 0.85rem;
          color: var(--text-primary);
        }

        .footer-subheadline {
          font-size: 1.15rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2.5rem;
          max-width: 560px;
        }

        .contact-icon-buttons {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.25rem;
        }

        .icon-btn {
          width: 3.75rem;
          height: 3.75rem;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
          transition: transform var(--transition-fast), background var(--transition-fast), color var(--transition-fast), border-color var(--transition-fast), box-shadow var(--transition-fast);
          text-decoration: none;
        }

        .icon-btn:hover {
          background: #18181b;
          color: #ffffff;
          border-color: #18181b;
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
        }
      `}</style>
    </footer>
  );
}
