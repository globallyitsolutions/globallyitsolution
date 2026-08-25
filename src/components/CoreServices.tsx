import React from 'react';
import { 
  Globe, 
  Bot, 
  Layers, 
  Wrench, 
  ArrowRight, 
  MessageSquare,
  Zap,
  Shield,
  Smartphone,
  Cpu,
  Check
} from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { TiltCard } from './3d/TiltCard';
import { MagneticButton } from './3d/MagneticButton';

export const CoreServices: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-transparent text-white border-b border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono mb-4 backdrop-blur-md">
            <span>Capabilities &amp; Scope</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Engineered Business Solutions
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Practical technology solutions engineered around real business operations and measurable ROI.
          </p>
        </div>

        {/* 4 Cards Grid with 3D TiltCards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 01 — Flagship: Business Websites */}
          <TiltCard maxTilt={8} className="rounded-2xl">
            <div 
              id="service-card-websites" 
              className="relative rounded-2xl bg-slate-900/90 border-2 border-blue-500/80 p-7 sm:p-9 shadow-xl flex flex-col justify-between h-full backdrop-blur-md"
            >
              {/* Flagship Badge */}
              <div className="absolute top-5 right-5 sm:top-6 sm:right-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/40 text-xs font-mono font-bold uppercase tracking-wider">
                  Flagship Service
                </span>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-blue-400 tracking-wider uppercase">01 — Primary Discipline</span>
                    <h3 className="text-2xl font-bold text-white tracking-tight">Business Websites</h3>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  Professional, responsive websites designed to help businesses build credibility, showcase their services, and generate direct enquiries.
                </p>

                <div className="space-y-3 mb-8">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">Scope Deliverables:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-200">
                    <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      <span>Responsive UI for all devices</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      <span>Direct WhatsApp integration</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      <span>Structured service catalogs</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      <span>SEO-friendly architecture</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      <span>High performance &amp; fast loads</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      <span>Cloud deployment &amp; handoff</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800">
                <MagneticButton strength={10} className="w-full">
                  <a
                    href={getWhatsAppUrl('website')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md shadow-blue-600/30 transition-all cursor-pointer"
                    id="service-cta-website"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Get a Website</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </MagneticButton>
              </div>
            </div>
          </TiltCard>

          {/* Card 02 — Flagship: AI & Business Automation */}
          <TiltCard maxTilt={8} className="rounded-2xl">
            <div 
              id="service-card-automation" 
              className="relative rounded-2xl bg-slate-900/90 border-2 border-teal-500/80 p-7 sm:p-9 shadow-xl flex flex-col justify-between h-full backdrop-blur-md"
            >
              {/* Flagship Badge */}
              <div className="absolute top-5 right-5 sm:top-6 sm:right-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/40 text-xs font-mono font-bold uppercase tracking-wider">
                  Flagship Service
                </span>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-teal-400 tracking-wider uppercase">02 — Autonomous Engine</span>
                    <h3 className="text-2xl font-bold text-white tracking-tight">AI &amp; Business Automation</h3>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  Automate repetitive tasks and data workflows using AI pipelines and structured business automation logic.
                </p>

                <div className="space-y-3 mb-8">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-teal-400 font-bold">Automated Workflows:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-200">
                    <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                      <span>Instant lead routing &amp; qualification</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                      <span>24/7 WhatsApp response bots</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                      <span>Automated email follow-up chains</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                      <span>Spreadsheet &amp; CRM synchronization</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                      <span>Document data extraction</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                      <span>Custom internal team assistants</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800">
                <MagneticButton strength={10} className="w-full">
                  <a
                    href={getWhatsAppUrl('automation')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm shadow-md shadow-teal-500/30 transition-all cursor-pointer"
                    id="service-cta-automation"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Automate Your Business</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </MagneticButton>
              </div>
            </div>
          </TiltCard>

          {/* Card 03 — Custom Web Applications */}
          <TiltCard maxTilt={8} className="rounded-2xl">
            <div 
              id="service-card-webapps" 
              className="rounded-2xl bg-slate-900/80 border border-slate-800 p-7 sm:p-8 flex flex-col justify-between h-full backdrop-blur-sm"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-slate-400 tracking-wider uppercase">03 — Full Stack</span>
                    <h3 className="text-xl font-bold text-white tracking-tight">Custom Web Applications</h3>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Purpose-built web applications, customer portals, and internal tools tailored for operational requirements.
                </p>

                <div className="space-y-2 mb-6">
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-200">
                    <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">&bull; Business dashboards</div>
                    <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">&bull; Internal tools</div>
                    <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">&bull; Customer portals</div>
                    <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">&bull; Booking systems</div>
                    <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">&bull; Management systems</div>
                    <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">&bull; Custom databases</div>
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-slate-800">
                <a
                  href={getWhatsAppUrl('general_requirement')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors border border-slate-700"
                  id="service-cta-customapp"
                >
                  <span>Discuss Your Requirement</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </TiltCard>

          {/* Card 04 — Maintenance & Support */}
          <TiltCard maxTilt={8} className="rounded-2xl">
            <div 
              id="service-card-maintenance" 
              className="rounded-2xl bg-slate-900/80 border border-slate-800 p-7 sm:p-8 flex flex-col justify-between h-full backdrop-blur-sm"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-slate-400 tracking-wider uppercase">04 — Reliability</span>
                    <h3 className="text-xl font-bold text-white tracking-tight">Website Maintenance &amp; Support</h3>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Keep your website secure, fast, and aligned with your expanding business needs with active maintenance.
                </p>

                <div className="space-y-2 mb-6">
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-200">
                    <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">&bull; Content updates</div>
                    <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">&bull; Technical fixes</div>
                    <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">&bull; Speed optimization</div>
                    <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">&bull; Security patching</div>
                    <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">&bull; Scheduled backups</div>
                    <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">&bull; SLA response support</div>
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-slate-800">
                <a
                  href={getWhatsAppUrl('quote')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors border border-slate-700"
                  id="service-cta-support"
                >
                  <span>Get Support</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </TiltCard>

        </div>
      </div>
    </section>
  );
};
