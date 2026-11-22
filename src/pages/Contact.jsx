/**
 * Contact.jsx — Contact page: title card, the form inline, portrait and direct lines.
 */
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/layout/Footer';
import PageHeader from '../components/ui/PageHeader';
import ContactForm from '../components/ui/ContactForm';
import { ContactDetails } from '../components/sections/ContactSection';

const EASE = [0.16, 1, 0.3, 1];

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact | Manas Upadhyay (manasxz)';
  }, []);

  return (
    <div className="w-full bg-void-black text-bone-white min-h-screen">
      <PageHeader
        label="Contact"
        aside="Open to projects"
        title={<>Let&rsquo;s <span className="t-serif">collaborate</span></>}
        lead="AI video, 3D visual direction, VFX or a full film. Tell me what you are making."
      />

      <section className="shell">
        <div className="grid-12 gap-y-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.7, ease: EASE }}
            className="col-span-4 lg:col-span-7"
          >
            <div className="rule-t pt-4 t-label text-steel-mid mb-10">
              <span className="text-bone-white">01</span> — Write to me
            </div>
            <ContactForm idPrefix="cp" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.85, ease: EASE }}
            className="col-span-4 lg:col-start-9 lg:col-span-4"
          >
            <div className="rule-t pt-4 t-label text-steel-mid mb-10">
              <span className="text-bone-white">02</span> — Direct
            </div>
            <ContactDetails eager />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
