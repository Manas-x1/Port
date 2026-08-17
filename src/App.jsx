/**
 * App.jsx — Root application component with Lenis Smooth Scroll
 * 
 * Clean route structure:
 *   /                → Home (all sections)
 *   /about           → About page
 *   /project/:slug   → Dynamic project detail page
 * 
 * Shared layout: Navbar wraps all pages.
 * Lenis integration provides buttery smooth physics-based scrolling.
 */
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

import Navbar from './components/layout/Navbar';
import LoadingScreen from './components/ui/LoadingScreen';
import Home from './pages/Home';
import About from './pages/About';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  /* Initialize Lenis smooth scroll */
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

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
      {/* Entry animation & route transition loader */}
      <LoadingScreen />

      {/* Fixed top navigation bar */}
      <Navbar />

      {/* Page router */}
      <main className="w-full min-h-screen bg-void-black text-bone-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
