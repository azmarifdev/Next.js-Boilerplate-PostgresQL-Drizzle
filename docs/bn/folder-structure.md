# ফোল্ডার স্ট্রাকচার

## উদ্দেশ্য

প্রতিটি major folder-এর ownership/responsibility map এই ফাইলে দেয়া হয়েছে।

## Root Map

- `src/app` -> page, layout, route handler
- `src/components` -> reusable UI block
- `src/modules` -> domain-level logic ও hook
- `src/lib` -> core infra (auth/db/config/security)
- `src/providers` -> app-level provider composition
- `src/services` -> HTTP/API client helper
- `src/tests` -> unit/integration/e2e test
- `docs` -> project documentation
- `scripts` -> setup ও maintenance script

## App Router Area

- `src/app/(auth)` -> login/register page
- `src/app/(dashboard)` -> protected app page
- `src/app/api/v1` -> versioned REST endpoint
- `src/app/dev/flags` -> local flag override UI

## Domain Module

Core module:

- `src/modules/auth`
- `src/modules/user`
- `src/modules/project`
- `src/modules/task`

Optional module:

- `src/modules/optional/auth`
- `src/modules/optional/billing`
- `src/modules/optional/ecommerce`

## Infra Folder

- `src/lib/auth` -> session, adapter, guard, audit
- `src/lib/config` -> env parsing এবং feature flag
- `src/lib/db` -> schema এবং provider
- `src/lib/security` -> origin/redirect/rate-limit
- `src/lib/observability` -> logger/tracing/request-id

## Testing Layout

- `src/tests/unit`
- `src/tests/integration`
- `src/tests/e2e`

## Related Docs

- `docs/architecture.md`
- `docs/auth-flow.md`
