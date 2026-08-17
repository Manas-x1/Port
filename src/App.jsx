/**
 * App.jsx — Root application component
 * 
 * Clean route structure:
 *   /                → Home (all sections)
 *   /about           → About page
 *   /project/:slug   → Dynamic project detail page
 * 
 * Shared layout: Navbar wraps all pages.
 * LoadingScreen handles entry animation + route transitions.
 */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import LoadingScreen from './components/ui/LoadingScreen';
import Home from './pages/Home';
import About from './pages/About';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <Router>
      {/* Loading screen — entry animation + route transitions */}
      <LoadingScreen />

      {/* Navigation — fixed, always visible */}
      <Navbar />

      {/* Page routes */}
      <main className="w-full min-h-screen" style={{ backgroundColor: 'var(--color-void-black)' }}>
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
