/**
 * HeroSlideshow.jsx — random slideshow of a project's clips behind the title card.
 *
 * - Every clip plays to its end before the next one appears.
 * - Order is a shuffled deck: every clip plays once before any repeats,
 *   and the last clip of one round never opens the next.
 * - Two <video> elements: the next clip preloads underneath while the current one plays.
 *   On "ended" the next clip fades in on top; the old one holds its last frame
 *   underneath, so nothing else (cover image, black) ever shows between shots.
 * - Pauses when the title card is off screen or the tab is hidden.
 */
import React, { useCallback, useEffect, useRef, useState } from 'react';

function shuffled(n, avoidFirst) {
  const a = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  if (n > 1 && a[0] === avoidFirst) [a[0], a[1]] = [a[1], a[0]];
  return a;
}

export default function HeroSlideshow({ clips, active = true }) {
  const refs = [useRef(null), useRef(null)];
  const [front, setFront] = useState(0); // which element is on top
  const frontRef = useRef(0);
  const deck = useRef([]);
  const last = useRef(-1);
  const queued = useRef([false, false]); // element holds a fresh, not-yet-shown clip
  const activeRef = useRef(active);
  activeRef.current = active;

  const draw = useCallback(() => {
    if (!deck.current.length) deck.current = shuffled(clips.length, last.current);
    last.current = deck.current.shift();
    return clips[last.current];
  }, [clips]);

  const load = (el, clip) => {
    el.poster = clip.poster || '';
    el.src = clip.src;
    el.load();
  };

  // First clip on top, second preloading underneath
  useEffect(() => {
    const [a, b] = refs.map((r) => r.current);
    if (!a || !b || clips.length === 0) return;
    deck.current = [];
    last.current = -1;
    load(a, draw());
    queued.current = [false, false];
    if (activeRef.current) a.play().catch(() => {});
    if (clips.length > 1) {
      load(b, draw());
      queued.current[1] = true;
    }
    frontRef.current = 0;
    setFront(0);
  }, [clips, draw]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleEnded = (i) => {
    if (i !== frontRef.current) return;
    if (clips.length === 1) {
      refs[i].current.play().catch(() => {});
      return;
    }
    const next = 1 - i;
    const el = refs[next].current;
    // Normally already queued; if this clip ended before the queue step ran, queue now
    if (!queued.current[next]) load(el, draw());
    queued.current[next] = false;
    el.currentTime = 0;
    if (activeRef.current) el.play().catch(() => {});
    frontRef.current = next;
    setFront(next); // fades the next clip in over the held last frame
  };

  // When the fade-in finishes, queue the following clip in the element now underneath
  const handleFadeDone = (i) => {
    if (i !== frontRef.current || clips.length < 2) return;
    const under = 1 - i;
    if (!queued.current[under] && refs[under].current) {
      load(refs[under].current, draw());
      queued.current[under] = true;
    }
  };

  // Pause/resume with visibility (title card on screen and tab visible)
  useEffect(() => {
    const sync = () => {
      const el = refs[frontRef.current].current;
      if (!el) return;
      if (active && !document.hidden) el.play().catch(() => {});
      else el.pause();
    };
    sync();
    document.addEventListener('visibilitychange', sync);
    return () => document.removeEventListener('visibilitychange', sync);
  }, [active]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="absolute inset-0 overflow-hidden bg-void-black" aria-hidden="true">
      {refs.map((ref, i) => (
        <video
          key={i}
          ref={ref}
          muted
          playsInline
          preload="auto"
          onEnded={() => handleEnded(i)}
          onAnimationEnd={() => handleFadeDone(i)}
          className={`absolute inset-0 w-full h-full object-cover ${i === front ? 'hs-front' : 'hs-back'}`}
        />
      ))}
    </div>
  );
}
