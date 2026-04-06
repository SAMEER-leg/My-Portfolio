import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, X } from 'lucide-react';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectName?: string;
}

export default function ComingSoonModal({ isOpen, onClose, projectName }: ComingSoonModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="glass-panel relative w-full max-w-md overflow-hidden rounded-[2.5rem] p-8 text-center sm:p-12 amber-glow"
          >
            <button
              onClick={onClose}
              className="absolute right-6 top-6 text-white/40 transition-colors hover:text-amber-bright"
            >
              <X size={24} />
            </button>

            <div className="mb-8 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-amber-gold/10 text-amber-gold shadow-[0_0_40px_rgba(217,162,14,0.15)]">
                <Clock size={40} className="animate-pulse" />
              </div>
            </div>

            <h3 className="mb-4 font-display text-3xl font-extrabold tracking-tighter">
              <span className="amber-heading">Coming</span> Soon
            </h3>
            
            <p className="mb-8 text-lg leading-relaxed text-white/60">
              The live preview for <span className="font-bold text-white">{projectName || 'this project'}</span> is currently pending and will be available soon.
            </p>

            <button
              onClick={onClose}
              className="w-full rounded-full bg-gradient-to-r from-amber-bright via-amber-gold to-amber-dark py-4 text-lg font-bold text-black shadow-[0_8px_32px_rgba(217,162,14,0.25)] transition-transform active:scale-95"
            >
              Got it
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
