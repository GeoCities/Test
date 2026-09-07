# GeoCities

## Product Requirements & AI Agent Build Specification

**Document Version:** 1.0
**Product Stage:** Foundational MVP → Production Architecture
**Product Type:** Consumer internet identity, publishing, communication, wallet, and discovery platform
**Primary Client:** Mobile-first web application / PWA
**Canonical Identity:** `<name>.geocities.eth`

---

# 1. Executive Product Definition

GeoCities is a **personal internet identity platform**.

Every user receives a GeoCities identity:

`<name>.geocities.eth`

That identity is simultaneously:

* a personal website
* a decentralized identity/name
* a wallet/payment identity
* an encrypted GeoCities mailbox
* a messaging identity
* a social/discovery identity
* a publishing environment
* an AI-assisted website-building environment

The fundamental product principle is:

> **One identity. One place on the internet. Everything connected to it.**

GeoCities should not feel like five separate applications bundled together.

The user should feel that they have been given a **place on the internet that they own and control**, with AI acting as their webmaster.

---

# 2. Product Vision

## Vision

**Everyone deserves a place on the internet.**

The original GeoCities gave ordinary people the ability to create a homepage.

The new GeoCities gives ordinary people the ability to create an entire **internet presence**.

AI removes the technical barrier to creating websites.

Cryptographic identity provides ownership, portability, and payments.

GeoCities provides the social layer that allows people to discover one another's places.

---

# 3. Core Product Loop

The fundamental product loop is:

```text
Choose Identity
      ↓
Create Place
      ↓
AI Builds Site
      ↓
Publish
      ↓
Discover Other Places
      ↓
Follow / Message / Mail / Pay
      ↓
Create More Content
      ↓
Share
      ↓
Attract Visitors
      ↓
More People Create Places
```

The product should optimize for this loop.

---

# 4. Primary User Identity

The primary object in the system is the **GeoCities Identity**.

Example:

```text
alice.geocities.eth
```

This identity should resolve to the user's GeoCities account/profile.

The identity may eventually resolve to:

* website
* wallet
* profile
* messaging endpoint
* email endpoint
* social graph
* public keys
* connected identities
* digital assets
* AI webmaster
* published content

The name is therefore more important than any individual application feature.

---

# 5. Primary Navigation

The application has exactly five primary navigation destinations for MVP:

```text
HOME
WALLET
EXPLORE
MY SITE
SETTINGS
```

Mobile navigation:

```text
┌─────────────────────────────────────┐
│                                     │
│             APPLICATION             │
│                                     │
│                                     │
├─────────────────────────────────────┤
│ Home │ Wallet │ Explore │ Site │ ⚙ │
└─────────────────────────────────────┘
```

Do NOT create separate primary tabs for:

* Email
* Messages
* Profile
* Notifications
* AI
* Social
* Payments

These are capabilities of the five primary areas.

---

# 6. HOME

Home is the user's **personal internet dashboard**.

It is not merely a feed.

It is the control center for the user's identity.

## Home hierarchy

```text
Identity
    ↓
Communication
    ↓
Activity
    ↓
Site
    ↓
Wallet
    ↓
Social
```

## Identity header

Display:

```text
Alice
alice.geocities.eth

[View My Site]
```

Optional:

* avatar
* verification status
* online status
* site status
* follower count

---

# 7. Communication

Communication is integrated into Home.

Two communication systems exist:

## Messages

Native GeoCities identity-to-identity communication.

Example:

```text
bob.geocities.eth
        ↓
alice.geocities.eth
```

Messages are:

* conversational
* fast
* identity-based
* optionally encrypted
* associated with the sender's GeoCities identity

## Mail

Traditional email.

Example:

```text
alice@geocities.email
```

Mail is intended to interoperate with the traditional email ecosystem.

The user should not need to understand the underlying distinction.

The UI can present:

```text
Messages    Mail
```

as two communication modes.

---

# 8. Universal Compose

A global compose action should be available throughout the application.

The user selects:

```text
+
├── Message
├── Email
├── Create Post
├── Create Page
├── Send Money
└── Share My Site
```

This establishes a major product principle:

