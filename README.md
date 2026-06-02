# BDGLASS — Foshan Bodian Glass Co., LTD

**Professional China Glass Factory | Foreign Trade Website**

[![Version](https://img.shields.io/badge/version-V2.0.0-blue)](https://github.com/wudake/BD-Glass-Factory/releases/tag/V2.0.0)
[![Stack](https://img.shields.io/badge/stack-Next.js%2016.2%20%2B%20TypeScript%20%2B%20Tailwind%20CSS%20v4-black)](https://nextjs.org)

---

## About BDGLASS

Foshan Bodian Glass Co., LTD (BDGLASS) is a professional glass manufacturer established in 2018, located in Shishan Town, Nanhai District, Foshan City, Guangdong Province — the heart of China's glass manufacturing industry.

- **15,000 ㎡** production base with 2 facilities
- **80+** team members (average age 29)
- **3C certified** (China Compulsory Certification)
- Exporting to **Australia, Africa, Middle East, Southeast Asia**

### Core Products

| Product | Key Specs |
|---------|-----------|
| **Tempered Glass** | 3-19mm, max 3300×8000mm, 4-5x stronger than ordinary glass |
| **Insulating Glass** | 12-52mm, Low-E coating, argon gas fill, 10-year warranty |
| **Laminated Glass** | 6.38-60mm, PVB/SGP interlayer, 99% UV block |
| **Craft Glass** | 3-19mm, silk-screen, acid-etched, back-painted, digital printing |

### Services

Custom Glass Processing | One-Stop Glass Solution | OEM/ODM | Technical Support | Global Delivery | After-Sales Service

---

## Project Overview

This repository contains the complete BDGLASS foreign trade website — a statically-generated Next.js application designed for international B2B glass buyers.

### Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 16.2.6 | React framework (App Router + Turbopack) |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type-safe development |
| [Tailwind CSS](https://tailwindcss.com/) | v4 | CSS-first utility styling (no config file) |
| [React](https://react.dev/) | 19.2.4 | UI library |
| [Lucide Icons](https://lucide.dev/) | 1.16 | Icon library |
| [Vercel](https://vercel.com/) | — | Hosting & deployment |

### Quick Start

```bash
cd bd-glass-factory

# Install dependencies
npm install

# Development server (Turbopack)
npm run dev

# Production build
npm run build

# Start production server
npm run start
```

---

## Project Structure

```
BD-Glass-Factory/
├── bd-glass-factory/              # Next.js frontend application
│   ├── src/
│   │   ├── app/                   # App Router (pages + API + SEO)
│   │   │   ├── page.tsx           # Homepage (12 sections, AIDA model)
│   │   │   ├── about/             # Company introduction
│   │   │   ├── products/          # Product listing + detail pages
│   │   │   ├── services/          # 6 service offerings
│   │   │   ├── projects/          # 6 engineering case studies
│   │   │   ├── certifications/    # 8 certifications
│   │   │   ├── contact/           # Contact form + info
│   │   │   ├── api/contact/       # POST inquiry handler
│   │   │   ├── sitemap.ts         # Dynamic sitemap generation
│   │   │   ├── robots.ts          # Robots.txt config
│   │   │   ├── not-found.tsx      # Custom 404 page
│   │   │   ├── layout.tsx         # Root layout (fonts, GA, JSON-LD)
│   │   │   └── globals.css        # Design system (@theme + @layer)
│   │   ├── components/
│   │   │   ├── home/              # 12 homepage section components
│   │   │   ├── layout/            # Header, Footer, MobileNav
│   │   │   ├── shared/            # SectionTitle, Breadcrumb, WhatsAppButton
│   │   │   └── contact/           # InquiryForm (client component)
│   │   ├── data/                  # Static TypeScript data files
│   │   │   ├── site-config.ts     # Global site configuration
│   │   │   ├── products.ts        # 4 product data objects
│   │   │   ├── projects.ts        # 6 project case data
│   │   │   ├── services.ts        # 6 service data
│   │   │   └── certifications.ts  # 8 certification data
│   │   └── lib/
│   │       ├── metadata.ts        # SEO metadata helpers
│   │       └── json-ld.tsx        # Structured data (Schema.org)
│   ├── public/                    # Static assets
│   ├── next.config.ts             # Security headers, image optimization
│   └── package.json
├── docs/                          # Project documentation (Chinese)
│   ├── requirements.md            # 需求文档
│   ├── design-spec.md             # 设计规范
│   ├── development-plan.md        # 开发计划（6 Phases）
│   ├── homepage-seo-content.md    # 首页 SEO 内容
│   └── content/                   # Per-page content writing docs
├── 博点玻璃简介（英文）.pdf       # Company brochure
└── README.md                      # This file
```

---

## Features

### SEO & Performance
- **Server Components by default** — minimal client-side JS
- **Dynamic sitemap.xml** — auto-generates from static + dynamic routes
- **robots.txt** — proper crawl configuration
- **JSON-LD Structured Data** — Organization, Product, BreadcrumbList, WebSite
- **Per-page Metadata** — title, description, Open Graph tags
- **Image Optimization** — WebP/AVIF format, responsive sizes
- **Security Headers** — X-Content-Type-Options, X-Frame-Options, XSS Protection, Referrer-Policy

### UX & Conversion
- **AIDA Model Homepage** — Attention → Interest → Desire → Action (13 sections)
- **Client Visit Gallery** — Staggered 4-column photo grid showcasing overseas buyers at factory
- **Contact Form** — client + server validation, reCAPTCHA-ready
- **WhatsApp Button** — global floating button with tooltip
- **Responsive Design** — Mobile / Tablet / Desktop with breakpoints
- **Google Analytics** — GA4 integration via environment variable

### Developer Experience
- **CSS-First Tailwind v4** — `@theme` block in globals.css, no tailwind.config.ts
- **TypeScript** — full type coverage for data and components
- **Design System** — colors, fonts, components, utilities in CSS layers
- **Content-Data Separation** — text in data files, easy non-dev editing

---

## Development Status

| Phase | Description | Status |
|-------|-------------|--------|
| Phase 1 | Project Init + Base Framework | Complete |
| Phase 2 | Homepage Development (12 sections) | Complete |
| Phase 3 | Core Pages (8 routes) | Complete |
| Phase 4 | Interaction & Conversion | Complete |
| Phase 5 | SEO + Performance Optimization | Complete |
| Phase 6 | Deployment (Linux + Nginx + PM2) | Complete |

Full development plan: [`docs/development-plan.md`](docs/development-plan.md)

### V2.0.0 Release (2026-06-02)

- **New Logo** — 3D metallic BD icon with glass door effect, full favicon suite replaced
- **Client Visit Gallery** — New homepage section (`ClientVisits`) with 11 overseas buyer factory visit photos in staggered 4-column layout
- **Homepage Copy U-Type Optimization** — All 12 sections rewritten from I-type to U-type (buyer-centric) copy
- **SEO Complete** — Product detail pages, about, services, contact pages all SEO-optimized with dynamic metadata
- **Production Deployed** — Live on https://bdglassfactory.com via Linux + Nginx + PM2

---

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
cp bd-glass-factory/.env.example bd-glass-factory/.env.local
```

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID | Optional |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | reCAPTCHA v3 site key | Optional |
| `RECAPTCHA_SECRET_KEY` | reCAPTCHA v3 secret key | Optional |
| `SMTP_HOST` | SMTP server for contact form emails | Optional |

---

## Contact

- **Website**: [bdglassfactory.com](https://bdglassfactory.com)
- **Email**: info@bdglassfactory.com
- **Phone/WhatsApp**: +86 13723810568
- **Address**: No.23, North Garden Road, Shishan Town, Nanhai District, Foshan City, Guangdong Province, China

---

> Version: V2.0.0 | Updated: 2026-06-02
