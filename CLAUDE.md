# All Skating Rinks — CLAUDE.md

> Source of truth for Claude Code on this project. Last updated: 2026-04-30

## Project Identity

- **Site**: All Skating Rinks
- **Domain**: allskatingrinks.com
- **Purpose**: Location finder for ice and roller skating rinks across the United States
- **Type**: utility-site (ad-supported location directory)
- **Compliance Tier**: Standard

## Tech Stack

- **Framework**: Next.js
- **Deployment**: Vercel
- **Language**: TypeScript (preferred) / JavaScript
- **Styling**: Tailwind CSS (preferred) / CSS Modules
- **Package Manager**: npm

## 1. AdSense & Monetization

- **Publisher ID**: `ca-pub-7171402107622932`
- **ads.txt** at `public/ads.txt`: `google.com, pub-7171402107622932, DIRECT, f08c47fec0942fa0`
- Ads must never exceed content volume on any page
- Reserve explicit width/height on ad containers (prevents CLS)
- Google Consent Mode v2: configure all 6 parameters

## 2. SEO — Google Search Essentials

- Use SSR or SSG for all public pages
- Each rink page: address, hours, rink type (ice/roller/inline), admission prices if available, rental availability
- Seasonal content: ice rinks often have limited seasons — reflect current open/closed status

## 3. Core Web Vitals

- **LCP** ≤ 2.5 seconds | **INP** ≤ 200 ms | **CLS** ≤ 0.1
- Use `next/image` with width/height props
- Reserve ad container dimensions

## 4. E-E-A-T Content Standards

- Attribution: "Built by an experienced web developer" — NEVER use personal name
- About page with mission and data sourcing methodology
- Contact page accessible from all pages

## 5. Structured Data (JSON-LD)

Required: Organization, WebSite, LocalBusiness (per rink), BreadcrumbList
- LocalBusiness schema must include rink type in description
- openingHours and seasonallyOpen fields where data is available

## 6. Mobile-First Requirements

- Primary use case is mobile ("rinks near me" searches)
- Touch targets: 48px minimum
- Distance/directions CTA prominent on mobile layout

## 7. Bing-Specific Optimization

- `<meta name="keywords">` on all pages
- SSR/SSG mandatory
- IndexNow on deploy

## 8. GEO / AI Discoverability

- `/llms.txt` at root
- Allow AI search crawlers in robots.txt; Block Bytespider, Meta-ExternalAgent
- Content: lead with city, rink type, and key features

## 9. Privacy & Consent

- `/privacy` and `/terms` required
- Honor GPC signals
- CCPA compliance

## 10. Accessibility (WCAG 2.1 AA)

- Alt text on all images
- Keyboard-accessible map interactions
- Skip navigation links

## 11. Security Headers

```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), interest-cohort=()
```

## 12. Sitemaps & Metadata

- Sitemap via `app/sitemap.ts` with all rink pages
- Submit to Google Search Console and Bing Webmaster Tools

## Cross-Site Links

Footer: All sister sites (see allskateparks.com CLAUDE.md for full list, excluding self)

## Deployment

- **Platform**: Vercel | **Branch**: main | **Build**: `npm run build`
- **Env vars**: NEXT_PUBLIC_GOOGLE_MAPS_API_KEY (if applicable), INDEXNOW_API_KEY

## Warnings

1. Never expose site owner's personal name
2. Never modify ads.txt without explicit instruction
3. Never remove legal pages
4. Never hardcode API keys
5. Never push to main without testing build
6. Never remove sister site cross-links or security headers
