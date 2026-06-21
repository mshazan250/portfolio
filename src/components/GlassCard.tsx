'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export default function GlassCard({
  children,
  className = '',
  hover = true,
  gradient = false,
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
      transition={{ duration: 0.3 }}
      className={`
        rounded-xl p-6
        ${gradient ? 'gradient-border' : ''}
        glass
        ${hover ? 'hover:bg-white/[0.08] cursor-pointer' : ''}
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
