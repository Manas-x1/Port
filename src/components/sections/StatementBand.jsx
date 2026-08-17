/**
 * StatementBand.jsx — Full-bleed orange statement section
 * 
 * Ori design: Full-width #ff4f2b background, black text, no container max-width.
 * A bold visual interruption in the dark rhythm — "power-on indicator" effect.
 * 
 * Props:
 *   text: string — The statement text to display
 */
import React from 'react';

export default function StatementBand({ text = 'We Create The Future' }) {
  return (
    <section
      className="w-full py-16 md:py-20 px-6 snap-section flex items-center justify-center min-h-[40vh]"
      style={{ backgroundColor: 'var(--color-ember-orange)' }}
    >
      <h2
        className="text-center uppercase max-w-[1280px] mx-auto"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(32px, 5vw, 48px)',
          fontWeight: 400,
          lineHeight: 1.2,
          color: 'var(--color-void-black)',
        }}
      >
        {text}
      </h2>
    </section>
  );
}
