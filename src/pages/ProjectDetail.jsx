/**
 * ProjectDetail.jsx — resolves /project/:slug and hands it to the case-study layout.
 */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import ProjectDetailLayout from '../components/project/ProjectDetailLayout';
import NotFound from './NotFound';

export default function ProjectDetail() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  // Skip projects still waiting on media so 'Next' always lands on something to see
  const ready = projects.filter((p) => p.thumbnail && p !== project);
  const nextProject = ready.find((p) => projects.indexOf(p) > index) || ready[0] || null;

  useEffect(() => {
    if (project) document.title = `${project.title} — Case Study | Manas Upadhyay (manasxz)`;
  }, [project]);

  if (!project) return <NotFound label="Project not found" detail={`There is no project called “${slug}”.`} />;

  return <ProjectDetailLayout key={project.slug} project={project} index={index} nextProject={nextProject} />;
}
