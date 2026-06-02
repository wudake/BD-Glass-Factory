# Client Visits Gallery Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a masonry photo gallery module (`ClientVisits`) to the homepage showcasing 11 overseas client factory visit photos.

**Architecture:** A single React Server Component using Next.js Image with CSS columns masonry layout. Dark themed to match existing homepage sections. Integrated into `page.tsx` between `WhyChooseUs` and `HowWeWork`.

**Tech Stack:** Next.js 16, React, Tailwind CSS, next/image

---

### Task 1: Create ClientVisits Component

**Files:**
- Create: `src/components/home/ClientVisits.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Write the component**

```tsx
import Image from "next/image";

const photos = [
  { src: "/images/client-visits/BDGlass-Client-Visits (1).jpg", alt: "Overseas clients visiting BDGLASS factory entrance in Foshan", aspect: "portrait" },
  { src: "/images/client-visits/BDGlass-Client-Visits (1).png", alt: "Factory floor discussion with international buyer at BDGLASS", aspect: "portrait" },
  { src: "/images/client-visits/BDGlass-Client-Visits (2).jpg", alt: "Group of overseas clients at BDGLASS factory exterior", aspect: "portrait" },
  { src: "/images/client-visits/BDGlass-Client-Visits (2).png", alt: "Production line inspection with client at BDGLASS facility", aspect: "portrait" },
  { src: "/images/client-visits/BDGlass-Client-Visits (3).JPG", alt: "Client touring BDGLASS factory floor with production team", aspect: "portrait" },
  { src: "/images/client-visits/BDGlass-Client-Visits (3).png", alt: "Team and overseas client at glass production line", aspect: "portrait" },
  { src: "/images/client-visits/BDGlass-Client-Visits (4).jpg", alt: "International buyer visiting BDGLASS workshop", aspect: "landscape" },
  { src: "/images/client-visits/BDGlass-Client-Visits (4).png", alt: "Client examining glass products at BDGLASS quality station", aspect: "portrait" },
  { src: "/images/client-visits/BDGlass-Client-Visits (5).jpg", alt: "Factory discussion between BDGLASS team and overseas partner", aspect: "landscape" },
  { src: "/images/client-visits/BDGlass-Client-Visits (6).jpg", alt: "Group photo with international client at BDGLASS facility", aspect: "landscape" },
  { src: "/images/client-visits/BDGlass-Client-Visits (7).jpg", alt: "Overseas buyers visiting BDGLASS glass manufacturing plant", aspect: "landscape" },
];

export default function ClientVisits() {
  return (
    <section className="section bg-brand-dark">
      <div className="container-page">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-white mb-4">Trusted by Buyers Worldwide</h2>
          <p className="text-brand-muted text-body-lg max-w-3xl mx-auto">
            From Australia to Africa, the Middle East to Southeast Asia — buyers visit our
            Foshan facility to inspect production, verify quality, and build partnerships
            that last. Our door is always open.
          </p>
        </div>

        {/* Masonry Gallery */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="relative rounded-xl overflow-hidden break-inside-avoid"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={600}
                height={800}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Insert into homepage**

Modify `src/app/page.tsx` — add import and insert `<ClientVisits />` between `<WhyChooseUs />` and `<HowWeWork />`.

```tsx
import ClientVisits from "@/components/home/ClientVisits";
```

In the component JSX:
```tsx
<WhyChooseUs />
<ClientVisits />
<HowWeWork />
```

- [ ] **Step 3: Build and verify**

Run: `cd bd-glass-factory && npm run build`
Expected: Build succeeds with no errors.

- [ ] **Step 4: Verify static assets copied for standalone**

Run deploy script static copy steps:
```bash
cd bd-glass-factory
mkdir -p .next/standalone/.next
cp -r public .next/standalone/
cp -r .next/static .next/standalone/.next/
```

- [ ] **Step 5: Commit**

```bash
git add src/components/home/ClientVisits.tsx src/app/page.tsx
git commit -m "feat: add ClientVisits masonry gallery to homepage"
```
