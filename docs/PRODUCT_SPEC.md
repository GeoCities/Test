# GeoCities Product Specification

## Status

This document is the product and engineering source of truth for moving the current GeoCities visual prototype toward a real application.

The existing frontend should be treated as the **visual/product prototype**. Do not rewrite it wholesale while the product architecture is being defined. Future implementation work should preserve the prototype's core information architecture and visual language unless an issue explicitly changes them.

## Product thesis

GeoCities is an identity-first place on the internet.

A user's GeoCities name is the root identity primitive. From that identity flow their place, profile, communication, wallet, and discovery presence.

Example:

```text
alice.geocities.eth
├── website
│   ├── /
│   ├── /about
│   ├── /photos
│   └── /guestbook
├── mail
│   └── alice@geocities.eth
├── messages
├── wallet
└── profile
```

The product should feel like a personal internet operating system rather than a collection of unrelated apps.

## Primary navigation

```text
Home · Wallet · Explore · My Site · Settings
```

Communication is surfaced from Home and Compose rather than becoming a sixth primary destination unless later product evidence requires it.

## Product primitives

```text
IDENTITY
  ↓
GEOCITIES NAME
  ↓
PROFILE
  ↓
PLACE
  ├── Pages
  ├── Media
  ├── Guestbook
  ├── Versions
  └── Webmaster

COMMUNICATION
  ├── Email
  └── Messages

ECONOMY
  ├── Wallet
  ├── Payments
  └── Tips

DISCOVERY
  ├── Explore
  ├── Search
  ├── Follow
  └── Activity
```

## Core domain model

### Identity

Represents the authenticated human/account and ownership boundary.

Responsibilities:
- authentication
- identity lifecycle
- GeoCities name ownership
- authorization
- linked wallet ownership
- linked profile and place ownership

### GeoCities Name

The stable public identifier for a user. The exact naming/resolution technology is an implementation decision, but the product model must treat the name as globally addressable and unique.

Requirements:
- unique
- resolvable
- human-readable
- stable after registration unless an explicit transfer/rename policy exists
- safe to use as the root of public URLs and communication addresses

### Profile

Public identity metadata associated with a GeoCities name.

Potential fields:
- display name
- avatar
- bio
- links
- social/discovery metadata
- privacy settings

### Place

The user's personal website and publishing space.

A place owns:
- pages
- media
- guestbook
- versions
- publication state
- webmaster configuration

### Pages

Structured or authored content within a place.

A page needs a stable identifier, path/slug, content representation, metadata, publication state, and version history.

### Media

Images and other assets referenced by pages. Media should be content-addressable or otherwise uniquely identifiable and should have ownership, metadata, storage location, and lifecycle state.

### Guestbook

Public or controlled visitor messages attached to a place. Guestbook entries need moderation, authorship, timestamps, and visibility state.

### Versions

Every meaningful site change should produce a recoverable version. Publishing should create an immutable release/snapshot so a user can restore an earlier site state.

### Webmaster

The AI agent responsible for helping the user create, maintain, organize, and publish their place.

The Webmaster is an agent acting **on behalf of the identity**, not an unrestricted administrator.

### Communication

Email and direct messages are separate concepts:
- Email is addressable, asynchronous communication.
- Messages are application-native conversations.

The UI may combine them in the inbox while preserving separate domain models and permissions.

### Economy

The wallet is owned by the identity. Payments and tips are transactions initiated by users or product actions and must never be conflated with display-only balances.

### Discovery

Explore, Search, Follow, and Activity form the discovery graph around places and identities.

## Architectural boundaries

The implementation should be divided into explicit service/domain boundaries even if the first deployment is a modular monolith.

```text
Client
  │
  ├── Identity/Auth
  ├── Profile/Name
  ├── Place/Publishing
  ├── Communication
  ├── Economy
  ├── Discovery
  └── AI Webmaster
           │
           ├── LLM provider
           ├── tool/permission layer
           └── publishing/version layer
```

The first implementation should prefer a **modular monolith with clear boundaries** over premature microservices.

