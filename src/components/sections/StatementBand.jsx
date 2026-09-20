/**
 * StatementBand.jsx — Solid Ember Orange Statement Band with TrueFocus Viewfinder & Layered HUD
 * 
 * Layers:
 *   - Base: Solid vibrant ember-orange background (`bg-ember-orange`) with crisp hairline borders
 *   - Layer 1 (Texture): Subtle organic film grain texture overlay
 *   - Layer 2 (HUD Framing): Monospaced technical camera viewfinder markers in dark ink
 *   - Layer 3 (Foreground): TrueFocus interactive typography with cursor reveal & viewfinder frame
 */
import React from 'react';
import { motion } from 'framer-motion';
import TrueFocus from '../ui/TrueFocus';

export default function StatementBand({ text = 'Crafting The Future Through AI & Film' }) {
  return (
    <section
      className="relative w-full py-16 sm:py-20 md:py-24 px-6 snap-section flex flex-col items-center justify-center min-h-[38vh] bg-ember-orange border-t border-b border-void-black/15 overflow-hidden select-none"
    >
      {/* ── Layer 1: Subtle Film Grain Overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-multiply"
        style={{
          backgroundImage:
            'radial-gradient(#000 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />

      {/* ── Layer 2: Viewfinder HUD Framing (Top) ── */}
      <div className="w-full max-w-[1360px] mx-auto flex flex-col justify-between relative z-10 pointer-events-none px-4 mb-4 sm:mb-6">
        <div className="w-full flex items-center justify-between text-void-black/70 font-mono text-[10px] sm:text-xs tracking-widest uppercase font-semibold">
          <span className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-void-black animate-pulse" />
            <span>[ SYSTEM // AI &amp; CINEMA ]</span>
          </span>
          <span className="hidden sm:inline-block tracking-widest text-void-black/60">
            2.39:1 CINEMASCOPE • 24 FPS
          </span>
        </div>
      </div>

      {/* ── Layer 3: TrueFocus Typography (Interactive Cursor Reveal) ── */}
      <div className="relative z-20 w-full max-w-[1320px] mx-auto flex items-center justify-center my-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full text-center"
        >
          <TrueFocus
            sentence={text}
            manualMode={true}
            blurAmount={0}
            borderColor="#000000"
            glowColor="rgba(0, 0, 0, 0.3)"
            textColor="#232630"
            activeTextColor="#000000"
            animationDuration={0.35}
          />
        </motion.div>
      </div>

      {/* ── Layer 2: Viewfinder HUD Framing (Bottom) ── */}
      <div className="w-full max-w-[1360px] mx-auto flex items-center justify-between relative z-10 pointer-events-none px-4 mt-4 sm:mt-6 text-void-black/60 font-mono text-[10px] sm:text-xs tracking-widest uppercase font-semibold">
        <span>VIEWFINDER [ HOVER TO FOCUS ]</span>
        <span>MANASXZ • WORLD BUILDER</span>
      </div>
    </section>
  );
}
