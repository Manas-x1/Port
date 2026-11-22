/**
 * ProjectDetailLayout.jsx — case study.
 *
 *   Title card: cover, or a random crossfading slideshow of the clips  (project.heroSlideshow)
 *   Overview:   description + numbered scope, tools line
 *   Stills:     grouped by part of the story                           (project.stills)
 *               or one wide frame + two-up                             (project.images)
 *   Videos:     muted shots that run only while on screen              (project.clips)
 *   Film:       poster that loads the YouTube player only when tapped  (project.videoUrl)
 *   Next:       the next project as its own title card
 */
import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { projects } from '../../data/projects';
import Footer from '../layout/Footer';
import LoopVideo from '../ui/LoopVideo';
import CinematicBackground from '../ui/CinematicBackground';
import useInView from '../../hooks/useInView';
import useReveal from '../../hooks/useReveal';

const EASE = [0.16, 1, 0.3, 1];
const pad = (n) => String(n).padStart(2, '0');

function Label({ index, children, aside }) {
  return (
    <div className="rule-t pt-4 t-label text-steel-mid stack-gap flex justify-between gap-6">
      <span>
        <span className="text-bone-white tabular-nums">{index}</span> — {children}
      </span>
      {aside && <span className="text-right">{aside}</span>}
    </div>
  );
}

function FilmPoster({ project }) {
  const [playing, setPlaying] = useState(false);
  const src = project.videoUrl.replace('autoplay=0', 'autoplay=1');
  const poster = project.images?.[0] || project.thumbnail;

  return (
    <div className="frame aspect-video">
      {playing ? (
        <iframe
          src={src}
          title={`${project.title} film`}
          className="absolute inset-0 w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <PlayButton label={`Play ${project.title}`} poster={poster} onClick={() => setPlaying(true)} text="Play film" />
      )}
    </div>
  );
}

function PlayButton({ label, poster, onClick, text }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group absolute inset-0 w-full h-full cursor-pointer p-0 border-0 bg-transparent"
      aria-label={label}
    >
      <img src={poster} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-70" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="inline-flex items-center gap-3 h-14 px-6 bg-void-black/60 border border-bone-white/40 t-label text-bone-white transition-colors duration-500 group-hover:bg-bone-white group-hover:text-void-black">
          <span aria-hidden="true">▶</span> {text}
        </span>
      </span>
    </button>
  );
}

// Title-card background: a random crossfading slideshow of the project's clips
// (paused once the title card scrolls away), or the cover image
function HeroMedia({ project }) {
  const reduceMotion = useReducedMotion();
  const [ref, inView] = useInView({ rootMargin: '0px', initial: true });
  const srcs = useMemo(() => (project.clips || []).map((c) => c.src), [project.clips]);
  const slideshow = project.heroSlideshow && srcs.length > 1 && !reduceMotion;

  return (
    <div ref={ref} className="absolute inset-0">
      <motion.img
        src={project.thumbnail}
        alt=""
        fetchPriority="high"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.4, ease: EASE }}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {slideshow && (
        <CinematicBackground videos={srcs} paused={!inView} maxClipDuration={4} fadeDuration={900} tintOpacity={0} />
      )}
    </div>
  );
}

function Still({ src, caption, n, aspect = 'aspect-video' }) {
  return (
    <figure className="reveal m-0">
      <div className={`frame ${aspect}`}>
        <img src={src} alt={caption || ''} loading="lazy" decoding="async" />
      </div>
      <figcaption className="t-label text-steel-mid mt-3 flex gap-3">
        <span className="tabular-nums text-bone-white">{pad(n)}</span>
        {caption && <span>{caption}</span>}
      </figcaption>
    </figure>
  );
}

