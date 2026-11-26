/**
 * ToolLogo.jsx — logo for a tool name, drawn in one colour (currentColor) so the
 * whole stack reads as a set.
 *   Brand marks:    Blender, Unreal, DaVinci Resolve, Figma, Notion, Slack, Google
 *   Adobe apps:     Adobe's own two-letter app tiles (Ps, Pr, Ae, Ai, Id, Ff, Pt, Ds)
 *   No public mark: a set wordmark (Google Flow, Higgsfield, Minimax)
 */
import React from 'react';
import { SiBlender, SiUnrealengine, SiDavinciresolve, SiFigma, SiNotion, SiGoogle } from 'react-icons/si';
import { TbBrandSlack, TbBrandAdobe } from 'react-icons/tb';

const MARKS = {
  Blender: SiBlender,
  'Unreal Engine': SiUnrealengine,
  'DaVinci Resolve': SiDavinciresolve,
  Figma: SiFigma,
  Notion: SiNotion,
  Slack: TbBrandSlack,
  'Google Suite': SiGoogle,
  'Adobe Suite': TbBrandAdobe,
};

// Adobe app tiles: rounded square, two letters
const ADOBE = {
  Photoshop: 'Ps',
  'Premiere Pro': 'Pr',
  'After Effects': 'Ae',
  Illustrator: 'Ai',
  InDesign: 'Id',
  'Adobe Firefly': 'Ff',
  'Substance Painter': 'Pt',
  'Substance Designer': 'Ds',
};

const WORDMARKS = {
  'Google Flow': 'Flow',
  Higgsfield: 'Higgsfield',
  'Minimax AI Suite': 'MiniMax',
};

export default function ToolLogo({ name, size = 40 }) {
  const Mark = MARKS[name];
  if (Mark) return <Mark size={size} aria-hidden="true" />;

  if (ADOBE[name]) {
    return (
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center border-[1.5px] border-current rounded-[22%] font-display font-medium leading-none"
        style={{ width: size, height: size, fontSize: size * 0.44, letterSpacing: '-0.02em' }}
      >
        {ADOBE[name]}
      </span>
    );
  }

  return (
    <span aria-hidden="true" className="font-display font-semibold leading-none tracking-[-0.03em]" style={{ fontSize: size * 0.5 }}>
      {WORDMARKS[name] || name}
    </span>
  );
}
