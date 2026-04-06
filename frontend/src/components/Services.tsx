import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../portfolioData';
import * as Icons from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:py-28">
      <div className="mb-12 text-center sm:mb-16 md:mb-20">
        <h2 className="mb-4 font-display text-4xl font-extrabold tracking-tighter sm:mb-6 sm:text-5xl md:text-7xl">
          <span className="amber-heading">Services</span>{' '}
          <span className="text-white">Expertise</span>
        </h2>
        <p className="mx-auto max-w-2xl px-1 text-base leading-relaxed text-white/65 sm:text-lg">
          Delivering high-performance digital solutions with a focus on aesthetics and functionality.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
        {portfolioData.services.map((service) => {
          const Icon = (Icons as any)[service.icon];
          return (
            <motion.div
              key={service.id}
              className="service-card group rounded-[1.75rem] border border-white/[0.12] bg-white/[0.05] p-6 shadow-[0_0_0_1px_rgba(217,162,14,0.08),inset_0_1px_0_0_rgba(255,255,255,0.08),0_24px_80px_-24px_rgba(0,0,0,0.65)] backdrop-blur-2xl transition-[background-color,box-shadow,border-color] duration-500 [-webkit-backdrop-filter:blur(40px)] sm:rounded-[2.5rem] sm:p-8 md:p-10 amber-glow amber-glow-hover hover:border-white/[0.16] hover:bg-white/[0.07]"
              whileHover={{ y: -12 }}
              transition={{ type: 'spring', stiffness: 320, damping: 22 }}
            >
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-amber-bright to-amber-dark shadow-[0_12px_40px_rgba(217,162,14,0.25)] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105">
                {Icon && (
                  <Icon
                    size={42}
                    strokeWidth={1.65}
                    className="text-black"
                    aria-hidden
                  />
                )}
              </div>
              <h3 className="mb-3 font-display text-2xl font-bold sm:mb-4 sm:text-3xl">
                <span className="amber-heading">{service.title}</span>
              </h3>
              <p className="text-base leading-relaxed text-white/55 sm:text-lg">{service.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
