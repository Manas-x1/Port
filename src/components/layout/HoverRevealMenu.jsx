/**
 * HoverRevealMenu.jsx — full-screen index.
 * Large links rise in one after another; the current page is marked in serif italic.
 * ESC closes; body scroll is locked while open.
 */
import React, { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Instagram, Linkedin, Mail } from 'lucide-react';
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
                        if (active) {
                          onClose();
                          return;
                        }
                        if (item.path.includes('#')) {
                          // Same-page anchor: close first so scrolling is unlocked, then scroll
                          onClose();
                          setTimeout(() => goTo(navigate, item.path), 60);
                        } else {
                          // New page: navigate first so the page veil covers the screen,
                          // then close the menu underneath it (no flash of the old page)
                          goTo(navigate, item.path);
                          setTimeout(onClose, 120);
                        }
                      }}
                      aria-current={active ? 'page' : undefined}
                      className="group flex items-baseline gap-4 sm:gap-8 py-3 sm:py-4"
                    >
                      <span className="t-label text-steel-mid tabular-nums w-6 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                      {/* The page you're on switches to the serif italic in ember */}
                      <span
                        className={`leading-[0.95] transition-[color,transform] duration-700 ${
                          active
                            ? 't-serif text-ember-orange'
                            : 'font-display font-light uppercase tracking-[-0.03em] text-bone-white group-hover:translate-x-2 group-hover:text-fog-light'
                        }`}
                        style={{ fontSize: active ? 'clamp(46px, 10vw, 128px)' : 'clamp(40px, 9vw, 112px)' }}
                      >
                        {item.label}
                      </span>
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Social links as icons */}
        <div className="pb-8 flex gap-3">
          {[
            ...SOCIALS.map((s) => ({ ...s, Icon: s.label === 'Instagram' ? Instagram : Linkedin, external: true })),
            { label: 'Email', href: `mailto:${CONTACT.email}`, Icon: Mail },
          ].map(({ label, href, Icon, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              title={label}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="inline-flex items-center justify-center w-12 h-12 border border-bone-white/20 text-fog-light hover:text-void-black hover:bg-bone-white hover:border-bone-white transition-colors duration-500"
            >
              <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
