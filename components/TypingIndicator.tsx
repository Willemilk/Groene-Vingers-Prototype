'use client';

import { motion } from 'framer-motion';
import { GiLeafSwirl } from 'react-icons/gi';

export default function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="glass-panel rounded-3xl px-5 py-4">
        <div className="flex space-x-1 items-center">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -8, 0],
                rotate: [0, 15, -15, 0]
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: index * 0.15,
              }}
            >
              <GiLeafSwirl className="text-garden-leaf text-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
