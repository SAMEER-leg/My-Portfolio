import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Services', path: '/#services' },
    { name: 'Experience', path: '/#experience' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full max-w-[100vw] border-b border-amber-gold/20 bg-black/50 pt-[env(safe-area-inset-top,0px)] shadow-[inset_0_-1px_0_0_rgba(217,162,14,0.18)] backdrop-blur-2xl backdrop-saturate-150">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <Link
          to="/"
          aria-label="AQ — problem-solving tech partner. Home"
          className="min-w-0 max-w-[min(100%,calc(100vw-5.5rem))] shrink-0 transition-transform hover:scale-[1.02] active:scale-[0.99] sm:max-w-none"
        >
          <span className="inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-2.5 py-1.5 pr-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_4px_24px_rgba(0,0,0,0.35)] backdrop-blur-md sm:gap-3 sm:px-3 sm:py-2 sm:pr-4">
            <span className="shrink-0 font-display text-lg font-extrabold leading-none tracking-tighter sm:text-xl md:text-2xl">
              <span className="amber-text-gradient">AQ</span>
              <span className="text-amber-gold">.</span>
            </span>
            <span className="h-7 w-px shrink-0 bg-white/20 sm:h-9 md:h-10" aria-hidden />
            <span className="min-w-0 flex-1 text-left sm:flex-none">
              <span className="block font-sans text-[0.65rem] font-bold leading-snug tracking-tight text-white sm:text-[0.7rem] md:text-xs">
                problem-solving tech partner
              </span>
              <span className="mt-0.5 block font-sans text-[0.6rem] font-medium leading-snug text-white/50 sm:text-[0.65rem] md:text-[0.75rem]">
                Anywhere, Anytime.
              </span>
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden gap-10 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="group relative text-sm font-semibold tracking-wide text-white/55 transition-colors hover:text-amber-bright"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-amber-gold to-amber-bright transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="rounded-xl p-2 text-white transition-colors hover:bg-white/5 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel flex flex-col gap-2 border-t border-white/5 px-6 py-8 md:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="rounded-xl px-4 py-3 font-display text-lg font-semibold text-white/90 transition-colors hover:bg-amber-gold/10 hover:text-amber-gold"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </motion.nav>
      )}
    </header>
  );
}
