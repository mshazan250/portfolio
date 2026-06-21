'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import AnimatedCounter from '@/components/AnimatedCounter';
import GlassCard from '@/components/GlassCard';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { User, Sparkles } from 'lucide-react';

const stats = [
  { value: '4+', label: 'Projects' },
  { value: '10+', label: 'Technologies' },
  { value: '2+', label: 'Years Experience' },
  { value: '100', label: 'Continuous Learner', suffix: '%' },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6"
        >
          <User className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted">About Me</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Who <span className="gradient-text">I Am</span>
        </motion.h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-xl" />
            <GlassCard hover={false} className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold">My Story</h3>
              </div>
              <p className="text-muted leading-relaxed text-base">
                Detail-oriented Data Analyst with hands-on experience in Python,
                SQL, Power BI, and Machine Learning. Currently pursuing a BSc
                (Hons) in Data Science and actively building AI-powered
                applications and predictive models.
              </p>
              <p className="text-muted leading-relaxed text-base mt-4">
                I am passionate about leveraging data to drive decisions and
                building intelligent systems that solve real-world problems. My
                journey in tech is fueled by curiosity and a commitment to
                continuous learning.
              </p>
            </GlassCard>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={staggerItem}>
              <GlassCard className="text-center">
                <AnimatedCounter
                  value={stat.value}
                  label={stat.label}
                  suffix={stat.suffix}
                />
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
