# Nexus — Learning Dashboard

A futuristic student dashboard built with Next.js 14 App Router, Supabase, Tailwind CSS, and Framer Motion.

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Create a Supabase project
Go to [supabase.com](https://supabase.com) and create a free project.

### 3. Create the `courses` table
Run this SQL in your Supabase SQL editor:

```sql
create table courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  progress integer not null default 0,
  icon_name text not null,
  created_at timestamptz default now()
);

-- Seed data
insert into courses (title, progress, icon_name) values
  ('Advanced React Patterns', 75, 'cpu'),
  ('System Design Fundamentals', 40, 'layers'),
  ('TypeScript Deep Dive', 90, 'code-2'),
  ('Database Architecture', 55, 'database');
```

### 4. Configure environment variables
```bash
cp .env.example .env.local
```
Fill in your Supabase URL and anon key from your project's API settings.

### 5. Run the dev server
```bash
npm run dev
```

---

## Architecture

### Server / Client Component split
Data fetching happens exclusively in Server Components (`app/dashboard/page.tsx`). The `createClient()` utility from `lib/supabase/server.ts` uses `@supabase/ssr` to construct a server-side Supabase client that reads cookies via Next.js `cookies()`. No data fetching runs on the client.

Client Components (`"use client"`) are used only where interactivity or Framer Motion animations are required — the Sidebar, BentoGrid, and all individual tiles. They receive already-fetched data as props from their Server Component parent.

### Loading states
A `<Suspense>` boundary in `page.tsx` wraps the async `DashboardContent` Server Component. While Supabase resolves, Next.js streams the `BentoGridSkeleton` (shimmer placeholder tiles) to the client immediately.

### Error handling
`app/dashboard/error.tsx` is a Next.js error boundary. Any uncaught throw from the Server Component (e.g. a failed Supabase query) is caught here and shown as a recoverable UI with a retry button.

### Animations
- **Staggered entrance**: `BentoGrid` uses Framer Motion `variants` with `staggerChildren` so tiles reveal sequentially on load.
- **Spring physics**: All hover interactions use `type: "spring"` with `stiffness: 300, damping: 20` for natural feel.
- **layoutId**: The sidebar active indicator uses `layoutId="sidebar-active-bg"` so the background snaps smoothly between nav items.
- **Zero layout shift**: All animations use `transform` (scale, translateY) and `opacity` only — no width/height/margin changes that cause repaints.

### Responsive layout
| Breakpoint | Sidebar | Grid |
|---|---|---|
| `< 768px` | Fixed bottom nav bar | Single column |
| `768–1024px` | Icon-only collapsible | 2-column |
| `> 1024px` | Full labels collapsible | 3-column |

## Deploy

Push to GitHub then import into [Vercel](https://vercel.com). Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` as environment variables in your Vercel project settings.
