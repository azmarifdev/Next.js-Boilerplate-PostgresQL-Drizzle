# Package Manager Migration Notes

## Current Standard

This project standardizes on `pnpm`.

## Required Files

- `package.json`
- `pnpm-lock.yaml`

## CI Behavior

CI uses frozen lockfile installs. Any dependency change must include updated `pnpm-lock.yaml`.

## Local Commands

```bash
pnpm install
pnpm run lint
pnpm run typecheck
pnpm run test
```

## Common Failure

`ERR_PNPM_OUTDATED_LOCKFILE`

Fix:

```bash
pnpm install --lockfile-only
git add pnpm-lock.yaml
```
