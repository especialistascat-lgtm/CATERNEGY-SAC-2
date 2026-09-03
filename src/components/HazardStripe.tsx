import React from 'react';

interface HazardStripeProps {
  className?: string;
  height?: string;
  animated?: boolean;
}

export const HazardStripe: React.FC<HazardStripeProps> = ({
  className = '',
  height = 'h-3.5',
  animated = false,
}) => {
  return (
    <div
      aria-hidden="true"
      className={`w-full overflow-hidden ${height} ${className}`}
      style={{
        backgroundColor: '#FAB800',
        backgroundImage:
          'repeating-linear-gradient(-45deg, #0A0C10, #0A0C10 14px, #FAB800 14px, #FAB800 28px)',
      }}
    />
  );
};
