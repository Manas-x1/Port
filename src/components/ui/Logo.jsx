/**
 * Logo.jsx — Official Logo Component using public/p4.png
 */
import React from 'react';

export default function Logo({ className = "w-8 h-8", alt = "Manas Upadhyay Logo" }) {
  return (
    <img
      src="/p4.png"
      alt={alt}
      className={`object-contain ${className}`}
    />
  );
}
