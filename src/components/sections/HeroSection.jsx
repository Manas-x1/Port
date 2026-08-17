/**
 * HeroSection.jsx — Landing hero section
 * 
 * Full-viewport Void Black canvas with AuroraBackground.
 * "MANAS UPADHYAY" in display weight 300 at 72-96px.
 * TextMorph cycling through creative titles.
 * Dual CTA: Filled orange "View Work" + Ghost "About Me".
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuroraBackground from '../ui/AuroraBackground';
import TextMorph from '../ui/TextMorph';
import FilledButton from '../ui/FilledButton';
import GhostButton from '../ui/GhostButton';

/* Titles to cycle through in the TextMorph */
const TITLES = [
  'AI Content Creator',
  'Graphic Designer',
  '3D Artist',
  'Video Editor',
  'UI/UX Designer',
  'Film Maker',
];

export default function HeroSection() {
  const navigate = useNavigate();

  const scrollToProjects = () => {
    const el = document.querySelector('#projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center overflow-hidden snap-section"
      style={{ backgroundColor: 'var(--color-void-black)' }}
    >
      {/* Aurora gradient background */}
      <AuroraBackground />

      {/* Main content — centered */}
      <div className="relative z-10 text-center select-none px-6 max-w-4xl mx-auto">
        {/* Name — large display heading */}
        <h1
          className="text-bone-white uppercase mb-6"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(48px, 10vw, 96px)',
            fontWeight: 300,
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
          }}
        >
          Manas<br />Upadhyay
        </h1>

        {/* TextMorph — cycling titles */}
        <div
          className="mb-10"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(14px, 2vw, 18px)',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: 'var(--color-ember-orange)',
            minHeight: '28px',
          }}
        >
          <TextMorph texts={TITLES} interval={2500} />
        </div>

        {/* Dual CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <FilledButton onClick={scrollToProjects}>
            View Work
          </FilledButton>
          <GhostButton onClick={() => navigate('/about')}>
            About Me
          </GhostButton>
        </div>
      </div>

      {/* Scroll indicator — bottom center */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--color-steel-mid)',
          }}
        >
          Scroll to Explore
        </span>
        <div
          className="w-px h-12 animate-pulse"
          style={{ backgroundColor: 'var(--color-steel-mid)' }}
        />
      </div>
    </section>
  );
}
