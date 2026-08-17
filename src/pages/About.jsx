/**
 * About.jsx — About page (placeholder)
 * 
 * Extended bio and experience timeline placeholder.
 * User will update content later.
 */
import React, { useEffect } from 'react';
import Footer from '../components/layout/Footer';
import FilledButton from '../components/ui/FilledButton';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();

  /* Scroll to top on mount + reveal observer */
  useEffect(() => {
    window.scrollTo(0, 0);

    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full">
      {/* Hero-style header */}
      <header
        className="relative w-full h-[60vh] flex items-center overflow-hidden px-6 md:px-10"
        style={{ backgroundColor: 'var(--color-void-black)' }}
      >
        <div className="max-w-[1280px] mx-auto w-full pt-24">
          <span
            className="block mb-4"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-ember-orange)',
            }}
          >
            About
          </span>
          <h1
            className="text-bone-white uppercase"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(40px, 8vw, 80px)',
              fontWeight: 300,
              lineHeight: 1,
              letterSpacing: '-0.02em',
            }}
          >
            Manas<br />Upadhyay
          </h1>
        </div>
      </header>

      {/* Bio section */}
      <section
        className="py-20 md:py-32 px-6 md:px-10"
        style={{
          backgroundColor: 'var(--color-void-black)',
          borderTop: '1px solid var(--color-graphite-border)',
        }}
      >
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 reveal">
          <div>
            <span
              className="block mb-4"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-steel-mid)',
              }}
            >
              Biography
            </span>
            <h2
              className="text-bone-white uppercase mb-8"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px, 4vw, 48px)',
                fontWeight: 300,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              The<br />
              <span style={{ color: 'var(--color-ember-orange)' }}>Story</span>
            </h2>
          </div>

          <div className="md:pt-4">
            <p
              className="mb-6"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '18px',
                lineHeight: 1.6,
                color: 'var(--color-fog-light)',
              }}
            >
              I am a multidisciplinary creative working at the intersection of artificial intelligence, 3D design, filmmaking, and visual storytelling. With years of experience across tools like Blender, Substance Painter, Adobe Creative Suite, and cutting-edge generative AI platforms, I build immersive digital experiences that push the boundaries of what's possible.
            </p>
            <p
              className="mb-6"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                lineHeight: 1.6,
                color: 'var(--color-steel-mid)',
              }}
            >
              My work spans AI-generated content creation, motion graphics, short film production, and interactive web experiences. I believe in the power of combining human creativity with machine intelligence to tell stories that wouldn't exist otherwise.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                lineHeight: 1.6,
                color: 'var(--color-steel-mid)',
                fontStyle: 'italic',
              }}
            >
              This section will be updated with the full biography and experience timeline. Check back soon.
            </p>
          </div>
        </div>
      </section>

      {/* Experience placeholder */}
      <section
        className="py-16 md:py-24 px-6 md:px-10"
        style={{
          backgroundColor: 'var(--color-carbon)',
          borderTop: '1px solid var(--color-graphite-border)',
          borderBottom: '1px solid var(--color-graphite-border)',
        }}
      >
        <div className="max-w-[1280px] mx-auto reveal">
          <span
            className="block mb-8"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-steel-mid)',
            }}
          >
            Experience Timeline
          </span>

          <p
            className="mb-8"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              color: 'var(--color-steel-mid)',
              fontStyle: 'italic',
            }}
          >
            Experience entries will be added here. This section is a placeholder.
          </p>

          <FilledButton onClick={() => navigate('/')}>
            Back to Home
          </FilledButton>
        </div>
      </section>

      <Footer />
    </div>
  );
}
