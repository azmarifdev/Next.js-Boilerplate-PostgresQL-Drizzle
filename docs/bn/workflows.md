# ওয়ার্কফ্লো

## উদ্দেশ্য

প্রতিটি GitHub workflow কী করে এবং কখন run হয়, তা এই ফাইল ব্যাখ্যা করে।

## CI & Quality

- `ci.yml`: install, lint, typecheck, test, build
- `package-manager-consistency.yml`: lockfile/install consistency check
- `bun-compatibility.yml`: bun install compatibility check

## PR Governance

- `commitlint.yml`: Conventional Commit validation
- `pr-title.yml`: semantic PR title validation
- `labeler.yml`: changed path থেকে auto label
- `pr-auto-merge.yml`: optional auto-merge policy

## Security & Dependency

- `codeql.yml`: static security analysis
- `codehawk.yml`: additional security scan
- `dependency-review.yml`: PR-এ dependency risk check
- `dependabot-auto-merge.yml`: controlled safe dependency auto-merge

## Release & Maintenance

- `release-please.yml`: automated version/changelog/tag/release
- `stale.yml`: stale issue/PR cleanup

## Suggested Local Preflight

বড় change push করার আগে:

```bash
pnpm run lint
pnpm run typecheck
pnpm run test
pnpm run build
```

## Related Docs

- `docs/guides/release-automation.md`
- `docs/guides/github-setup-checklist.md`
