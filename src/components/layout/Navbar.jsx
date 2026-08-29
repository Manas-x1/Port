/**
 * Navbar.jsx — Top navigation bar with official logo & floating ContactModal
 */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HoverRevealMenu from './HoverRevealMenu';
import Logo from '../ui/Logo';
import ContactModal from '../ui/ContactModal';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (window.location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--color-graphite-border)',
        }}
      >
        <div className="w-full max-w-[1280px] mx-auto flex justify-between items-center px-4 sm:px-6 md:px-10 py-3 md:py-4">
          {/* Left: Official MU Logo */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="flex items-center gap-3 no-underline cursor-pointer group"
            aria-label="Home"
          >
            <Logo className="w-6 h-7 md:w-7 md:h-8" />
          </a>

          {/* Right: Floating Contact Trigger & Menu */}
          <div className="flex items-center gap-3 md:gap-6">
            {/* Open Floating Contact Dialog */}
            <button
              onClick={() => setIsContactOpen(true)}
              className="inline-flex items-center justify-center bg-ember-orange text-void-black font-mono text-xs md:text-sm uppercase tracking-wider px-4 py-2 hover:brightness-110 active:scale-95 transition-all select-none cursor-pointer font-medium"
            >
              Reach Out
            </button>

            {/* Menu trigger button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="cursor-pointer group flex items-center gap-2 px-2 py-1.5 border border-graphite-border hover:border-ember-orange transition-colors"
              aria-label="Open menu"
            >
              <div className="flex flex-col gap-[4px]">
                <div className="w-5 h-[1.5px] bg-bone-white group-hover:bg-ember-orange transition-colors" />
                <div className="w-3.5 h-[1.5px] bg-bone-white group-hover:bg-ember-orange transition-colors" />
              </div>
              <span className="hidden md:inline-block font-mono text-xs md:text-sm uppercase tracking-wider text-bone-white group-hover:text-ember-orange transition-colors">
                Menu
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen menu overlay */}
      <HoverRevealMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />

      {/* Floating Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}
