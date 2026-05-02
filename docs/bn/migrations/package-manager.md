# প্যাকেজ ম্যানেজার মাইগ্রেশন

## উদ্দেশ্য

টিম package manager policy নিরাপদভাবে change করতে চাইলে এই guide ব্যবহার করুন।

## বর্তমান Template Default

- Primary manager: `pnpm`
- Repo lockfile: `pnpm-lock.yaml`

## Migration Step

1. CI-র জন্য নতুন canonical manager ঠিক করুন
2. Workflow-এ install/build/test command update করুন
3. সঠিক lockfile regenerate করে commit করুন
4. Docs update করুন (`README.md`, `CONTRIBUTING.md`, workflow docs)
5. Full verification run করুন

## Verification Checklist

```bash
pnpm run lint
pnpm run typecheck
pnpm run test
pnpm run build
pnpm run docs:check
```

## Risk Control

- এক PR-এ mixed lockfile drift এড়িয়ে চলুন
- Migration PR feature work থেকে আলাদা রাখুন
- Dependency-review workflow এখনও pass করছে কিনা নিশ্চিত করুন
