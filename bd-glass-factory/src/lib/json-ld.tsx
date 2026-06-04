import { siteConfig } from "@/data/site-config";

interface BreadcrumbItem {
  name: string;
  item?: string;
}

export function JsonLdBreadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const itemListElement = items.map((item, index) => ({
    "@type": "ListItem" as const,
    position: index + 1,
    name: item.name,
    ...(item.item && { item: `https://${siteConfig.domain}${item.item}` }),
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function JsonLdOrganization() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.fullName,
    alternateName: siteConfig.name,
    url: `https://${siteConfig.domain}`,
    description: siteConfig.description,
    foundingDate: String(siteConfig.founded),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.en.split(",")[0],
      addressLocality: "Foshan",
      addressRegion: "Guangdong",
      addressCountry: "CN",
    },
    telephone: siteConfig.phone,
    email: siteConfig.email,
    areaServed: siteConfig.exportCountries.map((c) => ({ "@type": "Country", name: c })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function JsonLdProduct({
  name,
  description,
  imageUrl,
}: {
  name: string;
  description: string;
  imageUrl?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    ...(imageUrl && { image: `https://${siteConfig.domain}${imageUrl}` }),
    manufacturer: {
      "@type": "Organization",
      name: siteConfig.fullName,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function JsonLdLocalBusiness() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://${siteConfig.domain}/about#localbusiness`,
    name: siteConfig.fullName,
    alternateName: siteConfig.name,
    description: siteConfig.description,
    url: `https://${siteConfig.domain}/about`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.en.split(",")[0],
      addressLocality: "Foshan",
      addressRegion: "Guangdong",
      addressCountry: "CN",
    },
    image: `https://${siteConfig.domain}/logo.png`,
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface FAQItem {
  question: string;
  answer: string;
}

export function JsonLdFAQPage({ items }: { items: FAQItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function JsonLdWebSite() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: `https://${siteConfig.domain}`,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `https://${siteConfig.domain}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
