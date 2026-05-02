# GitHub সেটআপ চেকলিস্ট

## উদ্দেশ্য

এই template adopt করা টিমের জন্য repository hardening checklist।

## Branch Protection

- `main` protect করুন
- Pull request review required করুন
- Merge-এর আগে status check required করুন
- `main` এ direct push restrict করুন
- Squash merge strategy prefer করুন

## Required Check (Recommended)

- `ci`
- `commitlint`
- `pr-title`
- `dependency-review`
- `codeql` (যদি আপনার org policy enforce করে)

## Secret

Internal mode minimum:

- `DATABASE_URL`
- `AUTH_SESSION_SECRET`

Optional MFA verifier:

- `AUTH_MFA_VERIFY_URL`
- `AUTH_MFA_VERIFY_BEARER_TOKEN`

Custom auth mode:

- `NEXT_PUBLIC_CUSTOM_AUTH_BASE_URL`

## Label

Recommended baseline label:

- `bug`
- `enhancement`
- `documentation`
- `dependencies`
- `security`

## Release Permission

- Workflow যেন pull request create করতে পারে
- Workflow যেন release/tag metadata write করতে পারে
