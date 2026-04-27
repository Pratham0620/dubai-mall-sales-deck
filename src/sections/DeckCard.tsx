import React from 'react';

interface DeckCardProps {
  children: React.ReactNode;
  className?: string;
}

export const DeckCard: React.FC<DeckCardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`relative border-4 border-black overflow-hidden transition-all duration-500 ${className}`.trim()}
    >
      {children}
    </div>
  );
};