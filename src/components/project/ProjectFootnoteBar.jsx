/**
 * ProjectFootnoteBar.jsx — Sleek 2-Part Footnote Navigation Bar for Case Study Pages
 * 
 * Perfectly aligned within max-w-[1280px] matching page padding (eliminates left gap/cutoff).
 *   - Part 1 (Left / Main): Next Case Study title & navigation action trigger.
 *   - Part 2 (Right / Secondary): Quick index navigation back to all works / portfolio main index.
 */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Grid, Home } from 'lucide-react';

export default function ProjectFootnoteBar({ nextProject }) {
  const navigate = useNavigate();

  if (!nextProject) return null;

  return (
    <section className="w-full bg-void-black border-t border-graphite-border py-12 md:py-16 px-6 md:px-10 select-none">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* PART 1 (Left / Main — Next Case Study Trigger) */}
        <div
          onClick={() => navigate(`/project/${nextProject.slug}`)}
          className="lg:col-span-8 p-8 md:p-10 bg-carbon border border-graphite-border hover:border-ember-orange transition-all duration-300 group cursor-pointer flex flex-col justify-between min-h-[220px]"
        >
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-steel-mid group-hover:text-ember-orange transition-colors flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-ember-orange flex-shrink-0" />
              <span>UP NEXT CASE STUDY</span>
            </div>
            <h3 className="font-display text-3xl sm:text-5xl font-light uppercase text-bone-white group-hover:text-ember-orange transition-colors tracking-tight">
              {nextProject.title}
            </h3>
            <span className="font-mono text-xs text-steel-mid uppercase tracking-widest mt-2 block">
              {nextProject.category}
            </span>
          </div>

          <div className="pt-6 mt-8 border-t border-graphite-border/60 flex items-center justify-between font-mono text-xs text-bone-white uppercase tracking-widest group-hover:text-ember-orange transition-colors">
            <span>Explore Next Case Study</span>
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300 text-ember-orange" />
          </div>
        </div>

        {/* PART 2 (Right / Secondary — Archive & Portfolio Index Links) */}
        <div className="lg:col-span-4 p-8 md:p-10 bg-carbon border border-graphite-border flex flex-col justify-between min-h-[220px]">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-steel-mid block mb-4">
              QUICK NAVIGATION
            </span>
            <div className="space-y-3 font-mono text-xs uppercase tracking-widest">
              <Link
                to="/work"
                className="flex items-center justify-between p-3.5 bg-void-black border border-graphite-border hover:border-ember-orange text-bone-white hover:text-ember-orange transition-all no-underline group"
              >
                <div className="flex items-center gap-3">
                  <Grid size={15} className="text-steel-mid group-hover:text-ember-orange transition-colors" />
                  <span>All Works Archive</span>
                </div>
                <span className="text-steel-mid group-hover:text-ember-orange">↗</span>
              </Link>

              <Link
                to="/"
                className="flex items-center justify-between p-3.5 bg-void-black border border-graphite-border hover:border-ember-orange text-bone-white hover:text-ember-orange transition-all no-underline group"
              >
                <div className="flex items-center gap-3">
                  <Home size={15} className="text-steel-mid group-hover:text-ember-orange transition-colors" />
                  <span>Portfolio Index</span>
                </div>
                <span className="text-steel-mid group-hover:text-ember-orange">↵</span>
              </Link>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-graphite-border/60 font-mono text-[11px] uppercase tracking-widest text-steel-mid/60 text-center lg:text-left">
            MANAS UPADHYAY // CREATIVE ARCHIVE
          </div>
        </div>

      </div>
    </section>
  );
}