> The user should never have to think about which subsystem they need.

They should simply choose what they want to do.

---

# 9. Site-Level Actions

Whenever a user encounters another GeoCities identity/site, the standard action set is:

```text
Follow
Message
Mail
Pay
Visit
```

Example:

```text
┌─────────────────────────────┐
│ Bob's Pizza Lab             │
│ bob.geocities.eth           │
│                             │
│ [Visit]                     │
│ [Follow] [Message] [Pay]    │
└─────────────────────────────┘
```

These actions should be reusable across:

* Explore
* search results
* profiles
* comments
* guestbooks
* site pages
* recommendations
* shared links

---

# 10. WALLET

The wallet is an underlying identity/payment primitive.

It should NOT initially feel like a cryptocurrency trading application.

## Primary wallet screen

```text
Total Balance

$1,248.32

[Send] [Receive]

[Swap]

Recent Activity
────────────────────
Payment received
Payment sent
Purchase
Transfer
```

## Advanced wallet

Advanced functions can expose:

* token balances
* networks
* swaps
* DeFi
* gas
* approvals
* transaction details
* connected applications
* signing
* blockchain activity

The mainstream user should not need to understand any of these concepts.

---

# 11. Wallet Design Principle

The wallet exists primarily to enable:

* identity
* ownership
* payments
* creator monetization
* digital goods
* names
* commerce
* applications

It should not force the user to become a crypto user.

The abstraction should be:

```text
Money
```

rather than:

```text
Blockchain
```

whenever possible.

---

# 12. EXPLORE

Explore is the discovery layer of GeoCities.

The conceptual model is:

> **GeoCities is a city of personal places.**

The user should be able to wander through the internet rather than merely consume an algorithmic feed.

## Explore components

### Search

Search:

* people
* GeoCities names
* websites
* pages
* topics
* cities/neighborhoods
* posts
* public content

### Discovery

Examples:

```text
Trending Places
New Places
Interesting Places
Nearby Interests
Random Place
Popular Creators
Recommended For You
```

### Map

A visual map can eventually represent:

```text
GeoCities
 ├── neighborhoods
 ├── districts
 ├── communities
 ├── topics
 └── individual places
```

The map is conceptual initially.

Do not make the MVP dependent on a sophisticated 3D map.

---

# 13. Social Graph

Users can:

* follow identities
* unfollow identities
* see followers
* see following
* discover recommended identities
* interact with public content

The social graph belongs to the identity layer rather than being a separate social network.

---

# 14. MY SITE

My Site is the user's publishing environment.

This is the most important product surface after identity.

The user should be able to create a site without understanding:

* HTML
* CSS
* JavaScript
* databases
* hosting
* DNS
* deployment
* blockchain infrastructure

---

# 15. AI WEBSITE BUILDER

The primary creation interface is conversational.

Example:

```text
What do you want to build?

"Create a website for my photography."
```

AI produces:

* site structure
* visual design
* pages
* navigation
* content placeholders
* responsive layouts
* interactions
* forms
* media areas

The user can then iterate conversationally.

Examples:

```text
Make the background black.

Add a guestbook.

Make this feel like the internet in 1998.

Add my YouTube videos.

Create a page for my photography.

Make the homepage more personal.

Add a way for visitors to contact me.

Let visitors vote on their favorite photo.
```

---

# 16. AI WEBMASTER

Every GeoCities identity should have an AI webmaster.

The AI webmaster is a persistent agent associated with the user's site.

Its responsibilities include:

### Creation

* create pages
* create layouts
* create components
* generate content
* create navigation
* configure forms

### Maintenance

* update pages
* repair broken links
* improve accessibility
* optimize performance
* update content
* organize media

### Communication

* manage guestbooks
* assist with messages
* draft responses
* moderate comments

### Growth

* analyze site traffic
* suggest content
* improve discoverability
* suggest SEO improvements
* identify broken conversion paths

### Operations

* connect APIs
* configure integrations
* create simple applications
* manage structured content

The AI webmaster must operate **on behalf of the user**, subject to user permissions.

---

# 17. Websites Are Applications

GeoCities must not be limited to static pages.

