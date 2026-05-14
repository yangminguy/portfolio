# v2-deck — Horizontal Portfolio Deck

This is the final production app for Yang Wonmin's portfolio website.

## Interaction Model

The homepage is a horizontal slide deck:

- scrolls to the right
- shows neighboring slides
- uses scroll snap
- supports ArrowRight / ArrowLeft
- converts trackpad/mouse wheel movement to horizontal scroll
- uses a top-center tick indicator

## Commands

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Main Files

```text
app/page.tsx
app/globals.css
components/deck/DeckContext.tsx
components/deck/Scene.tsx
components/deck/SceneIndicator.tsx
components/deck/Header.tsx
components/deck/NextHint.tsx
data/projects.ts
```

## Contact Form

The final contact slide posts to `POST /api/contact`, which validates the sender email and message on the server before inserting into Supabase. The browser never receives the Supabase service role key.

### Environment variables

Create `v2-deck/.env.local` with:

```bash
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
```

Use the same variables in the production deployment environment.

### Supabase SQL

Run this in the Supabase SQL editor:

```sql
create table contacts (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  message text not null,
  created_at timestamptz default now()
);

alter table contacts enable row level security;

-- Public clients should not read or write this table directly.
-- The Next.js API route inserts with the server-only service role key, which bypasses RLS.
revoke all on table contacts from anon, authenticated;
```

If you later add a public Supabase client insert path, replace the revoke-only posture with a narrowly scoped insert policy and keep reads disabled.

### Local testing

1. Install dependencies with `npm install`.
2. Add `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` to `.env.local`.
3. Start the app with `npm run dev`.
4. Open the Contact slide, click `Email me`, submit an email and message, and confirm a row appears in `contacts`.
5. API-only smoke test:

```bash
curl -X POST http://localhost:3000/api/contact \
  -H 'Content-Type: application/json' \
  -d '{"email":"sender@example.com","message":"hello"}'
```

### Future notifications

Add email, Slack, or webhook notification logic in `app/api/contact/route.ts` after the Supabase insert succeeds and before returning `{ "ok": true }`.
