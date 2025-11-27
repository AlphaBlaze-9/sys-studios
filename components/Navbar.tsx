import React, { useState, useEffect } from 'react';
import { NavItem, Page } from '../types';

const navItems: NavItem[] = [
  { label: 'Services', page: 'services' },
  { label: 'Process', page: 'process' },
  { label: 'Work', page: 'work' },
  { label: 'About', page: 'about' },
  { label: 'Contact', page: 'contact' },
];

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled ? 'bg-slate-950/70 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 flex items-center justify-center">
                 <div className="absolute inset-0 bg-gradient-to-br from-brand-500 to-accent-600 rounded-xl opacity-100 group-hover:opacity-80 transition-opacity blur-[2px]"></div>
                 <div className="absolute inset-0 bg-gradient-to-br from-brand-500 to-accent-600 rounded-xl flex items-center justify-center font-bold text-white text-xl shadow-lg border border-white/20">S</div>
              </div>
              <span className="text-xl font-bold text-white tracking-tight group-hover:text-brand-100 transition-colors">SYS Studios</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              <div className="bg-slate-900/50 backdrop-blur-md rounded-full border border-white/5 p-1 flex items-center gap-1 mr-6">
                {navItems.map((item) => (
                    <button
                    key={item.label}
                    onClick={() => onNavigate(item.page)}
                    className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        currentPage === item.page 
                        ? 'text-white bg-white/10 shadow-sm' 
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                    >
                    {item.label}
                    </button>
                ))}
              </div>
              <button 
                onClick={() => onNavigate('contact')} 
                className="group relative px-6 py-2.5 rounded-full overflow-hidden bg-white text-slate-950 font-bold text-sm shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-200/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="relative z-10">Start Project</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};