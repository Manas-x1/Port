/**
 * Work.jsx — Dedicated Portfolio Work Showcase Page
 * 
 * Features:
 *   - Category filtering (All, AI Cinematic, AI Image & Concept Art, Film & Motion)
 *   - Grid view with 0px radius cards and Ember Orange ignition hover states
 *   - Deep links to individual case study routes
 */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import Footer from '../components/layout/Footer';

const CATEGORIES = ['ALL', 'AI CINEMATIC', 'AI IMAGE & CONCEPT ART', 'FILM & MOTION'];

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  useEffect(() => {
    document.title = 'Work Archive & AI Case Studies | Manas Upadhyay (manasxz)';
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === 'ALL') return true;
    return project.category.toUpperCase().includes(selectedCategory.replace('&', '').trim());
  });

  return (
    <div className="w-full bg-void-black text-bone-white min-h-screen pt-28 pb-16">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-baseline justify-between mb-4">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-ember-orange block">
              PORTFOLIO ARCHIVE // MANAS UPADHYAY
            </span>
            <span className="font-mono text-base text-steel-mid hidden md:block">
              02
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-light uppercase text-bone-white tracking-tight leading-[0.95] max-w-4xl mb-4">
            Complete Work Archive
          </h1>
          <p className="font-mono text-xs text-steel-mid uppercase tracking-widest">
            AI CINEMATIC FILMMAKING, CONCEPT ART & 3D VISUAL DESIGN
          </p>
        </header>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-12 border-b border-graphite-border pb-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`cursor-pointer px-5 py-2.5 font-mono text-xs uppercase tracking-widest transition-all border-0 ${
                selectedCategory === cat
                  ? 'bg-ember-orange text-void-black font-semibold'
                  : 'bg-carbon text-steel-mid hover:text-bone-white border border-graphite-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProjects.map((project, idx) => (
            <Link
              key={project.slug}
              to={`/project/${project.slug}`}
              className="group bg-carbon border border-graphite-border hover:border-ember-orange transition-colors no-underline flex flex-col justify-between overflow-hidden"
            >
              <div>
                <div className="relative aspect-video overflow-hidden bg-void-black">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 bg-void-black/90 font-mono text-[10px] uppercase text-ember-orange border border-graphite-border">
                    0{idx + 1}
                  </div>
                </div>

                <div className="p-6">
                  <span className="font-mono text-xs text-steel-mid uppercase tracking-widest block mb-2">
                    {project.category}
                  </span>
                  <h3 className="font-display text-2xl uppercase font-light text-bone-white group-hover:text-ember-orange transition-colors mb-3">
                    {project.title}
                  </h3>
                  <p className="font-sans text-sm text-fog-light line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="px-6 py-4 border-t border-graphite-border flex justify-between items-center font-mono text-xs text-steel-mid group-hover:text-ember-orange transition-colors">
                <span>VIEW CASE STUDY</span>
                <ArrowUpRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
