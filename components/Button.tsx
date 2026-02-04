'use client';

import { ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'garden' | 'spring';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = 'rounded-full font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden';

  const variantClasses = {
    primary: 'bg-white text-garden-forest-600 hover:bg-garden-forest-50 shadow-garden hover:shadow-glow-green',
    secondary: 'glass-panel text-white border border-white/30 hover:bg-white/30 shadow-leaf',
    ghost: 'bg-transparent text-white hover:bg-white/10',
    garden: 'bg-gradient-garden text-white shadow-garden hover:shadow-glow-green',
    spring: 'bg-gradient-spring text-garden-forest-800 shadow-leaf hover:shadow-glow-green'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      whileHover={{
        scale: 1.05,
        y: -2,
      }}
      whileTap={{
        scale: 0.98,
        y: 0,
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 17,
      }}
      {...props}
    >
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6 }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
