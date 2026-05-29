import { siteConfig } from "@/data/site-config";

export const defaultMetadata = {
  metadataBase: new URL(`https://${siteConfig.domain}`),
  alternates: {
    canonical: "/",
  },
};

export function generatePageMeta({
  title,
  description,
  path = "/",
  ogImage = "/og-image.png",
}: {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}) {
  const ogUrl = ogImage.startsWith("http")
    ? ogImage
    : `https://${siteConfig.domain}${ogImage}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: `https://${siteConfig.domain}${path}`,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [{ url: ogUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogUrl],
    },
  };
}
