# Release Automation

## Release Tooling

Release management is automated with Release Please workflow.

## Standard Flow

1. Merge feature/fix PRs into `main`
2. Release Please updates/creates release PR
3. Merge `chore(main): release ...` PR
4. GitHub release and tags are published automatically

## Rules

- Do not manually create release tags
- Do not manually create duplicate GitHub releases
- Do not manually edit released changelog blocks

## Troubleshooting

### Duplicate tag error (`already_exists`)

- Remove duplicate release entry for that tag in GitHub Releases
- Re-run Release Please workflow

### Missing changelog entries

- Verify conventional commit messages (`feat`, `fix`, `docs`, etc.)
- Ensure release PR includes expected commits before merging

## Useful Commands

```bash
git log --no-merges --pretty=format:'- %s (%h)' Next.js-Boilerplate-PostgresQL-Drizzle-v0.1.6..HEAD
```
