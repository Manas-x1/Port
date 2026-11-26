/**
 * SectionHeader.jsx — the one header every section shares.
 *
 *   ───────────────────────────────────────────── (rule)
 *   01 — About                              aside
 *   HEADING
 */
import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

export default function SectionHeader({ index, label, title, aside, className = '', as: Tag = 'h2' }) {
  return (
    <header className={`stack-gap ${className}`}>
      <div className="rule-t pt-4 flex items-baseline justify-between gap-6 t-label text-steel-mid">
        <span>
          {index && <span className="text-bone-white tabular-nums">{index}</span>}
          {index && label && <span> — </span>}
          {label}
        </span>
        {/* Long asides drop on phones rather than wrapping against the label */}
        {aside && <span className={`text-right ${typeof aside === 'string' && aside.length > 18 ? 'hidden sm:inline' : ''}`}>{aside}</span>}
      </div>
      {title && (
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.2, ease: EASE }}
        >
          <Tag className="t-h2 text-bone-white mt-8 sm:mt-10 m-0">{title}</Tag>
        </motion.div>
      )}
    </header>
  );
}
