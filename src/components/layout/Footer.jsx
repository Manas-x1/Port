/**
 * Footer.jsx — Shared site footer
 * 
 * Ori design: Void Black background, Chivo Mono columns.
 * Flat text columns — no dividers, no boxes.
 * Social links + copyright.
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  /* Quick nav links */
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/#projects' },
    { label: 'Contact', path: '/#contact' },
  ];

  /* Social links (placeholders) */
  const socialLinks = [
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Twitter', href: '#' },
    { label: 'Dribbble', href: '#' },
  ];

  const handleNavClick = (e, path) => {
    e.preventDefault();
    if (path.startsWith('/#')) {
      if (window.location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.querySelector(path.substring(1));
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 600);
      } else {
        const el = document.querySelector(path.substring(1));
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate(path);
    }
  };

  return (
    <footer
      className="w-full py-16 md:py-24 px-6 md:px-10"
      style={{
        backgroundColor: 'var(--color-void-black)',
        borderTop: '1px solid var(--color-graphite-border)',
      }}
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Top: Wordmark + Nav + Social */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Wordmark */}
          <div>
            <a
              href="/"
              onClick={(e) => handleNavClick(e, '/')}
              className="no-underline"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '16px',
                color: 'var(--color-bone-white)',
                textDecoration: 'none',
              }}
            >
              MANAS UPADHYAY
            </a>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className="transition-colors duration-300 hover:text-bone-white no-underline"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '14px',
                  color: 'var(--color-steel-mid)',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors duration-300 hover:text-bone-white no-underline"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '14px',
                  color: 'var(--color-steel-mid)',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div
          className="pt-8"
          style={{ borderTop: '1px solid var(--color-graphite-border)' }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '14px',
              color: 'var(--color-steel-mid)',
              textTransform: 'uppercase',
            }}
          >
            © 2026 Manas Upadhyay. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
