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

  const videoRefA = useRef(null);
  const videoRefB = useRef(null);

  // Tracks the last 3 played indices to enforce the 3-shot cooldown rule
  const recentHistoryRef = useRef([]);
  const currentIdxRef = useRef(0);
  const isTransitioningRef = useRef(false);
  const fallbackTimerRef = useRef(null);
  const activeSlotRef = useRef('A');

  // Keep activeSlotRef in sync with state
  useEffect(() => {
    activeSlotRef.current = activeSlot;
  }, [activeSlot]);

  // Select next index enforcing: at least 3 different shots before any repeat
  const getNextIndex = useCallback(() => {
    if (!videos || videos.length === 0) return 0;

    const history = recentHistoryRef.current;
    const currentIdx = currentIdxRef.current;

    // Exclude anything in the recent 3-shot history
    const available = videos
      .map((_, i) => i)
      .filter((i) => !history.includes(i));

    // Fallback: if all are blocked (very small pool), only exclude the current one
    const pool =
      available.length > 0
        ? available
        : videos.map((_, i) => i).filter((i) => i !== currentIdx);

    const picked = pool[Math.floor(Math.random() * pool.length)];

    // Update history, keeping only the last 3
    const updated = [...history, picked];
    if (updated.length > 3) updated.shift();
    recentHistoryRef.current = updated;
    currentIdxRef.current = picked;

    return picked;
  }, [videos]);

  // Load a src into a video element and play it once it's ready
  const loadAndPlay = (videoEl, src) => {
    if (!videoEl) return;
    videoEl.src = src;
    videoEl.currentTime = 0;
    videoEl.load();

    const onCanPlay = () => {
      videoEl.removeEventListener('canplay', onCanPlay);
      videoEl.play().catch(() => {});
    };
    videoEl.addEventListener('canplay', onCanPlay);
  };

  // Initial mount: pick first random video
  useEffect(() => {
    if (!videos || videos.length === 0) return;

    const initialIdx = Math.floor(Math.random() * videos.length);
    recentHistoryRef.current = [initialIdx];
    currentIdxRef.current = initialIdx;

    const elA = videoRefA.current;
    if (elA) {
      loadAndPlay(elA, videos[initialIdx]);
    }

    if (onShotChange) onShotChange(initialIdx);
  }, [videos]); // eslint-disable-line react-hooks/exhaustive-deps

  // Trigger the crossfade to the other slot
  const triggerTransition = useCallback(() => {
    if (isTransitioningRef.current || !videos || videos.length <= 1) return;
    isTransitioningRef.current = true;

    if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current);

    const nextIdx = getNextIndex();
    const nextSrc = videos[nextIdx];
    if (onShotChange) onShotChange(nextIdx);

    const currentActiveSlot = activeSlotRef.current;
    const nextSlot = currentActiveSlot === 'A' ? 'B' : 'A';
    const nextVideoEl = nextSlot === 'A' ? videoRefA.current : videoRefB.current;
    const currentVideoEl = currentActiveSlot === 'A' ? videoRefA.current : videoRefB.current;

    // Set src directly on the DOM element (avoids React state batching race)
    // and switch slot opacity only after canplay fires
    if (nextVideoEl) {
      nextVideoEl.src = nextSrc;
      nextVideoEl.currentTime = 0;
      nextVideoEl.load();

      const onCanPlay = () => {
        nextVideoEl.removeEventListener('canplay', onCanPlay);
        nextVideoEl.play().catch(() => {});
        // Trigger CSS crossfade now that next video is ready
        setActiveSlot(nextSlot);

        // After dissolve completes, pause the old video and unlock
        setTimeout(() => {
          if (currentVideoEl) currentVideoEl.pause();
          isTransitioningRef.current = false;
        }, fadeDuration + 50);
      };
      nextVideoEl.addEventListener('canplay', onCanPlay);
    } else {
      // No element ref yet — just flip slot and unlock
      setActiveSlot(nextSlot);
      setTimeout(() => {
        isTransitioningRef.current = false;
      }, fadeDuration + 50);
    }
  }, [getNextIndex, onShotChange, videos, fadeDuration]);

  // Handle playback time on active slot: crossfade before video loops or ends
  const handleTimeUpdate = (slot, e) => {
    if (slot !== activeSlotRef.current || isTransitioningRef.current) return;

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
    if (slot === activeSlotRef.current && !isTransitioningRef.current) {
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
    }, (maxClipDuration + 3) * 1000);

    return () => {
      if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current);
    };
  }, [activeSlot, triggerTransition, maxClipDuration]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* Video Slot A */}
      <video
        ref={videoRefA}
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

      {/* Video Slot B */}
      <video
        ref={videoRefB}
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

      {/* Middle Layer: Soft Scrim Tint & Delicate Backdrop Blur */}
      <div
        className="absolute inset-0"
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
