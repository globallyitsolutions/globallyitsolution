import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MessageSquare } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { GooeyNav } from './reactbits/GooeyNav';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070F1E]/95 backdrop-blur-md border-b border-slate-800 shadow-2xl py-3.5'
          : 'bg-[#070F1E]/80 backdrop-blur-sm border-b border-slate-800/60 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl p-1"
            aria-label="Globally IT Solutions Home"
          >
            <div className="w-10 h-10 bg-slate-900 border border-blue-500/40 flex items-center justify-center rounded-xl shadow-lg shrink-0 group-hover:border-blue-400 transition-colors">
              <div className="w-4 h-4 border-2 border-blue-400 rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-white">
                Globally IT Solutions
              </span>
              <span className="text-[11px] font-mono text-teal-400 font-semibold tracking-wider uppercase">
                Websites &bull; AI Automation
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with GooeyNav */}
          <div className="hidden lg:flex items-center bg-slate-900/80 border border-slate-800 px-2 py-1 rounded-full backdrop-blur-md shadow-inner">
            <GooeyNav
              items={navLinks.map((link) => ({ label: link.name, href: link.href }))}
              particleCount={12}
              particleDistances={[50, 10]}
              particleR={80}
              animationTime={450}
              timeVariance={200}
              colors={[1, 2, 3, 4]}
            />
          </div>

          {/* Desktop CTA Action */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getWhatsAppUrl('quote')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
              id="navbar-get-quote-btn"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={getWhatsAppUrl('quote')}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden inline-flex items-center justify-center p-2 rounded-xl bg-slate-900 text-teal-400 border border-slate-800 cursor-pointer"
              aria-label="Get a Quote on WhatsApp"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-dropdown-menu"
            className="lg:hidden mt-3 pt-3 pb-5 border border-slate-800 bg-slate-900/95 backdrop-blur-xl rounded-2xl px-4 shadow-2xl"
          >
            <div className="flex flex-col gap-1 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-sm font-semibold text-slate-200 hover:text-blue-400 hover:bg-slate-800/60 rounded-xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-3 pt-3 border-t border-slate-800 flex flex-col gap-2.5">
              <a
                href={getWhatsAppUrl('quote')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-center transition-colors shadow-md shadow-blue-600/30 text-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Get a Quote via WhatsApp</span>
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold text-center border border-slate-700 transition-colors"
              >
                Send Enquiry Form
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
