'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GiLeafSwirl } from 'react-icons/gi';
import { useEffect, useState } from 'react';

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (page: string) => currentPage === page;

  return (
    <motion.header
      className={`glass-panel-strong rounded-3xl p-6 mb-4 sticky top-4 z-50 transition-all ${
        isScrolled ? 'shadow-glow-green' : 'shadow-garden'
      }`}
      style={{ opacity: headerOpacity }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="flex items-center justify-between flex-wrap gap-4">
        <Link
          href="/"
          className="text-white font-playfair text-2xl font-bold hover:opacity-80 transition-all flex items-center gap-2 group"
        >
          <motion.div
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <GiLeafSwirl className="text-garden-leaf text-3xl group-hover:text-garden-mint transition-colors" />
          </motion.div>
          <span className="text-shadow-garden">Groene Vingers</span>
        </Link>
        <nav className="flex gap-6">
          {[
            { href: '/chatbot', label: 'Chatbot', key: 'chatbot' },
            { href: '/diensten', label: 'Diensten', key: 'diensten' },
            { href: '/over-ons', label: 'Over ons', key: 'over-ons' },
            { href: '/contact', label: 'Contact', key: 'contact' }
          ].map(({ href, label, key }) => (
            <Link
              key={key}
              href={href}
              className="relative group"
            >
              <span
                className={`transition-colors text-shadow-garden ${
                  isActive(key)
                    ? 'text-white font-semibold'
                    : 'text-white/90 hover:text-garden-mint'
                }`}
              >
                {label}
              </span>
              {isActive(key) && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-garden-leaf to-garden-mint rounded-full"
                  layoutId="activeNav"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {!isActive(key) && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-garden-leaf to-garden-mint rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              )}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
