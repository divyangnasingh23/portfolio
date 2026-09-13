"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Layers, Sparkles, ExternalLink } from "lucide-react";

export default function ProjectCard({ project }) {
  const displayTitle = project.displayTitle || project.title;
  const singleLineDesc = project.singleLineDesc || project.subtitle;
  const categoryLabel = project.categoryLabel || project.category;
  const gradientBg = project.cardGradient || "linear-gradient(135deg, #0284c7 0%, #38bdf8 50%, #818cf8 100%)";

  return (
    <article className="project-card">
      {/* ------------------------------------------------------------------ */}
      {/* COLORFUL PATTERN CANVAS & IMAGE PLACEHOLDER (Juliann Mapletoft style) */}
      {/* ------------------------------------------------------------------ */}
      <Link href={`/project/${project.slug}`} className="card-media-wrapper" tabIndex={-1}>
        <div className="colorful-canvas" style={{ background: gradientBg }}>
          {/* Layered Decorative Geometric/Wave SVG Patterns */}
          <div className="pattern-overlay">
            <svg
              className="decor-svg"
              viewBox="0 0 400 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="360" cy="40" r="140" fill="white" fillOpacity="0.12" />
              <circle cx="40" cy="200" r="110" fill="white" fillOpacity="0.08" />
              <path
                d="M-20 180 C80 120, 180 220, 320 140 C380 100, 420 130, 440 160"
                stroke="white"
                strokeOpacity="0.18"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
            </svg>
          </div>

          {/* Top Category Tag inside canvas */}
          <div className="canvas-header">
            <span className="canvas-badge font-display">{categoryLabel}</span>
          </div>

          {/* Device / Browser Image Placeholder Frame */}
          <div className="image-placeholder-frame">
            {/* Browser Chrome Header */}
            <div className="placeholder-chrome">
              <div className="window-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="chrome-title font-mono">{project.slug}</span>
            </div>

            {/* Inner Mockup Image Canvas */}
            <div className="placeholder-screen">
              <div className="placeholder-inner-content">
                <div className="placeholder-icon-wrap">
                  <Sparkles size={18} />
                </div>
                <h4 className="placeholder-project-name font-display">{project.title.split(":")[0]}</h4>
                <span className="placeholder-tag font-mono">{project.client || "Design System"}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* ------------------------------------------------------------------ */}
      {/* CARD BODY CONTENT                                                  */}
      {/* ------------------------------------------------------------------ */}
      <div className="card-body">
        {/* Project Title */}
        <h3 className="card-title font-display">
          <Link href={`/project/${project.slug}`} className="title-link">
            {displayTitle}
          </Link>
        </h3>

        {/* Single-Line Description */}
        <p className="card-single-desc" title={singleLineDesc}>
          {singleLineDesc}
        </p>

        {/* View Details Button */}
        <div className="card-action-row">
          <Link href={`/project/${project.slug}`} className="view-details-btn font-display">
            <span>View Details</span>
            <ArrowRight size={14} className="btn-arrow" />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .project-card {
          display: flex;
          flex-direction: column;
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
          transition: transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal);
        }

        .project-card:hover {
          transform: translateY(-5px);
          border-color: var(--border-medium);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.03);
        }

        .card-media-wrapper {
          text-decoration: none;
          display: block;
          position: relative;
          overflow: hidden;
        }

        /* Colorful Pattern Canvas */
        .colorful-canvas {
          position: relative;
          height: 250px;
          padding: 1.25rem 1.5rem 0 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
        }

        .pattern-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .decor-svg {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .canvas-header {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .canvas-badge {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #18181b;
          background: rgba(255, 255, 255, 0.90);
          backdrop-filter: blur(8px);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-xs);
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
        }

        /* Image Placeholder Mockup Frame */
        .image-placeholder-frame {
          position: relative;
          z-index: 2;
          width: 90%;
          margin: 0 auto;
          background: #ffffff;
          border-radius: var(--radius-sm) var(--radius-sm) 0 0;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.16);
          overflow: hidden;
          transition: transform var(--transition-normal);
          display: flex;
          flex-direction: column;
        }

        .project-card:hover .image-placeholder-frame {
          transform: translateY(-4px) scale(1.02);
        }

        .placeholder-chrome {
          height: 1.65rem;
          background: #f4f4f5;
          border-bottom: 1px solid #e4e4e7;
          display: flex;
          align-items: center;
          padding: 0 0.65rem;
          gap: 0.5rem;
        }

        .window-dots {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .dot-red {
          background: #ef4444;
        }

        .dot-yellow {
          background: #f59e0b;
        }

        .dot-green {
          background: #10b981;
        }

        .chrome-title {
          font-size: 0.65rem;
          color: #71717a;
          margin-left: auto;
        }

        .placeholder-screen {
          height: 140px;
          background: #fafafa;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          position: relative;
          background-image: radial-gradient(rgba(0, 0, 0, 0.06) 1px, transparent 1px);
          background-size: 10px 10px;
        }

        .placeholder-inner-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .placeholder-icon-wrap {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #18181b;
          margin-bottom: 0.4rem;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
        }

        .placeholder-project-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.01em;
          margin-bottom: 0.15rem;
        }

        .placeholder-tag {
          font-size: 0.7rem;
          color: var(--text-muted);
        }

        /* Card Content */
        .card-body {
          padding: 1.5rem 1.75rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .card-title {
          font-size: 1.35rem;
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.02em;
          margin-bottom: 0.45rem;
        }

        .title-link {
          color: var(--text-primary);
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .title-link:hover {
          color: #000000;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .card-single-desc {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.5;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-bottom: 1.35rem;
        }

        .card-action-row {
          margin-top: auto;
          padding-top: 0.5rem;
        }

        .view-details-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.55rem 1.15rem;
          border-radius: var(--radius-full);
          background: #18181b;
          color: #ffffff;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          text-decoration: none;
          transition: background var(--transition-fast), transform var(--transition-fast), gap var(--transition-fast);
        }

        .view-details-btn:hover {
          background: #000000;
          transform: translateY(-1px);
          gap: 0.65rem;
        }

        .btn-arrow {
          transition: transform var(--transition-fast);
        }

        .view-details-btn:hover .btn-arrow {
          transform: translateX(2px);
        }
      `}</style>
    </article>
  );
}
