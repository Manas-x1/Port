/**
 * ProjectsShowcase.jsx — Selected work, led by imagery.
 * One wide feature, then a two-up grid; everything links to its case study.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../ui/SectionHeader';
import ProjectCard from '../project/ProjectCard';
import { projects } from '../../data/projects';

const FEATURED = projects.slice(0, 4);

export default function ProjectsShowcase() {
  const [lead, ...rest] = FEATURED;

  return (
    <section id="projects" className="section bg-void-black">
      <div className="shell">
        <SectionHeader
          index="02"
          label="Selected work"
          aside={<span className="tabular-nums">{String(projects.length).padStart(2, '0')} projects</span>}
          title={<>Films, worlds <span className="t-serif">&amp;</span> frames</>}
        />

        <div className="reveal">
          <ProjectCard project={lead} index={0} size="lg" aspect="aspect-[4/5] sm:aspect-[16/10] lg:aspect-[21/9]" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-[var(--col-gap)] gap-y-[var(--col-gap)] mt-[var(--col-gap)]">
          {rest.map((project, i) => (
            <div key={project.slug} className="reveal">
              <ProjectCard project={project} index={i + 1} />
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 flex justify-center">
          <Link to="/work" className="btn btn-ghost w-full sm:w-auto">
            Full archive <span className="text-steel-mid tabular-nums">({projects.length})</span> <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
