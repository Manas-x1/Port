/**
 * GhostButton.jsx — Ori secondary action button
 * 
 * Transparent background with 1px Bone White border.
 * Inverts on hover (fills with white, text goes black).
 * Sharp rectangular shape (0 border-radius).
 * 
 * Props:
 *   children: React node — button label
 *   onClick: function — click handler
 *   href: string — optional, renders as <a> instead of <button>
 *   className: string — additional classes
 */
import React from 'react';

export default function GhostButton({ children, onClick, href, className = '', ...props }) {
  const baseClasses = `
    inline-flex items-center justify-center gap-2
    bg-transparent text-bone-white
    border border-bone-white
    px-4 py-2
    cursor-pointer select-none
    transition-all duration-300
    hover:bg-bone-white hover:text-void-black
    active:scale-95
    ${className}
  `.trim();

  const style = {
    fontFamily: 'var(--font-mono)',
    fontSize: '14px',
    fontWeight: 400,
    textTransform: 'uppercase',
    borderRadius: '0px',
  };

  if (href) {
    return (
      <a href={href} className={baseClasses} style={style} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses} style={style} {...props}>
      {children}
    </button>
  );
}
