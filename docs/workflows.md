# Workflows

## Pnpm Compatibility (`bun-compatibility.yml`)

- What: Runs lint, typecheck, tests, build using pnpm.
- When: Manual trigger.
- Why: Confirms full project health in a clean CI runner.

## CI (`ci.yml`)

- What: Quality matrix, build, and Playwright E2E.
- When: PRs and pushes to tracked branches.
- Why: Prevents regressions and enforces baseline quality.

## CodeHawk Scan (`codehawk.yml`)

- What: Static code scan.
- When: Weekly schedule and manual trigger.
- Why: Adds security and quality visibility.

## CodeQL (`codeql.yml`)

- What: GitHub CodeQL analysis for JS/TS.
- When: PRs, pushes to protected branches, scheduled run.
- Why: Finds security vulnerabilities early.

## Commit Lint (`commitlint.yml`)

- What: Conventional commit validation.
- When: PR lifecycle events.
- Why: Keeps release/changelog automation predictable.

## Dependabot Auto Merge (`dependabot-auto-merge.yml`)

- What: Auto-enables merge for safe patch/minor updates.
- When: Dependabot PR events.
- Why: Reduces manual maintenance overhead.

## Dependency Review (`dependency-review.yml`)

- What: Dependency risk checks for changed manifests/lockfiles.
- When: PRs.
- Why: Improves supply-chain safety.

## PR Labeler (`labeler.yml`)

- What: Applies labels based on changed paths.
- When: PR opened/synced/reopened.
- Why: Improves review routing and triage.

## Package Manager Consistency (`package-manager-consistency.yml`)

- What: Frozen lockfile install + lockfile drift check.
- When: PR/push touching package manager files.
- Why: Prevents CI install mismatches.

## PR Auto Merge (`pr-auto-merge.yml`)

- What: Enables auto-merge for labeled PRs.
- When: PR events and label updates.
- Why: Speeds merge flow for approved changes.

## PR Title Check (`pr-title.yml`)

- What: Semantic PR title validation.
- When: PR lifecycle events.
- Why: Maintains release note and automation quality.

## Release Please (`release-please.yml`)

- What: Creates release PRs and publishes GitHub releases.
- When: Push to `main`, manual trigger.
- Why: Automates versioning and release lifecycle.

## Stale Issues and PRs (`stale.yml`)

- What: Marks and closes inactive issues/PRs.
- When: Scheduled run and manual trigger.
- Why: Keeps repository backlog healthy.
