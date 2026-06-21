'use client';

import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: false,
        fpsLimit: 60,
        particles: {
          color: { value: ['#3B82F6', '#8B5CF6', '#06B6D4'] },
          links: {
            color: '#3B82F6',
            distance: 150,
            enable: true,
            opacity: 0.1,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: 'none' as const,
            outModes: { default: 'bounce' as const },
          },
          number: {
            value: 60,
            density: { enable: true },
          },
          opacity: {
            value: { min: 0.1, max: 0.4 },
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 -z-10"
    />
  );
}
