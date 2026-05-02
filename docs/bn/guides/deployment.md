# ডিপ্লয়মেন্ট গাইড

## উদ্দেশ্য

Validation checkpoint সহ step-by-step deployment procedure।

## Pre-Deploy

- Selected auth mode confirm করুন (`better-auth` বা `custom-auth`)
- সব required env var set আছে নিশ্চিত করুন
- Runtime environment থেকে DB connectivity নিশ্চিত করুন
- Step-up MFA enabled থাকলে verifier endpoint configure করুন

## Build Validation (Local/CI)

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

## Deploy

- Provider build command: `pnpm run build`
- Provider start command: `pnpm run start`

## Post-Deploy Check

- `/login` এবং `/register` accessible
- Unauthenticated user protected page-এ গেলে `/login` এ redirect হয়
- Auth route (`login`, `me`, `refresh`, `logout`) ঠিকমতো কাজ করে
- Enabled থাকলে `/users` এ admin step-up কাজ করে
- Auth বা runtime validation error-এর জন্য log check করুন
