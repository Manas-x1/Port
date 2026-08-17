/**
 * Home.jsx — Home page
 * 
 * Order of sections:
 * Hero → Statement Band → About (01) → Selected Work (02) → Skills & Tools (03) → Contact (04)
 */
import React, { useEffect } from 'react';
import HeroSection from '../components/sections/HeroSection';
import StatementBand from '../components/sections/StatementBand';
import AboutSection from '../components/sections/AboutSection';
import ProjectsShowcase from '../components/sections/ProjectsShowcase';
import SkillsSection from '../components/sections/SkillsSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/layout/Footer';

export default function Home() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full">
      <HeroSection />
      <StatementBand text="Crafting The Future Through AI & Film" />
      <AboutSection />
      <ProjectsShowcase />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
