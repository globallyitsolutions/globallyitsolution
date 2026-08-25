import React from 'react';
import { Globe, MessageSquare, PhoneCall, Mail, ShieldCheck, ArrowUp } from 'lucide-react';
import { OFFICIAL_EMAIL, getWhatsAppUrl, getTelUrl, getMailtoUrl } from '../utils/whatsapp';

interface FooterProps {
  onOpenPrivacyPolicy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacyPolicy }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050A14]/90 backdrop-blur-md border-t border-slate-800 pt-16 pb-12 text-slate-400 text-sm relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-blue-500/40 flex items-center justify-center text-blue-400 shadow-md">
                <Globe className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Globally IT Solutions</span>
            </div>
            
            <p className="text-base font-bold text-slate-200">
              Build Your Digital Presence. Automate Your Business.
            </p>
            
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-normal">
              We build professional websites and practical AI-powered automations that help businesses establish their digital presence, attract inquiries and eliminate repetitive work.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={getWhatsAppUrl('general')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-300 hover:text-white hover:bg-teal-500/20 text-xs font-bold transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={getTelUrl()}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white text-xs font-bold transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-blue-400" />
                <span>Call Us</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">Core Solutions</a>
              </li>
              <li>
                <a href="#process" className="hover:text-blue-400 transition-colors">Process &amp; Commitments</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">Direct Communication</h4>
            
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-slate-400">Official Business Email:</div>
                  <a
                    href={getMailtoUrl()}
                    className="text-white hover:text-blue-400 font-mono font-medium underline underline-offset-2 break-all"
                  >
                    {OFFICIAL_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-slate-400">Business WhatsApp:</div>
                  <a
                    href={getWhatsAppUrl('general')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 hover:text-teal-300 font-medium"
                  >
                    Direct Engineering Chat Available
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-slate-400">Client Confidentiality:</div>
                  <span className="text-slate-300">Protected project briefs &amp; NDA compliance</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>&copy; 2026 Globally IT Solutions. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacyPolicy}
              type="button"
              className="text-slate-400 hover:text-white transition-colors underline underline-offset-4 cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={scrollToTop}
              type="button"
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
