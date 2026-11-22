/**
 * ProjectDetailLayout.jsx — case study.
 *
 *   Title card: cover, or a random slideshow of the clips            (project.heroSlideshow)
 *               title fitted to the full width, serif note, meta grid
 *   Overview:   description + numbered scope, tools line
 *   Stills:     grouped by part of the story                           (project.stills)
 *               or one wide frame + two-up                             (project.images)
 *   Videos:     muted shots that run only while on screen              (project.clips)
 *   Film:       poster that loads the YouTube player only when tapped  (project.videoUrl)
 *   Credits:    studio credit and ownership notice                 (project.rights)
 *   Next:       the next project as its own title card
 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { projects } from '../../data/projects';
import Footer from '../layout/Footer';
import LoopVideo from '../ui/LoopVideo';
import HeroSlideshow from './HeroSlideshow';
import MediaPlaceholder from './MediaPlaceholder';
import useFitText from '../../hooks/useFitText';
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

// Title-card background: random slideshow of the clips (paused off screen), else the cover image
function HeroMedia({ project }) {
  const reduceMotion = useReducedMotion();
  const [ref, inView] = useInView({ rootMargin: '0px', initial: true });
  const slideshow = project.heroSlideshow && project.clips?.length > 1 && !reduceMotion;

  return (
    <div ref={ref} className="absolute inset-0">
      {slideshow ? (
        <HeroSlideshow clips={project.clips} active={inView} />
      ) : !project.thumbnail ? (
        <MediaPlaceholder label="" />
      ) : (
        <motion.img
          src={project.thumbnail}
          alt=""
          fetchPriority="high"
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.4, ease: EASE }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
    </div>
  );
}

// One line of the title, sized to span the full width of the shell
function FitLine({ children, delay = 0 }) {
  const { boxRef, textRef, fontSize } = useFitText();
  return (
    <span ref={boxRef} className="block w-full overflow-hidden pb-[0.04em]">
      <motion.span
        ref={textRef}
        className="inline-block whitespace-nowrap"
        style={{ fontSize: fontSize ? `${fontSize}px` : '14vw', marginRight: '-0.02em' }}
        initial={{ y: '105%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 1.4, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

// Title card heading: one fitted line on tablets and up; one fitted line per word on phones
function FitTitle({ title }) {
  const words = title.split(' ');
  return (
    <h1 className="m-0 font-display font-extrabold uppercase text-bone-white leading-[0.82] tracking-[-0.045em]" aria-label={title}>
      <span className="hidden sm:block" aria-hidden="true">
        <FitLine delay={0.3}>{title}</FitLine>
      </span>
      <span className="sm:hidden" aria-hidden="true">
        {words.map((w, i) => (
          <FitLine key={i} delay={0.3 + i * 0.1}>{w}</FitLine>
        ))}
      </span>
    </h1>
  );
}

// Grid stills ship an 800px version (stills/sm/) next to the 1600px one; the browser picks
function Still({ src, caption, n, aspect = 'aspect-video', small = false }) {
  const sm = small && src.includes('/stills/') ? src.replace('/stills/', '/stills/sm/') : null;
  return (
    <figure className="reveal m-0">
      <div className={`frame ${aspect}`}>
        <img
          src={sm || src}
          srcSet={sm ? `${sm} 800w, ${src} 1600w` : undefined}
          sizes={sm ? '(min-width: 1024px) 31vw, (min-width: 640px) 47vw, 92vw' : undefined}
          alt={caption || ''}
          loading="lazy"
          decoding="async"
        />
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
                  <Still key={s.src} {...s} small />
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
    project.studio && { label: 'Studio', value: project.studio },
    project.role && { label: 'Role', value: project.role, wide: true },
    { label: 'Project', value: `${pad(index + 1)} / ${pad(projects.length)}`, hidePhone: true },
  ].filter(Boolean);

  return (
    <div className="w-full bg-void-black text-bone-white">
      {/* ── Title card ── */}
      <header className="relative w-full h-[92svh] min-h-[560px] flex flex-col justify-end overflow-hidden">
        <HeroMedia project={project} />
        <div className="absolute inset-0 bg-gradient-to-t from-void-black from-10% via-void-black/70 via-50% to-void-black/10" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-void-black/70 to-transparent" />

        <div className="shell relative z-10 pb-16 sm:pb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="flex items-center justify-between gap-6 mb-6 sm:mb-8"
          >
            <Link to="/work" className="inline-flex items-center gap-3 min-h-10 t-label text-fog-light hover:text-bone-white transition-colors">
              <span aria-hidden="true">←</span> Archive
            </Link>
            {project.series && <span className="t-label text-fog-light text-right">{project.series}</span>}
          </motion.div>

          <FitTitle title={project.title} />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: EASE }}
            className="grid-12 gap-y-6 mt-6 sm:mt-8 items-end"
          >
            {project.note && (
              <p
                className="col-span-4 lg:col-span-5 m-0 t-serif text-bone-white/85 leading-[1.1]"
                style={{ fontSize: 'clamp(22px, 2.3vw, 34px)' }}
              >
                {project.note}
              </p>
            )}
            <dl className={`col-span-4 ${project.note ? 'lg:col-start-7 lg:col-span-6' : 'lg:col-span-12'} m-0 rule-t pt-5 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-5`}>
              {meta.map((m) => (
                <div key={m.label} className={m.hidePhone ? 'hidden sm:block' : ''}>
                  <dt className="t-label text-steel-mid mb-2">{m.label}</dt>
                  <dd className="m-0 font-display text-[16px] sm:text-[17px] leading-snug text-bone-white tabular-nums">{m.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
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
            {project.bullets?.length > 0 && (
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
            )}
          </div>

          {project.skills?.length > 0 && (
            <div className="reveal mt-[var(--stack)] rule-t rule-b py-5 flex flex-wrap gap-x-6 gap-y-2 t-label">
              <span className="text-steel-mid">Tools</span>
              {project.skills.map((s) => (
                <span key={s} className="text-bone-white">{s}</span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Stills ── */}
      {(project.stills?.length > 0 || project.images?.length > 0) && (
        <section className="section pt-0 [content-visibility:auto] [contain-intrinsic-size:auto_2400px]">
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
        <section className="section pt-0 [content-visibility:auto] [contain-intrinsic-size:auto_2400px]">
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

      {/* ── Credits & rights ── */}
      {project.rights && (
        <section className="section pt-0">
          <div className="shell">
            <Label index={next()}>Credits</Label>
            <div className="grid-12 gap-y-10">
              <dl className="col-span-4 lg:col-span-5 m-0">
                {[
                  project.studio && ['Studio', project.studio],
                  project.client && ['Made for', project.client],
                  project.role && ['My role', project.role],
                  project.skills?.length > 0 && ['Tools', project.skills.join(', ')],
                ]
                  .filter(Boolean)
                  .map(([k, v]) => (
                    <div key={k} className="rule-t py-4 grid grid-cols-[7rem_1fr] gap-4">
                      <dt className="t-label text-steel-mid pt-1">{k}</dt>
                      <dd className="m-0 font-display text-[17px] leading-snug text-bone-white">{v}</dd>
                    </div>
                  ))}
              </dl>
              <div className="col-span-4 lg:col-start-7 lg:col-span-6">
                <p className="t-body text-fog-light m-0 max-w-[60ch]">{project.rights}</p>
                {project.studio && (
                  <p className="t-label text-steel-mid mt-6 mb-0">© {project.studio}. All rights reserved.</p>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Next project ── */}
      {nextProject && (
        <section aria-label="Next project">
          <Link to={`/project/${nextProject.slug}`} className="group block relative overflow-hidden">
            <div className="frame h-[70svh] min-h-[420px]">
              {nextProject.thumbnail ? (
                <img src={nextProject.thumbnail} alt="" loading="lazy" className="opacity-50" />
              ) : (
                <MediaPlaceholder label="" />
              )}
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
