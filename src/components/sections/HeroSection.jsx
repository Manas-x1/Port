/**
 * HeroSection.jsx — Layered Hero with LightRays & 3D Interactive Lanyard ID Card
 *
 * Layers:
 *   - Layer 1 (Background): Volumetric interactive LightRays (React Bits)
 *   - Layer 2 (3D Object): Interactive physics Lanyard ID badge (React Bits + Stitch UI design)
 *   - Layer 3 (Foreground): Bold editorial typography ("Hi, I am Manas", disciplines, CTAs)
 *   - Layer 4 (Bottom Edge): GradualBlur transition into rest of the site
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import LightRays from '../ui/LightRays';
import Lanyard from '../ui/Lanyard';
import GradualBlur from '../ui/GradualBlur';
import FilledButton from '../ui/FilledButton';
import GhostButton from '../ui/GhostButton';

export default function HeroSection() {
  const navigate = useNavigate();

  const scrollToProjects = () => {
    const el = document.querySelector('#projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative w-full h-screen min-h-[680px] flex flex-col justify-between overflow-hidden snap-section bg-void-black select-none">
      {/* ── Layer 1: Background LightRays with Ambient Gradients ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <LightRays
          raysOrigin="top-right"
          raysColor="#ff552e"
          raysSpeed={1.2}
          lightSpread={0.9}
          rayLength={2.0}
          followMouse={true}
          mouseInfluence={0.15}
          noiseAmount={0.06}
          distortion={0.05}
          saturation={1.0}
          className="w-full h-full opacity-85"
        />

        {/* Ambient deep space atmospheric vignettes */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 80% 25%, rgba(255, 85, 46, 0.18) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(10, 11, 16, 0.95) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to top, rgba(7,7,10,0.92) 0%, rgba(7,7,10,0.2) 40%, rgba(7,7,10,0.7) 100%)',
          }}
        />
      </div>

      {/* ── Layer 2: 3D Interactive Lanyard ID Card (Full Screen Viewport with Right-Side Placement) ── */}
      <div className="absolute inset-0 z-10 pointer-events-auto w-full h-full">
        <Lanyard
          position={[-2.8, 0, 14]}
          gravity={[0, -38, 0]}
          fov={22}
          frontImage="/assets/id-card-front.png"
          backImage="/assets/id-card-back.png"
          imageFit="cover"
          lanyardWidth={1.2}
          className="w-full h-full"
        />
      </div>

      {/* ── Hero Content Container ── */}
      <div className="relative z-20 w-full h-full max-w-[1520px] mx-auto px-6 sm:px-10 md:px-14 pt-28 pb-16 sm:pb-20 md:pb-24 flex flex-col justify-between pointer-events-none">

        {/* Middle Row: Capabilities (Left) & Location (Right) */}
        <div className="w-full flex flex-row items-start justify-between mt-auto mb-auto pointer-events-none">
          {/* Left: Core Specializations */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-1.5 max-w-md"
          >
            <span className="font-display font-semibold text-bone-white text-base sm:text-xl md:text-2xl tracking-tight leading-snug">
              AI Content Creation &amp; Direction
            </span>
            <span className="font-sans text-fog-light/90 text-sm sm:text-base font-light tracking-wide leading-relaxed">
              3D Visual Design &amp; VFX Worldbuilding
            </span>
            <span className="font-sans text-fog-light/80 text-sm sm:text-base font-light tracking-wide leading-relaxed">
              Cinematic Video Editing &amp; Storytelling
            </span>
          </motion.div>

          {/* Right: Location & Availability */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-right flex flex-col gap-1"
          >
            <span className="font-display font-light text-bone-white text-base sm:text-xl md:text-2xl tracking-tight">
              Based in India
            </span>
            <span className="font-sans text-fog-light text-sm sm:text-base font-light tracking-wide">
              Available Worldwide
            </span>
          </motion.div>
        </div>

        {/* Bottom Row: "Hi, I am Manas" (Left) & Actions (Right) */}
        <div className="w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pointer-events-auto">
          {/* Left: Massive Typography Name */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <span className="font-sans text-xl sm:text-2xl md:text-3xl text-bone-white font-medium mb-0 tracking-tight">
              Hi, I am
            </span>
            <h1
              className="font-display font-black text-bone-white leading-[0.82] tracking-tighter"
              style={{ fontSize: 'clamp(72px, 15vw, 210px)' }}
            >
              Manas
            </h1>
          </motion.div>

          {/* Right: Actions & Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="flex flex-wrap items-center gap-4 mb-2 sm:mb-4"
          >
            <FilledButton onClick={scrollToProjects} className="px-8 py-3.5 text-xs sm:text-sm">
              Explore Work
            </FilledButton>
            <GhostButton onClick={() => navigate('/about')} className="px-8 py-3.5 text-xs sm:text-sm">
              Story &amp; Journey
            </GhostButton>
          </motion.div>
        </div>

      </div>

      {/* ── Seamless Gradual Blur transition at the bottom of the Hero ── */}
      <GradualBlur
        target="parent"
        position="bottom"
        height="6rem"
        strength={2.5}
        divCount={6}
        curve="bezier"
        exponential={true}
        opacity={1}
        zIndex={5}
      />
    </section>
  );
}
