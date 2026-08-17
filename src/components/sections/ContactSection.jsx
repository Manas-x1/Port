/**
 * ContactSection.jsx — Contact section (placeholder)
 * 
 * Simple "Get in Touch" section with email link and social row.
 * Placeholder for now — user will customize later.
 */
import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import FilledButton from '../ui/FilledButton';

export default function ContactSection() {
  return (
    <section
      className="w-full py-20 md:py-32 px-6 md:px-10 snap-section"
      id="contact"
      style={{ backgroundColor: 'var(--color-void-black)' }}
    >
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader title="Get In Touch" number="05" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left — Large CTA heading */}
          <div>
            <h3
              className="text-bone-white uppercase mb-8"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(36px, 6vw, 72px)',
                fontWeight: 300,
                lineHeight: 1,
                letterSpacing: '-0.02em',
              }}
            >
              Let's<br />
              <span style={{ color: 'var(--color-ember-orange)' }}>Collaborate</span>
            </h3>

            <FilledButton href="mailto:hello@manasupadhyay.com">
              Send Email
            </FilledButton>
          </div>

          {/* Right — Info */}
          <div className="flex flex-col justify-end">
            <div className="space-y-6">
              <div>
                <span
                  className="block mb-2"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--color-steel-mid)',
                  }}
                >
                  Email
                </span>
                <a
                  href="mailto:hello@manasupadhyay.com"
                  className="transition-colors duration-300 hover:text-ember-orange"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '18px',
                    color: 'var(--color-bone-white)',
                    textDecoration: 'none',
                  }}
                >
                  hello@manasupadhyay.com
                </a>
              </div>

              <div>
                <span
                  className="block mb-2"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--color-steel-mid)',
                  }}
                >
                  Social
                </span>
                <div className="flex gap-6">
                  {['Instagram', 'LinkedIn', 'Twitter', 'Dribbble'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="transition-colors duration-300 hover:text-ember-orange"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '14px',
                        color: 'var(--color-fog-light)',
                        textDecoration: 'none',
                        textTransform: 'uppercase',
                      }}
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
