/**
 * SectionHeader.jsx — Framer Motion Animated Section Header
 */
import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ title, number, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`flex items-baseline justify-between mb-12 md:mb-16 ${className}`}
    >
      {/* Section title — display font, weight 300, uppercase */}
      <h2
        className="text-bone-white uppercase"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(36px, 5vw, 60px)',
          fontWeight: 300,
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
        }}
      >
        {title}
      </h2>

      {/* Section counter — monospaced label */}
      {number && (
        <span
          className="text-steel-mid hidden md:block"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '16px',
            fontWeight: 400,
          }}
        >
          {number}
        </span>
      )}
    </motion.div>
  );
}
