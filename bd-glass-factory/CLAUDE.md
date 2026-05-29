@AGENTS.md

# BDGLASS Website Project

Foshan Bodian Glass Co., LTD (BDGLASS) — China glass factory foreign trade website.

- **Domain**: bdglassfactory.com
- **Stack**: Next.js 16.2 + TypeScript 5 + Tailwind CSS v4 (CSS-first, no tailwind.config.ts)
- **Package manager**: npm
- **Build**: `npm run dev` (Turbopack)

## Project Status

**V1.4.0 — Complete SEO optimization across all core pages**

| Phase | Status | Details |
|-------|--------|---------|
| 1. Logo Design | ✅ | Custom SVG/PNG/favicon set (deep blue + champagne gold) |
| 2. Homepage SEO | ✅ | 12 sections optimized with keyword-rich copy, CTAs |
| 3. Product Detail SEO | ✅ | 4 products: Tempered, Insulating, Laminated, Craft Glass |
| 4. About / Services / Contact SEO | ✅ | Extended copy, FAQ, CTA, workflow sections |
| 5. Typography & Brand Colors | ✅ | Hubs.com-inspired scale, CSS custom properties |
| 6. Deployment | ✅ | Production on port 80, GitHub synced |

**Next**: `/certifications` page SEO, `/projects/[slug]` detail pages, or `/blog` content strategy.

## Key Conventions

- All content in English, communication with user in Chinese
- `use client` only for interactive components (Header, MobileNav, WhatsAppButton, InquiryForm)
- Design tokens in `src/app/globals.css` via `@theme` block
- Placeholder images marked with "Replace with XXX photo (dimensions WebP)"
- Content docs in `docs/content/*.md` for user editing

## Project Structure

```
src/
├── app/           # App Router pages + layouts
│   ├── api/contact/route.ts  # POST inquiry handler
│   ├── robots.ts / sitemap.ts
│   └── */page.tsx
├── components/
│   ├── home/      # 12 homepage section components
│   ├── layout/    # Header, Footer, MobileNav
│   ├── shared/    # SectionTitle, Breadcrumb, WhatsAppButton
│   └── contact/   # InquiryForm
├── data/          # Static data files (site-config, products, projects, services, certifications)
└── lib/           # metadata.ts, json-ld.tsx
```
