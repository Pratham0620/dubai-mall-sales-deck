import React from 'react';

interface DeckCardProps {
  children: React.ReactNode;
  className?: string;
}

export const DeckCard: React.FC<DeckCardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`relative border border-white/10 overflow-hidden transition-all duration-700 ${className}`.trim()}
    >
      {children}
    </div>
  );
};
