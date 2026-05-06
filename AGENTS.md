# Repository Guidelines

## Project Structure

This is a Next.js App Router project for a private Personal Life OS dashboard. Route pages live in `app/`, with the main dashboard at `app/page.tsx` and feature pages such as `app/today/page.tsx`, `app/habits/page.tsx`, and `app/weekly-review/page.tsx`. Shared layout and UI primitives live in `components/`, mock product data lives in `data/mock/`, and small utilities live in `lib/`.

Read `AGENTS_Nextjs.md` before editing Next.js code. This project uses Next 16, and local docs in `node_modules/next/dist/docs/` are the source of truth for changed APIs and conventions.

## Commands

- `npm run lint` runs ESLint.
- `npx next build --webpack` builds successfully on Android/arm64; avoid the default Turbopack build path here.
- `npx next dev --webpack` starts local development on this platform.
- `npm run build` is the package script, but prefer the explicit Webpack command in this environment.

## Design And UI Rules

Follow `design.md` exactly. Use the existing palette only: `#161614` background, `#1D1D1B` surfaces, `#E5E4DF` primary text, `#7B7A74` borders and muted text, and `#5FB5D6` as the single interaction accent. Keep pages flat, dense, calm, and editor-like. Use JetBrains Mono for headings, labels, stats, and controls; use Inter for body copy. Do not add gradients, decorative visuals, extra accent colors, or unrelated UI libraries.

## Coding Conventions

Prefer existing shared components from `components/ui.tsx` and shell patterns from `components/shell.tsx`. Use mock data from `data/mock/life-os.ts` for MVP pages unless a task explicitly asks for persistence. Client Components should start with `"use client"` only when local state, browser events, or hooks require it.

## Testing Guidance

For UI changes, run `npm run lint` and `npx next build --webpack`. When practical, smoke-test the affected route with the Webpack dev server and verify the page renders without layout breakage on narrow and desktop widths.

## Git Guidance

Use concise imperative commit messages, for example `Build habits dashboard`. Keep commits focused on the requested feature or documentation change. Do not revert unrelated user changes in the working tree.
