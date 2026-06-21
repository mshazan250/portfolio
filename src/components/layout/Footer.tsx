'use client';

import { motion } from 'framer-motion';
import { Mail, Heart } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/mshazan250', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/mohamed-shazan-050213289', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:mshazan250@gmail.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-card-border">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-muted text-sm">
              © {new Date().getFullYear()} Mohamed Shazan. All rights reserved.
            </p>
            <p className="text-muted/60 text-xs mt-1 flex items-center gap-1 justify-center md:justify-start">
              Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> Building Intelligent Systems with AI and Machine Learning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
