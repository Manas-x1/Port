/**
 * About.jsx — Personal Story & Experience Page
 *
 * Layout:
 *   1. Animated page header
 *   2. TimelineSection — scroll-driven 2020→2026 chronology with Lenis Node & Activation
 *   3. Fluid Contact / Collaboration Section — dynamic theme color fluid flood upon path contact
 *   4. Footer
 */
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from '../components/layout/Footer';
import FilledButton from '../components/ui/FilledButton';
import GhostButton from '../components/ui/GhostButton';
import TimelineSection from '../components/sections/TimelineSection';

/**
 * Dynamic Fluid Contact Section
 * Transitions ONLY when the path reaches the terminal bottom node, expanding outward
 * as the user scrolls forward with Lenis.
 */
function FluidContactSection({ timelineProgress = 0 }) {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [expansionProgress, setExpansionProgress] = useState(0);

  // Measure scroll forward with Lenis
  const handleScrollUpdate = useCallback(() => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const windowH = window.innerHeight;

    // Only activate expansion if the timeline path has reached the bottom (>= 0.98)
    if (timelineProgress < 0.97) {
      setExpansionProgress(0);
      return;
    }

    // Measure forward scroll from when the seam enters the mid-viewport
    // Starts when top is at 52% of viewport and fully expands when top is at 10%
    const startY = windowH * 0.52;
    const endY = windowH * 0.08;
    const currentY = rect.top;

    if (currentY > startY) {
      setExpansionProgress(0);
    } else if (currentY < endY) {
      setExpansionProgress(1);
    } else {
      const p = (startY - currentY) / (startY - endY);
      setExpansionProgress(Math.max(0, Math.min(1, p)));
    }
  }, [timelineProgress]);

  useEffect(() => {
    handleScrollUpdate();

    let intervalId = null;
    const checkLenis = () => {
      const lenis = window.__lenis;
      if (lenis) {
        lenis.on('scroll', handleScrollUpdate);
        if (intervalId) clearInterval(intervalId);
      }
    };

    checkLenis();
    if (!window.__lenis) {
      intervalId = setInterval(checkLenis, 100);
    }

    window.addEventListener('scroll', handleScrollUpdate, { passive: true });
    window.addEventListener('resize', handleScrollUpdate, { passive: true });

    return () => {
      if (intervalId) clearInterval(intervalId);
      if (window.__lenis) {
        window.__lenis.off('scroll', handleScrollUpdate);
      }
      window.removeEventListener('scroll', handleScrollUpdate);
      window.removeEventListener('resize', handleScrollUpdate);
    };
  }, [handleScrollUpdate]);

  const clipRadius = expansionProgress * 155;
  const isExpanded = expansionProgress > 0.01;

  return (
    <section
      ref={sectionRef}
      className="relative w-full text-center overflow-hidden border-t border-graphite-border"
      style={{ minHeight: '520px' }}
    >
      {/* ── Base Dark Section (before fluid expansion) ── */}
      <div
        className="w-full py-28 md:py-36 px-6 md:px-10 relative overflow-hidden"
        style={{ background: 'var(--color-carbon)' }}
      >
        {/* Subtle ambient glow */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 50% 0%, rgba(255,79,43,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div className="max-w-[1280px] mx-auto relative z-10">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-ember-orange block mb-4">
            // TRANSMISSION COMPLETE · NEXT HORIZON
          </span>

          <h2
            className="font-display font-light uppercase text-bone-white mb-6"
            style={{ fontSize: 'clamp(34px, 5.5vw, 68px)', letterSpacing: '-0.02em' }}
          >
            Ready to Collaborate?
          </h2>

          <p className="font-sans text-lg md:text-xl text-fog-light max-w-2xl mx-auto mb-10">
            Whether you need cinematic AI video production, 3D visual design, or creative editing — let's connect.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <FilledButton onClick={() => navigate('/work')} className="px-8 py-4">
              Explore All Projects
            </FilledButton>
            <GhostButton onClick={() => navigate('/#contact')} className="px-8 py-4">
              Contact Transmission
            </GhostButton>
          </div>
        </div>
      </div>

      {/* ── Dynamic Fluid Theme Color Expansion Layer (Activated only on path contact) ── */}
      <motion.div
        animate={{
          clipPath: `circle(${clipRadius}% at 50% 0%)`,
        }}
        transition={{ duration: 0.1, ease: 'linear' }}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, #ff4f2b 0%, #ff5d37 45%, #e03916 100%)',
          zIndex: 20,
          pointerEvents: isExpanded ? 'auto' : 'none',
        }}
        className="w-full py-28 md:py-36 px-6 md:px-10 text-center overflow-hidden flex flex-col items-center justify-center"
      >
        {/* Liquid reflection highlights */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.22) 0%, transparent 65%)',
          }}
        />

        <div className="max-w-[1280px] mx-auto relative z-10">
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-void-black/85 font-bold block mb-4">
            // TRANSMISSION COMPLETE · NEXT HORIZON
          </span>

          {/* High-contrast bold dark heading on theme orange */}
          <h2
            className="font-display uppercase text-void-black mb-6"
            style={{ fontSize: 'clamp(34px, 5.5vw, 68px)', letterSpacing: '-0.02em', fontWeight: 500 }}
          >
            Ready to Collaborate?
          </h2>

          <p className="font-sans text-lg md:text-xl text-void-black/90 max-w-2xl mx-auto mb-10 font-medium">
            Whether you need cinematic AI video production, 3D visual design, or creative editing — let's connect.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('/work')}
              className="px-8 py-4 bg-void-black text-bone-white font-mono text-xs uppercase tracking-[0.2em] font-bold rounded-none hover:bg-neutral-900 transition-all shadow-2xl hover:scale-105 active:scale-95"
            >
              Explore All Projects
            </button>
            <button
              onClick={() => navigate('/#contact')}
              className="px-8 py-4 border-2 border-void-black text-void-black font-mono text-xs uppercase tracking-[0.2em] font-bold rounded-none hover:bg-void-black hover:text-bone-white transition-all shadow-lg hover:scale-105 active:scale-95"
            >
              Contact Transmission
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default function About() {
  const [timelineProgress, setTimelineProgress] = useState(0);

  useEffect(() => {
    document.title = 'About Manas Upadhyay (manasxz) | Biography & AI Filmmaking Vision';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-void-black text-bone-white min-h-screen">

      {/* ── Page Header ── */}
      <header className="relative w-full pt-32 pb-20 px-6 md:px-10 border-b border-graphite-border overflow-hidden">
        {/* Ambient glow */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '-10%',
            width: '60%',
            height: '100%',
            background: 'radial-gradient(ellipse at 20% 50%, rgba(255,79,43,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div className="max-w-[1280px] mx-auto relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-ember-orange block mb-5"
          >
            BIOGRAPHY &amp; JOURNEY // MANAS UPADHYAY
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-light uppercase text-bone-white tracking-tight leading-[0.9] max-w-4xl"
            style={{ fontSize: 'clamp(44px, 8vw, 100px)' }}
          >
            Story &amp;{' '}
            <span style={{ color: 'var(--color-ember-orange)' }}>Vision</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              transformOrigin: 'left',
              marginTop: '24px',
              height: '1px',
              maxWidth: '320px',
              background: 'linear-gradient(90deg, #ff4f2b 0%, rgba(60,60,60,0.3) 100%)',
            }}
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="font-mono text-xs text-steel-mid uppercase tracking-widest mt-5"
          >
            AI CONTENT CREATOR · 3D ARTIST · VISUAL DESIGNER · VIDEO EDITOR
          </motion.p>
        </div>
      </header>

      {/* ── Scroll-Driven Timeline with Node & Activation System ── */}
      <TimelineSection onProgressChange={setTimelineProgress} />

      {/* ── Dynamic Fluid Theme Color Contact Section ── */}
      <FluidContactSection timelineProgress={timelineProgress} />

      <Footer />
    </div>
  );
}
