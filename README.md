# SAÚ Culinária — Landing Page

> B2B lead-generation landing page for a corporate meal-delivery service in Belo Horizonte, Brazil.  
> Built as a real client project and part of my front-end portfolio.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white&labelColor=20232A)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white&labelColor=1a1a2e)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white&labelColor=1a1a2e)

---

## Overview

SAÚ Culinária delivers home-cooked corporate meals daily. The landing page goal is a single conversion: get a company representative to fill out the contact form and become a lead.

Every technical decision was made with that goal in mind — fast load, clear hierarchy, frictionless form, and two redundant lead-capture channels so no submission is ever lost.

---

## Live Demo

🔗 _Coming soon_

---

## Features

- **Scroll-reveal animations** — custom `useReveal` hook using the `IntersectionObserver` API, with cascade delay via CSS custom properties and full `prefers-reduced-motion` support
- **Responsive nav** — blur-on-scroll effect, accessible hamburger menu (`aria-expanded`, `aria-controls`)
- **Rotating weekly menu** — interactive meal plan with daily tabs
- **Customer reviews** — real testimonials with star ratings
- **Validated contact form** — per-field inline errors, phone input mask `(XX) XXXXX-XXXX` (no external library), email regex, duplicate-submission guard via `localStorage`
- **Dual lead capture** — EmailJS sends an email notification; Google Apps Script writes the lead to a Google Sheet in parallel (fire-and-forget: Sheets failure never blocks the user)
- **Performance** — hero image in AVIF with `fetchPriority="high"`, Google Fonts with `preconnect`, no heavy UI libraries

---

## Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | React 19 | Concurrent features, stable |
| Language | TypeScript 5.9 | Type safety across all components |
| Bundler | Vite 7 | Sub-second HMR, optimized production builds |
| Styling | Vanilla CSS + custom properties | No runtime overhead, full design control |
| Email | EmailJS | Client-side email without a backend |
| Lead DB | Google Sheets via Apps Script | Zero infrastructure, free tier, spreadsheet access for the client |

---

## Architecture Highlights

### Design Token System

All visual decisions live in `src/styles/tokens.css` as CSS custom properties with a two-layer structure: raw primitives (e.g. `--raw-green-600`) that components never touch directly, and semantic tokens (e.g. `--color-brand`, `--color-text-secondary`) that carry intent. Changing the brand color means editing one line.

### Scroll Reveal Hook

```ts
// src/hooks/useReveal.ts
// Observes [data-reveal] elements; adds .is-visible when they enter the viewport.
// Cascade stagger is driven by --reveal-delay CSS custom property set from
// data-reveal-delay attribute — no setTimeout, no JS timers.
export function useReveal() { ... }
```

Respects `prefers-reduced-motion`: elements become immediately visible with no transition.

### Dual Lead Pipeline

```
User submits form
       │
       ├─► EmailJS.send()          ← awaited; blocks success state
       │         │
       │    ✓ success
       │         │
       │         └─► sendToSheets()   ← fire-and-forget (.catch logs warning)
       │
       └─► on error → show error message (Sheets never involved)
```

The email is the source of truth. Sheets is a convenience layer for the client to browse leads without checking email.

### Form Validation (no library)

```ts
function maskPhone(value: string): string {
    const d = value.replace(/\D/g, '').slice(0, 11)
    if (d.length <= 2)  return d.length ? `(${d}` : ''
    if (d.length <= 7)  return `(${d.slice(0, 2)}) ${d.slice(2)}`
    return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}
```

Errors are shown per-field and clear individually as the user corrects each input.

---

## Project Structure

```
src/
├── assets/images/          # WebP/AVIF optimized images
├── components/             # One .tsx + .css pair per section
│   ├── Nav.tsx             # Sticky header, hamburger menu
│   ├── hero.tsx            # Above-the-fold CTA + stats
│   ├── how_it_works.tsx    # 3-step process
│   ├── clients.tsx         # Customer testimonials
│   ├── cardapio.tsx        # Weekly rotating menu + pricing tiers
│   ├── forms.tsx           # Lead capture form (validation + dual submit)
│   └── footer.tsx
├── hooks/
│   └── useReveal.ts        # IntersectionObserver scroll animations
└── styles/
    ├── tokens.css          # Design token system (primitives + semantics)
    └── reveal.css          # [data-reveal] + .is-visible animation classes
```

---

## Getting Started

```bash
# 1. Clone
git clone https://github.com/Guelmcf/Landing-page-sau.git
cd Landing-page-sau

# 2. Install
npm install

# 3. Configure environment variables (see below)
cp .env.example .env

# 4. Run dev server
npm run dev
```

---

## Environment Variables

Create a `.env` file at the project root:

```env
# EmailJS — https://www.emailjs.com
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Google Apps Script Web App URL — leave empty to disable Sheets integration
VITE_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/.../exec
```

### Setting up Google Sheets integration

1. Create a Google Sheet with columns: `Data | Nome | Empresa | Email | Telefone | Refeições`
2. Go to **Extensions → Apps Script** and deploy the following as a Web App (access: *Anyone*):

```js
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Leads');
  const data  = JSON.parse(e.postData.contents);
  sheet.appendRow([data.data, data.nome, data.empresa, data.email, data.numero, data.numeroRefeicoes]);
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Paste the deployment URL into `VITE_GOOGLE_SHEETS_URL`.

---

## Build & Deploy

```bash
npm run build   # outputs to /dist
npm run preview # preview production build locally
```

The `/dist` folder is a static site — deploy to Vercel, Netlify, or any static host.

---

## Author

**Miguel Chaves** — [github.com/Guelmcf](https://github.com/Guelmcf)
