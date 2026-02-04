'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError('Ongeldige email of wachtwoord');
      } else {
        router.push('/chatbot');
      }
    } catch (error) {
      setError('Er is iets misgegaan. Probeer het opnieuw.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2d5a27] to-[#1e3c19] flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 max-w-md w-full shadow-2xl">
        <Link href="/" className="text-white font-playfair text-3xl font-bold mb-8 block text-center">
          Groene Vingers
        </Link>

        <h2 className="text-white text-2xl font-semibold mb-6 text-center">Inloggen</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-white/80 text-sm mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/10 text-white placeholder-white/40 rounded-xl px-4 py-3 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
              placeholder="jouw@email.nl"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-white/80 text-sm mb-2">
              Wachtwoord
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/10 text-white placeholder-white/40 rounded-xl px-4 py-3 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
              placeholder="••••••••"
              required
            />
          </div>

          {error && (
            <div className="bg-red-500/20 border border-red-500/40 text-white rounded-xl px-4 py-3 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-[#2d5a27] py-3 rounded-xl font-semibold hover:bg-white/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Inloggen...' : 'Inloggen'}
          </button>
        </form>

        <p className="text-white/60 text-sm text-center mt-6">
          Nog geen account?{' '}
          <Link href="/register" className="text-white font-semibold hover:underline">
            Registreer hier
          </Link>
        </p>
      </div>
    </div>
  );
}
