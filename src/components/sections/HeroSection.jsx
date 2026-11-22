/**
 * HeroSection.jsx — Type-only title card
 *
 *   - Background: slow light rays, a warm pool under the name, static grain
 *   - Top: days-on-earth counter and local time on one ruled line
 *   - Bottom: serif "Hi, I am" locked to "MANAS", fitted edge to edge
 *   - Bottom edge: disciplines ticker, just above the site-wide 3.5rem fade
 *
 * The comma is the screen's one ember accent.
 */
import React, { Suspense, lazy, useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
// WebGL rays load in their own chunk after first paint; the static glow shows meanwhile
const LightRays = lazy(() => import('../ui/LightRays'));
import Clock from '../ui/Clock';
import useFitText from '../../hooks/useFitText';

const NAME = 'Manas';
const DISCIPLINES = ['AI films', '3D worlds', 'Visual design', 'Video editing', 'Concept art', 'Mythology & sci-fi'];
const EASE = [0.16, 1, 0.3, 1];

const getDaysOnEarth = () => {
  const startDate = new Date(2007, 3, 6); // 6 April 2007
  return Math.floor((Date.now() - startDate.getTime()) / 86_400_000);
};

// Isolated so its tick never re-renders the rest of the hero
function DaysOnEarth() {
  const [days, setDays] = useState(getDaysOnEarth);
  useEffect(() => {
    const timer = setInterval(() => setDays(getDaysOnEarth()), 60_000);
    return () => clearInterval(timer);
  }, []);
  return <span className="tabular-nums">{days.toLocaleString()}</span>;
}

function Ticker() {
  const row = (
    <span className="flex items-center shrink-0" aria-hidden="true">
      {DISCIPLINES.map((d) => (
        <span key={d} className="flex items-center">
          <span className="px-6 sm:px-10">{d}</span>
          <span className="text-steel-mid">/</span>
        </span>
      ))}
    </span>
  );
  return (
    <div className="relative w-full overflow-hidden rule-t rule-b py-3.5 sm:py-4 t-label text-fog-light">
      <span className="sr-only">{DISCIPLINES.join(', ')}</span>
      <div className="flex w-max animate-marquee" style={{ animationDuration: '60s' }}>
        {row}
        {row}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-32 bg-gradient-to-r from-void-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-32 bg-gradient-to-l from-void-black to-transparent" />
    </div>
  );
}

export default function HeroSection() {
  const name = useFitText();
  // Phones: "Hi, / I am" fills the open column, shrinking only if height runs short
  const hi = useFitText({ fitHeight: true });
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative w-full h-svh min-h-[560px] sm:min-h-[680px] flex flex-col overflow-hidden bg-void-black select-none grain">
      {/* ── Background ── */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {!reduceMotion && (
          <Suspense fallback={null}>
            <LightRays
          raysOrigin="top-right"
          raysColor="#ff552e"
          raysSpeed={0.6}
          lightSpread={1.1}
          rayLength={2.4}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.05}
          distortion={0.04}
          saturation={0.9}
          className="w-full h-full"
        />
          </Suspense>
        )}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(90% 55% at 10% 95%, rgba(255,79,43,0.16) 0%, rgba(255,79,43,0.05) 45%, transparent 70%)',
          }}
        />
        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-void-black/80 to-transparent" />
      </div>

      <div className="shell relative z-20 flex-1 min-h-0 pt-20 sm:pt-28 pb-6 sm:pb-8 flex flex-col">
        {/* ── Meta line: counter left, local time right ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.3, ease: EASE }}
          className="flex items-end justify-between gap-6 pb-4 sm:pb-5 rule-b"
        >
          <div className="flex flex-col gap-2">
            <span className="t-label text-steel-mid">Days on Earth</span>
            <span className="font-display font-light text-bone-white text-5xl sm:text-6xl md:text-7xl tracking-[-0.03em] leading-[0.85]">
              <DaysOnEarth />
            </span>
          </div>
          <div className="flex flex-col items-end gap-2 pb-0.5">
            <span className="t-label text-steel-mid">Local time</span>
            <span className="font-mono text-bone-white text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2">
              <Clock />
              <span className="text-steel-mid">IST</span>
            </span>
          </div>
        </motion.div>

        {/* ── Lockup ── */}
        <div className="flex-1 min-h-0 flex flex-col justify-end pt-6">
          {/* Phones: greeting fills the space above the name */}
          <div ref={hi.boxRef} className="md:hidden flex-1 min-h-0 w-full flex items-end">
            <motion.p
              ref={hi.textRef}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.2, ease: EASE }}
              className="inline-flex flex-col m-0 pr-[0.06em] font-serif italic font-normal text-bone-white leading-[0.82] tracking-[-0.02em]"
              style={{ fontSize: hi.fontSize ? `${hi.fontSize}px` : '40vw' }}
            >
              <span>
                Hi<span className="text-ember-orange">,</span>
              </span>
              <span>I am</span>
            </motion.p>
          </div>

          {/* Larger screens: greeting tucked over the name */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.2, ease: EASE }}
            className="hidden md:block m-0 font-serif italic text-bone-white leading-none tracking-[-0.02em]"
            style={{ fontSize: 'clamp(64px, 11vw, 200px)' }}
          >
            Hi<span className="text-ember-orange">,</span> I am
          </motion.p>

          <div ref={name.boxRef} className="relative z-10 w-full -mt-[0.35rem] md:mt-[0.1rem]">
            <h1
              ref={name.textRef}
              aria-label={NAME}
              className="inline-flex whitespace-nowrap m-0 font-display font-extrabold text-bone-white uppercase leading-[0.8] tracking-[-0.045em]"
              style={{ fontSize: name.fontSize ? `${name.fontSize}px` : '20vw', marginRight: '-0.02em' }}
            >
              {NAME.split('').map((ch, i) => (
                <span key={i} className="inline-block overflow-hidden pb-[0.04em] px-[0.08em] -mx-[0.08em]" aria-hidden="true">
                  <motion.span
                    className="inline-block"
                    initial={{ y: '105%' }}
                    animate={{ y: '0%' }}
                    transition={{ duration: 1.4, delay: 0.4 + i * 0.09, ease: EASE }}
                  >
                    {ch}
                  </motion.span>
                </span>
              ))}
            </h1>
          </div>
        </div>
      </div>

      {/* ── Ticker ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 1.1 }}
        className="relative z-20 w-full bg-void-black/60 mb-14"
      >
        <Ticker />
      </motion.div>
    </section>
  );
}
