# Escardia website (escardia.app)

Next.js 15 + Tailwind CSS 4. Landing page, waitlist, vendor sign-up, and the pages the App Store and Google Play need (privacy, terms, support, account deletion).

## Run it

```bash
npm install
npm run dev
```

## Things you will change

- `lib/site.ts`: contact details, store links (fill `STORES` at launch and the badges switch from "Coming soon" to real links), vendor commission and payout numbers.
- Sign-ups go to Supabase through `join_waitlist` and `request_account_deletion` (see `004_website.sql` in the Supabase repo). Find them in the `waitlist` and `account_deletion_requests` tables.

## Pages

| Path | What it is |
| --- | --- |
| `/` | Landing page |
| `/support` | Contact options and FAQ (App Store support URL) |
| `/privacy` | Privacy policy (App Store and Google Play privacy URL) |
| `/terms` | Customer terms of use |
| `/vendor-agreement` | Vendor agreement and vendor privacy notice |
| `/delete-account` | Account deletion request (Google Play data deletion URL) |
