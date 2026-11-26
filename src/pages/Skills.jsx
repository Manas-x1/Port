/**
 * Skills.jsx — Skills & tools page.
 * Title card → disciplines in full → every tool in one list → call to action → footer.
 */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import { openContact } from '../data/contact';
import PageHeader from '../components/ui/PageHeader';
import SectionHeader from '../components/ui/SectionHeader';
import ToolLogo from '../components/ui/ToolLogo';
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
        {/* Logo stack: hairline grid, logos in one colour; hover lifts the tile */}
        <ul className="reveal list-none m-0 p-0 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-px bg-[var(--rule)] border border-[var(--rule)]">
          {ALL_TOOLS.map((tool) => (
            <li key={tool} className="group aspect-square bg-void-black flex flex-col text-fog-light transition-colors duration-500 hover:bg-[#0d0d0d] hover:text-bone-white">
              <span className="flex-1 min-h-0 flex items-center justify-center transition-transform duration-700 group-hover:-translate-y-1">
                <ToolLogo name={tool} size={34} />
              </span>
              <span className="px-2.5 pb-2.5 sm:px-3 sm:pb-3 t-label text-[9px] sm:text-[11px] tracking-[0.12em] text-steel-mid leading-tight min-h-[2.6em] transition-colors duration-500 group-hover:text-fog-light">
                {tool}
              </span>
            </li>
          ))}
          {/* Empty tiles so the last row is complete at 3, 4 and 6 columns */}
          {Array.from({ length: 5 }, (_, k) => {
            const need = (c) => k < (c - (ALL_TOOLS.length % c)) % c;
            const cls = [need(3) ? 'block' : 'hidden', need(4) ? 'sm:block' : 'sm:hidden', need(6) ? 'lg:block' : 'lg:hidden'].join(' ');
            return <li key={`fill-${k}`} aria-hidden="true" className={`${cls} aspect-square bg-void-black`} />;
          })}
        </ul>
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
            <button type="button" onClick={openContact} className="btn btn-ghost">
              Get in touch
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
