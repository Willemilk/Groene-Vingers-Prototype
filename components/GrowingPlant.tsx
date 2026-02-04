'use client';

import { motion } from 'framer-motion';

const GrowingPlant = () => {
  return (
    <div className="flex items-end justify-center gap-2 h-16">
      {/* Stem 1 */}
      <motion.div
        className="w-2 bg-gradient-to-t from-garden-forest-700 to-garden-leaf rounded-t-full"
        initial={{ height: 0 }}
        animate={{ height: [0, 60, 50, 60] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <motion.div
          className="w-4 h-4 bg-garden-flower-pink rounded-full -mt-2 -ml-1"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 0.9, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        />
      </motion.div>

      {/* Stem 2 */}
      <motion.div
        className="w-2 bg-gradient-to-t from-garden-forest-700 to-garden-sage rounded-t-full"
        initial={{ height: 0 }}
        animate={{ height: [0, 70, 60, 70] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.2,
        }}
      >
        <motion.div
          className="w-4 h-4 bg-garden-flower-yellow rounded-full -mt-2 -ml-1"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 0.9, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.7,
          }}
        />
      </motion.div>

      {/* Stem 3 */}
      <motion.div
        className="w-2 bg-gradient-to-t from-garden-forest-700 to-garden-mint rounded-t-full"
        initial={{ height: 0 }}
        animate={{ height: [0, 55, 45, 55] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.4,
        }}
      >
        <motion.div
          className="w-4 h-4 bg-garden-flower-purple rounded-full -mt-2 -ml-1"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 0.9, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.9,
          }}
        />
      </motion.div>
    </div>
  );
};

export default GrowingPlant;