The AI should eventually be capable of generating small functional applications.

Example:

User:

> "Build me a site where visitors submit their favorite pizza and vote on the submissions."

The system may create:

```text
Frontend
+
Database
+
Forms
+
Voting
+
Authentication
+
Moderation
+
Admin interface
```

The user does not need to understand the implementation.

This is a fundamental differentiator.

---

# 18. Site Architecture

Every site should conceptually contain:

```text
Site
├── Identity
├── Pages
├── Media
├── Components
├── Data
├── Forms
├── Guestbook
├── Settings
├── Analytics
└── AI Webmaster
```

Not every site must expose every capability.

---

# 19. Guestbook

The guestbook revives an important early-web interaction model.

A site owner can enable:

```text
Guestbook
```

Visitors can leave messages.

The site owner can:

* approve
* delete
* respond
* block
* moderate

AI can assist with moderation.

Guestbooks should feel personal rather than like generic social-media comments.

---

# 20. SETTINGS

Settings manages the identity and account infrastructure.

## Identity

```text
Current Identity
alice.geocities.eth
```

Users can eventually:

* register additional GeoCities names
* switch identities
* manage profiles
* manage avatars
* manage public information

## Wallet

* security
* recovery
* connected applications
* transaction settings

## Email

* email addresses
* forwarding
* aliases
* signatures
* spam settings

## Notifications

* messages
* mail
* follows
* guestbook
* payments
* site activity

## Privacy

* profile visibility
* site visibility
* messaging permissions
* wallet privacy
* analytics preferences

## AI

* AI permissions
* autonomous actions
* approval requirements
* AI personality
* connected services

---

# 21. ONBOARDING

Onboarding should be extremely short.

## Step 1 — Name

```text
Choose your GeoCities name

[____________].geocities.eth

[Continue]
```

Check availability.

## Step 2 — Identity

Create the user's account/identity and wallet infrastructure.

The complexity of wallet creation should be hidden.

## Step 3 — Create Place

```text
What is your place about?
```

Examples:

```text
My photography
My music
My business
My family
My art
My gaming community
Just me
Something weird
```

Or free-form text.

## Step 4 — AI creates site

Show generation progress.

## Step 5 — Enter GeoCities

User lands on:

```text
alice.geocities.eth

Your place on the internet.
```

---

# 22. IDENTITY MODEL

The following conceptual data model should be used.

```text
User
 ├── Identity[]
 │    ├── name
 │    ├── avatar
 │    ├── profile
 │    ├── wallet
 │    ├── email[]
 │    ├── site[]
 │    └── socialGraph
 │
 ├── Messages
 ├── Mail
 ├── WalletActivity
 ├── Notifications
 └── Settings
```

An identity should be capable of owning multiple sites in the future.

---

# 23. CORE ENTITIES

The backend should model at least:

```text
User
Identity
GeoCitiesName
Site
Page
Component
Media
Post
GuestbookEntry
Message
Conversation
EmailAccount
EmailMessage
Wallet
Transaction
Follow
Notification
AIWebmaster
AIAction
SiteAnalytics
Integration
```

---

# 24. IDENTITY RELATIONSHIPS

Conceptually:

```text
User
  │
  ├── Identity
  │      │
  │      ├── GeoCities Name
  │      ├── Wallet
  │      ├── Mailbox
  │      ├── Messages
  │      ├── Social Graph
  │      └── Site
  │
  └── Account Settings
```

The identity is the central object.

---

# 25. MESSAGE MODEL

A message should contain conceptually:

```text
Message
├── id
├── conversation_id
├── sender_identity
├── recipient_identity
├── timestamp
├── content
├── attachments
├── encryption_metadata
├── delivery_status
└── read_status
```

The system should be designed so encryption can be introduced without requiring a complete application rewrite.

---

# 26. EMAIL MODEL

Email should support:

```text
username@geocities.email
```

Email should eventually support:

* inbound email
* outbound email
* aliases
* forwarding
* spam filtering
* attachments
* signatures
* search
* folders
* threading

Mail should integrate into Home.

---

# 27. WALLET MODEL

The application should abstract wallet infrastructure behind a wallet service.

