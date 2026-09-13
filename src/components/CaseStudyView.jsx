"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Globe,
  Sparkles,
  CheckCircle2,
  Layers,
  Calendar,
  Briefcase,
  Wrench,
  TrendingUp,
} from "lucide-react";

export default function CaseStudyView({ project, nextProject }) {
  const displayTitle = project.displayTitle || project.title;
  const categoryTag = project.editorialCategory || project.categoryLabel || project.category;

  return (
    <div className="case-study-editorial">
      {/* ------------------------------------------------------------------ */}
      {/* TOP BREADCRUMB NAVIGATION                                          */}
      {/* ------------------------------------------------------------------ */}
      <div className="top-nav-bar">
        <div className="container">
          <div className="top-nav-content">
            <Link href="/#work" className="back-link font-display">
              <ArrowLeft size={16} />
              <span>Back to Projects</span>
            </Link>
            <div className="top-nav-badge">
              <span className="badge badge-indigo">{categoryTag}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* CASE STUDY HERO                                                    */}
      {/* ------------------------------------------------------------------ */}
      <header className="case-hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-kicker-row">
              <span className="category-kicker">{categoryTag}</span>
              <span className="dot-separator">·</span>
              <span className="timeline-text">{project.timeline}</span>
            </div>

            <h1 className="hero-title">{displayTitle}</h1>
            <p className="hero-subtitle">{project.subtitle}</p>

            {/* Live Link Action (if applicable) */}
            {project.liveUrl && (
              <div className="hero-live-wrap">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary live-link-btn"
                >
                  <Globe size={15} />
                  <span>View Live Production Website</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            )}

            {/* Social media links (for campaigns) */}
            {project.socialLinks && (
              <div className="hero-social-links">
                <span className="social-links-label font-mono">Live Campaign Links:</span>
                <div className="social-links-pills">
                  {project.socialLinks.slice(0, 4).map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-pill"
                    >
                      <span>{link.title}</span>
                      <ExternalLink size={12} />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* ------------------------------------------------------------------ */}
      {/* 4-COLUMN QUICK-GLANCE METADATA STRIP                               */}
      {/* ------------------------------------------------------------------ */}
      <section className="metadata-strip-section">
        <div className="container">
          <div className="metadata-grid">
            <div className="meta-cell">
              <div className="meta-icon">
                <Briefcase size={16} />
              </div>
              <div className="meta-text">
                <span className="meta-label">Role</span>
                <span className="meta-val">{project.role}</span>
              </div>
            </div>

            <div className="meta-cell">
              <div className="meta-icon">
                <Calendar size={16} />
              </div>
              <div className="meta-text">
                <span className="meta-label">Timeline</span>
                <span className="meta-val">{project.timeline?.split("·")[0]?.trim() || "2026"}</span>
              </div>
            </div>

            <div className="meta-cell">
              <div className="meta-icon">
                <Layers size={16} />
              </div>
              <div className="meta-text">
                <span className="meta-label">Client / Context</span>
                <span className="meta-val">{project.client || "Independent Direction"}</span>
              </div>
            </div>

            <div className="meta-cell">
              <div className="meta-icon">
                <Wrench size={16} />
              </div>
              <div className="meta-text">
                <span className="meta-label">Deliverables</span>
                <span className="meta-val">{project.principleBadges?.join(", ") || "UI/UX, Visual Design"}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* VISUAL SHOWCASE BANNER / MOCKUP CONTAINER                          */}
      {/* ------------------------------------------------------------------ */}
      <section className="showcase-banner-section">
        <div className="container">
          <div
            className="showcase-canvas"
            style={{ background: project.coverGradient || "#f8f9fa" }}
          >
            <div className="canvas-grid-dots"></div>

            <div className="showcase-inner">
              <div className="showcase-pill-tag">
                <Sparkles size={14} />
                <span>Featured Case Study</span>
              </div>
              <h2 className="showcase-headline">&ldquo;{project.tagline}&rdquo;</h2>
              <p className="showcase-client-note">
                Designed by Divyangna Singh for {project.client || "Brand Systems"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* THE PROBLEM VS. THE SOLUTION (EDITORIAL SPLIT)                     */}
      {/* ------------------------------------------------------------------ */}
      <section className="editorial-narrative-section section">
        <div className="container">
          <div className="narrative-grid">
            {/* The Challenge Card */}
            <div className="narrative-card challenge-card">
              <div className="narrative-card-header">
                <span className="narrative-tag challenge-tag">The Challenge</span>
                <h3 className="narrative-heading">Understanding the Friction</h3>
              </div>
              <p className="narrative-body">
                {project.ambiguityTest?.theQuestioning || project.summary60s}
              </p>
              {project.ambiguityTest?.initialBrief && (
                <div className="brief-callout">
                  <span className="callout-label font-mono">Initial Assumption:</span>
                  <p className="callout-text">{project.ambiguityTest.initialBrief}</p>
                </div>
              )}
            </div>

            {/* The Strategic Solution Card */}
            <div className="narrative-card solution-card">
              <div className="narrative-card-header">
                <span className="narrative-tag solution-tag">The Solution</span>
                <h3 className="narrative-heading">
                  {project.coreSolution?.headline || "Strategic Design Architecture"}
                </h3>
              </div>
              <p className="narrative-body">
                {project.ambiguityTest?.reframedDirection || project.coreSolution?.description}
              </p>
              {project.ideaAlmostChose && (
                <div className="brief-callout">
                  <span className="callout-label font-mono">Key Pivot Rationale:</span>
                  <p className="callout-text">{project.ideaAlmostChose.whyChosenWon}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* KEY INTERVENTIONS & DESIGN CRAFT                                   */}
      {/* ------------------------------------------------------------------ */}
      {project.coreSolution?.keyInterventions && (
        <section className="interventions-section section">
          <div className="container">
            <div className="section-header">
              <span className="badge badge-indigo">Design Execution</span>
              <h2 className="section-title">Key Interventions &amp; Systems Craft</h2>
              <p className="section-subtitle">
                How design thinking and visual precision directly addressed user and business needs.
              </p>
            </div>

            <div className="interventions-grid">
              {project.coreSolution.keyInterventions.map((item, idx) => (
                <div key={idx} className="intervention-card">
                  <div className="intervention-num font-display">0{idx + 1}</div>
                  <h4 className="intervention-title">{item.title}</h4>
                  <p className="intervention-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* OUTCOMES & IMPACT METRICS                                          */}
      {/* ------------------------------------------------------------------ */}
      <section className="outcomes-section section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-indigo">Impact &amp; Results</span>
            <h2 className="section-title">Measurable Outcomes</h2>
            <p className="section-subtitle">
              Validating user clarity, design system consistency, and production delivery.
            </p>
          </div>

          <div className="metrics-grid">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="metric-card">
                <span className="metric-number font-display">{metric.value}</span>
                <span className="metric-title">{metric.label}</span>
                <span className="metric-badge">{metric.change}</span>
              </div>
            ))}
          </div>

          {/* Retrospective Quote */}
          {project.outcomes?.conclusion && (
            <div className="retrospective-box">
              <blockquote className="retro-quote font-display">
                &ldquo;{project.outcomes.conclusion}&rdquo;
              </blockquote>
              <p className="retro-author">— Divyangna Singh · {project.role}</p>
            </div>
          )}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* NEXT PROJECT PAGINATION BANNER                                     */}
      {/* ------------------------------------------------------------------ */}
      {nextProject && (
        <section className="next-project-section">
          <div className="container">
            <Link href={`/project/${nextProject.slug}`} className="next-project-card">
              <div className="next-project-left">
                <span className="next-label">Next Case Study</span>
                <h3 className="next-title font-display">
                  {nextProject.displayTitle || nextProject.title}
                </h3>
                <p className="next-subtitle">{nextProject.subtitle}</p>
              </div>
              <div className="next-project-right">
                <div className="next-arrow-circle">
                  <ArrowRight size={22} />
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      <style jsx>{`
        .case-study-editorial {
          display: flex;
          flex-direction: column;
          background: #ffffff;
        }

        /* Top Nav Bar */
        .top-nav-bar {
          position: sticky;
          top: 4.25rem;
          z-index: 90;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border-subtle);
          padding: 0.85rem 0;
        }

        .top-nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .back-link:hover {
          color: var(--text-primary);
        }

        /* Hero */
        .case-hero {
          padding-top: 4.5rem;
          padding-bottom: 3.5rem;
          background: #ffffff;
        }

        .hero-inner {
          max-width: 840px;
        }

        .hero-kicker-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 1.25rem;
        }

        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(2.4rem, 5vw, 3.8rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.035em;
          color: var(--text-primary);
          margin-bottom: 1.25rem;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .hero-live-wrap {
          margin-bottom: 1.5rem;
        }

        .live-link-btn {
          font-size: 0.92rem;
          padding: 0.75rem 1.4rem;
        }

        .hero-social-links {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-subtle);
        }

        .social-links-label {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .social-links-pills {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .social-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-secondary);
          background: #f4f4f5;
          border: 1px solid var(--border-subtle);
          padding: 0.3rem 0.7rem;
          border-radius: var(--radius-full);
          transition: all var(--transition-fast);
        }

        .social-pill:hover {
          color: var(--text-primary);
          background: #e4e4e7;
        }

        /* Metadata Strip */
        .metadata-strip-section {
          padding-bottom: 3.5rem;
        }

        .metadata-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
          background: #fafafa;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 1.75rem;
        }

        .meta-cell {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
        }

        .meta-icon {
          width: 2rem;
          height: 2rem;
          border-radius: var(--radius-xs);
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          flex-shrink: 0;
        }

        .meta-text {
          display: flex;
          flex-direction: column;
        }

        .meta-label {
          font-size: 0.72rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          margin-bottom: 0.2rem;
        }

        .meta-val {
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.35;
        }

        /* Showcase Banner */
        .showcase-banner-section {
          padding-bottom: 4rem;
        }

        .showcase-canvas {
          position: relative;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 4.5rem 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
        }

        .canvas-grid-dots {
          position: absolute;
          inset: 0;
          opacity: 0.35;
          background-image: radial-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px);
          background-size: 16px 16px;
          pointer-events: none;
        }

        .showcase-inner {
          position: relative;
          z-index: 2;
          max-width: 680px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .showcase-pill-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #18181b;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(8px);
          padding: 0.3rem 0.8rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(0, 0, 0, 0.08);
          margin-bottom: 1.5rem;
        }

        .showcase-headline {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 3.5vw, 2.5rem);
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.025em;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .showcase-client-note {
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        /* Narrative Grid (Problem vs Solution) */
        .editorial-narrative-section {
          background: #fafafa;
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
        }

        .narrative-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.25rem;
        }

        .narrative-card {
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 2.5rem 2.25rem;
          display: flex;
          flex-direction: column;
        }

        .narrative-card-header {
          margin-bottom: 1.25rem;
        }

        .narrative-tag {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 0.5rem;
        }

        .challenge-tag {
          color: #b45309;
        }

        .solution-tag {
          color: #0369a1;
        }

        .narrative-heading {
          font-family: var(--font-display);
          font-size: 1.45rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: var(--text-primary);
        }

        .narrative-body {
          font-size: 1.02rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .brief-callout {
          margin-top: auto;
          background: #f8fafc;
          border-left: 3px solid #18181b;
          padding: 1rem 1.25rem;
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
        }

        .callout-label {
          display: block;
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 0.25rem;
        }

        .callout-text {
          font-size: 0.88rem;
          color: var(--text-primary);
          line-height: 1.5;
        }

        /* Interventions */
        .interventions-section {
          background: #ffffff;
        }

        .section-header {
          max-width: 620px;
          margin-bottom: 3.5rem;
        }

        .section-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 3.5vw, 2.75rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          margin-top: 0.65rem;
          margin-bottom: 0.5rem;
        }

        .section-subtitle {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .interventions-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
        }

        .intervention-card {
          background: #fafafa;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 2.25rem 1.75rem;
          display: flex;
          flex-direction: column;
          transition: transform var(--transition-fast), border-color var(--transition-fast);
        }

        .intervention-card:hover {
          transform: translateY(-2px);
          border-color: var(--border-medium);
        }

        .intervention-num {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .intervention-title {
          font-family: var(--font-display);
          font-size: 1.2rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          margin-bottom: 0.65rem;
        }

        .intervention-desc {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        /* Outcomes */
        .outcomes-section {
          background: #fafafa;
          border-top: 1px solid var(--border-subtle);
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 3.5rem;
        }

        .metric-card {
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .metric-number {
          font-size: 2.5rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: var(--text-primary);
          line-height: 1.1;
          margin-bottom: 0.4rem;
        }

        .metric-title {
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .metric-badge {
          font-size: 0.75rem;
          color: var(--text-muted);
          background: #f4f4f5;
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
        }

        .retrospective-box {
          background: #18181b;
          color: #ffffff;
          border-radius: var(--radius-md);
          padding: 3rem;
          text-align: center;
          max-width: 860px;
          margin: 0 auto;
        }

        .retro-quote {
          font-size: clamp(1.2rem, 2.5vw, 1.6rem);
          font-weight: 600;
          line-height: 1.45;
          letter-spacing: -0.02em;
          margin-bottom: 1.25rem;
          color: #ffffff;
        }

        .retro-author {
          font-size: 0.88rem;
          color: #a1a1aa;
        }

        /* Next Project Transition Banner */
        .next-project-section {
          background: #ffffff;
          border-top: 1px solid var(--border-subtle);
          padding: 4.5rem 0;
        }

        .next-project-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #fafafa;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: 2.5rem 3rem;
          text-decoration: none;
          transition: transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal);
        }

        .next-project-card:hover {
          transform: translateY(-3px);
          border-color: var(--border-medium);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.04);
        }

        .next-label {
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          margin-bottom: 0.4rem;
          display: block;
        }

        .next-title {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.03em;
          margin-bottom: 0.35rem;
        }

        .next-subtitle {
          font-size: 0.95rem;
          color: var(--text-secondary);
          max-width: 600px;
        }

        .next-arrow-circle {
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 50%;
          background: #18181b;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform var(--transition-fast), background var(--transition-fast);
        }

        .next-project-card:hover .next-arrow-circle {
          transform: translateX(4px);
          background: #000000;
        }

        @media (max-width: 900px) {
          .metadata-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .narrative-grid {
            grid-template-columns: 1fr;
          }

          .interventions-grid {
            grid-template-columns: 1fr;
          }

          .metrics-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .next-project-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.5rem;
            padding: 2rem;
          }
        }

        @media (max-width: 600px) {
          .metadata-grid {
            grid-template-columns: 1fr;
          }

          .metrics-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
