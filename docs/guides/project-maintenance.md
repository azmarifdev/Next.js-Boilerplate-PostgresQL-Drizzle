# Project Maintenance

## Daily

- Keep branches synced with `main`
- Run lint/typecheck/tests before push

## Weekly

- Review dependency updates
- Review CI health and flaky checks
- Inspect stale issues/PRs

## Monthly

- Audit environment variables and secrets
- Review feature flags and optional module usage
- Validate release automation flow

## Refactor Hygiene

- Remove dead code during feature updates
- Keep naming consistent across modules
- Keep optional modules isolated under `src/modules/optional`
