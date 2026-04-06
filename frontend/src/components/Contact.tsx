import React, { useCallback, useId, useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';
import { Send, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../portfolioData';

type FormData = {
  name: string;
  email: string;
  message: string;
};

/** Pendant + ball-chain pull (reads like a real pull-switch) — compact so it never covers inputs */
function PendantLamp({
  revealed,
  pulling,
  onPull,
  gradId,
}: {
  revealed: boolean;
  pulling: boolean;
  onPull: () => void;
  gradId: string;
}) {
  const beadYs = [118, 126, 133, 140] as const;

  return (
    <div className="relative flex w-[128px] flex-col items-center sm:w-[140px]">
      <svg viewBox="0 0 120 152" className="h-[168px] w-full overflow-visible sm:h-[178px]" aria-hidden>
        <defs>
          <radialGradient id={`${gradId}-bulb`} cx="50%" cy="42%" r="60%">
            <stop offset="0%" stopColor="#fffcef" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#ffe9a8" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#d9a20e" stopOpacity="0" />
          </radialGradient>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff6dc" />
            <stop offset="30%" stopColor="#e8b82a" />
            <stop offset="75%" stopColor="#7a5610" />
            <stop offset="100%" stopColor="#1c1408" />
          </linearGradient>
          <linearGradient id={`${gradId}-shadeSide`} x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#2a1f0a" stopOpacity="0.55" />
            <stop offset="45%" stopColor="#2a1f0a" stopOpacity="0" />
            <stop offset="100%" stopColor="#fff4d4" stopOpacity="0.12" />
          </linearGradient>
          <linearGradient id={`${gradId}-rim`} x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#ffe9a8" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#4a3408" stopOpacity="0.7" />
          </linearGradient>
          <radialGradient id={`${gradId}-bead`} cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#fff8e4" />
            <stop offset="55%" stopColor="#d9a20e" />
            <stop offset="100%" stopColor="#4a3208" />
          </radialGradient>
          <filter id={`${gradId}-softShadow`} x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#000" floodOpacity="0.45" />
          </filter>
        </defs>

        <g filter={`url(#${gradId}-softShadow)`}>
          <ellipse cx="60" cy="9" rx="22" ry="6" fill="#0d0b08" stroke="#8a6410" strokeWidth="0.9" />
          <rect x="56" y="8" width="8" height="9" rx="1" fill="#2a2418" stroke="#5a420c" strokeWidth="0.4" />
          {[0, 1, 2].map((i) => (
            <ellipse
              key={i}
              cx="60"
              cy={22 + i * 8}
              rx="4.5"
              ry="3.2"
              fill="none"
              stroke="#c9950c"
              strokeWidth="1.8"
              opacity={0.85 - i * 0.06}
            />
          ))}

          <path
            d="M 36 46 
               C 36 40, 48 36, 60 35.5 
               C 72 36, 84 40, 84 46
               L 95 93 
               C 95 102, 79 110.5, 60 112.5 
               C 41 110.5, 25 102, 25 93 
               L 36 46 Z"
            fill={`url(#${gradId})`}
            stroke="#d4a84a"
            strokeWidth="1"
            strokeLinejoin="round"
          />
          <path
            d="M 36 46 
               C 36 40, 48 36, 60 35.5 
               C 72 36, 84 40, 84 46
               L 95 93 
               C 95 102, 79 110.5, 60 112.5 
               C 41 110.5, 25 102, 25 93 
               L 36 46 Z"
            fill={`url(#${gradId}-shadeSide)`}
          />
          <path
            d="M 42 50 Q 60 44, 78 50 L 88 90 Q 60 98, 32 90 Z"
            fill="none"
            stroke="white"
            strokeOpacity="0.1"
            strokeWidth="1.5"
          />
          <ellipse cx="60" cy="93" rx="33" ry="6.5" fill="none" stroke={`url(#${gradId}-rim)`} strokeWidth="1.4" />

          <motion.ellipse
            cx="60"
            cy="78"
            rx="19"
            ry="15"
            fill={`url(#${gradId}-bulb)`}
            initial={false}
            animate={{ opacity: revealed ? 0.9 : 0.1 }}
            transition={{ duration: 0.45 }}
          />
        </g>

        {/* Ball-chain pull (typical switch) — short, ends above HTML knob */}
        <line x1="60" y1="112.5" x2="60" y2="116" stroke="#5a3f0a" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
        {beadYs.map((cy, i) => (
          <circle
            key={i}
            cx="60"
            cy={cy}
            r={i === beadYs.length - 1 ? 2.8 : 3.2}
            fill={`url(#${gradId}-bead)`}
            stroke="#6b4810"
            strokeWidth="0.35"
          />
        ))}
      </svg>

      <motion.div
        className="relative z-[2] -mt-1 flex flex-col items-center"
        animate={{ y: pulling ? 14 : 0 }}
        transition={{ type: 'spring', stiffness: 440, damping: 28 }}
      >
        <button
          type="button"
          onClick={onPull}
          aria-expanded={revealed}
          aria-label={
            revealed
              ? 'Click the cord to turn off the lamp and hide the form'
              : 'Click the cord to turn on the lamp and show the form'
          }
          className="group touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-bright/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black/90"
        >
          <span
            className="relative block h-8 w-8 rounded-full shadow-[0_2px_8px_rgba(217,162,14,0.45),0_0_14px_rgba(255,220,150,0.22),inset_0_-3px_6px_rgba(60,42,8,0.4),inset_0_2px_6px_rgba(255,255,255,0.35)] transition-transform group-hover:scale-[1.06] group-active:scale-95"
            style={{
              background:
                'radial-gradient(circle at 32% 26%, #fffaf0 0%, #ffe9a8 22%, #d9a20e 55%, #8a6410 100%)',
            }}
          />
        </button>
      </motion.div>
    </div>
  );
}

export default function Contact() {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const reduceMotion = useReducedMotion();
  const uid = useId();
  const gradId = `lamp-shade-${uid.replace(/:/g, '')}`;

  const [formRevealed, setFormRevealed] = useState(false);
  const [cordPulling, setCordPulling] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const onSubmit = async (data: FormData) => {
    setStatus('sending');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        reset();
        setTimeout(() => {
          setFormRevealed(false);
          setStatus('idle');
        }, 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
    }
  };

  const handleCordPull = useCallback(() => {
    if (reduceMotion) {
      setFormRevealed((open) => !open);
      return;
    }
    setCordPulling(true);
    window.setTimeout(() => {
      setFormRevealed((open) => !open);
      setCordPulling(false);
    }, 50);
  }, [reduceMotion]);

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:py-28">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        <div className="min-w-0 space-y-8 sm:space-y-10">
          <div>
            <h2 className="mb-4 font-display text-4xl font-extrabold tracking-tighter sm:mb-6 sm:text-5xl md:text-7xl">
              <span className="amber-heading">Get in</span>{' '}
              <span className="text-white">Touch</span>
            </h2>
            <p className="max-w-md text-base leading-relaxed text-white/65 sm:text-lg">
              Have a project in mind? Let&apos;s build something extraordinary together.
            </p>
          </div>

          <div className="space-y-8">
            <motion.div className="group flex min-w-0 items-center gap-4 sm:gap-6" whileHover={{ x: 8 }}>
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-amber-gold shadow-inner transition-all group-hover:border-amber-gold/30 group-hover:bg-amber-gold group-hover:text-black group-hover:shadow-[0_0_24px_rgba(217,162,14,0.25)] sm:h-16 sm:w-16">
                <Mail className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold uppercase tracking-widest text-white/40">Email</p>
                <p className="break-words text-base font-bold text-white transition-colors group-hover:text-amber-gold sm:text-lg md:text-xl">
                  {portfolioData.email}
                </p>
              </div>
            </motion.div>
            <motion.div className="group flex min-w-0 items-center gap-4 sm:gap-6" whileHover={{ x: 8 }}>
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-amber-gold shadow-inner transition-all group-hover:border-amber-gold/30 group-hover:bg-amber-gold group-hover:text-black group-hover:shadow-[0_0_24px_rgba(217,162,14,0.25)] sm:h-16 sm:w-16">
                <Phone className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold uppercase tracking-widest text-white/40">WhatsApp</p>
                <p className="break-all font-mono text-base font-bold text-white transition-colors group-hover:text-amber-gold sm:break-normal sm:text-lg md:text-xl">
                  {portfolioData.whatsappDisplay}
                </p>
              </div>
            </motion.div>
            <motion.div className="group flex min-w-0 items-center gap-4 sm:gap-6" whileHover={{ x: 8 }}>
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-amber-gold shadow-inner transition-all group-hover:border-amber-gold/30 group-hover:bg-amber-gold group-hover:text-black group-hover:shadow-[0_0_24px_rgba(217,162,14,0.25)] sm:h-16 sm:w-16">
                <MapPin className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold uppercase tracking-widest text-white/40">Location</p>
                <p className="text-base font-bold text-white transition-colors group-hover:text-amber-gold sm:text-lg md:text-xl">
                  Remote / Worldwide
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wide lamp + form — lamp sits inside top of card, light spills downward */}
        <div className="relative mx-auto w-full max-w-[min(100%,42rem)] lg:mx-0 lg:max-w-none lg:justify-self-end xl:max-w-[44rem]">
          <p className="mx-auto mb-4 max-w-md text-pretty px-2 text-center text-sm leading-relaxed text-white/50">
            Click the cord to <span className="text-amber-bright/85">toggle</span> the lamp &amp; form. After you send a message, the lamp turns off on its own.
          </p>

          <div
            className={`relative overflow-visible rounded-[2.5rem] border transition-[border-color,box-shadow,background-color,min-height] duration-500 md:rounded-[3rem] ${
              formRevealed
                ? 'min-h-0 border-white/[0.12] bg-white/[0.04] shadow-[0_0_0_1px_rgba(217,162,14,0.08),0_24px_80px_-20px_rgba(0,0,0,0.75)] backdrop-blur-2xl'
                : 'min-h-[260px] border-white/[0.07] bg-white/[0.02] pb-4 backdrop-blur-sm sm:min-h-[280px]'
            }`}
          >
            {/* Light spill: cone from lamp (top center) washing over form */}
            <motion.div
              className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2.5rem] md:rounded-[3rem]"
              initial={false}
              animate={{ opacity: formRevealed ? 1 : 0 }}
              transition={{ duration: reduceMotion ? 0.1 : 0.55, ease: 'easeOut' }}
              aria-hidden
            >
              <div
                className="absolute inset-0 opacity-[0.85]"
                style={{
                  background: `
                    radial-gradient(ellipse 120% 70% at 50% -8%, rgba(255, 245, 220, 0.38) 0%, rgba(255, 220, 150, 0.14) 28%, transparent 58%),
                    radial-gradient(ellipse 95% 55% at 50% 12%, rgba(217, 162, 14, 0.12) 0%, transparent 52%),
                    linear-gradient(180deg, rgba(255, 230, 180, 0.07) 0%, transparent 45%)
                  `,
                }}
              />
              <div
                className="absolute inset-0 opacity-40 mix-blend-screen"
                style={{
                  background:
                    'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255, 255, 255, 0.15) 0%, transparent 50%)',
                }}
              />
            </motion.div>

            {/* Outer glow when on */}
            <motion.div
              className="pointer-events-none absolute -inset-px rounded-[2.5rem] md:rounded-[3rem]"
              initial={false}
              animate={{
                boxShadow: formRevealed
                  ? 'inset 0 0 80px rgba(217, 162, 14, 0.06), 0 0 60px rgba(217, 162, 14, 0.12)'
                  : 'inset 0 0 0 transparent',
              }}
              transition={{ duration: 0.6 }}
            />

            {/* Lamp block: own row so chain + knob never sit over inputs */}
            <div className="relative z-20 flex shrink-0 justify-center px-4 pt-3 pb-2">
              <PendantLamp
                revealed={formRevealed}
                pulling={cordPulling}
                onPull={handleCordPull}
                gradId={gradId}
              />
            </div>

            {/* Form: opens from top (same band as lamp), not from below the page */}
            <motion.div
              className={`relative z-10 overflow-hidden px-6 sm:px-10 md:px-12 ${
                formRevealed ? 'border-t border-white/[0.06]' : ''
              }`}
              initial={false}
              animate={{
                opacity: formRevealed ? 1 : 0,
                scaleY: formRevealed ? 1 : reduceMotion ? 1 : 0.94,
              }}
              transition={{ duration: reduceMotion ? 0.12 : 0.2, ease: [0.22, 1, 0.32, 1] }}
              style={{
                transformOrigin: 'top center',
                pointerEvents: formRevealed ? 'auto' : 'none',
                maxHeight: formRevealed ? 2400 : 0,
                transition: 'max-height 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
              aria-hidden={!formRevealed}
            >
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-8 pb-10 pt-8 md:pb-12 md:pt-10"
              >
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest text-white/50">Your Name</label>
                  <input
                    {...register('name', { required: true })}
                    tabIndex={formRevealed ? 0 : -1}
                    className="w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-3.5 text-base text-white outline-none ring-amber-gold/15 transition-all placeholder:text-white/25 focus:border-amber-gold/45 focus:ring-2 md:px-6 md:py-4 md:text-lg"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest text-white/50">Your Email</label>
                  <input
                    {...register('email', { required: true })}
                    type="email"
                    tabIndex={formRevealed ? 0 : -1}
                    className="w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-3.5 text-base text-white outline-none ring-amber-gold/15 transition-all placeholder:text-white/25 focus:border-amber-gold/45 focus:ring-2 md:px-6 md:py-4 md:text-lg"
                    placeholder="example@email.com"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest text-white/50">Message</label>
                  <textarea
                    {...register('message', { required: true })}
                    rows={5}
                    tabIndex={formRevealed ? 0 : -1}
                    className="w-full resize-none rounded-2xl border border-white/10 bg-black/50 px-5 py-3.5 text-base text-white outline-none ring-amber-gold/15 transition-all placeholder:text-white/25 focus:border-amber-gold/45 focus:ring-2 md:px-6 md:py-4 md:text-lg"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  tabIndex={formRevealed ? 0 : -1}
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-amber-bright via-amber-gold to-amber-dark py-4 text-base font-extrabold text-black shadow-[0_8px_32px_rgba(217,162,14,0.3)] transition-shadow hover:shadow-[0_12px_40px_rgba(217,162,14,0.4)] disabled:opacity-50 md:py-5 md:text-lg"
                >
                  {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Failed to Send' : 'Send Message'}
                  <Send size={22} />
                </motion.button>
                {status === 'success' && <p className="text-center text-sm font-bold text-amber-bright">Thank you! Your message has been sent.</p>}
                {status === 'error' && <p className="text-center text-sm font-bold text-red-500">Something went wrong. Please try again.</p>}
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {status === 'success' && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setStatus('idle')}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.2, type: 'spring', damping: 22, stiffness: 400 }}
              className="glass-panel relative w-full max-w-md overflow-hidden rounded-[2.5rem] p-8 text-center sm:p-12 amber-glow"
            >
              <div className="mb-8 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-amber-gold/10 text-amber-gold shadow-[0_0_40px_rgba(217,162,14,0.15)]">
                  <CheckCircle2 size={40} className="text-amber-bright" />
                </div>
              </div>

              <h3 className="mb-4 font-display text-3xl font-extrabold tracking-tighter">
                <span className="amber-heading">Message</span> Sent!
              </h3>
              
              <p className="mb-8 text-lg leading-relaxed text-white/60">
                Thank you for reaching out, <strong>Abdul Qadir</strong> has received your inquiry. I will get back to you shortly.
              </p>

              <button
                onClick={() => setStatus('idle')}
                className="w-full rounded-full bg-gradient-to-r from-amber-bright via-amber-gold to-amber-dark py-4 text-lg font-bold text-black shadow-[0_8px_32px_rgba(217,162,14,0.25)] transition-transform active:scale-95"
              >
                Got it
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
