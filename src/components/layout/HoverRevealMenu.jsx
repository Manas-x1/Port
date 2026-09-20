/**
 * HoverRevealMenu.jsx — Full-screen hover reveal navigation menu
 * 
 * Features:
 *   - Active route & section indicator (small glowing indicator dot/tag in front of active item)
 *   - Current active page becomes unclickable/disabled while other links remain active
 *   - Keyboard shortcut: ESC to close overlay
 */
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

/* Menu items configuration */
const MENU_ITEMS = [
  { label: 'Home', path: '/', counter: '01' },
  { label: 'About', path: '/about', counter: '02' },
  { label: 'Works', path: '/work', counter: '03' },
  { label: 'Skills', path: '/#skills', counter: '04' },
  { label: 'Contact', path: '/#contact', counter: '05' },
];

const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/someone_on.the_internet',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/manas-u-33245a288',
  },
];

export default function HoverRevealMenu({ isOpen, onClose }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

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

  /* Helper to check if menu item is currently active */
  const checkIsActive = (item) => {
    const currentPath = location.pathname;
    const currentHash = window.location.hash;

    if (item.path === '/') {
      return currentPath === '/' && (!currentHash || currentHash === '#top');
    }
    if (item.path === '/about') {
      return currentPath === '/about';
    }
    if (item.path === '/work') {
      return currentPath === '/work';
    }
    if (item.path.startsWith('/#')) {
      const hash = item.path.substring(1);
      return currentPath === '/' && currentHash === hash;
    }
    return false;
  };

  const handleItemClick = (e, path, isActive) => {
    e.preventDefault();
    if (isActive) return; // Unclickable if currently on that page

    onClose();

    if (path.startsWith('/#')) {
      const hash = path.substring(1);
      if (window.location.pathname !== '/') {
        navigate('/');
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
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-8 right-10 z-10 cursor-pointer group flex items-center gap-2"
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

      {/* Menu items container */}
      <nav className="h-full flex flex-col justify-center px-10 md:px-20 lg:px-32">
        <ul className="list-none m-0 p-0 space-y-3 md:space-y-5">
          {MENU_ITEMS.map((item) => {
            const isActive = checkIsActive(item);

            return (
              <li key={item.path} className="menu-item">
                <div className="menu-item-inner flex items-center gap-4 md:gap-6">
                  <span className="menu-counter font-mono text-xs md:text-sm text-steel-mid">
                    {item.counter}
                  </span>

                  {/* Active Indicator & Item Label */}
                  <div className="flex items-center gap-3">
                    {isActive && (
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-carbon border border-ember-orange font-mono text-[10px] uppercase text-ember-orange tracking-widest animate-pulse">
                        <span className="w-1.5 h-1.5 rounded-full bg-ember-orange" />
                        ACTIVE
                      </span>
                    )}

                    <a
                      href={item.path}
                      onClick={(e) => handleItemClick(e, item.path, isActive)}
                      tabIndex={isActive ? -1 : 0}
                      className={`menu-link font-display text-2xl md:text-5xl uppercase font-light transition-all no-underline ${
                        isActive
                          ? 'text-ember-orange pointer-events-none cursor-default opacity-90'
                          : 'text-bone-white hover:text-ember-orange cursor-pointer'
                      }`}
                    >
                      {item.label}
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Social links */}
        <div className="menu-item mt-12 md:mt-16 pt-8 border-t border-graphite-border">
          <div className="menu-item-inner flex gap-8">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-ember-orange font-mono text-xs md:text-sm uppercase tracking-widest text-steel-mid no-underline"
              >
                {social.label} ↗
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
