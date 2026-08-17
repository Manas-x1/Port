/**
 * HoverRevealMenu.jsx — Full-screen hover reveal navigation menu
 * 
 * Ported from toggleSupply's hoverRevealMenu (CSS-first pattern).
 * Adapted to React with framer-motion for the overlay animation.
 * Menu items use CSS staggered transitions (defined in index.css).
 * 
 * Ori palette: Void Black overlay, Bone White text, Ember Orange on hover.
 * 
 * Props:
 *   isOpen: boolean — Whether the menu is visible
 *   onClose: function — Called when menu should close
 *   onNavigate: function — Called with path when a menu item is clicked
 */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/* Menu items configuration */
const MENU_ITEMS = [
  { label: 'Home', path: '/', counter: '01' },
  { label: 'About', path: '/about', counter: '02' },
  { label: 'Projects', path: '/#projects', counter: '03' },
  { label: 'Skills', path: '/#skills', counter: '04' },
  { label: 'Contact', path: '/#contact', counter: '05' },
];

export default function HoverRevealMenu({ isOpen, onClose }) {
  const navigate = useNavigate();

  /* Close on Escape key */
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  /* Lock body scroll when open */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  /* Handle menu item click — navigate and close */
  const handleItemClick = (e, path) => {
    e.preventDefault();
    onClose();

    /* Handle hash links on home page */
    if (path.startsWith('/#')) {
      const hash = path.substring(1); // e.g., "#projects"
      if (window.location.pathname !== '/') {
        navigate('/');
        /* Wait for route change, then scroll to section */
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 600);
      } else {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate(path);
    }
  };

  return (
    <div
      className={`menu-overlay ${isOpen ? 'is-open' : ''}`}
      aria-hidden={!isOpen}
    >
      {/* Close button — top right */}
      <button
        onClick={onClose}
        className="absolute top-8 right-10 z-10 cursor-pointer group"
        aria-label="Close menu"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '14px',
          textTransform: 'uppercase',
          color: 'var(--color-steel-mid)',
          background: 'none',
          border: 'none',
          letterSpacing: '0.1em',
        }}
      >
        <span className="group-hover:text-ember-orange transition-colors duration-300">
          Close ✕
        </span>
      </button>

      {/* Menu items container — centered vertically */}
      <nav className="h-full flex flex-col justify-center px-10 md:px-20 lg:px-32">
        <ul className="list-none m-0 p-0 space-y-4 md:space-y-6">
          {MENU_ITEMS.map((item) => (
            <li key={item.path} className="menu-item">
              <div className="menu-item-inner flex items-baseline gap-6">
                {/* Counter label */}
                <span className="menu-counter">{item.counter}</span>

                {/* Menu link */}
                <a
                  href={item.path}
                  onClick={(e) => handleItemClick(e, item.path)}
                  className="menu-link"
                >
                  {item.label}
                </a>
              </div>
            </li>
          ))}
        </ul>

        {/* Bottom info — social links */}
        <div className="menu-item mt-16 md:mt-24">
          <div className="menu-item-inner flex gap-8">
            {['Instagram', 'LinkedIn', 'Twitter', 'Dribbble'].map((social) => (
              <a
                key={social}
                href="#"
                className="transition-colors duration-300 hover:text-ember-orange"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '14px',
                  color: 'var(--color-steel-mid)',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                }}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
