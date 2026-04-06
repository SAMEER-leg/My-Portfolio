import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mqFine = window.matchMedia('(pointer: fine)');
    const mqHover = window.matchMedia('(hover: hover)');
    const mqMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () =>
      setEnabled(mqFine.matches && mqHover.matches && !mqMotion.matches);
    update();
    mqFine.addEventListener('change', update);
    mqHover.addEventListener('change', update);
    mqMotion.addEventListener('change', update);
    return () => {
      mqFine.removeEventListener('change', update);
      mqHover.removeEventListener('change', update);
      mqMotion.removeEventListener('change', update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('hover-trigger')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>
      <motion.div
        className="custom-cursor"
        animate={{
          x: mousePos.x - 5,
          y: mousePos.y - 5,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          x: { duration: 0 },
          y: { duration: 0 },
          scale: { type: 'spring', damping: 20, stiffness: 250 }
        }}
      />
      <motion.div
        className="custom-cursor-follower"
        animate={{
          x: mousePos.x - 22,
          y: mousePos.y - 22,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0 : 0.5,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.5 }}
      />
    </>
  );
}
