# GeoCities Identity and Name Model

## Status

This document defines the canonical domain model for authenticated accounts, public GeoCities identities, and GeoCities names. It implements Issue #5 and extends `docs/PRODUCT_SPEC.md` without changing the product's identity-first thesis.

The key rule is:

> **The account proves control. The Identity represents the public owner. The GeoCities Name is the stable public address.**

This separation allows the product to support conventional authentication today and stronger wallet/name-based ownership later without making wallet UX mandatory for every user.

---

## 1. Domain model

```text
Account
  │
  ├── authentication credentials / sessions
  │
  └── owns or controls one or more Identities
              │
              ├── GeoCities Name
              │      └── resolution → Identity
              │
              ├── Profile
              ├── Place
              └── Wallet binding
```

### Account

An **Account** is the authenticated security principal used to access GeoCities.

Responsibilities:

- authentication
- session management
- recovery and security settings
- proving control of an Identity
- managing authorized devices and credentials

An Account is not itself the public identity. This distinction prevents authentication implementation details from becoming part of public URLs or permanent identity records.

An account may eventually control multiple identities, which is useful for identity switching, separate personal/project identities, or future organizational use.

### Identity

An **Identity** is the canonical public ownership boundary inside GeoCities.

Minimum properties:

| Field | Purpose |
|---|---|
| `id` | Immutable internal identity identifier |
| `status` | Active, suspended, or archived |
| `created_at` | Creation timestamp |
| `owner_account_id` | Current authenticated owner/control relationship |
| `wallet_binding` | Optional wallet ownership/control relationship |

The Identity owns or controls the user's public product resources:

```text
Identity
├── Name
├── Profile
├── Place
├── Wallet
├── Messages
├── Mail address
└── Discovery graph
```

The Identity ID must never change as a consequence of a name change.

### GeoCities Name

A **GeoCities Name** is the human-readable, globally unique public identifier associated with an Identity.

Example:

```text
alice.geocities.eth
```

The name is an address, not the underlying identity object.

Minimum properties:

| Field | Purpose |
|---|---|
| `id` | Immutable name-record identifier |
| `label` | Canonical human-readable label, e.g. `alice` |
| `namespace` | Naming namespace, e.g. `geocities.eth` |
| `normalized_name` | Canonical lookup form |
| `identity_id` | Current Identity target |
| `status` | Active, reserved, transferred, or released/tombstoned |
| `created_at` | Initial registration time |
| `updated_at` | Last ownership/metadata change |
| `resolution_version` | Version for future resolver evolution |

The combination of namespace and normalized label is unique.

---

## 2. Canonical identity relationships

The ownership graph is:

```text
Authenticated Account
        │
        │ controls
        ▼
     Identity
        │
        │ addressed by
        ▼
 GeoCities Name
        │
        │ resolves to
        ▼
     Identity
```

This deliberately separates **control** from **resolution**.

A resolver answers:

> "Which Identity currently owns/resolves from this GeoCities Name?"

Authorization answers:

> "Is this Account or delegated actor allowed to act for this Identity?"

A name lookup must never be treated as proof that the requester is authorized to mutate the identity.

---

## 3. Name normalization and uniqueness

Name registration must canonicalize the requested name before checking availability.

At minimum the canonicalization layer must define:

- allowed characters
- minimum and maximum length
- case normalization
- Unicode handling
- reserved words
- prohibited names
- namespace boundaries
- normalization before uniqueness checks

For the initial implementation, the safest default is a conservative ASCII label set (`a-z`, `0-9`, and `-`) with case-insensitive matching. Unicode names can be introduced later after homograph/confusable handling and a clear resolver policy exist.

Example:

```text
Alice
alice
ALICE
```

must resolve to the same canonical registration key if mixed case is allowed at the presentation layer.

The database must enforce uniqueness at the canonicalized representation, not only in application code.

---

## 4. Name lifecycle

A GeoCities Name follows an explicit state machine:

