/**
 * Home.jsx — Home page
 * 
 * Assembles all section components in order:
 * Hero → Statement Band → Projects → About → Skills → Contact
 * Full-page scroll-snap sections for the "book/adventure" feel.
 * Intersection Observer for scroll-reveal animations.
 */
import React, { useEffect } from 'react';
import HeroSection from '../components/sections/HeroSection';
import StatementBand from '../components/sections/StatementBand';
import ProjectsShowcase from '../components/sections/ProjectsShowcase';
import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/layout/Footer';

export default function Home() {
  /* Intersection Observer for scroll reveal animations */
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
      <ProjectsShowcase />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
