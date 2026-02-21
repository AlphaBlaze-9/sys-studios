import React from 'react';
import { TargetIcon, LightbulbIcon, UsersIcon, GitHubIcon, LinkedInIcon } from './Icons';



export const About: React.FC = () => {
    return (
        <section className="min-h-screen pt-32 pb-20 bg-slate-950 relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-brand-900/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 opacity-30"></div>
                <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-accent-900/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 opacity-30"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-24 animate-fade-in">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                        <UsersIcon className="w-4 h-4 text-brand-400" />
                        <span className="text-sm font-medium text-slate-300">The Team</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8">
                        Built by <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-400">Visionaries.</span>
                    </h2>
                    <p className="mt-4 text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
                        SYS Studios was founded on a simple premise: Digital excellence is not an option, it's a requirement. We are a collective of engineers, designers, and strategists obsessed with perfection.
                    </p>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32 animate-slide-up">
                    <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 backdrop-blur-sm relative overflow-hidden group card-hover-effect">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <TargetIcon className="w-32 h-32 text-brand-500" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-6">
                                <TargetIcon className="w-6 h-6 text-brand-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                            <p className="text-slate-400 leading-relaxed">
                                To empower businesses with digital tools that aren't just functional, but transformative. We don't just write code; we architect the future of your brand.
                            </p>
                        </div>
                    </div>
                    <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 backdrop-blur-sm relative overflow-hidden group card-hover-effect">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <LightbulbIcon className="w-32 h-32 text-accent-500" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center mb-6">
                                <LightbulbIcon className="w-6 h-6 text-accent-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Our Philosophy</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Innovation meets precision. We believe in the power of minimalism, clean architecture, and user-centric design to solve complex problems elegantly.
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};