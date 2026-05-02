# আর্কিটেকচার

## উদ্দেশ্য

নতুন contributor যেন code edit করার আগে boundary বুঝতে পারে, তাই এই ফাইল system design ব্যাখ্যা করে।

## High-Level Layer

- App/UI layer: `src/app`, `src/components`
- Domain module: `src/modules/*`
- API layer: `src/app/api/v1/*`
- Core infrastructure: `src/lib/*`
- Integration provider: `src/providers/*`

## Runtime Mode

- Backend mode
  - `internal`: UI + API একই app-এ
  - `external`: UI external backend-এর base URL-এ কথা বলে
- Auth provider mode
  - `better-auth`: internal auth route
  - `custom-auth`: external IdP adapter

## Request Path (Internal Mode)

1. Browser App Router page load করে
2. Protected route `src/proxy.ts`-এ hit করে
3. Session cookie verify হয় `src/lib/auth/session.ts`-এ
4. UI বা API route continue করে
5. API handler standard envelope return করে

## Auth ও Security Design

- Signed cookie session token (`auth_token`)
- Sensitive auth endpoint-এ same-origin check
- In-memory auth/MFA rate limit
- `/users` এর জন্য optional admin step-up MFA
- Login/register outcome-এর জন্য audit log write

## Config Design

- Environment schema: `src/lib/config/env.ts`
- Runtime validation: `src/lib/config/validate.ts`
- Runtime flag: `src/lib/config/featureFlags.ts`

## Data Design

- শুধু PostgreSQL + Drizzle
- Schema: `src/lib/db/schema.ts`
- Provider: `src/lib/db/providers/*`

## Testing Strategy

- Unit: `src/tests/unit`
- Integration: `src/tests/integration`
- E2E: `src/tests/e2e`

## Related Docs

- `docs/auth-flow.md`
- `docs/folder-structure.md`
- `docs/workflows.md`
