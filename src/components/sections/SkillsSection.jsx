/**
 * SkillsSection.jsx — Skills & tech stack grid
 * 
 * Displays skills in a grid of flat cards with Ori styling.
 * Includes: Premiere Pro, Blender, Substance Painter, Google Suite,
 * Adobe Suite, After Effects, DaVinci Resolve, and more.
 * Monospaced labels, hairline borders, no border-radius.
 */
import React from 'react';
import SectionHeader from '../ui/SectionHeader';

/* Skills data — grouped by category */
const SKILL_CATEGORIES = [
  {
    category: '3D & Modeling',
    skills: ['Blender', 'Substance Painter', 'ZBrush', 'Maya'],
  },
  {
    category: 'Video & Film',
    skills: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Final Cut Pro'],
  },
  {
    category: 'Design & Graphics',
    skills: ['Photoshop', 'Illustrator', 'Figma', 'InDesign'],
  },
  {
    category: 'AI & Generative',
    skills: ['Midjourney', 'Stable Diffusion', 'RunwayML', 'ComfyUI'],
  },
  {
    category: 'Productivity',
    skills: ['Google Suite', 'Notion', 'Slack', 'Trello'],
  },
];

export default function SkillsSection() {
  return (
    <section
      className="w-full py-20 md:py-32 px-6 md:px-10 snap-section"
      id="skills"
      style={{
        backgroundColor: 'var(--color-carbon)',
        borderTop: '1px solid var(--color-graphite-border)',
        borderBottom: '1px solid var(--color-graphite-border)',
      }}
    >
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader title="Skills & Tools" number="04" />

        {/* Skills grid — categories as columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 md:gap-6">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.category}>
              {/* Category label */}
              <span
                className="block mb-4"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  fontWeight: 400,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--color-ember-orange)',
                }}
              >
                {cat.category}
              </span>

              {/* Skill items */}
              <ul className="list-none m-0 p-0 space-y-2">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="py-2 transition-colors duration-300 hover:text-bone-white"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '16px',
                      color: 'var(--color-fog-light)',
                      borderBottom: '1px solid var(--color-graphite-border)',
                    }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
