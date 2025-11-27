import React, { useState } from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import { analyzeProjectIdea } from '../services/geminiService';
import { ProjectScope } from '../types';
import { CpuIcon, ArrowRightIcon, CheckCircleIcon } from './Icons';

export const AiPlanner: React.FC = () => {
  const [idea, setIdea] = useState('');
  const [loading, setLoading] = useState(false);
  const [scope, setScope] = useState<ProjectScope | null>(null);

  const handleAnalyze = async () => {
    if (!idea.trim()) return;
    setLoading(true);
    try {
      const result = await analyzeProjectIdea(idea);
      setScope(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const data = scope ? [
    { subject: 'Complexity', A: scope.complexity, fullMark: 100 },
    { subject: 'Time (Weeks)', A: scope.estimatedWeeks * 10, fullMark: 100 }, // Scale for visual
    { subject: 'Cost', A: 70, fullMark: 100 }, // Abstract representation
    { subject: 'Scalability', A: 90, fullMark: 100 },
    { subject: 'Innovation', A: 85, fullMark: 100 },
  ] : [];

  const handleRequestQuote = () => {
    if (!scope) return;
    const subject = encodeURIComponent(`Project Request: ${scope.summary.substring(0, 50)}...`);
    const body = encodeURIComponent(
`Hi SYS Studios,

I used your AI Planner to scope my project. Here are the details:

Summary: ${scope.summary}
Features:
${scope.features.map(f => `- ${f}`).join('\n')}

Tech Stack: ${scope.techStack.join(', ')}
Estimated Complexity: ${scope.complexity}/100

I would like to discuss this further.

My Original Idea:
${idea}
`);
    window.location.href = `mailto:2sy.studio.2025@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="ai-planner" className="py-24 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-brand-900/10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 mb-6">
              <CpuIcon className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Powered by Gemini 2.5</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Not sure where to start? <br />
              <span className="text-brand-400">Let AI scope it for you.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Describe your dream app in plain English. Our AI consultant will analyze feasibility, recommend a tech stack, and estimate the timeline instantly.
            </p>

            <div className="bg-slate-900/80 p-6 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-sm">
              <label className="block text-sm font-medium text-slate-300 mb-2">Describe your project idea</label>
              <textarea 
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600 h-40 resize-none"
                placeholder="e.g. A social network for pet owners where they can share walking routes..."
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
              />
              <button 
                onClick={handleAnalyze}
                disabled={loading || !idea}
                className={`mt-4 w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white transition-all ${loading ? 'bg-slate-700 cursor-wait' : 'bg-brand-600 hover:bg-brand-500 shadow-lg hover:shadow-brand-500/25'}`}
              >
                {loading ? (
                  <span className="animate-pulse">Analyzing Requirements...</span>
                ) : (
                  <>
                    Generate Project Plan <ArrowRightIcon className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="relative">
            {scope ? (
              <div className="bg-slate-950 border border-white/10 rounded-2xl p-8 animate-fade-in shadow-2xl">
                 <div className="flex justify-between items-start mb-6">
                    <div>
                        <h3 className="text-2xl font-bold text-white">Project Analysis</h3>
                        <p className="text-slate-400 text-sm">Estimated Timeline: <span className="text-brand-400 font-semibold">{scope.estimatedWeeks} weeks</span></p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-slate-500 uppercase tracking-widest">Est. Cost Range</p>
                        <p className="text-xl font-bold text-green-400">{scope.costEstimate}</p>
                    </div>
                 </div>

                 <div className="h-64 w-full mb-8">
                    <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                        <PolarGrid stroke="#334155" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                        <Radar
                            name="Project Metrics"
                            dataKey="A"
                            stroke="#0ea5e9"
                            strokeWidth={3}
                            fill="#0ea5e9"
                            fillOpacity={0.3}
                        />
                        </RadarChart>
                    </ResponsiveContainer>
                 </div>

                 <div className="space-y-4 mb-8">
                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">Recommended Stack</h4>
                        <div className="flex flex-wrap gap-2">
                            {scope.techStack.map((tech) => (
                                <span key={tech} className="px-3 py-1 bg-slate-800 text-brand-300 text-xs rounded-full font-medium border border-slate-700">{tech}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                         <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">Core Features</h4>
                         <ul className="grid grid-cols-1 gap-2">
                            {scope.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                                    <CheckCircleIcon className="w-4 h-4 text-green-500 flex-shrink-0" />
                                    {feature}
                                </li>
                            ))}
                         </ul>
                    </div>
                 </div>

                 <button 
                    onClick={handleRequestQuote}
                    className="w-full bg-white text-slate-900 py-4 rounded-xl font-bold hover:bg-slate-200 transition-colors"
                >
                    Send Request to SYS Studios
                 </button>
              </div>
            ) : (
                <div className="h-full min-h-[500px] flex items-center justify-center border-2 border-dashed border-slate-800 rounded-2xl bg-slate-900/30">
                    <div className="text-center p-8">
                        <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-600">
                             <CpuIcon className="w-10 h-10" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-500">Waiting for input...</h3>
                        <p className="text-slate-600 max-w-xs mx-auto mt-2">Enter your project idea on the left to see a real-time technical breakdown.</p>
                    </div>
                </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
