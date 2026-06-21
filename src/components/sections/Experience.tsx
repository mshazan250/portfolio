'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import GlassCard from '@/components/GlassCard';
import AnimatedCounter from '@/components/AnimatedCounter';
import { experience } from '@/lib/data';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { Briefcase, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6"
        >
          <Briefcase className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted">Work Experience</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Professional <span className="gradient-text">Experience</span>
        </motion.h2>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

        {experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative md:ml-16 mb-12"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[4.25rem] top-6 w-5 h-5 rounded-full bg-gradient-to-r from-primary to-secondary border-4 border-background hidden md:block" />

            <GlassCard hover={false}>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <span className="text-muted text-sm glass rounded-full px-3 py-1 mt-2 md:mt-0 w-fit">
                  {exp.period}
                </span>
              </div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-2 mb-6"
              >
                {exp.responsibilities.map((resp) => (
                  <motion.div
                    key={resp}
                    variants={staggerItem}
                    className="flex items-center gap-2 text-muted"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm">{resp}</span>
                  </motion.div>
                ))}
              </motion.div>

              {exp.achievements && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-card-border">
                  {exp.achievements.map((achievement) => (
                    <AnimatedCounter
                      key={achievement.label}
                      value={achievement.value}
                      label={achievement.label}
                    />
                  ))}
                </div>
              )}
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
