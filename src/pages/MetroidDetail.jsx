import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import ScrollToTop from '../components/ScrollToTop';

export default function MetroidDetail() {
    useEffect(() => {
        // Scroll to top on mount
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
        <div className="w-full text-on-surface">
            {/* Cinematic Hero */}
            <header className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-surface-container-lowest">
                <div className="absolute inset-0 z-0">
                    <img
                        className="w-full h-full object-cover opacity-60 hero-mask"
                        alt="Metroid 3D Hero Render"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSgAv7jAQYrQN82lb68tevxiSWhxmgDfdERNLJ_0UxS6nE2g1SHmSSvp9R3mRKRa6sOAtQ7c-jRRDu8NUBvhSL4V9d3udPtcTlPcj3EI3MAzjGfrDMzkflbLcTGKbds-MefvCPS0UuQ1vKmkHgf8-l7CURgyjpO08O253oB_eCSkH3-DH7-XNi4kCT1ZfUMgs_ZCsipDHN3hzoI1F2WyUFvgg8CjLyrFnrNN6zuot0rKjqUKoQvXzeGIxLTtNlLzvd1BocbxAXxrx0"
                    />
                </div>
                <div className="relative z-10 text-center select-none">
                    <h1 className="font-hero text-hero-mobile md:text-hero text-[#ffffff] uppercase animate-fade-in tracking-tight">
                        METROID
                    </h1>
                    <div className="mt-8 flex flex-col items-center">
                        <span className="font-micro text-micro uppercase tracking-[0.3em] text-smoke mb-4">Scroll to Explore</span>
                        <div className="w-[1px] h-12 bg-on-surface/30 animate-pulse"></div>
                    </div>
                </div>
            </header>

            {/* Editorial Section: System Architecture */}
            <section className="bg-[#ffffff] text-on-secondary-fixed py-section-v px-element-lg" id="architecture">
                <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-element-lg items-start reveal">
                    <div className="sticky top-offset-lg">
                        <h2 className="font-heading-lg text-heading-lg uppercase leading-none text-ink">
                            SYSTEM<br />ARCHITECTURE
                        </h2>
                    </div>
                    <div className="pt-8 md:pt-16">
                        <p className="font-body-lg text-body-lg text-ink leading-relaxed mb-8">
                            METROID is a precision-engineered 3D calculator designed for the digital darkroom. Every geometric axis and tactile surface has been meticulously modeled to bridge the gap between industrial utility and ethereal 3D art.
                        </p>
                        <p className="font-body-md text-body-md text-graphite leading-relaxed">
                            Built entirely in a virtual three-dimensional space, the device features a proprietary pixel-based glyph system and a high-fidelity material finish. It represents a radical departure from conventional tools, turning mathematical interaction into a cinematic tactile experience.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery Break: Perspective 01 */}
            <section className="w-full bg-surface-container-lowest">
                <div className="relative w-full aspect-video md:h-[90vh] overflow-hidden reveal">
                    <img
                        className="w-full h-full object-cover"
                        alt="Metroid Perspective View 01"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkgS082M3pycZc7BEwU2LJPcjRvjh-B-88CGQc5PMy_jDTkuuw8XsBilubhuEDMHyxL16c4a_V2qbQ7qaJAV5EvFlv4q0aO5Ov9kw0cp691lE9jdS94TwUdEnXQDTqnqXvzdi6G7k48CqgBGx8Eoi-KGrxr99NVQP5DKvOWR9FiF24glRE1pOdVd7sUSHxaJFIkZSAFkIKIjEpug0BYwKi2b__A5LGf2OfAjh7jS5X_Uc8LFFONHnNDyBLA-VKDMvCUwKN1wSBjKhH"
                    />
                    <div className="absolute bottom-element-lg left-element-lg">
                        <span className="font-micro text-micro uppercase tracking-[0.2em] text-on-surface opacity-60">PERSPECTIVE 01</span>
                    </div>
                </div>
            </section>

            {/* Side-by-Side Product Shots */}
            <section className="bg-[#f5f5f5] py-section-v px-element-lg">
                <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-component-int">
                    <div className="aspect-square bg-[#ffffff] flex items-center justify-center p-card-pad border border-ash/10 reveal">
                        <img
                            className="w-full h-full object-contain mix-blend-multiply"
                            alt="Metroid Product Detail 01"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdYhz1G9dyzlx6UDXN4z604SFSHhUG2bwUZZIN_rAzNmH06Ii5dXltlDWQ7Gsk1UmF5U8lnK8z8TnSoALBSV9WcXSpol9aX8pc9Hie5bPASI6FNTM32Z6UNv8PocIlNyzoFbUV9f2Snjrrl5J9YBSXHUs1OiQmGND1H2E0vg2YsMqCrI-auL4AHaCOWjDjx2Xrg-M01-41pq_wYMJu2CL8eB8epvqD-zDzRDPIKHJiyMRS3NsvlJxEzGgnJtzQ_v-v8vVxGwvi2sGB"
                        />
                    </div>
                    <div className="aspect-square bg-[#ffffff] flex items-center justify-center p-card-pad border border-ash/10 reveal">
                        <img
                            className="w-full h-full object-contain mix-blend-multiply"
                            alt="Metroid Product Detail 02"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuChUnIO_A1u2x3OTav4-HQ9PUc41rAq11MhlHivO13-TXlTSMQndG3ARHSByTyYn1grZonKqNvXvrOMnMDLzw4g53SUop-WPxXfVxMjeLK8wfZCoDoqCbcSVKMVCYRjoGkdehRBcjPsBWkL0yTL-xQORVnC4Do1RQ64e1-bQesYRBnWJEtZrzRTLKiYwWp-DZMCQ9UQJMwLsXEPauM-_bweudWgKm4md26YM0FeTaGk_I50Dnmo5LD4lLYvaiWWUL9nbXpgRMfLVOFM"
                        />
                    </div>
                </div>
            </section>

            {/* Next Project Section */}
            <section className="relative w-full h-[70vh] group cursor-pointer overflow-hidden bg-surface-container-lowest">
                <a href="/#work" className="absolute inset-0 block">
                    <div className="absolute inset-0 bg-black transition-transform duration-700 group-hover:scale-105 opacity-40">
                        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-ash/20 to-transparent"></div>
                    </div>
                    <div className="relative h-full flex flex-col items-center justify-center text-center">
                        <span className="font-micro text-micro uppercase tracking-[0.4em] text-smoke mb-6">Up Next</span>
                        <h3 className="font-display text-display uppercase tracking-tighter mb-8">Identity</h3>
                        <div className="w-16 h-16 border border-ash rounded-full flex items-center justify-center group-hover:bg-on-surface group-hover:text-background transition-all duration-500">
                            <span className="material-symbols-outlined text-white group-hover:text-black">arrow_forward</span>
                        </div>
                    </div>
                </a>
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
