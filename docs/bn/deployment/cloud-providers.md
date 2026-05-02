# ক্লাউড প্রোভাইডার

## উদ্দেশ্য

এই ফাইল deployment target এবং environment requirement list করে।

## Supported Target

- Vercel
- Netlify
- Railway
- Render
- Fly.io
- Self-managed Docker

## Required Environment Variable

সবসময় set করুন:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_BACKEND_MODE`
- `NEXT_PUBLIC_AUTH_PROVIDER`

Internal auth mode:

- `DATABASE_URL`
- `AUTH_SESSION_SECRET` বা `AUTH_SESSION_SECRETS`

Custom auth mode:

- `NEXT_PUBLIC_CUSTOM_AUTH_BASE_URL`
- `NEXT_PUBLIC_ENABLE_CUSTOM_AUTH=true`
- `ENABLE_CUSTOM_AUTH=true`

যদি admin step-up enabled থাকে:

- `REQUIRE_ADMIN_STEP_UP_AUTH=true`
- `AUTH_MFA_VERIFY_URL` (recommended)

## Deployment Checklist

1. Provider dashboard-এ environment variable configure করুন
2. Migration run করুন (`pnpm run db:migrate`)
3. Build এবং start করুন (`pnpm run build`, `pnpm run start`)
4. `/login`, `/register`, এবং protected route redirect behavior verify করুন
5. Auth API verify করুন (`login`, `me`, `refresh`, `logout`)
6. Step-up enabled থাকলে MFA flow verify করুন

## Docker Note

Containerized deployment/testing-এর জন্য included `Dockerfile` এবং `docker-compose.yml` ব্যবহার করুন।
