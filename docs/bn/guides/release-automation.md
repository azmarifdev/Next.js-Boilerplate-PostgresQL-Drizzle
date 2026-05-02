# রিলিজ অটোমেশন

## উদ্দেশ্য

Release Please দিয়ে versioning এবং changelog automation কীভাবে কাজ করে।

## Workflow

1. Conventional Commit PR `main`-এ merge করুন
2. `release-please.yml` release PR open/update করবে
3. `chore(main): release ...` PR merge করুন
4. Tag + GitHub release + `CHANGELOG.md` update স্বয়ংক্রিয়ভাবে হবে

## Rule

- Manually release tag তৈরি করবেন না
- Generated release PR body hand-edit করবেন না
- Conventional commit message maintain করুন (`feat`, `fix`, `docs`, `refactor`, etc.)

## Troubleshooting

### Expected changelog item missing

- Commit message format check করুন
- Target branch এবং merged commit scope check করুন

### Duplicate tag বা release entry

- Duplicate release entry remove করুন
- Actions tab থেকে workflow re-run করুন

### Release PR open হচ্ছে না

- Workflow permission verify করুন
- `.release-please-config.json` এবং `release-please-manifest.json` check করুন
