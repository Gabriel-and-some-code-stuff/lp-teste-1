import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  // Added 'border-2 border-transparent' to baseStyles.
  // This ensures that solid buttons have the same box-model height as outline buttons (which have visible borders).
  const baseStyles = "inline-flex items-center justify-center font-bold rounded transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 border-2 border-transparent";
  
  const variants = {
    primary: "bg-brand-primary text-white hover:bg-blue-800 focus:ring-brand-primary shadow-lg hover:shadow-xl",
    secondary: "bg-brand-secondary text-white hover:bg-gray-900 focus:ring-brand-secondary",
    accent: "bg-brand-accent text-white hover:bg-green-700 focus:ring-brand-accent shadow-lg hover:shadow-green-900/20",
    // Removed 'border-2' here because it is now in baseStyles
    outline: "border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const width = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};