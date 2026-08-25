import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CoreServices } from './components/CoreServices';
import { TrustProcess } from './components/TrustProcess';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { ClickSpark } from './components/reactbits/ClickSpark';
import { Particles } from './components/reactbits/Particles';

export default function App() {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  return (
    <ClickSpark
      sparkColor="#38bdf8"
      sparkSize={12}
      sparkRadius={22}
      sparkCount={8}
      duration={450}
      extraScale={1.1}
    >
      <div className="min-h-screen bg-[#070F1E] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white relative overflow-hidden">
        
        {/* Ambient Interactive WebGL Particles Background */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-85">
          <Particles
            particleCount={220}
            particleSpread={11}
            speed={0.14}
            particleColors={['#38bdf8', '#2dd4bf', '#818cf8', '#ffffff', '#60a5fa']}
            moveParticlesOnHover={true}
            particleHoverFactor={0.9}
            alphaParticles={false}
            particleBaseSize={105}
            sizeRandomness={1.1}
            cameraDistance={19}
            disableRotation={false}
            pixelRatio={typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 2) : 1}
          />
        </div>

        {/* Sticky Top Navigation */}
        <Navbar />

        {/* Streamlined 4-Section Flow */}
        <main className="flex-1 relative z-10">
          {/* 1. Hero Section with Live Interactive Tech Engine & ElectricBorder */}
          <Hero />

          {/* 2. Flagship Core Services */}
          <CoreServices />

          {/* 3. Streamlined 3-Step Process & Trust Commitments */}
          <TrustProcess />

          {/* 4. Contact & Direct Enquiry Channels */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer onOpenPrivacyPolicy={() => setPrivacyModalOpen(true)} />

        {/* Floating WhatsApp Action Button */}
        <FloatingWhatsApp />

        {/* Privacy Policy Modal */}
        <PrivacyPolicyModal 
          isOpen={privacyModalOpen} 
          onClose={() => setPrivacyModalOpen(false)} 
        />
      </div>
    </ClickSpark>
  );
}