Conceptually:

```text
Wallet
├── identity
├── addresses
├── balances
├── assets
├── transactions
├── permissions
└── recovery/security
```

Never allow UI components to directly depend on a specific blockchain implementation.

Create a wallet abstraction layer.

---

# 28. BLOCKCHAIN ABSTRACTION

GeoCities should be chain-agnostic at the application layer.

The UI should not assume:

```text
Ethereum
Base
Solana
etc.
```

The infrastructure layer handles networks.

Example:

```text
WalletService
    ↓
ChainAdapter
    ├── Ethereum
    ├── Base
    └── Other networks
```

This allows future expansion without redesigning the application.

---

# 29. DECENTRALIZATION PRINCIPLE

Do not decentralize something simply because decentralization is possible.

Use decentralized infrastructure when it provides meaningful user value:

### Good candidates

* identity
* names
* ownership
* payments
* portable websites
* digital assets
* publishing
* interoperability

### Conventional infrastructure may be preferable for

* indexing
* search
* email transport
* analytics
* notifications
* AI inference
* high-performance application data

The product objective is user value, not ideological purity.

---

# 30. WEBSITE ADDRESSING

The canonical identity should be:

```text
<name>.geocities.eth
```

The platform should support resolving this identity to the user's GeoCities experience.

The architecture should permit future support for:

```text
<name>.geocities.eth
        ↓
identity
        ↓
site
wallet
profile
mail
messages
```

---

# 31. BRAND EXPERIENCE

GeoCities should deliberately combine:

### Modern

* AI
* mobile UX
* wallet
* payments
* search
* personalization
* applications

with:

### Early Web

* personal websites
* guestbooks
* weirdness
* neighborhoods
* badges
* personal expression
* exploration
* customization

The product should NOT look like a generic SaaS website builder.

---

# 32. PERSONALITY

GeoCities should feel:

* creative
* personal
* playful
* weird
* welcoming
* expressive
* exploratory
* slightly nostalgic

It should not feel:

* corporate
* sterile
* overly financial
* crypto-bro
* enterprise
* technically intimidating

---

# 33. AI DESIGN PRINCIPLES

AI is not a chatbot bolted onto GeoCities.

AI is an infrastructure layer.

AI should assist with:

```text
Identity
Creation
Publishing
Communication
Discovery
Moderation
Maintenance
Growth
Commerce
```

The primary AI interface is conversational.

However, every major AI operation should also have a deterministic UI alternative.

---

# 34. AI AGENT ARCHITECTURE

Do not create one giant unrestricted AI agent.

Use specialized agents.

Recommended architecture:

```text
                    ┌─────────────────┐
                    │  Agent Manager  │
                    └────────┬────────┘
                             │
       ┌─────────────────────┼─────────────────────┐
       │                     │                     │
       ▼                     ▼                     ▼
 Web Builder           Webmaster Agent       Communication Agent
       │                     │                     │
       ▼                     ▼                     ▼
 Content Agent          Growth Agent        Moderation Agent
       │                     │                     │
       └─────────────────────┼─────────────────────┘
                             ▼
                      Tool / API Layer
```

---

# 35. AGENT PERMISSIONS

Agents must operate using explicit permissions.

Example:

```text
AI can:
✓ create pages
✓ edit pages
✓ draft messages
✓ moderate spam

AI requires approval:
⚠ send messages
⚠ publish major changes
⚠ spend money
⚠ execute transactions
⚠ delete significant content

AI cannot:
✗ access secrets unnecessarily
✗ transfer assets without authorization
✗ modify security settings autonomously
```

Every agent action should be auditable.

---

# 36. AI ACTION LOG

Every autonomous or assisted action should create:

```text
AIAction
├── id
├── agent
├── user
├── action_type
├── target
├── input
├── output
├── tools_used
├── approval_required
├── approved_by
├── timestamp
└── result
```

This becomes essential for debugging, trust, and security.

---

# 37. SITE GENERATION PIPELINE

When a user asks AI to build a site:

