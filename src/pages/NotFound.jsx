/**
 * NotFound.jsx — 404 title card. Also used for unknown project slugs.
 */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useFitText from '../hooks/useFitText';

const EASE = [0.16, 1, 0.3, 1];

export default function NotFound({ label = 'Error 404', detail = 'This page does not exist in the archive.' }) {
  const fit = useFitText();

  useEffect(() => {
    document.title = '404 — Page Not Found | Manas Upadhyay';
  }, []);

  return (
    <div className="w-full min-h-svh bg-void-black text-bone-white flex flex-col">
      <div className="shell flex-1 flex flex-col justify-end pt-28 pb-20">
        <div className="rule-t pt-4 flex justify-between gap-6 t-label text-steel-mid">
          <span>{label}</span>
          <span>Lost in latent space</span>
        </div>

        <div ref={fit.boxRef} className="w-full max-w-[110svh] mt-10 overflow-hidden" aria-hidden="true">
          <motion.span
            ref={fit.textRef}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.2, ease: EASE }}
            className="inline-block whitespace-nowrap font-display font-extrabold leading-[0.8] tracking-[-0.05em] text-bone-white"
            style={{ fontSize: fit.fontSize ? `${fit.fontSize}px` : '40vw', marginRight: '-0.02em' }}
          >
            4<span className="t-serif font-normal text-ember-orange">0</span>4
          </motion.span>
        </div>

        <div className="grid-12 gap-y-8 mt-10 rule-t pt-8">
          <h1 className="col-span-4 lg:col-span-6 m-0 t-h3 text-bone-white">{detail}</h1>
          <div className="col-span-4 lg:col-start-8 lg:col-span-5 flex flex-col sm:flex-row gap-3 lg:justify-end">
            <Link to="/" className="btn btn-ghost">Back to home</Link>
            <Link to="/work" className="btn btn-ghost">See the work</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
