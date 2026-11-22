/**
 * AuroraBackground.jsx — Vibrant animated aurora gradient background
 *
 * Performance note: replaced CSS filter:blur() with radial-gradient-only
 * rendering. Large blur radii (blur-[100px] etc.) on big absolutely-positioned
 * elements require a full Gaussian convolution pass in software when GPU
 * acceleration is disabled — one of the most expensive possible CSS operations.
 * Pure radial-gradients with falloff produce visually identical glow without
 * any blur cost, and remain smooth even in CPU-only rendering.
 *
 * Animations use only `transform` and `opacity` — both are compositor-safe
 * (no layout or paint triggered) even without a dedicated GPU.
 */
import React from 'react';

export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-void-black" />

      {/* Aurora blob 1 — large primary Ember Orange glow
          Uses a multi-stop radial gradient to simulate the soft falloff that
          blur used to produce, with zero filter cost. */}
      <div
        className="absolute w-[900px] h-[900px] rounded-full opacity-50"
        style={{
          background: 'radial-gradient(circle, rgba(255, 79, 43, 0.6) 0%, rgba(255, 79, 43, 0.3) 25%, rgba(255, 79, 43, 0.12) 50%, rgba(255, 79, 43, 0.04) 70%, transparent 85%)',
          top: '-20%',
          right: '-8%',
          animation: 'aurora-drift 7s ease-in-out infinite',
          willChange: 'transform, opacity',
        }}
      />

      {/* Aurora blob 2 — medium alternate drift */}
      <div
        className="absolute w-[700px] h-[700px] rounded-full opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(255, 79, 43, 0.5) 0%, rgba(255, 79, 43, 0.22) 30%, rgba(26, 26, 26, 0.4) 55%, transparent 75%)',
          bottom: '-12%',
          left: '-8%',
          animation: 'aurora-drift-alt 8.5s ease-in-out infinite',
          willChange: 'transform, opacity',
        }}
      />

      {/* Aurora blob 3 — center accent glow */}
      <div
        className="absolute w-[550px] h-[550px] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(255, 120, 60, 0.42) 0%, rgba(255, 100, 40, 0.18) 35%, transparent 65%)',
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
