/**
 * Logo.jsx — Official MU Monogram Logo Component
 * 
 * Recreates the exact geometric MU monogram provided by the user.
 * Renders as clean SVG scaling smoothly from nav icon size to hero scale.
 */
import React from 'react';

export default function Logo({ className = "w-8 h-10", color = "currentColor" }) {
  return (
    <svg
      viewBox="0 0 100 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Left Vertical Bar of M */}
      <rect x="0" y="0" width="34" height="115" fill={color} />

      {/* Right Monogram Block (M diagonal + U vertical) */}
      <path
        d="M42 0 H98 V62 L74 34 V115 H42 V70 L64 96 V32 L42 0 Z"
        fill={color}
      />
      
      {/* White diagonal slash accent cutting through the M diagonal */}
      <path
        d="M42 0 L72 38 L98 0"
        stroke="#000000"
        strokeWidth="4"
        fill="none"
      />
    </svg>
  );
}
