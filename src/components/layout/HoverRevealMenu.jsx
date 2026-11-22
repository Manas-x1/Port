/**
 * HoverRevealMenu.jsx — full-screen index.
 * Large links rise in one after another; the current page is marked in serif italic.
 * ESC closes; body scroll is locked while open.
 */
import React, { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import goTo from '../../utils/goTo';
import { CONTACT, SOCIALS, NAV_LINKS } from '../../data/contact';

export default function HoverRevealMenu({ isOpen, onClose }) {
  const navigate = useNavigate();
  const location = useLocation();
  const closeRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    if (isOpen) {
      window.__lenis?.stop();
      closeRef.current?.focus({ preventScroll: true });
    } else {
      window.__lenis?.start();
    }
    return () => {
      document.body.style.overflow = '';
      window.__lenis?.start();
    };
  }, [isOpen]);

  const isActive = (path) => !path.includes('#') && location.pathname === path;

  return (
    <div className={`menu-overlay ${isOpen ? 'is-open' : ''}`} aria-hidden={!isOpen} inert={!isOpen}>
      <div className="shell min-h-full flex flex-col">
        <div className="flex justify-between items-center py-3 sm:py-5">
          <span className="t-label text-steel-mid">Index</span>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-3 h-10 px-4 t-label text-bone-white border border-bone-white/25 hover:bg-bone-white hover:text-void-black transition-colors duration-500 cursor-pointer"
            aria-label="Close menu"
          >
            Close <span aria-hidden="true">✕</span>
          </button>
        </div>

        <nav className="flex-1 flex flex-col justify-center py-10" aria-label="Main">
          <ul className="list-none m-0 p-0 rule-b">
            {NAV_LINKS.map((item, i) => {
              const active = isActive(item.path);
              return (
                <li key={item.path} className="menu-item rule-t">
                  <div className="menu-item-inner">
                    <a
                      href={item.path}
                      onClick={(e) => {
                        e.preventDefault();
                        onClose();
                        // Wait for the close to unlock scrolling (Lenis is stopped while the menu is open,
                        // and it ignores scrollTo calls until restarted)
                        if (!active) setTimeout(() => goTo(navigate, item.path), 60);
                      }}
                      aria-current={active ? 'page' : undefined}
                      className="group flex items-baseline gap-4 sm:gap-8 py-3 sm:py-4"
                    >
                      <span className="t-label text-steel-mid tabular-nums w-6 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                      <span
                        className="font-display font-light uppercase leading-[0.95] tracking-[-0.03em] text-bone-white transition-[color,transform] duration-700 group-hover:translate-x-2 group-hover:text-fog-light"
                        style={{ fontSize: 'clamp(40px, 9vw, 112px)' }}
                      >
                        {item.label}
                      </span>
                      {active && <span className="t-serif text-ember-orange text-xl sm:text-3xl ml-auto">current</span>}
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="pb-8 grid grid-cols-2 sm:flex sm:justify-between gap-y-2 t-label">
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center min-h-10 text-fog-light hover:text-bone-white transition-colors">
              {s.label} ↗
            </a>
          ))}
          <a href={`mailto:${CONTACT.email}`} className="col-span-2 inline-flex items-center min-h-10 text-fog-light hover:text-bone-white transition-colors normal-case tracking-normal font-body text-sm">
            {CONTACT.email}
          </a>
        </div>
      </div>
    </div>
  );
}
