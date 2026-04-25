# Deployment Guide

## Pre-Deployment

- Ensure `DATABASE_URL` points to production PostgreSQL
- Set auth secrets
- Set `NEXT_PUBLIC_SITE_URL`
- Confirm `NEXT_PUBLIC_BACKEND_MODE` and `NEXT_PUBLIC_AUTH_PROVIDER`

## Recommended Commands

```bash
pnpm install --frozen-lockfile
pnpm run lint
pnpm run typecheck
pnpm run test
pnpm run build
```

## Database

```bash
pnpm run db:generate
pnpm run db:migrate
```

## Docker

```bash
pnpm run docker:build
pnpm run docker:run
```

## Post-Deployment Validation

- Open app root and dashboard routes
- Verify login/logout flow
- Validate protected route redirects
- Check logs for auth/config/runtime errors
