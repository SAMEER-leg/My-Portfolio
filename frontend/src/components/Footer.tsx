import React from 'react';
import { portfolioData } from '../portfolioData';
import * as Icons from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-black/40 px-4 pb-[calc(6rem+env(safe-area-inset-bottom,0px))] pt-12 shadow-[inset_0_1px_0_0_rgba(217,162,14,0.08)] backdrop-blur-xl sm:px-6 sm:pb-20 sm:pt-14 md:pb-16 lg:pb-14">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:gap-12 md:grid-cols-3">
        <div>
          <h3 className="font-display mb-4 text-2xl font-extrabold">
            <span className="amber-text-gradient">AQ</span>
            <span className="text-amber-gold/80">.</span>
          </h3>
          <p className="max-w-xs text-sm leading-relaxed text-white/45">
            {portfolioData.bio}
          </p>
        </div>

        <div>
          <h4 className="mb-5 font-display text-sm font-bold uppercase tracking-widest">
            <span className="amber-heading">Quick Links</span>
          </h4>
          <ul className="space-y-3 text-sm text-white/45">
            <li>
              <a href="/#projects" className="transition-colors hover:text-amber-bright">
                Projects
              </a>
            </li>
            <li>
              <a href="/#services" className="transition-colors hover:text-amber-bright">
                Services
              </a>
            </li>
            <li>
              <a href="/#experience" className="transition-colors hover:text-amber-bright">
                Experience
              </a>
            </li>
            <li>
              <a href="/#contact" className="transition-colors hover:text-amber-bright">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-5 font-display text-sm font-bold uppercase tracking-widest">
            <span className="amber-heading">Connect</span>
          </h4>
          <div className="flex gap-3">
            {portfolioData.socialLinks.map((link) => {
              const Icon = (Icons as any)[link.icon];
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-amber-gold transition-all hover:scale-110 hover:border-amber-gold/35 hover:bg-amber-gold/10 hover:shadow-[0_0_24px_rgba(217,162,14,0.15)]"
                >
                  {Icon && <Icon size={20} />}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-white/[0.06] pt-8 text-center text-xs text-white/30">
        © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
      </div>
    </footer>
  );
}
