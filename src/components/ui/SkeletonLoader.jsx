/**
 * SkeletonLoader.jsx — Skeleton loading placeholders
 * 
 * Provides shimmer-animated placeholder shapes for content loading states.
 * Uses the Ori palette (Carbon → Graphite shimmer on Void Black).
 * 
 * Variants:
 *   - text: Single line of text placeholder
 *   - heading: Wide heading placeholder
 *   - image: Image block placeholder (16:9 ratio)
 *   - card: Card placeholder (4:5 ratio)
 *   - circle: Circular avatar placeholder
 */
import React from 'react';

/* --- Individual skeleton shapes --- */

export function SkeletonText({ width = '100%', className = '' }) {
  return (
    <div
      className={`skeleton skeleton-text ${className}`}
      style={{ width }}
    />
  );
}

export function SkeletonHeading({ width = '60%', className = '' }) {
  return (
    <div
      className={`skeleton skeleton-heading ${className}`}
      style={{ width }}
    />
  );
}

export function SkeletonImage({ className = '' }) {
  return (
    <div className={`skeleton skeleton-image ${className}`} />
  );
}

export function SkeletonCard({ className = '' }) {
  return (
    <div className={`skeleton skeleton-card ${className}`} />
  );
}

/* --- Composite skeleton layouts --- */

/**
 * SkeletonPageLoader — Full-page skeleton used during route transitions.
 * Renders a heading + paragraph + image placeholder structure.
 */
export default function SkeletonLoader() {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-16 py-24 space-y-8">
      {/* Heading placeholder */}
      <SkeletonHeading width="40%" />
      
      {/* Body text placeholders */}
      <div className="space-y-2">
        <SkeletonText width="100%" />
        <SkeletonText width="90%" />
        <SkeletonText width="75%" />
      </div>

      {/* Image placeholder */}
      <SkeletonImage />

      {/* More text */}
      <div className="space-y-2">
        <SkeletonText width="85%" />
        <SkeletonText width="65%" />
      </div>
    </div>
  );
}
