/**
 * ProjectCard.jsx — title-card treatment shared by the home reel and the work archive.
 * Image fills the frame; number, category and title sit on a bottom scrim.
 */
import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project, index, aspect = 'aspect-square lg:aspect-[4/3]', size = 'md', eager = false }) {
  const num = String(index + 1).padStart(2, '0');
  const titleClass = size === 'lg' ? 't-h2' : 't-h3';

  return (
    <Link to={`/project/${project.slug}`} className="group block" aria-label={`${project.title}, ${project.category}`}>
      <div className={`frame scrim ${aspect}`}>
        <img
          src={project.thumbnail}
          alt=""
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
        />
        <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-8 flex flex-col gap-3">
          <span className="t-label text-fog-light">
            <span className="text-bone-white tabular-nums">{num}</span> — {project.category}
          </span>
          <h3 className={`${titleClass} m-0 text-bone-white`}>{project.title}</h3>
        </div>
        <span
          aria-hidden="true"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 flex items-center justify-center border border-bone-white/30 text-bone-white bg-void-black/30 transition-colors duration-500 group-hover:bg-bone-white group-hover:text-void-black"
        >
          ↗
        </span>
      </div>
    </Link>
  );
}
