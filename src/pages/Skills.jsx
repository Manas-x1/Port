/**
 * Skills.jsx — Skills & tools page.
 * Title card → disciplines in full → every tool in one list → call to action → footer.
 */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import PageHeader from '../components/ui/PageHeader';
import SectionHeader from '../components/ui/SectionHeader';
import { SkillsIndex } from '../components/sections/SkillsSection';
import { SKILL_CATEGORIES } from '../data/skills';
import useReveal from '../hooks/useReveal';

const ALL_TOOLS = [...new Set(SKILL_CATEGORIES.flatMap((c) => c.skills))];
const pad = (n) => String(n).padStart(2, '0');

export default function Skills() {
  useEffect(() => {
    document.title = 'Skills & Tools | Manas Upadhyay (manasxz)';
  }, []);
  useReveal();

  return (
    <div className="w-full bg-void-black text-bone-white min-h-screen">
      <PageHeader
        label="Skills & tools"
        aside={<span className="tabular-nums">{pad(SKILL_CATEGORIES.length)} disciplines</span>}
        title={<>The <span className="t-serif">production</span> stack</>}
        lead="3D, film, design and generative AI: the disciplines and tools behind the work."
      />

      <section className="shell pb-[var(--section-y)]">
        <SectionHeader index="01" label="Disciplines" />
        <SkillsIndex />
      </section>

      <section className="shell pb-[var(--section-y)]">
        <SectionHeader index="02" label="Every tool" aside={<span className="tabular-nums">{pad(ALL_TOOLS.length)} tools</span>} />
        {/* Slightly smaller than h2 on phones so "Substance Designer" fits on one line at 360px */}
        <p className="reveal m-0 t-h2 text-bone-white" style={{ fontSize: 'clamp(26px, 5.2vw, 76px)' }}>
          {ALL_TOOLS.map((tool, i) => (
            <React.Fragment key={tool}>
              <span className="whitespace-nowrap">{tool}</span>
              {i < ALL_TOOLS.length - 1 && <span className="t-serif text-steel-mid"> / </span>}
            </React.Fragment>
          ))}
        </p>
      </section>

      <section className="shell">
        <div className="rule-t pt-4 t-label text-steel-mid">
          <span className="text-bone-white">03</span> — Next
        </div>
        <div className="grid-12 gap-y-10 mt-10 sm:mt-14">
          <h2 className="col-span-4 lg:col-span-8 m-0 t-h1 text-bone-white">
            See it <span className="t-serif">in use</span>
          </h2>
          <div className="col-span-4 lg:col-start-9 lg:col-span-4 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 justify-end">
            <Link to="/work" className="btn btn-primary">
              See the work <span aria-hidden="true">→</span>
            </Link>
            <Link to="/contact" className="btn btn-ghost">
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
