# Folder Structure

## Top-Level

- `src/app` — Next.js app router pages/routes
- `src/modules` — feature modules
- `src/lib` — shared core infrastructure
- `src/components` — reusable UI/layout components
- `src/providers` — app-level providers
- `src/services` — HTTP/API clients
- `src/tests` — unit/integration/e2e tests
- `docs` — project documentation
- `scripts` — automation and setup scripts

## Module Layout

Core modules:

- `src/modules/auth`
- `src/modules/user`
- `src/modules/project`
- `src/modules/task`

Optional modules:

- `src/modules/optional/billing`
- `src/modules/optional/ecommerce`

## API Layout

- `src/app/api/v1/*`

Keeps API versioning explicit and future-safe.

## Config Layout

- `src/lib/config/env.ts`
- `src/lib/config/app-config.ts`
- `src/lib/config/runtime.ts`
- `src/lib/config/featureFlags.ts`

## Naming Convention

- camelCase files for hooks/utils
- no `.hook.ts` suffix clutter
- route files follow Next.js conventions
