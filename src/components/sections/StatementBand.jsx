/**
 * StatementBand.jsx — Full-bleed orange statement section with Framer Motion text animation
 */
import React from 'react';
import { motion } from 'framer-motion';

export default function StatementBand({ text = 'We Create The Future' }) {
  return (
    <section
      className="w-full py-16 md:py-20 px-6 snap-section flex items-center justify-center min-h-[40vh] bg-ember-orange overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center uppercase max-w-[1280px] mx-auto text-void-black font-display font-normal text-3xl sm:text-5xl md:text-6xl leading-tight"
      >
        {text}
      </motion.h2>
    </section>
  );
}
