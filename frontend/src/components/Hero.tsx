import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { portfolioData } from '../portfolioData';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  /** Blur-until-hover only on large viewports with real hover (avoids iPad / touch laptops showing a permanently blurred photo). */
  const [desktopHoverReveal, setDesktopHoverReveal] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(
      '(min-width: 1024px) and (hover: hover) and (pointer: fine)'
    );
    const sync = () => setDesktopHoverReveal(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      if (reduceMotion) {
        gsap.set('.hero-text', { opacity: 1, y: 0 });
        return;
      }
      gsap.from('.hero-text', {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        clearProps: 'opacity',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="mx-auto flex min-h-screen min-h-dvh max-w-7xl flex-col items-center justify-center gap-8 overflow-x-clip px-4 pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] pt-[calc(6.85rem+env(safe-area-inset-top,0px))] sm:gap-10 sm:px-6 sm:pb-14 sm:pt-[calc(7.35rem+env(safe-area-inset-top,0px))] lg:flex-row lg:items-center lg:gap-12 lg:pb-16 lg:pt-[calc(8.75rem+env(safe-area-inset-top,0px))] xl:gap-16"
    >
      <div className="relative z-10 order-2 flex w-full min-w-0 flex-1 flex-col space-y-6 sm:space-y-8 lg:order-1 lg:max-w-[min(100%,36rem)] xl:max-w-none lg:items-start lg:text-left items-center text-center">
        <div className="hero-text relative z-20 inline-flex w-fit max-w-full min-h-[44px] shrink-0 items-center gap-2.5 self-center rounded-full border border-amber-gold/55 bg-black/85 px-4 py-2 text-sm font-semibold tracking-wide text-white shadow-[0_0_32px_rgba(217,162,14,0.28),inset_0_1px_0_rgba(255,255,255,0.08)] ring-1 ring-amber-gold/20 backdrop-blur-md sm:gap-2.5 sm:px-5 sm:py-2.5 lg:self-start">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="absolute inline-flex h-full w-full motion-safe:animate-ping rounded-full bg-emerald-400/50" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          </span>
          <span className="text-amber-bright">Available</span>
          <span className="text-white/80">for new projects</span>
        </div>

        <h1 className="hero-text font-display text-[clamp(2.25rem,calc(1.5rem+5.5vw),6rem)] font-extrabold leading-[0.95] tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
          <span className="amber-heading">I&apos;m</span>{' '}
          <span className="bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-transparent">
            {portfolioData.name}
          </span>
        </h1>

        <p className="hero-text max-w-lg text-base font-medium leading-relaxed text-white/70 sm:text-lg md:text-xl md:leading-relaxed">
          <span className="text-white/90">{portfolioData.role}.</span>{' '}
          {portfolioData.bio}
        </p>

        <div className="hero-text flex w-full flex-col gap-3 pt-2 min-[420px]:flex-row min-[420px]:flex-wrap sm:gap-4 sm:pt-4 md:gap-5 md:pt-6">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="amber-gradient inline-flex w-full min-h-[48px] items-center justify-center rounded-full px-8 py-3.5 text-center text-base font-extrabold text-black shadow-[0_4px_24px_rgba(217,162,14,0.35)] ring-1 ring-white/20 transition-shadow hover:shadow-[0_8px_40px_rgba(217,162,14,0.45)] sm:w-auto sm:min-h-0 sm:px-10 sm:py-4"
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="glass-panel inline-flex w-full min-h-[48px] items-center justify-center rounded-full border-2 border-white/15 px-8 py-3.5 text-center text-base font-bold text-white transition-colors hover:border-amber-gold/40 hover:text-amber-bright sm:w-auto sm:min-h-0 sm:px-10 sm:py-4"
          >
            Contact Me
          </motion.a>
        </div>
      </div>

      <div className="relative order-1 flex min-w-0 flex-1 items-center justify-center overflow-visible px-1 sm:px-2 lg:order-2 lg:overflow-x-clip">
        {/* Profile — shown first on mobile/tablet; right column on lg+ */}
        <div className="relative isolate mx-auto h-[min(72vw,17.5rem)] w-[min(72vw,17.5rem)] max-h-[320px] max-w-[320px] shrink-0 sm:h-80 sm:w-80 sm:max-h-none sm:max-w-none md:h-96 md:w-96 lg:h-[min(42vw,28rem)] lg:w-[min(42vw,28rem)] lg:max-h-[450px] lg:max-w-[450px] xl:h-[min(38vw,32rem)] xl:w-[min(38vw,32rem)] xl:max-h-[520px] xl:max-w-[520px] group">
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-amber-gold/30"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 90, 180, 270, 360],
              borderRadius: ["50%", "40%", "50%"],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border border-white/10"
            animate={{
              scale: [1.1, 1, 1.1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute inset-4 cursor-pointer overflow-hidden rounded-full border-4 border-amber-gold/50 bg-amber-gold/5 shadow-[0_0_60px_rgba(217,162,14,0.25),inset_0_0_40px_rgba(217,162,14,0.06)] backdrop-blur-none transition-shadow duration-700 lg:backdrop-blur-3xl group-hover:border-amber-gold/70 group-hover:shadow-[0_0_100px_rgba(217,162,14,0.35),inset_0_0_50px_rgba(217,162,14,0.1)]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            <img
              src={portfolioData.profilePic}
              alt={portfolioData.name}
              className={`h-full w-full object-cover transition-all duration-700 ${
                desktopHoverReveal
                  ? 'scale-110 grayscale blur-[18px] group-hover:scale-100 group-hover:blur-none group-hover:grayscale-0'
                  : 'scale-100 grayscale-0 blur-none'
              }`}
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Corner accent — perfectly aligned to the bottom right of the circular frame */}
          <div
            className="pointer-events-none absolute bottom-[12%] right-[12%] z-30 flex h-10 w-10 items-center justify-center rounded-full border-2 border-amber-gold/30 bg-gradient-to-br from-amber-bright to-amber-dark shadow-[0_0_20px_rgba(217,162,14,0.6)] sm:h-12 sm:w-12"
            aria-hidden
          >
            <Sparkles className="h-5 w-5 shrink-0 text-black sm:h-6 sm:w-6" strokeWidth={2} />
          </div>

          {/* Decorative elements */}
          <motion.div 
            className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-amber-gold/50 rounded-tl-[4rem]"
            animate={{ 
              x: [-10, 10, -10], 
              y: [-10, 10, -10],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div 
            className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-amber-gold/50 rounded-br-[4rem]"
            animate={{ 
              x: [10, -10, 10], 
              y: [10, -10, 10],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </section>
  );
}
