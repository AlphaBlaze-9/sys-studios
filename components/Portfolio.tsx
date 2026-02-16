import React from 'react';
import { LayoutIcon, SmartphoneIcon } from './Icons';

// place images in: src/assets/
import HomePageSS from '../assets/HomePageSS.png';
import LightUpLivesHomePage from '../assets/LightUpLivesHomePage.png';
import HoustonHandsOfHopeHome from '../assets/HoustonHandsOfHopeHome.png';
import VandeHome from '../assets/VandeHome.png';

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
            <p className="mt-6 text-slate-400 text-xl max-w-2xl font-light">
              A showcase of digital excellence and engineering precision.
            </p>
          </div>
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* First Aid for All */}
          <div className="relative w-full h-[740px] rounded-[2rem] border border-white/5 bg-slate-900/40 backdrop-blur-xl overflow-hidden group animate-slide-up shadow-2xl">
            <div className="absolute inset-0 p-8 sm:p-10 z-20 flex flex-col">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold tracking-wide">
                    Live Website
                  </div>
                  <h3 className="mt-5 text-4xl font-bold text-white tracking-tight">First Aid for All</h3>
                  <p className="mt-4 text-slate-400 max-w-xl text-lg font-light leading-relaxed">
                    A clean, modern site built to support a real-world mission: collecting and redistributing first aid supplies
                    for communities that need them most. Built for clarity, speed, and trust.
                  </p>
                </div>

                <div className="w-16 h-16 rounded-2xl bg-slate-800/50 border border-white/10 flex items-center justify-center shadow-2xl backdrop-blur-md">
                  <LayoutIcon className="w-8 h-8 text-brand-400" />
                </div>
              </div>

              {/* Homepage Screenshot */}
              <div className="mt-10 flex-1 rounded-2xl border border-white/10 bg-slate-950/40 overflow-hidden relative">
                <img
                  src={HomePageSS}
                  alt="First Aid for All homepage screenshot"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Subtle top-to-bottom readability gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>

              <div className="mt-10 flex items-center gap-4">
                <a
                  href="https://first-aidforall.org"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-sm font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(14,165,233,0.1)] hover:bg-brand-500/15 transition"
                >
                  Visit Site
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7M17 7H9M17 7V15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>


              </div>
            </div>

            {/* Decorative blurred blobs inside card */}
            <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen animate-pulse-slow"></div>
            <div
              className="absolute -bottom-[20%] -right-[10%] w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen animate-pulse-slow"
              style={{ animationDelay: '1.5s' }}
            ></div>
          </div>

          {/* Light Up Lives */}
          <div className="relative w-full h-[740px] rounded-[2rem] border border-white/5 bg-slate-900/40 backdrop-blur-xl overflow-hidden group animate-slide-up shadow-2xl">
            <div className="absolute inset-0 p-8 sm:p-10 z-20 flex flex-col">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold tracking-wide">
                    Live Website
                  </div>
                  <h3 className="mt-5 text-4xl font-bold text-white tracking-tight">Light Up Lives</h3>
                  <p className="mt-4 text-slate-400 max-w-xl text-lg font-light leading-relaxed">
                    A mission-driven website created for Light Up Lives to share impact, mobilize supporters, and communicate
                    initiatives clearly through a simple, accessible experience.
                  </p>
                </div>

                <div className="w-16 h-16 rounded-2xl bg-slate-800/50 border border-white/10 flex items-center justify-center shadow-2xl backdrop-blur-md">
                  <LayoutIcon className="w-8 h-8 text-brand-400" />
                </div>
              </div>

              {/* Homepage Screenshot */}
              <div className="mt-10 flex-1 rounded-2xl border border-white/10 bg-slate-950/40 overflow-hidden relative">
                <img
                  src={LightUpLivesHomePage}
                  alt="Light Up Lives homepage screenshot"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>

              <div className="mt-10 flex items-center gap-4">
                <a
                  href="https://lightuplives24.wixsite.com/lightuplives"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-sm font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(14,165,233,0.1)] hover:bg-brand-500/15 transition"
                >
                  Visit Site
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7M17 7H9M17 7V15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>


              </div>
            </div>

            {/* Decorative blurred blobs inside card */}
            <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen animate-pulse-slow"></div>
            <div
              className="absolute -bottom-[20%] -right-[10%] w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen animate-pulse-slow"
              style={{ animationDelay: '1.5s' }}
            ></div>
          </div>

          {/* Houston Hands of Hope */}
          <div className="relative w-full h-[740px] rounded-[2rem] border border-white/5 bg-slate-900/40 backdrop-blur-xl overflow-hidden group animate-slide-up shadow-2xl">
            <div className="absolute inset-0 p-8 sm:p-10 z-20 flex flex-col">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold tracking-wide">
                    Live Website
                  </div>
                  <h3 className="mt-5 text-4xl font-bold text-white tracking-tight">Houston Hands of Hope</h3>
                  <p className="mt-4 text-slate-400 max-w-xl text-lg font-light leading-relaxed">
                    A student-led non-profit dedicated to fighting hunger in Houston. We collect donations and mobilize
                    volunteers to distribute food to local banks, uniting hands to defeat hunger.
                  </p>
                </div>

                <div className="w-16 h-16 rounded-2xl bg-slate-800/50 border border-white/10 flex items-center justify-center shadow-2xl backdrop-blur-md">
                  <LayoutIcon className="w-8 h-8 text-brand-400" />
                </div>
              </div>

              {/* Homepage Screenshot */}
              <div className="mt-10 flex-1 rounded-2xl border border-white/10 bg-slate-950/40 overflow-hidden relative">
                <img
                  src={HoustonHandsOfHopeHome}
                  alt="Houston Hands of Hope homepage screenshot"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>

              <div className="mt-10 flex items-center gap-4">
                <a
                  href="https://houstonhandsofhope.wixsite.com/houstonhandsofhope"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-sm font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(14,165,233,0.1)] hover:bg-brand-500/15 transition"
                >
                  Visit Site
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7M17 7H9M17 7V15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Decorative blurred blobs inside card */}
            <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen animate-pulse-slow"></div>
            <div
              className="absolute -bottom-[20%] -right-[10%] w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen animate-pulse-slow"
              style={{ animationDelay: '1.5s' }}
            ></div>
          </div>

          {/* Vande Wellness */}
          <div className="relative w-full h-[740px] rounded-[2rem] border border-white/5 bg-slate-900/40 backdrop-blur-xl overflow-hidden group animate-slide-up shadow-2xl">
            <div className="absolute inset-0 p-8 sm:p-10 z-20 flex flex-col">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold tracking-wide">
                    Mobile Application
                  </div>
                  <h3 className="mt-5 text-4xl font-bold text-white tracking-tight">Vande Wellness</h3>
                  <p className="mt-4 text-slate-400 max-w-xl text-lg font-light leading-relaxed">
                    A comprehensive React Native mobile application for Ayurvedic wellness featuring service bookings, a product shop for 35 Vande Herbals, and event management.
                  </p>
                </div>

                <div className="w-16 h-16 rounded-2xl bg-slate-800/50 border border-white/10 flex items-center justify-center shadow-2xl backdrop-blur-md">
                  <SmartphoneIcon className="w-8 h-8 text-brand-400" />
                </div>
              </div>

              {/* Homepage Screenshot - iPhone Mockup Style */}
              <div className="mt-4 flex-1 flex items-center justify-center relative">
                <div className="relative w-[180px] sm:w-[200px] aspect-[1/2] rounded-[2rem] border-[6px] border-slate-900 shadow-2xl overflow-hidden bg-slate-950 ring-1 ring-white/10">
                  {/* Dynamic Island / Notch placeholder */}
                  <div className="absolute top-0 inset-x-0 h-7 bg-slate-900 z-20 flex justify-center">
                    <div className="w-24 h-5 bg-black rounded-b-xl" />
                  </div>

                  <img
                    src={VandeHome}
                    alt="Vande Wellness app screenshot"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />

                  {/* Glass reflection effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-10" />
                </div>
              </div>

              <div className="-mt-1 flex items-center gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-sm font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(14,165,233,0.1)] hover:bg-brand-500/15 transition"
                >
                  Coming Soon
                </a>
              </div>
            </div>

            {/* Decorative blurred blobs inside card */}
            <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-[#2E5C55]/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen animate-pulse-slow"></div>
            <div
              className="absolute -bottom-[20%] -right-[10%] w-[600px] h-[600px] bg-[#D4AF37]/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen animate-pulse-slow"
              style={{ animationDelay: '1.5s' }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};
