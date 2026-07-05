import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';

export default function IdentityDetail() {
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
            <section className="relative h-screen w-full bg-ink-black flex flex-col items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0 opacity-80 scale-110">
<img alt="Identity Badge 3D Render" className="w-full h-full object-cover grayscale brightness-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVjeTyYjlb4HcBckXJ7Lwt5pvhCe4Y7IL8slB1SUO9UqM6T2p-4l12Smz3QtssJtZV5dK7LLM5JLbahLPfvXuV0_FeJLNMN3Aq1GrFeY9pFN73aYzFT2ZUDiKLaVamruul0X6WQQuqW7Sn28v6nQ28dJHLk6IB002WlO1qd5QDNyd_NM2bqVYoL3Bx5wJkl3kUp7RSqf_EmpssiXC1j3DhWqGJ6kvWDMqBeaSSFHJT4Wm4oIq_Q26kIMTtmerZavuat5R5eoCU75H9" />
</div>

<div className="relative z-10 text-center">
<h1 className="font-headline-xl text-headline-xl text-paper-white uppercase tracking-[-0.03em] md:text-headline-xl text-headline-xl-mobile">
                    IDENTITY
                </h1>
</div>

<div className="absolute bottom-12 flex flex-col items-center gap-2 animate-bounce">
<div className="w-10 h-10 border border-paper-white/20 rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-paper-white text-[20px]">expand_more</span>
</div>
</div>
</section>

<section className="bg-paper-white py-section-v px-element-lg">
<div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter">
<div className="md:col-span-5">
<h2 className="font-headline-lg text-headline-lg text-ink-black uppercase leading-tight md:text-headline-lg text-headline-xl-mobile">
                        BRAND<br />ARCHITECTURE
                    </h2>
</div>
<div className="md:col-start-7 md:col-span-6 flex flex-col justify-end">
<p className="font-body-lg text-body-lg text-graphite max-w-xl">
                        Our approach to identity is defined by a whisper-weight monumentality. We explore the tension where physical form meets digital soul, creating artifacts that feel timeless yet born of the machine. The geometry is reduced to its absolute essence, allowing the materiality to speak through calculated reflections and procedural depth.
                    </p>
<div className="mt-stack-md w-24 h-[1px] bg-ink-black"></div>
</div>
</div>
</section>

<section className="bg-paper-white pb-section-v px-element-lg">
<div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-stack-md">

<div className="aspect-[4/5] bg-surface-container-low overflow-hidden group">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A macro studio photography shot focused on the metallic edge of a black badge. The lighting is sharp, creating a high-contrast rim light that reveals a brushed chrome texture. The aesthetic is extremely minimalist and luxury-oriented, with deep shadows and surgical precision in every reflection. The color palette is strictly achromatic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpLTaw7hp7OSLx1OKnZOAGQvJhMWnw3uPqEjbsSfr9nT2nMKaEMb_09KZucyWEMhR2LxsodN_endP2qgJymtKdSO6x9jF7h5M7yI7mwD6Rrq12eLKPQRI1wFI3xQeBNPcu3dtdgA51_eKBTVpezaP7cEAHpEksKABj7bzXurp-tTd0zHDGyI3_tOYdHHCEDYe7T93p2warCfSjSPdENphnsFQujm9kl7sbYNKgBTFXCMjdJ3O8eM2PbvbE7Cs362Tfx1DfEVk1LlwF" />
<div className="p-micro">
<span className="font-label-sm text-label-sm text-smoke uppercase tracking-widest">Detail 01 / Chrome Edge</span>
</div>
</div>

<div className="aspect-[4/5] bg-surface-container-low overflow-hidden group mt-stack-xl md:mt-0">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A clean, minimalist typographic layout on a matte black surface. Elegant white sans-serif text 'DEVOPS 2026' is embossed with a subtle 3D depth. The lighting is soft and directional, highlighting the refined edges of the letterforms. The background is a flawless, dark material with no distracting elements. Professional fashion editorial style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDnq2-ayC37WIjKa6cqQxpVpJwV9acVLtICtrNOqinQ_OWqjLS7LhB1zT07RPUjBD7aqqmBPQ2pNvh6RJVy49rQOrsVyxWTY8obCtstaKKY7IJSlNEUoWvpvgk-n-W873tPu679nUlH8QlAuYNa9yNfcZ66MqsmDzB3cItmXCsLzj6AYgkWC2JPGFzyvG5YsJBM0FjAwDoY1T57e-ilWk-Nk9LlKtAwI8q7mELQARijS5HW4ijO2gKGrgd4inicTuyzS2KUIygyJUT" />
<div className="p-micro">
<span className="font-label-sm text-label-sm text-smoke uppercase tracking-widest">Detail 02 / Typographic Precision</span>
</div>
</div>
</div>
</section>

<section className="bg-paper-white border-t border-pewter py-section-v px-element-lg">
<div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter">
<div className="md:col-span-8">
<div className="flex items-center gap-4 mb-stack-sm">
<span className="w-2 h-2 bg-ink-black rounded-full"></span>
<span className="font-label-sm text-label-sm text-ink-black uppercase tracking-[0.2em]">Technical Specification</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-ink-black uppercase leading-[0.9] mb-stack-md md:text-headline-lg text-headline-xl-mobile">
                        PROCEDURAL<br />METALS
                    </h2>
<p className="font-body-lg text-body-lg text-graphite max-w-2xl">
                        The technical execution of the IDENTITY badge utilizes dual-overlapping noise functions to mimic the erratic yet organic shifting of light on chrome. Every surface is calculated to respond to a virtual environmental map, ensuring that the 'Identity' is never static, but constantly reacting to its surroundings.
                    </p>
</div>
<div className="md:col-span-4 flex items-center justify-center">
<div className="w-full aspect-square border border-pewter p-8 flex flex-col justify-between">
<span className="font-label-sm text-label-sm text-smoke">001 / LIGHTING MAP</span>
<div className="w-full h-[1px] bg-pewter"></div>
<span className="font-label-sm text-label-sm text-smoke">002 / NOISE SEED: 450X</span>
<div className="w-full h-[1px] bg-pewter"></div>
<span className="font-label-sm text-label-sm text-smoke">003 / REFLECTION COEFF: 0.98</span>
</div>
</div>
</div>
</section>

<section className="bg-ink-black py-section-v px-element-lg overflow-hidden group cursor-pointer transition-colors duration-500 hover:bg-graphite">
<div className="max-w-[1440px] mx-auto flex flex-col items-center">
<span className="font-label-sm text-label-sm text-smoke uppercase tracking-[0.3em] mb-stack-sm">UP NEXT</span>
<Link className="flex items-center gap-6 group" to="/fluid-waves">
<h3 className="font-headline-xl text-headline-xl text-paper-white uppercase md:text-headline-xl text-headline-xl-mobile transition-all duration-700 group-hover:tracking-wider">
                        FLUID WAVES
                    </h3>
<span className="material-symbols-outlined text-paper-white text-[80px] font-light transition-transform duration-700 group-hover:translate-x-8">arrow_forward</span>
</Link>
</div>
</section>


<footer className="flex flex-col items-center pt-section-v pb-component-int px-element-lg w-full bg-background border-t border-ash">
<div className="font-hero text-hero-mobile md:text-hero uppercase tracking-[-0.04em] text-on-surface leading-none mb-stack-xl">MANAS</div>
<div className="w-full max-w-[1440px] flex flex-col md:flex-row justify-between items-center gap-stack-md">
<div className="font-body-md text-body-md text-smoke">
                © 2024 MANAS UPADHYAY
            </div>
<div className="flex gap-stack-md">
<a className="font-body-md text-body-md text-smoke hover:text-on-surface transition-colors duration-500" href="">Instagram</a>
<a className="font-body-md text-body-md text-smoke hover:text-on-surface transition-colors duration-500" href="">LinkedIn</a>
<a className="font-body-md text-body-md text-smoke hover:text-on-surface transition-colors duration-500" href="">Email</a>
<a className="font-body-md text-body-md text-smoke hover:text-on-surface transition-colors duration-500" href="">Archive</a>
</div>
</div>
</footer>
            <ScrollToTop />
        </div>
    );
}