// Stills grouped by part of the story; the first of each group runs full width
function GroupedStills({ stills }) {
  const groups = [];
  stills.forEach((s, i) => {
    const last = groups[groups.length - 1];
    const item = { ...s, n: i + 1 };
    if (last && last.name === s.section) last.items.push(item);
    else groups.push({ name: s.section, items: [item] });
  });

  return (
    <div className="space-y-[var(--stack)]">
      {groups.map((g) => {
        const [first, ...rest] = g.items;
        return (
          <div key={g.name}>
            <h3 className="t-h3 m-0 mb-6 text-bone-white flex items-baseline justify-between gap-4">
              <span>{g.name}</span>
              <span className="t-label text-steel-mid tabular-nums">{pad(g.items.length)} stills</span>
            </h3>
            <Still {...first} />
            {rest.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[var(--col-gap)] mt-[var(--col-gap)]">
                {rest.map((s) => (
                  <Still key={s.src} {...s} />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function SimpleStills({ project }) {
  const [lead, ...stills] = project.images;
  return (
    <>
      {lead && <Still src={lead} caption={null} n={1} aspect="aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/9]" />}
      {stills.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--col-gap)] mt-[var(--col-gap)]">
          {stills.map((img, i) => (
            <Still key={img + i} src={img} caption={null} n={i + 2} aspect="aspect-[4/5] sm:aspect-[4/3]" />
          ))}
        </div>
      )}
    </>
  );
}

export default function ProjectDetailLayout({ project, index, nextProject }) {
  useReveal(project.slug);

  // Number sections in the order they appear
  let n = 1;
  const next = () => pad(n++);

  const meta = [
    { label: 'Category', value: project.category, wide: true },
    project.client && { label: 'Made for', value: project.client },
    project.role && { label: 'Role', value: project.role, wide: true },
    { label: 'Project', value: `${pad(index + 1)} / ${pad(projects.length)}` },
  ].filter(Boolean);

  return (
    <div className="w-full bg-void-black text-bone-white">
      {/* ── Title card ── */}
      <header className="relative w-full h-[88svh] min-h-[520px] flex flex-col justify-end overflow-hidden">
        <HeroMedia project={project} />
        <div className="absolute inset-0 bg-gradient-to-t from-void-black via-void-black/40 to-void-black/30" />

        <div className="shell relative z-10 pb-20 sm:pb-24">
          <Link to="/work" className="inline-flex items-center gap-3 min-h-10 t-label text-fog-light hover:text-bone-white transition-colors mb-6">
            <span aria-hidden="true">←</span> All work
          </Link>
          <h1 className="t-h1 m-0 text-bone-white max-w-[14ch]">
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span
                className="block"
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1.4, delay: 0.3, ease: EASE }}
              >
                {project.title}
              </motion.span>
            </span>
          </h1>
          {project.note && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="t-serif text-fog-light text-xl sm:text-2xl mt-3 mb-0"
            >
              {project.note}
            </motion.p>
          )}
          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="rule-t mt-8 pt-4 m-0 grid grid-cols-2 sm:flex sm:flex-wrap sm:gap-x-12 gap-x-4 gap-y-3 t-label"
          >
            {meta.map((m) => (
              <div key={m.label} className={m.wide ? 'col-span-2 sm:col-span-1' : ''}>
                <dt className="text-steel-mid mb-1">{m.label}</dt>
                <dd className="m-0 tabular-nums">{m.value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </header>

      {/* ── Overview ── */}
      <section className="section">
        <div className="shell">
          <Label index={next()}>Overview</Label>
          <div className="grid-12 gap-y-12">
            <p className="reveal col-span-4 lg:col-span-7 m-0 t-lead text-bone-white" style={{ fontSize: 'clamp(20px, 2vw, 28px)' }}>
              {project.description}
            </p>
            <div className="reveal col-span-4 lg:col-start-9 lg:col-span-4">
              <h2 className="t-label text-steel-mid m-0 mb-4">Scope</h2>
              <ol className="list-none m-0 p-0">
                {project.bullets.map((b, i) => (
                  <li key={i} className="rule-t py-4 flex gap-4 t-body text-fog-light">
                    <span className="t-label text-steel-mid tabular-nums pt-1 shrink-0">{pad(i + 1)}</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="reveal mt-[var(--stack)] rule-t rule-b py-5 flex flex-wrap gap-x-6 gap-y-2 t-label">
            <span className="text-steel-mid">Tools</span>
            {project.skills.map((s) => (
              <span key={s} className="text-bone-white">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stills ── */}
      {(project.stills?.length > 0 || project.images?.length > 0) && (
        <section className="section pt-0">
          <div className="shell">
            <Label
              index={next()}
              aside={project.stills && <span className="tabular-nums">{pad(project.stills.length)} frames</span>}
            >
              Stills
            </Label>
            {project.stills ? <GroupedStills stills={project.stills} /> : <SimpleStills project={project} />}
          </div>
        </section>
      )}

      {/* ── Videos ── */}
      {project.clips?.length > 0 && (
        <section className="section pt-0">
          <div className="shell">
            <Label index={next()} aside={<span className="tabular-nums">{pad(project.clips.length)} shots</span>}>Videos</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[var(--col-gap)]">
              {project.clips.map((c, i) => (
                <figure key={c.src} className="reveal m-0">
                  <div className="frame aspect-video">
                    <LoopVideo src={c.src} poster={c.poster} label={c.caption} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <figcaption className="t-label text-steel-mid mt-3 flex gap-3">
                    <span className="tabular-nums text-bone-white">{pad(i + 1)}</span>
                    <span>{c.caption}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Film (YouTube) ── */}
      {project.videoUrl && (
        <section className="section pt-0">
          <div className="shell">
            <Label index={next()}>Film</Label>
            <div className="reveal">
              <FilmPoster project={project} />
            </div>
          </div>
        </section>
      )}

      {/* ── Next project ── */}
      {nextProject && (
        <section aria-label="Next project">
          <Link to={`/project/${nextProject.slug}`} className="group block relative overflow-hidden">
            <div className="frame h-[70svh] min-h-[420px]">
              <img src={nextProject.thumbnail} alt="" loading="lazy" className="opacity-50" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-void-black via-void-black/30 to-void-black" />
            <div className="absolute inset-0 flex flex-col justify-between">
              <div className="shell pt-20 sm:pt-24">
                <div className="rule-t pt-4 flex justify-between gap-6 t-label text-steel-mid">
                  <span>Next project</span>
                  <span className="tabular-nums">{pad(projects.indexOf(nextProject) + 1)} / {pad(projects.length)}</span>
                </div>
              </div>
              <div className="shell pb-20">
                <span className="block t-label text-fog-light mb-4">{nextProject.category}</span>
                <span className="flex items-end justify-between gap-6">
                  <span className="t-h1 text-bone-white max-w-[14ch] transition-transform duration-1000 group-hover:translate-x-2">
                    {nextProject.title}
                  </span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center border border-bone-white/40 text-bone-white text-xl transition-colors duration-500 group-hover:bg-bone-white group-hover:text-void-black"
                  >
                    →
                  </span>
                </span>
              </div>
            </div>
          </Link>
        </section>
      )}

      <Footer />
    </div>
  );
}
