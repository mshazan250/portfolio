import type { SkillCategory, Project, Experience, Education, Certification, Testimonial, NavItem } from '@/types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    icon: 'Code2',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'R', level: 70 },
      { name: 'SQL', level: 85 },
      { name: 'JavaScript', level: 75 },
      { name: 'HTML', level: 85 },
      { name: 'CSS', level: 80 },
    ],
  },
  {
    title: 'AI & Machine Learning',
    icon: 'Brain',
    skills: [
      { name: 'Scikit-Learn', level: 85 },
      { name: 'TensorFlow', level: 70 },
      { name: 'Pandas', level: 90 },
      { name: 'NumPy', level: 88 },
      { name: 'Predictive Modeling', level: 80 },
      { name: 'Statistical Analysis', level: 82 },
      { name: 'ETL Pipelines', level: 75 },
    ],
  },
  {
    title: 'Data Visualization',
    icon: 'BarChart3',
    skills: [
      { name: 'Power BI', level: 88 },
      { name: 'Tableau', level: 75 },
      { name: 'Matplotlib', level: 82 },
      { name: 'Excel', level: 90 },
      { name: 'Dashboard Design', level: 85 },
    ],
  },
  {
    title: 'Tools & Databases',
    icon: 'Database',
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'SQLite', level: 80 },
      { name: 'Git', level: 82 },
      { name: 'GitHub', level: 85 },
      { name: 'Jupyter Notebook', level: 90 },
      { name: 'Streamlit', level: 78 },
      { name: 'Flask', level: 70 },
      { name: 'Vercel', level: 75 },
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'REVOLT_X',
    subtitle: 'AI-Powered Renewable Energy Optimization Platform',
    description: 'A comprehensive platform for renewable energy analytics, monitoring, and optimization powered by AI and data science.',
    tech: ['Python', 'Analytics', 'Dashboard', 'Vercel'],
    features: [
      'Energy analytics',
      'Monitoring system',
      'Monthly reporting',
      'Interactive dashboard',
    ],
    github: 'https://github.com/mshazan250',
    featured: true,
  },
  {
    title: 'Heart Disease Prediction App',
    subtitle: 'AI Healthcare Diagnostics Dashboard',
    description: 'An ML-powered healthcare application that predicts heart disease risk using multiple machine learning models with high accuracy.',
    tech: ['Python', 'Scikit-Learn', 'Streamlit', 'Plotly'],
    features: [
      'Multiple ML models',
      '90% accuracy',
      'ROC AUC 0.94',
      'Risk visualization dashboard',
      'Report generation',
    ],
    github: 'https://github.com/mshazan250',
    demo: '#',
  },
  {
    title: 'Melbn Inventory Management System',
    subtitle: 'Business Inventory Tracking Solution',
    description: 'A robust inventory management system with database architecture, transaction management, and comprehensive reporting.',
    tech: ['Python', 'SQLite'],
    features: [
      'Inventory tracking',
      'Database architecture',
      'Transaction management',
      'Reporting',
    ],
    github: 'https://github.com/mshazan250',
  },
  {
    title: 'SHAAZ Salon Website',
    subtitle: 'Modern Business Website',
    description: 'A modern, responsive salon website with booking interface and contemporary UI/UX design.',
    tech: ['HTML', 'CSS', 'UI/UX'],
    features: [
      'Responsive design',
      'Booking interface',
      'Modern layout',
    ],
    github: 'https://github.com/mshazan250',
    demo: '#',
  },
];

export const experience: Experience[] = [
  {
    title: 'Operations & Sales Analyst',
    company: 'Melbn Metal',
    period: '2024 - Present',
    responsibilities: [
      'Data-driven reporting',
      'Sales analytics',
      'KPI dashboards',
      'Financial reconciliations',
      'Workflow optimization',
      'Business intelligence',
    ],
    achievements: [
      { label: 'Reports Generated', value: '50+' },
      { label: 'KPI Dashboards', value: '10+' },
      { label: 'Data Points Analyzed', value: '10K+' },
      { label: 'Efficiency Improvement', value: '30%' },
    ],
  },
];

export const education: Education[] = [
  {
    degree: 'BSc (Hons) in Data Science',
    institution: 'London Metropolitan University',
    period: '2025 - 2026',
    description: 'Focused on advanced data science, machine learning, and AI applications.',
  },
  {
    degree: 'HND in Data Analytics',
    institution: 'Pearson UK / ESOFT Metro Campus',
    period: '2023 - 2025',
    description: 'Comprehensive training in data analytics, statistics, and business intelligence.',
  },
];

export const certifications: Certification[] = [
  {
    title: 'Data Analytics Certification',
    issuer: 'Professional Certification Body',
  },
  {
    title: 'HP LIFE Certification',
    issuer: 'HP LIFE',
  },
  {
    title: 'Machine Learning & Data Science',
    issuer: 'Online Learning Platform',
  },
  {
    title: 'Cybersecurity Fundamentals',
    issuer: 'Cybersecurity Institute',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Senior Data Scientist',
    company: 'Tech Solutions Inc.',
    content: 'Mohamed demonstrates exceptional analytical skills and a deep understanding of machine learning concepts. His work on predictive models is impressive.',
  },
  {
    name: 'James Anderson',
    role: 'Project Manager',
    company: 'Digital Innovations',
    content: 'Working with Mohamed was a great experience. His attention to detail and ability to transform complex data into actionable insights is remarkable.',
  },
  {
    name: 'Priya Sharma',
    role: 'AI Research Lead',
    company: 'DataDriven Labs',
    content: 'Mohamed\'s passion for AI and data science is evident in everything he does. His projects showcase a blend of technical expertise and creative problem-solving.',
  },
];

export const aiExpertise = [
  {
    title: 'Machine Learning',
    icon: 'Brain',
    skills: ['Classification Models', 'Random Forest', 'Logistic Regression', 'SVM', 'Neural Networks'],
    gradient: 'from-blue-500 to-purple-500',
  },
  {
    title: 'Data Science',
    icon: 'FlaskConical',
    skills: ['Data Cleaning', 'Feature Engineering', 'EDA', 'Statistical Analysis'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Data Analytics',
    icon: 'BarChart3',
    skills: ['Dashboard Development', 'KPI Reporting', 'Business Intelligence'],
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Deployment',
    icon: 'Rocket',
    skills: ['Streamlit', 'Flask', 'Vercel'],
    gradient: 'from-green-500 to-cyan-500',
  },
];
