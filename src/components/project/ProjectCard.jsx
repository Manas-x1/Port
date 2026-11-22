/**
 * ProjectCard.jsx — title-card treatment shared by the home reel and the work archive.
 * Image fills the frame; number, category and title sit on a bottom scrim.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import MediaPlaceholder from './MediaPlaceholder';

export default function ProjectCard({ project, index, aspect = 'aspect-square lg:aspect-[4/3]', size = 'md', eager = false }) {
  const num = String(index + 1).padStart(2, '0');
  const titleClass = size === 'lg' ? 't-h2' : 't-h3';

  return (
    <Link to={`/project/${project.slug}`} className="group block" aria-label={`${project.title}, ${project.category}`}>
      <div className={`frame scrim ${aspect}`}>
        {project.thumbnail ? (
          <img src={project.thumbnail} alt="" loading={eager ? 'eager' : 'lazy'} decoding="async" className="brightness-[0.62] group-hover:brightness-[0.8]" />
        ) : (
          <MediaPlaceholder />
        )}
        {/* Large faded project number, on every card */}
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute right-[6%] top-1/2 -translate-y-1/2 z-[1] font-display font-extrabold leading-none tracking-[-0.05em] select-none ${project.thumbnail ? 'text-bone-white/[0.18]' : 'text-bone-white/[0.12]'}`}
          style={{ fontSize: size === 'lg' ? 'clamp(140px, 30vw, 420px)' : 'clamp(120px, 22vw, 300px)' }}
        >
          {num}
        </span>
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
