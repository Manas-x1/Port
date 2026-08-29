/**
 * HeroSection.jsx — Landing hero section with Framer Motion text animation & TextMorph
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
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
        {/* Official Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 md:mb-6 transform hover:scale-105 transition-transform"
        >
          <Logo className="w-16 h-16 md:w-24 md:h-24 drop-shadow-[0_0_20px_rgba(255,79,43,0.3)]" />
        </motion.div>

        {/* Handle Badge */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-mono text-xs uppercase tracking-[0.25em] text-ember-orange mb-3 px-3 py-1 bg-carbon/80 border border-graphite-border"
        >
          @MANASXZ // OFFICIAL PORTFOLIO
        </motion.span>

        {/* Name — Framer Motion Staggered Word Reveal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-hero-display text-bone-white uppercase mb-4 tracking-tight"
        >
          Manas<br />Upadhyay
        </motion.h1>

        {/* TextMorph — cycling titles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] text-ember-orange min-h-[32px] mb-8 font-medium"
        >
          <TextMorph texts={TITLES} interval={2400} />
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <FilledButton onClick={scrollToProjects} className="w-full sm:w-auto px-8 py-3">
            Explore Work
          </FilledButton>
          <GhostButton onClick={() => navigate('/about')} className="w-full sm:w-auto px-8 py-3">
            About Me
          </GhostButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase text-steel-mid">
          Scroll to Explore
        </span>
        <div className="w-px h-10 bg-steel-mid animate-pulse" />
      </motion.div>
    </section>
  );
}
