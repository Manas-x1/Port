/**
 * ProjectsShowcase.jsx — Selected work as a bento grid of every finished project.
 * Cards with clips come alive (hover on desktop, in view on phones); projects still
 * in production follow as a compact index so nothing is hidden.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../ui/SectionHeader';
import BrandBackdrop from '../project/BrandBackdrop';
import LoopVideo from '../ui/LoopVideo';
import { projects } from '../../data/projects';

const READY = projects.filter((p) => p.thumbnail);
const UPCOMING = projects.filter((p) => !p.thumbnail);
const pad = (n) => String(n).padStart(2, '0');

// Phone: 2 columns, the lead full width, and the last card full width if one would be left alone.
// Desktop: 12 columns, a big lead with two beside it, rows of three, then the rest share the last row.
function spanFor(i, total) {
  const phoneWide = i === 0 || (i === total - 1 && (total - 1) % 2 === 1);
  const phone = phoneWide ? 'col-span-2' : 'col-span-1';
  if (i === 0) return `${phone} lg:col-span-8 lg:row-span-2`;
  if (i < 3) return `${phone} lg:col-span-4`;
  const rest = total - 3;
  const tail = rest % 3;
  if (i - 3 < rest - tail) return `${phone} lg:col-span-4`;
  return `${phone} ${tail === 2 ? 'lg:col-span-6' : 'lg:col-span-12'}`;
}

function Tile({ project, i, total }) {
  const num = pad(projects.indexOf(project) + 1);
  const lead = i === 0;
  const wide = spanFor(i, total).startsWith('col-span-2');
  const clip = project.clips?.[0];

  return (
    <Link
      to={`/project/${project.slug}`}
      aria-label={`${project.title}, ${project.category}`}
      className={`reveal group relative block overflow-hidden bg-carbon ${spanFor(i, total)} ${
        lead ? 'aspect-[4/5] sm:aspect-[16/10]' : wide ? 'aspect-[16/9]' : 'aspect-[3/4] sm:aspect-[4/3]'
      } lg:aspect-auto`}
    >
      <div className="frame scrim !absolute inset-0">
        {project.brand ? (
          <BrandBackdrop brand={project.brand} name={project.title} />
        ) : clip ? (
          <LoopVideo
            src={clip.src}
            poster={project.thumbnail}
            hoverTarget="a"
            className="absolute inset-0 w-full h-full object-cover brightness-[0.62] group-hover:brightness-[0.85] transition-[filter] duration-700"
          />
        ) : (
          <img src={project.thumbnail} alt="" loading="lazy" decoding="async" className="brightness-[0.62] group-hover:brightness-[0.85]" />
        )}
      </div>
      <div className="absolute inset-x-0 bottom-0 z-10 p-3 sm:p-6 lg:p-7 flex flex-col gap-1.5 sm:gap-2.5">
        <span className="t-label text-fog-light text-[10px] sm:text-xs truncate">
          <span className="text-bone-white tabular-nums">{num}</span> — {project.category}
        </span>
        <h3
          className={`m-0 text-bone-white font-display font-extrabold uppercase leading-[0.92] tracking-[-0.03em] ${
            lead ? 'text-[clamp(34px,6vw,88px)]' : 'text-[clamp(18px,2.4vw,36px)]'
          }`}
        >
          {project.title}
        </h3>
      </div>
      <span
        aria-hidden="true"
        className="absolute top-3 right-3 sm:top-5 sm:right-5 z-10 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border border-bone-white/30 text-bone-white bg-void-black/30 transition-colors duration-500 group-hover:bg-bone-white group-hover:text-void-black"
      >
        ↗
      </span>
    </Link>
  );
}

export default function ProjectsShowcase() {
  return (
    <section id="projects" className="section bg-void-black">
      <div className="shell">
        <SectionHeader
          index="02"
          label="Selected work"
          aside={<span className="tabular-nums">{pad(projects.length)} projects</span>}
          title={<>Films, worlds <span className="t-serif">&amp;</span> frames</>}
        />

        <div className="grid grid-cols-2 lg:grid-cols-12 lg:auto-rows-[clamp(220px,21vw,340px)] gap-[var(--col-gap)]">
          {READY.map((p, i) => (
            <Tile key={p.slug} project={p} i={i} total={READY.length} />
          ))}
        </div>

        {UPCOMING.length > 0 && (
          <div className="mt-14 sm:mt-20">
            <div className="t-label text-steel-mid flex justify-between gap-6 mb-2">
              <span>In production</span>
              <span className="tabular-nums">{pad(UPCOMING.length)}</span>
            </div>
            <ul className="list-none m-0 p-0">
              {UPCOMING.map((p) => (
                <li key={p.slug} className="rule-t">
                  <Link
                    to={`/project/${p.slug}`}
                    className="group grid grid-cols-[2.5rem_1fr_auto] sm:grid-cols-[4rem_1fr_1fr_auto] items-baseline gap-4 py-5 sm:py-6"
                  >
                    <span className="t-label text-steel-mid tabular-nums">{pad(projects.indexOf(p) + 1)}</span>
                    <span className="font-display font-extrabold uppercase tracking-[-0.02em] text-bone-white text-xl sm:text-3xl leading-none transition-colors duration-300 group-hover:text-ember-orange">
                      {p.title}
                    </span>
                    <span className="hidden sm:block t-label text-fog-light">{p.category}</span>
                    <span aria-hidden="true" className="text-steel-mid transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-12 sm:mt-16 flex justify-center">
          <Link to="/work" className="btn btn-ghost w-full sm:w-auto">
            Full archive <span className="text-steel-mid tabular-nums">({projects.length})</span> <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
