import React from 'react';
import { Link } from 'react-router-dom';

export default function VideoAugmentation() {
    return (
        <section className="bg-paper py-section-v px-element-lg text-ink" id="video-augmentation">
            <div className="max-w-[1440px] mx-auto">
                <div className="flex items-center justify-center py-offset-lg min-h-[60vh] reveal">
                    <h2 className="font-display text-display md:text-[152px] text-ink uppercase text-center leading-none tracking-tighter">
                        Video<br />Augmentation
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start gap-element-lg py-[80px] reveal border-b border-ash/20 mb-offset-lg">
                    <h3 className="font-heading-lg text-heading-lg text-ink uppercase md:w-1/2">Video Editing</h3>
                    <div className="md:w-1/2 md:pt-element-md">
                        <p className="font-body-lg text-body-lg text-ash max-w-md">
                            Temporal design and pacing that shifts reality. Our cuts, grades, and effects translate raw captures into high-impact visual poetry with strict rhythmic pacing and sensory cohesion.
                        </p>
                    </div>
                </div>

                {/* Video Projects Editorial List */}
                <div className="space-y-0 border-t border-ash/30 reveal animate-fade-in">
                    {/* Row 1 */}
                    <Link to="/chrono-shift" className="group flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-b border-ash/30 hover:bg-black/5 px-4 transition-all duration-300 cursor-pointer text-ink">
                        <div className="flex items-center gap-element-md">
                            <span className="font-ui-nav text-ui-nav text-ash">01</span>
                            <h3 className="font-heading-sm text-[36px] text-ink uppercase group-hover:text-primary transition-colors">
                                Chrono Shift
                            </h3>
                        </div>
                        <div className="flex items-center gap-element-lg mt-4 md:mt-0">
                            <span className="font-ui-nav text-ui-nav text-ash uppercase">Temporal Assembly</span>
                            <span className="material-symbols-outlined text-ink group-hover:translate-x-2 transition-transform">
                                arrow_forward
                            </span>
                        </div>
                    </Link>

                    {/* Row 2 */}
                    <Link to="/spectral-cut" className="group flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-b border-ash/30 hover:bg-black/5 px-4 transition-all duration-300 cursor-pointer text-ink">
                        <div className="flex items-center gap-element-md">
                            <span className="font-ui-nav text-ui-nav text-ash">02</span>
                            <h3 className="font-heading-sm text-[36px] text-ink uppercase group-hover:text-primary transition-colors">
                                Spectral Cut
                            </h3>
                        </div>
                        <div className="flex items-center gap-element-lg mt-4 md:mt-0">
                            <span className="font-ui-nav text-ui-nav text-ash uppercase">Color &amp; Depth</span>
                            <span className="material-symbols-outlined text-ink group-hover:translate-x-2 transition-transform">
                                arrow_forward
                            </span>
                        </div>
                    </Link>

                    {/* Row 3 */}
                    <Link to="/neo-noir" className="group flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-b border-ash/30 hover:bg-black/5 px-4 transition-all duration-300 cursor-pointer text-ink">
                        <div className="flex items-center gap-element-md">
                            <span className="font-ui-nav text-ui-nav text-ash">03</span>
                            <h3 className="font-heading-sm text-[36px] text-ink uppercase group-hover:text-primary transition-colors">
                                Neo-Noir
                            </h3>
                        </div>
                        <div className="flex items-center gap-element-lg mt-4 md:mt-0">
                            <span className="font-ui-nav text-ui-nav text-ash uppercase">Narrative Augment</span>
                            <span className="material-symbols-outlined text-ink group-hover:translate-x-2 transition-transform">
                                arrow_forward
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
