import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Laptop, 
  Smartphone, 
  Layers, 
  Sparkles, 
  Check, 
  ArrowRight, 
  ExternalLink,
  MessageSquare,
  ShieldCheck,
  Zap,
  Eye
} from 'lucide-react';
import { getWhatsAppUrl } from '../../utils/whatsapp';

interface ShowcaseSite {
  id: string;
  name: string;
  industry: string;
  accent: string;
  headline: string;
  tagline: string;
  metrics: { lcp: string; speed: string; score: number };
  layers: { name: string; desc: string; z: number; color: string }[];
}

const SHOWCASE_SITES: ShowcaseSite[] = [
  {
    id: 'corporate',
    name: 'Apex Advisory Group',
    industry: 'Corporate & Legal',
    accent: '#2563EB',
    headline: 'High-Impact Digital Capital for Growing Enterprises',
    tagline: 'Delivering secure institutional advisory portals with sub-second page performance.',
    metrics: { lcp: '0.38s', speed: '99/100', score: 100 },
    layers: [
      { name: 'Layer 1: Polished Glass UI', desc: 'Custom typography, high-contrast accessible tokens', z: 70, color: 'border-blue-500/40 bg-blue-950/20' },
      { name: 'Layer 2: Interaction Logic', desc: 'Spring-driven tactile motion & responsive viewports', z: 45, color: 'border-teal-500/40 bg-teal-950/20' },
      { name: 'Layer 3: Core Web Vitals', desc: 'Pre-rendered static assets & zero layout shifts', z: 20, color: 'border-indigo-500/40 bg-indigo-950/20' },
      { name: 'Layer 4: Direct Conversion API', desc: 'Direct WhatsApp router & SSL secured contact ingress', z: -5, color: 'border-slate-700 bg-slate-900/80' },
    ],
  },
  {
    id: 'healthcare',
    name: 'CarePoint Medical Group',
    industry: 'Healthcare & Clinical',
    accent: '#0D9488',
    headline: 'Patient-First Appointments & Trusted Medical Presence',
    tagline: 'HIPAA-conscious appointment booking with direct WhatsApp consultation routing.',
    metrics: { lcp: '0.42s', speed: '98/100', score: 99 },
    layers: [
      { name: 'Layer 1: Clean Clinical UI', desc: 'Reassuring typography & emergency quick-actions', z: 70, color: 'border-teal-500/40 bg-teal-950/20' },
      { name: 'Layer 2: Real-time Scheduler', desc: 'Live booking slots with SMS & WhatsApp sync', z: 45, color: 'border-blue-500/40 bg-blue-950/20' },
      { name: 'Layer 3: Privacy & Accessibility', desc: 'WCAG AAA color contrast & screen-reader tags', z: 20, color: 'border-emerald-500/40 bg-emerald-950/20' },
      { name: 'Layer 4: Patient Ingress Gate', desc: 'Encrypted inquiry payload routing to clinic staff', z: -5, color: 'border-slate-700 bg-slate-900/80' },
    ],
  },
  {
    id: 'retail',
    name: 'Lumina Home & Living',
    industry: 'Modern E-Commerce',
    accent: '#EA580C',
    headline: 'Curated Architectural Furniture & Bespoke Interiors',
    tagline: 'High-conversion product showcases with 1-click WhatsApp catalog orders.',
    metrics: { lcp: '0.45s', speed: '97/100', score: 98 },
    layers: [
      { name: 'Layer 1: Visual Catalog Grid', desc: 'Optimized WebP imagery & smooth modal galleries', z: 70, color: 'border-amber-500/40 bg-amber-950/20' },
      { name: 'Layer 2: Instant Cart & Quote', desc: 'Zero-friction checkout via WhatsApp direct cart', z: 45, color: 'border-orange-500/40 bg-orange-950/20' },
      { name: 'Layer 3: Edge CDN Delivery', desc: 'Global sub-50ms asset caching & instant load', z: 20, color: 'border-blue-500/40 bg-blue-950/20' },
      { name: 'Layer 4: Order Dispatch Engine', desc: 'Automated receipt & dispatch notifications', z: -5, color: 'border-slate-700 bg-slate-900/80' },
    ],
  },
];

