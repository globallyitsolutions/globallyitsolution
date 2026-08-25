import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Bot, 
  Smartphone, 
  Monitor, 
  Tablet, 
  Play, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Database, 
  MessageSquare, 
  Mail, 
  Code2, 
  Sparkles,
  RefreshCw
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export const LiveTechEngine: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'website' | 'automation'>('website');
  const [viewport, setViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  
  // Automation pipeline simulation state
  const [isRunningAutomation, setIsRunningAutomation] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [logs, setLogs] = useState<string[]>([
    'Pipeline ready. Standby for incoming webhook...',
  ]);

  const runAutomationDemo = () => {
    if (isRunningAutomation) return;
    setIsRunningAutomation(true);
    setActiveStep(1);
    setLogs(['[09:30:01] ⚡ Webhook triggered: Incoming WhatsApp lead received...']);

    setTimeout(() => {
      setActiveStep(2);
      setLogs((prev) => [
        ...prev,
        '[09:30:02] 🧠 AI Parser: Extracted name="Dr. Rao", service="Healthcare Website", budget="High Priority"',
      ]);
    }, 1200);

    setTimeout(() => {
      setActiveStep(3);
      setLogs((prev) => [
        ...prev,
        '[09:30:03] 📊 Data Sync: Row created in Google Sheets & CRM assigned to lead team.',
      ]);
    }, 2400);

    setTimeout(() => {
      setActiveStep(4);
      setLogs((prev) => [
        ...prev,
        '[09:30:04] ✉️ Instant Response: Sent personalized WhatsApp confirmation + team Slack alert.',
        '[09:30:04] ✅ Pipeline executed in 1.42s (0 manual effort).',
      ]);
      setIsRunningAutomation(false);
    }, 3600);
  };

  return (
    <div className="w-full rounded-2xl bg-slate-900/95 border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl">
      {/* Top Header / Mode Switcher */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-950/70">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline">
            globally-it-engine // {activeTab === 'website' ? 'web-runtime' : 'ai-pipeline'}
          </span>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1">
          <button
            type="button"
            onClick={() => setActiveTab('website')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'website'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Web Architecture</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('automation')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'automation'
                ? 'bg-teal-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Bot className="w-3.5 h-3.5" />
            <span>AI Automation</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-5 sm:p-6 min-h-[380px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {activeTab === 'website' ? (
            <motion.div
              key="website-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              {/* Controls bar */}
              <div className="flex items-center justify-between flex-wrap gap-2 text-xs">
                <div className="flex items-center gap-1.5 bg-slate-950/80 px-2.5 py-1 rounded-lg border border-slate-800 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono font-medium">Lighthouse Score: 99/100</span>
                </div>

                <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
                  <button
                    type="button"
                    onClick={() => setViewport('desktop')}
                    className={`p-1.5 rounded ${viewport === 'desktop' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
                    title="Desktop Preview"
                  >
                    <Monitor className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewport('tablet')}
                    className={`p-1.5 rounded ${viewport === 'tablet' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
                    title="Tablet Preview"
                  >
                    <Tablet className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewport('mobile')}
                    className={`p-1.5 rounded ${viewport === 'mobile' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
                    title="Mobile Preview"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Interactive Mockup Viewport */}
              <div className="flex justify-center transition-all duration-300">
                <div
                  className={`rounded-xl border border-slate-700/80 bg-slate-950 p-4 transition-all duration-300 shadow-inner ${
                    viewport === 'desktop'
                      ? 'w-full'
                      : viewport === 'tablet'
                      ? 'w-[80%]'
                      : 'w-[55%] max-w-[280px]'
                  }`}
                >
                  {/* Browser mockup header */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                      <span className="text-[11px] font-mono text-slate-300 font-bold">yourbusiness.com</span>
                    </div>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                      HTTPS &bull; 0.3s LCP
                    </span>
                  </div>

                  {/* Mock content */}
                  <div className="space-y-3">
                    <div className="h-3 w-3/4 rounded bg-slate-800 animate-pulse" />
                    <div className="h-2 w-full rounded bg-slate-800/60" />
                    <div className="h-2 w-5/6 rounded bg-slate-800/60" />
                    
                    {/* Interactive Website Components */}
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-[11px]">
                        <div className="font-bold text-blue-400 mb-0.5">⚡ Fast UI</div>
                        <div className="text-[10px] text-slate-400">Mobile-optimized</div>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-[11px]">
                        <div className="font-bold text-teal-400 mb-0.5">💬 1-Click Chat</div>
                        <div className="text-[10px] text-slate-400">Direct WhatsApp</div>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <a
                        href={getWhatsAppUrl('website')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-[11px] shadow-sm transition-colors cursor-pointer"
                      >
                        <MessageSquare className="w-3 h-3" />
                        <span>Enquire on WhatsApp</span>
                      </a>
                      <span className="text-[10px] font-mono text-slate-400">Live CTA</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech Specs */}
              <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-800 text-center">
                <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800">
                  <div className="text-[10px] text-slate-400 font-mono">FRAMEWORK</div>
                  <div className="text-xs font-bold text-white">React + Vite</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800">
                  <div className="text-[10px] text-slate-400 font-mono">CONVERSION</div>
                  <div className="text-xs font-bold text-teal-400">WhatsApp Engine</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800">
                  <div className="text-[10px] text-slate-400 font-mono">DEPLOYMENT</div>
                  <div className="text-xs font-bold text-blue-400">SSL &amp; Custom Domain</div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="automation-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              {/* Trigger Bar */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-teal-400 font-bold uppercase tracking-wider">
                  Automated Pipeline Runner
                </span>
                <button
                  type="button"
                  onClick={runAutomationDemo}
                  disabled={isRunningAutomation}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-md shadow-teal-500/20 transition-all cursor-pointer disabled:opacity-50"
                >
                  <Play className={`w-3.5 h-3.5 ${isRunningAutomation ? 'animate-spin' : ''}`} />
                  <span>{isRunningAutomation ? 'Executing Pipeline...' : 'Test Run Trigger'}</span>
                </button>
              </div>

              {/* Pipeline Nodes Flow */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 1, name: '1. Ingest', desc: 'WhatsApp / Web', icon: MessageSquare },
                  { id: 2, name: '2. AI Parse', desc: 'Intent & Priority', icon: Bot },
                  { id: 3, name: '3. Sync', desc: 'Sheets / CRM', icon: Database },
                  { id: 4, name: '4. Dispatch', desc: 'Alert & Follow-up', icon: Mail },
                ].map((node) => {
                  const NodeIcon = node.icon;
                  const isActive = activeStep >= node.id;
                  const isCurrent = activeStep === node.id && isRunningAutomation;

                  return (
                    <div
                      key={node.id}
                      className={`p-3 rounded-xl border transition-all text-left relative overflow-hidden ${
                        isCurrent
                          ? 'bg-teal-950/70 border-teal-400 ring-2 ring-teal-500/40 shadow-lg'
                          : isActive
                          ? 'bg-slate-900 border-teal-500/60 text-white'
                          : 'bg-slate-950/60 border-slate-800 text-slate-400'
                      }`}
                    >
                      {isCurrent && (
                        <div className="absolute top-0 left-0 right-0 h-0.5 bg-teal-400 animate-pulse" />
                      )}
                      <div className="flex items-center justify-between mb-1.5">
                        <NodeIcon className={`w-4 h-4 ${isActive ? 'text-teal-400' : 'text-slate-500'}`} />
                        {isActive && <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />}
                      </div>
                      <div className="text-xs font-bold text-white">{node.name}</div>
                      <div className="text-[10px] text-slate-400">{node.desc}</div>
                    </div>
                  );
                })}
              </div>

              {/* Live Terminal Log Output */}
              <div className="rounded-xl bg-slate-950 border border-slate-800 p-3 font-mono text-[11px] text-slate-300 space-y-1 max-h-28 overflow-y-auto">
                <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1 flex items-center justify-between">
                  <span>Execution Stream:</span>
                  <span className="text-emerald-400">● LIVE</span>
                </div>
                {logs.map((log, index) => (
                  <div key={index} className="leading-tight text-teal-300/90">
                    {log}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Status Bar */}
      <div className="px-5 py-3 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between text-xs text-slate-400">
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-teal-400" />
          <span>Tailored specifically for business operations</span>
        </span>
        <a
          href={getWhatsAppUrl(activeTab === 'website' ? 'website' : 'automation')}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1 cursor-pointer"
        >
          <span>Discuss This Architecture</span>
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
