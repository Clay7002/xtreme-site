# Xtreme Site Agent Workflow

Use this workflow for review-first updates.

## Branches

- `main` is the live production branch.
- Create a new branch for every change, such as `agent/gallery-polish` or `agent/header-updates`.
- Do not push unreviewed work directly to `main`.

## Local Checks

Run these before handing work back for review:

```bash
npm run lint
npm run build:vercel
```

The old ChatGPT Sites build is still available if needed:

```bash
npm run build:sites
```

## Vercel Preview Flow

1. Push the agent branch to GitHub.
2. Let Vercel create a preview deployment for that branch.
3. Share the Vercel preview URL for review.
4. Only merge to `main` after the preview is approved.

## Vercel Project Settings

- Framework preset: Next.js
- Install command: `npm install`
- Build command: `npm run build:vercel`
- Development command: `npm run dev:vercel`
- Environment variables: none required for the current static marketing site

## Notes

- Do not use Wrangler or a Cloudflare token for the Vercel workflow.
- Keep the image assets in `public/`.
- The current site is static content with no live form submission backend yet.
