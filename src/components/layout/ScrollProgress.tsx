'use client';

import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[100] origin-left"
      style={{
        scaleX: scrollYProgress,
        background: 'linear-gradient(90deg, #3B82F6, #8B5CF6, #06B6D4)',
      }}
    />
  );
}
