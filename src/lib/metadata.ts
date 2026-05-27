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
  ogImage,
}: {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}) {
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
      ...(ogImage && { images: [{ url: ogImage, width: 1200, height: 630 }] }),
    },
  };
}