export const Device3DStage: React.FC = () => {
  const [activeSiteIndex, setActiveSiteIndex] = useState(0);
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');
  const [isExploded, setIsExploded] = useState(false);

  const activeSite = SHOWCASE_SITES[activeSiteIndex];

  return (
    <div className="w-full rounded-3xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl p-4 sm:p-7 lg:p-9 relative">
      
      {/* Stage Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono mb-2">
            <Laptop className="w-3.5 h-3.5" />
            <span>Interactive 3D Website Showcase Stage</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {activeSite.name}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
            {activeSite.tagline}
          </p>
        </div>

        {/* Controls: Site Selector + Explode Toggle */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Site tabs */}
          <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
            {SHOWCASE_SITES.map((site, idx) => (
              <button
                key={site.id}
                onClick={() => setActiveSiteIndex(idx)}
                type="button"
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  activeSiteIndex === idx
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {site.industry}
              </button>
            ))}
          </div>

          {/* 3D Exploded Layer View Switch */}
          <button
            type="button"
            onClick={() => setIsExploded(!isExploded)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all duration-200 border cursor-pointer ${
              isExploded
                ? 'bg-teal-600 border-teal-500 text-white shadow-md'
                : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{isExploded ? 'Collapse 3D Layers' : 'Explode 3D Architecture'}</span>
          </button>
        </div>
      </div>

      {/* 3D Interactive Stage Canvas */}
      <div className="relative my-8 min-h-[420px] sm:min-h-[460px] flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800/80 p-4 sm:p-8 perspective-1000">
        
        {/* Device Mode Switcher floating pill */}
        <div className="absolute top-4 right-4 z-30 flex items-center gap-1 bg-slate-900/90 border border-slate-700/80 backdrop-blur-md p-1 rounded-xl">
          <button
            onClick={() => setDeviceMode('desktop')}
            type="button"
            className={`p-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
              deviceMode === 'desktop' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
            title="Desktop Viewport"
          >
            <Laptop className="w-4 h-4" />
          </button>
          <button
            onClick={() => setDeviceMode('mobile')}
            type="button"
            className={`p-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
              deviceMode === 'mobile' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
            title="Mobile Viewport"
          >
            <Smartphone className="w-4 h-4" />
          </button>
        </div>

        {/* Exploded 3D Layer Stack View */}
        {isExploded ? (
          <div className="w-full max-w-2xl py-6 flex flex-col gap-4 relative z-20">
            <div className="text-center text-xs font-mono uppercase tracking-widest text-teal-400 font-bold mb-2">
              Exploded Architectural Stack (3D Z-Planes)
            </div>
            {activeSite.layers.map((layer, index) => (
              <motion.div
                key={layer.name}
                initial={{ opacity: 0, y: 20, rotateX: 25 }}
                animate={{ opacity: 1, y: 0, rotateX: 15 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                style={{ transform: `perspective(800px) rotateX(15deg) translateZ(${layer.z}px)` }}
                className={`p-4 rounded-xl border ${layer.color} backdrop-blur-md shadow-xl flex items-center justify-between gap-4 transition-all`}
              >
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-400" />
                    {layer.name}
                  </div>
                  <div className="text-xs text-slate-300 mt-0.5">{layer.desc}</div>
                </div>
                <span className="text-[11px] font-mono text-slate-400 bg-black/40 px-2 py-1 rounded border border-white/10 shrink-0">
                  Z-index: +{layer.z}
                </span>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Normal Interactive 3D Perspective Device Mockup */
          <motion.div
            animate={{
              rotateX: [6, 4, 6],
              rotateY: [-4, 4, -4],
              y: [-4, 4, -4],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ transformStyle: 'preserve-3d', transformPerspective: 1200 }}
            className={`transition-all duration-300 z-20 ${
              deviceMode === 'desktop'
                ? 'w-full max-w-2xl rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl shadow-black/80 overflow-hidden'
                : 'w-[280px] sm:w-[320px] rounded-[36px] bg-slate-900 border-4 border-slate-700 shadow-2xl shadow-black/80 overflow-hidden'
            }`}
          >
            {/* Window / Notch Header */}
            {deviceMode === 'desktop' ? (
              <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                </div>
                <div className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-3 h-3 text-teal-400" />
                  <span>https://{activeSite.id}.globallyitsolutions.com</span>
                </div>
                <div className="w-12" />
              </div>
            ) : (
              <div className="pt-3 pb-2 px-6 bg-slate-950 flex justify-center border-b border-slate-800">
                <div className="w-20 h-4 bg-slate-900 rounded-full" />
              </div>
            )}

            {/* Inner Mockup Content */}
            <div className="p-6 sm:p-8 bg-slate-900/90 text-white min-h-[260px] flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-blue-500/20 text-blue-300 text-[11px] font-semibold uppercase tracking-wider mb-3">
                  <span>{activeSite.industry}</span>
                </div>
                <h4 className="text-lg sm:text-xl font-extrabold text-white leading-snug">
                  {activeSite.headline}
                </h4>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {activeSite.tagline}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-teal-400 font-bold">LCP: {activeSite.metrics.lcp}</span>
                  <span className="text-slate-600">&bull;</span>
                  <span className="text-xs font-mono text-blue-400 font-bold">Speed: {activeSite.metrics.speed}</span>
                </div>

                <a
                  href={getWhatsAppUrl('website', `Hello Globally IT Solutions, I saw your ${activeSite.industry} website mockup. I would like a live demo.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  <span>Build This</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Bottom Features Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800 text-xs text-slate-300">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold text-xs shrink-0">1</div>
          <span><strong>Ultra-Fast Performance:</strong> Sub-second LCP scores with 0 layout shift.</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-teal-500/10 text-teal-400 flex items-center justify-center font-bold text-xs shrink-0">2</div>
          <span><strong>Direct WhatsApp Hooks:</strong> Pre-filled instant conversion triggers.</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold text-xs shrink-0">3</div>
          <span><strong>100% Mobile Ready:</strong> Seamless responsive layouts for all screen sizes.</span>
        </div>
      </div>

    </div>
  );
};
