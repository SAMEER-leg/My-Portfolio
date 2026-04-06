import React, { useState } from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';

const logos = [
  { icon: 'Brackets', color: '#ffbf00' },
  { icon: 'Palette', color: '#ffbf00' },
  { icon: 'Terminal', color: '#ffbf00' },
  { icon: 'Database', color: '#ffbf00' },
  { icon: 'Cloud', color: '#ffbf00' },
  { icon: 'Github', color: '#ffbf00' },
];

export default function LiquidBalls() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-64 h-64 flex items-center justify-center liquid-filter"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Central Ball */}
      <motion.div
        className="absolute z-10 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-amber-bright to-amber-dark shadow-[0_0_60px_rgba(217,162,14,0.45),0_0_100px_rgba(217,162,14,0.15)]"
        animate={{
          scale: isHovered ? 1.2 : 1,
        }}
      >
        <Icons.Sparkles size={40} strokeWidth={1.65} className="text-black" />
      </motion.div>

      {/* Surrounding Balls */}
      {logos.map((logo, index) => {
        const angle = (index / logos.length) * Math.PI * 2;
        const radius = isHovered ? 120 : 0;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        const Icon = (Icons as any)[logo.icon];

        return (
          <motion.div
            key={index}
            className="absolute w-16 h-16 bg-amber-gold/20 backdrop-blur-md border border-amber-gold/30 rounded-full flex items-center justify-center"
            animate={{
              x,
              y,
              scale: isHovered ? 1 : 0,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{
              type: 'spring',
              damping: 12,
              stiffness: 100,
              delay: index * 0.05,
            }}
          >
            {Icon && <Icon size={26} strokeWidth={1.65} className="text-amber-gold" />}
          </motion.div>
        );
      })}
    </div>
  );
}
