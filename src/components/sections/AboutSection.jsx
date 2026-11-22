/**
 * AboutSection.jsx — the story, over a slow reel of the user's own shots.
 * Videos only load once the section is near and pause when it leaves.
 */
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeader from '../ui/SectionHeader';
import CinematicBackground from '../ui/CinematicBackground';
import useInView from '../../hooks/useInView';

const videoModules = import.meta.glob('/public/videos/*.{mp4,webm,mov,MP4,MOV}', { eager: true });
const CINEMATIC_SHOTS = Object.keys(videoModules).map((p) => encodeURI(p.replace(/^\/public/, '')));

const EASE = [0.16, 1, 0.3, 1];

export default function AboutSection() {
  const [sectionRef, inView, hasBeenNear] = useInView({ rootMargin: '300px 0px' });

  return (
    <section id="about" ref={sectionRef} className="section relative overflow-hidden bg-void-black">
      {hasBeenNear && (
        <CinematicBackground
          paused={!inView}
          videos={CINEMATIC_SHOTS}
          maxClipDuration={6}
          fadeDuration={1400}
          blurAmount="0px"
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
