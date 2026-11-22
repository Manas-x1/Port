/**
 * AboutSection.jsx — the story, over a slow reel of the user's own shots.
 * Videos mount once the section is within 300px, but only play while it is actually
 * on screen, so nothing decodes while you scroll on into Selected work.
 */
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeader from '../ui/SectionHeader';
import CinematicBackground from '../ui/CinematicBackground';
import useInView from '../../hooks/useInView';

// Served straight from public/videos (720p, 6s, no audio). A plain list instead of
// import.meta.glob, which made Vite copy every video into the build a second time.
const CINEMATIC_SHOTS = Array.from({ length: 15 }, (_, i) => `/videos/about-${String(i + 1).padStart(2, '0')}.mp4`);

const EASE = [0.16, 1, 0.3, 1];

export default function AboutSection() {
  const [nearRef, , hasBeenNear] = useInView({ rootMargin: '300px 0px' });
  const [playRef, onScreen] = useInView({ rootMargin: '0px' });
  const sectionRef = (el) => {
    nearRef.current = el;
    playRef.current = el;
  };

  return (
    <section id="about" ref={sectionRef} className="section relative overflow-hidden bg-void-black">
      {hasBeenNear && (
        <CinematicBackground
          paused={!onScreen}
          videos={CINEMATIC_SHOTS}
          maxClipDuration={6}
          fadeDuration={1400}
          tintOpacity={0.62}
        />
      )}
      {/* Fade the reel into black at both edges so the section joins its neighbours */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-void-black to-transparent z-[1]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-void-black to-transparent z-[1]" />

      <div className="shell relative z-10">
        <SectionHeader index="01" label="About" aside="AI content creator & 3D filmmaker" />

        <div className="grid-12 gap-y-12">
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.2, ease: EASE }}
            className="col-span-4 lg:col-span-7 m-0 t-h2 text-bone-white"
          >
            Crafting digital narratives that <span className="t-serif">ignite</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.2, delay: 0.15, ease: EASE }}
            className="col-span-4 lg:col-start-8 lg:col-span-5 lg:pt-3 space-y-6"
          >
            <p className="t-lead text-bone-white m-0">
              I am Manas Upadhyay (manasxz), a multidisciplinary AI content creator, 3D artist, visual designer
              and video editor. I craft cinematic mythologies, sci-fi worlds and immersive visual narratives.
            </p>
            <p className="t-body text-fog-light m-0">
              I combine generative workflows (Higgsfield, Google Flow) and reasoning pipelines (Claude &amp; GPT)
              with 3D production in Blender and Substance, and finish in DaVinci Resolve and Premiere Pro, to build
              visual experiences that bridge ancient storytelling with future technology.
            </p>
            <Link to="/about" className="inline-flex items-center gap-3 min-h-10 t-label text-bone-white link-line">
              The full story <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
