import React from 'react';
import { CodeIcon, SmartphoneIcon } from './Icons';

const services = [
  {
    icon: <CodeIcon className="w-10 h-10 text-brand-400" />,
    title: "Web Development",
    description: "Scalable, high-performance websites and digital architectures. We build systems that handle high traffic volumes with ease."
  },
  {
    icon: <SmartphoneIcon className="w-10 h-10 text-accent-400" />,
    title: "Mobile Apps",
    description: "Native-quality cross-platform mobile experiences. Seamless performance on iOS and Android from a single codebase."
  }
];

export const Services: React.FC = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 bg-slate-950 relative overflow-hidden">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-8">Core Capabilities</h2>
          <p className="mt-4 text-xl text-slate-400 max-w-3xl mx-auto font-light">
            We focus on what matters: shipping robust, high-performance code for web and mobile. No bloat, just power.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto animate-slide-up">
          {services.map((service, index) => (
            <div key={index} className="group relative h-full">
               {/* Hover Glow Effect */}
               <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500 to-accent-600 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition duration-500"></div>
               
               <div className="card-hover-effect relative h-full p-12 bg-slate-900 border border-white/5 rounded-3xl overflow-hidden flex flex-col justify-center backdrop-blur-xl">
                 
                 <div className="relative z-10">
                   <div className="mb-8 bg-slate-950/80 w-24 h-24 rounded-2xl flex items-center justify-center border border-white/5 shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                     {service.icon}
                   </div>
                   <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">{service.title}</h3>
                   <p className="text-slate-400 leading-relaxed text-lg font-light">
                     {service.description}
                   </p>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};