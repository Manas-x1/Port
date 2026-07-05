import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollToTop from '../components/ScrollToTop';

export default function LatentSpacesDetail() {
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
            <motion.section className="relative h-screen w-full flex flex-col justify-end items-center overflow-hidden" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
<div className="absolute inset-0 z-0">
<img alt="Latent Spaces Hero" className="w-full h-full object-cover brightness-75" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArvjDeZfjoSOg287hEzFBsQqNVWwpT3kX0d1xU6xfhcL_aBOGU38X1nAZC_ye8EWyqQ-KOhGb2TsSx7Or7VirSm357Em-khBrZM7K7iZKLPHG2X0obkgmXqg5QvRL41jOXXKAwqY32ANdaBaY5uRAl9z_UAx0b-_-J6WOwxFglbTZWSNqQUuOw8XaYfTNHtfxuTP8qmAspYiECEqXnyPNwXpQ5JYkf9GZ51LH3nHN2mq3beE9tIWyafPpnidV9uFdGLgZO3jXbd-2d" />
<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
</div>
<div className="relative z-10 w-full px-margin-mobile pb-24 text-center fade-in">
<h1 className="font-display text-display-mobile md:text-display hero-title uppercase leading-none tracking-tighter mb-8">
                    LATENT SPACES
                </h1>
<div className="flex flex-col items-center gap-4 opacity-60">
<span className="font-ui-nav text-ui-nav uppercase tracking-[0.3em]">Scroll to Explore</span>
<div className="w-px h-16 bg-gradient-to-b from-primary to-transparent animate-pulse"></div>
</div>
</div>
</motion.section>

<motion.section className="w-full px-margin-mobile md:px-margin-desktop pt-gap-vertical-md pb-gap-vertical-md" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-ash pt-12">
<div className="flex flex-col gap-2">
<span className="font-micro text-micro text-smoke uppercase tracking-widest">Category</span>
<span className="font-subheading text-primary uppercase">AI Content Creation</span>
</div>
<div className="flex flex-col gap-2">
<span className="font-micro text-micro text-smoke uppercase tracking-widest">Timeline</span>
<span className="font-subheading text-primary uppercase">2024</span>
</div>
<div className="flex flex-col gap-2">
<span className="font-micro text-micro text-smoke uppercase tracking-widest">Method</span>
<span className="font-subheading text-primary uppercase">Latent Analysis</span>
</div>
</div>
</motion.section>

<motion.section className="bg-paper text-ink w-full px-margin-mobile md:px-margin-desktop py-gap-vertical-lg" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
<div className="max-w-4xl mx-auto flex flex-col gap-12">
<h2 className="font-heading-lg text-4xl md:text-heading-lg uppercase leading-none tracking-tight">
                    VECTOR INTERPOLATION
                </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<p className="font-body-lg text-body-lg leading-relaxed">
                        The exploration of imaginary terrains within neural networks reveals a world where geological formations are dictated by latent weight distributions. Unlike physical erosions, these landscapes emerge through the optimization of aesthetic loss functions and multidimensional manifold mapping.
                    </p>
<p className="font-body-md text-body-md opacity-80 leading-relaxed italic border-l border-ink/20 pl-6">
                        "In the space between data points, we find architectures that have no precedent in the physical realm—structures that exist only as mathematical probabilities."
                    </p>
</div>
</div>
</motion.section>

<motion.section className="w-full h-[80vh] relative overflow-hidden bg-carbon" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
<div className="absolute inset-0 opacity-40">
<div className="w-full h-full bg-cover bg-center grayscale mix-blend-luminosity" data-alt="A macro cinematic close-up of complex neural network textures, featuring flowing iridescent obsidian surfaces and glowing fiber-optic like filaments. The lighting is high-contrast, moody, and achromatic with subtle amber light rays piercing through dark smoke. The aesthetic is hard minimalist and technologically advanced." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAU5_SSZjAuPXMFZ0SWI18e8_qKcyKYWVFfLCegJ8Y9dA5KQalgI7vMnWUCPgnEh2zARaI2odZy9rqzocBOebFTcKHpE9M6R7YCYDMXxmUbqm4NwCdMx-mG0QgCw9yBKqkLyRsBC1H-AYdQKJWR8jvTjrO4FnTbDx7znbBgJ8kzWV_cO-c9y2c8E2Qpear66W_YNre0WKWyVrUXvjBBmW_rfveEqLgZ4E6o-hoIcV1Ss1905ka-Izi0cgpFsEamI3y6ISvmARuK1Zr5')" }}></div>
</div>
<div className="absolute inset-0 flex items-center justify-center p-margin-mobile">
<div className="max-w-xl text-center">
<span className="font-ui-nav text-ui-nav uppercase tracking-[0.5em] text-smoke block mb-6">Internal Topology</span>
<h3 className="font-subheading text-subheading uppercase text-primary">Mapping the unmappable through volumetric synthesis and weight-based topography.</h3>
</div>
</div>
</motion.section>

<motion.section className="w-full px-margin-mobile md:px-margin-desktop py-gap-vertical-lg" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<div className="border border-ash p-8 flex flex-col gap-16 group hover:bg-carbon transition-colors duration-500">
<span className="font-heading-lg text-4xl text-smoke/30">01</span>
<div>
<h4 className="font-subheading text-subheading uppercase mb-4">Latent Geometry</h4>
<p className="font-body-md text-smoke">Defining the structural boundaries of the multidimensional space where points are mapped as physical assets.</p>
</div>
</div>
<div className="border border-ash p-8 flex flex-col gap-16 group hover:bg-carbon transition-colors duration-500">
<span className="font-heading-lg text-4xl text-smoke/30">02</span>
<div>
<h4 className="font-subheading text-subheading uppercase mb-4">Neural Topology</h4>
<p className="font-body-md text-smoke">The mesh resolution is determined by the complexity of the neural pathways and density of data clusters.</p>
</div>
</div>
<div className="border border-ash p-8 flex flex-col gap-16 group hover:bg-carbon transition-colors duration-500">
<span className="font-heading-lg text-4xl text-smoke/30">03</span>
<div>
<h4 className="font-subheading text-subheading uppercase mb-4">Volumetric Synthesis</h4>
<p className="font-body-md text-smoke">Final rendering phase where light interacts with the non-Euclidean surfaces generated by the model.</p>
</div>
</div>
</div>
</motion.section>

<motion.section className="w-full border-t border-ash py-gap-vertical-md px-margin-mobile md:px-margin-desktop" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
<Link className="group flex flex-col items-center gap-8 text-center transition-all duration-700 hover:opacity-60" to="/chrono-shift">
<span className="font-micro text-micro uppercase tracking-[0.4em] text-smoke">Up Next</span>
<div className="flex items-center gap-6">
<h2 className="font-heading-lg text-4xl md:text-heading-lg uppercase leading-none tracking-tight">CHRONO SHIFT</h2>
<span className="material-symbols-outlined text-4xl transform group-hover:translate-x-4 transition-transform duration-500">arrow_forward</span>
</div>
</Link>
</motion.section>


<footer className="w-full relative mt-gap-vertical-lg border-t border-ash pt-gap-vertical-md pb-12 bg-background">
<div className="px-margin-mobile md:px-margin-desktop flex flex-col items-center gap-16">

<div className="flex flex-col md:flex-row justify-between w-full items-center gap-12">
<div className="flex gap-12 font-ui-nav text-ui-nav uppercase tracking-[0.2em]">
<a className="text-smoke hover:text-primary transition-colors duration-500" href="">INSTAGRAM</a>
<a className="text-smoke hover:text-primary transition-colors duration-500" href="">LINKEDIN</a>
<a className="text-smoke hover:text-primary transition-colors duration-500" href="">EMAIL</a>
</div>
<div className="font-ui-nav text-ui-nav uppercase tracking-[0.1em] text-smoke/50">
                    ©2024 MU ARCHITECTURE. ALL RIGHTS RESERVED.
                </div>
</div>
</div>
</footer>
            <ScrollToTop />
        </motion.div>
    );
}
