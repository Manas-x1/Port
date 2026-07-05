import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <>
            {/* 3. Immersive Split Section */}
            <section className="flex flex-col md:flex-row h-screen bg-ink" id="about">
                <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden reveal">
                    <img 
                        alt="Manas Contextual Shot" 
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCYTNkpLq9LYPGdgARKMH8jPiK1MFvjnKNcKxkI3osiGuPpKYHknOuWSQOJ_bvQckoJQV0Ru1VoR-Mu9PS0BA1TkiFuR2HfCnlymvMI6M5_NL4YEq0Nx9YYiExOJL3RnzKPB5eF9ULa8TSJx9qQA1RoqizepI5sEL-_zTxMUfqmxBJn1wuWnqkOY4C0BRa-woE6N3s_Zed6cW6heOk8uVlZ_vgHGsLBjKQOMdg5XqaZTcL__KjyiMr8JYL5tHeiahUormT7ZKH0iMS"
                    />
                </div>
                <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-element-lg reveal">
                    <div className="max-w-xl">
                        <span className="font-ui-nav text-ui-nav text-ash uppercase tracking-widest mb-element-md block">
                            The Philosophy
                        </span>
                        <p className="font-heading-md text-heading-md text-paper leading-tight">
                            Crafting digital narratives that breathe through silence. I specialize in cinematic interfaces where every pixel serves a purpose.
                        </p>
                        <Link to="/about-me" className="mt-element-lg flex items-center gap-micro cursor-pointer group no-underline">
                            <span className="font-body-md text-body-md text-paper border-b border-paper transition-all group-hover:text-ash group-hover:border-ash">
                                Read Full Biography
                            </span>
                            <span className="material-symbols-outlined text-paper group-hover:translate-x-2 transition-transform">
                                arrow_forward
                            </span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 4. Services / Expertise Section */}
            <section className="bg-carbon py-section-v px-element-lg">
                <div className="max-w-[1440px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-element-lg border-y border-ash/30 py-element-lg reveal">
                        <div className="space-y-component-int">
                            <span className="font-ui-nav text-ui-nav text-ash uppercase">01 / Creative</span>
                            <h4 className="font-subheading text-subheading text-paper uppercase">Direction</h4>
                            <p className="font-body-md text-body-md text-smoke">
                                Defining the visual soul of a project through meticulous curation and conceptual depth.
                            </p>
                        </div>
                        <div className="space-y-component-int">
                            <span className="font-ui-nav text-ui-nav text-ash uppercase">02 / Digital</span>
                            <h4 className="font-subheading text-subheading text-paper uppercase">Design</h4>
                            <p className="font-body-md text-body-md text-smoke">
                                Creating immersive, fluid experiences that prioritize typography and structural rhythm.
                            </p>
                        </div>
                        <div className="space-y-component-int">
                            <span className="font-ui-nav text-ui-nav text-ash uppercase">03 / Visual</span>
                            <h4 className="font-subheading text-subheading text-paper uppercase">Strategy</h4>
                            <p className="font-body-md text-body-md text-smoke">
                                Architecting brand ecosystems that stand the test of time through minimalism and clarity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
