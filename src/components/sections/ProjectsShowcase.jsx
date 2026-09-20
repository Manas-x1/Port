/**
 * ProjectsShowcase.jsx — Featured projects with React Bits GSAP Masonry layout
 */
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../ui/SectionHeader';
import Masonry from '../ui/Masonry';
import { projects } from '../../data/projects';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectsShowcase() {
  // Staggered heights for dynamic masonry rhythm
  const heights = [780, 540, 840, 600, 720, 660];

  const items = useMemo(() => {
    return projects.map((project, idx) => ({
      id: project.slug || `project-${idx}`,
      img: project.thumbnail,
      url: `/project/${project.slug}`,
      height: heights[idx % heights.length],
      title: project.title,
      category: `${String(idx + 1).padStart(2, '0')} // ${project.category}`,
    }));
  }, []);

  return (
    <section
      className="w-full py-20 md:py-32 px-4 sm:px-6 md:px-10 snap-section bg-void-black relative z-10"
      id="projects"
    >
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader title="Selected Work" number="02" />

        {/* React Bits GSAP Masonry Grid */}
        <div className="mt-8 md:mt-12">
          <Masonry
            items={items}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.98}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
        </div>

        {/* Link to full /work index */}
        <div className="mt-16 text-center">
          <Link
            to="/work"
            className="inline-flex items-center gap-3 px-8 py-4 bg-carbon border border-graphite-border hover:border-ember-orange font-mono text-xs uppercase tracking-widest text-bone-white hover:text-ember-orange transition-all no-underline group rounded-lg"
          >
            <span>Explore Complete Work Archive ({projects.length} Projects)</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
