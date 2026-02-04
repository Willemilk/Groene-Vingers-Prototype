# Requirements: Groene Vingers

**Defined:** 2026-02-03
**Core Value:** Users can get intelligent, personalized gardening advice from Claude AI that remembers their garden and provides context-aware guidance

## v1 Requirements

Requirements for initial release. Each maps to roadmap phases.

### Authentication

- [ ] **AUTH-01**: User can create account with email and password
- [ ] **AUTH-02**: User can log in with email and password
- [ ] **AUTH-03**: User session persists across browser sessions
- [ ] **AUTH-04**: User can log out from any page

### Chat Interface

- [ ] **CHAT-01**: User can access chatbot page from landing page
- [ ] **CHAT-02**: User can send text messages to chatbot
- [ ] **CHAT-03**: User receives AI responses from Claude API
- [ ] **CHAT-04**: Chat interface displays conversation history in real-time
- [ ] **CHAT-05**: Chatbot responds in user's language (multilingual support)

### Garden Profile

- [ ] **PROF-01**: User can create garden profile with location
- [ ] **PROF-02**: User can add plants to their garden profile
- [ ] **PROF-03**: User can add garden conditions (sun, soil, size)
- [ ] **PROF-04**: User can edit their garden profile
- [ ] **PROF-05**: Claude AI receives garden profile context with each query

### Conversation History

- [ ] **HIST-01**: User conversations are automatically saved to database
- [ ] **HIST-02**: User can view list of past conversations
- [ ] **HIST-03**: User can open and continue past conversations
- [ ] **HIST-04**: User can delete old conversations

### Content Pages

- [ ] **PAGE-01**: Diensten (Services) page with service information
- [ ] **PAGE-02**: Over ons (About) page with background info
- [ ] **PAGE-03**: Contact page with contact form
- [ ] **PAGE-04**: All pages use Dutch language
- [ ] **PAGE-05**: All pages match glassmorphism design style

### Deployment

- [ ] **DEPL-01**: Create new Git branch for development
- [ ] **DEPL-02**: Deploy to Vercel from new branch
- [ ] **DEPL-03**: Configure environment variables for Claude API
- [ ] **DEPL-04**: Responsive design works on mobile and desktop

## v2 Requirements

Deferred to future release.

### Advanced Features

- **ADV-01**: Image upload for plant identification
- **ADV-02**: Weather integration for local advice
- **ADV-03**: Seasonal reminders and notifications
- **ADV-04**: Community features (share gardens, tips)

### Enhanced Auth

- **ADV-05**: Social login (Google, Facebook)
- **ADV-06**: Password reset via email
- **ADV-07**: Email verification for new accounts

## Out of Scope

| Feature | Reason |
|---------|--------|
| Native mobile app | Web-first approach, mobile web sufficient for v1 |
| Payment/subscriptions | Free service for v1, monetization later |
| Admin dashboard | Focus on user experience first |
| Real-time collaboration | Single-user conversations only |
| Multi-language UI | Dutch only for v1, chatbot handles multilingual responses |
| Voice input/output | Text-based sufficient for v1 |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| DEPL-01 | Phase 1 | Pending |
| AUTH-01 | Phase 2 | Pending |
| AUTH-02 | Phase 2 | Pending |
| AUTH-03 | Phase 2 | Pending |
| AUTH-04 | Phase 2 | Pending |
| CHAT-01 | Phase 3 | Pending |
| CHAT-02 | Phase 3 | Pending |
| CHAT-03 | Phase 3 | Pending |
| CHAT-04 | Phase 3 | Pending |
| CHAT-05 | Phase 3 | Pending |
| PROF-01 | Phase 4 | Pending |
| PROF-02 | Phase 4 | Pending |
| PROF-03 | Phase 4 | Pending |
| PROF-04 | Phase 4 | Pending |
| PROF-05 | Phase 4 | Pending |
| HIST-01 | Phase 5 | Pending |
| HIST-02 | Phase 5 | Pending |
| HIST-03 | Phase 5 | Pending |
| HIST-04 | Phase 5 | Pending |
| PAGE-01 | Phase 6 | Pending |
| PAGE-02 | Phase 6 | Pending |
| PAGE-03 | Phase 6 | Pending |
| PAGE-04 | Phase 6 | Pending |
| PAGE-05 | Phase 6 | Pending |
| DEPL-02 | Phase 7 | Pending |
| DEPL-03 | Phase 7 | Pending |
| DEPL-04 | Phase 7 | Pending |

**Coverage:**
- v1 requirements: 27 total
- Mapped to phases: 27
- Unmapped: 0 ✓

---
*Requirements defined: 2026-02-03*
*Last updated: 2026-02-03 after initial definition*
