/**
 * HeroSection.jsx — Landing hero section with logo, title & TextMorph
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuroraBackground from '../ui/AuroraBackground';
import TextMorph from '../ui/TextMorph';
import FilledButton from '../ui/FilledButton';
import GhostButton from '../ui/GhostButton';
import Logo from '../ui/Logo';

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
      className="relative w-full h-screen flex items-center justify-center overflow-hidden snap-section bg-void-black"
    >
      {/* Background ambient lighting */}
      <AuroraBackground />

      {/* Hero content */}
      <div className="relative z-10 text-center select-none px-4 sm:px-6 max-w-4xl mx-auto flex flex-col items-center">
        {/* Official MU Monogram Logo */}
        <div className="mb-6 md:mb-8 transform hover:scale-105 transition-transform">
          <Logo className="w-16 h-16 md:w-24 md:h-24 drop-shadow-[0_0_20px_rgba(255,79,43,0.3)]" />
        </div>

        {/* Name — Outfit light 300 signature typography */}
        <h1 className="text-hero-display text-bone-white uppercase mb-4 tracking-tight">
          Manas<br />Upadhyay
        </h1>

        {/* TextMorph — cycling titles */}
        <div className="font-mono text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] text-ember-orange min-h-[32px] mb-8 font-medium">
          <TextMorph texts={TITLES} interval={2400} />
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <FilledButton onClick={scrollToProjects} className="w-full sm:w-auto px-8 py-3">
            Explore Work
          </FilledButton>
          <GhostButton onClick={() => navigate('/about')} className="w-full sm:w-auto px-8 py-3">
            About Me
          </GhostButton>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
        <span className="font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase text-steel-mid">
          Scroll to Explore
        </span>
        <div className="w-px h-10 bg-steel-mid animate-pulse" />
      </div>
    </section>
  );
}
