'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import GlassCard from '@/components/GlassCard';
import SkillBar from '@/components/SkillBar';
import { skillCategories } from '@/lib/data';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { Code2, Brain, BarChart3, Database, Cpu } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Brain,
  BarChart3,
  Database,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <SectionWrapper id="skills">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6"
        >
          <Cpu className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted">Technical Skills</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Skills & <span className="gradient-text">Expertise</span>
        </motion.h2>
      </div>

      {/* Category tabs */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
      >
        {skillCategories.map((category, index) => {
          const Icon = iconMap[category.icon] || Code2;
          return (
            <motion.button
              key={category.title}
              variants={staggerItem}
              onClick={() => setActiveCategory(index)}
              className={`p-4 rounded-xl text-center transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 shadow-lg shadow-primary/10'
                  : 'glass hover:bg-white/[0.08]'
              }`}
            >
              <Icon
                className={`w-6 h-6 mx-auto mb-2 ${
                  activeCategory === index ? 'text-primary' : 'text-muted'
                }`}
              />
              <span
                className={`text-sm font-medium ${
                  activeCategory === index ? 'text-foreground' : 'text-muted'
                }`}
              >
                {category.title}
              </span>
            </motion.button>
          );
        })}
      </motion.div>

      {/* Skills display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <GlassCard hover={false} className="max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-6 gradient-text">
              {skillCategories[activeCategory].title}
            </h3>
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                index={index}
              />
            ))}
          </GlassCard>
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  );
}