```text
User Prompt
    ↓
Intent Parser
    ↓
Site Specification
    ↓
Design Generator
    ↓
Component Generator
    ↓
Content Generator
    ↓
Validation
    ↓
Preview
    ↓
User Approval
    ↓
Publish
```

AI should generate a structured intermediate representation rather than directly modifying arbitrary production code.

---

# 38. SITE INTERMEDIATE REPRESENTATION

Conceptually:

```json
{
  "site": {
    "name": "Alice Photography",
    "theme": "...",
    "navigation": [],
    "pages": [],
    "components": [],
    "features": []
  }
}
```

The exact schema should be designed before implementing the AI builder.

This allows:

* validation
* versioning
* undo
* diffing
* rollback
* multiple rendering engines
* safe AI modifications

---

# 39. SITE VERSIONING

Every significant site change should create a version.

```text
Version 1
Version 2
Version 3
...
```

The user must be able to:

* preview previous versions
* restore a previous version
* undo AI changes

This is mandatory for trust.

---

# 40. EXPLORE RANKING

Explore should eventually combine:

```text
Freshness
+
Quality
+
Engagement
+
Personal relevance
+
Diversity
+
Random discovery
```

Do not optimize solely for engagement.

A major GeoCities differentiator should be **serendipity**.

Include:

```text
Surprise Me
```

as a first-class discovery action.

---

# 41. SEARCH

Search should eventually index:

* GeoCities identities
* public pages
* site titles
* descriptions
* structured content
* posts
* public guestbooks
* tags

Private content must never enter public search indexes.

---

# 42. PRIVACY

Privacy boundaries must be explicit.

Every object should have a visibility state where applicable:

```text
Public
Followers
Private
```

Potential future states:

```text
Unlisted
Members
Custom
```

---

# 43. SECURITY REQUIREMENTS

Security is a first-class product requirement.

Particularly sensitive systems:

* wallet
* identity
* messaging
* email
* AI agents
* payments
* site publishing

Use:

* least privilege
* encrypted transport
* secure secret storage
* session protection
* authentication
* authorization
* audit logs
* transaction confirmation
* rate limiting
* abuse detection
* account recovery mechanisms

Do not allow an LLM to directly access private keys.

---

# 44. MONETIZATION

Potential revenue layers:

## Names

Premium GeoCities names.

## Subscriptions

Potential premium tiers:

```text
Free
Pro
Creator
Business
```

## AI

Higher limits for:

* site generation
* AI webmaster
* media generation
* applications

## Commerce

Transaction fees.

## Marketplace

Future marketplace for:

* themes
* components
* widgets
* plugins
* digital goods
* AI agents
* creator services

## Domains / Identity

Premium identity infrastructure.

---

# 45. MVP DEFINITION

Do NOT attempt to build the entire vision simultaneously.

MVP should prove the core loop.

## MVP includes

### Identity

* account creation
* GeoCities name
* identity profile
* wallet creation/abstraction

### Home

* identity dashboard
* Messages
* Mail placeholder/integration foundation
* notifications
* activity

### Wallet

* balance
* send
* receive
* activity

### Explore

* search
* public sites
* follow
* visit

### My Site

* AI site creation
* site preview
* basic editing
* publish
* public URL
* guestbook

### Settings

* identity
* wallet
* communication
* AI permissions
* account

---

# 46. MVP NON-GOALS

Do not require the MVP to contain:

* full DeFi platform
* sophisticated 3D city
* complete email provider
* marketplace
* advanced social feed
* complex on-chain site storage
* autonomous financial AI
* arbitrary application generation
* full decentralized storage architecture

These should be architecturally possible without being required.

---

# 47. MVP SUCCESS CRITERIA

The MVP succeeds if a new user can:

```text
1. Choose a name
2. Create an identity
3. Receive wallet infrastructure
4. Describe a website
5. Have AI build it
6. Publish it
7. Visit someone else's site
8. Follow them
9. Message them
10. Send/receive value
```

without needing technical knowledge.

---

# 48. PRIMARY USER JOURNEY

Example:

