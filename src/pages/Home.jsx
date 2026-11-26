/**
 * Home.jsx — Hero → Statement → About (01) → Selected work (02) → Contact (03) → Footer
 */
import React, { useEffect } from 'react';
import HeroSection from '../components/sections/HeroSection';
import StatementBand from '../components/sections/StatementBand';
import AboutSection from '../components/sections/AboutSection';
import ProjectsShowcase from '../components/sections/ProjectsShowcase';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/layout/Footer';
import useReveal from '../hooks/useReveal';

export default function Home() {
  useEffect(() => {
    document.title = 'Manas Upadhyay (manasxz) | AI Content Creator, 3D Artist & Visual Designer';
  }, []);
  useReveal();

  return (
    <div className="w-full">
      <HeroSection />
      <StatementBand />
      <AboutSection />
      <ProjectsShowcase />
      <ContactSection />
      <Footer />
    </div>
  );
}
