/**
 * LoopVideo.jsx — short muted loop that only loads and plays while on screen.
 * Shows its poster until it's near the viewport, pauses when it leaves,
 * and never autoplays for visitors who ask for reduced motion.
 */
import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

export default function LoopVideo({ src, poster, className = '', label }) {
  const ref = useRef(null);
  const [near, setNear] = useState(false); // latches: source stays attached once loaded
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduceMotion) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        if (entry.isIntersecting) setNear(true);
      },
      { rootMargin: '150px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduceMotion]);

  // Play/pause after React has attached the source
  useEffect(() => {
    const el = ref.current;
    if (!el || !near) return;
    if (visible) el.play().catch(() => {});
    else el.pause();
  }, [near, visible]);

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={label}
      src={near ? src : undefined}
    />
  );
}
