# Groene Vingers - AI Gardening Assistant

## What This Is

Groene Vingers (Green Fingers) is a Dutch gardening advice web application that provides personalized, AI-powered gardening guidance through an intelligent chatbot. Users can ask questions about plant care, seasonal tips, vegetables, flowers, and more, while the system remembers their garden context to provide increasingly tailored advice over time.

## Core Value

Users can get intelligent, personalized gardening advice from Claude AI that remembers their garden profile and provides context-aware guidance for their specific plants and conditions.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] User can access chatbot interface from landing page
- [ ] User can send messages to Claude AI and receive gardening advice
- [ ] Chatbot responds in user's preferred language (multilingual support)
- [ ] User can create account with email and password
- [ ] User can log in and stay authenticated across sessions
- [ ] User can create garden profile (location, plant types, garden conditions)
- [ ] User can save chat conversations automatically
- [ ] User can view conversation history
- [ ] Claude AI provides personalized advice based on saved garden profile
- [ ] Diensten (Services) page with appropriate content
- [ ] Over ons (About) page with appropriate content
- [ ] Contact page with contact information
- [ ] All pages match existing glassmorphism design style
- [ ] Dutch language UI throughout the application
- [ ] Responsive design for mobile and desktop
- [ ] Deploy to Vercel from new Git branch

### Out of Scope

- Social login (OAuth with Google/Facebook) — email/password sufficient for v1, adds complexity
- Multi-language UI switching — Dutch only for v1, chatbot handles multilingual responses
- Mobile native app — web-first approach, mobile web is sufficient
- Payment/subscription features — free service for v1
- Admin dashboard — focus on user experience first
- Real-time collaboration — single-user conversations only
- Image upload for plant identification — text-based advice only for v1
- Community features (forums, user-to-user interaction) — AI advice only for v1

## Context

**Existing Work:**
- Landing page already created with hero section, navigation, and CTAs
- Deployed to groene-vingers-prototyping.vercel.app
- GitHub repo: https://github.com/Siempje6/Groene-Vingers-Prototyping.git
- Design uses glassmorphism aesthetic with Playfair Display + Inter fonts
- Navigation already includes "Chatbot" link (not yet functional)

**Target Audience:**
- Dutch-speaking gardening enthusiasts
- Home gardeners seeking advice on plant care, vegetables, flowers
- Users who want personalized guidance based on their specific garden

**Technical Environment:**
- Frontend: HTML/CSS/JavaScript (current static site)
- Backend needed for: authentication, database, Claude API integration
- Must integrate with v0.app ai-tools package
- Vercel deployment (already configured)

## Constraints

- **Tech stack**: Must use v0.app ai-tools package for Claude API integration — user requirement
- **Hosting**: Must deploy on Vercel — existing infrastructure already connected
- **Language**: Dutch UI with multilingual chatbot responses — serve Dutch audience while supporting international users
- **Style**: Must match existing glassmorphism design aesthetic — consistency with landing page
- **Branching**: Build in new Git branch, not main — allows testing without affecting production
- **Claude API**: Requires Claude API key and proper setup with v0.app tools

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Email/password authentication | Simple to implement, no external OAuth dependencies, sufficient for v1 | — Pending |
| v0.app ai-tools for Claude integration | User requirement, provides ready-made integration patterns | — Pending |
| Dutch UI with multilingual chat | Serves primary Dutch audience but chatbot can respond in user's language for flexibility | — Pending |
| Feature branch development | Allows development and testing without disrupting production landing page | — Pending |
| Save garden profile for personalization | Core differentiator - makes advice contextual and improves over time | — Pending |

---
*Last updated: 2026-02-03 after initialization*
