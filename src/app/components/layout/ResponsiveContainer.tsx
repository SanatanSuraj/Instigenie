import React from 'react';

interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'none';
  padding?: boolean;
}

export const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  className = '',
  maxWidth = 'xl',
  padding = true,
}) => {
  const maxWidthClasses = {
    xs: 'max-w-screen-xs',
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    none: '',
  };

  return (
    <div
      className={`w-full mx-auto ${padding ? 'px-4 sm:px-6 md:px-8 lg:px-12' : ''} ${
        maxWidthClasses[maxWidth]
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ResponsiveContainer;
