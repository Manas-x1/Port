/**
 * TextMorph.jsx — Cycling text morph animation
 * 
 * Cycles through an array of strings with a smooth morph/fade transition.
 * Replaces the non-existent @componentry/text-morph package.
 * Uses framer-motion AnimatePresence for enter/exit transitions.
 * 
 * Props:
 *   texts: string[] — Array of strings to cycle through
 *   interval: number — Milliseconds between text changes (default: 3000)
 *   className: string — Additional CSS classes
 */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TextMorph({
  texts = [],
  interval = 3000,
  className = '',
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (texts.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  if (texts.length === 0) return null;

  return (
    <div className={`relative inline-block overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={texts[currentIndex]}
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
          transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block"
        >
          {texts[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
