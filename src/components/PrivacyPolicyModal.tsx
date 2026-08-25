import React, { useEffect } from 'react';
import { X, ShieldCheck, Mail, Lock } from 'lucide-react';
import { OFFICIAL_EMAIL } from '../utils/whatsapp';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[85vh] bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col text-left text-slate-300"
        role="dialog"
        aria-labelledby="privacy-modal-title"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-xs">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 id="privacy-modal-title" className="text-lg font-bold text-white">Privacy Policy</h3>
              <p className="text-xs font-mono text-slate-400">Globally IT Solutions &bull; Last updated 2026</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close Privacy Policy Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Scrollable */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs sm:text-sm leading-relaxed text-slate-300">
          <section className="space-y-2">
            <h4 className="font-bold text-white text-base flex items-center gap-2">
              <Lock className="w-4 h-4 text-blue-400" />
              1. Information Collection &amp; Purpose
            </h4>
            <p>
              Globally IT Solutions respects your business privacy. When you contact us through WhatsApp, email, or our website enquiry forms, we only collect the information you voluntarily provide (such as your name, business name, contact email, phone number, and project requirements).
            </p>
            <p>
              This information is used strictly to respond to your inquiry, provide quotes, evaluate technical feasibility, and communicate about ongoing client projects.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-bold text-white text-base">2. Non-Disclosure &amp; Project Confidentiality</h4>
            <p>
              We treat all client business logic, operational workflows, customer data structures, and proprietary project specifications as strictly confidential. We never sell, rent, or disclose client contact information or proprietary business requirements to third-party advertisers.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-bold text-white text-base">3. Third-Party Integrations</h4>
            <p>
              When developing websites or automation solutions, any third-party APIs (such as WhatsApp Business API, email dispatchers, or hosting infrastructure) operate under their respective enterprise security standards. Credentials and private tokens remain under your direct ownership.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-bold text-white text-base">4. Contacting Us Regarding Your Data</h4>
            <p>
              If you have any questions about this Privacy Policy or wish to update any communication details, you may contact our official inbox directly at:
            </p>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-blue-400 font-mono text-xs font-semibold">
              <a href={`mailto:${OFFICIAL_EMAIL}`} className="underline">
                {OFFICIAL_EMAIL}
              </a>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/60 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors cursor-pointer shadow-md shadow-blue-600/30"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
