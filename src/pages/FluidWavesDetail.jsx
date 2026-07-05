import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';

export default function FluidWavesDetail() {
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
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">

<div className="absolute inset-0 z-0">
<div className="w-full h-full bg-cover bg-center opacity-60" data-alt="A highly cinematic macro photograph of thick obsidian liquid waves rippling in deep shadows. The lighting is dramatic and low-key, capturing crisp metallic reflections on the viscous black surface. The composition is abstract and focused on the rhythmic, organic curves of the liquid. The aesthetic is hard minimalist and prestige editorial, with an extreme contrast between the dark matter and sharp highlights." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD6GeW0yUvPwXjcy9g7oPdvBbvvqXFFQdDvzPgarY1CIu_WzVErxR6XeA9DjwmcTw9fxZOPirNUY_3IlqCljeQ8QfJ-sy6H55Juu6kt-ejyxQWe9KbF-XSEnAbYL5TmhU4XBBHh_0ywemv0B1vadRrJoCwdbVIRr9jZvBFY-v4qVEEzr8dYwbxroCufIO3kVALS6fJ1fshx7yk5a1f14QIhBCfx2B4xU0JJjsF2G4RWEUbmBAmGa7dXpEuydRU51bU-Z-OtfkEOpOId')" }}></div>
<div className="absolute inset-0 cinematic-vignette"></div>
</div>

<div className="relative z-10 text-center px-margin-mobile">
<h1 className="font-display-mobile text-display-mobile text-on-surface uppercase letter-spacing-extreme transition-transform duration-1000 transform hover:scale-105">
                FLUID<br />WAVES
            </h1>
<p className="mt-6 font-ui-nav text-ui-nav uppercase tracking-[0.3em] text-smoke opacity-70">Case Study 024</p>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
<div className="w-[1px] h-12 bg-on-surface animate-bounce"></div>
</div>
</section>

<section className="bg-paper py-gap-vertical-lg px-margin-mobile">
<div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter">
<div className="md:col-span-8 md:col-start-3">
<h2 className="font-display-mobile text-[45px] leading-tight font-[300] text-ink uppercase mb-8">
                    LIQUID DYNAMICS
                </h2>
<div className="h-[1px] w-24 bg-ink mb-12"></div>
<p className="font-body-lg text-ink mb-10 leading-relaxed opacity-90">
                    The Fluid Waves project explores the boundary between digital precision and organic chaos. Utilizing custom liquid-shader development, we simulated the specific viscosity of obsidian glass—a substance that behaves as both a rigid solid and a flowing mirror. 
                </p>
<p className="font-body-md text-ash mb-16 leading-relaxed">
                    By manipulating light refraction indices within dark mediums, the project achieves a volumetric depth that feels physically present. The resulting visual language is clinical yet evocative, capturing the rhythmic shifts of high-contrast silhouettes in motion.
                </p>
</div>
</div>
</section>

<section className="bg-background py-gap-vertical-md px-margin-mobile md:px-margin-desktop">
<div className="grid grid-cols-2 gap-2 md:gap-4 max-w-[1440px] mx-auto">

<div className="aspect-[4/5] bg-surface-container overflow-hidden group">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" data-alt="A macro detail shot of a procedural wave cresting in a dark liquid environment. The surface is glossy and black, reflecting a single surgical light source. The composition follows an editorial grid, emphasizing the sharp ridge of the wave against deep negative space. Cinematic achromatic visual language with harsh contrast and high-fidelity texture." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBxqU36hzWF4weEewAXh2PZUzXGsdyGAc2f-4FgULCRSyzwR-w7SJqHo0iSTijfZ5DjTBehpaDpVEvfiagRB6gzGaq-x3S0f58G-aMR0f6ttljFRey616Si0ukYLSEo1JLQE-zo3RLraYZynGIvPTIUfsmHwQv7N5tWUmfzUScONa6q7KebzDTYrvsclPhiNcTvw2NwIGOJtvq3H66IJA810384nt85epr7ScDWMTXzKvopf0K0RXRYDwc3hwo4j2m4b9qitUwjqhVA')" }}></div>
</div>

<div className="aspect-[4/5] bg-surface-container overflow-hidden group">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" data-alt="An abstract visual of dark liquid refraction patterns. The scene is shot in a clinical, dark-mode studio setting. Light bends through viscous waves, creating intricate glowing paths that look like liquid crystal. Strict monochrome discipline with deep blacks and sharp paper-white highlights. Prestige editorial aesthetics for a luxury technology brand." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuACEslKjEru-Ng0V9cHw0JuaCkTtXV9JBwP3Z3HAvFIzJhlm_jgTplAkHzudXjLwaQh5K4Ml8bkmPJBOkSmwJytg24cWUCywmQtVpujhUPxiVontknCMOVvN4IwYxIKJKNTucMy4OU0sdBUfSaZuL8UPVG2XFR2thp6VzQ-WdG0Lf-Ji-PwWfgPUSS4iLvweyajrlFnL4C13vHD-8IsthHlVGQ2_qKFx2d7oDOXW0pNGrqDNOaceFzVcgORntdRF9cdtJQO4JWHeQ2i')" }}></div>
</div>

