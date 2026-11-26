/**
 * BrandBackdrop.jsx — card background for the SaaS pieces: each company's own look
 * (colours from the film's research palette) with its logo lockup set cleanly in the upper left,
 * like a product site header. Fills its positioned parent.
 */
import React from 'react';
import BrandMark from './BrandMark';

const LOOKS = {
  // White stage with Stripe's diagonal violet–pink–orange wave sweeping in from the right
  stripe: {
    background:
      'radial-gradient(60% 90% at 88% 30%, #FF990E 0%, rgba(255,153,14,0) 55%),' +
      'radial-gradient(55% 85% at 70% 55%, #ED6DCB 0%, rgba(237,109,203,0) 60%),' +
      'radial-gradient(60% 90% at 52% 40%, #8C64F2 0%, rgba(140,100,242,0) 60%),' +
      'linear-gradient(115deg, #ffffff 0%, #ffffff 38%, #e9e4ff 52%, #ffd9ef 72%, #ffe3c2 100%)',
    ink: '#0A2540',
    font: { fontWeight: 700, letterSpacing: '-0.045em', textTransform: 'lowercase' },
  },
  // Near-black field, indigo backlight glow, horizon rim
  linear: {
    background:
      'radial-gradient(70% 55% at 50% 118%, rgba(174,180,232,0.55) 0%, rgba(94,106,210,0.35) 30%, rgba(94,106,210,0) 62%),' +
      'radial-gradient(45% 40% at 78% 20%, rgba(94,106,210,0.25) 0%, rgba(94,106,210,0) 70%),' +
      '#08090A',
    ink: '#F7F8F8',
    font: { fontWeight: 600, letterSpacing: '-0.03em' },
  },
  // The film's black-and-gold theme
  notion: {
    background:
      'radial-gradient(55% 60% at 75% 35%, rgba(212,175,55,0.38) 0%, rgba(212,175,55,0) 65%),' +
      'radial-gradient(60% 50% at 15% 110%, rgba(233,196,106,0.18) 0%, rgba(233,196,106,0) 70%),' +
      '#0B0B0C',
    ink: '#F3EDE2',
    font: { fontWeight: 600, letterSpacing: '-0.03em' },
  },
};

// Notion: a tilted page from the film's world, built from blocks — drag handles, a checked
// to-do, a toggle, a typed "/" command with the AI menu open, and a blinking caret. Gold on black.
function NotionPage() {
  const gold = '#D4AF37';
  const Handle = () => <span className="text-[#A9A39A]/40 tracking-[-0.15em] mr-[0.6em] select-none">⋮⋮</span>;
  const Box = ({ on }) => (
    <span
      className="inline-flex items-center justify-center w-[1em] h-[1em] mr-[0.55em] rounded-[0.18em] border shrink-0"
      style={{ borderColor: on ? gold : 'rgba(169,163,154,0.55)', background: on ? gold : 'transparent', color: '#0B0B0C', fontSize: '0.95em' }}
    >
      {on ? '✓' : ''}
    </span>
  );
  return (
    <div
      className="hidden sm:block absolute right-[5%] top-[13%] w-[50%] max-w-[560px] rounded-[0.7em] border bg-[#151517]/95 p-[1.4em] text-[#F3EDE2] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] transition-transform duration-1000 group-hover:rotate-[-1.5deg] group-hover:-translate-y-1"
      style={{ borderColor: 'rgba(212,175,55,0.35)', transform: 'rotate(-4deg)', fontSize: 'clamp(8px, 1.05vw, 15px)', fontFamily: "'Segoe UI', system-ui, sans-serif" }}
    >
      <div className="flex items-center gap-[0.5em] mb-[1em] text-[#A9A39A]" style={{ fontSize: '0.85em' }}>
        <span className="w-[0.9em] h-[0.9em] rounded-[0.2em]" style={{ background: gold }} />
        Team brain / Launch
      </div>
      <div className="font-semibold leading-tight mb-[0.9em]" style={{ fontSize: '2em' }}>
        A shared brain for your team and{' '}
        <span className="px-[0.15em] rounded-[0.1em]" style={{ background: 'linear-gradient(90deg,#B8862B,#F5DFA0,#C9A227)', color: '#0B0B0C' }}>agents.</span>
      </div>
      <div className="space-y-[0.55em]">
        <div className="flex items-center"><Handle /><Box on /><span className="line-through decoration-[#A9A39A]/60 text-[#A9A39A]">Migrate task tracking into Notion</span></div>
        <div className="flex items-center"><Handle /><Box /><span>Research customer needs</span></div>
        <div className="flex items-center"><Handle /><span className="mr-[0.55em] text-[#A9A39A]">▸</span><span>Agent steps</span><span className="ml-auto text-[#A9A39A]" style={{ fontSize: '0.85em' }}>Working for 19s</span></div>
        <div className="flex items-center"><Handle /><span style={{ color: gold }}>/ai</span><span className="nb-caret ml-[1px] w-[1px] h-[1.1em]" style={{ background: '#F3EDE2' }} /></div>
      </div>
      {/* Slash-command menu open under the caret */}
      <div className="absolute left-[3.2em] -bottom-[4.2em] w-[60%] rounded-[0.5em] border bg-[#111113] p-[0.4em] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.9)]" style={{ borderColor: 'rgba(212,175,55,0.3)' }}>
        <div className="flex items-center justify-between px-[0.6em] py-[0.45em] rounded-[0.35em]" style={{ background: 'rgba(212,175,55,0.14)' }}>
          <span>Ask AI</span><span className="rounded-full border px-[0.6em]" style={{ borderColor: gold, color: gold, fontSize: '0.8em' }}>Auto</span>
        </div>
        <div className="px-[0.6em] py-[0.45em] text-[#A9A39A]">Draft with AI</div>
      </div>
    </div>
  );
}

export default function BrandBackdrop({ brand, name }) {
  const look = LOOKS[brand];
  if (!look) return null;
  return (
    <div className="absolute inset-0" style={{ background: look.background }} aria-hidden="true">
      <span
        className="absolute left-[6%] top-[11%] flex items-center gap-[0.32em] font-display leading-none whitespace-nowrap"
        style={{ color: look.ink, fontSize: 'clamp(28px, 4vw, 56px)', ...look.font }}
      >
        <BrandMark brand={brand} mono={brand !== 'stripe'} />
        {name}
      </span>
      {brand === 'notion' && <NotionPage />}
    </div>
  );
}
