/**
 * Navbar.jsx — Top navigation bar
 * 
 * Ori design: Transparent/black background, Chivo Mono labels.
 * Left: "MANAS" wordmark. Right: Menu trigger + Contact CTA.
 * Triggers the HoverRevealMenu overlay when menu button is clicked.
 * Fixed position, z-50 — always visible on scroll.
 */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HoverRevealMenu from './HoverRevealMenu';
import FilledButton from '../ui/FilledButton';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  /* Scroll to contact section or navigate to home first */
  const handleContactClick = () => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector('#contact');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 600);
    } else {
      const el = document.querySelector('#contact');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* ---- Fixed navigation bar ---- */}
      <nav
        className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--color-graphite-border)',
        }}
      >
        <div className="w-full max-w-[1280px] mx-auto flex justify-between items-center px-6 md:px-10 py-4">
          {/* Left: Wordmark */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="no-underline cursor-pointer"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '16px',
              fontWeight: 400,
              color: 'var(--color-bone-white)',
              textDecoration: 'none',
              letterSpacing: '0.05em',
            }}
          >
            MANAS
          </a>

          {/* Right: Menu button + Contact CTA */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Contact CTA — only on larger screens */}
            <div className="hidden md:block">
              <FilledButton onClick={handleContactClick}>
                Contact
              </FilledButton>
            </div>

            {/* Menu trigger button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="cursor-pointer group flex items-center gap-2"
              aria-label="Open navigation menu"
              style={{
                background: 'none',
                border: 'none',
                padding: '8px 0',
              }}
            >
              {/* Hamburger icon — two horizontal lines */}
              <div className="flex flex-col gap-[5px]">
                <div
                  className="w-6 h-[1.5px] transition-all duration-300 group-hover:w-5"
                  style={{ backgroundColor: 'var(--color-bone-white)' }}
                />
                <div
                  className="w-4 h-[1.5px] transition-all duration-300 group-hover:w-6"
                  style={{ backgroundColor: 'var(--color-bone-white)' }}
                />
              </div>

              <span
                className="hidden md:inline-block transition-colors duration-300 group-hover:text-ember-orange"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  color: 'var(--color-bone-white)',
                }}
              >
                Menu
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* ---- Full-screen menu overlay ---- */}
      <HoverRevealMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}
