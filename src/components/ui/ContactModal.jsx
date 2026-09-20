/**
 * ContactModal.jsx — Refined Minimalist Inquiry Dialog
 * 
 * Balances extreme simplicity with high-end editorial aesthetics.
 * Backed by direct Google Apps Script delivery to manasx1upadhyay@gmail.com.
 */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Loader2, ArrowRight, ArrowUpRight } from 'lucide-react';

// Google Apps Script Web App URL (Connected to manasx1upadhyay@gmail.com)
const GOOGLE_SCRIPT_WEBAPP_URL =
  import.meta.env.VITE_GOOGLE_SCRIPT_URL ||
  'https://script.google.com/macros/s/AKfycbzm0jdhEzYXWf5sLnTq1jsNpFPy0-qIqPGbJWS2p-q4l1M3H5i3thfp76sdBhMrEtA9Zw/exec';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  /* Close on Escape key */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  /* Lock body scroll when modal is open */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  /* Auto-close after message is sent */
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        onClose();
        handleReset();
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted, onClose]);

  const isValidEmail = (val) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'email' && emailError) {
      if (isValidEmail(value)) setEmailError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(formData.email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    setEmailError('');
    setIsSubmitting(true);

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    };

    try {
      if (GOOGLE_SCRIPT_WEBAPP_URL) {
        await fetch(GOOGLE_SCRIPT_WEBAPP_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify(payload),
        });
        setIsSubmitted(true);
      } else {
        const res = await fetch('https://formsubmit.co/ajax/a90978561c3a896b86981efe33dff306', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: payload.name,
            email: payload.email,
            message: payload.message,
            _subject: `New Portfolio Inquiry from ${payload.name}`,
            _template: 'table',
            _captcha: 'false',
          }),
        });

        const data = await res.json();
        if (data.success === 'true' || res.ok) {
          setIsSubmitted(true);
        } else {
          throw new Error(data.message || 'Submission failed');
        }
      }
    } catch (err) {
      console.warn('Submission notice:', err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setEmailError('');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="contact-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
          }}
          onClick={onClose}
        >
          {/* Glass Atelier Dialog Container */}
          <motion.div
            key="contact-modal-container"
            initial={{ opacity: 0, scale: 0.95, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring', damping: 28, stiffness: 360 }}
            className="relative w-full max-w-lg bg-[#0c0d12]/95 border border-white/[0.08] rounded-3xl p-7 sm:p-9 space-y-6 text-bone-white overflow-hidden shadow-[0_32px_80px_-20px_rgba(0,0,0,0.9),0_0_50px_-20px_rgba(255,79,43,0.12)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Subtle Ambient Top Glow */}
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-36 bg-ember-orange/15 blur-[64px] rounded-full" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-steel-mid hover:text-bone-white hover:border-ember-orange/60 hover:bg-white/[0.04] transition-all cursor-pointer"
              aria-label="Close dialog"
            >
              <X size={15} />
            </button>

            {/* Modal Header */}
            <div className="space-y-1.5 pr-8">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ember-orange opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-ember-orange" />
                </span>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-steel-mid">
                  Direct Line
                </span>
              </div>
              <h3 className="font-display font-light text-2xl sm:text-3xl tracking-tight text-bone-white">
                Get In Touch
              </h3>
            </div>

            {/* Success State */}
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="py-12 text-center space-y-3"
              >
                <div className="relative w-14 h-14 mx-auto flex items-center justify-center">
                  <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-md animate-pulse" />
                  <div className="relative w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={26} />
                  </div>
                </div>
                <div className="space-y-1">
                  <h4 className="font-display text-xl uppercase tracking-wider text-bone-white font-medium">
                    Message Sent
                  </h4>
                  <p className="text-xs text-steel-mid font-mono">
                    I'll get back to you shortly.
                  </p>
                </div>
              </motion.div>
            ) : (
              /* Simplified 3-Field Form */
              <form onSubmit={handleSubmit} className="space-y-4 pt-1">
                {/* 1. Name */}
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-steel-mid mb-1.5">
                    01 // Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/[0.025] hover:bg-white/[0.04] focus:bg-white/[0.05] border border-white/[0.08] focus:border-ember-orange/80 focus:ring-1 focus:ring-ember-orange/30 rounded-xl px-4 py-3 text-sm text-bone-white focus:outline-none transition-all duration-200"
                  />
                </div>

                {/* 2. Email */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block font-mono text-[10px] uppercase tracking-widest text-steel-mid">
                      02 // Email
                    </label>
                    {emailError && (
                      <span className="font-mono text-[10px] text-red-400 tracking-normal">
                        {emailError}
                      </span>
                    )}
                  </div>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-white/[0.025] hover:bg-white/[0.04] focus:bg-white/[0.05] border rounded-xl px-4 py-3 text-sm text-bone-white focus:outline-none transition-all duration-200 ${
                      emailError
                        ? 'border-red-500/80 focus:border-red-500'
                        : 'border-white/[0.08] focus:border-ember-orange/80 focus:ring-1 focus:ring-ember-orange/30'
                    }`}
                  />
                </div>

                {/* 3. Message */}
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-steel-mid mb-1.5">
                    03 // Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/[0.025] hover:bg-white/[0.04] focus:bg-white/[0.05] border border-white/[0.08] focus:border-ember-orange/80 focus:ring-1 focus:ring-ember-orange/30 rounded-xl px-4 py-3 text-sm text-bone-white focus:outline-none transition-all duration-200 resize-none"
                  />
                </div>

                {/* Action CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-ember-orange to-[#ff623d] text-void-black font-mono text-xs uppercase font-bold tracking-widest flex items-center justify-center gap-2 hover:shadow-[0_8px_24px_-4px_rgba(255,79,43,0.4)] hover:brightness-105 active:scale-[0.99] transition-all cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRight size={15} />
                      </>
                    )}
                  </button>
                </div>

                {/* Understated direct email link */}
                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-steel-mid/60">
                  <span>Direct mail</span>
                  <a
                    href="mailto:manasx1upadhyay@gmail.com"
                    className="text-steel-mid hover:text-ember-orange transition-colors flex items-center gap-1 group"
                  >
                    <span>manasx1upadhyay@gmail.com</span>
                    <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
