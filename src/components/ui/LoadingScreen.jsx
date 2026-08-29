/**
 * LoadingScreen.jsx — Initial entry loading screen (Silent & Clean)
 * 
 * Features:
 *   - Character letter scramble animation
 *   - Strict scroll locking while active
 *   - Click to continue unlock handler
 */
import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*';

function ScrambleText({ text, start = false, delay = 0 }) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    if (!start) return;

    let isMounted = true;
    let iteration = 0;
    let interval = null;
    let timeoutId = null;

    const run = () => {
      interval = setInterval(() => {
        if (!isMounted) return;

        setDisplayText(
          text
            .split('')
            .map((char, index) => {
              if (index < iteration) return text[index];
              if (char === ' ' || char === '-' || char === '—') return char;
              return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
            })
            .join('')
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 35);
    };

    if (delay > 0) {
      timeoutId = setTimeout(run, delay);
    } else {
      run();
    }

    return () => {
      if (interval) clearInterval(interval);
      if (timeoutId) clearTimeout(timeoutId);
      isMounted = false;
    };
  }, [text, start, delay]);

  return <span>{displayText}</span>;
}

export default function LoadingScreen() {
  const location = useLocation();

  const [hasEntered, setHasEntered] = useState(() => {
    return sessionStorage.getItem('portfolio_entered') === 'true';
  });
  const [isInitialLoading, setIsInitialLoading] = useState(!hasEntered);
  const [scrambleStart, setScrambleStart] = useState(false);

  const [isTransitionLoading, setIsTransitionLoading] = useState(false);
  const isFirstEntry = useRef(true);

  useEffect(() => {
    if (!hasEntered) {
      const timer = setTimeout(() => setScrambleStart(true), 400);
      return () => clearTimeout(timer);
    }
  }, [hasEntered]);

  /* Strict scroll locking while initial loading screen is active */
  useEffect(() => {
    if (!isInitialLoading) return;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const preventScroll = (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    const keysToBlock = ['Space', 'PageUp', 'PageDown', 'End', 'Home', 'ArrowUp', 'ArrowDown'];
    const preventKeyScroll = (e) => {
      if (keysToBlock.includes(e.code)) {
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });
    window.addEventListener('keydown', preventKeyScroll, { passive: false });

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
      window.removeEventListener('keydown', preventKeyScroll);
    };
  }, [isInitialLoading]);

  useEffect(() => {
    if (!hasEntered) return;

    if (isFirstEntry.current) {
      isFirstEntry.current = false;
      return;
    }

    setIsTransitionLoading(true);
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setIsTransitionLoading(false);
      document.body.style.overflow = '';
    }, 1200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [location.pathname, hasEntered]);

  const handleEnterSite = () => {
    setHasEntered(true);
    sessionStorage.setItem('portfolio_entered', 'true');
    setIsInitialLoading(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isInitialLoading && (
          <motion.div
            key="entry-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
            onClick={handleEnterSite}
            className="fixed inset-0 z-[9999] bg-void-black flex flex-col items-center justify-center p-8 select-none cursor-pointer"
          >
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.04]"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(245, 245, 245, 0.8) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />

            <div className="w-full max-w-4xl relative z-10 flex flex-col items-center justify-center px-4">
              <div className="flex flex-col items-center w-full space-y-6">
                <div
                  role="banner"
                  className="text-center select-none uppercase"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(32px, 5vw, 54px)',
                    fontWeight: 300,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    color: 'var(--color-bone-white)',
                  }}
                >
                  <ScrambleText text="Welcome to the portfolio" start={scrambleStart} />
                </div>

                <div
                  className="select-none self-center md:self-end md:mr-16 min-h-[30px] opacity-80"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'clamp(14px, 2vw, 18px)',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--color-steel-mid)',
                  }}
                >
                  <ScrambleText text="— manas upadhyay" start={scrambleStart} delay={1200} />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.4, y: 0 }}
                transition={{ delay: 2.5, duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
                className="mt-16"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: 'var(--color-steel-mid)',
                }}
              >
                click to continue
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isTransitionLoading && (
          <motion.div
            key="transition-loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9998] bg-void-black flex flex-col items-center justify-center pointer-events-auto"
          >
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.03]"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(245, 245, 245, 0.6) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />

            <div className="relative z-10 flex flex-col items-center space-y-6">
              <span
                className="animate-pulse"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.4em',
                  textTransform: 'uppercase',
                  color: 'var(--color-steel-mid)',
                }}
              >
                Loading Context
              </span>

              <div className="w-48 h-[1px] bg-graphite-border overflow-hidden relative">
                <motion.div
                  initial={{ left: '-100%' }}
                  animate={{ left: '100%' }}
                  transition={{ duration: 1.2, ease: 'easeInOut', repeat: 0 }}
                  className="absolute top-0 bottom-0 w-24 bg-ember-orange"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
