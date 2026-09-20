/**
 * CinematicBackground.jsx — Dynamic Dual-Buffer Video Crossfade System
 * 
 * Features:
 * - Dissolves smoothly (1000ms film dissolve, not snappy).
 * - Transitions dynamically before the clip ends, preventing clips from looping.
 * - Strict 3-shot cooldown: at least 3 different shots must play before any shot can repeat
 *   (e.g. {7, 5, 3, 2, 7} is valid, but {7, 5, 3, 7} is impossible).
 * - Soft dark tint and gentle blur for supreme typography readability.
 */
import React, { useState, useEffect, useRef, useCallback } from 'react';

export default function CinematicBackground({
  videos = [],
  maxClipDuration = 6, // max seconds to play any clip before crossfading
  fadeDuration = 1000, // 1.0s smooth, gentle film dissolve
  blurAmount = '1.2px',
  tintOpacity = 0.52,
  onShotChange,
}) {
  const [activeSlot, setActiveSlot] = useState('A');
  const [slotASrc, setSlotASrc] = useState('');
  const [slotBSrc, setSlotBSrc] = useState('');
  const [currentIdx, setCurrentIdx] = useState(0);

  const videoRefA = useRef(null);
  const videoRefB = useRef(null);

  // Tracks the last 3 played indices to enforce the cooldown rule
  const recentHistoryRef = useRef([]);
  const isTransitioningRef = useRef(false);
  const fallbackTimerRef = useRef(null);

  // Select next index enforcing: at least 3 different shots before any repeat
  const getNextIndex = useCallback(() => {
    if (!videos || videos.length === 0) return 0;

    const history = recentHistoryRef.current;
    // Exclude anything in recent history (minimum 3 different shots cooldown)
    const available = videos
      .map((_, i) => i)
      .filter((i) => !history.includes(i));

    const pool = available.length > 0 ? available : videos.map((_, i) => i).filter(i => i !== currentIdx);
    const picked = pool[Math.floor(Math.random() * pool.length)];

    // Update history (keep last 3 items)
    const updated = [...history, picked];
    if (updated.length > 3) {
      updated.shift();
    }
    recentHistoryRef.current = updated;
    return picked;
  }, [videos, currentIdx]);

  // Initial mount: pick first random video
  useEffect(() => {
    if (!videos || videos.length === 0) return;

    const initialIdx = Math.floor(Math.random() * videos.length);
    recentHistoryRef.current = [initialIdx];
    setCurrentIdx(initialIdx);
    setSlotASrc(videos[initialIdx]);
    if (onShotChange) onShotChange(initialIdx);
  }, [videos]); // eslint-disable-line react-hooks/exhaustive-deps

  // Trigger the crossfade to the other slot
  const triggerTransition = useCallback(() => {
    if (isTransitioningRef.current || !videos || videos.length <= 1) return;
    isTransitioningRef.current = true;

    if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current);

    const nextIdx = getNextIndex();
    const nextSrc = videos[nextIdx];
    setCurrentIdx(nextIdx);
    if (onShotChange) onShotChange(nextIdx);

    const nextSlot = activeSlot === 'A' ? 'B' : 'A';
    const nextVideoEl = nextSlot === 'A' ? videoRefA.current : videoRefB.current;
    const currentVideoEl = activeSlot === 'A' ? videoRefA.current : videoRefB.current;

    if (nextSlot === 'A') {
      setSlotASrc(nextSrc);
    } else {
      setSlotBSrc(nextSrc);
    }

    if (nextVideoEl) {
      nextVideoEl.currentTime = 0;
      nextVideoEl.play().catch(() => {});
    }

    // Switch active slot to begin CSS opacity crossfade
    setActiveSlot(nextSlot);

    // After dissolve completes, pause old video and unlock transition
    setTimeout(() => {
      if (currentVideoEl) {
        currentVideoEl.pause();
      }
      isTransitioningRef.current = false;
    }, fadeDuration + 50);
  }, [activeSlot, getNextIndex, onShotChange, videos, fadeDuration]);

  // Handle playback time on active slot: crossfade before video loops or ends
  const handleTimeUpdate = (slot, e) => {
    if (slot !== activeSlot || isTransitioningRef.current) return;

    const video = e.currentTarget;
    const dur = video.duration;
    if (!dur || isNaN(dur) || dur <= 0) return;

    // The clip will play for at most maxClipDuration, or its natural duration
    const playLimit = Math.min(dur, maxClipDuration);
    const dissolveSeconds = fadeDuration / 1000;

    // Start dissolve so it completes right at playLimit without looping
    const triggerPoint = Math.max(playLimit - dissolveSeconds, 0.4);

    if (video.currentTime >= triggerPoint) {
      triggerTransition();
    }
  };

  // If clip ends naturally before timeUpdate caught it, crossfade immediately
  const handleEnded = (slot) => {
    if (slot === activeSlot && !isTransitioningRef.current) {
      triggerTransition();
    }
  };

  // Safety fallback timer if a clip hangs or metadata is delayed
  useEffect(() => {
    if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current);

    fallbackTimerRef.current = setTimeout(() => {
      if (!isTransitioningRef.current) {
        triggerTransition();
      }
    }, (maxClipDuration + 2) * 1000);

    return () => {
      if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current);
    };
  }, [activeSlot, triggerTransition, maxClipDuration]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* Video Slot A */}
      {slotASrc && (
        <video
          ref={videoRefA}
          src={slotASrc}
          autoPlay
          muted
          playsInline
          preload="auto"
          onTimeUpdate={(e) => handleTimeUpdate('A', e)}
          onEnded={() => handleEnded('A')}
          className="absolute inset-0 w-full h-full object-cover will-change-opacity transition-opacity"
          style={{
            opacity: activeSlot === 'A' ? 1 : 0,
            transitionDuration: `${fadeDuration}ms`,
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
      )}

      {/* Video Slot B */}
      {slotBSrc && (
        <video
          ref={videoRefB}
          src={slotBSrc}
          autoPlay
          muted
          playsInline
          preload="auto"
          onTimeUpdate={(e) => handleTimeUpdate('B', e)}
          onEnded={() => handleEnded('B')}
          className="absolute inset-0 w-full h-full object-cover will-change-opacity transition-opacity"
          style={{
            opacity: activeSlot === 'B' ? 1 : 0,
            transitionDuration: `${fadeDuration}ms`,
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
      )}

      {/* Middle Layer: Soft Scrim Tint & Delicate Backdrop Blur */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          backgroundColor: `rgba(8, 9, 13, ${tintOpacity})`,
          backdropFilter: `blur(${blurAmount})`,
          WebkitBackdropFilter: `blur(${blurAmount})`,
        }}
      />

      {/* Atmospheric Vertical Gradients for seamless section blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-void-black/80 via-transparent to-void-black/80 pointer-events-none opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-r from-void-black/30 via-transparent to-void-black/30 pointer-events-none" />

      {/* Subtle Cinematic Film Grain Texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
    </div>
  );
}
