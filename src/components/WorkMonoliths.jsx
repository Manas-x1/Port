import React from 'react';
import { Link } from 'react-router-dom';

export default function WorkMonoliths() {
    return (
        <section className="bg-paper py-section-v px-element-lg" id="work">
            <div className="max-w-[1440px] mx-auto">
                <div className="flex items-center justify-center py-offset-lg min-h-[60vh] reveal">
                    <h2 className="font-display text-display md:text-[152px] text-ink uppercase text-center leading-none tracking-tighter">
                        Monolith<br />created
                    </h2>
                </div>

                {/* Immersive 3D Design Editorial Block */}
                <div className="bg-ink py-[120px] px-element-lg -mx-element-lg mb-offset-lg reveal">
                    <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-element-lg items-start">
                        {/* Left Side: Massive Concept Heading */}
                        <div className="space-y-micro">
                            <span className="font-ui-nav text-ui-nav text-smoke uppercase tracking-widest">Featured Concept</span>
                            <h2 className="font-heading-lg text-heading-lg text-paper uppercase leading-tight">
                                SCULPTING<br />DIGITAL<br />MASS
                            </h2>
                        </div>
                        
                        {/* Right Side: Editorial Talk */}
                        <div className="space-y-element-md md:pt-12">
                            <div className="space-y-micro">
                                <h3 className="font-ui-nav text-ui-nav text-paper uppercase tracking-widest">3D Design &amp; Topology</h3>
                                <p className="font-body-lg text-body-lg text-paper opacity-80 max-w-md">
                                    Exploring the interplay between volume and vacuum in virtual spaces. We construct digital structures that carry visual weight, pure material presence, and structural honesty.
                                </p>
                            </div>
                            
                            <div className="space-y-micro">
                                <h3 className="font-ui-nav text-ui-nav text-paper uppercase tracking-widest">Light &amp; Refraction</h3>
                                <p className="font-body-lg text-body-lg text-paper opacity-80 max-w-md">
                                    Manipulating procedural materials and realistic lighting environments to capture the perfect specular highlight, defining hard-edged brutalism and organic curvature.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-element-lg">
                    {/* Project 1 - Metroid */}
                    <Link to="/metroid" className="block group cursor-pointer reveal">
                        <div className="overflow-hidden mb-component-int border border-ash/20 bg-surface-dim">
                            <img 
                                className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                alt="Brutalist concrete building"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5bBqJ8FImKmIH_FxZDNYzot25Lyt-lqaNgBCM7Z6pB_Bk6ybWgDMap-MS11RtSqO77chT3SQt3pADkWT12nTamepcRF-oIkU5w7htfwQHj8TyM1SB14H5fyNTdX5U-TAonHQPGYj6CgwsXMZZRqIi1EsxFFK_5WTNtLrVXsie87kyYhE8sbIh-Dyqy6H6QePgXgB58XQmK83s_pCqB4v-xgT-rtrwlGZL8H5qPETpiQhFp-oFjHHXd7fKYc4xWEQa73bMJHLOlYpKqwM"
                            />
                        </div>
                        <div className="flex justify-between items-baseline border-b border-ash pb-4">
                            <h3 className="font-heading-sm text-heading-sm text-ink uppercase">metroid&nbsp;</h3>
                            <span className="font-ui-nav text-ui-nav text-ash uppercase">01 / Branding</span>
                        </div>
                    </Link>

                    {/* Project 2 - Identity */}
                    <Link to="/identity" className="block group cursor-pointer md:mt-offset-lg reveal">
                        <div className="overflow-hidden mb-component-int border border-ash/20 bg-surface-dim">
                            <img 
                                className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                alt="Sleek metallic watch"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXu2tmqEQloF6Ta-9PQKYJBpKbTNp63-rjVZGZqsDPYppWOgCnx-mfPeKePWpO9q_AGOYjDOjsO8GVli4B6FyIQIJR0lF75_4LqzIeRlGZrXiOt3ak_XXAQvKtubGSemh0Gn4FiU36V2eXYbpzzkOaAEyfcQzVoC_12wEbV-5yuXjdYMTP_C8lAf4wmTJP2BOSJ7recmYjQ24GwNx7o4eyXecwnkt1Kc2Ycp8LqPsrOXq0xxeTg0oRGKkRcjwmnkROhb2IQy0vqWJTzMURI"
                            />
                        </div>
                        <div className="flex justify-between items-baseline border-b border-ash pb-4">
                            <h3 className="font-heading-sm text-heading-sm text-ink uppercase">Identity</h3>
                            <span className="font-ui-nav text-ui-nav text-ash uppercase">02 / Product</span>
                        </div>
                    </Link>

                    {/* Project 3 - Fluid Waves */}
                    <Link to="/fluid-waves" className="block group cursor-pointer reveal">
                        <div className="overflow-hidden mb-component-int border border-ash/20 bg-surface-dim">
                            <img 
                                className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                alt="Fluid obsidian waves"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBE3rSov-WeK0JUz1S45GLluA6leOvN5lji7IoVSr0vmLXSvU_GBp-1F7Mcvv5874KMNmtPFUHijo1B99OTg_JtPCwCHvOozsM7FBUn3v0SgY-vXtIcZk2OGt4Fmw2O9NTRRtMTsQoLONvcwmWFKIKe2k9lGclbrldb5vMYRAhUigTRyH4e65yu1Tjm8Q72rvZW2AOVkA_s45eH7a_4oCuHsvhksxzRAFs7irGtX35LCUOEf6gkOTN2cUbULhyYmORHgrDWIjiIKgfgdus"
                            />
                        </div>
                        <div className="flex justify-between items-baseline border-b border-ash pb-4">
                            <h3 className="font-heading-sm text-heading-sm text-ink uppercase">fluid waves</h3>
                            <span className="font-ui-nav text-ui-nav text-ash uppercase">03 / Product</span>
                        </div>
                    </Link>

                    {/* Project 4 - The Cube */}
                    <Link to="/the-cube" className="block group cursor-pointer md:mt-offset-lg reveal">
                        <div className="overflow-hidden mb-component-int border border-ash/20 bg-surface-dim">
                            <img 
                                className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                alt="Minimalist art gallery"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuACYt94tA3uWBfuh0cWFXetdmtyAR9vy3OdHQYTNauMsc355mNH_tIHHKKeqohU04MMaYpCZiOKR7mVkgeeqcvSXxw18vZ3xMfKaReeYb7E9P6PKxIGLE7UpF7Z-OouWE4VlI-U0t5NEoCRFd3ze1bJO-jkktOUJprzXJGFPHSrYDFuyLTVwtbiTD5fDYXwOl6Ut0CpmB2WmNC5nBQC9Vmj6UGK-Dn7iwExHO3dVulb4O8vcQ5WOOQwU9SFdAoiS5FFwEUugyx1KcxYq4g"
                            />
                        </div>
                        <div className="flex justify-between items-baseline border-b border-ash pb-4">
                            <h3 className="font-heading-sm text-heading-sm text-ink uppercase">The cube</h3>
                            <span className="font-ui-nav text-ui-nav text-ash uppercase">04 / Experience</span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
