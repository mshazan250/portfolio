'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import { aiExpertise } from '@/lib/data';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { Brain, FlaskConical, BarChart3, Rocket, Sparkles } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain,
  FlaskConical,
  BarChart3,
  Rocket,
};

export default function AIExpertise() {
  return (
    <SectionWrapper id="ai-expertise">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted">Specialization</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          AI & ML <span className="gradient-text">Expertise</span>
        </motion.h2>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {aiExpertise.map((item) => {
          const Icon = iconMap[item.icon] || Brain;
          return (
            <motion.div
              key={item.title}
              variants={staggerItem}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl" />
              <div className="glass rounded-xl p-6 h-full relative overflow-hidden">
                {/* Top gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient}`} />

                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-bold mb-4">{item.title}</h3>

                <div className="space-y-2">
                  {item.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 text-sm text-muted"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
