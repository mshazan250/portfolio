export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  features: string[];
  github?: string;
  demo?: string;
  image?: string;
  featured?: boolean;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  achievements?: { label: string; value: string }[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  credentialId?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href?: string;
}

export interface GitHubStats {
  publicRepos: number;
  followers: number;
  following: number;
  totalStars: number;
}

export interface GitHubRepo {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
}
