import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';

export default function IdentityDetail() {
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
                        alt="Identity Hero Render"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXu2tmqEQloF6Ta-9PQKYJBpKbTNp63-rjVZGZqsDPYppWOgCnx-mfPeKePWpO9q_AGOYjDOjsO8GVli4B6FyIQIJR0lF75_4LqzIeRlGZrXiOt3ak_XXAQvKtubGSemh0Gn4FiU36V2eXYbpzzkOaAEyfcQzVoC_12wEbV-5yuXjdYMTP_C8lAf4wmTJP2BOSJ7recmYjQ24GwNx7o4eyXecwnkt1Kc2Ycp8LqPsrOXq0xxeTg0oRGKkRcjwmnkROhb2IQy0vqWJTzMURI"
                    />
                </div>
                <div className="relative z-10 text-center select-none">
                    <h1 className="font-hero text-hero-mobile md:text-hero text-[#ffffff] uppercase animate-fade-in tracking-tight">
                        IDENTITY
                    </h1>
                    <div className="mt-8 flex flex-col items-center">
                        <span className="font-micro text-micro uppercase tracking-[0.3em] text-smoke mb-4">Scroll to Explore</span>
                        <div className="w-[1px] h-12 bg-on-surface/30 animate-pulse"></div>
                    </div>
                </div>
            </header>

            {/* Editorial Section: Brand Architecture */}
            <section className="bg-[#ffffff] text-on-secondary-fixed py-section-v px-element-lg" id="architecture">
                <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-element-lg items-start reveal">
                    <div className="sticky top-offset-lg">
                        <h2 className="font-heading-lg text-heading-lg uppercase leading-none text-ink">
                            BRAND<br />ARCHITECTURE
                        </h2>
                    </div>
                    <div className="pt-8 md:pt-16">
                        <p className="font-body-lg text-body-lg text-ink leading-relaxed mb-8">
                            IDENTITY explores weightless structure and pure metallic textures. We sculpt branding concepts that sit at the intersection of heavy physical presence and silent digital philosophy.
                        </p>
                        <p className="font-body-md text-body-md text-graphite leading-relaxed">
                            Through procedural chrome reflections and carefully calibrated typography, the identity establishes a dialogue between form and empty space. Every letterform is balanced against structural gridlines to construct a feeling of monumental permanence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery Break: Perspective 01 */}
            <section className="w-full bg-surface-container-lowest">
                <div className="relative w-full aspect-video md:h-[90vh] overflow-hidden reveal">
                    <img 
                        className="w-full h-full object-cover" 
                        alt="Identity Detail View 01"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXu2tmqEQloF6Ta-9PQKYJBpKbTNp63-rjVZGZqsDPYppWOgCnx-mfPeKePWpO9q_AGOYjDOjsO8GVli4B6FyIQIJR0lF75_4LqzIeRlGZrXiOt3ak_XXAQvKtubGSemh0Gn4FiU36V2eXYbpzzkOaAEyfcQzVoC_12wEbV-5yuXjdYMTP_C8lAf4wmTJP2BOSJ7recmYjQ24GwNx7o4eyXecwnkt1Kc2Ycp8LqPsrOXq0xxeTg0oRGKkRcjwmnkROhb2IQy0vqWJTzMURI"
                    />
                    <div className="absolute bottom-element-lg left-element-lg">
                        <span className="font-micro text-micro uppercase tracking-[0.2em] text-on-surface opacity-60">PERSPECTIVE 01</span>
                    </div>
                </div>
            </section>

            {/* Next Project Section */}
            <section className="relative w-full h-[70vh] group cursor-pointer overflow-hidden bg-surface-container-lowest">
                <Link to="/fluid-waves" className="absolute inset-0 block">
                    <div className="absolute inset-0 bg-black transition-transform duration-700 group-hover:scale-105 opacity-40">
                        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-ash/20 to-transparent"></div>
                    </div>
                    <div className="relative h-full flex flex-col items-center justify-center text-center">
                        <span className="font-micro text-micro uppercase tracking-[0.4em] text-smoke mb-6">Up Next</span>
                        <h3 className="font-display text-display uppercase tracking-tighter mb-8 text-[#ffffff]">Fluid Waves</h3>
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
