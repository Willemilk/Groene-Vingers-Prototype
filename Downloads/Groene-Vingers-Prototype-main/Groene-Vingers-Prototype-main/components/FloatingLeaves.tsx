'use client';

import { motion } from 'framer-motion';
import { GiLeafSwirl } from 'react-icons/gi';

interface Leaf {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
  color: string;
}

const FloatingLeaves = ({ count = 15 }: { count?: number }) => {
  const colors = [
    'text-garden-leaf',
    'text-garden-moss',
    'text-garden-sage',
    'text-garden-mint',
    'text-garden-forest-500',
  ];

  const leaves: Leaf[] = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 10 + Math.random() * 15,
    size: 20 + Math.random() * 30,
    rotation: Math.random() * 360,
    color: colors[Math.floor(Math.random() * colors.length)],
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className={`absolute ${leaf.color} opacity-20`}
          style={{
            left: `${leaf.x}%`,
            top: '-10%',
          }}
          initial={{ y: -100, rotate: 0, opacity: 0 }}
          animate={{
            y: '110vh',
            rotate: 360,
            opacity: [0, 0.3, 0.3, 0],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <motion.div
            animate={{
              x: [0, 50, -50, 0],
            }}
            transition={{
              duration: leaf.duration / 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <GiLeafSwirl
              size={leaf.size}
              style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingLeaves;
