/**
 * MediaPlaceholder.jsx — stands in for a project's thumbnail until its media is added.
 * Fills its (positioned) parent: a dark gradient, faint grain and the project number.
 */
import React from 'react';

export default function MediaPlaceholder({ index, label = 'Media coming soon' }) {
  return (
    <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_70%_20%,#1c1a18_0%,#0b0b0b_55%,#000_100%)] grain" aria-hidden="true">
      {index != null && (
        <span
          className="absolute right-[6%] top-1/2 -translate-y-1/2 font-display font-extrabold leading-none tracking-[-0.05em] text-bone-white/[0.06] select-none"
          style={{ fontSize: 'clamp(120px, 26vw, 380px)' }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      )}
      <span className="absolute top-4 left-4 sm:top-6 sm:left-6 t-label text-steel-mid">{label}</span>
    </div>
  );
}
