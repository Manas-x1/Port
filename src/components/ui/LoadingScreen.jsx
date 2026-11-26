/**
 * LoadingScreen.jsx — opening title card + route transition veil.
 *
 * First visit per session: a slow title card ("A portfolio by / Manas Upadhyay").
 * Click, scroll, or Enter lets the visitor in; scroll is locked until then.
 * Route changes: a short black veil with a thin rule drawing across.
 */
import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

function readEntered() {
  // Only the home page gets the title card; a shared project link opens straight to it
  if (typeof window !== 'undefined' && window.location.pathname !== '/') return true;
  try {
    return sessionStorage.getItem('portfolio_entered') === 'true';
  } catch {
    return false;
  }
}

function Rise({ children, delay = 0, className = '' }) {
  return (
    <span className={`block overflow-hidden pt-[0.12em] -mt-[0.12em] pb-[0.06em] ${className}`}>
      <motion.span
        className="block"
        initial={{ y: '110%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 1.4, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function LoadingScreen() {
  const location = useLocation();
  const [hasEntered, setHasEntered] = useState(readEntered);
  const [isInitialLoading, setIsInitialLoading] = useState(!hasEntered);
  const [isTransitionLoading, setIsTransitionLoading] = useState(false);
  const lastPath = useRef(location.pathname);
  const enterRef = useRef(null);

  const handleEnterSite = () => {
    setHasEntered(true);
    try { sessionStorage.setItem('portfolio_entered', 'true'); } catch { /* storage blocked */ }
    setIsInitialLoading(false);
  };
  enterRef.current = handleEnterSite;

  // Lock scroll while the title card is up; a deliberate scroll or key lets the visitor in
  useEffect(() => {
    if (!isInitialLoading) return;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    window.__lenis?.stop();

    const block = (e) => {
      e.preventDefault();
      if (e.type === 'wheel' && Math.abs(e.deltaY) > 20) enterRef.current?.();
    };
    let touchY = null;
    const onTouchStart = (e) => { touchY = e.touches[0].clientY; };
    const onTouchMove = (e) => {
      e.preventDefault();
      if (touchY !== null && Math.abs(touchY - e.touches[0].clientY) > 40) enterRef.current?.();
    };
    const onKey = (e) => {
      if (['Space', 'PageUp', 'PageDown', 'End', 'Home', 'ArrowUp', 'ArrowDown'].includes(e.code)) e.preventDefault();
      if (['Enter', 'Space', 'ArrowDown', 'PageDown'].includes(e.code)) enterRef.current?.();
    };

    window.addEventListener('wheel', block, { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('keydown', onKey, { passive: false });
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      window.__lenis?.start();
      window.removeEventListener('wheel', block);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('keydown', onKey);
    };
  }, [isInitialLoading]);

  // Route transition veil
  useEffect(() => {
    if (!hasEntered) return;
    // Only a real route change gets the veil (not first load, not a re-run of this effect)
    if (lastPath.current === location.pathname) return;
    lastPath.current = location.pathname;
    setIsTransitionLoading(true);
    const timer = setTimeout(() => {
      setIsTransitionLoading(false);
      // Scroll position is App's job (top for new pages, restored on Back)
      window.__lenis?.resize();
    }, 450);
    return () => clearTimeout(timer);
  }, [location.pathname, hasEntered]);

  return (
    <>
      <AnimatePresence>
        {isInitialLoading && (
          <motion.div
            key="entry-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1, ease: EASE } }}
            onClick={handleEnterSite}
            onKeyDown={(e) => e.key === 'Enter' && handleEnterSite()}
            role="button"
            tabIndex={0}
            aria-label="Enter the portfolio"
            className="fixed inset-0 z-[9999] bg-void-black select-none cursor-pointer grain"
          >
            <div className="shell h-full flex flex-col justify-end gap-16 pt-6 sm:pt-8 pb-20">

              <div>
                <Rise delay={0.3} className="t-serif text-fog-light text-3xl sm:text-5xl mb-2 sm:mb-3">
                  A portfolio by
                </Rise>
                <h1 className="m-0 font-display font-extrabold uppercase leading-[0.88] tracking-[-0.04em] text-bone-white" style={{ fontSize: 'clamp(52px, 14vw, 190px)' }}>
                  <Rise delay={0.45}>Manas</Rise>
                  <Rise delay={0.6}>Upadhyay</Rise>
                </h1>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.6 }}
                className="rule-t pt-4 flex justify-between gap-4 t-label text-fog-light"
              >
                <span>Tap, scroll or press Enter</span>
                <span className="text-ember-orange" aria-hidden="true">↓</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isTransitionLoading && (
          <motion.div
            key="transition-loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            className="fixed inset-0 z-[9998] bg-void-black flex items-center justify-center"
            aria-hidden="true"
          >
            <div className="w-40 h-px bg-graphite-border overflow-hidden relative">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.42, ease: EASE }}
                className="absolute inset-0 bg-bone-white origin-left"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
