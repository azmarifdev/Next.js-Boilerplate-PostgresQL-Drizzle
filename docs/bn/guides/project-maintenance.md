# প্রজেক্ট মেইনটেনেন্স

## উদ্দেশ্য

স্থিতিশীলতা, সিকিউরিটি, এবং upgrade health বজায় রাখতে routine maintenance checklist।

## Daily

- Feature branch `main` এর সাথে sync করুন
- Push-এর আগে lint/typecheck/test run করুন
- Behavior change হলে docs aligned রাখুন

## Weekly

- Dependency PR এবং scan result review করুন
- CI flake এবং failing test review করুন
- Auth/security সম্পর্কিত open issue check করুন

## Monthly

- Env var এবং secret hygiene audit করুন
- Optional module flag usage review করুন
- Release automation health verify করুন
- Docs এখনও runtime behavior-এর সাথে match করে কিনা verify করুন

## Quarterly

- Current provider অনুযায়ী deployment guide validate করুন
- Full e2e + integration suite পুনরায় run করুন
- Deprecated dependency এবং major upgrade review করুন
