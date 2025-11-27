import React, { useState } from 'react';
import { MailIcon, ArrowRightIcon, CheckCircleIcon, ShieldIcon } from './Icons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '100-500',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Using FormSubmit.co for automatic email sending
      // NOTE: Check your email (2sy.studio.2025@gmail.com) for an activation link after the first submission.
      const response = await fetch("https://formsubmit.co/ajax/2sy.studio.2025@gmail.com", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            budget: formData.budget,
            message: formData.message,
            _subject: `New Project Inquiry from ${formData.name}`,
            _template: "table",
            _captcha: "false", // Disables the captcha page for smoother AJAX experience
            _honey: "" // Anti-spam field (keep empty)
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', budget: '100-500', message: '' });
      } else {
        console.error("Server responded with error");
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission failed", error);
      setStatus('error');
    }
  };

  return (
    <section className="min-h-screen pt-32 pb-20 bg-slate-950 relative">
       {/* Background Glow */}
       <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-900/20 rounded-full blur-[120px] pointer-events-none opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 animate-fade-in">
          <div className="pt-10">
            <div className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-widest text-brand-400 uppercase bg-brand-400/5 border border-brand-400/10 rounded-full">
              Get Started
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight">Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-400">extraordinary.</span></h2>
            <p className="text-slate-400 text-xl mb-12 leading-relaxed font-light">
              Ready to elevate your digital presence? SYS Studios delivers premium development services tailored to your specific needs.
            </p>
            
            <div className="space-y-6 mb-12">
                <div className="flex items-start gap-5 p-6 rounded-2xl bg-slate-900/30 border border-white/5 backdrop-blur-sm card-hover-effect">
                    <div className="mt-1 p-2 bg-brand-500/10 rounded-lg">
                        <CheckCircleIcon className="w-6 h-6 text-brand-500" />
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-lg">Premium Quality</h4>
                        <p className="text-slate-400 mt-1">We don't cut corners. Every pixel is polished, every line of code is optimized.</p>
                    </div>
                </div>
                <div className="flex items-start gap-5 p-6 rounded-2xl bg-slate-900/30 border border-white/5 backdrop-blur-sm card-hover-effect">
                    <div className="mt-1 p-2 bg-accent-500/10 rounded-lg">
                        <ShieldIcon className="w-6 h-6 text-accent-500" />
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-lg">Reliable Delivery</h4>
                        <p className="text-slate-400 mt-1">Transparent timelines and consistent updates throughout the project lifecycle.</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-5 text-slate-300 pl-2">
              <div className="w-14 h-14 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center border border-white/10 shadow-lg">
                <MailIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-1">Email us directly</p>
                <a href="mailto:2sy.studio.2025@gmail.com" className="text-xl font-bold text-white hover:text-brand-400 transition-colors">
                  2sy.studio.2025@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/60 p-8 lg:p-12 rounded-[2rem] border border-white/5 shadow-2xl backdrop-blur-xl animate-slide-up">
            <h3 className="text-3xl font-bold text-white mb-8">Request a Quote</h3>
            {status === 'success' ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center animate-fade-in">
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                        <CheckCircleIcon className="w-10 h-10 text-green-500" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                    <p className="text-slate-400 max-w-xs">We've received your inquiry and will get back to you within 24 hours.</p>
                    <button onClick={() => setStatus('idle')} className="mt-8 text-brand-400 hover:text-white text-sm font-bold uppercase tracking-wider transition-colors">Send Another</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group">
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 group-focus-within:text-brand-400 transition-colors">Name</label>
                        <input 
                        type="text" 
                        required
                        className="input-uiverse w-full rounded-xl px-5 py-4 text-white placeholder:text-slate-600"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        disabled={status === 'sending'}
                        />
                    </div>
                    <div className="group">
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 group-focus-within:text-brand-400 transition-colors">Email</label>
                        <input 
                        type="email" 
                        required
                        className="input-uiverse w-full rounded-xl px-5 py-4 text-white placeholder:text-slate-600"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        disabled={status === 'sending'}
                        />
                    </div>
                </div>
                
                <div className="group">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 group-focus-within:text-brand-400 transition-colors">Estimated Budget</label>
                    <div className="relative">
                        <select 
                        className="input-uiverse w-full rounded-xl px-5 py-4 text-white appearance-none cursor-pointer"
                        value={formData.budget}
                        onChange={e => setFormData({...formData, budget: e.target.value})}
                        disabled={status === 'sending'}
                        >
                        <option className="bg-slate-900 text-white" value="<100">&lt; $100</option>
                        <option className="bg-slate-900 text-white" value="100-500">$100 - $500</option>
                        <option className="bg-slate-900 text-white" value="500-1000">$500 - $1,000</option>
                        <option className="bg-slate-900 text-white" value="1000+">$1,000+</option>
                        </select>
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                </div>

                <div className="group">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 group-focus-within:text-brand-400 transition-colors">Project Details</label>
                    <textarea 
                    required
                    rows={4}
                    className="input-uiverse w-full rounded-xl px-5 py-4 text-white resize-none placeholder:text-slate-600"
                    placeholder="Tell us about your goals, features, and timeline..."
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    disabled={status === 'sending'}
                    />
                </div>

                <button type="submit" disabled={status === 'sending'} className="w-full btn-uiverse py-5 rounded-xl transition-all flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed">
                    {status === 'sending' ? (
                        <>Sending Request...</>
                    ) : (
                        <>Send Request <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
                    )}
                </button>
                {status === 'error' && <p className="text-red-400 text-center text-sm">Submission failed. Please try again or email us directly.</p>}
                </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};