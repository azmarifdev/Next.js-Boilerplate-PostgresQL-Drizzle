# Architecture

## Overview

This boilerplate follows a layered architecture designed for long-term maintainability:

- UI layer (App Router pages + components)
- Module layer (domain-focused features)
- API layer (versioned REST routes)
- Core layer (`lib/*` for auth, config, db, security, observability)

## Core Principles

- REST-first contract under `/api/v1`
- PostgreSQL + Drizzle only
- Better Auth as default auth provider
- React Query as default state/data synchronization layer
- Optional modules isolated from core domains

## Runtime Modes

- Backend mode: `internal` (default) or `external`
- Auth provider: `better-auth` (default), `custom` (optional)
- State mode: `react-query` (default), `redux` (optional)

## Request Flow

1. Client calls route/service
2. Runtime resolver computes API endpoint
3. Request goes to `/api/v1/*`
4. Route handler validates access/mode/provider
5. Domain service executes business logic
6. API envelope returns structured response

## Auth Architecture

- Default provider: Better Auth
- Optional provider: Custom Auth
- Session via secure cookie token
- Route protection handled by `src/proxy.ts`

## Data Architecture

- Primary database: PostgreSQL
- ORM layer: Drizzle
- Access pattern: repository/service separation

## Optional Module Boundary

Optional modules are physically isolated in `src/modules/optional/*`.
Core app logic does not depend on optional module internals.

## Reliability and DX

- Request tracing and request-id propagation
- Rate-limit and origin validation for auth routes
- Typed config parsing (`env` + runtime validation)
- Automated CI + release workflows
