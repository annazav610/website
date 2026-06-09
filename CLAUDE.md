# CoachConnect — Anna Zavalashina

Personal coaching website for Anna Zavalashina, offering Soft Skills Coaching and English Coaching.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4 (no config file — uses `@import "tailwindcss"` in globals.css)
- **Icons:** lucide-react
- **Language:** TypeScript

## Project Structure

```
src/
  app/
    page.tsx          # Homepage (Hero, Services, About, Pricing, Testimonials, CTA)
    about/page.tsx    # About Anna page
    services/page.tsx # Services & pricing packages
    book/page.tsx     # Booking page (contact form)
    layout.tsx        # Root layout with Navbar + Footer
    globals.css       # Global styles + Tailwind import
  components/
    Navbar.tsx        # Sticky navbar, transparent → white on scroll, mobile menu
    Footer.tsx        # Footer with nav links + contact info
  lib/
    content.ts        # ⭐ ALL editable content lives here (copy, prices, packages, FAQs)
public/
  anna.png            # Anna's profile photo (used in Hero + About)
```

## Content Management

**All text, prices, and copy is in `src/lib/content.ts`** — edit there, never hardcode in components.

Key exports:
- `COACH` — name, bio, email, LinkedIn, certifications
- `SERVICES` — the two service cards (Soft Skills + English)
- `PACKAGES` — pricing tiers (Trial, Single, Journey, Intensive)
- `TESTIMONIALS` — client reviews
- `FAQ` — frequently asked questions

## Brand Colors

| Name | Hex |
|---|---|
| Navy (primary) | `#1a2e4a` |
| Navy light | `#243d5e` |
| Green (accent) | `#2e9e6b` |
| Green hover | `#38b27a` |
| Amber (stars) | `#f59e0b` |
| Off-white (bg) | `#f8f9fa` |

## Pages

| Route | Description |
|---|---|
| `/` | Homepage |
| `/about` | Anna's bio, approach, values |
| `/services` | All packages + FAQ |
| `/book` | Contact form (Calendly embed planned) |

## Pending / Planned

- [ ] Calendly embed on `/book` page — waiting for Anna's Calendly URL
- [ ] Connect contact form to email (Formspree or Next.js API route + Resend)
- [ ] Replace placeholder testimonials with real client reviews
- [ ] Add real bio text from Anna

## Dev

```bash
npm run dev     # localhost:3000
npx tsc --noEmit  # type check
```

## Notes

- Anna's photo is `anna.png` in `/public` (may change to `.jpg` later)
- No database — fully static/content-driven for now
- Tailwind v4: no `tailwind.config.ts`, classes work directly
