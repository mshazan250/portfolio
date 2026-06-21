'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import GlassCard from '@/components/GlassCard';
import { projects } from '@/lib/data';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { FolderGit2, ExternalLink, Star } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6"
        >
          <FolderGit2 className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted">My Work</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-6"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={staggerItem}
            className={project.featured ? 'md:col-span-2' : ''}
          >
            <GlassCard className="relative overflow-hidden group h-full">
              {project.featured && (
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                  <Star className="w-3 h-3 fill-current" />
                  Featured
                </div>
              )}

              {/* Gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />

              <div className={project.featured ? 'md:grid md:grid-cols-2 md:gap-8' : ''}>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-muted text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="space-y-2 mb-6">
                    {project.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-sm text-muted hover:text-foreground hover:bg-white/10 transition-all"
                      >
                        <FaGithub className="w-4 h-4" />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
