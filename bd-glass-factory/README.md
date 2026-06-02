# BDGLASS Website

Foshan Bodian Glass Co., LTD (BDGLASS) — China glass factory foreign trade website.

**Stack**: Next.js 16.2 + TypeScript 5 + Tailwind CSS v4 (CSS-first, no tailwind.config.ts)
**Package manager**: npm
**Build**: `npm run dev` (Turbopack)

---

## Getting Started

```bash
# Install dependencies
npm install

# Development server (Turbopack)
npm run dev
# → http://localhost:3000

# Production build
npm run build

# Start production server
npm run start
```

---

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | reCAPTCHA v3 site key |
| `RECAPTCHA_SECRET_KEY` | reCAPTCHA v3 secret key |
| `SMTP_HOST` | SMTP host for contact form emails |
| `SMTP_PORT` | SMTP port (default 587) |
| `SMTP_USER` | SMTP username |
| `SMTP_PASS` | SMTP password |
| `CONTACT_EMAIL` | Target email for inquiries |

---

## Project Structure

```
src/
├── app/                          # App Router pages + layouts
│   ├── layout.tsx                # Root layout (fonts, JSON-LD, GA, Header/Footer)
│   ├── page.tsx                  # Homepage (AIDA model, 12 sections)
│   ├── globals.css               # Design system (@theme tokens + @layer components)
│   ├── about/page.tsx            # Company introduction
│   ├── products/
│   │   ├── page.tsx              # Product listing (4 categories)
│   │   └── [slug]/page.tsx       # Product detail (dynamic metadata)
│   ├── services/page.tsx         # 6 service offerings
│   ├── projects/
│   │   ├── page.tsx              # Project showcase (6 cases)
│   │   └── [slug]/page.tsx       # Project detail
│   ├── certifications/page.tsx   # Certifications & memberships
│   ├── contact/page.tsx          # Contact form + company info
│   ├── api/contact/route.ts      # POST inquiry handler
│   ├── sitemap.ts                # Dynamic sitemap.xml generation
│   ├── robots.ts                 # robots.txt
│   └── not-found.tsx             # Custom 404 page
├── components/
│   ├── home/                     # 12 homepage section components
│   │   ├── HeroBanner.tsx
│   │   ├── ProductRange.tsx
│   │   ├── FactoryStrength.tsx
│   │   ├── QualityMaterials.tsx
│   │   ├── ProductCategories.tsx
│   │   ├── ApplicationScenarios.tsx
│   │   ├── ProjectExperience.tsx
│   │   ├── CertificationsPreview.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── ClientVisits.tsx          # Overseas client factory visit gallery
│   │   ├── HowWeWork.tsx
│   │   ├── CTASection.tsx
│   │   └── ContactSection.tsx
│   ├── layout/
│   │   ├── Header.tsx            # Sticky navigation + mobile toggle
│   │   ├── Footer.tsx            # 4-column footer
│   │   └── MobileNav.tsx         # Slide-in mobile menu drawer
│   ├── shared/
│   │   ├── SectionTitle.tsx      # Reusable section heading
│   │   ├── Breadcrumb.tsx        # Breadcrumb navigation
│   │   └── WhatsAppButton.tsx    # Floating WhatsApp CTA
│   └── contact/
│       └── InquiryForm.tsx       # Client-side inquiry form
├── data/                          # Static TypeScript data files
│   ├── site-config.ts            # Company info, nav, export info
│   ├── products.ts               # 4 products with full SEO data (specs, FAQ, related)
│   ├── projects.ts               # 6 project cases with glass config
│   ├── services.ts               # 6 service descriptions with expanded details
│   ├── certifications.ts         # 8 certifications & memberships
│   └── seo-draft-*.md            # SEO copy drafts (about, contact, craft-glass, services)
└── lib/
    ├── metadata.ts               # SEO metadata generation helper
    └── json-ld.tsx               # Schema.org structured data components
```

---

## Key Conventions

- **All content in English** — foreign trade website targeting international buyers
- **`use client` only for interactive components**: Header, MobileNav, WhatsAppButton, InquiryForm
- **Design tokens** in `src/app/globals.css` via Tailwind v4 `@theme` block
- **Placeholder images** marked with "Replace with XXX photo (dimensions WebP)"
- **Content docs** in `docs/content/*.md` for non-developer editing

---

## SEO Features

### V2.0.0 SEO Optimization (Completed)

- **Homepage**: AIDA-structured copy with keyword-optimized H1/H2, CTAs, and benefit-driven content across all 13 sections (including new ClientVisits gallery)
- **Product Detail Pages** (4 pages): Per-slug dynamic metadata (title, description, H1, subtitle, CTA), extended long descriptions (~700-1200 words), 13-row spec tables, 6-7 FAQ items, related product recommendations
  - `/products/tempered-glass` — Tempered Glass Manufacturer China
  - `/products/insulating-glass` — Insulating Glass Manufacturer China
  - `/products/laminated-glass` — Laminated Glass Manufacturer China
  - `/products/craft-glass` — Craft Glass Manufacturer China
- **About Page**: ~800-word company introduction, 6 core stats, 8 equipment items with specs, 6 FAQ items, bottom CTA section
- **Services Page**: ~400-word processing capability introduction, 6 expanded service cards, 5-step workflow, 6 FAQ items, bottom CTA section
- **Contact Page**: Inquiry guide with 6 information checklists, 6 contact info items (incl. factory visit & languages), WhatsApp CTA card, 6 FAQ items
- **Typography System**: Hubs.com-inspired B2B scale — tightened heading sizes, 1.7 line-height for body text, `--text-display` and `--text-subhead` tokens

### Technical SEO

- Dynamic `sitemap.xml` generation (static + dynamic routes)
- `robots.txt` with proper crawl rules
- JSON-LD structured data: Organization, Product, BreadcrumbList, WebSite
- Per-page metadata with Open Graph and Twitter Cards
- Canonical URLs, `siteName`, and `locale` on all pages
- Image optimization: WebP/AVIF formats, responsive sizes
- Font optimization: `display: swap`, subset loading
- Semantic HTML with `aria-label` and keyboard accessibility

---

## Security

- HTTPS enforcement via Next.js headers
- X-Content-Type-Options, X-Frame-Options, XSS Protection headers
- Referrer-Policy: strict-origin-when-cross-origin
- reCAPTCHA v3 integration (configurable via env vars)
- Server-side form validation
- Environment variables for all secrets

---

## Design System

See `src/app/globals.css` for the complete design system:

- **Colors**: 14 design tokens (brand-dark, brand-blue, brand-green, etc.)
- **Typography**: Hubs.com-inspired B2B scale — H1 3rem/1.15, H2 2.25rem/1.25, H3 1.5rem/1.35, H4 1.25rem/1.4, body 1rem/1.7. Inter + JetBrains Mono fonts
- **Components**: `.btn-primary`, `.btn-outline`, `.btn-link`, `.card`, `.card-dark`, `.input-field`, `.textarea-field`, `.section`, `.container-page`
- **Motion**: `prefers-reduced-motion` support

---

## Browser Support

| Chrome | Firefox | Safari | Edge |
|--------|---------|--------|------|
| 90+ | 90+ | 15+ | 90+ |

---

> Version: V2.0.0 | Domain: bdglassfactory.com | Updated: 2026-06-02
