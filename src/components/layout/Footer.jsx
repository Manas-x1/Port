/**
 * Footer.jsx — end credits: index, connect, a fitted wordmark, copyright.
 */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useFitText from '../../hooks/useFitText';
import goTo from '../../utils/goTo';
import { CONTACT, SOCIALS, NAV_LINKS } from '../../data/contact';

export default function Footer() {
  const navigate = useNavigate();
  const mark = useFitText();

  return (
    <footer className="bg-void-black pt-[var(--section-y)] select-none">
      <div className="shell">
        <div className="grid-12 gap-y-10 rule-t pt-10">
          <p className="col-span-4 lg:col-span-6 m-0 t-lead text-fog-light max-w-[32ch]">
            AI content creator, 3D artist, video editor and filmmaker, crafting cinematic stories and visual worlds.
          </p>

          <nav className="col-span-2 lg:col-start-8 lg:col-span-2" aria-label="Footer">
            <span className="block t-label text-steel-mid mb-3">Index</span>
            <ul className="list-none m-0 p-0 t-label">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={(e) => {
                      e.preventDefault();
                      goTo(navigate, link.path);
                    }}
                    className="inline-flex items-center min-h-10 text-bone-white link-line"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-2 lg:col-span-3">
            <span className="block t-label text-steel-mid mb-3">Connect</span>
            <ul className="list-none m-0 p-0 t-label">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center min-h-10 text-bone-white link-line">
                    {s.label} ↗
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center min-h-10 text-bone-white link-line">
                  Email ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Wordmark, fitted to the shell */}
        <div ref={mark.boxRef} className="w-full mt-16 sm:mt-24 overflow-hidden" aria-hidden="true">
          <span
            ref={mark.textRef}
            className="inline-block whitespace-nowrap font-display font-extrabold uppercase leading-[0.78] tracking-[-0.05em] text-bone-white/90"
            style={{ fontSize: mark.fontSize ? `${mark.fontSize}px` : '18vw', marginRight: '-0.02em' }}
          >
            Manasxz
          </span>
        </div>

        <div className="rule-t mt-6 pt-5 pb-20 flex flex-col sm:flex-row justify-between gap-2 t-label text-steel-mid">
          <span>© 2026 Manas Upadhyay</span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
