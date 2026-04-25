# How to Use

## 1. Install and Bootstrap

```bash
pnpm install
pnpm run setup
```

## 2. Configure Environment

Update `.env` based on `.env.example`:

- `DATABASE_URL`
- `NEXT_PUBLIC_BACKEND_MODE`
- `NEXT_PUBLIC_AUTH_PROVIDER`
- `NEXT_PUBLIC_ENABLE_REDUX`

Recommended defaults:

- `NEXT_PUBLIC_BACKEND_MODE=internal`
- `NEXT_PUBLIC_AUTH_PROVIDER=better-auth`
- `NEXT_PUBLIC_ENABLE_REDUX=false`

## 3. Run Locally

```bash
pnpm run dev
```

## 4. Quality Checks

```bash
pnpm run lint
pnpm run typecheck
pnpm run test
pnpm run format:check
```

## 5. Database Workflow

```bash
pnpm run db:generate
pnpm run db:migrate
pnpm run db:studio
```

## 6. Feature Flags

- Runtime flags: `src/lib/config/featureFlags.ts`
- Dev local overrides UI: `/dev/flags`

## 7. Release Workflow

- Merge feature PRs into `main`
- Release Please opens/updates release PR
- Merge `chore(main): release ...` PR to publish release
