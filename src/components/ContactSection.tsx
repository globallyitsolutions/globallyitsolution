import React, { useState } from 'react';
import { 
  Mail, 
  MessageSquare, 
  PhoneCall, 
  Send, 
  ExternalLink,
  Copy,
  Check,
  AlertCircle
} from 'lucide-react';
import { ContactFormData, ServiceType } from '../types';
import { 
  OFFICIAL_EMAIL, 
  generateFormWhatsAppUrl, 
  getWhatsAppUrl, 
  getTelUrl, 
  getMailtoUrl 
} from '../utils/whatsapp';
import { TiltCard } from './3d/TiltCard';
import { MagneticButton } from './3d/MagneticButton';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    service: 'Business Website',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const services: ServiceType[] = [
    'Business Website',
    'AI & Business Automation',
    'Custom Web Application',
    'Website Maintenance',
    'Other',
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappUrl = generateFormWhatsAppUrl(formData);
    setSubmitted(true);
    
    // Open WhatsApp in new window/tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(OFFICIAL_EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-transparent text-white border-b border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono mb-4 backdrop-blur-md">
            <span>Direct Channels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let's Talk
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Have a project, business requirement, or idea you'd like to discuss? Get in touch with Globally IT Solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: 3 Contact Methods with 3D TiltCards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Card 1: WhatsApp (Primary) */}
            <TiltCard maxTilt={8} className="rounded-2xl">
              <div className="p-7 rounded-2xl bg-slate-900 border-2 border-teal-500/80 shadow-2xl backdrop-blur-md">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-teal-400 font-bold">Fastest Response</span>
                    <h3 className="text-xl font-bold text-white">WhatsApp</h3>
                  </div>
                </div>
                <p className="text-xs text-slate-300 mb-5 leading-relaxed font-normal">
                  Connect directly with our team on WhatsApp for prompt discussions, inquiries, and demo requests.
                </p>
                <MagneticButton strength={10} className="w-full">
                  <a
                    href={getWhatsAppUrl('demo')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-sm font-bold transition-all shadow-md shadow-teal-500/30 cursor-pointer"
                    id="contact-whatsapp-btn"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Request a Demo on WhatsApp</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                </MagneticButton>
              </div>
            </TiltCard>

            {/* Contact Card 2: Official Email */}
            <TiltCard maxTilt={8} className="rounded-2xl">
              <div className="p-7 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-blue-400 font-bold">Official Email</span>
                    <h3 className="text-xl font-bold text-white">Email Us</h3>
                  </div>
                </div>
                <p className="text-xs text-slate-300 mb-4 leading-relaxed font-normal">
                  Send your detailed project briefs, RFP specifications, or inquiries directly to our business inbox.
                </p>
                
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between gap-2 mb-3">
                  <a
                    href={getMailtoUrl('Project Inquiry for Globally IT Solutions')}
                    className="text-sm font-mono font-semibold text-blue-400 hover:text-blue-300 underline underline-offset-4 break-all"
                    id="contact-email-link"
                  >
                    {OFFICIAL_EMAIL}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs flex items-center gap-1 flex-shrink-0 cursor-pointer transition-colors"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-teal-400" />
                        <span className="text-teal-300 text-[11px] font-bold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[11px] font-medium">Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <a
                  href={getMailtoUrl('Project Inquiry for Globally IT Solutions')}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold transition-colors border border-slate-700 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Open Mail Client</span>
                </a>
              </div>
            </TiltCard>

            {/* Contact Card 3: Phone */}
            <TiltCard maxTilt={8} className="rounded-2xl">
              <div className="p-7 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
                    <PhoneCall className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-slate-400 font-bold">Direct Call</span>
                    <h3 className="text-xl font-bold text-white">Phone Support</h3>
                  </div>
                </div>
                <p className="text-xs text-slate-300 mb-4 leading-relaxed font-normal">
                  Prefer to speak over voice? Tap below to initiate a phone consultation with our team.
                </p>
                <a
                  href={getTelUrl()}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold transition-colors border border-slate-700 cursor-pointer"
                  id="contact-call-btn"
                >
                  <PhoneCall className="w-4 h-4 text-teal-400" />
                  <span>Call Us</span>
                </a>
              </div>
            </TiltCard>

          </div>

          {/* Right Column: Contact & Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl relative backdrop-blur-md">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-1.5">Send an Enquiry</h3>
                <p className="text-sm text-slate-300">
                  Fill out your business requirements below to initiate a direct structured inquiry.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4" id="enquiry-form">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Your Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Name <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Alex Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>

                  {/* Business Name */}
                  <div>
                    <label htmlFor="businessName" className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Business Name <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      required
                      value={formData.businessName}
                      onChange={handleInputChange}
                      placeholder="e.g. Apex Health Clinic"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. alex@business.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                </div>

                {/* Service Required */}
                <div>
                  <label htmlFor="service" className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Service Required <span className="text-blue-400">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-medium"
                  >
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-slate-900 text-white">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Project Details / Requirement <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Briefly describe what you would like to build or automate..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-y"
                  />
                </div>

                {/* Notice on WhatsApp dispatch */}
                <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-slate-300 text-xs flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">
                    Submitting this form formats your structured inquiry and immediately opens <strong>WhatsApp</strong> to connect directly with our engineering team.
                  </span>
                </div>

                {/* Submit Button with MagneticButton */}
                <MagneticButton strength={10} className="w-full">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md shadow-blue-600/30 transition-all cursor-pointer"
                    id="enquiry-submit-btn"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Enquiry via WhatsApp</span>
                  </button>
                </MagneticButton>

                {submitted && (
                  <div className="p-4 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs flex items-center gap-2 font-medium">
                    <Check className="w-4 h-4 text-teal-400 flex-shrink-0" />
                    <span>WhatsApp launched with your enquiry details. You can also email us directly at {OFFICIAL_EMAIL}.</span>
                  </div>
                )}

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
