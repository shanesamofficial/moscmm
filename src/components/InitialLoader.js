import React, { useEffect, useState } from 'react';
import logoP from '../assets/logo_p.png';
import './InitialLoader.css';

const EXIT_MS = 250;

export default function InitialLoader({ active, progress = 0 }) {
  const [mounted, setMounted] = useState(active);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (active) {
      setMounted(true);
      setExiting(false);
      return;
    }

    if (!mounted) return;

    setExiting(true);
    const t = window.setTimeout(() => {
      setMounted(false);
      setExiting(false);
    }, EXIT_MS);

    return () => window.clearTimeout(t);
  }, [active, mounted]);

  if (!mounted) return null;

  const clamped = Math.max(0, Math.min(100, progress));

  return (
    <div
      className={`initial-loader ${exiting ? 'initial-loader--exiting' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <div className="initial-loader__content">
        <img
          src={logoP}
          alt="MOSCMM Kariambady Eye Hospital"
          className="initial-loader__logo"
          width="200"
          height="200"
        />
        <div className="initial-loader__progress" aria-hidden="true">
          <div className="initial-loader__progress-track">
            <div
              className="initial-loader__progress-fill"
              style={{ width: `${clamped}%` }}
            />
          </div>
        </div>
        <div className="sr-only">Loading… {Math.round(clamped)}%</div>
      </div>
    </div>
  );
}
