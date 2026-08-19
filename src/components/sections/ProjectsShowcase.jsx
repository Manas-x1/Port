/**
 * ProjectsShowcase.jsx — Featured projects grid with dark editorial styling
 */
import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../ui/SectionHeader';
import { projects } from '../../data/projects';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectsShowcase() {
  const featured = projects.slice(0, 4);

  return (
    <section
      className="w-full py-20 md:py-32 px-4 sm:px-6 md:px-10 snap-section bg-void-black"
      id="projects"
    >
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader title="Selected Work" number="02" />

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          {featured.map((project, index) => (
            <Link
              key={project.slug}
              to={`/project/${project.slug}`}
              className={`block group cursor-pointer no-underline ${
                index % 2 === 1 ? 'md:mt-16' : ''
              }`}
            >
              {/* Project Card Image Container */}
              <div className="relative overflow-hidden mb-5 border border-graphite-border bg-carbon aspect-[16/10] sm:aspect-[4/3]">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-void-black/20 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute top-4 right-4 bg-void-black/80 backdrop-blur-md p-2 border border-graphite-border opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={20} className="text-ember-orange" />
                </div>
              </div>

              {/* Title & Tag */}
              <div className="flex justify-between items-baseline border-b border-graphite-border pb-4 group-hover:border-ember-orange transition-colors">
                <h3 className="font-display font-light text-2xl sm:text-3xl text-bone-white uppercase tracking-tight group-hover:text-ember-orange transition-colors">
                  {project.title}
                </h3>
                <span className="font-mono text-xs sm:text-sm text-steel-mid uppercase tracking-wider">
                  {String(index + 1).padStart(2, '0')} / {project.category}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Link to full /work index */}
        <div className="mt-16 text-center">
          <Link
            to="/work"
            className="inline-flex items-center gap-3 px-8 py-4 bg-carbon border border-graphite-border hover:border-ember-orange font-mono text-xs uppercase tracking-widest text-bone-white hover:text-ember-orange transition-all no-underline"
          >
            <span>Explore Complete Work Archive ({projects.length} Projects)</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
