/**
 * TimelineSection.jsx — 2020 → 2026 as an editorial chronology.
 * One ruled row per year; a hairline on the left fills as you scroll,
 * and each year lights up as it reaches the middle of the screen.
 */
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';

const TIMELINE = [
  {
    year: '2020',
    era: 'The Beginning',
    theme: 'Lockdown',
    body: "A guy who spent his days immersed in music, games, art, and the internet. The world stopped, but his curiosity didn't.",
  },
  {
    year: '2021',
    era: 'The Spark',
    theme: 'Discovering',
    body: "Started exploring those interests more deeply. Games weren't just something to play anymore; art wasn't just something to look at. The idea of creating things started taking shape.",
  },
  {
    year: '2022',
    era: 'The Awakening',
    theme: 'Choosing to be different',
    body: "10th class. A realization that he didn't want to follow the usual path. Started thinking differently about what he wanted to do and who he wanted to become.",
  },
  {
    year: '2023',
    era: 'Stepping Out',
    theme: 'Experimenting',
    body: 'Started stepping outside the familiar. Tried new things, explored creative fields, learned through trial and error, and began figuring out what actually felt right.',
  },
  {
    year: '2024',
    era: 'Learning to Walk',
    theme: 'Game design & animation',
    body: 'Started seriously learning game design, 3D, animation, Blender, and the fundamentals of creating digital worlds. Still learning, still falling, but finally moving.',
  },
  {
    year: '2025',
    era: 'The Sprints',
    theme: 'College & AI',
    body: 'Joined college and started getting hands-on experience with AI and creative technology. Started turning skills into actual work, projects, and experience.',
  },
  {
    year: '2026',
    era: 'Flying',
    theme: 'Breaking into the industry',
    body: 'Landed an internship/job and began working with AI art professionally. What started as an interest in games, music, and art had finally turned into something real.',
  },
];

const EASE = [0.16, 1, 0.3, 1];

function Row({ item, isLast }) {
  return (
    <motion.li
      className="rule-t py-10 sm:py-14 grid-12 gap-y-4"
      initial="dim"
      whileInView="lit"
      viewport={{ margin: '-45% 0px -45% 0px' }}
    >
      <motion.span
        className="col-span-4 lg:col-span-4 font-display font-light tabular-nums leading-[0.85] tracking-[-0.04em]"
        style={{ fontSize: 'clamp(64px, 11vw, 160px)' }}
        variants={{
          dim: { color: 'rgba(242,239,233,0.18)' },
          lit: { color: isLast ? '#ff4f2b' : 'rgba(242,239,233,1)' },
        }}
        transition={{ duration: 0.9, ease: EASE }}
      >
        {item.year}
      </motion.span>
      <div className="col-span-4 lg:col-start-6 lg:col-span-3 lg:pt-3">
        <span className="block t-label text-steel-mid mb-3">{item.theme}</span>
        <h3 className="m-0 t-h3 text-bone-white">{item.era}</h3>
      </div>
      <p className="col-span-4 lg:col-start-9 lg:col-span-4 m-0 t-body text-fog-light lg:pt-3">{item.body}</p>
    </motion.li>
  );
}

export default function TimelineSection() {
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 50%', 'end 50%'] });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 24, restDelta: 0.001 });

  return (
    <section id="timeline" className="section pt-0 bg-void-black">
      <div className="shell">
        <SectionHeader
          index="01"
          label="Chronology"
          aside="2020 — 2026"
          title={<>From curiosity <span className="t-serif">to creation</span></>}
        />

        <div className="relative">
          {/* Progress hairline */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-bone-white/10 -translate-x-[calc(var(--gutter)/2)] hidden sm:block" aria-hidden="true">
            <motion.div className="absolute inset-0 bg-bone-white origin-top" style={{ scaleY: progress }} />
          </div>
          <ol ref={listRef} className="list-none m-0 p-0 rule-b">
            {TIMELINE.map((item, i) => (
              <Row key={item.year} item={item} isLast={i === TIMELINE.length - 1} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
