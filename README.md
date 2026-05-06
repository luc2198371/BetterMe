# BetterMe

BetterMe is a private Personal Life OS dashboard built with Next.js App Router. It is designed as a calm, editor-like space for tracking daily discipline, reflecting on the past, and shaping a better future self.

The app currently uses mock data only. There is no backend, authentication, or database layer yet.

## Features

- Dashboard overview for life score, mood, energy, habits, gym streaks, goals, and recent reflections.
- Daily tracking for mood, sleep, stress, focus, tasks, habits, water, workouts, gratitude, and lessons.
- Personal systems for habits, goals, journal entries, life timeline, weekly review, and gym training.
- Phase 2 areas for health, learning, finance, relationships, travel memories, future self, and year-in-review.

## Project Structure

- `app/` contains App Router pages, including the main dashboard and feature routes.
- `components/` contains the shared shell and UI primitives.
- `data/mock/` contains mock data for the current MVP and Phase 2 pages.
- `lib/` contains small shared utilities.
- `design.md`, `AGENTS.md`, and `AGENTS_Nextjs.md` define project, design, and Next.js working rules.

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server with Webpack:

```bash
npx next dev --webpack
```

Run ESLint:

```bash
npm run lint
```

Build with Webpack:

```bash
npx next build --webpack
```

The explicit Webpack commands are preferred in this Android/arm64 environment.

## Design Direction

Follow `design.md` exactly. The interface should stay dark, flat, dense, calm, personal, and editor-like.

Use only the existing palette:

- `#161614` for the page background.
- `#1D1D1B` for surfaces.
- `#E5E4DF` for primary text.
- `#7B7A74` for borders and muted text.
- `#5FB5D6` as the single interaction accent.

Use JetBrains Mono for headings, labels, stats, and controls. Use Inter for body copy. Do not add gradients, decorative visuals, extra accent colors, or unrelated UI libraries.
