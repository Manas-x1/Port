/**
 * LoopVideo.jsx — muted shot that plays only when someone is looking at it.
 *
 *   Mouse/trackpad: plays while hovered (or focused), poster otherwise.
 *   Touch screens:  plays while at least 60% of it is on screen.
 *
 * So at most one or two videos decode at a time instead of every clip in view,
 * which is what kept scrolling smooth. Nothing downloads until first needed,
 * and visitors who ask for reduced motion only ever see the poster.
 */
import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

const finePointer = () => typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

export default function LoopVideo({ src, poster, className = '', label, hoverTarget }) {
  const ref = useRef(null);
  const [armed, setArmed] = useState(false); // source attached (latches)
  const [wantPlay, setWantPlay] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduceMotion) return;

    if (finePointer()) {
      const target = (hoverTarget && el.closest(hoverTarget)) || el;
      const on = () => {
        setArmed(true);
        setWantPlay(true);
      };
      const off = () => setWantPlay(false);
      target.addEventListener('pointerenter', on);
      target.addEventListener('pointerleave', off);
      target.addEventListener('focusin', on);
      target.addEventListener('focusout', off);
      return () => {
        target.removeEventListener('pointerenter', on);
        target.removeEventListener('pointerleave', off);
        target.removeEventListener('focusin', on);
        target.removeEventListener('focusout', off);
      };
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.intersectionRatio >= 0.6;
        setWantPlay(visible);
        if (visible) setArmed(true);
      },
      { threshold: [0, 0.6] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduceMotion, hoverTarget]);

  useEffect(() => {
    const el = ref.current;
    if (!el || !armed) return;
    if (wantPlay) el.play().catch(() => {});
    else el.pause();
  }, [armed, wantPlay]);

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
      src={armed ? src : undefined}
    />
  );
}
