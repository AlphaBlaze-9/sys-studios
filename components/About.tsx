import React from 'react';
import { TargetIcon, LightbulbIcon, UsersIcon, GitHubIcon, LinkedInIcon } from './Icons';

const founders = [
  {
    name: "Samarth Muralidhara",
    role: "Co-Founder",
    initials: "SM",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Yashas Anil",
    role: "Co-Founder",
    initials: "YA",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    name: "Shreyas Jambapuram",
    role: "Co-Founder",
    initials: "SJ",
    gradient: "from-emerald-500 to-teal-500",
  }
];

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

        {/* Founders Section */}
        <div className="mb-20">
            <h3 className="text-3xl font-bold text-white text-center mb-16">Leadership</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {founders.map((founder, index) => (
                    <div key={index} className="group relative">
                        {/* Card Background */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="glass-card-hover relative bg-slate-900/40 border border-white/5 rounded-3xl p-8 backdrop-blur-md h-full flex flex-col items-center">
                            {/* Avatar / Monogram */}
                            <div className="w-24 h-24 mx-auto mb-6 relative">
                                <div className={`absolute inset-0 bg-gradient-to-br ${founder.gradient} rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                                <div className={`relative w-full h-full rounded-full bg-gradient-to-br ${founder.gradient} p-0.5`}>
                                    <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
                                        <span className={`text-2xl font-bold bg-gradient-to-br ${founder.gradient} bg-clip-text text-transparent`}>
                                            {founder.initials}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center">
                                <h4 className="text-xl font-bold text-white mb-2">{founder.name}</h4>
                                <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-xs font-medium text-slate-400 border border-white/5">
                                    {founder.role}
                                </span>
                            </div>

                            {/* Social Links (Placeholder) */}
                            <div className="flex justify-center gap-4 mt-8 pt-6 border-t border-white/5 w-full">
                                <a href="#" className="text-slate-500 hover:text-white transition-colors">
                                    <GitHubIcon className="w-5 h-5" />
                                </a>
                                <a href="#" className="text-slate-500 hover:text-white transition-colors">
                                    <LinkedInIcon className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};