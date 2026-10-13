import React from 'react';

interface CatEnergyLogoProps {
  variant?: 'yellow' | 'dark' | 'white' | 'adaptive';
  subtitleType?: 'auditoria' | 'consultorias' | 'none';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
}

export const CatEnergyLogo: React.FC<CatEnergyLogoProps> = ({
  variant = 'yellow',
  size = 'md',
  className = '',
  onClick,
}) => {
  // Height configurations for responsive layouts
  const heightMap = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-20 sm:h-24',
  };

  // Official Improved Brand Logo (logo-original-1.png):
  // High-resolution 2170x725 PNG with gold beveled letters and embossed 3D depth
  const logoSrc = '/logo-original-1.png';

  return (
    <div
      id="catenergy-brand-logo"
      onClick={onClick}
      className={`inline-flex items-center select-none cursor-pointer group ${className}`}
      title="CAT ENERGY - Auditoría, Consultoría y Servicios en Energía"
    >
      <img
        src={logoSrc}
        alt="CAT ENERGY - Auditoría, Consultoría y Servicios en Energía"
        className={`${heightMap[size]} w-auto object-contain filter drop-shadow-[0_4px_14px_rgba(0,0,0,0.55)] transition-all duration-300 group-hover:scale-[1.03] group-hover:drop-shadow-[0_0_20px_rgba(250,184,0,0.6)]`}
        loading="eager"
      />
    </div>
  );
};

