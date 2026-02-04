'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import Card from '@/components/Card';
import FloatingLeaves from '@/components/FloatingLeaves';
import { GiMaze, GiFlowerPot } from 'react-icons/gi';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-garden flex items-center justify-center p-4">
      <FloatingLeaves count={15} />

      <Card variant="glass" className="p-12 max-w-lg text-center relative z-10" hover={false}>
        <motion.div
          className="flex justify-center items-center gap-4 mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <GiMaze className="text-garden-leaf text-7xl" />
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          >
            <GiFlowerPot className="text-garden-flower-orange text-6xl" />
          </motion.div>
        </motion.div>

        <motion.h2
          className="text-white font-playfair text-8xl font-bold mb-4 text-shadow-garden bg-gradient-to-r from-garden-leaf to-garden-mint bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          404
        </motion.h2>

        <motion.p
          className="text-white text-2xl mb-3 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Verdwaald in de tuin?
        </motion.p>

        <motion.p
          className="text-white/75 mb-8 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Deze pagina bestaat niet of is verplaatst naar een andere plek in onze tuin.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link href="/">
            <Button variant="spring" size="lg">
              Terug naar de tuin
            </Button>
          </Link>
        </motion.div>
      </Card>
    </div>
  );
}
