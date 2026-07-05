import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollToTop from '../components/ScrollToTop';

export default function NeuralTopologyDetail() {
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
<img className="w-full h-full object-cover opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFBOJLHnF68pUz841_f2s7OAuY4SbnYW4CCd8-PEv9yo-n9bALZYiYZ3Ola-U4fcN7Vwe9XQb4GpSdNnkp-GUgG-LhMpyU3BPWC6OW0ymUXHAEvy7z4iam2v0UP3lkIf-vUNA-AZV5MiGM7Ax4fjXI7lf5sdMfXKpdKKOIKNzqwCVnIZJUeMFAJRYAicY58FKg9gwLO3Ndz9ZolQfDSLTdKRceqISkSf1Vbfg9asxu5t9oWRNDdovAlWqtgmbUfOcLCIznwKi71m9S" />
<div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-80"></div>
</div>
<div className="relative z-10 flex flex-col items-center text-center px-margin-mobile">
<p className="font-micro text-micro uppercase tracking-[0.4em] text-primary opacity-50 mb-8 scramble-reveal">CASE STUDY 042</p>
<h1 className="font-hero text-display-mobile md:text-hero text-primary uppercase leading-none tracking-tighter scramble-reveal">
                    NEURAL<br />TOPOLOGY
                </h1>
</div>

<div className="absolute bottom-12 left-margin-mobile md:left-margin-desktop z-10 hidden md:block">
<p className="font-micro text-micro text-ash uppercase tracking-widest">Procedural Terrain Synthesis</p>
</div>
<div className="absolute bottom-12 right-margin-mobile md:right-margin-desktop z-10 hidden md:block text-right">
<p className="font-micro text-micro text-ash uppercase tracking-widest">©2024 MU_LABS_001</p>
</div>
</motion.section>

<div className="h-[120px] md:h-gap-vertical-lg bg-background"></div>

<motion.section className="bg-paper text-ink py-gap-vertical-md md:py-gap-vertical-lg" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
<div className="px-margin-mobile md:px-margin-desktop max-w-screen-xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
<div className="md:col-span-5 mb-12 md:mb-0">
<h2 className="font-display-mobile text-display-mobile md:text-heading-lg font-light leading-none mb-12 text-ink">
                            VECTOR<br />HEIGHTMAPS
                        </h2>
<div className="md:max-w-md">
<p className="font-body-lg text-body-lg text-neutral-700 leading-relaxed mb-6">
                                Neural Topology explores the procedural synthesis of imaginary terrains, where geological formations are dictated by latent weight distributions of neural networks.
                            </p>
<p className="font-body-lg text-body-lg text-neutral-700 leading-relaxed">
                                By mapping multi-dimensional data into topographic wireframes, we create a tangible visual language for the intangible architecture of AI decision-making. These meshes represent the "elevations" of probability within a generative model.
                            </p>
</div>
</div>
<div className="md:col-span-7 flex flex-col gap-12">
<div className="aspect-[4/5] md:aspect-[16/10] bg-surface-container overflow-hidden group">
<img className="w-full h-full object-cover grayscale transition-transform duration-[2s] ease-out group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGSwVXqhzTLDiwXtCD8Jp8po9SX8inQld85gzQVzI4CKjwZ5ssBR2gHtf-j6dGcBdzWcVfESa5e-5wgYrPjrktZcg51fE3aCYTnzNuqiPFAgt_b8MNgDRiz4SktpMaWTaSrRfTZZUkuHUMWcOpPCvGcWL36eQRPRg25x1w7iKoYUOMKyAzi7Wy-3yWeebBJptA_9763BBPxhGcynI1JabhqrfrMFhr1poK3-AAej9pOL6zAFrTI8ziZNnKTHkjl4lE1APPB6cG7E_8" />
</div>
<div className="grid grid-cols-2 gap-gutter">
<div className="h-1 bg-ink opacity-10"></div>
<div className="h-1 bg-ink opacity-10"></div>
</div>
</div>
</div>
</div>
</motion.section>

<motion.section className="bg-background text-primary py-gap-vertical-md md:py-gap-vertical-lg border-t border-ash" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
<div className="px-margin-mobile md:px-margin-desktop max-w-screen-xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-b border-ash pb-12 mb-24">
<h2 className="font-display-mobile text-display-mobile md:text-heading-lg font-light leading-none">
                        NETWORK<br />LAYERS
                    </h2>
<div className="flex flex-wrap gap-4">
<span className="px-6 py-2 border border-ash font-ui-nav text-ui-nav uppercase tracking-widest">Houdini FX</span>
<span className="px-6 py-2 border border-ash font-ui-nav text-ui-nav uppercase tracking-widest">Stable Diffusion API</span>
<span className="px-6 py-2 border border-ash font-ui-nav text-ui-nav uppercase tracking-widest">Custom Noise Shaders</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
<div>
<p className="font-micro text-micro text-ash uppercase tracking-[0.2em] mb-6">Process_01</p>
<h4 className="font-subheading text-subheading mb-4">Latent Geometry</h4>
<p className="font-body-md text-smoke opacity-80 leading-relaxed">Extracting 3D positional data from high-dimensional latent vectors using custom Python scripts within the Houdini environment.</p>
</div>
<div>
<p className="font-micro text-micro text-ash uppercase tracking-[0.2em] mb-6">Process_02</p>
<h4 className="font-subheading text-subheading mb-4">Procedural Meshing</h4>
<p className="font-body-md text-smoke opacity-80 leading-relaxed">Applying VEX-based noise modifiers to generate hyper-detailed topographic wireframes that respond dynamically to seed changes.</p>
</div>
<div>
<p className="font-micro text-micro text-ash uppercase tracking-[0.2em] mb-6">Process_03</p>
<h4 className="font-subheading text-subheading mb-4">Volumetric Light</h4>
<p className="font-body-md text-smoke opacity-80 leading-relaxed">Simulating organic light dispersal within the digital void to emphasize the tactile quality of the procedural mesh.</p>
</div>
</div>
</div>
</motion.section>

<motion.section className="bg-carbon group cursor-pointer py-32 transition-colors duration-700 hover:bg-background overflow-hidden relative" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
<div className="px-margin-mobile md:px-margin-desktop flex flex-col items-center justify-center text-center">
<p className="font-micro text-micro text-ash uppercase tracking-[0.5em] mb-8">NEXT CASE STUDY</p>
<div className="flex items-center gap-8">
<h3 className="font-heading-lg text-display-mobile md:text-heading-lg uppercase leading-none opacity-40 group-hover:opacity-100 transition-all duration-700 group-hover:tracking-wider">LATENT SPACES</h3>
<span className="material-symbols-outlined text-4xl md:text-6xl text-primary opacity-40 group-hover:translate-x-4 transition-all duration-700 group-hover:opacity-100">arrow_forward</span>
</div>
</div>
</motion.section>


<footer className="w-full relative mt-gap-vertical-lg bg-background dark:bg-background border-t border-ash dark:border-ash flex flex-col items-center px-margin-desktop pb-12 pt-gap-vertical-md">

<div className="flex flex-col md:flex-row justify-between w-full max-w-screen-xl gap-12 items-center md:items-start z-10">
<div className="text-center md:text-left">
<p className="font-ui-nav text-ui-nav uppercase tracking-[0.2em] text-primary mb-2">©2024 MU ARCHITECTURE.</p>
<p className="font-micro text-micro text-smoke uppercase tracking-widest">ALL RIGHTS RESERVED.</p>
</div>
<div className="flex gap-12 font-ui-nav text-ui-nav uppercase tracking-[0.2em]">
<a className="text-smoke dark:text-smoke hover:text-primary transition-colors duration-500" href="">INSTAGRAM</a>
<a className="text-smoke dark:text-smoke hover:text-primary transition-colors duration-500" href="">LINKEDIN</a>
<a className="text-smoke dark:text-smoke hover:text-primary transition-colors duration-500" href="">EMAIL</a>
</div>
</div>
<div className="mt-24 font-micro text-micro text-ash tracking-[0.5em] text-center">
            ARCHITECTURE_DESIGN_AI_LABS
        </div>
</footer>
            <ScrollToTop />
        </motion.div>
    );
}
