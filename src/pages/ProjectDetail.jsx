/**
 * ProjectDetail.jsx — Dynamic project detail page router
 * 
 * Reads the project slug from URL params (/project/:slug).
 * Resolves previous and next project parameters to allow circular navigation.
 */
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import ProjectDetailLayout from '../components/project/ProjectDetailLayout';
import Footer from '../components/layout/Footer';

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  /* Scroll to top on slug change */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  /* Find project by slug */
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  /* Previous and Next circular pointers */
  const previousIndex = (projectIndex - 1 + projects.length) % projects.length;
  const nextIndex = (projectIndex + 1) % projects.length;

  const previousProject = projects[previousIndex];
  const nextProject = projects[nextIndex];

  /* 404 fallback page */
  if (!project) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center px-6 bg-void-black text-bone-white">
        <h1 className="font-display text-4xl md:text-6xl font-light uppercase tracking-tight mb-4">
          Project Not Found
        </h1>
        <p className="font-mono text-sm text-steel-mid uppercase tracking-widest mb-8">
          The requested archive resource "{slug}" does not exist.
        </p>
        <button
          onClick={() => navigate('/')}
          className="cursor-pointer px-6 py-3 font-mono text-xs uppercase tracking-widest bg-ember-orange text-void-black hover:brightness-110 transition-all border-0"
        >
          Return to Index
        </button>
      </div>
    );
  }

  return (
    <div className="w-full">
      <ProjectDetailLayout
        project={project}
        previousProject={previousProject !== project ? previousProject : null}
        nextProject={nextProject !== project ? nextProject : null}
      />
      <Footer />
    </div>
  );
}