<div className="aspect-[4/5] bg-surface-container overflow-hidden group">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" data-alt="A cinematic top-down view of liquid ripples forming a concentric geometric pattern. The medium is obsidian-dark, with a surface so smooth it looks like polished chrome. The lighting is volumetric, casting soft rays across the ripples. Hard minimalist design with an emphasis on structural negative space and tonal layering." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAjt2atthJgje2Bo3xbfWkYa-Q7o-Y9t-KVqxLfXjuSxewKqkNszQGPEozAysb1jXHfCz82fqCbCM7feHh4OPPMrdgSu7kNaqGXXuVLTqUBx7rLN7pwjINncGf9_Lop2bAEi96omcJaU-9QLCOBHjKGI3IMkcCYQ22jdIeRgFEgN9p0VbVEagoO3MEBCTtZ0hNWeUGGkBAjoXdPBNa7HOQYCL0LwWIfuyckvi2tg5QzbXwus1fxS9nH5N8IXxH5x9285JgIeWl5aL9N')" }}></div>
</div>

<div className="aspect-[4/5] bg-surface-container overflow-hidden group">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" data-alt="A detail shot showing the intersection of two liquid flows. One is smooth, the other turbulent, creating a high-contrast clash of textures. The scene is illuminated by high-key, surgical lighting that defines every droplet. The palette is purely achromatic, reflecting a prestige gallery installation feel." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCWH6VxCN8i21STF6kHrTXRvK5AW1BFVNKv7RkMgfiuO2VLy5osCrIoNuZHB5217LgCk5amwZb-c4n8TlxiM2aqQAHEHFQOYjOT6avZRqSYXdKrnQQcjrU0IHxqiaBSuOfh0UYESVS65YLJir3WGudU672v18iopkuV1YRZkSvVbNlLSBok53vP4dUSHrcRHXCEVEnBVQVuFNj_4YKn0dqtWEauQIiejWUjLJ7dDjAiGeEqgSkt5v_Tz7B77IRe5o6TsSYBPkrHFsZg')" }}></div>
</div>
</div>
</section>

<section className="bg-background border-t border-surface-container py-12 px-margin-mobile">
<div className="flex flex-wrap justify-between gap-8 max-w-[1440px] mx-auto">
<div>
<span className="font-micro text-micro text-smoke uppercase tracking-widest block mb-2">Category</span>
<span className="font-ui-nav text-ui-nav text-on-surface uppercase">Motion / R&D</span>
</div>
<div>
<span className="font-micro text-micro text-smoke uppercase tracking-widest block mb-2">Year</span>
<span className="font-ui-nav text-ui-nav text-on-surface uppercase">2024</span>
</div>
<div>
<span className="font-micro text-micro text-smoke uppercase tracking-widest block mb-2">Role</span>
<span className="font-ui-nav text-ui-nav text-on-surface uppercase">Creative Direction</span>
</div>
<div>
<span className="font-micro text-micro text-smoke uppercase tracking-widest block mb-2">Tools</span>
<span className="font-ui-nav text-ui-nav text-on-surface uppercase">Houdini, Redshift</span>
</div>
</div>
</section>

<section className="relative bg-ink py-40 px-margin-mobile text-center cursor-pointer group overflow-hidden">
<div className="absolute inset-0 bg-paper/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<span className="font-ui-nav text-ui-nav text-smoke uppercase tracking-[0.4em] mb-4 block">Next Project</span>
<h3 className="font-hero text-[64px] md:text-hero text-on-surface uppercase leading-none transition-transform duration-500 group-hover:scale-95">
            THE CUBE
        </h3>
<div className="mt-12 flex justify-center">
<span className="material-symbols-outlined text-[64px] text-on-surface transition-transform duration-500 group-hover:translate-x-4">arrow_right_alt</span>
</div>
</section>

<footer className="bg-background border-t border-ash flex flex-col items-center pt-24 pb-12 px-margin-mobile w-full">
<div className="font-hero text-display-mobile md:text-hero uppercase tracking-[-0.04em] text-on-surface leading-none mb-12 opacity-10">
            MANAS
        </div>
<div className="w-full flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex gap-6 font-ui-nav text-ui-nav text-smoke uppercase">
<a className="hover:text-on-surface transition-colors" href="">Instagram</a>
<a className="hover:text-on-surface transition-colors" href="">LinkedIn</a>
<a className="hover:text-on-surface transition-colors" href="">Email</a>
<a className="hover:text-on-surface transition-colors" href="">Archive</a>
</div>
<p className="font-body-md text-smoke text-[12px] uppercase tracking-widest">
                © 2024 MANAS UPADHYAY
            </p>
</div>
</footer>
            <ScrollToTop />
        </div>
    );
}
