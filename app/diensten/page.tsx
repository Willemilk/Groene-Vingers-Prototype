import Link from 'next/link';

export default function DienstenPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2d5a27] to-[#1e3c19] p-4">
      <div className="max-w-4xl mx-auto">
        <header className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-white font-playfair text-2xl font-bold hover:opacity-80 transition-opacity">
              Groene Vingers
            </Link>
            <nav className="flex gap-6">
              <Link href="/chatbot" className="text-white/90 hover:text-white transition-colors">Chatbot</Link>
              <Link href="/diensten" className="text-white font-semibold">Diensten</Link>
              <Link href="/over-ons" className="text-white/90 hover:text-white transition-colors">Over ons</Link>
              <Link href="/contact" className="text-white/90 hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>
        </header>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12">
          <h1 className="text-white font-playfair text-4xl font-bold mb-6">Onze Diensten</h1>

          <div className="space-y-8 text-white">
            <div>
              <h2 className="text-2xl font-semibold mb-3">🤖 AI Tuinadvies Chatbot</h2>
              <p className="text-white/80 leading-relaxed">
                Stel al je tuinvragen aan onze slimme chatbot, aangedreven door Claude AI.
                Krijg direct persoonlijk advies over plantenverzorging, seizoenstips, groententeelt,
                bloemenonderhoud en meer. De chatbot leert je tuin kennen en geeft steeds beter advies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">🌱 Persoonlijk Tuinprofiel</h2>
              <p className="text-white/80 leading-relaxed">
                Maak een profiel van je tuin met locatie, bodemtype, zonlichttoetreding en je planten.
                Onze AI onthoudt deze informatie en geeft advies specifiek afgestemd op jouw situatie.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">📚 Gesprekgeschiedenis</h2>
              <p className="text-white/80 leading-relaxed">
                Al je conversaties worden opgeslagen zodat je altijd terug kunt kijken naar eerder gegeven adviezen.
                Perfect voor het bijhouden van seizoensgebonden tips en langetermijnplanning.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">🌍 Meertalige Ondersteuning</h2>
              <p className="text-white/80 leading-relaxed">
                Hoewel onze interface in het Nederlands is, kan de chatbot in meerdere talen antwoorden.
                Handig voor internationaal tuinadvies of specifieke plantnamen.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Link
              href="/chatbot"
              className="inline-flex items-center gap-3 bg-white text-[#2d5a27] px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all"
            >
              Start de chatbot →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
