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
  subtitleType = 'auditoria',
  size = 'md',
  className = '',
  onClick,
}) => {
  // Height configurations
  const heightMap = {
    sm: 'h-9',
    md: 'h-12',
    lg: 'h-16',
    xl: 'h-24',
  };

  const primaryColor =
    variant === 'yellow'
      ? '#FAB800'
      : variant === 'dark'
      ? '#111827'
      : variant === 'white'
      ? '#FFFFFF'
      : '#FAB800';

  const subtitleColor =
    variant === 'yellow'
      ? 'currentColor'
      : variant === 'dark'
      ? '#1F2937'
      : variant === 'white'
      ? '#E2E8F0'
      : 'currentColor';

  const subtitleText =
    subtitleType === 'auditoria'
      ? 'AUDITORIA, CONSULTORIA Y SERVICIOS EN ENERGIA'
      : 'CONSULTORIAS EN ALTA TENSIÓN Y ENERGÍA';

  return (
    <div
      id="catenergy-brand-logo"
      onClick={onClick}
      className={`inline-flex items-center select-none cursor-pointer group ${className}`}
      title="CATENERGY SAC - Consultorías en Alta Tensión y Energía"
    >
      <svg
        viewBox="0 0 540 120"
        className={`${heightMap[size]} w-auto max-w-full drop-shadow-sm transition-transform duration-200 group-hover:scale-[1.02]`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Pylon Tower Icon Exactly as in real logo */}
        <g stroke={primaryColor} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Top peak */}
          <polygon points="48,14 42,34 54,34" fill={primaryColor} />
          <line x1="48" y1="10" x2="48" y2="16" />

          {/* Upper crossarm */}
          <line x1="26" y1="34" x2="70" y2="34" strokeWidth="5" />
          <line x1="26" y1="34" x2="42" y2="48" />
          <line x1="70" y1="34" x2="54" y2="48" />

          {/* Upper body X truss */}
          <line x1="39" y1="34" x2="35" y2="62" />
          <line x1="57" y1="34" x2="61" y2="62" />
          <line x1="39" y1="34" x2="61" y2="62" />
          <line x1="57" y1="34" x2="35" y2="62" />

          {/* Lower heavy crossarm & insulator strings */}
          <line x1="16" y1="62" x2="80" y2="62" strokeWidth="6" />
          <line x1="20" y1="62" x2="20" y2="72" strokeWidth="3.5" />
          <line x1="76" y1="62" x2="76" y2="72" strokeWidth="3.5" />
          <line x1="48" y1="62" x2="48" y2="72" strokeWidth="3.5" />
          <line x1="16" y1="62" x2="33" y2="82" />
          <line x1="80" y1="62" x2="63" y2="82" />

          {/* Lower legs with lattice truss */}
          <line x1="33" y1="62" x2="25" y2="98" strokeWidth="5.5" />
          <line x1="63" y1="62" x2="71" y2="98" strokeWidth="5.5" />
          <line x1="33" y1="62" x2="71" y2="98" />
          <line x1="63" y1="62" x2="25" y2="98" />
          <line x1="28" y1="80" x2="68" y2="80" strokeWidth="3.5" />

          {/* Ground footing base */}
          <line x1="18" y1="98" x2="78" y2="98" strokeWidth="6.5" />
        </g>

        {/* Brand Name "CAT ENERGY" */}
        <text
          x="100"
          y="78"
          fontFamily="'Impact', 'Arial Black', -apple-system, sans-serif"
          fontSize="74"
          fontWeight="900"
          letterSpacing="1.2"
          fill={primaryColor}
        >
          CAT ENERGY
        </text>

        {/* Subtitle - Proportioned cleanly under CAT ENERGY without overflowing */}
        {subtitleType !== 'none' && (
          <text
            x="102"
            y="102"
            textLength="380"
            lengthAdjust="spacing"
            fontFamily="'Plus Jakarta Sans', 'Segoe UI', -apple-system, sans-serif"
            fontSize="9"
            fontWeight="700"
            fill={subtitleColor}
          >
            {subtitleText}
          </text>
        )}
      </svg>
    </div>
  );
};
