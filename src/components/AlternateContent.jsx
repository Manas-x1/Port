import React from 'react';
import { Link } from 'react-router-dom';

export default function AlternateContent() {
    return (
        <section className="bg-ink py-section-v px-element-lg text-paper" id="alternate-content">
            <div className="max-w-[1440px] mx-auto">
                <div className="flex items-center justify-center py-offset-lg min-h-[60vh] reveal">
                    <h2 className="font-display text-display md:text-[152px] text-paper uppercase text-center leading-none tracking-tighter">
                        Alternate<br />Content
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start gap-element-lg py-[80px] reveal border-b border-white/10 mb-offset-lg">
                    <h3 className="font-heading-lg text-heading-lg text-paper uppercase md:w-1/2">AI Content Creation</h3>
                    <div className="md:w-1/2 md:pt-element-md">
                        <p className="font-body-lg text-body-lg text-smoke max-w-md">
                            Pushing the boundaries of visual synthesis. We leverage neural networks and latent spaces to generate hyper-realistic concepts, digital assets, and atmospheric art that challenge the line between reality and simulation.
                        </p>
                    </div>
                </div>

                {/* AI Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-element-lg">
                    {/* Project 1 */}
                    <Link to="/synthesized-echoes" className="block group cursor-pointer reveal">
                        <div className="overflow-hidden mb-component-int border border-white/10 bg-surface-container">
                            <img 
                                className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-75"
                                alt="AI Project - Synthesized Echoes"
                                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop"
                            />
                        </div>
                        <div className="flex justify-between items-baseline border-b border-white/20 pb-4">
                            <h3 className="font-heading-sm text-[28px] text-paper uppercase">Synthesized Echoes</h3>
                            <span className="font-ui-nav text-ui-nav text-smoke uppercase">01 / Neural Art</span>
                        </div>
                    </Link>

                    {/* Project 2 */}
                    <Link to="/neural-topology" className="block group cursor-pointer reveal">
                        <div className="overflow-hidden mb-component-int border border-white/10 bg-surface-container">
                            <img 
                                className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-75"
                                alt="AI Project - Neural Topography"
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop"
                            />
                        </div>
                        <div className="flex justify-between items-baseline border-b border-white/20 pb-4">
                            <h3 className="font-heading-sm text-[28px] text-paper uppercase">Neural Topology</h3>
                            <span className="font-ui-nav text-ui-nav text-smoke uppercase">02 / Landscape</span>
                        </div>
                    </Link>

                    {/* Project 3 */}
                    <Link to="/latent-spaces" className="block group cursor-pointer reveal">
                        <div className="overflow-hidden mb-component-int border border-white/10 bg-surface-container">
                            <img 
                                className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-75"
                                alt="AI Project - Latent Spaces"
                                src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=600&auto=format&fit=crop"
                            />
                        </div>
                        <div className="flex justify-between items-baseline border-b border-white/20 pb-4">
                            <h3 className="font-heading-sm text-[28px] text-paper uppercase">Latent Spaces</h3>
                            <span className="font-ui-nav text-ui-nav text-smoke uppercase">03 / Simulation</span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}

