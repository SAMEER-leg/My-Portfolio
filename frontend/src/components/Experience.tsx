import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../portfolioData';
import { Calendar, Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:py-28">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="min-w-0">
          <h2 className="mb-6 font-display text-4xl font-extrabold tracking-tighter sm:mb-10 sm:text-5xl md:text-7xl">
            <span className="amber-heading">My</span>{' '}
            <span className="text-white">Journey</span>
          </h2>
          <p className="mb-10 max-w-lg text-base leading-relaxed text-white/65 sm:mb-16 sm:text-lg">
            Over the years, I've had the privilege of working with amazing teams and building products that impact millions.
          </p>
          
          <div className="space-y-12">
            {portfolioData.experience.map((exp, index) => (
              <motion.div 
                key={exp.id} 
                className="relative border-l border-white/10 pb-12 pl-10 last:pb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute left-[-10px] top-0 h-5 w-5 rounded-full bg-gradient-to-br from-amber-bright to-amber-dark shadow-[0_0_20px_rgba(217,162,14,0.55)] ring-2 ring-black" />
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-amber-gold text-sm font-bold tracking-widest uppercase">
                    <Calendar size={16} /> {exp.period}
                  </div>
                  <h3 className="font-display text-2xl font-bold sm:text-3xl">
                    <span className="amber-heading">{exp.role}</span>
                  </h3>
                  <div className="flex items-center gap-3 text-white/70 font-semibold text-lg">
                    <Briefcase size={18} /> {exp.company}
                  </div>
                  <p className="text-white/60 text-base leading-relaxed pt-3 max-w-md">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="glass-panel flex h-fit flex-col items-center justify-center rounded-[2rem] p-8 text-center sm:rounded-[2.5rem] sm:p-12 md:rounded-[3rem] md:p-14 lg:sticky lg:top-32 lg:p-16 amber-glow"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="mb-10 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-amber-bright to-amber-dark shadow-[0_16px_48px_rgba(217,162,14,0.3)]">
            <Briefcase size={48} className="text-black" />
          </div>
          <h3 className="mb-4 font-display text-3xl font-bold sm:mb-6 sm:text-4xl">
            <span className="amber-heading">Looking for a Partner?</span>
          </h3>
          <p className="mb-8 max-w-sm text-base text-white/65 sm:mb-10 sm:text-lg">
            I'm currently open to freelance opportunities and full-time roles in innovative companies.
          </p>
          <motion.a
            href="/#contact"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full bg-gradient-to-r from-amber-bright via-amber-gold to-amber-dark px-10 py-5 text-lg font-extrabold text-black shadow-[0_8px_32px_rgba(217,162,14,0.35)]"
          >
            Let's Talk
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
