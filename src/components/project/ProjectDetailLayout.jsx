/**
 * ProjectDetailLayout.jsx — Reusable project detail layout adhering to Ori (New.md) dark design
 * 
 * Features:
 *   - 0px border-radius structural design
 *   - Dark void canvas & Ember Orange ignition accents
 *   - Full project overview, bullet points, software list, image gallery & video preview
 *   - Circular project navigation (Previous / Next / Back to Portfolio) to guarantee no dead-ends
 */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import FilledButton from '../ui/FilledButton';
import GhostButton from '../ui/GhostButton';
import ProjectFootnoteBar from './ProjectFootnoteBar';

export default function ProjectDetailLayout({ project, nextProject }) {
  const navigate = useNavigate();

  /* Scroll reveal observer */
  useEffect(() => {
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
  }, [project.slug]);

  return (
    <div className="w-full bg-void-black text-bone-white min-h-screen">
      {/* ================================================================
       * HERO HEADER — Full-viewport with project title & breadcrumb
       * ============================================================== */}
      <header className="relative w-full min-h-[85vh] pt-24 pb-16 flex flex-col justify-between overflow-hidden border-b border-graphite-border">
        {/* Background image overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={project.thumbnail}
            alt={`${project.title} hero`}
            className="w-full h-full object-cover opacity-35 filter brightness-90"
            style={{
              maskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void-black via-void-black/60 to-transparent" />
        </div>

        {/* Top breadcrumb & back button */}
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-10 flex justify-between items-center">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-steel-mid hover:text-ember-orange transition-colors cursor-pointer"
          >
            <ArrowLeft size={14} />
            <span>Back to Index</span>
          </button>

          <span className="font-mono text-xs uppercase tracking-widest text-ember-orange px-3 py-1 bg-carbon border border-graphite-border">
            {project.category}
          </span>
        </div>

        {/* Main Title */}
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-10 my-auto text-left py-12">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-steel-mid block mb-4">
            PROJECT ARCHIVE // 0{project.slug === 'metroid-sci-fi' ? '1' : '02'}
          </span>
          <h1
            className="text-bone-white uppercase font-light text-hero-display tracking-tight leading-[0.95] mb-6 max-w-4xl"
          >
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-4 mt-8">
            <FilledButton onClick={() => navigate('/#contact')} className="px-6 py-3 text-xs">
              Inquire Project
            </FilledButton>
            <GhostButton onClick={() => navigate('/')} className="px-6 py-3 text-xs">
              Explore Portfolio
            </GhostButton>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-10 flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-steel-mid">
          <span>SPECIFICATIONS & BREIF</span>
          <div className="flex items-center gap-2">
            <span>SCROLL</span>
            <div className="w-12 h-px bg-graphite-border" />
          </div>
        </div>
      </header>

      {/* ================================================================
       * OVERVIEW SECTION — Two column layout
       * ============================================================== */}
      <section className="py-20 md:py-28 px-6 md:px-10 border-b border-graphite-border bg-void-black">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start reveal">
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="font-mono text-xs text-ember-orange tracking-widest uppercase mb-3">
              01 // CONCEPT & PROCESS
            </div>
            <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight text-bone-white leading-tight">
              Executive<br />Summary
            </h2>
          </div>

          {/* Right Column: Description & Key Highlights */}
          <div className="lg:col-span-7 space-y-8">
            <p className="font-sans text-lg md:text-xl text-fog-light leading-relaxed">
              {project.description}
            </p>

            {/* Bullet points */}
            <div className="pt-6 border-t border-graphite-border">
              <h3 className="font-mono text-xs uppercase tracking-widest text-steel-mid mb-6">
                Technical Highlights & Scope
              </h3>
              <ul className="space-y-4 m-0 p-0 list-none">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-4 text-fog-light font-sans text-base leading-snug">
                    <span className="w-2 h-2 mt-2 bg-ember-orange flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
       * TOOLS & SOFTWARE STACK
       * ============================================================== */}
      <section className="py-16 px-6 md:px-10 bg-carbon border-b border-graphite-border">
        <div className="max-w-[1280px] mx-auto reveal">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-steel-mid">
              02 // TECH & SOFTWARE SUITE
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-ember-orange">
              {project.skills.length} MODULES APPLIED
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-bone-white bg-void-black border border-graphite-border hover:border-ember-orange transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
       * GALLERY SECTION — Cinematic Visuals
       * ============================================================== */}
      <section className="py-20 px-6 md:px-10 bg-void-black border-b border-graphite-border">
        <div className="max-w-[1280px] mx-auto space-y-12 reveal">
          <div className="font-mono text-xs uppercase tracking-widest text-steel-mid">
            03 // VISUAL ASSETS & STILLS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images.map((img, i) => (
              <div
                key={i}
                className="group relative overflow-hidden bg-carbon border border-graphite-border hover:border-ember-orange transition-colors duration-300"
              >
                <img
                  src={img}
                  alt={`${project.title} frame ${i + 1}`}
                  className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-void-black/80 backdrop-blur-md border-t border-graphite-border flex justify-between items-center font-mono text-xs text-steel-mid">
                  <span>FRAME // 0{i + 1}</span>
                  <span className="text-ember-orange">4K DCI</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
       * VIDEO / DEMO PLAYER SECTION
       * ============================================================== */}
      {project.videoUrl && (
        <section className="py-20 px-6 md:px-10 bg-carbon border-b border-graphite-border">
          <div className="max-w-[1280px] mx-auto reveal">
            <div className="font-mono text-xs uppercase tracking-widest text-steel-mid mb-6 flex justify-between items-center">
              <span>04 // CINEMATIC VIDEO PREVIEW</span>
              <span className="text-ember-orange animate-pulse">● PLAYABLE PREVIEW</span>
            </div>

            <div className="relative aspect-video w-full bg-void-black border border-graphite-border overflow-hidden">
              <iframe
                src={project.videoUrl}
                title={`${project.title} video`}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      )}

      {/* ================================================================
       * SLEEK 2-PART FOOTNOTE NAVIGATION BAR
       * ============================================================== */}
      {nextProject && <ProjectFootnoteBar nextProject={nextProject} />}
    </div>
  );
}
