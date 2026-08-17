/**
 * Footer.jsx — Shared site footer with official logo & navigation
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../ui/Logo';

export default function Footer() {
  const navigate = useNavigate();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/#projects' },
    { label: 'Skills', path: '/#skills' },
    { label: 'Contact', path: '/#contact' },
  ];

  const socialLinks = [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/someone_on.the_internet?igsh=ZHR0Znh6cGF3Z3kx',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/manas-u-33245a288?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    },
  ];

  const handleNavClick = (e, path) => {
    if (path.startsWith('/#')) {
      e.preventDefault();
      if (window.location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.querySelector(path.substring(1));
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 500);
      } else {
        const el = document.querySelector(path.substring(1));
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <footer className="w-full py-16 md:py-24 px-6 md:px-10 bg-void-black border-t border-graphite-border relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-16">
          {/* Col 1: Logo & Name */}
          <div className="md:col-span-2 space-y-4">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-3 no-underline group"
            >
              <Logo className="w-8 h-8" />
              <span className="font-display font-light text-2xl tracking-tight text-bone-white uppercase">
                Manas Upadhyay
              </span>
            </a>
            <p className="font-body text-sm text-steel-mid max-w-sm">
              AI Content Creator, 3D Artist, Video Editor & Filmmaker crafting immersive digital stories.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <span className="block font-mono text-xs uppercase tracking-widest text-steel-mid mb-4">
              Navigation
            </span>
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className="block font-mono text-sm text-fog-light hover:text-ember-orange transition-colors no-underline uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Col 3: Connect */}
          <div className="space-y-3">
            <span className="block font-mono text-xs uppercase tracking-widest text-steel-mid mb-4">
              Connect
            </span>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block font-mono text-sm text-fog-light hover:text-ember-orange transition-colors no-underline uppercase tracking-wider"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-graphite-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="font-mono text-xs uppercase text-steel-mid tracking-wider">
            © 2026 MANAS UPADHYAY. ALL RIGHTS RESERVED.
          </span>
          <span className="font-mono text-xs uppercase text-steel-mid tracking-wider">
            DESIGNED & BUILT WITH PRECISION
          </span>
        </div>
      </div>
    </footer>
  );
}
