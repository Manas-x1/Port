/**
 * FilledButton.jsx — Ori primary action button
 * 
 * Ember Orange background, Void Black text, Chivo Mono uppercase.
 * Sharp rectangular shape (0 border-radius) — terminal/control-panel feel.
 * 
 * Props:
 *   children: React node — button label
 *   onClick: function — click handler
 *   href: string — optional, renders as <a> instead of <button>
 *   className: string — additional classes
 */
import React from 'react';

export default function FilledButton({ children, onClick, href, className = '', ...props }) {
  const baseClasses = `
    inline-flex items-center justify-center gap-2
    bg-ember-orange text-void-black
    px-4 py-2
    cursor-pointer select-none
    transition-all duration-300
    hover:brightness-110 hover:scale-[0.98]
    active:scale-95
    ${className}
  `.trim();

  const style = {
    fontFamily: 'var(--font-mono)',
    fontSize: '14px',
    fontWeight: 400,
    textTransform: 'uppercase',
    borderRadius: '0px',
    border: 'none',
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
