import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollToTop from '../components/ScrollToTop';

export default function ChronoShiftDetail() {
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
            <motion.section className="relative h-screen w-full flex items-center justify-center overflow-hidden" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
<div className="absolute inset-0 z-0">
<img alt="CHRONO SHIFT Cinematic visual with film reels" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAElz6JdmEtgHQsWLlrdCf6wR2_SkWZ8HgOXa8suS652tEmHsm__nJrAckwTl6vPT5ZFyRsVlQW652-bBOq1Bt99UsmiUp0R42Z_KIsECX6ZBZyceeRZzfLrvJmRkFQBHUVMUSeFUu_i__HMskpQyMPRWlvGFdObG0y9FB4fB6xlg1Qlw3wO_Xz231GlJlEopJS6rQH2_3wU_ruS7Vuml2-pMfOdvWxlt42TvL1guYJsObQnFxj9RMhAQhYeVntwRt-XRm1_5R4wUxB" />
<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50"></div>
</div>
<div className="relative z-10 text-center px-6">
<h1 className="font-hero text-display-mobile md:text-hero text-primary uppercase leading-none tracking-tighter mix-blend-difference mb-8">
                    CHRONO<br />SHIFT
                </h1>
<p className="font-ui-nav text-ui-nav uppercase tracking-[0.3em] opacity-80 reveal-up">Visualizing Temporal Flux</p>
</div>
<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
<span className="font-micro text-micro uppercase tracking-widest">Scroll to explore</span>
<div className="w-[1px] h-12 bg-primary"></div>
</div>
</motion.section>

<motion.section className="bg-paper text-ink py-gap-vertical-lg px-margin-mobile md:px-margin-desktop min-h-screen flex flex-col justify-center" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
<div className="max-w-4xl mx-auto">
<span className="font-ui-nav text-ui-nav uppercase tracking-[0.2em] text-ash mb-8 block reveal-up">Module 01 / Edit</span>
<h2 className="font-display text-display-mobile md:text-display text-ink mb-16 leading-tight reveal-up">
                    TEMPORAL<br />ARCHITECTURE
                </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter reveal-up">
<p className="font-body-lg text-body-lg leading-relaxed text-ink opacity-90">
                        The complexity of temporal editing lies in the spaces between frames. Chrono Shift explores the rhythm of cinematic motion not just as a sequence of images, but as a structural discipline. Each cut is a calculated architectural decision, defining the volume of time.
                    </p>
<p className="font-body-lg text-body-lg leading-relaxed text-ink opacity-90">
                        Frame-by-frame precision allows us to manipulate the viewer's perception of duration. By shifting the temporal axis, we create an immersive environment where the past and future converge into a singular, high-fidelity experience of the now.
                    </p>
</div>
<div className="mt-24 border-t border-ash pt-12 flex justify-between items-baseline reveal-up">
<div className="flex flex-col gap-2">
<span className="font-micro text-micro uppercase tracking-widest text-ash">Visual Fidelity</span>
<span className="font-subheading text-subheading">8K RAW MASTER</span>
</div>
<div className="flex flex-col gap-2 text-right">
<span className="font-micro text-micro uppercase tracking-widest text-ash">Sample Rate</span>
<span className="font-subheading text-subheading">120 FPS FLUX</span>
</div>
</div>
</div>
</motion.section>

<motion.section className="w-full h-[80vh] relative overflow-hidden bg-background" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
<img alt="Black and white contact sheet style motion frames" className="w-full h-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA83Khg-ixcuWqjKqmBMO35mhTZDpc1S2p0_ZzU5GCqh9SGAl07KHNUBl5hEYYQ-FoyaRXII78dBBBtWmsNVSCnCfnPtcnZLHV3wE7DM8-QcZGC-Nd1oeg8ncE6fu-7PVIWYhM76Ey_IWTlNmcjq7Bp4i8qK4Z0xwrgay-cJ-40u6rTnKfCNjmQ43HuHcYHB4OT5YOioUbFpIY-YKfW00yd5XJUhjOqb6bpZ4YRmLP7lIU3JbfiaeTbRo_U0A3MPo5NrMvC55ZEGDG6" />
<div className="absolute inset-0 bg-background/20 backdrop-grayscale-[0.5]"></div>
<div className="absolute bottom-margin-mobile left-margin-mobile md:left-margin-desktop">
<span className="font-micro text-micro uppercase tracking-widest border border-ash px-3 py-1 text-primary">Contact Sheet Reference 012</span>
</div>
</motion.section>

<motion.section className="bg-background text-primary py-gap-vertical-lg px-margin-mobile md:px-margin-desktop" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-32">
<h2 className="font-display text-display-mobile md:text-heading-lg reveal-up">METRICS OF<br />MOTION</h2>
<div className="max-w-sm reveal-up">
<p className="font-body-md text-smoke">Quantifying the cinematic experience through rigorous data-driven analysis of frame transitions and luminance shift.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="border border-ash p-12 bg-carbon/50 reveal-up">
<span className="font-ui-nav text-ui-nav uppercase tracking-widest text-smoke mb-4 block">Process 04</span>
<h3 className="font-subheading text-subheading text-primary mb-8">FRAME TRANSITIONS</h3>
<div className="space-y-6">
<div className="flex justify-between items-end border-b border-ash pb-2">
<span className="font-micro text-micro uppercase text-smoke">Shutter Angle</span>
<span className="font-body-lg">180.0°</span>
</div>
<div className="flex justify-between items-end border-b border-ash pb-2">
<span className="font-micro text-micro uppercase text-smoke">Motion Blur Radius</span>
<span className="font-body-lg">12px / Interframe</span>
</div>
<div className="flex justify-between items-end border-b border-ash pb-2">
<span className="font-micro text-micro uppercase text-smoke">Opacity Delta</span>
<span className="font-body-lg">0.04ms</span>
</div>
</div>
</div>

<div className="border border-ash p-12 bg-carbon/50 reveal-up">
<span className="font-ui-nav text-ui-nav uppercase tracking-widest text-smoke mb-4 block">Process 05</span>
<h3 className="font-subheading text-subheading text-primary mb-8">TIMING METRICS</h3>
<div className="space-y-6">
<div className="flex justify-between items-end border-b border-ash pb-2">
<span className="font-micro text-micro uppercase text-smoke">Temporal Gain</span>
<span className="font-body-lg">+1.22% Shift</span>
</div>
<div className="flex justify-between items-end border-b border-ash pb-2">
<span className="font-micro text-micro uppercase text-smoke">Beat Frequency</span>
<span className="font-body-lg">24.5 Hz</span>
</div>
<div className="flex justify-between items-end border-b border-ash pb-2">
<span className="font-micro text-micro uppercase text-smoke">Rhythmic Variance</span>
<span className="font-body-lg">0.002σ</span>
</div>
</div>
</div>
</div>
</div>
</motion.section>

<motion.section className="bg-carbon py-gap-vertical-lg px-margin-mobile text-center" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
<span className="font-ui-nav text-ui-nav uppercase tracking-[0.4em] text-smoke mb-12 block">Continuing the Sequence</span>
<Link className="group relative inline-block" to="/spectral-cut">
<h2 className="font-display text-display-mobile md:text-display text-primary uppercase transition-all duration-700 group-hover:scale-105">
                    SPECTRAL CUT
                </h2>
<div className="mt-12 flex justify-center items-center gap-4 group-hover:gap-8 transition-all duration-500">
<span className="material-symbols-outlined text-4xl font-light">arrow_forward</span>
</div>
</Link>
</motion.section>


<footer className="w-full relative bg-background px-margin-mobile md:px-margin-desktop pb-12 pt-gap-vertical-md border-t border-ash flex flex-col items-center">
<div className="absolute top-12 left-1/2 -translate-x-1/2 pointer-events-none">

</div>
<div className="z-10 flex flex-col items-center">
<div className="flex gap-12 mb-16">
<a className="font-ui-nav text-ui-nav uppercase tracking-[0.2em] text-smoke hover:text-primary transition-colors duration-500" href="">INSTAGRAM</a>
<a className="font-ui-nav text-ui-nav uppercase tracking-[0.2em] text-smoke hover:text-primary transition-colors duration-500" href="">LINKEDIN</a>
<a className="font-ui-nav text-ui-nav uppercase tracking-[0.2em] text-smoke hover:text-primary transition-colors duration-500" href="">EMAIL</a>
</div>
<p className="font-ui-nav text-ui-nav uppercase tracking-[0.2em] text-smoke opacity-60">
                ©2024 MU ARCHITECTURE. ALL RIGHTS RESERVED.
            </p>
</div>
</footer>
            <ScrollToTop />
        </motion.div>
    );
}
