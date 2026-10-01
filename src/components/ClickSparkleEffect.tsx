import React, { useState, useEffect } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  vx: number;
  vy: number;
}

export const ClickSparkleEffect: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    let particleId = 0;
    const colors = ['#D4AF37', '#E5C170', '#C8A359', '#F3E5AB', '#FAF8F5'];

    const handleClick = (e: MouseEvent) => {
      // Don't trigger on input/select elements to prevent interference with typing
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT') {
        return;
      }

      const newParticles: Particle[] = Array.from({ length: 6 }).map(() => {
        const angle = Math.random() * Math.PI * 2;
        const speed = 1.5 + Math.random() * 2.5;
        return {
          id: ++particleId,
          x: e.clientX,
          y: e.clientY + window.scrollY,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: 4 + Math.random() * 6,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 1.2,
        };
      });

      setParticles((prev) => [...prev.slice(-24), ...newParticles]);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    if (particles.length === 0) return;

    const timer = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            size: p.size * 0.92,
          }))
          .filter((p) => p.size > 0.8)
      );
    }, 30);

    return () => clearInterval(timer);
  }, [particles]);

  if (particles.length === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}px`,
            top: `${p.y - window.scrollY}px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            boxShadow: `0 0 6px ${p.color}`,
            transform: 'translate(-50%, -50%)',
            transition: 'opacity 0.2s',
          }}
        />
      ))}
    </div>
  );
};
