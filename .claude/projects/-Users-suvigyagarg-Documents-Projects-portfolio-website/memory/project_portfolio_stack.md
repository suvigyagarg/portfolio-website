---
name: project-portfolio-stack
description: Tech stack and architecture of the portfolio website implementation
metadata:
  type: project
---

Next.js 14 (App Router), CSS Modules (no Tailwind), Resend for contact form.

**Why:** User handed off a vanilla HTML/CSS/JS prototype (cosmic-scale-animation design) to rebuild in Next.js with module CSS and small reusable components.

**How to apply:** All new components go under `components/`, each with its own `.module.css`. Global tokens (CSS variables, keyframes, reset, `.wrap`, `.eyebrow`, `[data-reveal]`) live in `app/globals.css`. Content data lives in `data/portfolio.ts`. Contact form POSTs to `/api/contact` which uses Resend — env vars: `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` (see `.env.local.example`).

Key components:
- `PortfolioApp` — root client component, holds `loaded` state
- `CosmosCanvas` — full canvas animation (ported from celestial.js), gets `loaded` prop to restart intro
- `Loader` — adds `body.loaded` class after 950ms, triggers `onLoaded` callback
- `RevealObserver` — global IntersectionObserver for `[data-reveal]` → `.visible` class
- `DemoPlate` — reusable video plate with click-to-play, default src `/videos/demo.mov`
- `SectionHead` — `num`, `title`, `meta` props; used in every section

Video placeholder: `public/videos/demo.mov` (50MB screen recording). Replace per-project when real demos are ready.
