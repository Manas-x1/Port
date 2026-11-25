/**
 * BrandMark.jsx — the company mark shown beside a SaaS piece's title.
 * Marks come from Simple Icons (react-icons/si); sized in em so they track the title's cap height.
 * Stripe sits in its violet app tile (or plain when mono); Linear and Notion are single-colour marks.
 */
import React from 'react';
import { SiStripe, SiLinear, SiNotion } from 'react-icons/si';

export default function BrandMark({ brand, className = '', mono = false }) {
  // mono: single-colour mark (used faded in card backgrounds)
  if (brand === 'stripe' && mono) {
    return <SiStripe aria-hidden="true" className={`shrink-0 ${className}`} style={{ width: '0.78em', height: '0.78em' }} />;
  }
  if (brand === 'stripe') {
    return (
      <span
        aria-hidden="true"
        className={`inline-flex items-center justify-center rounded-[22%] bg-[#533AFD] text-white shrink-0 ${className}`}
        style={{ width: '0.82em', height: '0.82em' }}
      >
        <SiStripe style={{ width: '0.5em', height: '0.5em' }} />
      </span>
    );
  }
  const Mark = brand === 'linear' ? SiLinear : brand === 'notion' ? SiNotion : null;
  if (!Mark) return null;
  return <Mark aria-hidden="true" className={`shrink-0 ${className}`} style={{ width: '0.78em', height: '0.78em' }} />;
}
