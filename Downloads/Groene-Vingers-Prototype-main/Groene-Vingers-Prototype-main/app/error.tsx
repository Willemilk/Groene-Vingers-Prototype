'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import Card from '@/components/Card';
import FloatingLeaves from '@/components/FloatingLeaves';
import { GiWiltedFlower } from 'react-icons/gi';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-garden flex items-center justify-center p-4">
      <FloatingLeaves count={10} />

      <Card variant="glass" className="p-12 max-w-md text-center relative z-10" hover={false}>
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5 }}
        >
          <GiWiltedFlower className="text-garden-flower-pink text-8xl mx-auto mb-6 opacity-80" />
        </motion.div>

        <motion.h2
          className="text-white font-playfair text-4xl font-bold mb-4 text-shadow-garden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Oeps! Deze bloem verwelkt...
        </motion.h2>

        <motion.p
          className="text-white/85 mb-8 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Er is iets misgegaan in onze tuin. Laten we het opnieuw proberen!
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Button onClick={reset} variant="spring">
            Probeer opnieuw
          </Button>
          <Link href="/">
            <Button variant="secondary">Terug naar home</Button>
          </Link>
        </motion.div>
      </Card>
    </div>
  );
}
