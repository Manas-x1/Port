/**
 * Navbar.jsx — logo + name left; "Reach out" and Menu right. All targets 40px+.
 */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HoverRevealMenu from './HoverRevealMenu';
import Logo from '../ui/Logo';
import ContactModal from '../ui/ContactModal';
import goTo from '../../utils/goTo';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 pointer-events-none">
        <div className="shell flex justify-between items-center py-3 sm:py-5 pointer-events-auto">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              goTo(navigate, '/');
            }}
            className="flex items-center gap-3 min-h-10 -ml-1 pl-1 pr-2"
            aria-label="Manas Upadhyay, home"
          >
            <Logo className="w-6 h-7" alt="" />
            <span className="hidden sm:inline t-label text-bone-white">Manas Upadhyay</span>
          </a>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setIsContactOpen(true)}
              className="inline-flex items-center h-10 px-4 t-label text-bone-white border border-bone-white/25 bg-void-black/40 hover:bg-bone-white hover:text-void-black transition-colors duration-500 cursor-pointer"
            >
              Reach out
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="group inline-flex items-center justify-center gap-3 h-10 min-w-10 px-3 border border-bone-white/25 bg-void-black/40 hover:bg-bone-white transition-colors duration-500 cursor-pointer"
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
            >
              <span className="flex flex-col gap-[5px]" aria-hidden="true">
                <span className="block w-5 h-px bg-bone-white group-hover:bg-void-black transition-colors duration-500" />
                <span className="block w-5 h-px bg-bone-white group-hover:bg-void-black transition-colors duration-500" />
              </span>
              <span className="hidden md:inline t-label text-bone-white group-hover:text-void-black transition-colors duration-500">
                Menu
              </span>
            </button>
          </div>
        </div>
      </nav>

      <HoverRevealMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} onContact={() => setIsContactOpen(true)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
