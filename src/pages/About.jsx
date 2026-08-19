/**
 * About.jsx — Personal Story & Experience Page
 * 
 * Structured chapters:
 *   1. When I Started & Why (Origins in graphics & animation)
 *   2. The Past (3D, visual design, digital production, TechXR)
 *   3. The Present (AI Content Creator, Video Editor, AI Filmmaking)
 *   4. The Potential Future (Intersection of AI, 3D, filmmaking & storytelling)
 */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import FilledButton from '../components/ui/FilledButton';
import GhostButton from '../components/ui/GhostButton';

export default function About() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);

    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-void-black text-bone-white min-h-screen">
      {/* Header */}
      <header className="relative w-full pt-32 pb-16 px-6 md:px-10 border-b border-graphite-border">
        <div className="max-w-[1280px] mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-ember-orange block mb-4">
            BIOGRAPHY & JOURNEY // MANAS UPADHYAY
          </span>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-light uppercase text-bone-white tracking-tight leading-[0.95] max-w-4xl">
            Story & Vision
          </h1>
          <p className="font-mono text-xs text-steel-mid uppercase tracking-widest mt-6">
            AI CONTENT CREATOR · 3D ARTIST · VISUAL DESIGNER · VIDEO EDITOR
          </p>
        </div>
      </header>

      {/* Narrative Chapters */}
      <section className="py-20 px-6 md:px-10 border-b border-graphite-border">
        <div className="max-w-[1280px] mx-auto space-y-24">
          
          {/* Chapter 01 — When I Started & Why */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start reveal">
            <div className="lg:col-span-4 font-mono text-xs uppercase tracking-widest text-steel-mid">
              CHAPTER 01 // ORIGINS
              <h2 className="font-display text-3xl md:text-4xl text-bone-white font-light uppercase mt-2">
                When I Started & Why
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4 font-sans text-base md:text-lg text-fog-light leading-relaxed">
              <p>
                My creative journey began with a deep fascination for visual storytelling and digital motion. From my earliest experiments in graphic composition and 2D animation, I realized that images are more than aesthetic decorations — they are emotional languages that convey atmosphere, weight, and narrative.
              </p>
              <p>
                What began as curiosity quickly turned into an obsessive pursuit: understanding how lighting, camera angles, color grading, and timing transform raw ideas into striking cinematic moments.
              </p>
            </div>
          </div>

          {/* Chapter 02 — The Past */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start reveal">
            <div className="lg:col-span-4 font-mono text-xs uppercase tracking-widest text-steel-mid">
              CHAPTER 02 // EVOLUTION
              <h2 className="font-display text-3xl md:text-4xl text-bone-white font-light uppercase mt-2">
                The Foundation & 3D
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4 font-sans text-base md:text-lg text-fog-light leading-relaxed">
              <p>
                As digital tools evolved, I expanded into 3D environment synthesis, texture painting, and video production. Working with Blender, Substance Painter, and the Adobe Creative Suite allowed me to construct complete virtual worlds from scratch.
              </p>
              <p>
                During my professional engagements — including hands-on experience in visual design and extended reality workflows at TechXR — I refined my understanding of spatial geometry, asset optimization, and digital production pipelines. Every project reinforced the core belief that technical precision elevates creative vision.
              </p>
            </div>
          </div>

          {/* Chapter 03 — The Present */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start reveal">
            <div className="lg:col-span-4 font-mono text-xs uppercase tracking-widest text-steel-mid">
              CHAPTER 03 // THE PRESENT
              <h2 className="font-display text-3xl md:text-4xl text-ember-orange font-light uppercase mt-2">
                AI Content & Filmmaking
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4 font-sans text-base md:text-lg text-fog-light leading-relaxed">
              <p>
                Today, I operate as an <strong>AI Content Creator, Video Editor, and AI Filmmaker</strong>. I treat generative AI not as a shortcut, but as a high-powered creative amplifier within a structured production workflow.
              </p>
              <p>
                By combining custom diffusion LoRA architectures (Midjourney, ComfyUI, Runway Gen-2) with 3D base geometry (Blender) and professional post-production (DaVinci Resolve & Premiere Pro), I produce cinematic short films and case studies such as <em>Kaliya Daman</em> and <em>Shiv Mahapuran</em> that push the visual boundaries of Indian mythology and sci-fi worldbuilding.
              </p>
            </div>
          </div>

          {/* Chapter 04 — The Potential Future */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start reveal">
            <div className="lg:col-span-4 font-mono text-xs uppercase tracking-widest text-steel-mid">
              CHAPTER 04 // THE HORIZON
              <h2 className="font-display text-3xl md:text-4xl text-bone-white font-light uppercase mt-2">
                The Potential Future
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4 font-sans text-base md:text-lg text-fog-light leading-relaxed">
              <p>
                The future of visual media lies at the convergence of generative neural synthesis, real-time 3D engines, and human creative direction. My goal is to continue pioneering high-fidelity AI filmmaking and visual design — building immersive cinematic experiences, brand visual identities, and narrative projects that inspire.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-10 bg-carbon border-b border-graphite-border text-center">
        <div className="max-w-[1280px] mx-auto reveal">
          <h2 className="font-display text-4xl md:text-6xl uppercase font-light text-bone-white mb-6">
            Ready to Collaborate?
          </h2>
          <p className="font-sans text-lg text-fog-light max-w-2xl mx-auto mb-8">
            Whether you need cinematic AI video production, 3D visual design, or creative editing for your project, let's connect.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <FilledButton onClick={() => navigate('/work')} className="px-8 py-4">
              Explore All Projects
            </FilledButton>
            <GhostButton onClick={() => navigate('/#contact')} className="px-8 py-4">
              Contact Transmission
            </GhostButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
