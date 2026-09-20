/**
 * AboutSection.jsx — Editorial About Section with Cinematic Background Video Reel
 * 
 * Features:
 * - Ambient background video loop playing 5-second cinematic shots in randomized sequence.
 * - Dual-buffered seamless crossfade with soft dark tint and gentle blur.
 * - High-contrast editorial typography in the foreground.
 * - Technical telemetry HUD strip anchoring the bottom of the section.
 */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import CinematicBackground from '../ui/CinematicBackground';

// Dynamically discover all video files in public/videos/
const videoModules = import.meta.glob('/public/videos/*.{mp4,webm,mov,MP4,MOV}', { eager: true });
const CINEMATIC_SHOTS = Object.keys(videoModules).map((filePath) => {
  // Strip '/public' prefix so the path becomes a valid public asset URL '/videos/...'
  const publicPath = filePath.replace(/^\/public/, '');
  return encodeURI(publicPath);
});

export default function AboutSection() {
  const [activeShot, setActiveShot] = useState(0);

  return (
    <section
      className="w-full py-24 md:py-36 px-6 md:px-12 snap-section bg-void-black relative overflow-hidden"
      id="about"
    >
      {/* ── Background Layer: Seamless Crossfade Video Reel ── */}
      <CinematicBackground
        videos={CINEMATIC_SHOTS}
        maxClipDuration={5.5}
        fadeDuration={1000}
        blurAmount="1px"
        tintOpacity={0.52}
        onShotChange={(idx) => setActiveShot(idx)}
      />

      {/* ── Foreground Layer: High-End Editorial Typography ── */}
      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-12 md:mb-16 border-b border-white/[0.08] pb-6">
          <SectionHeader title="About" number="01" />

          {/* Live Reel Shot Counter */}
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-steel-mid">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ember-orange opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-ember-orange" />
            </span>
            <span>Cinematic Reel // Take {String(activeShot + 1).padStart(2, '0')}</span>
          </div>
        </div>

        {/* Core Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column — Monumental Statement */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className="font-display font-light text-3xl sm:text-5xl md:text-6xl text-bone-white uppercase tracking-tight leading-[1.06]">
              Crafting Digital<br />
              Narratives That<br />
              <span className="text-ember-orange font-normal italic font-serif">Ignite</span>
            </h3>

            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-ember-orange" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-fog-light">
                AI Content Creator &amp; 3D Filmmaker
              </span>
            </div>
          </motion.div>

          {/* Right Column — Narrative Prose Pushed Down */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 pt-4 md:pt-12 lg:pt-20"
          >
            <p className="font-sans text-base sm:text-lg text-bone-white/95 leading-relaxed font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              I am <span className="text-bone-white font-medium">Manas Upadhyay (manasxz)</span>, a multidisciplinary AI Content Creator, 3D Artist, Visual Designer, and Video Editor. Working at the cutting edge of generative AI and digital filmmaking, I specialize in crafting cinematic mythologies, sci-fi worldbuilding, and immersive visual narratives.
            </p>

            <p className="font-sans text-sm sm:text-base text-steel-mid/90 leading-relaxed font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Combining modern generative workflows (<span className="text-fog-light">Higgsfield, Google Flow</span>) and advanced reasoning pipelines (<span className="text-fog-light">Claude &amp; GPT workflows</span>) with industry-standard 3D production (<span className="text-fog-light">Blender, Substance</span>) and post-production mastery in <span className="text-fog-light">DaVinci Resolve</span> and <span className="text-fog-light">Adobe Premiere Pro</span>, I build visual experiences that bridge ancient storytelling with future technology.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