```text
Alice opens GeoCities
        ↓
"Choose your name"
        ↓
alice.geocities.eth
        ↓
Identity created
        ↓
"What is your place about?"
        ↓
"My photography and travel"
        ↓
AI creates site
        ↓
Alice edits site conversationally
        ↓
Publish
        ↓
Alice enters Home
        ↓
Shares alice.geocities.eth
        ↓
Bob visits
        ↓
Bob follows Alice
        ↓
Bob signs guestbook
        ↓
Alice receives notification
        ↓
Alice messages Bob
        ↓
Bob sends Alice $5
        ↓
GeoCities becomes Alice's internet home
```

---

# 49. TECHNICAL ARCHITECTURE PRINCIPLE

The system should be modular.

Recommended conceptual architecture:

```text
                  CLIENT
                    │
                    ▼
              API / BFF Layer
                    │
       ┌────────────┼────────────┐
       ▼            ▼            ▼
   Identity       Content      Communication
   Service        Service       Service
       │            │            │
       ▼            ▼            ▼
   Wallet        Site/Pages    Messages/Mail
   Service        Service
       │
       ▼
 Blockchain / Identity Layer
```

AI should sit above these services through controlled tools.

---

# 50. SERVICE BOUNDARIES

Recommended initial services/modules:

```text
identity
names
users
sites
pages
media
social
messages
mail
wallet
payments
notifications
ai
search
analytics
settings
```

These may initially live in a monolith.

Do NOT prematurely create dozens of independently deployed microservices.

The important requirement is **logical separation**, not operational complexity.

---

# 51. API PRINCIPLE

Frontend applications must communicate through stable APIs/interfaces.

Do not allow frontend components to directly manipulate:

* database tables
* blockchain RPC calls
* private keys
* AI provider APIs

Use service abstractions.

---

# 52. AI TOOLING CONTRACT

AI agents should interact with the product through explicit tools such as:

```text
get_user_identity()
get_site()
create_site()
update_site()
create_page()
update_page()
publish_site()
get_site_analytics()
search_sites()
follow_identity()
unfollow_identity()
send_message()
draft_email()
send_email()
get_wallet_balance()
create_payment_request()
request_transaction_approval()
```

The AI should never be given unrestricted backend access.

---

# 53. FRONTEND COMPONENT SYSTEM

Create reusable components for:

```text
IdentityCard
SiteCard
WalletCard
MessageList
ConversationView
MailList
NotificationCard
FollowButton
MessageButton
PayButton
SitePreview
AIComposer
AIWebmasterPanel
Guestbook
ExploreCard
SearchBar
ActivityFeed
```

Components must not contain business logic that belongs in services.

---

# 54. MOBILE-FIRST REQUIREMENT

The primary interface should be designed for mobile.

Requirements:

* thumb-friendly navigation
* bottom navigation
* responsive cards
* fast loading
* minimal modal complexity
* large touch targets
* keyboard-aware layouts
* PWA compatibility

Desktop should be an extension of the mobile experience rather than the other way around.

---

# 55. PERFORMANCE

Initial application goals:

* fast first render
* progressive loading
* optimized media
* lazy loading
* cached public sites
* responsive interactions

AI generation can be asynchronous.

Never make the user stare at an unexplained loading spinner.

Use visible progress:

```text
Planning your site
Creating layout
Adding pages
Preparing your place
```

---

# 56. OBSERVABILITY

Track product events such as:

```text
name_selected
identity_created
site_generation_started
site_generation_completed
site_published
site_viewed
site_followed
message_sent
message_received
wallet_funded
payment_sent
payment_received
guestbook_entry_created
ai_action_executed
```

Analytics should distinguish:

```text
User behavior
System performance
AI behavior
Financial activity
```

Do not expose sensitive financial/private information through ordinary analytics.

---

# 57. CORE PRODUCT METRICS

North Star Metric:

> **Number of active GeoCities places with meaningful human activity.**

Supporting metrics:

### Identity

* names registered
* activated identities
* identity retention

### Creation

* sites created
* sites published
* sites updated
* AI generations per user

### Social

* follows
* messages
* guestbook interactions
* site visits

### Financial

* funded wallets
* transactions
* payment volume

### Retention

* D1
* D7
* D30
* monthly active identities

Most importantly:

> **Percentage of new identities that publish a place and receive an interaction.**

