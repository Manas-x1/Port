/**
 * ResearchSection.jsx — the thinking behind a piece: brief summary, references,
 * colour palette, typography, the elements built for it, and the motion approach.
 * Renders only the parts present in project.research.
 */
import React from 'react';

const pad = (n) => String(n).padStart(2, '0');

// Pick black or white text for a swatch so its label stays readable
function inkFor(hex) {
  const h = hex.replace('#', '');
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
  const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return lum > 0.55 ? '#0a0a0a' : '#f2efe9';
}

function SubHead({ children, aside }) {
  return (
    <div className="flex items-baseline justify-between gap-4 mb-5">
      <h3 className="t-h3 m-0 text-bone-white">{children}</h3>
      {aside && <span className="t-label text-steel-mid tabular-nums">{aside}</span>}
    </div>
  );
}

export default function ResearchSection({ research }) {
  const { summary, references = [], palette = [], type = [], elements = [], motion = [] } = research;

  return (
    <div className="space-y-[var(--stack)]">
      {/* Brief + references */}
      {(summary || references.length > 0) && (
        <div className="grid-12 gap-y-10">
          {summary && (
            <p className="reveal col-span-4 lg:col-span-7 m-0 t-lead text-bone-white">{summary}</p>
          )}
          {references.length > 0 && (
            <div className="reveal col-span-4 lg:col-start-9 lg:col-span-4">
              <h3 className="t-label text-steel-mid m-0 mb-4">References</h3>
              <ol className="list-none m-0 p-0">
                {references.map((r, i) => (
                  <li key={i} className="rule-t py-3 flex gap-4 t-body text-fog-light">
                    <span className="t-label text-steel-mid tabular-nums pt-1 shrink-0">{pad(i + 1)}</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      )}

      {/* Palette: full-width colour bars */}
      {palette.length > 0 && (
        <div className="reveal">
          <SubHead aside={`${pad(palette.length)} colours`}>Palette</SubHead>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:flex gap-px bg-[var(--rule)] border border-[var(--rule)]">
            {palette.map((c) => (
              <div
                key={c.hex + c.name}
                className="lg:flex-1 min-h-[180px] lg:min-h-[260px] p-4 flex flex-col justify-between"
                style={{ background: c.hex, color: inkFor(c.hex) }}
              >
                <span className="t-label opacity-80 tabular-nums">{c.hex.toUpperCase()}</span>
                <span>
                  <span className="block font-display text-[17px] leading-tight mb-1">{c.name}</span>
                  <span className="block text-[12px] leading-snug opacity-75">{c.role}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Typography */}
      {type.length > 0 && (
        <div className="reveal">
          <SubHead>Typography</SubHead>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[var(--rule)] border border-[var(--rule)]">
            {type.map((t) => (
              <div key={t.family + t.use} className="bg-void-black p-6 sm:p-8 flex items-end justify-between gap-6">
                <span
                  className="text-bone-white leading-none"
                  style={{ fontFamily: `'${t.family}', system-ui, sans-serif`, fontSize: 'clamp(64px, 8vw, 112px)' }}
                  aria-hidden="true"
                >
                  Aa
                </span>
                <span className="text-right">
                  <span className="block font-display text-[18px] text-bone-white">{t.family}</span>
                  {t.stands_in_for && (
                    <span className="block t-label text-steel-mid mt-1">Stands in for {t.stands_in_for}</span>
                  )}
                  <span className="block text-[13px] text-fog-light mt-2">{t.use}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Elements built for the piece */}
      {elements.length > 0 && (
        <div>
          <SubHead aside={`${pad(elements.length)} elements`}>Elements</SubHead>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[var(--col-gap)]">
            {elements.map((e, i) => (
              <figure key={e.name} className="reveal m-0">
                {e.src && (
                  <div className="frame aspect-[4/3] bg-[#0b0b0b] flex items-center justify-center p-4">
                    <img src={e.src} alt={e.name} loading="lazy" decoding="async" className="!w-auto !h-auto max-w-full max-h-full !object-contain" />
                  </div>
                )}
                <figcaption className="mt-3">
                  <span className="flex gap-3 t-label">
                    <span className="tabular-nums text-bone-white">{pad(i + 1)}</span>
                    <span className="text-fog-light">{e.name}</span>
                  </span>
                  {e.note && <span className="block t-body text-steel-mid mt-1.5 text-[14px] leading-snug">{e.note}</span>}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      )}

      {/* Motion approach */}
      {motion.length > 0 && (
        <div className="reveal">
          <SubHead>Motion</SubHead>
          <ul className="list-none m-0 p-0 grid grid-cols-1 sm:grid-cols-2 gap-x-[var(--col-gap)]">
            {motion.map((m, i) => (
              <li key={i} className="rule-t py-4 flex gap-4 t-body text-fog-light">
                <span className="t-label text-steel-mid tabular-nums pt-1 shrink-0">{pad(i + 1)}</span>
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
