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
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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

/* Global ScrollToTop helper for Lenis & Window scroll */
function ScrollToTop({ lenisRef }) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          if (lenisRef.current) {
            lenisRef.current.scrollTo(el);
          } else {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
      return () => clearTimeout(timer);
    }

    // Scroll to top immediately on route change
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname, hash, lenisRef]);

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

      {/* Entry animation & route transition loader */}
      <LoadingScreen />

      {/* Fixed top navigation bar */}
      <Navbar />

      {/* Page router */}
      <main className="w-full min-h-screen bg-void-black text-bone-white">
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
