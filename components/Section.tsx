import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: 'white' | 'gray' | 'dark';
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  id, 
  className = '', 
  background = 'white' 
}) => {
  const bgStyles = {
    white: 'bg-white',
    gray: 'bg-brand-surface',
    dark: 'bg-brand-secondary text-white'
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${bgStyles[background]} ${className}`}>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {children}
      </div>
    </section>
  );
};