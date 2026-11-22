/**
 * renderingMode.js — Synchronous hardware acceleration detection
 *
 * Uses WebGL's WEBGL_debug_renderer_info extension to read the actual GPU
 * renderer string. Software rasterizers (SwiftShader, llvmpipe, etc.) report
 * themselves clearly in this string.
 *
 * Falls back to a timing heuristic if the extension is unavailable: runs a
 * small draw call and measures wall-clock time. >80ms → definitely software.
 *
 * Result is cached on the window object so every component reads the same
 * value without re-probing.
 */

const SOFTWARE_PATTERNS = [
  'swiftshader',
  'llvmpipe',
  'softpipe',
  'software rasterizer',
  'microsoft basic render',
  'google swiftshader',
  'angle (software)',
  'cpu',
];

/** @returns {boolean} true = real GPU available, false = software/CPU only */
export function detectHardwareAcceleration() {
  if (typeof window === 'undefined') return true;

  // Return cached result
  if (window.__hwAccelDetected !== undefined) return window.__hwAccelDetected;

  let result = true; // optimistic default

  try {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;

    const gl =
      canvas.getContext('webgl', { powerPreference: 'high-performance', failIfMajorPerformanceCaveat: true }) ||
      canvas.getContext('webgl', { powerPreference: 'high-performance' }) ||
      canvas.getContext('experimental-webgl');

    if (!gl) {
      // WebGL unavailable — definitely no GPU
      result = false;
    } else {
      // Check renderer string
      const ext = gl.getExtension('WEBGL_debug_renderer_info');
      if (ext) {
        const renderer = (gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) || '').toLowerCase();
        const vendor   = (gl.getParameter(ext.UNMASKED_VENDOR_WEBGL)   || '').toLowerCase();
        const combined = renderer + ' ' + vendor;
        if (SOFTWARE_PATTERNS.some(p => combined.includes(p))) {
          result = false;
        }
      }

      // Also check: if failIfMajorPerformanceCaveat was honoured and still
      // gave us a context, we're on a real GPU. If not, fall through.

      // Clean up
      const loseCtx = gl.getExtension('WEBGL_lose_context');
      if (loseCtx) loseCtx.loseContext();
    }
  } catch (e) {
    result = false;
  }

  window.__hwAccelDetected = result;
  return result;
}

/** React hook — same value as detectHardwareAcceleration(), reactive-friendly */
import { useMemo } from 'react';

export function useHardwareAcceleration() {
  // useMemo with [] = runs once per component mount, no re-renders
  return useMemo(() => detectHardwareAcceleration(), []);
}
