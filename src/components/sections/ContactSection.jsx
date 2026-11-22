/**
 * ContactSection.jsx — home-page call to action, opening the contact dialog.
 * Also exports ContactDetails (portrait + direct lines), shared with the Contact page.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import { CONTACT, SOCIALS, openContact } from '../../data/contact';

const EASE = [0.16, 1, 0.3, 1];

export function ContactDetails({ eager = false }) {
  return (
    <>
      <div className="frame aspect-[4/5] max-w-[360px] lg:max-w-none">
        <img
          src="/portrait.webp"
          alt="Portrait of Manas Upadhyay"
          loading={eager ? 'eager' : 'lazy'}
          className="grayscale contrast-110"
        />
      </div>
      <dl className="mt-6 m-0 t-label">
        <div className="rule-t flex justify-between items-center gap-4 py-1">
          <dt className="text-steel-mid">Email</dt>
          <dd className="m-0">
            <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center min-h-10 text-bone-white normal-case tracking-normal font-body text-sm">
              {CONTACT.email}
            </a>
          </dd>
        </div>
        <div className="rule-t flex justify-between items-center gap-4 py-1">
          <dt className="text-steel-mid">Phone</dt>
          <dd className="m-0">
            <a href={`tel:${CONTACT.phoneHref}`} className="inline-flex items-center min-h-10 text-bone-white">{CONTACT.phone}</a>
          </dd>
        </div>
        {SOCIALS.map((s) => (
          <div key={s.label} className="rule-t flex justify-between items-center gap-4 py-1">
            <dt className="text-steel-mid">{s.label}</dt>
            <dd className="m-0">
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center min-h-10 text-bone-white normal-case tracking-normal font-body text-sm">
                {s.handle} ↗
              </a>
            </dd>
          </div>
        ))}
      </dl>
    </>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="section bg-void-black">
      <div className="shell">
        <SectionHeader index="04" label="Contact" aside="Open to projects" />

        <div className="grid-12 gap-y-14">
          <div className="col-span-4 lg:col-span-7 flex flex-col">
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1.2, ease: EASE }}
              className="m-0 t-h1 text-bone-white"
            >
              Let&rsquo;s <span className="t-serif">collaborate</span>
            </motion.h2>

            <p className="t-lead text-fog-light mt-8 mb-10 max-w-[34ch]">
              AI video, 3D visual direction, VFX or a full film. Tell me what you are making.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button type="button" onClick={openContact} className="btn btn-primary w-full sm:w-auto">
                Start a project <span aria-hidden="true">→</span>
              </button>
              <a href={`mailto:${CONTACT.email}`} className="btn btn-ghost w-full sm:w-auto normal-case tracking-normal font-body text-sm">
                {CONTACT.email}
              </a>
            </div>
          </div>

          <div className="col-span-4 lg:col-start-9 lg:col-span-4">
            <ContactDetails />
          </div>
        </div>
      </div>
    </section>
  );
}
