# Auth Flow

## Default Path

Default authentication path is Better Auth:

- `NEXT_PUBLIC_AUTH_PROVIDER=better-auth`
- Backend mode expected as `internal` for local/full-stack flow

## Optional Path

Custom auth mode is supported but optional:

- `NEXT_PUBLIC_AUTH_PROVIDER=custom`

## Route Surface

Versioned auth endpoints:

- `POST /api/v1/auth/login`
- `POST /api/v1/auth/register`
- `GET /api/v1/auth/me`
- `POST /api/v1/auth/logout`
- `POST /api/v1/auth/refresh`

## Session Model

- Session token is issued on login/register
- Token is stored in secure HTTP-only cookie
- `proxy.ts` enforces route protection

## Security Controls

- Same-origin checks on sensitive auth operations
- Auth route rate limiting
- Runtime configuration guardrails

## Development Toggles

- `ALLOW_DEMO_AUTH` (default `false`)
- `ALLOW_INSECURE_DEV_AUTH` (default `false`)

Both are opt-in only.
