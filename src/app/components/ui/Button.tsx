
import React from 'react';

interface ButtonProps {
  className?: string;
  variant?: 'solid' | 'outline';
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  className = '',
  variant = 'solid',
  disabled = false,
  onClick,
  children,
}) => {
  return (
    <button
      className={`
        inline-flex w-full h-12 items-center justify-center rounded-md
        ${variant === 'solid' ? 'bg-gray-900 text-gray-50' : 'border border-gray-900 text-gray-900'}
        text-sm font-medium shadow transition-colors hover:bg-gray-900/90
        focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950
        disabled:pointer-events-none disabled:opacity-50
        dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300
        ${className}
      `}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;