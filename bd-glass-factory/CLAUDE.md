@AGENTS.md

# BDGLASS Website Project — Project Memory

Foshan Bodian Glass Co., LTD (BDGLASS) — China glass factory foreign trade website.

- **Domain**: https://bdglassfactory.com
- **Stack**: Next.js 16.2 + TypeScript 5 + Tailwind CSS v4 (CSS-first, no tailwind.config.ts)
- **Package manager**: npm
- **Build**: `npm run build` → `output: "standalone"`
- **Deploy**: Linux server + Nginx + PM2 (NOT Vercel)

---

## Project Status — V1.5.0 (2026-06-01)

| Phase | Status | Details |
|-------|--------|---------|
| 1. Logo Design | ✅ | Custom SVG/PNG/favicon set (deep blue + champagne gold) |
| 2. Homepage SEO | ✅ | 12 sections optimized with keyword-rich copy, CTAs |
| 3. Product Detail SEO | ✅ | 4 products: Tempered, Insulating, Laminated, Craft Glass |
| 4. About / Services / Contact SEO | ✅ | Extended copy, FAQ, CTA, workflow sections |
| 5. Typography & Brand Colors | ✅ | Hubs.com-inspired scale, CSS custom properties |
| 6. Mobile Optimization | ✅ | Full mobile design spec, responsive across all components |
| 7. Deployment | ✅ | Production live on bdglassfactory.com via Nginx + PM2 |
| 8. Image Integration | 🔄 IN PROGRESS | 8/9 stock photos downloaded, 1 needs replacement, components still use placeholder `<div>` |

---

## Deployment Architecture

```
User → Nginx (443 SSL) → [::1]:3000 → Next.js Standalone (PM2)
```

**Critical**: Nginx `proxy_pass` MUST use `http://[::1]:3000` (IPv6 localhost).
- Do NOT use `http://localhost:3000` — it randomly resolves to IPv4 (0.0.0.0:3000) where cc-switch-web runs and returns 401
- Do NOT use `http://0.0.0.0:3000` — cc-switch-web occupies this port
- Next.js standalone listens ONLY on `[::1]:3000`

**Static files**: Nginx has NO static file locations. All requests proxy to Next.js.
- `public/` and `.next/static/` are copied to `.next/standalone/` during build by `deploy.sh`
- Next.js serves all static assets directly
- Reason: Nginx `www-data` cannot read `/root/BD-Glass-Factory/` paths

**PM2 config**: `ecosystem.config.js` in `bd-glass-factory/`

**SSL**: Let's Encrypt certificates, auto-renewal via certbot

---

## Active TODOs (Next Session)

### 🔴 High Priority — Image Integration

1. **Replace tempered-glass.jpg** — User will find image themselves. Save to `public/images/home/categories/tempered-glass.jpg`
2. **Replace placeholder `<div>` with `<Image>` in components**:
   - `src/components/home/ProductCategories.tsx` — 7 placeholder `<div className="bg-brand-gray ...">` (lines 142-151)
   - `src/components/home/ProjectExperience.tsx` — 1 placeholder `<div className="bg-brand-gray aspect-[21/9] ...">` (lines 71-78)
   - `src/components/home/QualityMaterials.tsx` — 1 placeholder `<div className="bg-brand-gray aspect-[4/3] ...">` (lines 45-51)
3. **Update image paths** in components to point to downloaded photos
4. **Rebuild and redeploy** after image changes

### 🟡 Medium Priority

5. **`/certifications` page SEO** — currently basic, needs keyword-rich copy
6. **`/projects/[slug]` detail pages** — need individual project SEO content
7. **Blog / content strategy** — for ongoing SEO
8. **Google Analytics 4 integration** — measurement ID via env var
9. **reCAPTCHA v3** — contact form spam protection
10. **Form email notification** — currently API route only receives data, no email sent

---

## Image Status

### Downloaded Images (`public/images/home/`)

| Path | Status | Source |
|------|--------|--------|
| `categories/tempered-glass.jpg` | ❌ NEEDS REPLACEMENT | User will find |
| `categories/laminated-glass.jpg` | ✅ OK | Unsplash stock |
| `categories/insulated-glass.jpg` | ✅ OK | Unsplash stock |
| `categories/curtain-wall-glass.jpg` | ✅ OK | Unsplash stock |
| `categories/glass-railings.jpg` | ✅ OK | Unsplash stock |
| `categories/glass-partitions.jpg` | ✅ OK | Unsplash stock |
| `categories/shower-room-glass.jpg` | ✅ OK | Unsplash stock |
| `materials/quality-inspection.jpg` | ✅ OK | Unsplash stock |
| `projects/project-showcase.jpg` | ✅ OK | Unsplash stock |

### Existing Product Images (`public/images/products/`)

| File | Status |
|------|--------|
| `tempered-glass.jpg` | ✅ Real photo |
| `laminated-glass.jpg` | ✅ Real photo |
| `insulating-glass.jpg` | ✅ Real photo |
| `craft-glass.jpg` | ✅ Real photo |

### Other Image Directories

