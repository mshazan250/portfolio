'use client';

import dynamic from 'next/dynamic';

const CursorGlow = dynamic(() => import('@/components/CursorGlow'), { ssr: false });
const ScrollProgress = dynamic(() => import('@/components/layout/ScrollProgress'), { ssr: false });
const Navbar = dynamic(() => import('@/components/layout/Navbar'), { ssr: false });
const Hero = dynamic(() => import('@/components/sections/Hero'), { ssr: false });
const About = dynamic(() => import('@/components/sections/About'), { ssr: false });
const Skills = dynamic(() => import('@/components/sections/Skills'), { ssr: false });
const Experience = dynamic(() => import('@/components/sections/Experience'), { ssr: false });
const Projects = dynamic(() => import('@/components/sections/Projects'), { ssr: false });
const AIExpertise = dynamic(() => import('@/components/sections/AIExpertise'), { ssr: false });
const Education = dynamic(() => import('@/components/sections/Education'), { ssr: false });
const Certifications = dynamic(() => import('@/components/sections/Certifications'), { ssr: false });
const GitHubStats = dynamic(() => import('@/components/sections/GitHubStats'), { ssr: false });
const Contact = dynamic(() => import('@/components/sections/Contact'), { ssr: false });
const Footer = dynamic(() => import('@/components/layout/Footer'), { ssr: false });

export default function Home() {
  return (
    <>
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <AIExpertise />
        <div className="section-divider" />
        <Education />
        <div className="section-divider" />
        <Certifications />
        <div className="section-divider" />
        <GitHubStats />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
