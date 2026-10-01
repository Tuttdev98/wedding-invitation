import React, { useMemo } from 'react';

interface PetalEffectProps {
  enabled?: boolean;
}

export const PetalEffect: React.FC<PetalEffectProps> = ({ enabled = true }) => {
  const petals = useMemo(() => {
    return Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      left: `${(i * 7.5 + 4) % 96}%`,
      delay: `${(i * 1.3) % 9}s`,
      duration: `${10 + (i % 7) * 2}s`,
      size: 14 + (i % 5) * 4,
      rotation: (i * 45) % 360,
    }));
  }, []);

  const sparkles = useMemo(() => {
    return Array.from({ length: 16 }).map((_, i) => ({
      id: i,
      left: `${(i * 6.2 + 8) % 94}%`,
      delay: `${(i * 0.9) % 7}s`,
      duration: `${8 + (i % 5) * 1.5}s`,
      size: 3 + (i % 3) * 2,
    }));
  }, []);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-20 overflow-hidden"
      aria-hidden="true"
    >
      {/* Floating ivory petals */}
      {petals.map((petal) => (
        <div
          key={`petal-${petal.id}`}
          className="absolute animate-petal"
          style={{
            top: '-30px',
            left: petal.left,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
          }}
        >
          <svg
            width={petal.size}
            height={petal.size * 1.3}
            viewBox="0 0 24 32"
            fill="none"
            style={{
              transform: `rotate(${petal.rotation}deg)`,
              filter: 'drop-shadow(0px 2px 4px rgba(200, 180, 160, 0.15))',
            }}
          >
            <path
              d="M12 0C18 7 24 16 22 24C20 30 14 32 12 32C10 32 4 30 2 24C0 16 6 7 12 0Z"
              fill="rgba(255, 248, 242, 0.7)"
              stroke="rgba(235, 215, 195, 0.4)"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      ))}

      {/* Floating golden sparkle motes */}
      {sparkles.map((sparkle) => (
        <div
          key={`sparkle-${sparkle.id}`}
          className="absolute animate-dust rounded-full bg-[#E5C170]"
          style={{
            bottom: '-20px',
            left: sparkle.left,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            animationDelay: sparkle.delay,
            animationDuration: sparkle.duration,
            boxShadow: '0 0 8px #D4AF37',
            opacity: 0.7,
          }}
        />
      ))}
    </div>
  );
};