## Authentication and identity

Authentication and public identity are related but distinct.

- Authentication proves control of an account.
- The GeoCities name identifies the public presence.
- Authorization determines what the account, collaborators, or Webmaster may do.
- Wallet ownership must be explicitly bound to the identity and never inferred solely from a UI session.

The implementation should support an evolution from a conventional authenticated account to stronger wallet/name-based ownership without forcing the entire product to depend on wallet UX.

## Storage model

Use purpose-specific storage:

- relational database for identities, names, profiles, places, pages, versions, relationships, messages, and transaction metadata
- object/blob storage for media and generated site assets
- search index for discovery/search when scale requires it
- cache/queue infrastructure only where justified by measured workload

The canonical database must remain the source of truth for application metadata.

## Publishing model

Separate **draft state** from **published state**.

A user's editing actions should not automatically mutate the public site.

Recommended lifecycle:

```text
Draft
  ↓
Validate
  ↓
Preview
  ↓
Publish
  ↓
Immutable Release
  ↓
Public Place
```

A publish operation should identify exactly what version became public and make rollback deterministic.

## AI Webmaster model

The Webmaster should operate through explicit tools rather than direct database access.

Example tool categories:
- inspect place
- create/update page
- create/update navigation
- upload/organize media
- create gallery
- create guestbook
- draft publication
- preview changes
- publish approved version
- restore version
- inspect moderation queue

### Permission tiers

At minimum:

1. **Read** — inspect public/private data the user has authorized.
2. **Draft** — modify unpublished content.
3. **Publish** — publish a prepared release after explicit user authorization.
4. **Financial** — initiate money movement only through explicit, separately authorized payment tools.
5. **Communication** — draft or send messages only according to user-configured permissions.

The Webmaster should default to the least privilege necessary. Financial actions and irreversible external communication should require explicit confirmation unless the user has intentionally configured a stronger automation policy.

## API principles

APIs should be organized around domain boundaries rather than UI screens.

Examples:

```text
/auth/*
/identities/*
/names/*
/profiles/*
/places/*
/pages/*
/media/*
/versions/*
/publishing/*
/messages/*
/mail/*
/wallet/*
/payments/*
/follows/*
/search/*
/activity/*
/webmaster/*
```

Exact endpoint shapes should be defined after the domain entities and state transitions are finalized.

## Security and privacy principles

- Every mutable resource has an explicit owner/authorization rule.
- Public/private visibility is modeled explicitly.
- AI tools operate through authorization checks.
- Payment operations are isolated from ordinary content operations.
- Publishing is auditable.
- Important mutations have durable audit records.
- Secrets and provider credentials never enter page content or AI prompts unless explicitly required and protected.

## MVP implementation order

The issues in this repository are intentionally sequenced so each layer can be designed and validated before the next layer depends on it.

1. Product/domain specification
2. Identity and GeoCities name model
3. Profile and Place model
4. Pages, media, and content storage
5. Draft/version/publishing system
6. Authentication and authorization
7. Communication: messages and email
8. Wallet, payments, and tips
9. Discovery: search, follow, activity
10. AI Webmaster tools and permissions
11. API/application integration
12. Frontend integration and migration from prototype data
13. Testing, security, observability, and production readiness

Each issue should produce an artifact or working capability that can be reviewed independently.

## Definition of done for the architecture phase

Before replacing the prototype's hard-coded state with production data, the project should have:

- a documented domain model
- documented ownership and authorization rules
- documented API boundaries
- documented storage choices
- documented draft/publish/version semantics
- documented identity/name resolution strategy
- documented communication model
- documented wallet/payment ownership model
- documented discovery model
- documented AI Webmaster tools and permission model
- a migration plan from the static prototype to the real application

## Prototype preservation rule

The current UI is a product reference. Architectural work should not require a wholesale frontend rewrite until the backend contracts are sufficiently stable. The frontend should eventually become a client of the domain APIs while preserving the established five-tab product shell unless product research proves otherwise.
