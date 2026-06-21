'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import GlassCard from '@/components/GlassCard';
import { education } from '@/lib/data';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export default function Education() {
  return (
    <SectionWrapper id="education">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6"
        >
          <GraduationCap className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted">Education</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Academic <span className="gradient-text">Background</span>
        </motion.h2>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="relative ml-16"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[2.55rem] top-6 w-5 h-5 rounded-full bg-gradient-to-r from-primary to-secondary border-4 border-background" />

                <GlassCard>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold">{edu.degree}</h3>
                      <div className="flex flex-wrap items-center gap-3 mt-1 mb-3">
                        <span className="flex items-center gap-1 text-primary text-sm">
                          <MapPin className="w-3 h-3" />
                          {edu.institution}
                        </span>
                        <span className="flex items-center gap-1 text-muted text-sm">
                          <Calendar className="w-3 h-3" />
                          {edu.period}
                        </span>
                      </div>
                      {edu.description && (
                        <p className="text-muted text-sm">{edu.description}</p>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
