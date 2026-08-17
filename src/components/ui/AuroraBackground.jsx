/**
 * AuroraBackground.jsx — Animated aurora gradient background
 * 
 * Renders soft, drifting gradient blobs in Ember Orange + dark tones.
 * Used behind the hero section for a cinematic, infrastructure-at-night feel.
 * Pure CSS animation — no JS overhead, GPU-accelerated via transform/opacity.
 */
import React from 'react';

export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Base dark gradient */}
      <div className="absolute inset-0 bg-void-black" />

      {/* Aurora blob 1 — large, slow drift */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full opacity-30 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(255, 79, 43, 0.4) 0%, transparent 70%)',
          top: '-20%',
          right: '-10%',
          animation: 'aurora-drift 15s ease-in-out infinite',
          willChange: 'transform, opacity',
        }}
      />

      {/* Aurora blob 2 — medium, alternate drift */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[100px]"
        style={{
          background: 'radial-gradient(circle, rgba(255, 79, 43, 0.3) 0%, rgba(26, 26, 26, 0.5) 60%, transparent 80%)',
          bottom: '-15%',
          left: '-5%',
          animation: 'aurora-drift-alt 18s ease-in-out infinite',
          willChange: 'transform, opacity',
        }}
      />

      {/* Aurora blob 3 — small accent glow */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-[80px]"
        style={{
          background: 'radial-gradient(circle, rgba(255, 79, 43, 0.25) 0%, transparent 70%)',
          top: '40%',
          left: '30%',
          animation: 'aurora-drift 22s ease-in-out infinite reverse',
          willChange: 'transform, opacity',
        }}
      />

      {/* Subtle grid overlay for infrastructure/data-center texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(245, 245, 245, 0.8) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
}
