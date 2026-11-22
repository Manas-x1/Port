/**
 * Work.jsx — the archive. Title card, filters (scroll sideways on phones), two-up title cards.
 */
import React, { useState, useEffect, useMemo } from 'react';
import { projects } from '../data/projects';
import Footer from '../components/layout/Footer';
import PageHeader from '../components/ui/PageHeader';
import ProjectCard from '../components/project/ProjectCard';
import useReveal from '../hooks/useReveal';

// Filters match on each project's category text
const FILTERS = [
  { label: 'All', test: () => true },
  { label: 'Cinematic', test: (c) => /cinematic/i.test(c) },
  { label: 'Worldbuilding', test: (c) => /world/i.test(c) },
  { label: 'Image & concept', test: (c) => /image|concept/i.test(c) },
  { label: 'Film & video', test: (c) => /film|video/i.test(c) },
];

export default function Work() {
  const [active, setActive] = useState('All');

  useEffect(() => {
    document.title = 'Work Archive & AI Case Studies | Manas Upadhyay (manasxz)';
  }, []);

  const counts = useMemo(
    () => Object.fromEntries(FILTERS.map((f) => [f.label, projects.filter((p) => f.test(p.category)).length])),
    []
  );
  const filter = FILTERS.find((f) => f.label === active);
  const visible = projects
    .map((p, i) => ({ p, i }))
    .filter(({ p }) => filter.test(p.category));

  useReveal(active);

  return (
    <div className="w-full bg-void-black text-bone-white min-h-screen">
      <PageHeader
        label="Work"
        aside={<span className="tabular-nums">{String(projects.length).padStart(2, '0')} projects</span>}
        title={<>The <span className="t-serif">archive</span></>}
        lead="AI cinematic filmmaking, concept art and 3D visual design."
      />

      <div className="shell">
        {/* Filters */}
        <div
          role="toolbar"
          aria-label="Filter projects"
          className="flex gap-2 overflow-x-auto no-scrollbar -mx-[var(--gutter)] px-[var(--gutter)] pb-6 mb-[var(--col-gap)] rule-b"
        >
          {FILTERS.map((f) => {
            const on = active === f.label;
            return (
              <button
                key={f.label}
                type="button"
                onClick={() => setActive(f.label)}
                aria-pressed={on}
                disabled={!counts[f.label]}
                className={`shrink-0 inline-flex items-center gap-2 h-10 px-4 t-label border transition-colors duration-500 cursor-pointer disabled:opacity-30 disabled:cursor-default ${
                  on
                    ? 'bg-bone-white text-void-black border-bone-white'
                    : 'bg-transparent text-fog-light border-bone-white/20 hover:border-bone-white hover:text-bone-white'
                }`}
              >
                {f.label}
                <span className={`tabular-nums ${on ? 'text-void-black/50' : 'text-steel-mid'}`}>{counts[f.label]}</span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--col-gap)] pb-8">
          {visible.map(({ p, i }) => (
            <div key={p.slug} className="reveal">
              <ProjectCard project={p} index={i} aspect="aspect-[4/5] lg:aspect-[4/3]" />
              <p className="t-body text-fog-light mt-4 mb-0 line-clamp-2 max-w-[56ch]">{p.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
