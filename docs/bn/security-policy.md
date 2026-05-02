# সিকিউরিটি পলিসি

## উদ্দেশ্য

এই ফাইল supported version এবং vulnerability responsibly report করার পদ্ধতি নির্ধারণ করে।

## Supported Versions

Security fix latest published line-এ apply করা হয়।

| Version line        | Supported        |
| ------------------- | ---------------- |
| Latest release      | Yes              |
| Older release lines | Best effort only |

## Vulnerability রিপোর্ট করুন

Sensitive vulnerability-এর জন্য public GitHub issue খুলবেন না।

এই চ্যানেলের যেকোনো একটিতে রিপোর্ট করুন:

- GitHub security advisory workflow (preferred)
- Maintainer-এর private contact (যদি available থাকে)

রিপোর্টে include করুন:

- Reproduction step
- Affected file/route
- Impact assessment
- Suggested fix (optional)

## Expected Response

- Initial acknowledgement: maintainer available হলে যত দ্রুত সম্ভব
- Triage: severity এবং exploitability review
- Remediation: patch + release guidance

## Scope Highlights

এই template-এর sensitive area:

- `src/app/api/v1/auth/*`
- `src/lib/auth/*`
- `src/lib/security/*`
- `src/proxy.ts`

Secure runtime setup-এর জন্য পড়ুন: `docs/auth-flow.md` এবং `docs/deployment/cloud-providers.md`.
