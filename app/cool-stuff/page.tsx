'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CoolStuff() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden text-neutral-100">
      <div className="absolute inset-0 -z-10 bg-fixed bg-center bg-cover" style={{ backgroundImage: 'url(/TerrariaBackground.png)', imageRendering: 'pixelated' }} />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/80 via-black/50 to-black/85" />
      <main className="mx-auto max-w-3xl px-6 py-12">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', stiffness: 150, damping: 18 }} className="rounded-3xl border border-white/15 bg-white/5 p-6 md:p-8 backdrop-blur-md shadow-[0_8px_0_#0a0a0a]">
          <h1 className="text-3xl font-extrabold tracking-tight [text-shadow:2px_2px_0_#000]">Cool Stuff</h1>
          <p className="mt-4 text-sm/6 text-neutral-200/90">Work in progress😋</p>
          <div className="mt-6">
            <Link href="/" className="rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-md shadow-[0_3px_0_#0b0b0b] hover:-translate-y-0.5 active:translate-y-[1px] transition">← Back to links</Link>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
