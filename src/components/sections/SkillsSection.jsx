import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import LogoLoop from '../ui/LogoLoop';
import FlipCard from '../ui/FlipCard';

// React Icons matching our exact software & tools stack
import { SiBlender, SiUnrealengine, SiFigma, SiGoogle, SiNotion } from 'react-icons/si';
import { FaSlack } from 'react-icons/fa6';
import {
  TbBrandAdobePremiere,
  TbBrandAdobeAfterEffect,
  TbBrandAdobePhotoshop,
  TbBrandAdobeIllustrator,
  TbBrandAdobeIndesign,
  TbBrandAdobe,
} from 'react-icons/tb';

/* Software and Services strictly present in our skills and tools list */
const ALL_SOFTWARE_LOGOS = [
  {
    title: 'Blender',
    category: '3D & Modeling',
    node: (
      <span className="flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-graphite-border/70 bg-void-black/60 backdrop-blur-sm text-bone-white hover:border-ember-orange/80 hover:text-ember-orange transition-colors">
        <SiBlender className="text-xl text-[#E87D0D]" />
        <span className="font-mono text-xs tracking-wider uppercase">Blender</span>
      </span>
    ),
  },
  {
    title: 'Unreal Engine',
    category: '3D & Modeling',
    node: (
      <span className="flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-graphite-border/70 bg-void-black/60 backdrop-blur-sm text-bone-white hover:border-ember-orange/80 hover:text-ember-orange transition-colors">
        <SiUnrealengine className="text-xl text-bone-white" />
        <span className="font-mono text-xs tracking-wider uppercase">Unreal</span>
      </span>
    ),
  },
  {
    title: 'Substance Painter',
    category: '3D & Modeling',
    node: (
      <span className="flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-graphite-border/70 bg-void-black/60 backdrop-blur-sm text-bone-white hover:border-ember-orange/80 hover:text-ember-orange transition-colors">
        <span className="w-5 h-5 rounded flex items-center justify-center font-bold text-[10px] bg-[#E85220] text-void-black font-mono">
          Pt
        </span>
        <span className="font-mono text-xs tracking-wider uppercase">Substance Painter</span>
      </span>
    ),
  },
  {
    title: 'Substance Designer',
    category: '3D & Modeling',
    node: (
      <span className="flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-graphite-border/70 bg-void-black/60 backdrop-blur-sm text-bone-white hover:border-ember-orange/80 hover:text-ember-orange transition-colors">
        <span className="w-5 h-5 rounded flex items-center justify-center font-bold text-[10px] bg-[#C1272D] text-bone-white font-mono">
          Ds
        </span>
        <span className="font-mono text-xs tracking-wider uppercase">Substance Designer</span>
      </span>
    ),
  },
  {
    title: 'Premiere Pro',
    category: 'Video & Film',
    node: (
      <span className="flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-graphite-border/70 bg-void-black/60 backdrop-blur-sm text-bone-white hover:border-ember-orange/80 hover:text-ember-orange transition-colors">
        <TbBrandAdobePremiere className="text-xl text-[#9999FF]" />
        <span className="font-mono text-xs tracking-wider uppercase">Premiere Pro</span>
      </span>
    ),
  },
  {
    title: 'After Effects',
    category: 'Video & Film',
    node: (
      <span className="flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-graphite-border/70 bg-void-black/60 backdrop-blur-sm text-bone-white hover:border-ember-orange/80 hover:text-ember-orange transition-colors">
        <TbBrandAdobeAfterEffect className="text-xl text-[#9999FF]" />
        <span className="font-mono text-xs tracking-wider uppercase">After Effects</span>
      </span>
    ),
  },
  {
    title: 'Adobe Photoshop',
    category: 'Design & Graphics',
    node: (
      <span className="flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-graphite-border/70 bg-void-black/60 backdrop-blur-sm text-bone-white hover:border-ember-orange/80 hover:text-ember-orange transition-colors">
        <TbBrandAdobePhotoshop className="text-xl text-[#31A8FF]" />
        <span className="font-mono text-xs tracking-wider uppercase">Photoshop</span>
      </span>
    ),
  },
  {
    title: 'Adobe Illustrator',
    category: 'Design & Graphics',
    node: (
      <span className="flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-graphite-border/70 bg-void-black/60 backdrop-blur-sm text-bone-white hover:border-ember-orange/80 hover:text-ember-orange transition-colors">
        <TbBrandAdobeIllustrator className="text-xl text-[#FF9A00]" />
        <span className="font-mono text-xs tracking-wider uppercase">Illustrator</span>
      </span>
    ),
  },
  {
    title: 'Adobe InDesign',
    category: 'Design & Graphics',
    node: (
      <span className="flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-graphite-border/70 bg-void-black/60 backdrop-blur-sm text-bone-white hover:border-ember-orange/80 hover:text-ember-orange transition-colors">
        <TbBrandAdobeIndesign className="text-xl text-[#FF3366]" />
        <span className="font-mono text-xs tracking-wider uppercase">InDesign</span>
      </span>
    ),
  },
  {
    title: 'Figma',
    category: 'Design & Graphics',
    node: (
      <span className="flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-graphite-border/70 bg-void-black/60 backdrop-blur-sm text-bone-white hover:border-ember-orange/80 hover:text-ember-orange transition-colors">
        <SiFigma className="text-xl text-[#F24E1E]" />
        <span className="font-mono text-xs tracking-wider uppercase">Figma</span>
      </span>
    ),
  },
  {
    title: 'Google Flow & Suite',
    category: 'AI & Gen',
    node: (
      <span className="flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-graphite-border/70 bg-void-black/60 backdrop-blur-sm text-bone-white hover:border-ember-orange/80 hover:text-ember-orange transition-colors">
        <SiGoogle className="text-xl text-[#4285F4]" />
        <span className="font-mono text-xs tracking-wider uppercase">Google Flow</span>
      </span>
    ),
  },
  {
    title: 'Adobe Firefly',
    category: 'AI & Gen',
    node: (
      <span className="flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-graphite-border/70 bg-void-black/60 backdrop-blur-sm text-bone-white hover:border-ember-orange/80 hover:text-ember-orange transition-colors">
        <TbBrandAdobe className="text-xl text-[#FF0000]" />
        <span className="font-mono text-xs tracking-wider uppercase">Adobe Firefly</span>
      </span>
    ),
  },
  {
    title: 'Minimax AI Suite',
    category: 'AI & Gen',
    node: (
      <span className="flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-graphite-border/70 bg-void-black/60 backdrop-blur-sm text-bone-white hover:border-ember-orange/80 hover:text-ember-orange transition-colors">
        <span className="w-5 h-5 rounded flex items-center justify-center font-black text-[9px] bg-ember-orange text-void-black font-mono">
          MX
        </span>
        <span className="font-mono text-xs tracking-wider uppercase">Minimax AI</span>
      </span>
    ),
  },
  {
    title: 'Notion',
    category: 'Productivity',
    node: (
      <span className="flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-graphite-border/70 bg-void-black/60 backdrop-blur-sm text-bone-white hover:border-ember-orange/80 hover:text-ember-orange transition-colors">
        <SiNotion className="text-xl text-bone-white" />
        <span className="font-mono text-xs tracking-wider uppercase">Notion</span>
      </span>
    ),
  },
  {
    title: 'Slack',
    category: 'Productivity',
    node: (
      <span className="flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-graphite-border/70 bg-void-black/60 backdrop-blur-sm text-bone-white hover:border-ember-orange/80 hover:text-ember-orange transition-colors">
        <FaSlack className="text-xl text-[#ECB22E]" />
        <span className="font-mono text-xs tracking-wider uppercase">Slack</span>
      </span>
    ),
  },
  {
    title: 'Adobe Suite',
    category: 'Productivity',
    node: (
      <span className="flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-graphite-border/70 bg-void-black/60 backdrop-blur-sm text-bone-white hover:border-ember-orange/80 hover:text-ember-orange transition-colors">
        <TbBrandAdobe className="text-xl text-[#ED2224]" />
        <span className="font-mono text-xs tracking-wider uppercase">Adobe Suite</span>
      </span>
    ),
  },
];

