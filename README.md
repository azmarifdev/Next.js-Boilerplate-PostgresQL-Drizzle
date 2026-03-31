# Next Starter Template

A production-ready Next.js App Router starter for modern SaaS-style applications.

This template is designed to help teams ship quickly with strong defaults for architecture, auth, validation, testing, and GitHub automation.

## Table of Contents

- [Project Goals](#project-goals)
- [Core Features](#core-features)
- [Why Each Part Was Added](#why-each-part-was-added)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [How to Use This Template](#how-to-use-this-template)
- [GitHub Automation](#github-automation)
- [Safe Push and Release Demo](#safe-push-and-release-demo)
- [Contribution Workflow](#contribution-workflow)
- [Additional Guides](#additional-guides)

## Project Goals

- Provide a clean, scalable baseline for Next.js projects.
- Enforce consistent code quality from local development to CI.
- Reduce manual release and maintenance work through automation.
- Keep onboarding simple for new contributors.

## Core Features

- Next.js App Router with TypeScript strict mode.
- Feature-friendly architecture with reusable `src/lib` utilities.
- Auth flow support with NextAuth.
- Form and runtime validation using Zod and `@t3-oss/env-nextjs`.
- Stripe integration scaffold.
- Drizzle ORM setup for SQL workflows.
- i18n scaffold with `next-intl`.
- UI baseline with Tailwind CSS and shadcn-compatible component setup.
- Redux Toolkit store setup.
- Comprehensive testing setup: Jest, Vitest, and Playwright.
- GitHub automation for CI, release notes, dependency review, code scanning, and PR governance.

## Why Each Part Was Added

- `TypeScript (strict)`: catches bugs earlier and improves maintainability.
- `ESLint + Prettier`: keeps code style and quality consistent across contributors.
- `Husky + lint-staged + commitlint`: prevents low-quality commits before they enter PR.
- `Jest + Vitest + Playwright`: balances fast unit testing with realistic end-to-end coverage.
- `Zod + env validation`: avoids runtime failures caused by invalid inputs/config.
- `Drizzle`: type-safe database access and predictable migrations.
- `Release Please`: automatic changelog, version bump, tag, and GitHub release.
- `Dependabot + dependency review`: safer and more regular dependency maintenance.
- `CodeQL`: automated static security analysis on repository code.

## Tech Stack

### Application

- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS 4
- Redux Toolkit
- NextAuth
- Zod
- Drizzle ORM
- Stripe SDK

### Tooling and Quality

- ESLint
- Prettier
- Husky
- lint-staged
- Commitlint
- Knip
- Storybook

### Testing

- Jest + Testing Library
- Vitest
- Playwright

### CI/CD and GitHub Automation

- GitHub Actions
- Release Please
- Dependabot
- CodeQL

## Project Structure

```text
nextjs-starter-template/
  .github/
    workflows/
  drizzle/
  public/
  src/
    app/
    lib/
    store/
    i18n/
    styles/
  CHANGELOG.md
  CONTRIBUTING.md
  GITHUB_SETUP_CHECKLIST.md
  package.json
```

## Getting Started

### 1) Install

```bash
npm install
```

### 2) Configure environment

```bash
cp .env.example .env.local
```

Update required values in `.env.local`.

### 3) Run development server

```bash
npm run dev
```

### 4) Build and run production locally

```bash
npm run build
npm run start
```

## Environment Variables

- Use `.env.example` as the reference template.
- Keep secrets in `.env.local` only.
- Never commit real secrets.

For CI and deployment, configure required values in repository/deployment secrets.

## Scripts

- `npm run dev`: start local development server.
- `npm run build`: production build.
- `npm run start`: run production server.
- `npm run preview`: build and run production preview.
- `npm run analyze`: build with bundle analysis.
- `npm run lint`: run ESLint.
- `npm run lint:fix`: auto-fix lint issues.
- `npm run typecheck`: run TypeScript type check.
- `npm run format:check`: verify formatting.
- `npm run format:write`: apply formatting.
- `npm run test`: run Jest tests.
- `npm run test:watch`: run Jest in watch mode.
- `npm run test:vitest`: run Vitest tests.
- `npm run test:coverage`: generate Vitest coverage.
- `npm run e2e`: run Playwright tests.
- `npm run e2e:ui`: run Playwright UI mode.
- `npm run storybook`: start Storybook.
- `npm run build-storybook`: build Storybook.
- `npm run db:generate`: generate Drizzle migrations.
- `npm run db:migrate`: run Drizzle migrations.
- `npm run db:studio`: open Drizzle Studio.
- `npm run knip`: detect unused files/dependencies.
- `npm run codehawk`: run CodeHawk analysis.

## How to Use This Template

### Typical implementation flow

1. Create a feature branch from `main`.
2. Implement UI and logic under `src/`.
3. Add or update tests.
4. Run local quality checks.
5. Commit with Conventional Commit format.
6. Push branch and open a PR.
7. Merge after required checks and review.

### Recommended local pre-PR checks

```bash
npm run lint
npm run typecheck
npm run format:check
npm run test
```

## GitHub Automation

This project includes the following workflows:

- `ci.yml`: lint, typecheck, format check, tests, build; plus E2E on `main`/`master`/`develop` pushes.
- `commitlint.yml`: validates PR commit messages.
- `pr-title.yml`: enforces semantic PR title format.
- `dependency-review.yml`: checks dependency risk in PRs.
- `dependabot-auto-merge.yml`: enables auto-merge for safe Dependabot patch/minor updates.
- `labeler.yml`: auto-labels PRs by changed files.
- `stale.yml`: marks/closes inactive issues and PRs.
- `release-please.yml`: automates release PR, changelog, version, tag, and GitHub release notes.
- `codeql.yml`: scheduled and PR/push security analysis.

## Safe Push and Release Demo

### Push flow (copy-paste safe)

```bash
git branch --show-current
git status
npm run lint
npm run typecheck
npm run format:check
npm run test
git add .
git commit -m "feat(ci): improve github automation"
git push -u origin feat/github-automation
```

Then open a PR to `main`.

### After PR opens

- Wait for required checks to pass.
- Address review comments.
- Merge PR.

### Release behavior after merge to `main`/`master`

1. Release Please updates or creates a release PR.
2. Merging that release PR updates `CHANGELOG.md` and creates a new tag (`vX.Y.Z`).
3. GitHub Release notes are published automatically.

## Contribution Workflow

### Commit format

Use Conventional Commits:

```text
<type>(optional-scope): <short description>
```

Examples:

- `feat(auth): add remember me`
- `fix(api): handle invalid token`
- `chore(deps): update eslint`
- `docs(readme): improve setup section`

### Pull request expectations

- Keep PRs focused and small.
- Add or update tests for behavior changes.
- Use semantic PR title (same style as Conventional Commits).
- Ensure all required checks pass before merge.

For full policy, see [`CONTRIBUTING.md`](./CONTRIBUTING.md).

## Additional Guides

- Contribution policy: [`CONTRIBUTING.md`](./CONTRIBUTING.md)
- GitHub one-time manual setup: [`GITHUB_SETUP_CHECKLIST.md`](./GITHUB_SETUP_CHECKLIST.md)
- Commit examples: [`.github-commit-message-examples.txt`](./.github-commit-message-examples.txt)
- Changelog: [`CHANGELOG.md`](./CHANGELOG.md)
