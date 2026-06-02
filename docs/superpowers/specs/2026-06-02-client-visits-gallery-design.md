# Client Visits Gallery — Homepage Module Design

## Overview

Add a social-proof photo gallery module to the homepage showcasing overseas clients visiting the BDGLASS factory. Positioned immediately after `WhyChooseUs` and before `HowWeWork` to serve as trust reinforcement before the CTA/action sections.

## Goals

- Build trust with prospective international buyers by showing real factory visits
- Demonstrate geographic diversity of client base (Africa, Middle East, Europe, etc.)
- Maintain visual consistency with existing dark-themed B2B industrial aesthetic
- Preserve original photo aspect ratios (mix of portrait and landscape mobile photos)

## Design Reference

- **Existing pattern:** `FactoryStrength` masonry image grid (`columns-2 md:columns-3`)
- **Color scheme:** Dark background (`bg-brand-dark` #0A1F44), white headings, muted gray body text
- **Typography:** h2 (2.25rem) for title, body-lg (1.125rem) for subtitle
- **Spacing:** `section` class (96px top/bottom desktop, 64px mobile)
- **Container:** `container-page` (max-width 1200px, centered)

## Section: Title & Copy

**Headline:** `Trusted by Buyers Worldwide`

**Subtitle:**
> From Australia to Africa, the Middle East to Southeast Asia — buyers visit our Foshan facility to inspect production, verify quality, and build partnerships that last. Our door is always open.

**Layout:** Centered text block, max-width 3xl (~768px), mb-12 below subtitle.

## Section: Photo Gallery

### Layout

- CSS Masonry using `columns-2 md:columns-3 gap-4 space-y-4`
- Each image wrapped in `break-inside-avoid` container
- Images maintain original aspect ratio (no forced cropping)
- Rounded corners: `rounded-xl`
- Overflow hidden for scale transform containment

### Image Specifications

| Property | Value |
|----------|-------|
| Source | `/images/client-visits/` |
| Count | 11 photos |
| Display | Original aspect ratio preserved |
| Border radius | 12px (`rounded-xl`) |
| Hover effect | `hover:scale-105` over 500ms, `transition-transform duration-500` |
| Loading | `loading="lazy"` for below-fold images |
| Sizes attr | `(max-width: 768px) 50vw, 33vw` |

### Photo List (to be rendered)

All 11 photos from `public/images/client-visits/`:

1. `BDGlass-Client-Visits (1).jpg` — Factory entrance group photo
2. `BDGlass-Client-Visits (1).png` — Factory floor discussion
3. `BDGlass-Client-Visits (2).jpg` — Factory exterior group photo
4. `BDGlass-Client-Visits (2).png` — Production line inspection
5. `BDGlass-Client-Visits (3).JPG` — Indoor factory floor with client
6. `BDGlass-Client-Visits (3).png` — Team and client at production line
7. `BDGlass-Client-Visits (4).jpg` — Workshop visit
8. `BDGlass-Client-Visits (4).png` — Client examining glass products
9. `BDGlass-Client-Visits (5).jpg` — Factory discussion
10. `BDGlass-Client-Visits (6).jpg` — Group at facility
11. `BDGlass-Client-Visits (7).jpg` — Final group photo

**Alt text pattern:** `Overseas client visiting BDGLASS factory in Foshan — {brief scene description}`

### Responsive Behavior

| Breakpoint | Columns | Gap |
|------------|---------|-----|
| < 768px (mobile) | 2 | 16px |
| ≥ 768px (desktop) | 3 | 16px |

## Component Architecture

### File: `src/components/home/ClientVisits.tsx`

- **Type:** React Server Component (default export)
- **Dependencies:** `next/image` (Image component)
- **Data source:** Hard-coded array of image metadata (src, alt, aspect hint for ordering)
- **No client-side JS required** — pure static rendering with CSS hover effects

### Data Structure

```typescript
interface ClientVisitPhoto {
  src: string;
  alt: string;
  // Optional aspect ratio hint to distribute tall vs wide photos evenly
  aspect: "portrait" | "landscape";
}
```

### Integration Point

Insert into `src/app/page.tsx` between `<WhyChooseUs />` and `<HowWeWork />`:

```tsx
{/* Desire — Social Proof */}
<ClientVisits />

{/* Action */}
<HowWeWork />
```

## Accessibility

- All images have descriptive `alt` text
- Color contrast meets WCAG AA (white text on #0A1F44 background)
- Hover effects respect `prefers-reduced-motion` ( Tailwind's transition utilities respect this via media query when reduced motion is preferred)
- Images use `loading="lazy"` to avoid blocking LCP

## Performance Considerations

- 11 images below the fold → lazy loading required
- Next.js Image component handles WebP/AVIF format negotiation automatically
- Masonry layout via CSS `columns` (no JS layout calculation, no layout shift after hydration)
- No animation libraries needed — pure CSS transitions

## Out of Scope

- Lightbox / click-to-expand (not requested)
- Client name/country labels (explicitly excluded by user)
- Video embeds
- Auto-scrolling or carousel behavior
- Dynamic CMS integration (photos are static assets)

## Testing Criteria

- [ ] Module renders between WhyChooseUs and HowWeWork on homepage
- [ ] All 11 photos display without cropping (original aspect ratios visible)
- [ ] Mobile: 2-column layout, no horizontal scroll
- [ ] Desktop: 3-column layout, gap consistent at 16px
- [ ] Hover scale effect works on desktop
- [ ] No layout shift after page load (masonry uses CSS columns, not JS layout)
- [ ] Alt text present on all images (verified via DevTools or axe)
- [ ] `npm run build` completes without errors
