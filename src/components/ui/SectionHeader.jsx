/**
 * SectionHeader.jsx — Numbered section header
 * 
 * Left-aligned title in display font weight 300.
 * Optional right-aligned numeric counter ("01", "02") in Chivo Mono.
 * Follows Ori design: clean separation with generous vertical spacing.
 * 
 * Props:
 *   title: string — Section title
 *   number: string — Section number ("01", "02", etc.)
 *   className: string — Additional classes
 */
import React from 'react';

export default function SectionHeader({ title, number, className = '' }) {
  return (
    <div className={`flex items-baseline justify-between mb-12 md:mb-16 ${className}`}>
      {/* Section title — display font, weight 300, uppercase */}
      <h2
        className="text-bone-white uppercase"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(36px, 5vw, 60px)',
          fontWeight: 300,
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
        }}
      >
        {title}
      </h2>

      {/* Section counter — monospaced label */}
      {number && (
        <span
          className="text-bone-white hidden md:block"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '16px',
            fontWeight: 400,
          }}
        >
          {number}
        </span>
      )}
    </div>
  );
}
