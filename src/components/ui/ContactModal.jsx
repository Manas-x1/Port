/**
 * ContactModal.jsx — the inquiry form in a dialog (opened from the navbar's "Reach out").
 * Phones: a sheet rising from the bottom. Larger screens: a centred panel.
 */
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactForm from './ContactForm';

const EASE = [0.16, 1, 0.3, 1];

export default function ContactModal({ isOpen, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    if (isOpen) window.__lenis?.stop();
    else window.__lenis?.start();
    return () => {
      document.body.style.overflow = '';
      window.__lenis?.start();
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="contact-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-6 bg-black/90 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="relative w-full sm:max-w-xl bg-[#0a0a0a] border-t sm:border border-bone-white/15 px-5 pt-5 pb-8 sm:p-10 text-bone-white max-h-[92svh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 rule-b pb-4 mb-8">
              <span className="t-label text-steel-mid">Contact</span>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center gap-3 h-10 px-4 t-label text-bone-white border border-bone-white/25 hover:bg-bone-white hover:text-void-black transition-colors duration-500 cursor-pointer"
                aria-label="Close dialog"
              >
                Close <span aria-hidden="true">✕</span>
              </button>
            </div>

            <h2 id="contact-modal-title" className="m-0 t-h2 text-bone-white mb-8">
              Tell me what you are <span className="t-serif">making</span>
            </h2>

            <ContactForm idPrefix="cm" onSent={onClose} autoFocus />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
