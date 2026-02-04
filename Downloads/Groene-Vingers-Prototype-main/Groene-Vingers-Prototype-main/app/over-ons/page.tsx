import Link from 'next/link';

export default function OverOnsPage() {
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
              <Link href="/over-ons" className="text-white font-semibold">Over ons</Link>
              <Link href="/contact" className="text-white/90 hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>
        </header>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12">
          <h1 className="text-white font-playfair text-4xl font-bold mb-6">Over Groene Vingers</h1>

          <div className="space-y-6 text-white">
            <p className="text-xl text-white/90 leading-relaxed">
              Groene Vingers is jouw persoonlijke AI tuinexpert. We combineren de kracht van kunstmatige
              intelligentie met passie voor tuinieren om iedereen te helpen een bloeiende tuin te creëren.
            </p>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold mt-8 mb-4">Onze Missie</h2>
              <p className="text-white/80 leading-relaxed">
                Tuinieren toegankelijk maken voor iedereen, ongeacht ervaring. Door slimme technologie
                te combineren met tuinexpertise, bieden we persoonlijk advies dat groeit met jouw tuin.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Waarom Groene Vingers?</h2>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span><strong className="text-white">Altijd beschikbaar:</strong> Krijg tuinadvies wanneer je het nodig hebt, 24/7</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span><strong className="text-white">Persoonlijk:</strong> Advies specifiek voor jouw tuin en situatie</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span><strong className="text-white">Leert met je mee:</strong> Hoe meer je gebruikt, hoe beter het advies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span><strong className="text-white">Gratis:</strong> Tuinadvies voor iedereen toegankelijk</span>
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Technologie</h2>
              <p className="text-white/80 leading-relaxed">
                Groene Vingers is gebouwd met Claude AI van Anthropic, een van de meest geavanceerde
                AI-modellen ter wereld. Dit stelt ons in staat om genuanceerd, contextbewust en
                betrouwbaar tuinadvies te geven in conversationele vorm.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Link
              href="/chatbot"
              className="inline-flex items-center gap-3 bg-white text-[#2d5a27] px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all"
            >
              Probeer het zelf →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
