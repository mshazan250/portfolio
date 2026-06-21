'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import GlassCard from '@/components/GlassCard';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { GitFork, Star, Users, BookOpen } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

interface GitHubData {
  publicRepos: number;
  followers: number;
  following: number;
}

interface GitHubRepo {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
}

export default function GitHubStats() {
  const [stats, setStats] = useState<GitHubData | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const username = 'mshazan250';

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`),
        ]);

        if (userRes.ok) {
          const userData = await userRes.json();
          setStats({
            publicRepos: userData.public_repos,
            followers: userData.followers,
            following: userData.following,
          });
        }

        if (reposRes.ok) {
          const reposData = await reposRes.json();
          setRepos(reposData);
        }
      } catch (error) {
        console.error('Failed to fetch GitHub data:', error);
      }
    };

    fetchGitHubData();
  }, []);

  const languageColors: Record<string, string> = {
    Python: '#3572A5',
    JavaScript: '#F1E05A',
    TypeScript: '#3178C6',
    HTML: '#E34C26',
    CSS: '#563D7C',
    Jupyter: '#DA5B0B',
    'Jupyter Notebook': '#DA5B0B',
  };

  return (
    <SectionWrapper id="github">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6"
        >
          <FaGithub className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted">Open Source</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          GitHub <span className="gradient-text">Activity</span>
        </motion.h2>
      </div>

      {/* Stats cards */}
      {stats && (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12"
        >
          <motion.div variants={staggerItem}>
            <GlassCard className="text-center">
              <BookOpen className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">{stats.publicRepos}</div>
              <div className="text-muted text-xs">Repositories</div>
            </GlassCard>
          </motion.div>
          <motion.div variants={staggerItem}>
            <GlassCard className="text-center">
              <Users className="w-6 h-6 text-secondary mx-auto mb-2" />
              <div className="text-2xl font-bold">{stats.followers}</div>
              <div className="text-muted text-xs">Followers</div>
            </GlassCard>
          </motion.div>
          <motion.div variants={staggerItem}>
            <GlassCard className="text-center">
              <Users className="w-6 h-6 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold">{stats.following}</div>
              <div className="text-muted text-xs">Following</div>
            </GlassCard>
          </motion.div>
        </motion.div>
      )}

      {/* GitHub contribution graph embed */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <GlassCard hover={false} className="overflow-hidden">
          <img
            src={`https://ghchart.rshah.org/3B82F6/${username}`}
            alt="GitHub Contribution Graph"
            className="w-full"
          />
        </GlassCard>
      </motion.div>

      {/* Repository cards */}
      {repos.length > 0 && (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {repos.map((repo) => (
            <motion.div key={repo.name} variants={staggerItem}>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <GlassCard className="h-full">
                  <h4 className="font-bold text-sm mb-2 text-primary">
                    {repo.name}
                  </h4>
                  <p className="text-muted text-xs mb-4 line-clamp-2">
                    {repo.description || 'No description'}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted">
                    {repo.language && (
                      <span className="flex items-center gap-1">
                        <span
                          className="w-3 h-3 rounded-full"
                          style={{
                            backgroundColor:
                              languageColors[repo.language] || '#8B5CF6',
                          }}
                        />
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3 h-3" />
                      {repo.forks_count}
                    </span>
                  </div>
                </GlassCard>
              </a>
            </motion.div>
          ))}
        </motion.div>
      )}
    </SectionWrapper>
  );
}
