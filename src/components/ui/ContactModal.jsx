/**
 * ContactModal.jsx — Floating Contact Dialog Box (Mobile & Desktop)
 * 
 * Floating modal dialog for quick message submission or embedded Google Form.
 * Theme: Dark Ori aesthetic (Void Black bg, Ember Orange accents, Graphite borders).
 * Accessible across mobile & desktop devices.
 * 
 * Props:
 *   isOpen: boolean — Whether modal is open
 *   onClose: function — Callback to close modal
 *   googleFormUrl: string — Optional Google Form embed link
 */
import React, { useState, useEffect } from 'react';
import { X, Send, Check, Mail, ExternalLink } from 'lucide-react';
import FilledButton from './FilledButton';

export default function ContactModal({ isOpen, onClose, googleFormUrl = "" }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('quick'); // 'quick' or 'gform'

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /* 
     * Form submission logic:
     * Opens mailto link with encoded form data as robust fallback,
     * while showing submission success state to the user.
     */
    const mailtoUrl = `mailto:hello@manasxz.qzz.io?subject=${encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
      onClick={onClose}
    >
      {/* Floating Dialog Container */}
      <div
        className="relative w-full max-w-lg bg-void-black border border-graphite-border shadow-2xl p-6 sm:p-8 space-y-6 text-bone-white animate-slide-up"
        onClick={(e) => e.stopPropagation()}
        style={{
          boxShadow: '0 25px 50px -12px rgba(255, 79, 43, 0.15)',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-steel-mid hover:text-ember-orange transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-ember-orange" />
            <span className="font-mono text-xs uppercase tracking-widest text-ember-orange font-medium">
              Direct Contact
            </span>
          </div>
          <h3 className="font-display font-light text-2xl sm:text-3xl uppercase tracking-tight text-bone-white">
            Send A Message
          </h3>
          <p className="font-body text-xs sm:text-sm text-steel-mid">
            Fill out the form below to reach out directly to Manas.
          </p>
        </div>

        {/* Tab Toggle (Quick Form vs Embedded Google Form if URL provided) */}
        {googleFormUrl && (
          <div className="flex border-b border-graphite-border font-mono text-xs uppercase tracking-wider">
            <button
              onClick={() => setActiveTab('quick')}
              className={`py-2 px-4 border-b-2 transition-colors cursor-pointer ${
                activeTab === 'quick'
                  ? 'border-ember-orange text-bone-white'
                  : 'border-transparent text-steel-mid hover:text-bone-white'
              }`}
            >
              Quick Form
            </button>
            <button
              onClick={() => setActiveTab('gform')}
              className={`py-2 px-4 border-b-2 transition-colors cursor-pointer ${
                activeTab === 'gform'
                  ? 'border-ember-orange text-bone-white'
                  : 'border-transparent text-steel-mid hover:text-bone-white'
              }`}
            >
              Google Form
            </button>
          </div>
        )}

        {/* Form Body */}
        {activeTab === 'quick' ? (
          isSubmitted ? (
            /* Success State */
            <div className="py-8 text-center space-y-4">
              <div className="w-12 h-12 bg-ember-orange/10 border border-ember-orange text-ember-orange mx-auto flex items-center justify-center">
                <Check size={24} />
              </div>
              <h4 className="font-display text-xl uppercase text-bone-white">
                Message Prepared!
              </h4>
              <p className="font-body text-xs sm:text-sm text-fog-light max-w-xs mx-auto">
                Your email client has been opened with the message. Click send to deliver it to Manas.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="font-mono text-xs text-steel-mid hover:text-ember-orange uppercase underline cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            /* Contact Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-steel-mid mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Vance"
                  className="w-full bg-carbon border border-graphite-border px-3 py-2.5 text-sm text-bone-white focus:border-ember-orange"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-steel-mid mb-1">
                  Your Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alex@domain.com"
                  className="w-full bg-carbon border border-graphite-border px-3 py-2.5 text-sm text-bone-white focus:border-ember-orange"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-steel-mid mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="3D Animation / AI Video Collaboration"
                  className="w-full bg-carbon border border-graphite-border px-3 py-2.5 text-sm text-bone-white focus:border-ember-orange"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-steel-mid mb-1">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, and goals..."
                  className="w-full bg-carbon border border-graphite-border px-3 py-2.5 text-sm text-bone-white focus:border-ember-orange resize-none"
                />
              </div>

              <div className="pt-2 flex justify-end">
                <FilledButton type="submit" className="w-full sm:w-auto px-6 py-3">
                  <Send size={16} className="mr-2" />
                  <span>Send Message</span>
                </FilledButton>
              </div>
            </form>
          )
        ) : (
          /* Embedded Google Form iframe tab */
          <div className="w-full h-[400px] border border-graphite-border bg-carbon overflow-hidden">
            <iframe
              src={googleFormUrl}
              className="w-full h-full border-0"
              title="Google Form Contact"
            >
              Loading Google Form...
            </iframe>
          </div>
        )}
      </div>
    </div>
  );
}
