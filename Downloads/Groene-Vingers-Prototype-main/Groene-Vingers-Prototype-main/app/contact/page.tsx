import Link from 'next/link';

export default function ContactPage() {
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
              <Link href="/diensten" className="text-white/90 hover:text-white transition-colors">Diensten</Link>
              <Link href="/over-ons" className="text-white/90 hover:text-white transition-colors">Over ons</Link>
              <Link href="/contact" className="text-white font-semibold">Contact</Link>
            </nav>
          </div>
        </header>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12">
          <h1 className="text-white font-playfair text-4xl font-bold mb-6">Contact</h1>

          <div className="space-y-6 text-white">
            <p className="text-xl text-white/90 leading-relaxed">
              Heb je vragen, suggesties of feedback? We horen graag van je!
            </p>

            <div className="space-y-6 mt-8">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h2 className="text-xl font-semibold mb-3">💬 Direct Tuinadvies</h2>
                <p className="text-white/80 mb-4">
                  Voor tuinvragen kun je direct onze chatbot gebruiken. Snel, persoonlijk en altijd beschikbaar.
                </p>
                <Link
                  href="/chatbot"
                  className="inline-block bg-white text-[#2d5a27] px-6 py-2 rounded-full font-semibold hover:bg-white/90 transition-all"
                >
                  Start chatbot
                </Link>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h2 className="text-xl font-semibold mb-3">📧 Email</h2>
                <p className="text-white/80">
                  Voor algemene vragen, feedback of samenwerking:
                </p>
                <a href="mailto:info@groenevingers.nl" className="text-white font-semibold hover:underline block mt-2">
                  info@groenevingers.nl
                </a>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h2 className="text-xl font-semibold mb-3">🐛 Technische Problemen</h2>
                <p className="text-white/80">
                  Loop je tegen een bug aan of werkt iets niet goed? Laat het ons weten:
                </p>
                <a href="mailto:support@groenevingers.nl" className="text-white font-semibold hover:underline block mt-2">
                  support@groenevingers.nl
                </a>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h2 className="text-xl font-semibold mb-3">💡 Suggesties</h2>
                <p className="text-white/80">
                  Heb je ideeën voor nieuwe features of verbeteringen? We staan altijd open voor feedback!
                </p>
                <a href="mailto:feedback@groenevingers.nl" className="text-white font-semibold hover:underline block mt-2">
                  feedback@groenevingers.nl
                </a>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <h2 className="text-2xl font-semibold mb-4">Veelgestelde Vragen</h2>
              <div className="space-y-4 text-white/80">
                <div>
                  <h3 className="text-white font-semibold mb-2">Is Groene Vingers gratis?</h3>
                  <p>Ja! Groene Vingers is momenteel volledig gratis te gebruiken.</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Hoe werkt de AI chatbot?</h3>
                  <p>Onze chatbot gebruikt Claude AI om je tuinvragen te begrijpen en persoonlijk advies te geven op basis van je tuinprofiel.</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Worden mijn gegevens opgeslagen?</h3>
                  <p>Je conversaties en tuinprofiel worden veilig opgeslagen zodat je altijd terug kunt kijken en de AI beter advies kan geven.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
