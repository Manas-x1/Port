/**
 * ProjectsShowcase.jsx — Featured projects grid (3-4 cards)
 * 
 * Displays project cards that link to individual project detail pages.
 * Full-bleed images, no border-radius, hover scale effect.
 * Projects themed around AI Image/Video creation and Filmmaking.
 * Reads project data from data/projects.js.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../ui/SectionHeader';
import { projects } from '../../data/projects';

export default function ProjectsShowcase() {
  /* Show only the first 4 projects on home page */
  const featured = projects.slice(0, 4);

  return (
    <section
      className="w-full py-20 md:py-32 px-6 md:px-10 snap-section"
      id="projects"
      style={{ backgroundColor: 'var(--color-void-black)' }}
    >
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader title="Selected Work" number="03" />

        {/* Projects grid — 2 columns on desktop, staggered offset */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {featured.map((project, index) => (
            <Link
              key={project.slug}
              to={`/project/${project.slug}`}
              className={`block group cursor-pointer ${
                /* Stagger: offset every other item on desktop */
                index % 2 === 1 ? 'md:mt-20' : ''
              }`}
              style={{ textDecoration: 'none' }}
            >
              {/* Project image */}
              <div
                className="overflow-hidden mb-4"
                style={{ border: '1px solid var(--color-graphite-border)' }}
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Project info */}
              <div
                className="flex justify-between items-baseline pb-4"
                style={{ borderBottom: '1px solid var(--color-graphite-border)' }}
              >
                <h3
                  className="text-bone-white uppercase"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(20px, 3vw, 28px)',
                    fontWeight: 300,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {project.title}
                </h3>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '14px',
                    color: 'var(--color-steel-mid)',
                    textTransform: 'uppercase',
                  }}
                >
                  {String(index + 1).padStart(2, '0')} / {project.category}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
