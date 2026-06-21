'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import GlassCard from '@/components/GlassCard';
import { staggerContainer, staggerItem } from '@/lib/animations';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mshazan250@gmail.com',
    href: 'mailto:mshazan250@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+94 76 758 6821',
    href: 'tel:+94767586821',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Sri Lanka',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'Mohamed Shazan',
    href: 'https://linkedin.com/in/mohamed-shazan-050213289',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'mshazan250',
    href: 'https://github.com/mshazan250',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // EmailJS integration - replace with your credentials
      const emailjs = await import('@emailjs/browser');
      await emailjs.send(
        'service_fbcw9oi', // Replace with your EmailJS service ID
        'template_ednw3pk', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Mohamed Shazan',
        },
        'Zc2QqijIG9pfquqrf' // Replace with your EmailJS public key
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Email send failed:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6"
        >
          <Mail className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted">Get In Touch</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Contact <span className="gradient-text">Me</span>
        </motion.h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact info */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          <motion.p variants={staggerItem} className="text-muted text-lg mb-6">
            Feel free to reach out for collaborations, opportunities, or just a
            friendly hello!
          </motion.p>

          {contactInfo.map((info) => (
            <motion.div key={info.label} variants={staggerItem}>
              {info.href ? (
                <a
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block"
                >
                  <GlassCard className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted uppercase tracking-wider">
                        {info.label}
                      </p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </GlassCard>
                </a>
              ) : (
                <GlassCard className="flex items-center gap-4" hover={false}>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider">
                      {info.label}
                    </p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </GlassCard>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <GlassCard hover={false}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-muted mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white/5 border border-card-border rounded-lg text-foreground placeholder-muted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-muted mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white/5 border border-card-border rounded-lg text-foreground placeholder-muted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-muted mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white/5 border border-card-border rounded-lg text-foreground placeholder-muted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-medium text-white flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : status === 'error' ? (
                  <>
                    <AlertCircle className="w-5 h-5" />
                    Failed to Send
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
