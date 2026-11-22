/**
 * PageHeader.jsx — opening title card for inner pages (About, Work, 404).
 * Ruled label line, a large title that rises in, optional lead and aside.
 */
import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

export default function PageHeader({ label, aside, title, lead, children }) {
  return (
    <header className="shell pt-28 sm:pt-36 lg:pt-44 pb-[var(--stack)]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="rule-t pt-4 flex items-baseline justify-between gap-6 t-label text-steel-mid"
      >
        <span>{label}</span>
        {aside && <span className="text-right">{aside}</span>}
      </motion.div>

      <h1 className="t-h1 text-bone-white m-0 mt-10 sm:mt-14">
        <span className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className="block"
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1.4, delay: 0.3, ease: EASE }}
          >
            {title}
          </motion.span>
        </span>
      </h1>

      {lead && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: EASE }}
          className="t-lead text-fog-light mt-8 mb-0 max-w-[40ch]"
        >
          {lead}
        </motion.p>
      )}
      {children}
    </header>
  );
}
