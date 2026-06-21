'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import GlassCard from '@/components/GlassCard';
import { certifications } from '@/lib/data';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { Award, BadgeCheck } from 'lucide-react';

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6"
        >
          <Award className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted">Certifications</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Professional <span className="gradient-text">Certifications</span>
        </motion.h2>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
      >
        {certifications.map((cert, index) => (
          <motion.div key={index} variants={staggerItem}>
            <GlassCard className="text-center h-full">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <BadgeCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2 text-sm">{cert.title}</h3>
              <p className="text-muted text-xs">{cert.issuer}</p>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
