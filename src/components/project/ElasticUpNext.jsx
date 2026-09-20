/**
 * ElasticUpNext.jsx — Interactive Pre-loaded Elastic Pull-Down Navigation
 * 
 * Features:
 *   - Predetermined 25% initial load pre-applied to the elastic bar for immediate visual interactivity.
 *   - Automatic state reset on project route changes (ensures section is always visible and functional on every page).
 *   - Smooth touch/wheel physics using IntersectionObserver (eliminates Android address bar height jitter).
 *   - Dynamic tension bar charging from 25% → 100% with glowing power indicator.
 *   - Elastic spring snap-back when released before threshold.
 *   - Clean terminal index navigation built-in.
 */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { ArrowRight, Zap, Home, Grid } from 'lucide-react';

const PULL_THRESHOLD = 100; // Pull distance in pixels required for auto-navigation
const BASE_LOAD = 0.25; // 25% predetermined initial resting load on the elastic bar

export default function ElasticUpNext({ nextProject }) {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [pullProgress, setPullProgress] = useState(BASE_LOAD); // Starts at pre-loaded 25%
  const [isArmed, setIsArmed] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  const pullOffset = useRef(0);
  const touchStartY = useRef(null);
  const controls = useAnimation();

  /* Reset section state on project slug change */
  useEffect(() => {
    setIsNavigating(false);
    setPullProgress(BASE_LOAD);
    setIsArmed(false);
    pullOffset.current = 0;
    controls.start({ opacity: 1, scale: 1, y: 0 });
  }, [nextProject?.slug, controls]);

  /* IntersectionObserver to detect when section is in viewport cleanly on Android & Desktop */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const triggerNavigation = useCallback(() => {
    if (isNavigating || !nextProject) return;
    setIsNavigating(true);

    controls.start({
      scale: 1.02,
      opacity: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    });

    setTimeout(() => {
      navigate(`/project/${nextProject.slug}`);
    }, 400);
  }, [isNavigating, nextProject, controls, navigate]);

  /* Smooth Touch & Wheel Pull Event Handling */
  useEffect(() => {
    if (!isIntersecting || !nextProject || isNavigating) return;

    /* Wheel handling */
    const handleWheel = (e) => {
      // Only engage if scrolling down at bottom of page
      if (e.deltaY > 0) {
        pullOffset.current = Math.min(PULL_THRESHOLD + 30, pullOffset.current + e.deltaY * 0.35);
        const dynamicProgress = BASE_LOAD + (1 - BASE_LOAD) * Math.min(1, pullOffset.current / PULL_THRESHOLD);
        
        setPullProgress(dynamicProgress);
        setIsArmed(dynamicProgress >= 0.98);

        controls.start({ y: -pullOffset.current * 0.3, transition: { duration: 0.05 } });

        if (dynamicProgress >= 0.98 && !isNavigating) {
          triggerNavigation();
        }

        clearTimeout(window.__elasticResetTimer);
        window.__elasticResetTimer = setTimeout(() => {
          if (pullOffset.current < PULL_THRESHOLD) {
            pullOffset.current = 0;
            setPullProgress(BASE_LOAD);
            setIsArmed(false);
            controls.start({ y: 0, transition: { type: 'spring', stiffness: 250, damping: 22 } });
          }
        }, 250);
      }
    };

    /* Touch handling for Android / iOS mobile */
    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (touchStartY.current === null) return;
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY.current - touchY;

      if (deltaY > 0) {
        pullOffset.current = Math.min(PULL_THRESHOLD + 30, deltaY * 0.5);
        const dynamicProgress = BASE_LOAD + (1 - BASE_LOAD) * Math.min(1, pullOffset.current / PULL_THRESHOLD);

        setPullProgress(dynamicProgress);
        setIsArmed(dynamicProgress >= 0.98);

        controls.start({ y: -pullOffset.current * 0.3, transition: { duration: 0.05 } });

        if (dynamicProgress >= 0.98 && !isNavigating) {
          triggerNavigation();
        }
      }
    };

    const handleTouchEnd = () => {
      touchStartY.current = null;
      if (pullOffset.current < PULL_THRESHOLD) {
        pullOffset.current = 0;
        setPullProgress(BASE_LOAD);
        setIsArmed(false);
        controls.start({ y: 0, transition: { type: 'spring', stiffness: 250, damping: 22 } });
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isIntersecting, nextProject, isNavigating, controls, triggerNavigation]);

  if (!nextProject) return null;

  return (
    <section
      ref={containerRef}
      className="relative w-full pt-20 pb-16 px-6 md:px-10 bg-void-black border-t border-graphite-border overflow-hidden select-none"
    >
      <motion.div animate={controls} className="max-w-[1280px] mx-auto text-center">
        {/* Header Tag */}
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-steel-mid mb-3">
          <Zap size={14} className={isArmed ? 'text-ember-orange animate-pulse' : 'text-steel-mid'} />
          <span>{isArmed ? 'LOADED — RELEASE TO TRIGGER' : 'ELASTIC LOADED NEXT CASE STUDY'}</span>
        </div>

        {/* Predetermined Pre-Loaded Elastic Tension Bar */}
        <div className="w-full max-w-lg mx-auto h-2 bg-carbon border border-graphite-border my-6 overflow-hidden relative shadow-[0_0_15px_rgba(255,79,43,0.15)]">
          <div
            className="h-full bg-ember-orange transition-all duration-100 ease-out relative"
            style={{ width: `${pullProgress * 100}%` }}
          >
            {/* Glowing tip indicator */}
            <div className="absolute right-0 top-0 bottom-0 w-3 bg-bone-white shadow-[0_0_10px_#ff4f2b]" />
          </div>
        </div>

        {/* Next Project Title */}
        <h3
          onClick={triggerNavigation}
          className="font-display text-4xl sm:text-6xl md:text-7xl font-light uppercase text-bone-white hover:text-ember-orange transition-colors cursor-pointer tracking-tight my-4"
        >
          {nextProject.title}
        </h3>

        <p className="font-mono text-xs text-steel-mid uppercase tracking-widest mb-8">
          {nextProject.category}
        </p>

        {/* Interactive Action Button */}
        <div className="mb-16">
          <button
            onClick={triggerNavigation}
            className="cursor-pointer inline-flex items-center gap-3 px-8 py-4 bg-carbon border border-graphite-border hover:border-ember-orange font-mono text-xs uppercase tracking-widest text-bone-white hover:text-ember-orange transition-all group"
          >
            <span>{isArmed ? 'Trigger Next Case Study' : 'Pull or Click for Next Case Study'}</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Integrated Clean Navigation Bar (Replacing external footer on project pages) */}
        <div className="pt-8 border-t border-graphite-border flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest text-steel-mid">
          <Link
            to="/"
            className="hover:text-ember-orange transition-colors flex items-center gap-2 no-underline"
          >
            <Home size={14} />
            <span>Portfolio Index</span>
          </Link>

          <span className="text-[11px] text-steel-mid/60">MANAS UPADHYAY // CREATIVE ARCHIVE</span>

          <Link
            to="/work"
            className="hover:text-ember-orange transition-colors flex items-center gap-2 no-underline"
          >
            <Grid size={14} />
            <span>All Works ↗</span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
