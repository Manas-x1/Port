import React from 'react';
import { motion } from 'framer-motion';

/**
 * TimelineCard Component
 * Ultra-clean, premium dark minimalist card with dynamic activation on path contact.
 * No muddy glass effects or WebGL canvas blocks.
 */
export default function TimelineCard({
  year,
  theme,
  era,
  body,
  isActive = false,
  className = '',
  style = {},
}) {
  return (
    <motion.div
      animate={{
        borderColor: isActive ? 'rgba(255,79,43,0.45)' : 'rgba(255,255,255,0.06)',
        boxShadow: isActive
          ? '0 12px 36px -4px rgba(0,0,0,0.9), 0 0 24px -2px rgba(255,79,43,0.18)'
          : '0 8px 24px -4px rgba(0,0,0,0.75)',
      }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`relative rounded-2xl overflow-hidden p-6 md:p-8 transition-colors ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(18,18,22,0.92) 0%, rgba(10,10,14,0.96) 100%)',
        border: '1px solid',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        ...style,
      }}
    >
      {/* Subtle top edge highlight when active */}
      <motion.div
        animate={{
          opacity: isActive ? 1 : 0,
        }}
        transition={{ duration: 0.4 }}
        className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,79,43,0.7) 50%, transparent 100%)',
        }}
      />

      {/* Header row: Theme Tag + Year Badge */}
      <div className="flex items-center justify-between gap-3 mb-3">
        <motion.span
          animate={{
            color: isActive ? '#ff4f2b' : '#525258',
          }}
          transition={{ duration: 0.35 }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          {theme}
        </motion.span>

        <motion.span
          animate={{
            color: isActive ? '#ff4f2b' : '#45454a',
            backgroundColor: isActive ? 'rgba(255,79,43,0.12)' : 'rgba(255,255,255,0.02)',
            borderColor: isActive ? 'rgba(255,79,43,0.35)' : 'rgba(255,255,255,0.06)',
          }}
          transition={{ duration: 0.35 }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.15em',
            fontWeight: 700,
            padding: '2px 8px',
            borderRadius: '6px',
            border: '1px solid',
          }}
        >
          {year}
        </motion.span>
      </div>

      {/* Era Heading */}
      <motion.h3
        animate={{
          color: isActive ? '#ffffff' : '#727278',
        }}
        transition={{ duration: 0.35 }}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(20px, 2.2vw, 28px)',
          fontWeight: 300,
          letterSpacing: '-0.02em',
          textTransform: 'uppercase',
          lineHeight: 1.15,
          marginBottom: '10px',
        }}
      >
        {era}
      </motion.h3>

      {/* Body Description */}
      <motion.p
        animate={{
          color: isActive ? '#b8b8c2' : '#55555c',
        }}
        transition={{ duration: 0.35 }}
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(13px, 1.1vw, 15px)',
          lineHeight: 1.7,
          margin: 0,
        }}
      >
        {body}
      </motion.p>
    </motion.div>
  );
}
