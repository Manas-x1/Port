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
import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

import Navbar from './components/layout/Navbar';
import LoadingScreen from './components/ui/LoadingScreen';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import ProjectDetail from './pages/ProjectDetail';
import NotFound from './pages/NotFound';

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

  /* Initialize Lenis smooth scroll */
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <ScrollToTop lenisRef={lenisRef} />

      {/* Entry animation & route transition loader */}
      <LoadingScreen />

      {/* Fixed top navigation bar */}
      <Navbar />

      {/* Page router */}
      <main className="w-full min-h-screen bg-void-black text-bone-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
