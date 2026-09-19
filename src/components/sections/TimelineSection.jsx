/**
 * TimelineSection.jsx - Central Scroll-Revealed Timeline with Lenis Synchronization
 *
 * - Central spine (in the middle: x = W / 2) that syncs 1:1 with Lenis vertical scroll.
 * - True scroll reveal: The path dynamically draws downward with scrollDashoffset.
 * - Traveling energy photon at the tip of the conduit.
 * - Node & Activation System: Each milestone activates upon physical contact with the path.
 * - Ending terminal node connects cleanly to the fluid contact section below.
 */
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import TimelineCard from '../ui/TimelineCard';

/* ───────────────────────────────────────────────────────── */
/* Timeline data                                             */
/* ───────────────────────────────────────────────────────── */
const TIMELINE = [
  {
    year: '2020',
    era: 'The Beginning',
    theme: 'Lockdown',
    body: "A guy who spent his days immersed in music, games, art, and the internet. The world stopped, but his curiosity didn't.",
    index: 0,
  },
  {
    year: '2021',
    era: 'The Spark',
    theme: 'Discovering',
    body: "Started exploring those interests more deeply. Games weren't just something to play anymore; art wasn't just something to look at. The idea of creating things started taking shape.",
    index: 1,
  },
  {
    year: '2022',
    era: 'The Awakening',
    theme: 'Choosing to Be Different',
    body: "10th class. A realization that he didn't want to follow the usual path. Started thinking differently about what he wanted to do and who he wanted to become.",
    index: 2,
  },
  {
    year: '2023',
    era: 'Stepping Out',
    theme: 'Experimenting',
    body: 'Started stepping outside the familiar. Tried new things, explored creative fields, learned through trial and error, and began figuring out what actually felt right.',
    index: 3,
  },
  {
    year: '2024',
    era: 'Learning to Walk',
    theme: 'Game Design & Animation',
    body: 'Started seriously learning game design, 3D, animation, Blender, and the fundamentals of creating digital worlds. Still learning, still falling, but finally moving.',
    index: 4,
  },
  {
    year: '2025',
    era: 'The Sprints',
    theme: 'College & AI',
    body: 'Joined college and started getting hands-on experience with AI and creative technology. Started turning skills into actual work, projects, and experience.',
    index: 5,
  },
  {
    year: '2026',
    era: 'Flying',
    theme: 'Breaking Into the Industry',
    body: "Landed an internship/job and began working with AI art professionally. What started as an interest in games, music, and art had finally turned into something real.",
    index: 6,
  },
];

/* ───────────────────────────────────────────────────────── */
/* Layout constants                                          */
/* ───────────────────────────────────────────────────────── */
const SPACING = 280;            // vertical px between nodes
const TOP_PAD = 80;             // px before first node
const BOT_PAD = 120;            // px after last node to touch bottom seam
const TOTAL_H = TOP_PAD + (TIMELINE.length - 1) * SPACING + BOT_PAD;
const SPINE_LENGTH = TOTAL_H - TOP_PAD;

/* Activation progress thresholds along the path (0 to 1) */
const NODES = TIMELINE.map((item, i) => {
  const fraction = i / (TIMELINE.length - 1);
  // Threshold maps from 0.01 at start to 0.92 at 2026
  const threshold = i === 0 ? 0.01 : +(fraction * 0.92).toFixed(3);
  return {
    ...item,
    side: i % 2 === 0 ? 'left' : 'right',
    y: TOP_PAD + i * SPACING,
    threshold,
  };
});