```text
                 ┌──────────────┐
                 │   Available  │
                 └──────┬───────┘
                        │ register
                        ▼
                 ┌──────────────┐
                 │    Active    │◄──────────────┐
                 └───┬──────┬───┘               │
                     │      │                   │
               transfer   release               │
                     │      │                   │
                     ▼      ▼                   │
               ┌────────┐ ┌──────────────┐       │
               │Transfer│ │  Tombstoned  │       │
               └───┬────┘ └──────────────┘       │
                   │                             │
                   └─────────────────────────────┘
```

### Registration

A successful registration atomically:

1. canonicalizes the requested label;
2. verifies availability/reservation rules;
3. creates the name record;
4. binds it to the Identity;
5. records an ownership/audit event;
6. establishes the initial public resolution.

Registration must be idempotent from the API perspective when the client supplies an idempotency key.

### Unavailable

A name is unavailable when it is:

- actively owned;
- reserved by system policy;
- in a protected transfer state; or
- permanently tombstoned.

Availability checks are advisory. The registration transaction is authoritative and must handle races atomically.

### Rename

A rename changes the Identity's current public name without changing the Identity ID, Place ownership, wallet binding, messages, or other resources.

Recommended behavior:

```text
Identity #123
   │
   ├── old name: alice
   │       └── retired / tombstoned
   │
   └── new name: alice2
           └── active
```

The old name should not immediately become available for reassignment. It should enter a tombstoned/retired state to prevent impersonation, broken links, and identity confusion.

If future product requirements allow name reuse, reuse should occur only after a defined quarantine period and must never cause the old name to silently resolve to a different person's identity without an explicit indication.

### Transfer

A transfer changes the controlling owner of a name/identity according to an explicit authorization protocol.

For an ordinary application-owned identity, transfer should require confirmation from the current owner and acceptance by the recipient.

A future wallet-controlled name may use cryptographic ownership transfer instead. The product API should hide this implementation difference behind the same domain operation:

```text
transferName(name, recipientControl)
```

A transfer must create a durable audit record and invalidate stale ownership assumptions/sessions where appropriate.

### Release

Release voluntarily removes a name from active ownership.

The name should normally become **tombstoned**, not immediately reusable. This protects users from phishing and accidental identity reassignment.

Permanent system-reserved names may never become available.

---

## 5. Wallet ownership

Wallets are resources of an Identity, but wallet custody/control and application authorization are distinct concepts.

Initial product model:

```text
Identity
   │
   └── Wallet binding
          ├── wallet address
          ├── chain/network
          └── custody/control mode
```

The application must not infer wallet ownership solely because a wallet address appeared in a session or transaction request.

Recommended control modes:

- **Managed** — GeoCities or a custody provider controls signing infrastructure.
- **External** — the user controls an external wallet and proves control through the wallet protocol.
- **Unbound** — the identity has no wallet yet.

This permits a user to register `alice.geocities.eth` and build a place before ever interacting with a blockchain wallet.

If the naming system is later backed by an external naming protocol, the external record can become an additional ownership proof without replacing the internal Identity ID.

---

## 6. Authentication and authorization assumptions

Authentication establishes an Account session.

Authorization evaluates whether that Account, a delegated collaborator, or an AI actor can act on behalf of an Identity.

The authorization chain should conceptually be:

```text
Request
  ↓
Authenticated principal
  ↓
Identity control/delegation check
  ↓
Resource ownership check
  ↓
Action permission check
  ↓
Mutation
  ↓
Audit event
```

Public name resolution must not bypass this chain.

### AI Webmaster

The AI Webmaster is an actor delegated by an Identity. It does not become the owner of the Identity.

```text
Identity
   │ delegates
   ▼
Webmaster Actor
   │
   └── scoped permissions
```

The Webmaster should therefore receive an identity-scoped authorization context and use domain tools rather than direct database access.

---

## 7. Name resolution contract

The initial application-level resolver should provide a deterministic read API.

### Resolve

```http
GET /names/{name}
```

Response concept:

