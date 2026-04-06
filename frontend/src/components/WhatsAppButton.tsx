import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../portfolioData';

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open(`https://wa.me/${portfolioData.whatsappNumber}`, '_blank');
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#128C7E] bg-[#25D366] shadow-[0_8px_32px_rgba(37,211,102,0.55),inset_0_1px_0_rgba(255,255,255,0.22)] transition-transform hover:scale-110 active:scale-95 sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"
      style={{ marginBottom: 'max(0px, env(safe-area-inset-bottom))', marginRight: 'max(0px, env(safe-area-inset-right))' }}
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <span className="absolute inset-0 motion-safe:animate-ping rounded-full bg-white/15" />
      <img
        src="/whatsapp-logo.svg"
        alt=""
        className="relative h-[1.75rem] w-[1.75rem] drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)] sm:h-[1.95rem] sm:w-[1.95rem]"
        width={28}
        height={28}
        decoding="async"
      />
    </motion.button>
  );
}
