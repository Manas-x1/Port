import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollToTop from '../components/ScrollToTop';

export default function SynthesizedEchoesDetail() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-full text-on-surface"
        >
            <motion.section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>

<div className="absolute inset-0 z-0">
<div className="w-full h-full bg-cover bg-center bg-no-repeat scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDqnS1VRSP8lzkMmBMrpNsUi9P7ReFjbFUkfxe1Yo4oYaiAfYKV7ZD2FXgnmWUFEWUWFeo4bLUz1FVG28v9Pif3Si7KAshWw_-RA3LqFoAbcM8Iag_e44rrwxXT2EFv-XwSPriqq85_pYfWkGTqGrOLr6mgeO2YuNPb4-gthd1-hbzuOYIpHydZqeiQKVpJL5Um-h7iw4lpYbM3GMkkENBYNi0SpV0vty-iQjjt48Kd4a2lT-9tI2qBjmW6GlHFUFEfzrurOktThLtz')" }}>
<div className="absolute inset-0 bg-black/40"></div>
</div>
</div>

<div className="relative z-10 text-center px-6">
<h1 className="font-display-mobile text-display-mobile text-white leading-none tracking-tighter reveal-text">
                SYNTHESIZED<br />ECHOS
            </h1>
<p className="font-ui-nav text-ui-nav uppercase tracking-[0.2em] text-white/70 mt-6 reveal-text" style={{ animationDelay: "0.2s" }}>
                AI CONTENT CREATION | 2024
            </p>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 scroll-indicator"></div>
</motion.section>

<motion.section className="bg-paper text-ink py-gap-vertical-lg px-margin-mobile flex flex-col items-start" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
<div className="w-full max-w-lg mx-auto">
<span className="font-micro text-micro uppercase tracking-[0.3em] text-ash mb-4 block">01 / Concept</span>
<h2 className="font-subheading text-subheading mb-12 leading-tight">NEURAL SYNTHESIS</h2>
<div className="space-y-6">
<p className="font-body-lg text-body-lg leading-relaxed text-justify">
                    SYNTHESIZED ECHOS explores the intersection of neural networks and atmospheric noise. By leveraging generative algorithms, we transformed raw digital interference into a rhythmic visual assembly that resonates with high emotional frequency.
                </p>
<p className="font-body-md text-body-md text-ash leading-relaxed">
                    The project serves as a meditation on the ghost in the machine—the unpredictable artifacts that arise when silicon attempts to mimic organic sentiment. Each frame is a unique derivation of latent space data points.
                </p>
</div>
</div>
</motion.section>

<motion.section className="bg-black text-on-surface py-gap-vertical-lg px-margin-mobile" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
<div className="w-full max-w-lg mx-auto mb-16">
<span className="font-micro text-micro uppercase tracking-[0.3em] text-ash mb-4 block">02 / Process</span>
<h2 className="font-subheading text-subheading mb-12 text-white">ATMOSPHERIC NOISE</h2>
<p className="font-body-md text-body-md text-smoke leading-relaxed">
                The technical process involved multi-layered procedural generation. We started with low-frequency radio waves, feeding the spectral data into a custom-built GAN (Generative Adversarial Network) trained on cinematic textural libraries.
            </p>
</div>

<div className="w-full aspect-[4/5] bg-carbon border border-ash/20 relative group overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-surface-container-lowest to-surface-bright opacity-50"></div>


<div className="absolute bottom-6 left-6">
<span className="font-micro text-micro uppercase tracking-widest text-ash">Fig. 2.4 — Spectral Mapping</span>
</div>
</div>
<div className="w-full max-w-lg mx-auto mt-16">
<p className="font-body-md text-body-md text-smoke leading-relaxed italic border-l border-ash/40 pl-6">
                "The result is a visual echo of something that never existed in the physical world, yet feels hauntingly familiar."
            </p>
</div>
</motion.section>

<motion.section className="bg-black py-gap-vertical-md border-t border-ash/10" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
<Link className="group block px-margin-mobile" to="/neural-topology">
<div className="flex flex-col items-center text-center">
<span className="font-micro text-micro uppercase tracking-[0.4em] text-ash mb-8">Up Next</span>
<div className="flex items-center justify-center gap-4 group-hover:gap-8 transition-all duration-700">
<h3 className="font-subheading text-subheading md:text-[64px] text-white uppercase tracking-tighter">NEURAL TOPOLOGY</h3>
<span className="material-symbols-outlined text-[32px] md:text-[48px] text-white">arrow_forward</span>
</div>
</div>
</Link>
</motion.section>

<footer className="flex flex-col items-center pt-[120px] pb-8 px-6 w-full border-t border-ash bg-background">

<div className="w-full max-w-[1440px] flex flex-col md:flex-row justify-between items-center gap-8 text-smoke font-body-md text-body-md">
<div className="flex gap-8 order-2 md:order-1">
<a className="hover:text-on-surface transition-colors" href="">Instagram</a>
<a className="hover:text-on-surface transition-colors" href="">LinkedIn</a>
<a className="hover:text-on-surface transition-colors" href="">Email</a>
<a className="hover:text-on-surface transition-colors" href="">Archive</a>
</div>
<div className="order-1 md:order-2 opacity-50 tracking-widest uppercase text-[10px]">
                © 2024 MANAS UPADHYAY
            </div>
</div>
</footer>
            <ScrollToTop />
        </motion.div>
    );
}
