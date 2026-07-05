import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';

export default function NeuralTopologyDetail() {
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
            <header className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-surface-container-lowest">
                <div className="absolute inset-0 z-0">
                    <img 
                        className="w-full h-full object-cover opacity-60 hero-mask" 
                        alt="Neural Topology Hero Render"
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                    />
                </div>
                <div className="relative z-10 text-center select-none">
                    <h1 className="font-hero text-hero-mobile md:text-hero text-[#ffffff] uppercase animate-fade-in tracking-tight">
                        NEURAL TOPOLOGY
                    </h1>
                    <div className="mt-8 flex flex-col items-center">
                        <span className="font-micro text-micro uppercase tracking-[0.3em] text-smoke mb-4">Scroll to Explore</span>
                        <div className="w-[1px] h-12 bg-on-surface/30 animate-pulse"></div>
                    </div>
                </div>
            </header>

            {/* Editorial Section: Procedural Landscapes */}
            <section className="bg-[#ffffff] text-on-secondary-fixed py-section-v px-element-lg" id="architecture">
                <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-element-lg items-start reveal">
                    <div className="sticky top-offset-lg">
                        <h2 className="font-heading-lg text-heading-lg uppercase leading-none text-ink">
                            PROCEDURAL<br />LANDSCAPES
                        </h2>
                    </div>
                    <div className="pt-8 md:pt-16">
                        <p className="font-body-lg text-body-lg text-ink leading-relaxed mb-8">
                            NEURAL TOPOLOGY is a design of synthetic landscapes created using volumetric vectors and deep neural networks.
                        </p>
                        <p className="font-body-md text-body-md text-graphite leading-relaxed">
                            We train custom generative models on geometric elevation values to map procedural terrain structures. The result creates a digital topology that balances natural elevation lines against artificial, hard-edged Brutalist grids.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery Break: Perspective 01 */}
            <section className="w-full bg-surface-container-lowest">
                <div className="relative w-full aspect-video md:h-[90vh] overflow-hidden reveal">
                    <img 
                        className="w-full h-full object-cover" 
                        alt="Neural Topology Detail View 01"
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                    />
                    <div className="absolute bottom-element-lg left-element-lg">
                        <span className="font-micro text-micro uppercase tracking-[0.2em] text-on-surface opacity-60">PERSPECTIVE 01</span>
                    </div>
                </div>
            </section>

            {/* Next Project Section */}
            <section className="relative w-full h-[70vh] group cursor-pointer overflow-hidden bg-surface-container-lowest">
                <Link to="/latent-spaces" className="absolute inset-0 block">
                    <div className="absolute inset-0 bg-black transition-transform duration-700 group-hover:scale-105 opacity-40">
                        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-ash/20 to-transparent"></div>
                    </div>
                    <div className="relative h-full flex flex-col items-center justify-center text-center">
                        <span className="font-micro text-micro uppercase tracking-[0.4em] text-smoke mb-6">Up Next</span>
                        <h3 className="font-display text-display uppercase tracking-tighter mb-8 text-[#ffffff]">Latent Spaces</h3>
                        <div className="w-16 h-16 border border-ash rounded-full flex items-center justify-center group-hover:bg-on-surface group-hover:text-background transition-all duration-500">
                            <span className="material-symbols-outlined text-white group-hover:text-black">arrow_forward</span>
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
