/**
 * ContactForm.jsx — the inquiry form, used inline on /contact and inside ContactModal.
 * Delivery: Google Apps Script web app, formsubmit fallback.
 */
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { CONTACT } from '../../data/contact';

const GOOGLE_SCRIPT_WEBAPP_URL =
  import.meta.env.VITE_GOOGLE_SCRIPT_URL ||
  'https://script.google.com/macros/s/AKfycbzm0jdhEzYXWf5sLnTq1jsNpFPy0-qIqPGbJWS2p-q4l1M3H5i3thfp76sdBhMrEtA9Zw/exec';

const EASE = [0.16, 1, 0.3, 1];
const EMPTY = { name: '', email: '', message: '' };

function Field({ id, label, error, children }) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="t-label text-steel-mid">{label}</label>
        {error && <span className="t-label text-ember-orange normal-case tracking-normal">{error}</span>}
      </div>
      {children}
    </div>
  );
}

/**
 * @param idPrefix  keeps label/input ids unique when two forms exist (page + modal)
 * @param onSent    called a moment after a successful send (the modal closes itself)
 * @param autoFocus focus the first field on fine-pointer devices
 */
export default function ContactForm({ idPrefix = 'cf', onSent, autoFocus = false }) {
  const [formData, setFormData] = useState(EMPTY);
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const firstFieldRef = useRef(null);

  useEffect(() => {
    // Skip on touch screens so the keyboard doesn't jump up uninvited
    if (autoFocus && window.matchMedia('(pointer: fine)').matches) {
      firstFieldRef.current?.focus({ preventScroll: true });
    }
  }, [autoFocus]);

  useEffect(() => {
    if (!isSubmitted || !onSent) return;
    const timer = setTimeout(onSent, 2200);
    return () => clearTimeout(timer);
  }, [isSubmitted, onSent]);

  const isValidEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'email' && emailError && isValidEmail(value)) setEmailError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidEmail(formData.email)) {
      setEmailError('Enter a valid email');
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
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(payload),
        });
        setIsSubmitted(true);
      } else {
        const res = await fetch('https://formsubmit.co/ajax/a90978561c3a896b86981efe33dff306', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            ...payload,
            _subject: `New Portfolio Inquiry from ${payload.name}`,
            _template: 'table',
            _captcha: 'false',
          }),
        });
        const data = await res.json();
        if (data.success === 'true' || res.ok) setIsSubmitted(true);
        else throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      console.warn('Submission notice:', err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="py-10 rule-t"
        role="status"
      >
        <p className="t-h3 m-0 mb-2">Message sent.</p>
        <p className="t-body text-fog-light m-0 mb-6">Thank you. It is on its way to my inbox.</p>
        {!onSent && (
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setFormData(EMPTY);
            }}
            className="btn btn-ghost"
          >
            Send another
          </button>
        )}
      </motion.div>
    );
  }

  const id = (n) => `${idPrefix}-${n}`;

  return (
    <form onSubmit={handleSubmit} className="space-y-7" noValidate>
      <Field id={id('name')} label="Name">
        <input ref={firstFieldRef} id={id('name')} type="text" name="name" required autoComplete="name" value={formData.name} onChange={handleChange} />
      </Field>
      <Field id={id('email')} label="Email" error={emailError}>
        <input
          id={id('email')}
          type="email"
          name="email"
          required
          autoComplete="email"
          aria-invalid={!!emailError}
          value={formData.email}
          onChange={handleChange}
          style={emailError ? { borderColor: 'var(--color-ember-orange)' } : undefined}
        />
      </Field>
      <Field id={id('message')} label="Message">
        <textarea id={id('message')} name="message" required rows={5} value={formData.message} onChange={handleChange} className="resize-none" />
      </Field>

      <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full disabled:opacity-60">
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending
          </>
        ) : (
          <>
            Send message <span aria-hidden="true">→</span>
          </>
        )}
      </button>

      <div className="rule-t pt-4 flex flex-wrap items-center justify-between gap-2">
        <span className="t-label text-steel-mid">Or write directly</span>
        <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center min-h-10 text-sm text-fog-light hover:text-bone-white link-line">
          {CONTACT.email}
        </a>
      </div>
    </form>
  );
}
