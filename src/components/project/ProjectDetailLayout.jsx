/**
 * ProjectDetailLayout.jsx — Reusable project detail template
 * 
 * Used by ProjectDetail.jsx to render any project based on data from projects.js.
 * Structure: Hero → Description (bullets) → Skills → Images → Video → Next Project.
 * 
 * Props:
 *   project: object — Project data from projects.js
 *   nextProject: object|null — Next project for navigation link
 */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ProjectDetailLayout({ project, nextProject }) {
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
    <div className="w-full">
      {/* ================================================================
       * HERO — Full-viewport with project title
       * ============================================================== */}
      <header
        className="relative w-full h-screen overflow-hidden flex items-center justify-center"
        style={{ backgroundColor: 'var(--color-void-black)' }}
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={project.thumbnail}
            alt={`${project.title} hero`}
            className="w-full h-full object-cover opacity-40"
            style={{
              maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
            }}
          />
        </div>

        {/* Title */}
        <div className="relative z-10 text-center select-none px-6">
          <h1
            className="text-bone-white uppercase"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(48px, 10vw, 96px)',
              fontWeight: 300,
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
            }}
          >
            {project.title}
          </h1>
          <div className="mt-6 flex flex-col items-center">
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--color-steel-mid)',
              }}
            >
              Scroll to Explore
            </span>
            <div
              className="w-px h-12 mt-3 animate-pulse"
              style={{ backgroundColor: 'var(--color-steel-mid)' }}
            />
          </div>
        </div>
      </header>

      {/* ================================================================
       * DESCRIPTION SECTION — Two-column: heading + body text with bullets
       * ============================================================== */}
      <section
        className="py-20 md:py-32 px-6 md:px-10"
        style={{ backgroundColor: 'var(--color-void-black)' }}
      >
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start reveal">
          {/* Left — Section heading */}
          <div className="md:sticky md:top-24">
            <h2
              className="text-bone-white uppercase"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(36px, 5vw, 60px)',
                fontWeight: 300,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              Project<br />Overview
            </h2>
          </div>

          {/* Right — Description + bullets */}
          <div className="md:pt-4">
            <p
              className="mb-8"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '18px',
                lineHeight: 1.6,
                color: 'var(--color-fog-light)',
              }}
            >
              {project.description}
            </p>

            {/* Bullet points */}
            <ul className="list-none m-0 p-0 space-y-3">
              {project.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '16px',
                    lineHeight: 1.5,
                    color: 'var(--color-fog-light)',
                  }}
                >
                  <span
                    className="mt-2 block w-1.5 h-1.5 flex-shrink-0"
                    style={{ backgroundColor: 'var(--color-ember-orange)' }}
                  />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================================================================
       * SKILLS SECTION — Software & tools used
       * ============================================================== */}
      <section
        className="py-16 md:py-24 px-6 md:px-10"
        style={{
          backgroundColor: 'var(--color-carbon)',
          borderTop: '1px solid var(--color-graphite-border)',
          borderBottom: '1px solid var(--color-graphite-border)',
        }}
      >
        <div className="max-w-[1280px] mx-auto reveal">
          <span
            className="block mb-8"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--color-steel-mid)',
            }}
          >
            Tools & Software
          </span>

          <div className="flex flex-wrap gap-3">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '14px',
                  color: 'var(--color-bone-white)',
                  border: '1px solid var(--color-graphite-border)',
                  textTransform: 'uppercase',
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
       * PROJECT IMAGES — Full-width gallery
       * ============================================================== */}
      <section
        className="py-16 md:py-24 px-6 md:px-10"
        style={{ backgroundColor: 'var(--color-void-black)' }}
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.map((img, i) => (
              <div
                key={i}
                className="overflow-hidden reveal"
                style={{ border: '1px solid var(--color-graphite-border)' }}
              >
                <img
                  src={img}
                  alt={`${project.title} — Image ${i + 1}`}
                  className="w-full aspect-video object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
       * VIDEO SECTION (if available)
       * ============================================================== */}
      {project.videoUrl && (
        <section
          className="py-16 md:py-24 px-6 md:px-10"
          style={{ backgroundColor: 'var(--color-carbon)' }}
        >
          <div className="max-w-[1280px] mx-auto reveal">
            <span
              className="block mb-8"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--color-steel-mid)',
              }}
            >
              Project Video
            </span>
            <div
              className="aspect-video"
              style={{ border: '1px solid var(--color-graphite-border)' }}
            >
              <iframe
                src={project.videoUrl}
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
                title={`${project.title} video`}
              />
            </div>
          </div>
        </section>
      )}

      {/* ================================================================
       * NEXT PROJECT — Navigation to next project
       * ============================================================== */}
      {nextProject && (
        <section
          className="relative w-full h-[60vh] group cursor-pointer overflow-hidden"
          style={{ backgroundColor: 'var(--color-void-black)' }}
        >
          <Link
            to={`/project/${nextProject.slug}`}
            className="absolute inset-0 flex flex-col items-center justify-center text-center no-underline"
          >
            <span
              className="mb-4"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.4em',
                textTransform: 'uppercase',
                color: 'var(--color-steel-mid)',
              }}
            >
              Up Next
            </span>

            <h3
              className="text-bone-white uppercase mb-8 transition-colors duration-500 group-hover:text-ember-orange"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(36px, 6vw, 72px)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
              }}
            >
              {nextProject.title}
            </h3>

            <div
              className="w-14 h-14 flex items-center justify-center transition-all duration-500 group-hover:bg-ember-orange"
              style={{ border: '1px solid var(--color-graphite-border)' }}
            >
              <ArrowRight
                size={20}
                className="text-bone-white group-hover:text-void-black transition-colors duration-500"
              />
            </div>
          </Link>
        </section>
      )}
    </div>
  );
}
