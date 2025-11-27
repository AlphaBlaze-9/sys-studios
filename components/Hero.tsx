import React from 'react';
import { ArrowRightIcon } from './Icons';
import { Page } from '../types';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Enhanced Dynamic Background */}
      <div className="absolute inset-0 z-0 bg-slate-950">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_#1e293b_0%,_#020617_50%)]"></div>
         {/* Floating Blobs with Mesh Effect - Opacity reduced for subtlety */}
         <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-brand-600/10 rounded-full blur-[120px] mix-blend-screen animate-float opacity-10"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-accent-600/10 rounded-full blur-[100px] mix-blend-screen animate-float opacity-10" style={{ animationDelay: '3s' }}></div>
         <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[80px] animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge removed as requested */}
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-8 animate-slide-up leading-[0.9]">
          We Build <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 via-brand-300 to-accent-500 animate-shimmer bg-[length:200%_auto]">
            Digital Empires
          </span>
        </h1>
        
        <p className="mt-8 max-w-2xl mx-auto text-xl md:text-2xl text-slate-400 mb-12 animate-slide-up font-light leading-relaxed tracking-wide" style={{ animationDelay: '0.1s' }}>
          We create custom applications for your business. Tailored software solutions designed to drive growth and streamline operations.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <button onClick={() => onNavigate('contact')} className="btn-uiverse px-10 py-5 rounded-full flex items-center gap-3 text-lg group">
            <span className="relative z-10">Start Your Project</span>
            <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
          </button>
          <button onClick={() => onNavigate('work')} className="px-10 py-5 rounded-full font-semibold text-slate-300 border border-white/10 hover:bg-white/5 transition-all hover:text-white hover:border-white/20 backdrop-blur-sm">
            View Our Work
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-1 h-16 rounded-full bg-gradient-to-b from-slate-500/0 via-slate-500 to-slate-500/0"></div>
      </div>
    </div>
  );
};