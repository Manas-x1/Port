/**
 * ProjectDetail.jsx — Dynamic project detail page
 * 
 * Reads the project slug from URL params (/project/:slug).
 * Looks up project data from data/projects.js.
 * Renders using ProjectDetailLayout template.
 * Shows 404-style message if project not found.
 */
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import ProjectDetailLayout from '../components/project/ProjectDetailLayout';
import Footer from '../components/layout/Footer';

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  /* Scroll to top on mount */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  /* Find project by slug */
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  /* Find next project (circular) */
  const nextProject = projects[(projectIndex + 1) % projects.length];

  /* Project not found */
  if (!project) {
    return (
      <div
        className="w-full h-screen flex flex-col items-center justify-center px-6"
        style={{ backgroundColor: 'var(--color-void-black)' }}
      >
        <h1
          className="text-bone-white uppercase mb-4"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '48px',
            fontWeight: 300,
          }}
        >
          Project Not Found
        </h1>
        <p
          className="mb-8"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '14px',
            color: 'var(--color-steel-mid)',
            textTransform: 'uppercase',
          }}
        >
          The project "{slug}" does not exist.
        </p>
        <button
          onClick={() => navigate('/')}
          className="cursor-pointer px-4 py-2"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '14px',
            textTransform: 'uppercase',
            color: 'var(--color-void-black)',
            backgroundColor: 'var(--color-ember-orange)',
            border: 'none',
            borderRadius: 0,
          }}
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="w-full">
      <ProjectDetailLayout
        project={project}
        nextProject={nextProject !== project ? nextProject : null}
      />
      <Footer />
    </div>
  );
}
