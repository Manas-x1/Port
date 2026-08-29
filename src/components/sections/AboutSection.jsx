/**
 * AboutSection.jsx — About section with Framer Motion text animations
 */
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';

export default function AboutSection() {
  return (
    <section
      className="w-full py-20 md:py-32 px-6 md:px-10 snap-section bg-void-black"
      id="about"
    >
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader title="About" number="01" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left — Heading with Framer Motion */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3
              className="text-bone-white uppercase mb-6"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px, 4vw, 48px)',
                fontWeight: 300,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              Crafting digital<br />narratives that<br />
              <span style={{ color: 'var(--color-ember-orange)' }}>ignite</span>
            </h3>
          </motion.div>

          {/* Right — Body text with Framer Motion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:pt-4"
          >
            <p
              className="mb-6"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '18px',
                lineHeight: 1.6,
                color: 'var(--color-fog-light)',
              }}
            >
              I am Manas Upadhyay (manasxz), a multidisciplinary AI Content Creator, 3D Artist, Visual Designer, and Video Editor. Working at the cutting edge of generative AI and digital filmmaking, I specialize in crafting cinematic mythologies, sci-fi worldbuilding, and immersive visual narratives.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                lineHeight: 1.6,
                color: 'var(--color-steel-mid)',
              }}
            >
              Combining modern generative workflows (ComfyUI, Midjourney, Runway Gen-2, Stable Diffusion) with industry-standard 3D production pipelines (Blender, Substance) and post-production mastery in DaVinci Resolve and Adobe Premiere Pro, I build visual experiences that bridge ancient storytelling with future technology.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
