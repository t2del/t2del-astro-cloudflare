# t2del.com built with Astro on Cloudflare

A Cloudflare-ready Astro site structured for static deployment with Cloudflare Workers.

This repository contains an Astro project that can be run locally, built for production, and deployed to Cloudflare.

## Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support
- ✅ Built-in Observability logging
- ✅ Wordpress fetch API both static and dynamically


## Getting Started

Install dependencies and start the local development server:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

If the project is configured for Cloudflare deployment, use:

```bash
npm run build && npm run deploy
```

## Project Structure

- `src/pages/`: Astro page files and routes
- `src/components/`: Reusable UI components
- `public/`: Static assets served as-is
- `astro.config.mjs`: Astro configuration
- `package.json`: Project scripts and dependencies

## Notes

- Use `src/pages/` for route-driven pages.
- Put shared components in `src/components/`.
- Place images and other static files in `public/`.

## Commands

| Command                   | Action                                          |
| :------------------------ | :---------------------------------------------- |
| `npm install`             | Install dependencies                            |
| `npm run dev`             | Start local development server                  |
| `npm run build`           | Build the production site                       |
| `npm run preview`         | Preview the production build locally            |
| `npm run build && npm run deploy` | Build and deploy to Cloudflare if configured |

## Learn More

- Astro docs: https://docs.astro.build
- Cloudflare Workers docs: https://developers.cloudflare.com/workers/