That metric measures whether GeoCities has become a living network.

---

# 58. GROWTH FLYWHEEL

Every published site should naturally advertise GeoCities.

Example:

```text
alice.geocities.eth
```

The URL itself becomes the marketing mechanism.

Users share their places.

Visitors discover GeoCities.

Visitors create their own places.

Those places generate more content.

Content generates social distribution.

Social distribution generates more identities.

---

# 59. BRAND MARKETING ENGINE

Existing GeoCities social properties should eventually become an organic distribution network.

Potential recurring content:

```text
AI builds a website for a stranger
We rebuilt a 1998 website
Random GeoCities site of the day
The weirdest place on GeoCities
100 sites in 24 hours
Build your internet home
Internet archaeology
AI webmaster experiments
```

Marketing should demonstrate the product rather than merely advertise it.

---

# 60. INTERNET ARCHAEOLOGY

Future feature:

Users upload:

* screenshots
* old website files
* memories
* URLs
* images

AI reconstructs historical personal websites.

Modes:

```text
Restore
Modernize
Remix
Archive
```

This can become a major cultural differentiator.

---

# 61. FUTURE MARKETPLACE

Eventually:

```text
GeoCities Marketplace
```

Categories:

* themes
* templates
* widgets
* components
* plugins
* AI agents
* digital products
* services
* premium names

Creators can sell their creations.

GeoCities takes a platform fee.

---

# 62. FUTURE AI AGENT MARKET

A future user might install:

```text
Photography Webmaster
Music Webmaster
Restaurant Webmaster
Newsletter Agent
Community Moderator
Store Manager
SEO Agent
Travel Agent
Personal Archivist
```

These agents operate inside the user's GeoCities environment.

This creates a future agent ecosystem around the identity.

---

# 63. PRODUCT HIERARCHY

The system should be understood in this order:

```text
IDENTITY
   ↓
PLACE
   ↓
COMMUNICATION
   ↓
SOCIAL GRAPH
   ↓
PAYMENTS
   ↓
AI
   ↓
ECOSYSTEM
```

AI is extremely important, but the underlying product is the **personal internet identity**.

---

# 64. DESIGN RULES FOR AI CODING AGENTS

Every AI coding agent must follow these rules:

### Rule 1

Do not invent new primary navigation.

### Rule 2

Do not create a separate feature when an existing product primitive can support it.

### Rule 3

Identity is the central object.

### Rule 4

All major actions should resolve through the user's GeoCities identity.

### Rule 5

AI must use explicit tools and permissions.

### Rule 6

Financial actions require explicit authorization unless a future user-defined policy specifically allows otherwise.

### Rule 7

Never expose private keys to AI models.

### Rule 8

Site modifications must be versioned.

### Rule 9

Every destructive AI action must be reversible.

### Rule 10

Mobile is the primary interface.

### Rule 11

Do not make crypto terminology necessary for normal users.

### Rule 12

Do not over-engineer decentralization.

### Rule 13

Do not turn GeoCities into a generic website builder.

### Rule 14

Preserve personal expression and discovery as core product characteristics.

### Rule 15

When uncertain, prefer the simpler implementation that preserves the architectural boundary.

---

# 65. AI AGENT DEVELOPMENT PROTOCOL

Before implementing any feature, an AI coding agent must answer:

```text
1. Which product primitive does this belong to?
2. Which existing service owns the data?
3. Which user identity owns the action?
4. Does this require authorization?
5. Is the action reversible?
6. Does this affect wallet/security?
7. Does this create a new navigation surface?
8. Does this work on mobile?
9. Does this require an AI tool?
10. What are the acceptance criteria?
```

If the feature cannot answer these questions, implementation should pause and the specification should be clarified.

---

# 66. FEATURE IMPLEMENTATION FORMAT

Every future engineering task should be expressed as:

```text
FEATURE
Name:

PURPOSE
Why does this exist?

USER STORY
As a...
I want...
So that...

OWNER
Which product primitive owns it?

UI
What does the user see?

DATA
What objects are created/read/updated?

API
What interfaces are required?

AI
Does an agent participate?

SECURITY
What permissions are required?

EDGE CASES
What can go wrong?

ANALYTICS
What events are emitted?

ACCEPTANCE CRITERIA
What must be true for the feature to be complete?
```

