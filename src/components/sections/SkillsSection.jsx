/**
 * SkillsSection.jsx — home-page preview of the disciplines, pointing to /skills.
 * Also exports SkillsIndex (the full rows with descriptions), used on the Skills page.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../ui/SectionHeader';
import { SKILL_CATEGORIES } from '../../data/skills';

const pad = (n) => String(n).padStart(2, '0');

export function SkillsIndex() {
  return (
    <ol className="list-none m-0 p-0 rule-b">
      {SKILL_CATEGORIES.map((cat, i) => (
        <li key={cat.category} className="reveal rule-t py-8 sm:py-10 grid-12 gap-y-4">
          <div className="col-span-4 lg:col-span-5 flex items-baseline gap-5 sm:gap-8">
            <span className="t-label text-steel-mid tabular-nums w-6 shrink-0">{pad(i + 1)}</span>
            <h3 className="m-0 t-h3 text-bone-white">{cat.category}</h3>
          </div>
          <p className="col-span-4 lg:col-span-4 m-0 t-body text-fog-light max-w-[44ch]">{cat.detail}</p>
          <ul className="col-span-4 lg:col-span-3 list-none m-0 p-0 flex flex-wrap lg:flex-col gap-x-4 gap-y-1.5 t-label text-bone-white lg:pt-1">
            {cat.skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="section bg-void-black">
      <div className="shell">
        <SectionHeader
          index="03"
          label="Skills & tools"
          aside={<span className="tabular-nums">{pad(SKILL_CATEGORIES.length)} disciplines</span>}
          title={<>The <span className="t-serif">production</span> stack</>}
        />

        {/* Compact rows: name and tool count; the full breakdown lives on /skills */}
        <ul className="list-none m-0 p-0 rule-b">
          {SKILL_CATEGORIES.map((cat, i) => (
            <li key={cat.category} className="reveal rule-t">
              <Link to="/skills" className="group flex items-baseline gap-5 sm:gap-8 py-5 sm:py-7">
                <span className="t-label text-steel-mid tabular-nums w-6 shrink-0">{pad(i + 1)}</span>
                <span className="t-h3 text-bone-white transition-transform duration-700 group-hover:translate-x-2">{cat.category}</span>
                <span className="ml-auto t-label text-steel-mid whitespace-nowrap">
                  <span className="hidden sm:inline">{cat.skills.slice(0, 2).join(' · ')} · </span>
                  {pad(cat.skills.length)} tools
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12 sm:mt-16 flex justify-center">
          <Link to="/skills" className="btn btn-ghost w-full sm:w-auto">
            Skills &amp; tools in full <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