```json
{
  "name": "alice.geocities.eth",
  "normalizedName": "alice.geocities.eth",
  "status": "active",
  "identityId": "identity_01...",
  "placeId": "place_01...",
  "profileId": "profile_01..."
}
```

The exact identifiers and serialization format are implementation details, but the contract must preserve the separation between the name and the Identity.

### Availability

```http
GET /names/{name}/availability
```

Returns a non-authoritative availability result intended for UX.

### Registration

```http
POST /names
Idempotency-Key: <client-generated-key>
```

Conceptual request:

```json
{
  "name": "alice.geocities.eth",
  "identityId": "identity_01..."
}
```

The authenticated principal must already control the target Identity. The server performs the authoritative availability check and ownership mutation transaction.

### Rename

```http
POST /names/{name}/transfer
```

For an internal rename, the domain operation may instead expose:

```http
POST /identities/{identityId}/name
```

The important invariant is that the Identity ID remains stable while the active name binding changes.

### Resolution requirements

Resolution must be:

- deterministic;
- case-normalized;
- authorization-independent for public data;
- backed by canonical database state;
- cacheable for public reads;
- versionable for future external naming integration.

---

## 8. Database constraints

The canonical relational model should include separate records for Accounts, Identities, Names, and ownership/audit events.

Conceptual schema:

```text
accounts
- id PK
- status
- created_at
- updated_at

identities
- id PK
- status
- owner_account_id FK
- created_at
- updated_at

names
- id PK
- namespace
- label
- normalized_name
- identity_id FK
- status
- created_at
- updated_at
- resolution_version

identity_name_history
- id PK
- name_id FK
- identity_id FK
- event_type
- created_at
- actor_id
- metadata

authorization_grants
- id PK
- identity_id FK
- principal_id
- principal_type
- permission_scope
- created_at
- expires_at

wallet_bindings
- id PK
- identity_id FK
- control_mode
- chain_id
- address
- verification_state
- created_at
- updated_at
```

Important constraints:

- `names.normalized_name` is unique within its namespace.
- Only one active name binding may point to an Identity unless the product explicitly supports aliases.
- A tombstoned name cannot be reactivated through an ordinary registration path.
- Foreign keys prevent orphaned active name records.
- Ownership-changing mutations are auditable.

---

## 9. Security and abuse considerations

Identity/name registration is a security boundary, not merely a profile feature.

The implementation must account for:

- race conditions during registration;
- name squatting/reservation policy;
- impersonation and lookalike names;
- account recovery and ownership disputes;
- transfer fraud;
- session invalidation after ownership changes;
- abuse reports and suspension;
- phishing through recently released names;
- privacy of non-public account information.

Name resolution should expose only data intended to be public. Account credentials, recovery information, private wallet metadata, and authorization grants must never be returned by public resolution.

---

## 10. Future external naming integration

The model intentionally does not require the initial application to depend on a blockchain naming protocol.

Future architecture can support:

```text
GeoCities Name
      │
      ├── internal canonical record
      │
      └── optional external naming record
               │
               └── cryptographic ownership proof
```

If `alice.geocities.eth` is eventually represented by an external naming system, GeoCities should treat the external record as an ownership/resolution authority that can be verified and synchronized according to an explicit policy.

The internal Identity ID remains the stable application reference so that changing naming infrastructure does not require rebuilding the user's Place, Profile, messages, or historical activity.

---

## 11. Acceptance criteria mapping

Issue #5 is complete when the implementation agrees with these invariants:

- A GeoCities name has a stable unique registration record.
- The Identity ID is independent of the public name and survives renames.
- Authentication, public identity, and authorization are separate concepts.
- Name resolution identifies the current public Identity without granting mutation authority.
- Registration handles canonicalization and race-safe uniqueness.
- Rename preserves the Identity and retires the old public name safely.
- Transfer requires explicit authorization and is auditable.
- Release normally tombstones the name rather than immediately recycling it.
- Wallet ownership is explicitly bound to the Identity and can be absent initially.
- The model supports future wallet/name-based ownership without requiring wallet UX for every user.
- API boundaries are defined without prematurely locking implementation technology.
