# Groene Vingers - AI Tuinadvies

Een Nederlandse tuinadvies web applicatie aangedreven door Claude AI. Gebruikers kunnen vragen stellen over tuinieren en persoonlijk advies krijgen gebaseerd op hun tuinprofiel.

## Features

- 🤖 **AI Chatbot** - Tuinadvies powered by Claude AI (Anthropic)
- 👤 **Gebruikersaccounts** - Email/wachtwoord authenticatie
- 🌱 **Tuinprofielen** - Sla tuininformatie op voor gepersonaliseerd advies
- 💬 **Gesprekgeschiedenis** - Bewaar en bekijk eerdere conversaties
- 🌍 **Meertalig** - Nederlandse UI, chatbot reageert in meerdere talen
- 📱 **Responsive** - Werkt op desktop en mobiel

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: Neon PostgreSQL (serverless)
- **Authenticatie**: NextAuth.js
- **AI**: Claude 3.5 Sonnet (Anthropic)
- **Deployment**: Vercel

## Local Development

### 1. Clone de repository

\`\`\`bash
git clone https://github.com/Siempje6/Groene-Vingers-Prototyping.git
cd Groene-Vingers-Prototyping
git checkout feature/full-app
\`\`\`

### 2. Installeer dependencies

\`\`\`bash
npm install
\`\`\`

### 3. Maak een Neon database aan

1. Ga naar [neon.tech](https://neon.tech)
2. Maak een gratis account aan
3. Creëer een nieuw project
4. Kopieer de connection string

### 4. Verkrijg een Anthropic API key

1. Ga naar [console.anthropic.com](https://console.anthropic.com)
2. Maak een account aan
3. Genereer een API key

### 5. Configureer environment variables

Kopieer \`.env.example\` naar \`.env\`:

\`\`\`bash
cp .env.example .env
\`\`\`

Vul de volgende waardes in:

\`\`\`env
ANTHROPIC_API_KEY=sk-ant-...
DATABASE_URL=postgres://...@...neon.tech/...
NEXTAUTH_SECRET=genereer-met-openssl-rand-base64-32
NEXTAUTH_URL=http://localhost:3000
\`\`\`

### 6. Initialiseer de database

De database tabellen worden automatisch aangemaakt bij de eerste database query. Of run handmatig:

\`\`\`typescript
// In een API route of server component:
import { initDb } from '@/lib/db';
await initDb();
\`\`\`

### 7. Start development server

\`\`\`bash
npm run dev
\`\`\`

Bezoek [http://localhost:3000](http://localhost:3000)

## Deployen naar Vercel

### 1. Vercel project aanmaken

1. Ga naar [vercel.com](https://vercel.com)
2. Klik op "Add New" → "Project"
3. Importeer je GitHub repository
4. Selecteer de \`feature/full-app\` branch

### 2. Environment Variables instellen

In Vercel project settings → Environment Variables:

\`\`\`
ANTHROPIC_API_KEY=sk-ant-...
DATABASE_URL=postgres://...@...neon.tech/...
NEXTAUTH_SECRET=genereer-met-openssl-rand-base64-32
NEXTAUTH_URL=https://jouw-vercel-url.vercel.app
\`\`\`

### 3. Deploy

Klik op "Deploy". Vercel bouwt en deployed automatisch!

## Database Schema

### users
- id (serial primary key)
- email (varchar unique)
- password_hash (varchar)
- name (varchar)
- created_at (timestamp)

### garden_profiles
- id (serial primary key)
- user_id (foreign key → users)
- location (varchar)
- garden_size (varchar)
- soil_type (varchar)
- sun_exposure (varchar)
- created_at, updated_at (timestamps)

### plants
- id (serial primary key)
- garden_profile_id (foreign key → garden_profiles)
- name (varchar)
- plant_type (varchar)
- planted_date (date)
- notes (text)

### conversations
- id (serial primary key)
- user_id (foreign key → users)
- title (varchar)
- created_at, updated_at (timestamps)

### messages
- id (serial primary key)
- conversation_id (foreign key → conversations)
- role (varchar: 'user' | 'assistant')
- content (text)
- created_at (timestamp)

## Project Structure

\`\`\`
├── app/
│   ├── api/
│   │   ├── auth/[...nextauth]/  # NextAuth configuration
│   │   ├── chat/                # Claude AI chat endpoint
│   │   └── register/            # User registration endpoint
│   ├── chatbot/                 # Chat interface
│   ├── contact/                 # Contact page
│   ├── diensten/                # Services page
│   ├── login/                   # Login page
│   ├── over-ons/                # About page
│   ├── register/                # Registration page
│   ├── globals.css              # Global styles + Tailwind
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Landing page
├── lib/
│   └── db.ts                    # Database connection & schema
├── public/
│   └── assets/                  # Images
├── .env.example                 # Environment variables template
├── package.json
└── README.md
\`\`\`

## Features Roadmap

### v1.0 (Current)
- [x] Landing page
- [x] AI Chatbot interface
- [x] User authentication
- [x] Database schema
- [x] Content pages
- [ ] Garden profile creation
- [ ] Conversation history
- [ ] Save chats to database

### v2.0 (Future)
- [ ] Image upload (plant identification)
- [ ] Weather integration
- [ ] Seasonal reminders
- [ ] Social features (share gardens)
- [ ] Email verification
- [ ] Password reset
- [ ] OAuth login (Google, Facebook)

## Troubleshooting

### Database connection errors
- Controleer of DATABASE_URL correct is
- Verifieer dat Neon database actief is
- Check firewall/network settings

### Claude API errors
- Verifieer ANTHROPIC_API_KEY
- Check API quota/billing
- Kijk in Anthropic console voor errors

### Build errors
- Run \`npm install\` opnieuw
- Delete \`.next\` folder en rebuild
- Check TypeScript errors met \`npm run build\`

## Support

Voor vragen of problemen:
- Email: info@groenevingers.nl
- GitHub Issues: [Create an issue](https://github.com/Siempje6/Groene-Vingers-Prototyping/issues)

## License

MIT

---

Built with ❤️ and Claude AI
# Trigger deployment
