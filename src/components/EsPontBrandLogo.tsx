import React from 'react';

interface EsPontBrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  withVillaPrefix?: boolean;
  colorScheme?: 'gold' | 'white' | 'dark' | 'sand';
  useImageFormat?: boolean;
}

export const EsPontBrandLogo: React.FC<EsPontBrandLogoProps> = ({
  className = '',
  size = 'md',
  withVillaPrefix = false,
  colorScheme = 'gold',
  useImageFormat = false
}) => {
  const imgHeightClasses = {
    sm: 'h-6 sm:h-7',
    md: 'h-8 sm:h-9',
    lg: 'h-10 sm:h-12',
    xl: 'h-12 sm:h-14',
    hero: 'h-14 sm:h-20 lg:h-24'
  };

  const textSizes = {
    sm: 'text-xl sm:text-2xl',
    md: 'text-2xl sm:text-3xl',
    lg: 'text-3xl sm:text-4xl',
    xl: 'text-4xl sm:text-5xl',
    hero: 'text-5xl sm:text-7xl lg:text-8xl'
  };

  const colorClasses = {
    gold: 'text-[#D8B475]',
    sand: 'text-[#D8B475]',
    white: 'text-white',
    dark: 'text-[#2D2825]'
  };

  // If useImageFormat is requested:
  if (useImageFormat) {
    const logoSrc = colorScheme === 'dark' ? '/es-pont-logo-dark.svg' : '/es-pont-logo-light.svg';
    return (
      <span className={`inline-flex items-center ${className}`}>
        <img
          src={logoSrc}
          alt="ES PONT Logo"
          className={`${imgHeightClasses[size]} w-auto object-contain`}
        />
      </span>
    );
  }

  // Pure inline vector typography with tilted 'O' in GFS Didot
  return (
    <span
      className={`inline-flex flex-col select-none ${className}`}
      style={{ fontFamily: "'GFS Didot', 'Didot', 'Bodoni MT', Georgia, serif" }}
    >
      {withVillaPrefix && (
        <span className="text-[0.42em] tracking-[0.28em] font-light uppercase opacity-80 mb-0.5 text-current">
          VILLA
        </span>
      )}
      <span className={`inline-flex items-baseline font-normal uppercase leading-none ${textSizes[size]} ${colorClasses[colorScheme]}`}>
        <span className="tracking-[0.16em]">ES</span>
        <span className="w-[0.38em]"></span>
        <span className="tracking-[0.06em]">P</span>
        {/* The signature tilted 'O' */}
        <span
          className="inline-block transform -rotate-[18deg] origin-center -translate-y-[0.04em] mx-[0.02em] select-none"
          style={{ display: 'inline-block' }}
        >
          O
        </span>
        <span className="tracking-[0.14em]">NT</span>
      </span>
    </span>
  );
};
