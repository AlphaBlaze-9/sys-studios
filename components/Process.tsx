import React from 'react';
import { SearchIcon, PenIcon, CodeIcon, RocketIcon } from './Icons';

const steps = [
  {
    icon: <SearchIcon className="w-6 h-6 text-brand-400" />,
    title: "Discovery",
    description: "We dive deep into your goals, audience, and market to craft a strategic roadmap for success."
  },
  {
    icon: <PenIcon className="w-6 h-6 text-accent-400" />,
    title: "Design",
    description: "Our designers create stunning, intuitive interfaces that align perfectly with your brand identity."
  },
  {
    icon: <CodeIcon className="w-6 h-6 text-sky-400" />,
    title: "Development",
    description: "We engineer robust, scalable solutions using cutting-edge technologies and clean code practices."
  },
  {
    icon: <RocketIcon className="w-6 h-6 text-indigo-400" />,
    title: "Launch",
    description: "Rigorous testing and seamless deployment ensure your product hits the market flawlessly."
  }
];

export const Process: React.FC = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 bg-slate-950 relative overflow-hidden flex flex-col justify-center">
      {/* Decorative Background Mesh */}
      <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-brand-900 via-slate-900 to-accent-900 rounded-full blur-[100px] rotate-12"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">How We Work</h2>
          <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto font-light">A proven process designed for excellence and transparency.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-slide-up">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-px bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 -z-10"></div>
              )}
              
              <div className="flex flex-col items-center text-center p-6 rounded-2xl transition-colors duration-300 hover:bg-white/5">
                <div className="w-20 h-20 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 group-hover:border-brand-500/30 transition-all duration-300 relative z-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl"></div>
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};