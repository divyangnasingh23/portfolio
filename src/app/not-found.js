"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="container">
        <div className="not-found-card glass-panel">
          <div className="icon-wrap">
            <Compass size={36} />
          </div>
          <span className="error-code font-mono">ERROR_404_NOT_FOUND</span>
          <h1 className="error-title">Uncharted Territory</h1>
          <p className="error-desc">
            The case study or page you are looking for has either been reframed, relocated, or doesn&apos;t exist in this architecture.
          </p>
          <Link href="/" className="btn-primary">
            <ArrowLeft size={16} />
            <span>Return to Safe Ground</span>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .not-found-container {
          min-height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem 0;
        }

        .not-found-card {
          max-width: 540px;
          margin: 0 auto;
          padding: 3.5rem 2.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.25rem;
          background: var(--bg-surface-elevated);
        }

        .icon-wrap {
          width: 64px;
          height: 64px;
          border-radius: var(--radius-md);
          background: var(--accent-primary-light);
          color: var(--accent-primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .error-code {
          font-size: 0.8rem;
          color: var(--accent-cyan);
          background: var(--accent-cyan-light);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-xs);
        }

        .error-title {
          font-size: 2rem;
        }

        .error-desc {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
}
