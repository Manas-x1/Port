/**
 * Work.jsx — the archive as one scroll.
 *
 * Projects sit in three groups (AI work, AR, 3D). A sticky index follows the scroll:
 *   desktop — left column listing each group and its numbered projects
 * The item in view lights up; tapping an entry scrolls to it.
 */
import React, { useEffect, useState } from 'react';
import { projects } from '../data/projects';
import Footer from '../components/layout/Footer';
import PageHeader from '../components/ui/PageHeader';
import ProjectCard from '../components/project/ProjectCard';
import useReveal from '../hooks/useReveal';

const pad = (n) => String(n).padStart(2, '0');

const GROUPS = [
  { id: 'ai-work', name: 'AI work', test: (p) => p.group !== '3D' && !/\bAR\b/.test(p.category) },
  { id: 'ar', name: 'AR', test: (p) => /\bAR\b/.test(p.category) },
  { id: '3d', name: '3D', test: (p) => p.group === '3D' },
];

const SECTIONS = GROUPS.map((g) => ({
  ...g,
  items: projects.map((p, i) => ({ p, i })).filter(({ p }) => g.test(p)),
})).filter((g) => g.items.length);

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -110 });
  else el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Work() {
  const [activeGroup, setActiveGroup] = useState(SECTIONS[0]?.id);
  const [activeItem, setActiveItem] = useState(SECTIONS[0]?.items[0]?.p.slug);

  useEffect(() => {
    document.title = 'Archive | Manas Upadhyay (manasxz)';
  }, []);
  useReveal();

  // Whatever crosses the middle band of the screen is "current"
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          setActiveItem(e.target.dataset.slug);
          setActiveGroup(e.target.dataset.group);
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );
    document.querySelectorAll('[data-slug]').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="w-full bg-void-black text-bone-white min-h-screen">
      <PageHeader
        label="Archive"
        aside={<span className="tabular-nums">{pad(projects.length)} projects</span>}
        title={<>The <span className="t-serif">archive</span></>}
      />


      <div className="shell pt-[var(--col-gap)] lg:pt-0">
        <div className="grid-12">
          {/* Desktop: sticky index */}
          <aside className="hidden lg:block lg:col-span-3">
            <nav aria-label="Archive index" className="sticky top-28 rule-t pt-4">
              {SECTIONS.map((g) => (
                <div key={g.id} className="mb-8">
                  <button
                    type="button"
                    onClick={() => scrollToId(g.id)}
                    className={`block t-h3 text-left bg-transparent border-0 p-0 cursor-pointer transition-colors duration-500 ${
                      activeGroup === g.id ? 'text-bone-white' : 'text-steel-mid hover:text-fog-light'
                    }`}
                  >
                    {g.name}
                  </button>
                  <ul className="list-none m-0 mt-3 p-0">
                    {g.items.map(({ p, i }) => {
                      const on = activeItem === p.slug;
                      return (
                        <li key={p.slug}>
                          <button
                            type="button"
                            onClick={() => scrollToId(`work-${p.slug}`)}
                            className={`flex items-baseline gap-3 min-h-9 w-full text-left bg-transparent border-0 p-0 cursor-pointer t-label transition-colors duration-500 ${
                              on ? 'text-bone-white' : 'text-steel-mid hover:text-fog-light'
                            }`}
                          >
                            <span className="tabular-nums w-6">{pad(i + 1)}</span>
                            <span className="truncate">{p.title}</span>
                            <span
                              aria-hidden="true"
                              className={`ml-auto h-px bg-bone-white transition-all duration-700 ${on ? 'w-6' : 'w-0'}`}
                            />
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </nav>
          </aside>

          {/* Projects */}
          <div className="col-span-4 lg:col-start-4 lg:col-span-9 space-y-[var(--section-y)] pb-8">
            {SECTIONS.map((g) => (
              <section key={g.id} id={g.id} aria-label={g.name}>
                <div className="rule-t pt-4 mb-[var(--col-gap)] flex justify-between t-label text-steel-mid">
                  <span className="text-bone-white">{g.name}</span>
                  <span className="tabular-nums">{pad(g.items.length)}</span>
                </div>
                <div className="space-y-[var(--col-gap)]">
                  {g.items.map(({ p, i }) => (
                    <div key={p.slug} id={`work-${p.slug}`} data-slug={p.slug} data-group={g.id} className="reveal">
                      <ProjectCard project={p} index={i} aspect="aspect-[4/5] sm:aspect-[16/10]" size="lg" />
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
