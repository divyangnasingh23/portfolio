"use client";

import React, { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import AboutSection from "@/components/AboutSection";
import portfolioConfig from "@/data/portfolioConfig.json";
import { Palette } from "lucide-react";

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const { personalInfo, hero, workSection, projects, creativeExplorations } = portfolioConfig;

  // Filter projects based on active tab
  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "product-uiux") return project.filterCategory === "product-uiux";
    if (activeFilter === "brand-visuals") return project.filterCategory === "brand-visuals";
    return true;
  });

  const showCreativeExplorations = activeFilter === "all" || activeFilter === "brand-visuals";

  return (
    <div className="home-container">
      {/* ------------------------------------------------------------------ */}
      {/* HERO SECTION                                                       */}
      {/* ------------------------------------------------------------------ */}
      <section className="hero-section section">
        <div className="container">
          {/* Main Grid: Intro (Left) & Photo Placeholder Card (Right) */}
          <div className="hero-main-grid">
            <div className="hero-intro">
              {/* Availability / Status badge */}
              <div className="hero-status-row">
                <span className="status-badge">
                  <span className="status-dot"></span>
                  <span>{hero.statusBadge}</span>
                </span>
                <span className="location-pill font-mono">{hero.location}</span>
              </div>

              {/* Conversational Greeting */}
              <div className="hero-greeting">
                <span className="greeting-lead font-display">{hero.greeting}</span>
                <h1 className="hero-headline font-display">{hero.headline}</h1>
              </div>

              {/* Sub-headline / Narrative Bio */}
              <p className="hero-bio">{hero.bio}</p>
            </div>

            {/* Photo Placeholder Card with Vibrant Colorful Background */}
            <div className="hero-photo-card">
              <div
                className="photo-canvas"
                style={{
                  background:
                    hero.photoCard?.gradient ||
                    "linear-gradient(135deg, #f97316 0%, #ec4899 45%, #8b5cf6 100%)",
                }}
              >
                {/* Decorative Pattern Overlay */}
                <div className="photo-pattern">
                  <svg
                    className="decor-svg"
                    viewBox="0 0 400 320"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <circle cx="350" cy="50" r="130" fill="white" fillOpacity="0.15" />
                    <circle cx="50" cy="270" r="110" fill="white" fillOpacity="0.1" />
                    <path
                      d="M-20 190 C90 120, 190 240, 330 160 C380 130, 420 150, 440 180"
                      stroke="white"
                      strokeOpacity="0.22"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                  </svg>
                </div>

                <div className="photo-badge font-display">
                  <span>{hero.photoCard?.badge || "Designer & Artist"}</span>
                </div>

                {/* Photo / Portrait Mockup Frame */}
                <div className="photo-frame">
                  <div className="photo-chrome">
                    <div className="window-dots">
                      <span className="dot dot-red"></span>
                      <span className="dot dot-yellow"></span>
                      <span className="dot dot-green"></span>
                    </div>
                    <span className="photo-chrome-title font-mono">
                      {hero.photoCard?.filename || "portrait.jpg"}
                    </span>
                  </div>

                  <div className={`photo-screen ${hero.photoCard?.image ? "has-img" : ""}`}>
                    {hero.photoCard?.image ? (
                      <img
                        src={hero.photoCard.image}
                        alt={personalInfo.name}
                        className="photo-img"
                      />
                    ) : (
                      <div className="avatar-art-box">
                        <div className="avatar-initial font-display">
                          <span>{personalInfo.name.charAt(0)}</span>
                        </div>
                        <h4 className="avatar-name font-display">{personalInfo.name}</h4>
                        <span className="avatar-sub font-mono">{personalInfo.title}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Software & Toolkit - Full Center Width */}
          <div className="hero-toolkit-full">
            <div className="toolkit-center-header">
              <span className="toolkit-kicker font-mono">{hero.toolkit.kicker}</span>
              <h3 className="toolkit-heading font-display">{hero.toolkit.heading}</h3>
            </div>
            <div className="toolkit-pills-center">
              {hero.toolkit.tools.map((tool, idx) => (
                <span key={idx} className="tool-pill font-mono">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* PROJECTS SECTION WITH FILTERING                                     */}
      {/* ------------------------------------------------------------------ */}
      <section className="work-section section" id="work">
        <div className="container">
          <div className="work-header">
            <div className="work-header-left">
              <h2 className="work-title font-display">{workSection.sectionHeading}</h2>
              <p className="work-subtitle">{workSection.sectionSubtitle}</p>
            </div>

            {/* Filter Tabs */}
            <div className="filter-tabs-wrapper">
              <div className="filter-tabs font-display">
                {workSection.filterTabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    className={`filter-tab ${activeFilter === tab.id ? "active" : ""}`}
                    onClick={() => setActiveFilter(tab.id)}
                  >
                    {tab.label} {tab.id === "all" ? `(${projects.length})` : ""}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Filtered Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          {/* Creative Explorations (Posters, Traditional Art, Fine Art) */}
          {showCreativeExplorations && (
            <div className="creative-explorations-wrap">
              <div className="creative-header">
                <div className="creative-title-group">
                  <span className="badge badge-indigo font-mono">{creativeExplorations.kicker}</span>
                  <h3 className="creative-section-title font-display">{creativeExplorations.heading}</h3>
                  <p className="creative-subtitle">{creativeExplorations.subtitle}</p>
                </div>
              </div>

              <div className="creative-grid">
                {creativeExplorations.items.map((exp, idx) => (
                  <div key={idx} className="creative-card">
                    <div className="creative-card-top">
                      <div className="creative-icon">
                        <Palette size={18} />
                      </div>
                      <span className="creative-badge font-mono">{exp.category}</span>
                    </div>
                    <h4 className="creative-card-title font-display">{exp.title}</h4>
                    <p className="creative-card-desc">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 3-ACT ABOUT SECTION                                                */}
      {/* ------------------------------------------------------------------ */}
      <AboutSection />

      <style jsx>{`
        .home-container {
          display: flex;
          flex-direction: column;
        }

        .hero-section {
          padding-top: 5.5rem;
          padding-bottom: 5rem;
          background: #ffffff;
        }

        .hero-main-grid {
          display: grid;
          grid-template-columns: 1.35fr 1fr;
          gap: 3.5rem;
          align-items: center;
          margin-bottom: 4rem;
        }

        .hero-intro {
          display: flex;
          flex-direction: column;
        }

        .hero-status-row {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.25rem 0.75rem;
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          font-weight: 600;
          color: #15803d;
        }

        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #16a34a;
        }

        .location-pill {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .greeting-lead {
          display: block;
          font-size: clamp(1.1rem, 1.8vw, 1.35rem);
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
          letter-spacing: -0.01em;
        }

        .hero-headline {
          font-size: clamp(1.6rem, 2.6vw, 2.25rem);
          font-weight: 750;
          line-height: 1.25;
          letter-spacing: -0.025em;
          color: var(--text-primary);
          margin-bottom: 1.25rem;
        }

        .hero-bio {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        /* Photo Placeholder Card */
        .hero-photo-card {
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }

        .hero-photo-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.08);
        }

        .photo-canvas {
          position: relative;
          background: linear-gradient(135deg, #f97316 0%, #ec4899 45%, #8b5cf6 100%);
          padding: 1.5rem 1.5rem 0 1.5rem;
          height: 320px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
        }

        .photo-pattern {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .decor-svg {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .photo-badge {
          position: relative;
          z-index: 2;
          align-self: flex-start;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #18181b;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(8px);
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-xs);
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
        }

        .photo-frame {
          position: relative;
          z-index: 2;
          width: 88%;
          margin: 0 auto;
          background: #ffffff;
          border-radius: var(--radius-sm) var(--radius-sm) 0 0;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.16);
          overflow: hidden;
          transition: transform var(--transition-normal);
        }

        .hero-photo-card:hover .photo-frame {
          transform: translateY(-4px) scale(1.02);
        }

        .photo-chrome {
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

        .photo-chrome-title {
          font-size: 0.65rem;
          color: #71717a;
          margin-left: auto;
        }

        .photo-screen {
          height: 200px;
          background: #fafafa;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.25rem;
          background-image: radial-gradient(rgba(0, 0, 0, 0.06) 1px, transparent 1px);
          background-size: 10px 10px;
          overflow: hidden;
        }

        .photo-screen.has-img {
          padding: 0;
          background-image: none;
        }

        .photo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .avatar-art-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .avatar-initial {
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 50%;
          background: #18181b;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .avatar-name {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.15rem;
        }

        .avatar-sub {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        /* Full Center Width Toolkit */
        .hero-toolkit-full {
          width: 100%;
          padding: 2.5rem 3rem;
          background: #fafafa;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.5rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
        }

        .toolkit-center-header {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .toolkit-kicker {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--text-muted);
        }

        .toolkit-heading {
          font-size: 1.45rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          margin-top: 0.25rem;
        }

        .toolkit-pills-center {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.65rem;
          max-width: 880px;
        }

        .tool-pill {
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          padding: 0.5rem 1.15rem;
          border-radius: var(--radius-full);
          font-size: 0.88rem;
          font-weight: 500;
          color: var(--text-primary);
          box-shadow: var(--shadow-sm);
          transition: border-color var(--transition-fast), transform var(--transition-fast);
        }

        .tool-pill:hover {
          border-color: var(--border-medium);
          transform: translateY(-1px);
        }

        /* Work Section */
        .work-section {
          background: #fafafa;
          border-top: 1px solid var(--border-subtle);
          padding-top: 5rem;
          padding-bottom: 5.5rem;
        }

        .work-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 2rem;
          margin-bottom: 3.5rem;
          flex-wrap: wrap;
        }

        .work-header-left {
          max-width: 580px;
        }

        .work-title {
          font-size: clamp(2.2rem, 4vw, 3rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          margin-bottom: 0.5rem;
        }

        .work-subtitle {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .filter-tabs-wrapper {
          padding-bottom: 0.25rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2.25rem;
        }

        /* Creative Explorations */
        .creative-explorations-wrap {
          margin-top: 5rem;
          padding-top: 4rem;
          border-top: 1px solid var(--border-subtle);
        }

        .creative-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 2.5rem;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .creative-section-title {
          font-size: 1.85rem;
          font-weight: 800;
          letter-spacing: -0.025em;
          margin-top: 0.5rem;
          margin-bottom: 0.4rem;
        }

        .creative-subtitle {
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .creative-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .creative-card {
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          transition: transform var(--transition-fast), border-color var(--transition-fast);
        }

        .creative-card:hover {
          transform: translateY(-2px);
          border-color: var(--border-medium);
        }

        .creative-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .creative-icon {
          width: 2.25rem;
          height: 2.25rem;
          border-radius: var(--radius-xs);
          background: #f4f4f5;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
        }

        .creative-badge {
          font-size: 0.72rem;
          color: var(--text-muted);
        }

        .creative-card-title {
          font-size: 1.2rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .creative-card-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 900px) {
          .hero-main-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .hero-photo-card {
            max-width: 440px;
            margin: 0 auto;
            width: 100%;
          }

          .hero-toolkit-full {
            padding: 2rem 1.5rem;
          }

          .creative-grid {
            grid-template-columns: 1fr;
          }

          .work-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .filter-tabs {
            width: 100%;
            overflow-x: auto;
          }
        }
      `}</style>
    </div>
  );
}
