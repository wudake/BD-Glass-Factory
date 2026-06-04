import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { JsonLdOrganization, JsonLdWebSite } from "@/lib/json-ld";
import { siteConfig } from "@/data/site-config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BDGLASS - Tempered & Insulating Glass | Factory-Direct from China",
    template: "%s - BDGLASS",
  },
  description:
    "Get factory-direct 3C certified tempered, insulating, laminated and craft glass for your project. Reliable quality, no middlemen, competitive pricing. Request a quote today.",
  keywords: [
    "China glass factory",
    "glass manufacturer China",
    "tempered glass",
    "insulating glass",
    "laminated glass",
    "glass factory",
    "custom glass processing",
    "BDGLASS",
    "Bodian Glass",
  ],
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "BDGLASS - Tempered & Insulating Glass | Factory-Direct from China",
    description:
      "Get factory-direct 3C certified tempered, insulating, laminated and craft glass for your project. Reliable quality, no middlemen, competitive pricing.",
    url: `https://${siteConfig.domain}`,
    siteName: "BDGLASS",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `https://${siteConfig.domain}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "BDGLASS - Tempered & Insulating Glass Supplier",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BDGLASS - Tempered & Insulating Glass | Factory-Direct from China",
    description:
      "Get factory-direct 3C certified tempered, insulating, laminated and craft glass for your project. Reliable quality, no middlemen, competitive pricing.",
    images: [`https://${siteConfig.domain}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#0A1F44",
};

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <JsonLdOrganization />
        <JsonLdWebSite />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        {/* Google Analytics */}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
