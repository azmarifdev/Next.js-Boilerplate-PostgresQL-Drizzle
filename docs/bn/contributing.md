# কনট্রিবিউটিং গাইড

## উদ্দেশ্য

Template contract না ভেঙে কীভাবে safely contribution করবেন, সেটা এই ফাইল ব্যাখ্যা করে।

## Development Setup

1. Supported Node version ব্যবহার করুন (`>=20 <23`)
2. Dependency install করুন
3. Dev server চালু করুন

```bash
pnpm install --frozen-lockfile
pnpm run dev
```

## PR ওপেন করার আগে

রান করুন:

```bash
pnpm run lint
pnpm run typecheck
pnpm run test
pnpm run format:check
pnpm run build
```

## Commit ও PR Rule

- Conventional Commit ব্যবহার করুন
- PR ছোট এবং focused রাখুন
- Behavior change হলে test include করুন
- Behavior change হলে code-এর সাথে docs aligned রাখুন

উদাহরণ:

- `feat(auth): add admin step-up verifier integration`
- `fix(proxy): prevent redirect loop on auth routes`
- `docs(auth): clarify custom provider requirements`

## Package Manager Policy

- Primary manager হচ্ছে `pnpm`
- CI-তে lockfile consistency গুরুত্বপূর্ণ
- Strategy বদলালে একই PR-এ CI + docs update করুন

দেখুন: `docs/migrations/package-manager.md`

## Release Notes Flow

Release Please merge হওয়া Conventional Commit থেকে release PR generate করে।

দেখুন: `docs/guides/release-automation.md`