---

# 67. FIRST ENGINEERING EPIC

## Epic: GeoCities Identity Foundation

Build:

```text
Account
+
GeoCities Name
+
Identity
+
Wallet abstraction
+
Home shell
```

Acceptance criteria:

* user can create an account
* user can select a GeoCities name
* availability is checked
* identity is created
* wallet infrastructure is initialized
* user reaches Home
* identity is displayed consistently
* identity can be resolved by the application
* logout/login preserves identity

---

# 68. SECOND EPIC

## Epic: Application Shell

Build:

```text
Home
Wallet
Explore
My Site
Settings
```

Acceptance criteria:

* five-tab navigation exists
* navigation persists
* current identity is globally available
* mobile layout works
* desktop layout adapts
* no feature creates an additional primary navigation tab

---

# 69. THIRD EPIC

## Epic: AI Site Builder

Build:

```text
Prompt
→ Site Specification
→ Generated Site
→ Preview
→ Publish
```

Acceptance criteria:

* user can describe a site
* AI generates a site
* user can preview it
* user can request changes
* changes produce a new version
* user can undo
* user can publish
* published site is publicly accessible

---

# 70. FOURTH EPIC

## Epic: Explore

Build:

* public site directory
* search
* site cards
* site profiles
* follow
* visit
* random discovery

Acceptance criteria:

A user can discover another GeoCities identity and move from discovery to:

```text
Visit
Follow
Message
Pay
```

without losing context.

---

# 71. FIFTH EPIC

## Epic: Messaging

Build:

* conversations
* messages
* unread state
* notifications
* identity-based addressing

Acceptance criteria:

```text
alice.geocities.eth
        ↓
Message
        ↓
bob.geocities.eth
```

The recipient receives the message and can respond.

---

# 72. SIXTH EPIC

## Epic: Mail

Build the GeoCities email abstraction.

Initial implementation may use an external email provider behind an internal GeoCities mail service.

The frontend must not be tightly coupled to the provider.

---

# 73. SEVENTH EPIC

## Epic: Wallet

Build:

* balance
* send
* receive
* transaction history

Advanced functionality can be added later.

The wallet should be usable without requiring users to understand blockchain terminology.

---

# 74. EIGHTH EPIC

## Epic: AI Webmaster

After the basic site builder works, create the persistent webmaster.

Initial capabilities:

```text
Create page
Edit page
Update content
Answer site questions
Suggest improvements
```

Then expand toward:

```text
analytics
moderation
guestbook
SEO
integrations
autonomous maintenance
```

---

# 75. PRODUCT PRINCIPLE

The most important conceptual rule in the entire specification is:

> **GeoCities is not a website builder with a wallet attached.**

It is:

> **A personal internet identity with a website, wallet, communications, social graph, and AI webmaster built around it.**

That distinction should guide every architectural and product decision.

---

# 76. FINAL PRODUCT MODEL

The final experience should feel approximately like this:

```text
                    GEO CITIES
                        │
              alice.geocities.eth
                        │
       ┌────────────────┼────────────────┐
       │                │                │
      SITE          COMMUNICATION      WALLET
       │                │                │
       │           ┌────┴────┐           │
       │           │         │           │
       │        Messages    Mail         │
       │                                │
       └──────────────┬─────────────────┘
                      │
                   EXPLORE
                      │
                Other Places
                      │
             Follow / Message
                 / Mail / Pay
                      │
                    AI
                      │
              AI Webmaster
                      │
               User's Place
```

The five-tab application is therefore only the **interface**.

The actual product is the identity graph underneath it.

---

# 77. PRODUCT NORTH STAR

If this product is successful, a user should eventually be able to say:

> **"This is my place on the internet."**

And that statement should mean:

```text
This is my identity.
This is my website.
This is my inbox.
This is how people message me.
This is how people pay me.
This is where I publish.
This is where people find me.
This is what my AI webmaster manages.
```

That is the product GeoCities should build.
