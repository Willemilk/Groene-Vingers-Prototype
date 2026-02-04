'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import FloatingLeaves from '../components/FloatingLeaves';
import ParallaxSection from '../components/ParallaxSection';
import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';
import Card from '../components/Card';
import { GiFlowerPot, GiPlantRoots, GiWateringCan, GiSunflower } from 'react-icons/gi';

export default function Home() {
  return (
    <>
      {/* Floating leaves background */}
      <FloatingLeaves count={20} />

      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Animated Background Image with Parallax */}
        <ParallaxSection speed={-0.3} className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 scale-110"
            style={{
              backgroundImage: 'url(/assets/images/REMY-tuincentrum-05.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-garden-forest-900/80 via-garden-forest-800/70 to-garden-forest-700/60" />
        </ParallaxSection>

        {/* Main Content */}
        <div className="relative z-10 w-[95%] max-w-[1400px] min-h-[90vh] glass-panel-strong rounded-[2.5rem] p-8 md:p-12 flex flex-col shadow-2xl">
          {/* Animated Header */}
          <motion.header
            className="flex flex-col md:flex-row items-center justify-between pb-8 border-b border-white/10 gap-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="font-playfair text-3xl font-bold text-white flex items-center gap-3 drop-shadow-md group"
            >
              <motion.div
                animate={{
                  rotate: [0, -10, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <GiSunflower className="text-garden-flower-yellow text-4xl group-hover:text-garden-flower-orange transition-colors" />
              </motion.div>
              Groene Vingers
            </Link>

            <nav className="flex gap-10 items-center flex-wrap justify-center">
              {['Chatbot', 'Diensten', 'Over ons', 'Contact'].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                >
                  <Link
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-white text-sm font-medium opacity-90 hover:opacity-100 hover:text-garden-mint transition-all hover:-translate-y-0.5 relative group text-shadow-garden"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-garden-leaf to-garden-mint rounded-full transition-all group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button variant="spring" size="md">
                💬 Direct tuinadvies
              </Button>
            </motion.div>
          </motion.header>

          {/* Hero Content with Parallax */}
          <div className="flex-1 flex flex-col justify-center max-w-[800px] py-12">
            <ParallaxSection speed={0.2}>
              <motion.h1
                className="font-playfair text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-tight mb-8 text-shadow-garden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="inline-block bg-gradient-to-r from-white via-garden-mint to-garden-leaf bg-clip-text text-transparent">
                  Altijd groene
                </span>
                <br />
                <span className="inline-block bg-gradient-to-r from-garden-leaf via-garden-sage to-white bg-clip-text text-transparent">
                  vingers.
                </span>
              </motion.h1>
            </ParallaxSection>

            <motion.p
              className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 max-w-[650px] drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Stel al je tuinvragen en krijg direct slim, persoonlijk en begrijpelijk advies —
              van plantenverzorging tot seizoentips. Van groenten tot bloemen, wij helpen je tuin floreren.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/chatbot">
                <Button variant="primary" size="lg">
                  Start de chatbot →
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Animated Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 right-12 w-14 h-14 glass-panel rounded-full flex items-center justify-center text-white cursor-pointer border border-white/30 hover:border-garden-leaf transition-all"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            whileHover={{ scale: 1.1 }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Features Section with Scroll Reveals */}
      <section className="relative py-24 px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-white text-center mb-6 text-shadow-garden">
              Jouw Tuin, Onze Expertise
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-xl text-white/85 text-center mb-16 max-w-3xl mx-auto">
              Ontdek hoe wij je helpen om je tuin het hele jaar door prachtig te houden
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: GiFlowerPot,
                title: 'Plantadvies',
                description: 'Vind de perfecte planten voor jouw tuin en klimaat',
                color: 'text-garden-flower-pink',
                delay: 0.1
              },
              {
                icon: GiWateringCan,
                title: 'Verzorgingstips',
                description: 'Leer hoe je je planten gezond en sterk houdt',
                color: 'text-garden-sky',
                delay: 0.2
              },
              {
                icon: GiPlantRoots,
                title: 'Tuinontwerp',
                description: 'Creëer een mooie en functionele tuinindeling',
                color: 'text-garden-soil',
                delay: 0.3
              },
              {
                icon: GiSunflower,
                title: 'Seizoentips',
                description: 'Blijf op de hoogte van belangrijke tuinwerkzaamheden',
                color: 'text-garden-flower-yellow',
                delay: 0.4
              }
            ].map((feature, index) => (
              <ScrollReveal key={feature.title} direction="up" delay={feature.delay}>
                <Card variant="glass" className="p-8 h-full flex flex-col items-center text-center">
                  <feature.icon className={`${feature.color} text-6xl mb-6`} />
                  <h3 className="font-playfair text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={0.5}>
            <div className="text-center mt-16">
              <Link href="/diensten">
                <Button variant="garden" size="lg">
                  Bekijk al onze diensten
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
