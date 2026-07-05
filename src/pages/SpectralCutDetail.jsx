import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';

export default function SpectralCutDetail() {
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
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Hero cinematic frame" className="w-full h-full object-cover opacity-80 scale-105 animate-[pulse_8s_infinite_alternate]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgVwfLrUvoKF_4l9pXWK0b6iQAdhxqtRsiEPxXdSErcpednoubglYqmM4akqFD_e8iYIR2WHUIISteKY7EscUOUNlGi5K6iop3IT4Issgy21_Fl-ScITprOHlZGVo12aaCXNiGfIkafk3B2HSa6PxEOqgU-4J9wkFAfV1_EgmqGL9dcU_aiJsZfYYyt_Wa_41WBEwyqx-mqCEHeIUPXFXRtDuDeoJPRm8JjTjYx9aU2RqTLf6yaBH6SHto0wYhRI_L9X-KEK-kKK1u" />
<div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-ink/90"></div>
</div>
<div className="relative z-10 text-center px-6">
<h1 className="font-display text-display-mobile md:text-display uppercase tracking-tight text-paper mb-4 scramble-trigger">SPECTRAL CUT</h1>
<p className="font-subheading text-[16px] md:text-subheading uppercase tracking-[0.4em] text-paper opacity-80 mb-2">A MOBILE PROJECT HERO</p>
<p className="font-micro text-micro uppercase tracking-[0.2em] text-ash">AN AUDIOVISUAL JOURNEY</p>
</div>

<div className="absolute inset-0 pointer-events-none overflow-hidden">
<div className="absolute top-0 -left-1/4 w-1/2 h-full bg-gradient-to-r from-ray-blue/5 to-transparent rotate-12 opacity-30"></div>
<div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-gradient-to-l from-ray-gold/5 to-transparent -rotate-12 opacity-30"></div>
</div>
<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
<span className="font-ui-nav text-ui-nav uppercase tracking-[0.2em] text-ash">SCROLL TO EXPLORE</span>
<div className="w-[1px] h-12 bg-ash animate-bounce"></div>
</div>
</section>

<section className="bg-paper text-ink py-gap-vertical-lg px-margin-mobile md:px-margin-desktop relative">
<div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-8">
<span className="font-micro text-micro uppercase tracking-[0.3em] text-ash mb-8 block">01 / ARCHITECTURE</span>
<h2 className="font-heading-lg text-[48px] md:text-heading-lg uppercase mb-12 scramble-reveal">TEMPORAL<br />ARCHITECTURE</h2>
<div className="md:grid md:grid-cols-2 gap-12">
<p className="font-body-lg text-body-lg text-ink/80 mb-8 md:mb-0">
                        The essence of "Spectral Cut" lies in its rejection of traditional linearity. We explored the boundaries of deep-shadow color grading to create a sense of volumetric weight within digital space. Each frame is treated as a singular architectural unit, constructed with light and rhythmic silence.
                    </p>
<p className="font-body-md text-body-md text-ink/60">
                        Frame-by-frame precision was non-negotiable. The atmospheric pacing was designed to breathe—expanding and contracting to allow the viewer to inhabit the void between the cuts. It is a study of presence and absence, rendered in high-fidelity noir.
                    </p>
</div>
</div>
<div className="md:col-span-4 flex md:justify-end items-start pt-20">
<div className="space-y-4 border-l border-ash/20 pl-8">
<div>
<p className="font-micro text-micro text-ash uppercase">RESOLUTION</p>
<p className="font-ui-nav text-[14px] font-bold">8K RAW MASTER</p>
</div>
<div>
<p className="font-micro text-micro text-ash uppercase">TEMPORAL DENSITY</p>
<p className="font-ui-nav text-[14px] font-bold">120 FPS FLUX</p>
</div>
<div>
<p className="font-micro text-micro text-ash uppercase">CHROMA LIMITS</p>
<p className="font-ui-nav text-[14px] font-bold">LOG-C4 DYNAMO</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full h-[80vh] overflow-hidden">
<div className="absolute inset-0" data-alt="A macro close-up of a high-end film editing interface in a dark studio. The screen glows with neon color-grading waveforms in vibrant greens, reds, and blues against a deep black background. In the foreground, professional control knobs and a backlit mechanical keyboard are partially in focus, creating a professional, cinematic workspace atmosphere. The lighting is moody and clinical, typical of a prestige post-production house." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBS38q5RKhXsg2rCxK9mpwBMBQNaQGv0hKGEqcAB9mHd5Mg-v0qC7qDqiwQQqhYACuWEiV_QkzNbnLt_6fHnZfm88ck41oRhTQn9d-ucaEwAjPmdfr7piYS3uGg2lmkiYRRGXYvwlTLuU7ieL62TVVqcsSJQlISmdT8FQ53zVKOyHQGhesiIe_MUDC7pm4UxeBa30z0XT2oT10C74og8sPHezIEvw9M0Wkrj5Ib1gzYZ3GZX4hMnUMwPN8DnSUoELLYMzwuxp7je0hK')" }}>
<div className="absolute inset-0 bg-ink/20"></div>
</div>
<div className="absolute bottom-12 right-margin-desktop text-right hidden md:block">
<p className="font-micro text-micro uppercase tracking-[0.2em] text-paper">PHASE II: GRADING ANALYSIS</p>
</div>
</section>

<section className="bg-background text-paper py-gap-vertical-lg px-margin-mobile md:px-margin-desktop border-t border-ash/10">
<div className="max-w-screen-xl mx-auto">
<div className="flex flex-col md:flex-row gap-24 items-start">
<div className="w-full md:w-1/2">
<h2 className="font-heading-lg text-[48px] md:text-heading-lg uppercase mb-16 scramble-reveal">METRICS<br />OF MOTION</h2>
<div className="space-y-12">
<div className="border-b border-ash/30 pb-12">
<h3 className="font-subheading text-[20px] uppercase mb-4">LUMINANCE SHIFT ANALYSIS</h3>
<p className="font-body-md text-smoke max-w-md">
                                Manipulating the ST.2084 curve allowed for unprecedented control over highlights. We pushed the peaks to their breaking point to simulate the solarized quality of rare physical film stock.
                            </p>
</div>
<div className="border-b border-ash/30 pb-12">
<h3 className="font-subheading text-[20px] uppercase mb-4">COLOR SPACE PARAMETERS</h3>
<p className="font-body-md text-smoke max-w-md">
                                Utilizing Rec.2020 as our base, the project maintains chromatic integrity across wide-gamut displays, ensuring that the subtle shifts in mid-tone greys remain preserved.
                            </p>
</div>
</div>
</div>
<div className="w-full md:w-1/2 aspect-square md:aspect-auto md:h-[600px] bg-carbon p-12 relative group overflow-hidden flex items-center justify-center border border-ash/20">
<div className="text-center z-10 transition-transform duration-700 group-hover:scale-110">
<span className="font-display text-[120px] text-outline opacity-20">DATA</span>
<div className="absolute inset-0 flex items-center justify-center">
<p className="font-ui-nav text-ui-nav uppercase tracking-[0.5em] text-primary">VECTOR SCOPE 04</p>
</div>
</div>

<div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-paper via-transparent to-transparent"></div>
</div>
</div>
</div>
</section>

<section className="bg-paper text-ink py-gap-vertical-lg px-margin-mobile md:px-margin-desktop overflow-hidden border-t border-ash/10">
<div className="max-w-screen-xl mx-auto flex flex-col items-center text-center">
<p className="font-micro text-micro uppercase tracking-[0.5em] text-ash mb-8">NEXT SEQUENCE</p>
<a className="group inline-flex flex-col items-center" href="">
<span className="font-display text-[64px] md:text-[180px] uppercase leading-none transition-all duration-700 group-hover:tracking-widest">NEO NOIR</span>
<div className="mt-8 transform transition-transform duration-500 group-hover:translate-x-4">
<span className="material-symbols-outlined text-[48px] font-light">arrow_forward_ios</span>
</div>
</a>
</div>
</section>

<footer className="bg-background text-primary border-t border-ash px-margin-mobile md:px-margin-desktop pt-gap-vertical-md pb-12 w-full relative">
<div className="flex flex-col items-center w-full">
<h2 className="font-hero text-[120px] md:text-hero text-primary opacity-10 leading-none mb-12">MU</h2>
<div className="flex flex-wrap justify-center gap-8 md:gap-24 mb-16">
<a className="font-ui-nav text-ui-nav uppercase tracking-[0.2em] text-smoke hover:text-primary transition-colors duration-500" href="">INSTAGRAM</a>
<a className="font-ui-nav text-ui-nav uppercase tracking-[0.2em] text-smoke hover:text-primary transition-colors duration-500" href="">LINKEDIN</a>
<a className="font-ui-nav text-ui-nav uppercase tracking-[0.2em] text-smoke hover:text-primary transition-colors duration-500" href="">EMAIL</a>
</div>
<p className="font-micro text-[10px] tracking-[0.2em] text-ash uppercase">
                ©2024 MU ARCHITECTURE. ALL RIGHTS RESERVED.
            </p>
</div>
</footer>
            <ScrollToTop />
        </div>
    );
}
