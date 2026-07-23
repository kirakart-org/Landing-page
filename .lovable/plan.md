
# Kirakart Landing Page — Build Plan

A single-route marketing landing page at `/` (replacing the placeholder in `src/routes/index.tsx`), built as 12 composable sections with typed mock data, coral accent, and a premium Apple/Airbnb/Maps/Blinkit aesthetic blend.

## Stack decisions (locked from answers)
- TanStack Start + React + Vite + Tailwind v4 + shadcn/ui (already installed)
- Framer Motion (`motion` package) for staggered blur/fade/slide entrances
- lucide-react for all icons (already installed)
- Primary accent: coral `#FF5A36`; social accent: soft violet `#7C6BFF`
- Mobile-first breakpoints; single long-scroll page (no sub-routes needed)

## Design system additions (`src/styles.css`)
- Add tokens: `--brand` (coral), `--brand-foreground`, `--social` (violet), `--surface-elevated`, `--shadow-card`, `--radius` bumped to `1rem` (16px)
- Register in `@theme inline` so `bg-brand`, `text-brand`, `bg-social` work
- Load display + body fonts via `<link>` in `__root.tsx` head (NOT `@import` — Tailwind v4 rule). Fonts: **Instrument Serif** or **Fraunces** for display + **Inter** for body (final pick during build)
- Dark mode tuned separately (not pure inversion) — off-black `oklch(0.15 0.02 260)` base, elevated cards slightly lighter
- Reusable card shadow: soft, layered, lifts on hover with `translateY(-2px)`

## File structure
```text
src/routes/index.tsx                    → assembles sections, page head() SEO
src/routes/__root.tsx                   → add font <link> tags
src/styles.css                          → new tokens
src/components/kirakart/
  Header.tsx                            → sticky, scroll-shrinks to glass pill
  Hero.tsx                              → eyebrow, headline, CTAs, phone mock, trust chips
  PhoneMock.tsx                         → reusable feed-post phone frame (Hero + Solution)
  Problem.tsx                           → 3 pain cards + closing line
  Solution.tsx                          → split: shop channel card + purchasable feed post
  HowItWorks.tsx                        → 3 numbered steps, dashed route connector
  AudienceTabs.tsx                      → shadcn Tabs: Shoppers / Shop Owners
  FeatureGrid.tsx                       → 6 feature cards
  Comparison.tsx                        → 3-col table, check/cross rows
  DashboardPreview.tsx                  → mock sidebar + line chart + orders list
  SocialProof.tsx                       → stat chip strip
  FinalCTA.tsx                          → coral gradient band, dual CTAs
  Footer.tsx                            → 4 columns + bottom bar
  Section.tsx                           → shared wrapper (label + headline + animated group)
  AnimatedGroup.tsx                     → Framer Motion staggered blur/slide/fade
  data.ts                               → typed mock arrays (features, steps, comparison rows, etc.)
  types.ts                              → Feature, Step, ComparisonRow, ShopStat interfaces
```

## Content (verbatim from brief)
All copy, section labels, headlines, bullet lists, comparison rows, feature descriptions, and footer text come directly from the brief — no lorem, no rewording. Mock traction numbers: 500+ shops, 12 neighborhoods, 40k+ interactions, launched in Chennai & Bengaluru.

## Imagery
- Hero + Solution phone mocks: **built in code** (styled divs framed as an iPhone) showing a real Kirakart-style feed post — photo + shop avatar + like/comment/follow row + "2.3km away" chip + price + Buy button. Uses one generated product image (Indian local shop / market product) via `imagegen` saved to `src/assets/`.
- Dashboard preview: pure code (SVG line chart + order rows) — no external image
- No generic SaaS stock photos anywhere

## Animation approach
- `AnimatedGroup` wraps section children; on scroll-into-view triggers staggered `opacity + translateY + blur` entrance (150ms stagger, 600ms duration, cubic ease)
- Card hover: `translate-y-[-2px]` + shadow bump via Tailwind `transition-all`
- Header scroll behavior: `useEffect` scroll listener → adds `backdrop-blur-xl bg-background/70` + shrinks padding + rounds to pill past 50px

## SEO
`src/routes/index.tsx` `head()` gets Kirakart-specific title, description, og:title/description, og:type=website, twitter:card. (og:image omitted per rules unless we generate a hero social card — can add later.)

## Non-goals for this pass
- No backend, auth, or waitlist submission — CTAs are visual only
- No sub-routes for /pricing, /how-it-works, etc. — nav links scroll to sections on this page (single landing page, brief explicitly frames it as one page)
- No dark mode toggle UI (tokens are ready; can add later)

## Verification
After build: read the built page via Playwright at 375px and 1280px viewports, screenshot Hero + Solution + Dashboard sections, confirm coral CTA consistency, feed-post phone mock legibility on mobile, and no console errors.
