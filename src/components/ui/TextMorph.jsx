/**
 * TextMorph.jsx — High-end character-by-character animated text morph
 * 
 * Features:
 * - Staggered character entrance/exit with blur & vertical slide.
 * - Continuous smooth cycling across titles.
 */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TextMorph({
  texts = [],
  interval = 2800,
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

  const currentText = texts[currentIndex];

  return (
    <div className={`relative inline-flex items-center justify-center overflow-hidden py-1 ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentText}
          className="inline-flex flex-wrap justify-center gap-[0.05em]"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.035,
              },
            },
            exit: {
              transition: {
                staggerChildren: 0.02,
                staggerDirection: -1,
              },
            },
          }}
        >
          {currentText.split('').map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 18,
                  filter: 'blur(8px)',
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                  transition: {
                    duration: 0.45,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
                exit: {
                  opacity: 0,
                  y: -18,
                  filter: 'blur(8px)',
                  transition: {
                    duration: 0.35,
                    ease: [0.7, 0, 0.84, 0],
                  },
                },
              }}
              className="inline-block whitespace-pre"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
