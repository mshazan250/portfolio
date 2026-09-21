'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, ExternalLink } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { staggerContainer, staggerItem, fadeInLeft, fadeInRight } from '@/lib/animations';

const ParticleBackground = dynamic(() => import('@/components/ParticleBackground'), {
  ssr: false,
});

const Typewriter = dynamic(() => import('typewriter-effect'), {
  ssr: false,
});

const floatingIcons = [
  { label: 'Python', emoji: '🐍', x: '10%', y: '20%', delay: 0 },
  { label: 'TensorFlow', emoji: '🧠', x: '85%', y: '15%', delay: 0.5 },
  { label: 'Power BI', emoji: '📊', x: '75%', y: '70%', delay: 1 },
  { label: 'SQL', emoji: '🗃️', x: '15%', y: '75%', delay: 1.5 },
  { label: 'Scikit-Learn', emoji: '⚙️', x: '90%', y: '45%', delay: 2 },
  { label: 'GitHub', emoji: '💻', x: '5%', y: '50%', delay: 2.5 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <ParticleBackground />

      {/* Floating icons */}
      {floatingIcons.map((icon) => (
        <motion.div
          key={icon.label}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: icon.delay + 1, duration: 0.5 }}
          className="absolute hidden lg:flex items-center gap-2 glass rounded-full px-3 py-2 text-xs text-muted"
          style={{ left: icon.x, top: icon.y }}
        >
          <motion.span
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity, delay: icon.delay }}
            className="text-lg"
          >
            {icon.emoji}
          </motion.span>
          {icon.label}
        </motion.div>
      ))}

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left content */}
          <motion.div variants={fadeInLeft} className="text-center lg:text-left">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.p
                variants={staggerItem}
                className="text-primary font-mono text-sm md:text-base mb-4 tracking-wider"
              >
                {'<Hello World />'}
              </motion.p>

              <motion.h1
                variants={staggerItem}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
              >
                Hi, I&apos;m{' '}
                <span className="gradient-text">Mohamed Shazan</span>
              </motion.h1>

              <motion.div
                variants={staggerItem}
                className="text-xl md:text-2xl text-muted mb-2"
              >
                AI Engineer • ML Engineer • Data Scientist
              </motion.div>

              <motion.div
                variants={staggerItem}
                className="text-xl md:text-2xl font-semibold text-primary h-10 mb-6"
              >
                <Typewriter
                  options={{
                    strings: [
                      'Data Analyst',
                      'AI Engineer',
                      'Machine Learning Engineer',
                      'Data Scientist',
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 30,
                    delay: 50,
                  }}
                />
              </motion.div>

              <motion.p
                variants={staggerItem}
                className="text-muted text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              >
                Passionate about building intelligent systems and transforming
                raw data into actionable insights through AI, Machine Learning,
                and Data Science.
              </motion.p>

              <motion.div
                variants={staggerItem}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-xl font-medium text-white flex items-center gap-2 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Projects
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="group px-6 py-3 glass rounded-xl font-medium text-foreground flex items-center gap-2 hover:bg-white/10 transition-all duration-300"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group px-6 py-3 glass rounded-xl font-medium text-foreground flex items-center gap-2 hover:bg-white/10 transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                  Contact Me
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            variants={fadeInRight}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent blur-2xl opacity-30 scale-110" />
              
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/30 animate-pulse-glow bg-card-bg">
                  <Image
                    src="/images/shazan.png"
                    alt="Mohamed Shazan"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </motion.div>

              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 glass rounded-full px-4 py-2 flex items-center gap-2 text-sm whitespace-nowrap"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-muted">Available for opportunities</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted cursor-pointer"
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-xs uppercase tracking-widest">Scroll Down</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
