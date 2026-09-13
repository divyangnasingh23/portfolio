"use client";

import React from "react";
import { Palette, Layers, Sparkles } from "lucide-react";
import portfolioConfig from "@/data/portfolioConfig.json";

const iconMap = {
  Palette,
  Layers,
  Sparkles,
};

export default function AboutSection() {
  const { about } = portfolioConfig;

  return (
    <section className="about-section section" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="about-header">
          <span className="badge badge-indigo font-mono">{about.badge}</span>
          <h2 className="about-title font-display">{about.heading}</h2>
          <p className="about-subtitle">{about.subtitle}</p>
        </div>

        {/* 3-Act Narrative Grid */}
        <div className="acts-grid">
          {about.acts.map((act) => {
            const Icon = iconMap[act.iconName] || Sparkles;
            return (
              <div key={act.number} className="act-card">
                <div className="act-header">
                  <span className="act-number font-display">{act.number}</span>
                  <div className="act-icon-wrap">
                    <Icon size={18} />
                  </div>
                </div>
                <h3 className="act-title font-display">{act.title}</h3>
                <p className="act-desc">{act.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .about-section {
          background: #ffffff;
          border-top: 1px solid var(--border-subtle);
        }

        .about-header {
          max-width: 680px;
          margin-bottom: 3.5rem;
        }

        .about-title {
          font-size: clamp(2.2rem, 4vw, 3rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          margin-top: 0.75rem;
          margin-bottom: 0.85rem;
        }

        .about-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        .acts-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
        }

        .act-card {
          background: #fafafa;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 2.25rem 1.75rem;
          display: flex;
          flex-direction: column;
          transition: transform var(--transition-fast), border-color var(--transition-fast);
        }

        .act-card:hover {
          transform: translateY(-2px);
          border-color: var(--border-medium);
        }

        .act-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .act-number {
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.03em;
        }

        .act-icon-wrap {
          width: 2.25rem;
          height: 2.25rem;
          border-radius: var(--radius-xs);
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
        }

        .act-title {
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          margin-bottom: 0.85rem;
          line-height: 1.3;
        }

        .act-desc {
          font-size: 0.94rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        @media (max-width: 900px) {
          .acts-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
