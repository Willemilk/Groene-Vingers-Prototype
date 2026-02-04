'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Header from '@/components/Header';
import Card from '@/components/Card';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function ProfielPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#2d5a27] to-[#1e3c19] flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!session) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2d5a27] to-[#1e3c19] p-4">
      <div className="max-w-4xl mx-auto">
        <Header currentPage="profiel" />

        <Card className="p-8 md:p-12">
          <h1 className="text-white font-playfair text-4xl font-bold mb-6">Mijn Profiel</h1>

          <div className="space-y-6">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h2 className="text-white text-xl font-semibold mb-4">Account Informatie</h2>
              <div className="space-y-3 text-white/80">
                <div>
                  <span className="text-white/60">Naam:</span>{' '}
                  <span className="text-white font-medium">{session.user?.name}</span>
                </div>
                <div>
                  <span className="text-white/60">Email:</span>{' '}
                  <span className="text-white font-medium">{session.user?.email}</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h2 className="text-white text-xl font-semibold mb-4">Tuinprofiel</h2>
              <p className="text-white/60 text-sm mb-4">Binnenkort beschikbaar: sla je tuininformatie op voor beter advies</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
