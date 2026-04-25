# Cloud Providers

## Supported Targets

This project is deployable to major providers that support Next.js and Node runtime:

- Vercel
- Netlify
- Railway
- Render
- Fly.io
- Self-managed Docker hosts

## Required Environment Variables

- `DATABASE_URL`
- `AUTH_SESSION_SECRET` or `AUTH_SESSION_SECRETS`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_BACKEND_MODE`
- `NEXT_PUBLIC_AUTH_PROVIDER`

## Provider Checklist

1. Set production environment variables
2. Run database migrations before/with deploy
3. Verify `/api/v1/auth/me` health through authenticated request
4. Confirm secure cookie behavior over HTTPS

## Build/Start

```bash
pnpm install --frozen-lockfile
pnpm run build
pnpm run start
```
