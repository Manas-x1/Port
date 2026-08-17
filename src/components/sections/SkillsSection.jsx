/**
 * SkillsSection.jsx — Animated Skills & Tools Text Grid
 * 
 * Features:
 * - Pure text grid (icons removed per request).
 * - Staggered Framer Motion entrance & hover animations (Lenis compatible).
 * - Monospaced categories with Ori hairline dividers.
 */
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';

/* Skill Categories Specified by User */
const SKILL_CATEGORIES = [
  {
    category: '3D & Modeling',
    skills: ['Blender', 'Unreal', 'Substance Painter', 'Substance Designer'],
  },
  {
    category: 'Video & Film',
    skills: ['Premiere Pro', 'After Effects'],
  },
  {
    category: 'Design & Graphics',
    skills: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Figma'],
  },
  {
    category: 'AI & Gen',
    skills: ['Google Flow', 'Adobe Firefly', 'Minimax AI Suite'],
  },
  {
    category: 'Productivity',
    skills: ['Google Suite', 'Adobe Suite', 'Notion', 'Slack'],
  },
];

export default function SkillsSection() {
  return (
    <section
      className="w-full py-20 md:py-32 px-6 md:px-10 snap-section bg-carbon border-t border-b border-graphite-border relative overflow-hidden"
      id="skills"
    >
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader title="Skills & Tools" number="03" />

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 md:gap-6">
          {SKILL_CATEGORIES.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              className="space-y-4"
            >
              {/* Category Label */}
              <span className="block font-mono text-xs font-medium uppercase tracking-widest text-ember-orange border-b border-graphite-border pb-2">
                {cat.category}
              </span>

              {/* Skill Text Items */}
              <ul className="list-none m-0 p-0 space-y-2">
                {cat.skills.map((skill, skillIdx) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ x: 6, color: '#ffffff' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: catIdx * 0.08 + skillIdx * 0.04 }}
                    className="py-2 px-1 border-b border-graphite-border/50 transition-colors cursor-default"
                  >
                    <span className="font-body text-sm md:text-base text-fog-light hover:text-bone-white transition-colors">
                      {skill}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
