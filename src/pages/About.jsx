/**
 * About.jsx — Story & vision.
 * Title card with portrait → chronology → closing call to action → footer.
 */
import React, { Suspense, lazy, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from '../components/layout/Footer';
import { openContact } from '../data/contact';
import PageHeader from '../components/ui/PageHeader';
import TimelineSection from '../components/sections/TimelineSection';

// WebGL glass effect, loaded in its own chunk
const FluidGlass = lazy(() => import('../components/ui/FluidGlass'));

const EASE = [0.16, 1, 0.3, 1];

export default function About() {
  useEffect(() => {
    document.title = 'About Manas Upadhyay (manasxz) | Biography & AI Filmmaking Vision';
  }, []);

  return (
    <div className="w-full bg-void-black text-bone-white min-h-screen">
      <PageHeader
        label="About"
        aside="Manas Upadhyay"
        title={<>Story &amp; <span className="t-serif">vision</span></>}
      />

      {/* Portrait + introduction on the shared grid */}
      <section className="shell pb-[var(--section-y)]">
        <div className="grid-12 gap-y-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.5, ease: EASE }}
            className="col-span-4 lg:col-span-5"
          >
            {/* Portrait under a glass lens that follows the cursor (click it to change shape).
                The plain image sits underneath: it shows while the effect loads, or if WebGL2 isn't available. */}
            <div className="frame aspect-[4/5]">
              <img src="/profile.webp" alt="Manas Upadhyay in profile" fetchPriority="high" />
              <Suspense fallback={null}>
                <FluidGlass
                  className="!absolute inset-0"
                  text=""
                  src="/profile.webp"
                  shape="lens"
                  size={220}
                  refraction={1}
                  dispersion={0.35}
                  shadow={0.4}
                  interaction="follow"
                />
              </Suspense>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.65, ease: EASE }}
            className="col-span-4 lg:col-start-7 lg:col-span-6 flex flex-col justify-end gap-6"
          >
            <span className="t-label text-steel-mid">AI content creator · 3D artist · Visual designer · Video editor</span>
            <p className="t-lead text-bone-white m-0">
              I craft cinematic mythologies, sci-fi worlds and immersive visual narratives, working where generative AI
              meets digital filmmaking.
            </p>
            <p className="t-body text-fog-light m-0">
              Generative workflows (Higgsfield, Google Flow) and reasoning pipelines (Claude &amp; GPT) sit alongside 3D
              production in Blender and Substance, with the finish in DaVinci Resolve and Premiere Pro. The aim: visual
              experiences that bridge ancient storytelling with future technology.
            </p>
          </motion.div>
        </div>
      </section>

      <TimelineSection />

      {/* Closing call to action */}
      <section className="section pt-0">
        <div className="shell">
          <div className="rule-t pt-4 flex justify-between gap-6 t-label text-steel-mid">
            <span>
              <span className="text-bone-white">02</span> — What comes next
            </span>
          </div>
          <div className="grid-12 gap-y-10 mt-10 sm:mt-14">
            <h2 className="col-span-4 lg:col-span-8 m-0 t-h1 text-bone-white">
              Ready to <span className="t-serif">collaborate?</span>
            </h2>
            <div className="col-span-4 lg:col-start-9 lg:col-span-4 flex flex-col justify-end gap-6">
              <p className="t-body text-fog-light m-0">
                Cinematic AI video production, 3D visual design or creative editing. Let&rsquo;s connect.
              </p>
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
                <button type="button" onClick={openContact} className="btn btn-primary">
                  Get in touch <span aria-hidden="true">→</span>
                </button>
                <Link to="/work" className="btn btn-ghost">
                  See the work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
