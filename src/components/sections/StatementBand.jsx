/**
 * StatementBand.jsx — one sentence, set large, between the title card and the story.
 * Lines rise in slowly. The trigger sits on the paragraph, not the clipped lines,
 * because a line translated out of its clip box never counts as "in view".
 */
import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];
const LINES = [
  { text: 'Crafting the future' },
  { text: 'through', accent: 'AI & film.' },
];

export default function StatementBand() {
  return (
    <section className="section bg-void-black select-none" aria-label="Statement">
      <div className="shell">
        <div className="grid-12">
          <motion.p
            className="col-span-4 lg:col-span-11 m-0 t-h1 text-bone-white"
            initial="hidden"
            whileInView="shown"
            viewport={{ once: true, margin: '-80px' }}
          >
            {LINES.map((line, i) => (
              <span key={i} className="block overflow-hidden pt-[0.12em] -mt-[0.12em] pb-[0.08em]">
                <motion.span
                  className="block"
                  variants={{ hidden: { y: '110%' }, shown: { y: '0%' } }}
                  transition={{ duration: 1.4, delay: i * 0.15, ease: EASE }}
                >
                  {line.text}
                  {line.accent && (
                    <>
                      {' '}
                      <span className="t-serif text-ember-orange">{line.accent}</span>
                    </>
                  )}
                </motion.span>
              </span>
            ))}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
