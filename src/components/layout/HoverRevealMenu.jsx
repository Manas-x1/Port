/**
 * HoverRevealMenu.jsx — Full-screen hover reveal navigation menu
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

const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/someone_on.the_internet?igsh=ZHR0Znh6cGF3Z3kx',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/manas-u-33245a288?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  },
];

export default function HoverRevealMenu({ isOpen, onClose }) {
  const navigate = useNavigate();

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

  const handleItemClick = (e, path) => {
    e.preventDefault();
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

      {/* Menu items container */}
      <nav className="h-full flex flex-col justify-center px-10 md:px-20 lg:px-32">
        <ul className="list-none m-0 p-0 space-y-4 md:space-y-6">
          {MENU_ITEMS.map((item) => (
            <li key={item.path} className="menu-item">
              <div className="menu-item-inner flex items-baseline gap-6">
                <span className="menu-counter">{item.counter}</span>
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

        {/* Social links — Instagram & LinkedIn only */}
        <div className="menu-item mt-16 md:mt-24">
          <div className="menu-item-inner flex gap-8">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-ember-orange"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '14px',
                  color: 'var(--color-steel-mid)',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                }}
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
