'use client';

import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'glass' | 'solid' | 'gradient';
  hover?: boolean;
}

export default function Card({
  children,
  className = '',
  variant = 'glass',
  hover = true
}: CardProps) {
  const variants = {
    glass: 'glass-panel-strong rounded-3xl',
    solid: 'bg-white text-garden-forest-800 rounded-3xl shadow-garden',
    gradient: 'bg-gradient-garden text-white rounded-3xl shadow-glow-green'
  };

  const baseClasses = `${variants[variant]} ${className}`;

  if (!hover) {
    return <div className={baseClasses}>{children}</div>;
  }

  return (
    <motion.div
      className={baseClasses}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -4,
        transition: { duration: 0.2 }
      }}
    >
      {children}
    </motion.div>
  );
}