- `public/images/about/` — 20 factory/team photos ✅
- `public/images/certifications/` — 8 certification photos ✅
- `public/images/equipment/` — 17 equipment photos ✅
- `public/images/factory/` — 30+ factory photos ✅
- `public/images/projects/` — 6 project photos ✅
- `public/images/services/` — 13 service photos ✅
- `public/images/team/` — 2 team photos ✅
- `public/images/home/hero-bg.jpg` — Hero banner ✅
- `public/images/home/about-preview.jpg` — About preview ✅

---

## Technical Details

### `next.config.ts`

```typescript
const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 1024, 1280, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async headers() { /* security headers */ },
};
```

### Tailwind v4 (CSS-first)

- NO `tailwind.config.ts` — all config in `src/app/globals.css` via `@theme` block
- Design tokens: brand colors, font sizes, spacing
- Custom classes: `.btn-primary`, `.btn-outline`, `.btn-link`, `.card`, `.card-dark`, `.section`, `.container-page`

### Component Architecture

```
src/
├── app/
│   ├── page.tsx              # Homepage (12 sections)
│   ├── layout.tsx            # Root layout with Metadata, viewport
│   ├── globals.css           # Tailwind v4 theme + custom styles
│   ├── about/page.tsx
│   ├── products/page.tsx
│   ├── products/[slug]/page.tsx
│   ├── services/page.tsx
│   ├── projects/page.tsx
│   ├── projects/[slug]/page.tsx
│   ├── certifications/page.tsx
│   ├── contact/page.tsx
│   ├── api/contact/route.ts  # POST inquiry handler
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── home/                 # 12 homepage sections
│   │   ├── HeroBanner.tsx
│   │   ├── AboutPreview.tsx
│   │   ├── FactoryStrength.tsx
│   │   ├── ProductCategories.tsx    ← placeholder images
│   │   ├── ProductRange.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── ApplicationScenarios.tsx
│   │   ├── QualityMaterials.tsx     ← placeholder image
│   │   ├── HowWeWork.tsx
│   │   ├── CertificationsPreview.tsx
│   │   ├── ProjectExperience.tsx    ← placeholder image
│   │   ├── ContactSection.tsx
│   │   └── CTASection.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileNav.tsx
│   ├── shared/
│   │   ├── SectionTitle.tsx
│   │   ├── Breadcrumb.tsx
│   │   └── WhatsAppButton.tsx
│   └── contact/
│       └── InquiryForm.tsx
├── data/
│   ├── site-config.ts
│   ├── products.ts
│   ├── projects.ts
│   ├── services.ts
│   └── certifications.ts
└── lib/
    ├── metadata.ts           # generateMetadata helpers
    └── json-ld.tsx           # Schema.org structured data
```

### `use client` Components (ONLY these are client-side)

- `Header.tsx` — scroll state, mobile menu toggle
- `MobileNav.tsx` — open/close animation
- `WhatsAppButton.tsx` — hover state
- `InquiryForm.tsx` — form state, validation, submission

All other components are Server Components.

### Mobile Design Spec

Documented in `docs/design-spec.md`:
- Touch targets ≥ 48px
- iOS input font-size ≥ 16px (prevents zoom)
- Safe area insets for iPhone notch / home indicator
- Section padding 64px on mobile
- Sticky header height 64px on mobile (72px desktop)
- Mobile nav full-screen drawer from right
- WhatsApp button with safe-area-inset-bottom

---

## Known Issues & Solutions

| Issue | Status | Solution |
|-------|--------|----------|
| cc-switch on port 3000 | ✅ Fixed | Nginx proxy_pass to `[::1]:3000` |
| Static files 403 | ✅ Fixed | Remove Nginx static locations, let Next.js serve all |
| Missing public/ in standalone | ✅ Fixed | `deploy.sh` copies `public/` and `.next/static/` |
| Placeholder images | 🔄 In Progress | 8 downloaded, 1 pending, components need `<Image>` |
| Pollinations.ai API 402 | ⚠️ Known | Free AI image generation no longer works |

---

## Content Documents

User-editable copy in `docs/content/*.md`:
- `homepage.md` — Homepage all 12 sections copy
- `about.md` — About page content
- `products.md` — Product descriptions
- `services.md` — Service descriptions
- `projects.md` — Project case studies
- `certifications.md` — Certification descriptions
- `contact.md` — Contact page copy

---

## Deploy Script

Run `bash bd-glass-factory/deploy.sh` for full deployment:
1. `npm run build`
2. Copy `public/` → `.next/standalone/`
3. Copy `.next/static/` → `.next/standalone/.next/static/`
4. `pm2 reload bd-glass-factory`
5. `nginx -t && systemctl reload nginx`

---

## Contact & Business Info

- **Company**: Foshan Bodian Glass Co., LTD (BDGLASS)
- **Phone**: +86 13723810568
- **WhatsApp**: same number, link `https://wa.me/8613723810568`
- **Founded**: 2018
- **Production Area**: 15,000 ㎡
- **Employees**: 80+
- **Export Markets**: Australia, Africa, Middle East, Cambodia, Vietnam

---

> Last updated: 2026-06-01
> Next session focus: Image replacement in components + tempered-glass.jpg
