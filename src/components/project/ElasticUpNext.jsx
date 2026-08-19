/**
 * ElasticUpNext.jsx — Elastic Pull-Down "UP NEXT" Project Navigation
 * 
 * Features:
 *   - Responds to downward pull/scroll at page bottom with elastic displacement
 *   - Filling power/progress bar indicating pull threshold
 *   - Automatic cinematic page transition on threshold reach
 *   - Elastic snap-back on premature release
 *   - Accessible direct click fallback
 */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

const THRESHOLD = 120; // Pixel pull threshold to trigger next project transition

export default function ElasticUpNext({ nextProject }) {
  const navigate = useNavigate();
  const [pullProgress, setPullProgress] = useState(0); // 0 to 1
  const [isArmed, setIsArmed] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  const containerRef = useRef(null);
  const currentPull = useRef(0);
  const controls = useAnimation();
  const touchStartY = useRef(0);

  const triggerNavigation = useCallback(() => {
    if (isNavigating || !nextProject) return;
    setIsNavigating(true);
    controls.start({
      scale: 1.03,
      opacity: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    });
    setTimeout(() => {
      navigate(`/project/${nextProject.slug}`);
    }, 450);
  }, [isNavigating, nextProject, controls, navigate]);

  useEffect(() => {
    if (!nextProject) return;

    /* Handle mouse wheel pull when at bottom of page */
    const handleWheel = (e) => {
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 15;

      if (isAtBottom && e.deltaY > 0 && !isNavigating) {
        currentPull.current = Math.min(THRESHOLD + 40, currentPull.current + e.deltaY * 0.45);
        const progress = Math.min(1, currentPull.current / THRESHOLD);
        setPullProgress(progress);
        setIsArmed(progress >= 1);

        controls.start({ y: -currentPull.current * 0.4, transition: { duration: 0.1 } });

        if (progress >= 1 && !isNavigating) {
          triggerNavigation();
        }

        // Reset pull if user stops scrolling after brief delay
        clearTimeout(window.__pullResetTimer);
        window.__pullResetTimer = setTimeout(() => {
          if (currentPull.current < THRESHOLD) {
            currentPull.current = 0;
            setPullProgress(0);
            setIsArmed(false);
            controls.start({ y: 0, transition: { type: 'spring', stiffness: 300, damping: 25 } });
          }
        }, 300);
      }
    };

    /* Handle touch pull for mobile devices */
    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 15;
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY.current - touchY;

      if (isAtBottom && deltaY > 0 && !isNavigating) {
        currentPull.current = Math.min(THRESHOLD + 40, deltaY * 0.7);
        const progress = Math.min(1, currentPull.current / THRESHOLD);
        setPullProgress(progress);
        setIsArmed(progress >= 1);

        controls.start({ y: -currentPull.current * 0.4, transition: { duration: 0.1 } });

        if (progress >= 1 && !isNavigating) {
          triggerNavigation();
        }
      }
    };

    const handleTouchEnd = () => {
      if (currentPull.current < THRESHOLD) {
        currentPull.current = 0;
        setPullProgress(0);
        setIsArmed(false);
        controls.start({ y: 0, transition: { type: 'spring', stiffness: 300, damping: 25 } });
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
  }, [nextProject, isNavigating, controls, triggerNavigation]);

  if (!nextProject) return null;

  return (
    <section
      ref={containerRef}
      className="relative w-full py-24 px-6 md:px-10 bg-void-black border-t border-graphite-border overflow-hidden select-none"
    >
      <motion.div animate={controls} className="max-w-[1280px] mx-auto text-center">
        {/* Subtitle */}
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-steel-mid mb-4">
          <Zap size={14} className={isArmed ? 'text-ember-orange animate-pulse' : ''} />
          <span>PULL DOWN OR CLICK FOR NEXT CASE STUDY</span>
        </div>

        {/* Dynamic Power Bar */}
        <div className="w-full max-w-md mx-auto h-1.5 bg-carbon border border-graphite-border my-6 overflow-hidden relative">
          <div
            className="h-full bg-ember-orange transition-all duration-75"
            style={{ width: `${pullProgress * 100}%` }}
          />
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

        {/* Direct Click Action Trigger */}
        <button
          onClick={triggerNavigation}
          className="cursor-pointer inline-flex items-center gap-3 px-8 py-4 bg-carbon border border-graphite-border hover:border-ember-orange font-mono text-xs uppercase tracking-widest text-bone-white hover:text-ember-orange transition-all group"
        >
          <span>{isArmed ? 'Release to Load' : 'Explore Next Case Study'}</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </section>
  );
}
