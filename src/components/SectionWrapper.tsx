'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  fullWidth?: boolean;
}

export default function SectionWrapper({
  children,
  id,
  className = '',
  fullWidth = false,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`py-20 md:py-28 ${fullWidth ? '' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'} ${className}`}
    >
      {children}
    </motion.section>
  );
}
