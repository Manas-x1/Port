import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';

export default function AboutMe() {
    useEffect(() => {
        window.scrollTo(0, 0);

        // Intersection Observer for scroll reveal animations
        const revealElements = document.querySelectorAll('.reveal');
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });

        return () => revealObserver.disconnect();
    }, []);

    return (
        <div className="w-full text-on-surface animate-fade-in">
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-24">
<div className="absolute inset-0 z-0">
<img alt="Portrait of Manas Upadhyay" className="w-full h-full object-cover grayscale brightness-75" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA82n26Az12WByK8kdQKBrGmU8kOZX4zt9cZ89-YReH9gZyyavLpUroR3obw-bRP7lsJeduYKreEpLHPPGRj_HaQcFnNTtgVifVvXc5Y5Bdq_B9vHxShyZhh72EW9wcQgvjS3LuqgjtbyE-U-hOMLQQ60bCfMguQGxxZ3DTpSGRa7qJ0qiRE05V0SMwiHhiJJn_Rg8EVgbRBdzdfYnmmVxvjzfbXni15MESKSVxSpawhVay0ePHN2R5v6_2sqpFRh--FsqT8yksHRUa" />
<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
</div>
<div className="relative z-10 w-full px-6 md:px-margin-desktop">
<div className="flex flex-col items-start md:items-center">
<p className="font-micro text-micro uppercase tracking-[0.4em] mb-4 text-smoke">Digital Creator / Visionary</p>
<h1 className="font-display text-display-mobile md:text-display uppercase kerning-tight leading-[0.8] mb-0">
                    MANAS
                </h1>
<div className="mt-8 flex gap-4 overflow-hidden">
<span className="inline-block px-3 py-1 border border-ash font-micro text-micro uppercase tracking-widest rounded-full">London</span>
<span className="inline-block px-3 py-1 border border-ash font-micro text-micro uppercase tracking-widest rounded-full">NYC</span>
<span className="inline-block px-3 py-1 border border-ash font-micro text-micro uppercase tracking-widest rounded-full">Tokyo</span>
</div>
</div>
</div>
<div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
<span className="material-symbols-outlined text-smoke">keyboard_double_arrow_down</span>
</div>
</section>

<section className="bg-paper text-ink py-gap-vertical-lg px-6 md:px-margin-desktop relative">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
<div className="md:col-span-8 md:col-start-3">
<h2 className="font-heading-lg text-4xl md:text-heading-lg uppercase mb-16 leading-none tracking-tighter italic">CRAFTING SILENCE</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<p className="font-body-lg text-body-lg leading-relaxed">
                            The digital landscape is inherently noisy. I believe in interfaces where every pixel serves a purpose, rejecting the clutter for a clinical, structured environment that allows the core message to breathe.
                        </p>
<p className="font-body-md text-body-md text-ash leading-relaxed">
                            By leveraging extreme negative space and rhythmic typographic shifts, we create cinematic experiences that transcend standard UI patterns. It is about the tension between what is seen and what is felt.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-gap-vertical-lg px-6 md:px-margin-desktop border-t border-ash/20">
<div className="max-w-[1440px] mx-auto">
<div className="flex items-center justify-between mb-16">
<span className="font-micro text-micro uppercase tracking-widest text-smoke">Expertise</span>
<div className="h-px bg-ash/20 flex-grow mx-8"></div>
<span className="material-symbols-outlined text-smoke" style="font-variation-settings: 'FILL' 1;">pentagon</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-gutter">

<div className="group border-l border-ash/30 pl-8 py-4 hover:border-on-surface transition-colors duration-500">
<span className="font-micro text-micro uppercase tracking-widest text-smoke mb-6 block">01 / Creative</span>
<h3 className="font-subheading text-subheading uppercase mb-6 group-hover:tracking-wider transition-all duration-500">DIRECTION</h3>
<p className="font-body-md text-body-md text-smoke leading-relaxed">
                        Setting the visual and conceptual foundation for immersive digital narratives through artistic rigor.
                    </p>
</div>

<div className="group border-l border-ash/30 pl-8 py-4 hover:border-on-surface transition-colors duration-500">
<span className="font-micro text-micro uppercase tracking-widest text-smoke mb-6 block">02 / Interface</span>
<h3 className="font-subheading text-subheading uppercase mb-6 group-hover:tracking-wider transition-all duration-500">DESIGN</h3>
<p className="font-body-md text-body-md text-smoke leading-relaxed">
                        High-fidelity execution of achromatic aesthetics, prioritizing structural integrity and typographic authority.
                    </p>
</div>

<div className="group border-l border-ash/30 pl-8 py-4 hover:border-on-surface transition-colors duration-500">
<span className="font-micro text-micro uppercase tracking-widest text-smoke mb-6 block">03 / Product</span>
<h3 className="font-subheading text-subheading uppercase mb-6 group-hover:tracking-wider transition-all duration-500">STRATEGY</h3>
<p className="font-body-md text-body-md text-smoke leading-relaxed">
                        Mapping user journeys that align luxury brand identities with functional, performance-driven digital ecosystems.
                    </p>
</div>
</div>
</div>
</section>

<section className="relative min-h-screen py-gap-vertical-lg overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Abstract texture background" className="w-full h-full object-cover opacity-30 grayscale contrast-125" src="https://lh3.googleusercontent.com/aida/AP1WRLsGKUl8IBnjldM2wbQLn9fHTcn_4HabWPOcjSim6l2BCkAWrEvGhccXCVFkjV5v4E4OseDI6eNeNWdPHNSZR8tFpliCdjh5z9mDCU--757sj9P4warHbgulN06oxFWSG2quezVw69gKwGv9hV6_Yl7z3T3IAL_XGeTElWTiZET6sclgNQk9t5gu5nbTENsHACOxM5jWwucPg8J3TVSTTLWxk1ZF0-Kb9vMQRtMm4gWfn2EVBHHYd2fp0gbi" />
<div className="absolute inset-0 bg-background/80 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
</div>
<div className="relative z-10 px-6 md:px-margin-desktop max-w-[1440px] mx-auto">
<h2 className="font-display text-4xl md:text-display uppercase text-center mb-32 tracking-tighter">MILESTONES</h2>
<div className="flex flex-col space-y-12">

<div className="group flex flex-col md:flex-row items-baseline justify-between border-b border-ash/20 pb-8 hover:border-on-surface transition-colors duration-500">
<div className="flex items-baseline gap-8">
<span className="font-ui-nav text-ui-nav text-smoke group-hover:text-on-surface">2026</span>
<h4 className="font-subheading text-subheading uppercase">Identity System 2026</h4>
</div>
<span className="font-micro text-micro uppercase tracking-widest text-smoke mt-2 md:mt-0">Brand Architecture</span>
</div>

<div className="group flex flex-col md:flex-row items-baseline justify-between border-b border-ash/20 pb-8 hover:border-on-surface transition-colors duration-500">
<div className="flex items-baseline gap-8">
<span className="font-ui-nav text-ui-nav text-smoke group-hover:text-on-surface">2025</span>
<h4 className="font-subheading text-subheading uppercase">Metroid Launch</h4>
</div>
<span className="font-micro text-micro uppercase tracking-widest text-smoke mt-2 md:mt-0">Digital Experience</span>
</div>

<div className="group flex flex-col md:flex-row items-baseline justify-between border-b border-ash/20 pb-8 hover:border-on-surface transition-colors duration-500">
<div className="flex items-baseline gap-8">
<span className="font-ui-nav text-ui-nav text-smoke group-hover:text-on-surface">2024</span>
<h4 className="font-subheading text-subheading uppercase">Neural Topology Exhibit</h4>
</div>
<span className="font-micro text-micro uppercase tracking-widest text-smoke mt-2 md:mt-0">Art Installation</span>
</div>

<div className="group flex flex-col md:flex-row items-baseline justify-between border-b border-ash/20 pb-8 hover:border-on-surface transition-colors duration-500">
<div className="flex items-baseline gap-8">
<span className="font-ui-nav text-ui-nav text-smoke group-hover:text-on-surface">2023</span>
<h4 className="font-subheading text-subheading uppercase">Achromatic Archive</h4>
</div>
<span className="font-micro text-micro uppercase tracking-widest text-smoke mt-2 md:mt-0">Design Research</span>
</div>
</div>
</div>
</section>

<footer className="flex flex-col items-center pt-gap-vertical-md pb-12 px-6 md:px-margin-desktop w-full border-t border-ash/30">
<div className="w-full max-w-[1440px] flex flex-col items-center">
<div className="font-hero text-display-mobile md:text-hero uppercase tracking-[-0.04em] text-on-surface leading-none mb-12 text-center">MANAS</div>
<div className="grid grid-cols-2 md:flex md:flex-row gap-12 mb-20">
<a className="font-body-md text-body-md text-smoke hover:text-on-surface transition-all duration-500" href="">Instagram</a>
<a className="font-body-md text-body-md text-smoke hover:text-on-surface transition-all duration-500" href="">LinkedIn</a>
<a className="font-body-md text-body-md text-smoke hover:text-on-surface transition-all duration-500" href="">Email</a>
<a className="font-body-md text-body-md text-smoke hover:text-on-surface transition-all duration-500" href="">Archive</a>
</div>
<div className="w-full flex justify-between items-center py-8 border-t border-ash/10">
<span className="font-micro text-micro uppercase tracking-widest text-smoke">© 2024 MANAS UPADHYAY</span>
<span className="font-micro text-micro uppercase tracking-widest text-smoke">Designed in London</span>
</div>
</div>
</footer>
            <ScrollToTop />
        </div>
    );
}
