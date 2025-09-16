'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Youtube, Twitter, Instagram, ExternalLink } from 'lucide-react';
import TerrariaBg from '../Images/TerrariaBackground.png';
import Logo from '../Images/logo.png';

const LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/Willemilk?tab=overview&from=2025-09-01&to=2025-09-16',
    icon: <Github size={18} />,
    desc: 'Random projects, mostly school stuff',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@willemilk1942/videos',
    icon: <Youtube size={18} />,
    desc: 'Create gaming videos mostly geometry dash a lot of videos are unlisted / private because this channel is more of a progression update thingy for geometry dash or just random videos i want to share with my friends i am not really "trying to make it" or anything like that',
  },
  {
    label: 'Twitter / X',
    href: 'https://x.com/WillemdeWit040',
    icon: <Twitter size={18} />,
    desc: 'Mostly scrolling and watching people argue 😭',
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@willemdewit10?lang=en-GB',
    icon: <Youtube size={18} />,
    desc: 'Using less now because of Reels',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/willemilk/',
    icon: <Instagram size={18} />,
    desc: 'Life stuff and reels doomscrolling',
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${TerrariaBg.src})`, imageRendering: 'pixelated' }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/80 via-black/50 to-black/85" />

      <main className="px-6 py-10 text-neutral-100">
        <motion.section
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 140, damping: 18 }}
          className="mx-auto mb-10 w-full max-w-5xl"
        >
          <div className="relative rounded-3xl border border-white/15 bg-white/5 p-6 md:p-8 backdrop-blur-md shadow-[0_8px_0_#0a0a0a]">
            <div className="absolute inset-0 rounded-3xl [mask-image:radial-gradient(160%_120%_at_0%_0%,black,transparent)] pointer-events-none">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.18 }}
                transition={{ delay: 0.2, duration: 1.2 }}
                className="absolute -top-10 -left-10 h-44 w-44 rounded-full bg-gradient-to-br from-indigo-400 via-sky-300 to-emerald-300 blur-3xl"
              />
            </div>

            <div className="flex items-center gap-5">
              <div className="h-16 w-16 shrink-0 rounded-2xl border border-white/20 bg-black/40 shadow-[0_5px_0_#111827] grid place-items-center overflow-hidden">
                <Image src={Logo} alt="logo" width={64} height={64} className="object-contain rounded-2xl" />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight [text-shadow:2px_2px_0_#000]">Hey, I’m Willem</h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  className="mt-1 text-sm/6 text-neutral-200/90"
                >
                  this is my linktree about me erm idunno tbh but just take a look
                </motion.p>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <Link href="/about" className="rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-md shadow-[0_3px_0_#0b0b0b] hover:-translate-y-0.5 active:translate-y-[1px] transition">
                  About Me
                </Link>
                <Link href="/cool-stuff" className="rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-md shadow-[0_3px_0_#0b0b0b] hover:-translate-y-0.5 active:translate-y-[1px] transition">
                  Cool Stuff
                </Link>
              </div>
            </div>

            <div className="mt-4 flex md:hidden items-center gap-2">
              <Link href="/about" className="rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-sm backdrop-blur-md shadow-[0_3px_0_#0b0b0b]">
                About Me
              </Link>
              <Link href="/cool-stuff" className="rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-sm backdrop-blur-md shadow-[0_3px_0_#0b0b0b]">
                Cool Stuff
              </Link>
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.25, type: 'spring', stiffness: 140, damping: 20 }}
              className="mt-5 h-[3px] w-full origin-left rounded-full bg-gradient-to-r from-white/60 via-white/30 to-transparent"
            />
          </div>
        </motion.section>

        <div className="mx-auto w-full max-w-2xl">
          <ul id="links" className="space-y-3">
            {LINKS.map((l, i) => (
              <motion.li
                key={l.href}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.06, type: 'spring', stiffness: 180, damping: 18 }}
              >
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="group flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md shadow-[0_6px_0_#0a0a0a] hover:translate-y-[-2px] hover:shadow-[0_8px_0_#0a0a0a] active:translate-y-[1px] transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="shrink-0 rounded-md border border-white/20 bg-black/30 p-2 shadow-[0_2px_0_#0a0a0a] group-hover:scale-105 transition">
                      {l.icon}
                    </span>
                    <div>
                      <div className="font-semibold tracking-wide">{l.label}</div>
                      <div className="text-xs text-neutral-200/85">{l.desc}</div>
                    </div>
                  </div>
                  <ExternalLink size={16} className="opacity-60 group-hover:opacity-100 transition" />
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
