/**
 * NotFound.jsx — Dedicated 404 Error Page
 * 
 * Provides a clean, aesthetic fallback for unmapped routes with clear return-to-home navigation.
 */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FilledButton from '../components/ui/FilledButton';
import GhostButton from '../components/ui/GhostButton';

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = '404 — Page Not Found | Manas Upadhyay';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-void-black text-bone-white flex items-center justify-center px-6 pt-24 pb-16 relative overflow-hidden">
      {/* Subtle ambient grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(245, 245, 245, 0.8) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="relative z-10 max-w-xl mx-auto text-center flex flex-col items-center">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-ember-orange block mb-6 px-3 py-1 bg-carbon border border-graphite-border">
          ERROR 404 // UNRESOLVED ROUTE
        </span>

        <h1 className="font-display text-5xl sm:text-7xl font-light uppercase tracking-tight text-bone-white mb-6">
          Lost in Latent Space
        </h1>

        <p className="font-mono text-xs sm:text-sm text-steel-mid uppercase tracking-widest leading-relaxed mb-10 max-w-md">
          The requested coordinate does not exist in the current visual archive.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <FilledButton onClick={() => navigate('/')} className="w-full sm:w-auto px-8 py-3 text-xs">
            Return to Index
          </FilledButton>
          <GhostButton onClick={() => navigate('/work')} className="w-full sm:w-auto px-8 py-3 text-xs">
            View Work Archive
          </GhostButton>
        </div>
      </div>
    </div>
  );
}
