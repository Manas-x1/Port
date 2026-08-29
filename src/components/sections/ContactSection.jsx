/**
 * ContactSection.jsx — Interactive Contact Section
 * Left side: Section statement & Reach-out trigger button.
 * Right side: React Bits styled 3D Profile Card with B&W photo, email, and phone.
 */
import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import { MessageSquare } from 'lucide-react';
import ContactModal from '../ui/ContactModal';
import ProfileCard from '../ui/ProfileCard';

export default function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        className="w-full py-20 md:py-32 px-6 md:px-10 snap-section bg-void-black relative border-t border-graphite-border"
        id="contact"
      >
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader title="Get In Touch" number="04" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side — Statement & Actions */}
            <div className="space-y-8">
              <h3 className="font-display font-light text-4xl sm:text-6xl lg:text-7xl uppercase leading-none text-bone-white tracking-tight">
                Let's<br />
                <span className="text-ember-orange font-normal">Collaborate</span>
              </h3>

              <p className="font-body text-base md:text-lg text-fog-light max-w-lg leading-relaxed">
                Have a project in mind for AI video creation, 3D visual direction, VFX, or film production? Click Reach-out to connect directly.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                {/* Single Reach-out Button */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-3 bg-ember-orange text-void-black font-mono text-sm uppercase font-semibold tracking-wider px-8 py-4 hover:brightness-110 active:scale-95 transition-all cursor-pointer border-0 select-none"
                >
                  <MessageSquare size={18} />
                  <span>Reach-out</span>
                </button>
              </div>

              {/* Updated Social Networks */}
              <div className="pt-6 border-t border-graphite-border">
                <span className="block font-mono text-xs uppercase tracking-widest text-steel-mid mb-3">
                  Social Networks
                </span>
                <div className="flex flex-wrap gap-6">
                  <a
                    href="https://www.instagram.com/someone_on.the_internet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-fog-light hover:text-ember-orange transition-colors uppercase tracking-wider no-underline"
                  >
                    Instagram ↗
                  </a>
                  <a
                    href="https://www.linkedin.com/in/manas-u-33245a288"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-fog-light hover:text-ember-orange transition-colors uppercase tracking-wider no-underline"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side — React Bits styled 3D Profile Card */}
            <div className="w-full flex justify-center lg:justify-end">
              <ProfileCard />
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
