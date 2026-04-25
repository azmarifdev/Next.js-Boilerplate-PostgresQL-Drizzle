# Next.js Boilerplate (PostgreSQL + Drizzle)

Production-ready Next.js template with REST API, PostgreSQL, Drizzle ORM, Better Auth-first flow, React Query-first state management, and clean optional module boundaries.

## Highlights

- Next.js App Router (TypeScript)
- REST API with versioned routes (`/api/v1`)
- PostgreSQL + Drizzle ORM only
- Better Auth as default authentication mode
- React Query as default state/data layer
- Redux optional mode (disabled by default)
- Feature flag system with local dev flag UI (`/dev/flags`)
- Optional module isolation (`billing`, `ecommerce`)
- CI/release automation with GitHub Actions + Release Please

## Tech Stack

- Framework: Next.js
- Language: TypeScript
- Database: PostgreSQL
- ORM: Drizzle
- API: REST
- Auth: Better Auth (default), Custom Auth (optional)
- State: React Query (default), Redux (optional)
- Testing: Vitest + Playwright
- Package Manager: pnpm

## Quick Start

```bash
pnpm install
pnpm run setup
pnpm run dev
```

App runs at `http://localhost:3000`.

## Environment

Create `.env` from `.env.example` or run:

```bash
pnpm run setup
```

Key variables:

- `DATABASE_URL`
- `NEXT_PUBLIC_BACKEND_MODE=internal`
- `NEXT_PUBLIC_AUTH_PROVIDER=better-auth`
- `NEXT_PUBLIC_ENABLE_REDUX=false`
- `ALLOW_DEMO_AUTH=false`
- `ALLOW_INSECURE_DEV_AUTH=false`

## Scripts

- `pnpm run setup` — bootstrap local environment
- `pnpm run dev` — start development server
- `pnpm run build` — production build
- `pnpm run start` — start built app
- `pnpm run lint` / `pnpm run lint:fix`
- `pnpm run typecheck`
- `pnpm run test`
- `pnpm run e2e`
- `pnpm run format:check` / `pnpm run format:write`
- `pnpm run db:generate` / `pnpm run db:migrate` / `pnpm run db:studio`

## Feature Flags

Server and runtime flags are defined in `src/lib/config/featureFlags.ts`.

Categories:

- Auth modes
- Optional modules
- Dev features

Dev-only local overrides are available at:

- `/dev/flags`

## Optional Modules

Optional modules are isolated under:

- `src/modules/optional/billing`
- `src/modules/optional/ecommerce`

Core modules remain independent:

- `auth`, `user`, `project`, `task`

## Documentation

- [How to Use](docs/how-to-use.md)
- [Architecture](docs/architecture.md)
- [Folder Structure](docs/folder-structure.md)
- [Auth Flow](docs/auth-flow.md)
- [Package Manager Migration](docs/migrations/package-manager.md)
- [Workflows](docs/workflows.md)
- [Guides](docs/guides/README.md)

## Release Flow

Release is automated via Release Please.

- Do not create tags manually
- Do not create duplicate GitHub releases manually
- Merge release PRs (`chore(main): release ...`) when generated

## License

MIT
