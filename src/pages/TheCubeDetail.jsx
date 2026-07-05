import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollToTop from '../components/ScrollToTop';

export default function TheCubeDetail() {
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
            <motion.section className="relative h-screen w-full bg-ink flex flex-col justify-center items-center overflow-hidden" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
<div className="absolute inset-0 z-0 scale-110">
<img className="w-full h-full object-cover opacity-80 mix-blend-screen" data-alt="A cinematic, low-key lighting architectural rendering of a massive, multi-layered obsidian and glass cube suspended in a dark, brutalist museum space. The cube exhibits intricate light refraction and sharp geometric reflections against deep charcoal concrete walls. The mood is mysterious and monumentally sculptural, using a palette of deep blacks, subtle grays, and piercing white highlights." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsTVg5505UUDy9nbo5TkC7UCssDF5e3T5I7OQBqCiN4gTzMJ1z0DIN5BS5E2m32q6IlonATddiNdG0gen-0IOkspqNYG8nzdX018Cryoc0L3e2aXmad-4GNmSwOa5meqFH9slje3VNcQxI1sHNWK3fmycRIXoHovDnNebdR2DI74STHOY2q602zUb9yaaPZraF-NpsJ63JPmboj9viusOKc_tjpUWssDy7IqGjwR2jSwmBXCKreVJEWaR56SQwcBJZt3zNZZhVDHez" />
</div>
<div className="relative z-10 text-center px-margin-mobile">
<h1 className="font-display-mobile text-display-mobile text-primary tracking-tighter uppercase mb-4 md:font-display md:text-display">
                THE CUBE
            </h1>
<div className="w-px h-24 bg-primary mx-auto my-12 opacity-30"></div>
</div>
<div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
<span className="font-ui-nav text-[9px] uppercase tracking-[0.3em] text-primary opacity-60">SCROLL TO EXPLORE</span>
<span className="material-symbols-outlined text-primary animate-bounce text-[14px]" data-icon="expand_more">expand_more</span>
</div>
</motion.section>

<motion.section className="bg-paper py-gap-vertical-lg px-margin-mobile md:px-margin-desktop overflow-hidden" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
<div className="max-w-4xl mx-auto">
<div className="mb-12">
<span className="font-micro text-micro uppercase text-ink/40 tracking-[0.2em] block mb-4">VOLUME 01</span>
<h2 className="font-subheading text-subheading text-ink uppercase tracking-tight mb-8">STRUCTURAL GEOMETRY</h2>
<div className="h-1 w-12 bg-ink mb-12"></div>
</div>
<p className="font-body-lg text-body-lg text-ink/80 max-w-2xl leading-relaxed">
                THE CUBE explores the tension between mathematical precision and sculptural fluidity. Utilizing refractive glass-shader developments, we simulated a multi-layered obsidian volume that reacts to shifting light indices within a virtual museum environment.
            </p>
<div className="mt-24 grid grid-cols-2 gap-4">
<div className="h-[1px] bg-ink/10 col-span-2"></div>
<div className="py-4">
<span className="font-micro text-micro uppercase text-ink/50">COORDINATES</span>
<p className="font-ui-nav text-ui-nav text-ink mt-1">45.5017° N, 73.5673° W</p>
</div>
<div className="py-4">
<span className="font-micro text-micro uppercase text-ink/50">MATERIALITY</span>
<p className="font-ui-nav text-ui-nav text-ink mt-1">REFRACTIVE OBSIDIAN</p>
</div>
</div>
</div>
</motion.section>

<motion.section className="relative h-[80vh] w-full bg-ink flex items-center justify-center overflow-hidden" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
<div className="absolute inset-0">
<div className="absolute inset-0 bg-gradient-to-b from-paper via-transparent to-ink h-40 z-10"></div>
<img className="w-full h-full object-cover grayscale opacity-60" data-alt="A close-up architectural detail shot focusing on the razor-sharp edges and inner crystalline structures of a dark geometric installation. Volumetric light rays pierce through layers of smoked glass, creating a high-contrast play of shadow and brilliance in a minimalist achromatic setting. The aesthetic is hard-minimalist with extreme textural clarity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsTVg5505UUDy9nbo5TkC7UCssDF5e3T5I7OQBqCiN4gTzMJ1z0DIN5BS5E2m32q6IlonATddiNdG0gen-0IOkspqNYG8nzdX018Cryoc0L3e2aXmad-4GNmSwOa5meqFH9slje3VNcQxI1sHNWK3fmycRIXoHovDnNebdR2DI74STHOY2q602zUb9yaaPZraF-NpsJ63JPmboj9viusOKc_tjpUWssDy7IqGjwR2jSwmBXCKreVJEWaR56SQwcBJZt3zNZZhVDHez" />
<div className="absolute inset-0 bg-black/40"></div>
</div>
<div className="relative z-20 text-center">
<span className="material-symbols-outlined text-primary text-[64px] font-light opacity-40" data-icon="filter_center_focus">filter_center_focus</span>
</div>
</motion.section>

<motion.section className="bg-paper py-gap-vertical-lg px-margin-mobile md:px-margin-desktop" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
<div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-gutter">
<div className="md:w-1/3">
<h2 className="font-subheading text-subheading text-ink uppercase tracking-tight sticky top-32">VIRTUAL SPACES</h2>
</div>
<div className="md:w-2/3">
<p className="font-body-lg text-body-lg text-ink/80 leading-relaxed mb-12">
                    The environment is calculated as a sensory void—a volumetric art gallery where shadow and light are the only structural architects. Every interaction is designed to evoke a sense of whisper-weight monumentality.
                </p>
<p className="font-body-md text-body-md text-ink/60 leading-relaxed">
                    By removing traditional physical constraints, the project investigates how digital materiality can trigger emotional responses usually reserved for tactile stone or cold steel. The void serves not as empty space, but as a silent participant in the sculptural dialogue.
                </p>
<div className="mt-20 border border-ash/20 p-8 flex justify-between items-center">
<span className="font-ui-nav text-ui-nav text-ink uppercase">DOWNLOAD BLUEPRINTS</span>
<span className="material-symbols-outlined text-ink" data-icon="north_east">north_east</span>
</div>
</div>
</div>
</motion.section>

<footer className="bg-background py-gap-vertical-lg px-margin-mobile relative overflow-hidden">
<div className="max-w-4xl mx-auto text-center md:text-left">
<span className="font-micro text-micro uppercase text-smoke tracking-[0.4em] mb-6 block">UP NEXT</span>
<Link className="group relative inline-block" to="/synthesized-echoes">
<div className="flex items-center gap-8 overflow-hidden">
<h3 className="font-display-mobile text-display-mobile text-primary tracking-tighter uppercase transition-transform duration-700 group-hover:-translate-x-4">
                        SYNTHESIZED ECHOS
                    </h3>
<span className="material-symbols-outlined text-primary text-[48px] opacity-0 -translate-x-12 transition-all duration-700 group-hover:opacity-100 group-hover:translate-x-0" data-icon="arrow_forward">arrow_forward</span>
</div>
<div className="w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left mt-2"></div>
</Link>
</div>
<div className="mt-gap-vertical-md border-t border-ash pt-12 flex flex-col items-center gap-12">
<div className="flex gap-12 font-ui-nav text-ui-nav uppercase tracking-[0.2em] text-smoke">
<a className="hover:text-primary transition-colors duration-500" href="">INSTAGRAM</a>
<a className="hover:text-primary transition-colors duration-500" href="">LINKEDIN</a>
<a className="hover:text-primary transition-colors duration-500" href="">EMAIL</a>
</div>

<p className="font-micro text-micro text-smoke opacity-60 tracking-[0.1em]">©2024 MU ARCHITECTURE. ALL RIGHTS RESERVED.</p>
</div>
</footer>
            <ScrollToTop />
        </motion.div>
    );
}
