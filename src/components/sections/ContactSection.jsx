/**
 * ContactSection.jsx — Interactive Contact Section with floating ContactModal trigger
 */
import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import { Mail, Check, Copy, MessageSquare } from 'lucide-react';
import ContactModal from '../ui/ContactModal';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const email = "hello@manasxz.qzz.io";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      <section
        className="w-full py-20 md:py-32 px-6 md:px-10 snap-section bg-void-black relative border-t border-graphite-border"
        id="contact"
      >
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader title="Get In Touch" number="05" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left — Statement & Mailto Actions */}
            <div className="space-y-8">
              <h3 className="font-display font-light text-4xl sm:text-6xl lg:text-7xl uppercase leading-none text-bone-white tracking-tight">
                Let's<br />
                <span className="text-ember-orange font-normal">Collaborate</span>
              </h3>

              <p className="font-body text-base md:text-lg text-fog-light max-w-lg leading-relaxed">
                Have a project in mind for AI video creation, 3D visual direction, VFX, or film production? Send a message or open the floating contact form.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                {/* Trigger Floating Dialog */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-3 bg-ember-orange text-void-black font-mono text-sm uppercase font-semibold tracking-wider px-6 py-4 hover:brightness-110 active:scale-95 transition-all cursor-pointer border-0"
                >
                  <MessageSquare size={18} />
                  <span>Open Contact Form</span>
                </button>

                {/* Copy Email Button */}
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-3 bg-carbon text-bone-white border border-graphite-border hover:border-ember-orange font-mono text-sm uppercase tracking-wider px-6 py-4 active:scale-95 transition-all cursor-pointer"
                >
                  {copied ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
                  <span>{copied ? 'Copied to Clipboard' : 'Copy Email Address'}</span>
                </button>
              </div>
            </div>

            {/* Right — Contact Info Box */}
            <div className="bg-carbon border border-graphite-border p-8 md:p-12 space-y-8">
              <div>
                <span className="block font-mono text-xs uppercase tracking-widest text-ember-orange mb-2">
                  Direct Contact
                </span>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="font-mono text-lg md:text-xl text-bone-white hover:text-ember-orange transition-colors break-all bg-transparent border-0 p-0 text-left cursor-pointer"
                >
                  {email}
                </button>
              </div>

              <div>
                <span className="block font-mono text-xs uppercase tracking-widest text-steel-mid mb-2">
                  Location & Availability
                </span>
                <p className="font-body text-base text-fog-light">
                  Available for worldwide freelance projects, remote creative direction, and studio commissions.
                </p>
              </div>

              <div>
                <span className="block font-mono text-xs uppercase tracking-widest text-steel-mid mb-3">
                  Social Networks
                </span>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {[
                    { name: 'Instagram', url: 'https://www.instagram.com/someone_on.the_internet?igsh=ZHR0Znh6cGF3Z3kx' },
                    { name: 'LinkedIn', url: 'https://linkedin.com' }
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm text-fog-light hover:text-ember-orange transition-colors uppercase tracking-wider no-underline"
                    >
                      {social.name} ↗
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Dialog */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
