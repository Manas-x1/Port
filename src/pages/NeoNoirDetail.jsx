import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';

export default function NeoNoirDetail() {
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
            <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Cinematic night street view" className="w-full h-full object-cover grayscale brightness-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDk3miTfxnydxR2dMXs0T-OyToph2PsxblkhqfSzuz9sheq_4XmBYrxPiPHLIOX5LrkwdEQl9uYvEPa0jJ_mkQnUvQu3_GaJZbhi4VZy1c__J3wTvrZ_nB33tECpvGviiSfoYd5NuHY1m-imCzG83rQULiYLsVnnp-kiGWPBBw9fsdlK9HBnyDxv9X8OV7dSz5us2ytoM8wRWap0x9DVgG2kq6RPiFOAC7irqsgRVdjv9NfRLNnP_ZGniEQYMagGQdQFmj-8HmmbhCt" />
</div>
<div className="relative z-10 text-center px-margin-mobile">
<h1 className="font-display-mobile text-display-mobile text-primary mb-2 scramble-effect">NEO NOIR</h1>
<p className="font-ui-nav text-ui-nav uppercase kerning-loose text-primary/80">A CINEMATOGRAPHIC STUDY</p>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
<span className="material-symbols-outlined text-primary opacity-40">expand_more</span>
</div>
</section>

<section className="bg-paper text-ink py-gap-vertical-lg px-margin-mobile">
<div className="max-w-screen-xl mx-auto">
<div className="mb-12">
<span className="font-micro text-micro uppercase tracking-[0.3em] opacity-40">SECTION 01 / VISUALS</span>
<h2 className="font-subheading text-[45px] leading-tight text-ink mt-4">LOW-KEY LIGHTING</h2>
</div>
<div className="grid grid-cols-1 gap-12">
<div className="max-w-md">
<p className="font-body-md text-body-md text-ink/70 leading-relaxed">
                        The use of deep shadows, high-contrast urban textures, and wet asphalt reflections creates a sense of 'whisper-weight monumentality' through shadow. Our objective was to isolate light as a structural element rather than a simple illumination source.
                    </p>
</div>

<div className="border-t border-ash/20 pt-8 grid grid-cols-3 gap-4">
<div>
<span className="font-micro text-micro uppercase opacity-40 block mb-1">RESOLUTION</span>
<span className="font-ui-nav text-ui-nav font-medium">8K RAW</span>
</div>
<div>
<span className="font-micro text-micro uppercase opacity-40 block mb-1">TIMELINE</span>
<span className="font-ui-nav text-ui-nav font-medium">2024</span>
</div>
<div>
<span className="font-micro text-micro uppercase opacity-40 block mb-1">METHOD</span>
<span className="font-ui-nav text-ui-nav font-medium">LOW-KEY</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-ink py-gap-vertical-md overflow-hidden">
<div className="w-full relative px-4">
<div className="aspect-[4/3] w-full overflow-hidden mb-12">
<img alt="Production stills and color grading process" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpU7ojiitV6wkpmjWlsHrGVKgjOTIhruN5ajUpu1TLjNjrYW5wF_DLJXhkhXvs6rWiqbMGvgbqJmSeE24cvrq-aQCHlL-0BjfRMrKS9Yyzv0xOco_ycGw0xstG_ivxZf_MVdtQxD5KRbxrORpkUv82mRLprFhAYm1y4FeDa2BAPI5HtGH7czNCmAWFxc9OTlVDUOWKKkKQtQo-vEik-YIdNODOkAC-yEaQluxb0h_I3NzO6etCsUu7b3amIWD5A0fpf9r5b7MKEi6X" />
</div>
<div className="px-margin-mobile max-w-md mx-auto text-center md:text-left">
<h3 className="font-subheading text-subheading text-primary mb-4">METRICS OF MOTION</h3>
<p className="font-body-md text-body-md text-smoke">
                    The color grading process focused on Kodak Portra 800 emulations, pulling warmth from highlights while maintaining absolute ink-black floor levels in the shadows.
                </p>
</div>
</div>
</section>

<section className="bg-background py-gap-vertical-lg px-margin-mobile border-t border-ash/10">
<div className="flex flex-col items-center text-center">
<span className="font-ui-nav text-ui-nav uppercase kerning-loose text-smoke mb-8">UP NEXT</span>
<Link className="group flex flex-col items-center gap-6" to="/about-me">
<h2 className="font-display-mobile text-[60px] text-primary group-hover:opacity-50 transition-all duration-500">ABOUT ME</h2>
<div className="w-20 h-20 rounded-full border border-ash flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-ink transition-all duration-500">
<span className="material-symbols-outlined text-[40px]" data-icon="arrow_forward">arrow_forward</span>
</div>
</Link>
</div>
</section>

<footer className="w-full relative mt-gap-vertical-lg flex flex-col items-center px-margin-mobile pb-12 pt-gap-vertical-md border-t border-ash dark:border-ash bg-background">
<div className="font-hero text-hero text-primary dark:text-primary opacity-10 leading-none mb-12 select-none">MU</div>
<nav className="flex gap-12 mb-12">
<a className="font-ui-nav text-ui-nav uppercase tracking-[0.2em] text-smoke hover:text-primary transition-colors duration-500" href="">INSTAGRAM</a>
<a className="font-ui-nav text-ui-nav uppercase tracking-[0.2em] text-smoke hover:text-primary transition-colors duration-500" href="">LINKEDIN</a>
<a className="font-ui-nav text-ui-nav uppercase tracking-[0.2em] text-smoke hover:text-primary transition-colors duration-500" href="">EMAIL</a>
</nav>
<p className="font-micro text-micro uppercase tracking-[0.2em] text-ash text-center">
            ©2024 MU ARCHITECTURE. ALL RIGHTS RESERVED.
        </p>
</footer>
            <ScrollToTop />
        </div>
    );
}
