/**
 * Footer.jsx — Compact, high-precision site footer with dual-column links & brand lockup
 */
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Logo from '../ui/Logo';

export default function Footer() {
  const navigate = useNavigate();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Works', path: '/work' },
    { label: 'Skills', path: '/#skills' },
    { label: 'Contact', path: '/#contact' },
  ];

  const socialLinks = [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/someone_on.the_internet',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/manas-u-33245a288',
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
    <footer className="w-full py-10 md:py-12 px-6 md:px-10 bg-void-black border-t border-graphite-border select-none">
      <div className="max-w-[1280px] mx-auto">
        {/* Main Footer Layout — Left Brand Lockup + Right Dual Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-8">
          
          {/* Left Column: Logo, Name & Tagline */}
          <div className="md:col-span-7 space-y-3">
            <Link
              to="/"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center gap-3 no-underline group"
            >
              <Logo className="w-7 h-7" />
              <span className="font-display font-light text-xl md:text-2xl tracking-tight text-bone-white uppercase group-hover:text-ember-orange transition-colors">
                Manas Upadhyay
              </span>
            </Link>

            <p className="font-sans text-xs md:text-sm text-steel-mid max-w-md leading-relaxed">
              AI Content Creator, 3D Artist, Video Editor & Filmmaker crafting immersive digital stories and cinematic visual worlds.
            </p>
          </div>

          {/* Right Column: Neatly Organized Navigation & Connect Columns */}
          <div className="md:col-span-5 grid grid-cols-2 gap-6">
            {/* Index Navigation */}
            <div>
              <span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-steel-mid mb-3">
                Index
              </span>
              <ul className="space-y-2 m-0 p-0 list-none font-mono text-xs uppercase tracking-wider">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={(e) => handleNavClick(e, link.path)}
                      className="text-fog-light hover:text-ember-orange transition-colors no-underline block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Connect */}
            <div>
              <span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-steel-mid mb-3">
                Connect
              </span>
              <ul className="space-y-2 m-0 p-0 list-none font-mono text-xs uppercase tracking-wider">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-fog-light hover:text-ember-orange transition-colors no-underline block"
                    >
                      {link.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Specification Bar */}
        <div className="pt-6 border-t border-graphite-border flex flex-col sm:flex-row justify-between items-center gap-3 font-mono text-[11px] uppercase text-steel-mid tracking-widest">
          <span>© 2026 MANAS UPADHYAY. ALL RIGHTS RESERVED.</span>
          <span>DESIGNED & BUILT WITH PRECISION</span>
        </div>
      </div>
    </footer>
  );
}
