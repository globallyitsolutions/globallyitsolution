import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside 
      aria-label="Instant WhatsApp chat"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3"
      onMouseEnter={() => setShowTooltip(true)}
    >
      {/* Tooltip on desktop with motion transition */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="hidden md:flex items-center gap-2 bg-slate-900/95 text-white text-xs font-semibold px-3.5 py-2 rounded-xl border border-slate-700 shadow-2xl backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span>Have a question? Chat with us</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="text-slate-400 hover:text-white ml-1 p-0.5 cursor-pointer rounded-md transition-colors"
              aria-label="Dismiss chat hint"
              type="button"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button with spring entrance & scale-down click feedback */}
      <motion.div
        initial={{ scale: 0, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 18,
          delay: 0.5,
        }}
      >
        <motion.a
          id="floating-whatsapp-btn"
          href={getWhatsAppUrl('general')}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Globally IT Solutions"
          title="Chat with Globally IT Solutions on WhatsApp"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.88 }}
          onMouseEnter={() => setShowTooltip(true)}
          className="w-14 h-14 rounded-full bg-teal-500 hover:bg-teal-400 active:bg-teal-600 text-slate-950 flex items-center justify-center shadow-2xl shadow-teal-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 cursor-pointer border-2 border-teal-300/50 transition-colors"
        >
          <MessageSquare className="w-6 h-6" />
        </motion.a>
      </motion.div>
    </aside>
  );
};