/* Structured categories with high-end imagery and balanced content */
const SKILL_CATEGORIES = [
  {
    category: '3D & Modeling',
    code: 'MOD // 01',
    skills: ['Blender', 'Unreal', 'Substance Painter', 'Substance Designer'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    tag: 'SPATIAL & REALTIME',
    detail: 'Complete spatial asset pipeline from low/high-poly hard surface modeling in Blender to real-time rendering in Unreal Engine 5 and multi-material baking in Substance.',
    iconName: '3D',
  },
  {
    category: 'Video & Film',
    code: 'FLM // 02',
    skills: ['Premiere Pro', 'After Effects'],
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    tag: 'CINEMA & EDITING',
    detail: 'Precision pacing, temporal rhythm, non-linear narrative assembly in Premiere Pro, paired with atmospheric motion graphics, kinetic typography, and composite VFX in After Effects.',
    iconName: 'FX',
  },
  {
    category: 'Design & Graphics',
    code: 'DES // 03',
    skills: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Figma'],
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80',
    tag: 'IDENTITY & SYSTEMS',
    detail: 'High-impact editorial posters, publication layouts, scalable vector identity systems, and production design systems with dark-mode aesthetic rigor.',
    iconName: 'UI',
  },
  {
    category: 'AI & Gen',
    code: 'SYN // 04',
    skills: ['Google Flow', 'Adobe Firefly', 'Minimax AI Suite'],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    tag: 'NEURAL & SYNTHESIS',
    detail: 'Pioneering generative workflows integrating diffusion models, prompt engineering, multi-frame video synthesis, and seamless hybrid human-AI creative direction.',
    iconName: 'AI',
  },
  {
    category: 'Productivity',
    code: 'OPS // 05',
    skills: ['Google Suite', 'Adobe Suite', 'Notion', 'Slack'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    tag: 'STUDIO & PIPELINES',
    detail: 'Structured creative studio workflows, asset tracking, project roadmapping, asynchronous communications, and agile collaboration across distributed teams.',
    iconName: 'HQ',
  },
];

export default function SkillsSection() {
  return (
    <section
      className="w-full py-20 md:py-32 snap-section bg-carbon border-t border-b border-graphite-border relative overflow-hidden select-none"
      id="skills"
    >
      {/* Ambient background glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 20%, rgba(255, 79, 43, 0.12) 0%, transparent 45%), radial-gradient(circle at 85% 80%, rgba(255, 255, 255, 0.04) 0%, transparent 50%)',
        }}
      />

      <div className="max-w-[1360px] mx-auto px-6 md:px-10 relative z-10">
        <SectionHeader title="Skills & Tools" number="03" />

        {/* ── Subtitle / Overview ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-graphite-border">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-ember-orange block mb-2">
              // PRODUCTION STACK &amp; CAPABILITIES
            </span>
            <p className="font-display text-2xl sm:text-3xl text-bone-white font-medium tracking-tight">
              Tools Engineered For Creative Cinema &amp; Visual Computing
            </p>
          </div>
          <span className="font-mono text-xs text-steel-mid uppercase tracking-widest hidden sm:block">
            {ALL_SOFTWARE_LOGOS.length} Active Environments
          </span>
        </div>

        {/* ── LogoLoop Marquee Showcase (Without Clipping) ── */}
        <div className="w-full py-5 px-4 bg-void-black/80 border border-graphite-border rounded-xl backdrop-blur-md mb-16 overflow-hidden relative shadow-2xl">
          <div className="flex items-center justify-between px-2 pb-3 mb-2 border-b border-graphite-border/60">
            <span className="font-mono text-[11px] uppercase tracking-widest text-fog-light flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-ember-orange animate-pulse" />
              Live Software Registry
            </span>
            <span className="font-mono text-[11px] uppercase tracking-widest text-steel-mid">
              Hover to slow // Drag to inspect
            </span>
          </div>

          <div className="py-3 overflow-hidden">
            <LogoLoop
              logos={ALL_SOFTWARE_LOGOS}
              speed={55}
              direction="left"
              logoHeight={42}
              gap={32}
              hoverSpeed={12}
              scaleOnHover={true}
              fadeOut={true}
              fadeOutColor="#08080c"
              ariaLabel="Skills & software tools ticker"
            />
          </div>
        </div>

        {/* ── Interactive 3D FlipCards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-items-center">
          {SKILL_CATEGORIES.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: catIdx * 0.08 }}
              className="w-full flex justify-center"
            >
              <FlipCard
                width="100%"
                height={400}
                radius={16}
                background="#0c0d12"
                color="#f5f5f5"
                tilt={true}
                tiltMax={12}
                glare={true}
                glareOpacity={0.22}
                hoverScale={1.03}
                perspective={1000}
                stiffness={190}
                damping={22}
                shadow={true}
                shadowColor="#000000"
                shadowOpacity={0.65}
                ariaLabel={`${cat.category} skill flip card`}
                className="w-full border border-graphite-border hover:border-ember-orange/80 transition-colors duration-300"
                front={
                  <div className="w-full h-full relative overflow-hidden rounded-[16px] group">
                    {/* Visual Image Background */}
                    <img
                      src={cat.image}
                      alt={cat.category}
                      className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-75 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-90 transition-all duration-700 pointer-events-none"
                    />

                    {/* Gradient Overlay for Text Legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-void-black via-void-black/50 to-void-black/70 pointer-events-none" />

                    {/* Content on top */}
                    <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
                      {/* Top Header */}
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-ember-orange bg-void-black/70 backdrop-blur-md px-2.5 py-1 border border-graphite-border/60">
                          {cat.code}
                        </span>
                        <span className="w-7 h-7 rounded-full bg-void-black/80 backdrop-blur-md border border-graphite-border flex items-center justify-center font-mono text-[10px] text-bone-white font-bold">
                          {cat.iconName}
                        </span>
                      </div>

                      {/* Bottom Title & Flip Icon */}
                      <div>
                        <span className="font-mono text-[10px] tracking-widest text-steel-mid uppercase block mb-1">
                          {cat.tag}
                        </span>
                        <h3 className="font-display text-2xl text-bone-white font-bold tracking-tight leading-tight mb-4 drop-shadow-md">
                          {cat.category}
                        </h3>

                        {/* Minimalist Bottom Bar with Flip Icon */}
                        <div className="pt-3 border-t border-graphite-border/50 flex items-center justify-between text-steel-mid">
                          <span className="font-mono text-[11px] text-fog-light">
                            {cat.skills.length} Tools
                          </span>
                          <span
                            title="Flip for specifications"
                            className="w-7 h-7 rounded-full bg-void-black/85 border border-graphite-border/80 flex items-center justify-center text-bone-white group-hover:text-ember-orange group-hover:border-ember-orange transition-colors"
                          >
                            <RefreshCw size={13} className="transition-transform duration-500 group-hover:rotate-180" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                }
                back={
                  <div className="w-full h-full p-6 flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-[#14151b] via-[#0f1015] to-void-black">
                    {/* Top Row: Back Header */}
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-graphite-border/60">
                        <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-bone-white">
                          // SPECIFICATION
                        </span>
                        <span className="font-mono text-[10px] text-ember-orange uppercase tracking-wider font-semibold">
                          VERIFIED
                        </span>
                      </div>

                      <h4 className="font-display text-lg text-bone-white font-semibold mb-2">
                        {cat.category}
                      </h4>

                      <p className="font-body text-xs text-fog-light leading-relaxed mb-4">
                        {cat.detail}
                      </p>

                      {/* Stack List */}
                      <div className="space-y-2 pt-2 border-t border-graphite-border/40">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-steel-mid block">
                          Production Toolchain:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {cat.skills.map((skill) => (
                            <span
                              key={skill}
                              className="font-mono text-[10px] px-2 py-0.5 bg-void-black border border-ember-orange/50 text-bone-white font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Return with Flip Icon */}
                    <div className="pt-3 border-t border-graphite-border/40 flex items-center justify-between text-[11px] font-mono text-steel-mid">
                      <span className="text-fog-light">Return to front</span>
                      <span className="w-6 h-6 rounded-full bg-void-black border border-graphite-border flex items-center justify-center text-ember-orange">
                        <RefreshCw size={12} />
                      </span>
                    </div>
                  </div>
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


