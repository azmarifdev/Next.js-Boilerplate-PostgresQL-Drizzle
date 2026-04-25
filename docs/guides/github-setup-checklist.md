# GitHub Setup Checklist

## Repository Settings

- Protect `main`
- Require PR reviews
- Require status checks
- Enable squash merge

## Secrets

Configure required secrets for CI/deploy workflows:

- `DATABASE_URL`
- `AUTH_SESSION_SECRET`
- deployment provider credentials (as needed)

## Labels

Recommended labels:

- `automerge`
- `bug`
- `enhancement`
- `documentation`
- `dependencies`

## Branch Strategy

- Feature branches from `main`
- PR merge to `main`
- Release PR handled by Release Please

## Quality Gates

- lint
- typecheck
- tests
- lockfile consistency
- dependency review
