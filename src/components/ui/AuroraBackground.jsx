/**
 * AuroraBackground.jsx — Vibrant, faster animated aurora gradient background
 * 
 * Brighter Ember Orange ambient lighting with faster dynamic drift animations.
 * GPU-accelerated via transform/opacity for silky smooth performance.
 */
import React from 'react';

export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-void-black" />

      {/* Aurora blob 1 — large primary Ember Orange glow */}
      <div
        className="absolute w-[850px] h-[850px] rounded-full opacity-55 blur-[100px]"
        style={{
          background: 'radial-gradient(circle, rgba(255, 79, 43, 0.65) 0%, rgba(255, 79, 43, 0.25) 45%, transparent 75%)',
          top: '-15%',
          right: '-5%',
          animation: 'aurora-drift 7s ease-in-out infinite',
          willChange: 'transform, opacity',
        }}
      />

      {/* Aurora blob 2 — medium alternate drift */}
      <div
        className="absolute w-[650px] h-[650px] rounded-full opacity-45 blur-[90px]"
        style={{
          background: 'radial-gradient(circle, rgba(255, 79, 43, 0.55) 0%, rgba(26, 26, 26, 0.6) 60%, transparent 80%)',
          bottom: '-10%',
          left: '-5%',
          animation: 'aurora-drift-alt 8.5s ease-in-out infinite',
          willChange: 'transform, opacity',
        }}
      />

      {/* Aurora blob 3 — center accent glow */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-35 blur-[75px]"
        style={{
          background: 'radial-gradient(circle, rgba(255, 120, 60, 0.45) 0%, transparent 70%)',
          top: '35%',
          left: '25%',
          animation: 'aurora-drift 10s ease-in-out infinite reverse',
          willChange: 'transform, opacity',
        }}
      />

      {/* Grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(245, 245, 245, 0.9) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />
    </div>
  );
}
