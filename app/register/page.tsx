'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Er is iets misgegaan');
      } else {
        router.push('/login?registered=true');
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

        <h2 className="text-white text-2xl font-semibold mb-6 text-center">Registreren</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-white/80 text-sm mb-2">
              Naam
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white/10 text-white placeholder-white/40 rounded-xl px-4 py-3 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
              placeholder="Je naam"
              required
            />
          </div>

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
              placeholder="Minimaal 8 tekens"
              required
              minLength={8}
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
            {loading ? 'Registreren...' : 'Account aanmaken'}
          </button>
        </form>

        <p className="text-white/60 text-sm text-center mt-6">
          Al een account?{' '}
          <Link href="/login" className="text-white font-semibold hover:underline">
            Log hier in
          </Link>
        </p>
      </div>
    </div>
  );
}
