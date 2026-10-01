import React from 'react';

interface BotanicalProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center-divider';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BotanicalBranch: React.FC<BotanicalProps> = ({
  position = 'top-right',
  className = '',
  size = 'md',
}) => {
  const sizeMap = {
    sm: 'w-16 h-16 sm:w-20 sm:h-20',
    md: 'w-24 h-24 sm:w-32 sm:h-32',
    lg: 'w-32 h-32 sm:w-44 sm:h-44',
  };

  const getTransform = () => {
    switch (position) {
      case 'top-left':
        return 'scale-x-[-1]';
      case 'bottom-left':
        return 'scale-x-[-1] scale-y-[-1]';
      case 'bottom-right':
        return 'scale-y-[-1]';
      default:
        return '';
    }
  };

  if (position === 'center-divider') {
    return (
      <div className={`flex items-center justify-center gap-3 py-2 text-[#C8A359]/70 ${className}`} aria-hidden="true">
        <svg width="60" height="16" viewBox="0 0 60 16" fill="none">
          <path d="M0 8H24M36 8H60" stroke="currentColor" strokeWidth="0.8" />
          <path d="M28 8C28 6 26 4 24 5C22 6 23 8 28 8Z" fill="currentColor" opacity="0.6" />
          <path d="M32 8C32 6 34 4 36 5C38 6 37 8 32 8Z" fill="currentColor" opacity="0.6" />
          <circle cx="30" cy="8" r="2" fill="currentColor" />
        </svg>
      </div>
    );
  }

  return (
    <div
      className={`pointer-events-none absolute opacity-40 text-[#C8A359] ${getTransform()} ${sizeMap[size]} ${className}`}
      aria-hidden="true"
    >
      {/* Delicate watercolor-style olive branch SVG */}
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-2xs">
        <path
          d="M10 90C30 75 55 45 85 15"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeOpacity="0.75"
        />
        {/* Leaves */}
        <path d="M35 68C42 62 48 64 45 72C42 80 34 76 35 68Z" fill="currentColor" fillOpacity="0.45" />
        <path d="M48 55C56 50 62 53 58 60C54 67 47 62 48 55Z" fill="currentColor" fillOpacity="0.5" />
        <path d="M60 40C68 34 74 37 70 44C66 51 59 47 60 40Z" fill="currentColor" fillOpacity="0.55" />
        <path d="M72 26C80 20 86 23 82 30C78 37 71 33 72 26Z" fill="currentColor" fillOpacity="0.6" />
        {/* Counter leaves */}
        <path d="M25 78C20 72 17 65 24 64C31 63 31 71 25 78Z" fill="currentColor" fillOpacity="0.4" />
        <path d="M39 63C34 57 31 50 38 49C45 48 45 56 39 63Z" fill="currentColor" fillOpacity="0.45" />
        <path d="M52 48C47 42 44 35 51 34C58 33 58 41 52 48Z" fill="currentColor" fillOpacity="0.5" />
        <path d="M66 33C61 27 58 20 65 19C72 18 72 26 66 33Z" fill="currentColor" fillOpacity="0.55" />
        {/* Small olive berries */}
        <circle cx="43" cy="67" r="2.5" fill="currentColor" fillOpacity="0.7" />
        <circle cx="56" cy="52" r="2.5" fill="currentColor" fillOpacity="0.7" />
        <circle cx="70" cy="37" r="2.2" fill="currentColor" fillOpacity="0.7" />
      </svg>
    </div>
  );
};
