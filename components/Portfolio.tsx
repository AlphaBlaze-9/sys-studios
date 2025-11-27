import React from 'react';
import { LayoutIcon } from './Icons';

export const Portfolio: React.FC = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 bg-slate-950 relative overflow-hidden">
      {/* Background noise/grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4 animate-fade-in">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">Selected Work</h2>
            <p className="mt-6 text-slate-400 text-xl max-w-2xl font-light">A showcase of digital excellence and engineering precision.</p>
          </div>
        </div>

        {/* Coming Soon Placeholder */}
        <div className="relative w-full h-[600px] rounded-[2rem] border border-white/5 bg-slate-900/40 backdrop-blur-xl overflow-hidden group animate-slide-up shadow-2xl">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-20">
            <div className="w-28 h-28 rounded-3xl bg-slate-800/50 border border-white/10 flex items-center justify-center mb-8 animate-float shadow-2xl backdrop-blur-md">
              <LayoutIcon className="w-12 h-12 text-brand-400" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-4 tracking-tight">Portfolio Updating</h3>
            <p className="text-slate-400 max-w-md mx-auto mb-10 text-lg font-light leading-relaxed">
              We are currently curating our latest case studies. 
              Our best work is always the next one.
            </p>
            <div className="px-8 py-3 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-sm font-bold tracking-widest uppercase animate-pulse shadow-[0_0_20px_rgba(14,165,233,0.1)]">
              Coming Soon
            </div>
          </div>

          {/* Decorative blurred blobs inside card */}
          <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen animate-pulse-slow"></div>
          <div className="absolute -bottom-[20%] -right-[10%] w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        </div>
      </div>
    </section>
  );
};