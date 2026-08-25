import React from 'react';
import { Sparkles, CheckCircle2, ShieldCheck, Zap, Code2, Headphones, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const TrustProcess: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Scope & Discovery',
      time: 'Day 1–2',
      desc: 'We map out your business workflow, website objectives, or automation bottlenecks into a clear blueprint with exact deliverables.',
    },
    {
      num: '02',
      title: 'Build & Integrate',
      time: 'Day 3–7',
      desc: 'Clean, modern full-stack development or AI workflow engineering with live demo previews for early feedback.',
    },
    {
      num: '03',
      title: 'Launch & Automate',
      time: 'Day 8–10',
      desc: 'Domain connection, SEO optimization, and live workflow testing with comprehensive documentation and code handover.',
    },
  ];

  const guarantees = [
    {
      icon: ShieldCheck,
      title: '100% Code Ownership',
      desc: 'You own every line of code, design asset, and account credentials. Zero lock-in.',
    },
    {
      icon: Zap,
      title: 'High-Speed Delivery',
      desc: 'Most business websites and automated pipelines launch within 7–14 business days.',
    },
    {
      icon: Headphones,
      title: 'Direct WhatsApp Support',
      desc: 'Talk directly with your technical developer for prompt updates and adjustments.',
    },
  ];

  return (
    <section id="process" className="py-16 md:py-20 relative z-10 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Process &amp; Commitments</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            How We Deliver &amp; Why Clients Trust Us
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            A straightforward, transparent delivery methodology designed for busy business owners.
          </p>
        </div>

        {/* 3-Step Rapid Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-12">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 transition-all shadow-lg group backdrop-blur-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-mono font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-xl border border-blue-500/20">
                  {step.num}
                </span>
                <span className="text-xs font-mono font-medium text-teal-400 bg-teal-400/10 px-2.5 py-1 rounded-md border border-teal-400/20">
                  {step.time}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 3 Trust Pillars Bar */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-blue-950/40 border border-slate-800 shadow-xl backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guarantees.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
