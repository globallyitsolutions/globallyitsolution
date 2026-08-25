import React from 'react';
import { 
  ArrowRight, 
  MessageSquare, 
  Globe, 
  Bot, 
  Zap, 
  ShieldCheck, 
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { LiveTechEngine } from './tech/LiveTechEngine';
import { ElectricBorder } from './reactbits/ElectricBorder';

export const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-transparent text-white border-b border-slate-800/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Hero Layout: Copy & Domain-Relevant Interactive Tech Engine */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          
          {/* Left Column: Official Business Positioning & Direct CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono mb-6 w-fit backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span>Websites &bull; AI Automations &bull; Direct WhatsApp Solutions</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              Build Your Digital Presence.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-sky-400">
                Automate Your Business.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-xl">
              We design professional websites and practical AI-powered automations that help businesses establish their brand, capture customer inquiries, and eliminate repetitive manual workflows.
            </p>

            {/* Direct CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href={getWhatsAppUrl('quote')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 cursor-pointer"
                id="hero-request-quote-btn"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Get a Fast Quote</span>
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 cursor-pointer"
                id="hero-explore-solutions-btn"
              >
                <span>View Our Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Value Commitments */}
            <div className="pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Fast, Mobile-First Web Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Custom AI &amp; WhatsApp Integration</span>
              </div>
            </div>

          </div>

          {/* Right Column: Live Interactive Web & Automation Engine */}
          <div className="lg:col-span-6">
            <ElectricBorder color="#38bdf8" speed={0.8} chaos={0.08} borderRadius={16}>
              <LiveTechEngine />
            </ElectricBorder>
          </div>

        </div>

        {/* 2 Flagship Offerings Ribbon */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Service 01 - Business Websites */}
          <div className="p-6 sm:p-7 bg-slate-900/90 border border-slate-800 rounded-2xl flex flex-col justify-between hover:border-blue-500/60 transition-colors">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-400 border border-blue-500/30">
                  <Globe className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">PILLAR 01</span>
              </div>
              <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">Web Development</div>
              <h2 className="text-xl font-bold text-white mb-2">Modern Business Websites</h2>
              <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
                Clean, responsive, high-converting websites crafted to showcase your services, build client trust, and drive direct WhatsApp &amp; email leads.
              </p>
            </div>
            <a 
              href={getWhatsAppUrl('website')} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 font-bold text-xs inline-flex items-center gap-1.5 pt-3 border-t border-slate-800"
            >
              <span>Discuss Your Website Requirement</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Service 02 - AI & Automation */}
          <div className="p-6 sm:p-7 bg-slate-900/90 border border-slate-800 rounded-2xl flex flex-col justify-between hover:border-teal-500/60 transition-colors">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="p-2.5 bg-teal-500/10 rounded-xl text-teal-300 border border-teal-500/30">
                  <Bot className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-bold text-teal-400/80 uppercase tracking-widest">PILLAR 02</span>
              </div>
              <div className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-1">Workflow Engineering</div>
              <h2 className="text-xl font-bold text-white mb-2">AI &amp; Business Automation</h2>
              <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
                Connect your WhatsApp, customer forms, CRM, spreadsheets, and emails to automate lead qualification, order notifications, and routine tasks.
              </p>
            </div>
            <a 
              href={getWhatsAppUrl('automation')} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 font-bold text-xs inline-flex items-center gap-1.5 pt-3 border-t border-slate-800"
            >
              <span>Discuss Your Automation Requirement</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