/* ───────────────────────────────────────────────────────── */
/* Single desktop entry with Central Node Connection         */
/* ───────────────────────────────────────────────────────── */
function DesktopEntry({ node, W, cardWidth, isActive }) {
  const isRight = node.side === 'right';
  const centerX = W * 0.5;
  const branchGap = 36; // horizontal gap between center dot and card edge

  // Card position relative to container
  const cardLeft = isRight
    ? centerX + branchGap
    : centerX - branchGap - cardWidth;

  return (
    <div
      style={{
        position: 'absolute',
        top: node.y,
        left: 0,
        right: 0,
        height: 0,
        zIndex: 2,
      }}
    >
      {/* Horizontal glowing branch connector from center spine to card */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: isRight ? centerX : centerX - branchGap,
          width: branchGap,
          height: 2,
          overflow: 'visible',
          pointerEvents: 'none',
          transform: 'translateY(-50%)',
          zIndex: 10,
        }}
      >
        <line
          x1={0}
          y1={1}
          x2={branchGap}
          y2={1}
          stroke={isActive ? '#ff4f2b' : 'rgba(45,45,52,0.6)'}
          strokeWidth={isActive ? 2 : 1.5}
          strokeDasharray={isActive ? 'none' : '3 3'}
          style={{ transition: 'stroke 0.35s ease, stroke-width 0.35s ease' }}
        />
      </svg>

      {/* Central Milestone Node Dot at x = 50% */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: centerX,
          transform: 'translate(-50%, -50%)',
          zIndex: 20,
        }}
      >
        <motion.div
          animate={{
            backgroundColor: isActive ? '#ff4f2b' : '#141418',
            borderColor: isActive ? '#ffffff' : '#2c2c34',
            boxShadow: isActive
              ? '0 0 0 7px rgba(255,79,43,0.28), 0 0 24px rgba(255,79,43,0.85)'
              : 'none',
            scale: isActive ? 1.25 : 0.85,
          }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          style={{
            width: 14,
            height: 14,
            borderRadius: '50%',
            border: '2px solid',
          }}
        />
      </div>

      {/* Card aligned next to the branch connector */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: cardLeft,
          width: cardWidth,
          transform: 'translateY(-50%)',
        }}
      >
        <TimelineCard
          year={node.year}
          theme={node.theme}
          era={node.era}
          body={node.body}
          isActive={isActive}
          className="w-full"
        />
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────────────── */
/* Mobile single-column entry                                */
/* ───────────────────────────────────────────────────────── */
function MobileEntry({ item, isLast, isActive }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: isLast ? '32px' : '48px',
        position: 'relative',
        paddingLeft: '36px',
      }}
    >
      {/* Dot on spine: Activates when path reaches it */}
      <div
        style={{
          position: 'absolute',
          left: '8px',
          top: '24px',
          transform: 'translateX(-50%)',
          zIndex: 3,
        }}
      >
        <motion.div
          animate={{
            backgroundColor: isActive ? '#ff4f2b' : '#18181a',
            borderColor: isActive ? '#ff4f2b' : '#303036',
            boxShadow: isActive ? '0 0 0 6px rgba(255,79,43,0.25), 0 0 18px rgba(255,79,43,0.8)' : 'none',
            scale: isActive ? 1.25 : 0.9,
          }}
          transition={{ duration: 0.35 }}
          style={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            border: '2px solid',
          }}
        />
      </div>

      {/* Mobile Card */}
      <TimelineCard
        year={item.year}
        theme={item.theme}
        era={item.era}
        body={item.body}
        isActive={isActive}
        className="w-full"
      />
    </div>
  );
}

