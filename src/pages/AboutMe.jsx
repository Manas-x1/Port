import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';

export default function AboutMe() {
    useEffect(() => {
        window.scrollTo(0, 0);

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
        <div className="w-full text-on-surface">
            {/* Cinematic Hero */}
            <header className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center bg-surface-container-lowest">
                <div className="absolute inset-0 z-0">
                    <img 
                        className="w-full h-full object-cover opacity-40 hero-mask" 
                        alt="Manas Upadhyay Portrait Contextual"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCYTNkpLq9LYPGdgARKMH8jPiK1MFvjnKNcKxkI3osiGuPpKYHknOuWSQOJ_bvQckoJQV0Ru1VoR-Mu9PS0BA1TkiFuR2HfCnlymvMI6M5_NL4YEq0Nx9YYiExOJL3RnzKPB5eF9ULa8TSJx9qQA1RoqizepI5sEL-_zTxMUfqmxBJn1wuWnqkOY4C0BRa-woE6N3s_Zed6cW6heOk8uVlZ_vgHGsLBjKQOMdg5XqaZTcL__KjyiMr8JYL5tHeiahUormT7ZKH0iMS"
                    />
                </div>
                <div className="relative z-10 text-center select-none px-element-lg">
                    <span className="font-micro text-micro uppercase tracking-[0.3em] text-smoke mb-6 block animate-fade-in">Biography</span>
                    <h1 className="font-hero text-[48px] md:text-[120px] text-[#ffffff] uppercase animate-fade-in tracking-tight leading-none">
                        MANAS UPADHYAY
                    </h1>
                </div>
            </header>

            {/* Creative Philosophy */}
            <section className="bg-[#ffffff] text-ink py-section-v px-element-lg">
                <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-element-lg items-start reveal">
                    <div>
                        <span className="font-ui-nav text-ui-nav text-ash uppercase tracking-widest block mb-4">THE VISION</span>
                        <h2 className="font-heading-lg text-heading-lg uppercase leading-none text-ink">
                            SILENT COMPOSITION,<br />MONUMENTAL SPACE
                        </h2>
                    </div>
                    <div className="pt-8 md:pt-16">
                        <p className="font-body-lg text-body-lg text-ink leading-relaxed mb-8">
                            I am a digital creator specializing in cinematic interfaces, 3D topology, generative AI pipelines, and temporal editing rhythm. Every project I touch is structured on strict contrast, absolute geometry, and the honest treatment of empty space.
                        </p>
                        <p className="font-body-md text-body-md text-graphite leading-relaxed">
                            Based on a belief that modern design should wow users at first glance without adding visual clutter, I create digital sanctuaries. My work bridges the gap between high-end fashion editorial structures and advanced interactive tools.
                        </p>
                    </div>
                </div>
            </section>

            {/* Career Timeline & Milestone Grid */}
            <section className="bg-carbon py-section-v px-element-lg text-paper">
                <div className="max-w-[1440px] mx-auto">
                    <span className="font-ui-nav text-ui-nav text-ash uppercase tracking-widest block mb-offset-lg text-center">CREATIVE DISCIPLINE</span>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-element-lg reveal border-t border-white/10 pt-element-lg">
                        <div className="space-y-component-int">
                            <span className="font-ui-nav text-ui-nav text-ash uppercase">01 / Concept Development</span>
                            <h4 className="font-subheading text-subheading text-paper uppercase">Creative Direction</h4>
                            <p className="font-body-md text-body-md text-smoke">
                                Designing complete visual systems and guidelines, translating abstract goals into high-impact visual stories.
                            </p>
                        </div>
                        <div className="space-y-component-int">
                            <span className="font-ui-nav text-ui-nav text-ash uppercase">02 / Cinematic Rendering</span>
                            <h4 className="font-subheading text-subheading text-paper uppercase">3D &amp; Spatial Design</h4>
                            <p className="font-body-md text-body-md text-smoke">
                                Building procedural chrome materials, complex lighting setups, and brutalist geometric objects that convey weight.
                            </p>
                        </div>
                        <div className="space-y-component-int">
                            <span className="font-ui-nav text-ui-nav text-ash uppercase">03 / Synthesis &amp; Motion</span>
                            <h4 className="font-subheading text-subheading text-paper uppercase">AI &amp; Video Production</h4>
                            <p className="font-body-md text-body-md text-smoke">
                                Harnessing latent neural systems for asset generation, combined with temporal rhythm cuts in post-production.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Return Link Footer */}
            <section className="relative w-full h-[60vh] group cursor-pointer overflow-hidden bg-surface-container-lowest">
                <Link to="/" className="absolute inset-0 block">
                    <div className="absolute inset-0 bg-black transition-transform duration-700 group-hover:scale-105 opacity-40">
                        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-ash/20 to-transparent"></div>
                    </div>
                    <div className="relative h-full flex flex-col items-center justify-center text-center">
                        <span className="font-micro text-micro uppercase tracking-[0.4em] text-smoke mb-6">Return</span>
                        <h3 className="font-display text-display uppercase tracking-tighter mb-8 text-[#ffffff]">Back to Home</h3>
                        <div className="w-16 h-16 border border-ash rounded-full flex items-center justify-center group-hover:bg-on-surface group-hover:text-background transition-all duration-500">
                            <span className="material-symbols-outlined text-white group-hover:text-black">arrow_back</span>
                        </div>
                    </div>
                </Link>
            </section>

            {/* Footer */}
            <footer className="flex flex-col items-center pt-section-v pb-component-int px-element-lg w-full bg-background border-t border-white/10">
                <div className="w-full max-w-[1440px] flex flex-col md:flex-row justify-between items-center gap-nav-gap">
                    <div className="font-body-md text-body-md text-on-surface">
                        © 2026 MANAS UPADHYAY. ALL RIGHTS RESERVED.
                    </div>
                    <div className="flex gap-element-md">
                        <a className="font-body-md text-body-md text-smoke hover:text-on-surface transition-colors" href="#">Instagram</a>
                        <a className="font-body-md text-body-md text-smoke hover:text-on-surface transition-colors" href="#">LinkedIn</a>
                        <a className="font-body-md text-body-md text-smoke hover:text-on-surface transition-colors" href="#">Twitter</a>
                        <a className="font-body-md text-body-md text-smoke hover:text-on-surface transition-colors" href="#">Dribbble</a>
                    </div>
                </div>
            </footer>

            <ScrollToTop />
        </div>
    );
}
