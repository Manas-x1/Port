/**
 * App.jsx — Root application component with Lenis Smooth Scroll & Global ScrollToTop
 * 
 * Clean route structure:
 *   /                → Home (all sections)
 *   /about           → About page
 *   /work            → Work archive page
 *   /project/:slug   → Dynamic project detail page
 * 
 * Shared layout: Navbar wraps all pages.
 * Lenis integration provides buttery smooth physics-based scrolling with instant route scroll reset.
 */
import React, { Suspense, lazy, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import Lenis from 'lenis';
import { MotionConfig } from 'framer-motion';
import 'lenis/dist/lenis.css';
import { detectHardwareAcceleration } from './utils/renderingMode';

// Detect GPU availability once at module load — synchronous, cached.
// Components read this to decide whether to use WebGL or static fallbacks.
const HW_ACCEL = detectHardwareAcceleration();

// Expose globally so any component can read without prop-drilling
if (typeof window !== 'undefined') {
  window.__hwAccel = HW_ACCEL;
  // Data attribute so CSS can react: [data-hw="0"] selectors
  document.documentElement.setAttribute('data-hw', HW_ACCEL ? '1' : '0');
}

import Navbar from './components/layout/Navbar';
import LoadingScreen from './components/ui/LoadingScreen';
import GradualBlur from './components/ui/GradualBlur';
import Home from './pages/Home';
// Secondary routes are split out so the home page doesn't ship their code up front
const About = lazy(() => import('./pages/About'));
const Work = lazy(() => import('./pages/Work'));
const Skills = lazy(() => import('./pages/Skills'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const NotFound = lazy(() => import('./pages/NotFound'));

/* Scroll on route change: new pages start at the top; Back/Forward returns to where
   the visitor was (e.g. back from a project lands on the same spot in the archive). */
// Kept in sessionStorage so the spot survives leaving the site (Instagram, mail) and coming back
const SCROLL_KEY = 'scroll_positions';
const scrollPositions = (() => {
  try { return new Map(JSON.parse(sessionStorage.getItem(SCROLL_KEY) || '[]')); } catch { return new Map(); }
})();
const persistScroll = () => {
  try { sessionStorage.setItem(SCROLL_KEY, JSON.stringify([...scrollPositions].slice(-50))); } catch { /* storage blocked */ }
};
if (typeof window !== 'undefined') window.addEventListener('pagehide', persistScroll);

function scrollToY(y, lenisRef) {
  if (lenisRef.current) lenisRef.current.scrollTo(y, { immediate: true, force: true });
  else window.scrollTo(0, y);
}

function ScrollToTop({ lenisRef }) {
  const { pathname, hash, key } = useLocation();
  const navType = useNavigationType();

  // Remember the scroll position of the current history entry
  useEffect(() => {
    let raf = 0;
    const save = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => { scrollPositions.set(`${key}|${pathname}`, window.scrollY); persistScroll(); });
    };
    window.addEventListener('scroll', save, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', save);
    };
  }, [key, pathname]);

  useEffect(() => {
    if (window.history.scrollRestoration) window.history.scrollRestoration = 'manual';

    if (hash) {
      const timer = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          if (lenisRef.current) lenisRef.current.scrollTo(el);
          else el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }

    const saved = navType === 'POP' ? scrollPositions.get(`${key}|${pathname}`) : undefined;
    scrollToY(0, lenisRef);
    if (!saved) return;

    // The page may still be loading (lazy route, images): retry until it is tall enough
    let tries = 0;
    const timer = setInterval(() => {
      lenisRef.current?.resize();
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max >= saved - 4 || ++tries > 30) {
        scrollToY(Math.min(saved, max), lenisRef);
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [pathname, hash, key, navType, lenisRef]);

  return null;
}

function App() {
  const lenisRef = useRef(null);

  /* Initialize Lenis smooth scroll — ONLY when hardware acceleration is available.
     In software rendering mode, Lenis's rAF loop competes with LightRays
     on the single CPU thread, contributing to the FPS collapse. Native browser
     scroll is perfectly smooth and costs zero JS when GPU is off. */
  useEffect(() => {
    if (!HW_ACCEL) return; // Skip Lenis entirely on software renderers
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      // 2s with a 0.7 wheel multiplier felt like dragging through syrup; this keeps
      // the glide but lands where the reader aimed
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
      infinite: false,
    });

    lenisRef.current = lenis;
    window.__lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      window.__lenis = null;
      lenis.destroy();
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
    <Router>
      <ScrollToTop lenisRef={lenisRef} />

      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[10001] focus:px-4 focus:py-3 focus:bg-bone-white focus:text-void-black t-label">
        Skip to content
      </a>

      {/* Entry animation & route transition loader */}
      <LoadingScreen />

      {/* Fixed top navigation bar */}
      <Navbar />

      {/* Page router */}
      <main id="main" tabIndex={-1} className="outline-none w-full min-h-screen bg-void-black text-bone-white">
        <Suspense fallback={<div className="min-h-screen bg-void-black" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </main>

      {/* Global Gradual Blur at the top edge of the viewport */}
      <GradualBlur
        target="page"
        position="top"
        height="5rem"
        strength={2.5}
        divCount={6}
        curve="bezier"
        exponential={true}
        opacity={0.95}
        zIndex={35}
        useGradientFallback={true}
        fallbackColor="#000000"
      />

      {/* Global Gradual Blur at the bottom edge of the viewport */}
      <GradualBlur
        target="page"
        position="bottom"
        height="3.5rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={0.9}
        zIndex={35}
        useGradientFallback={true}
        fallbackColor="#000000"
      />
    </Router>
    </MotionConfig>
  );
}

export default App;