/* ───────────────────────────────────────────────────────── */
/* Main TimelineSection export                               */
/* ───────────────────────────────────────────────────────── */
export default function TimelineSection({ onProgressChange }) {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [W, setW] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  /* Measure container width; update on resize */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    setW(el.offsetWidth);
    const ro = new ResizeObserver(([e]) => setW(e.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  /* Direct Lenis Scroll Integration:
   * Synchronizes the path reveal so that the tip of the orange line is always
   * at the user's viewport center as they scroll down.
   */
  const handleScrollUpdate = useCallback(() => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const windowH = window.innerHeight;

    // Viewport eye-level reference point (middle of the screen)
    const eyeLevel = windowH * 0.5;

    // Start point: when top node (TOP_PAD) reaches eye level
    const startY = eyeLevel - TOP_PAD;
    // End point: when terminal bottom node (TOTAL_H) reaches eye level
    const endY = eyeLevel - TOTAL_H;

    const totalDistance = startY - endY;
    const currentDistance = startY - rect.top;

    const p = Math.max(0, Math.min(1, currentDistance / totalDistance));

    setScrollProgress(p);
    if (onProgressChange) {
      onProgressChange(p);
    }
  }, [onProgressChange]);

  useEffect(() => {
    handleScrollUpdate();

    // Attach specifically to Lenis instance
    let intervalId = null;
    const checkLenis = () => {
      const lenis = window.__lenis;
      if (lenis) {
        lenis.on('scroll', handleScrollUpdate);
        if (intervalId) clearInterval(intervalId);
      }
    };

    checkLenis();
    if (!window.__lenis) {
      intervalId = setInterval(checkLenis, 100);
    }

    // Fallback standard scroll listener
    window.addEventListener('scroll', handleScrollUpdate, { passive: true });
    window.addEventListener('resize', handleScrollUpdate, { passive: true });

    return () => {
      if (intervalId) clearInterval(intervalId);
      if (window.__lenis) {
        window.__lenis.off('scroll', handleScrollUpdate);
      }
      window.removeEventListener('scroll', handleScrollUpdate);
      window.removeEventListener('resize', handleScrollUpdate);
    };
  }, [handleScrollUpdate]);

  const cardWidth = Math.min(440, Math.max(300, (W * 0.5) - 50));
  const centerX = W * 0.5;

  // Terminal node activation at the very bottom seam
  const isTerminalActive = scrollProgress >= 0.98;

  // Exact stroke dashoffset for true scroll reveal (not premade)
  const strokeOffset = SPINE_LENGTH * (1 - scrollProgress);
  const currentTipY = TOP_PAD + SPINE_LENGTH * scrollProgress;

  return (
    <section
      ref={sectionRef}
      id="timeline"
      className="w-full pt-24 md:pt-36 pb-0 px-6 md:px-10 relative overflow-hidden"
      style={{ background: 'var(--color-void-black)' }}
    >
      <div className="max-w-[1040px] mx-auto relative">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 'clamp(48px, 8vw, 80px)' }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--color-ember-orange)',
              display: 'block',
              marginBottom: '14px',
            }}
          >
            CHRONOLOGY // THE JOURNEY
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(34px, 6vw, 70px)',
              fontWeight: 300,
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
              color: 'var(--color-bone-white)',
              textTransform: 'uppercase',
            }}
          >
            From Curiosity
            <br />
            <span style={{ color: 'var(--color-ember-orange)' }}>to Creation</span>
          </h2>
          <div
            style={{
              marginTop: '20px',
              height: '1px',
              background: 'linear-gradient(90deg, #ff4f2b 0%, rgba(60,60,60,0.3) 60%, transparent 100%)',
              maxWidth: '360px',
            }}
          />
        </motion.div>

        {/* ── DESKTOP Central Spine with Scroll-Driven Reveal ── */}
        <div
          ref={containerRef}
          className="relative hidden md:block"
          style={{ height: TOTAL_H }}
        >
          {W > 0 && (
            <>
              {/* SVG Central Spine Layer */}
              <svg
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: TOTAL_H,
                  overflow: 'visible',
                  zIndex: 1,
                  pointerEvents: 'none',
                }}
              >
                <defs>
                  <linearGradient id="tlGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ff4f2b" />
                    <stop offset="70%" stopColor="#ff623e" />
                    <stop offset="100%" stopColor="#ff3a12" />
                  </linearGradient>

                  {/* Conduit outer glow */}
                  <filter id="conduitGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="blur1" />
                    <feGaussianBlur stdDeviation="8" result="blur2" />
                    <feMerge>
                      <feMergeNode in="blur2" />
                      <feMergeNode in="blur1" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Subtle dark track conduit down the middle */}
                <line
                  x1={centerX}
                  y1={TOP_PAD}
                  x2={centerX}
                  y2={TOTAL_H}
                  stroke="rgba(45,45,52,0.6)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                {/* Glowing Orange Conduit — dynamically reveals as you scroll! */}
                <line
                  x1={centerX}
                  y1={TOP_PAD}
                  x2={centerX}
                  y2={TOTAL_H}
                  stroke="url(#tlGrad)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  filter="url(#conduitGlow)"
                  strokeDasharray={SPINE_LENGTH}
                  strokeDashoffset={strokeOffset}
                />

                {/* Traveling Energy Photon at the tip of the drawing line */}
                {scrollProgress > 0.005 && scrollProgress < 0.995 && (
                  <g transform={`translate(${centerX}, ${currentTipY})`}>
                    <circle r="7" fill="#ff4f2b" filter="url(#conduitGlow)" />
                    <circle r="3" fill="#ffffff" />
                  </g>
                )}
              </svg>

              {/* Desktop Timeline Entries (Alternating Left / Right of Central Spine) */}
              {NODES.map((node) => (
                <DesktopEntry
                  key={node.year}
                  node={node}
                  W={W}
                  cardWidth={cardWidth}
                  isActive={scrollProgress >= node.threshold}
                />
              ))}

              {/* Terminal Connection Node at the very bottom center seam */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translate(-50%, 50%)',
                  zIndex: 30,
                  pointerEvents: 'none',
                }}
              >
                <motion.div
                  animate={{
                    backgroundColor: isTerminalActive ? '#ff4f2b' : '#18181e',
                    borderColor: isTerminalActive ? '#ffffff' : '#33333e',
                    boxShadow: isTerminalActive
                      ? '0 0 0 8px rgba(255,79,43,0.35), 0 0 35px rgba(255,79,43,0.95)'
                      : 'none',
                    scale: isTerminalActive ? 1.35 : 0.85,
                  }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    border: '2px solid',
                  }}
                />
              </div>
            </>
          )}
        </div>

        {/* ── MOBILE simple column with scroll reveal ── */}
        <div className="block md:hidden" style={{ position: 'relative' }}>
          {/* Mobile spine track */}
          <div
            style={{
              position: 'absolute',
              left: '8px',
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'rgba(45,45,50,0.6)',
              transform: 'translateX(-50%)',
            }}
          />
          {/* Glowing animated orange mobile spine */}
          <motion.div
            style={{
              position: 'absolute',
              left: '8px',
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'linear-gradient(180deg, #ff4f2b 0%, #ff6e4d 100%)',
              transformOrigin: 'top',
              scaleY: scrollProgress,
              transform: 'translateX(-50%)',
              boxShadow: '0 0 12px rgba(255,79,43,0.7)',
            }}
          />

          {TIMELINE.map((item) => (
            <MobileEntry
              key={item.year}
              item={item}
              isLast={item.index === TIMELINE.length - 1}
              isActive={scrollProgress >= item.index / (TIMELINE.length - 1) * 0.92}
            />
          ))}

          {/* Mobile terminal node */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: '16px',
              paddingBottom: '24px',
            }}
          >
            <motion.div
              animate={{
                backgroundColor: isTerminalActive ? '#ff4f2b' : '#18181e',
                boxShadow: isTerminalActive
                  ? '0 0 0 6px rgba(255,79,43,0.3), 0 0 25px rgba(255,79,43,0.9)'
                  : 'none',
                scale: isTerminalActive ? 1.25 : 0.9,
              }}
              style={{
                width: 14,
                height: 14,
                borderRadius: '50%',
                border: '2px solid #333',
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}