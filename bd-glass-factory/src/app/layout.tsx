import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BDGLASS - China Glass Factory | Tempered & Insulating Glass Manufacturer",
    template: "%s - BDGLASS",
  },
  description:
    "Foshan Bodian Glass Co., LTD is a professional China glass factory specializing in tempered, insulating, laminated and craft glass. 3C certified, 15,000 sqm production base, exporting worldwide.",
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
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "BDGLASS - China Glass Factory | Tempered & Insulating Glass Manufacturer",
    description:
      "Professional China glass factory specializing in tempered, insulating, laminated and craft glass. 3C certified, 15,000 sqm production base, exporting worldwide.",
    url: `https://${siteConfig.domain}`,
    siteName: "BDGLASS",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `https://${siteConfig.domain}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "BDGLASS - China Glass Factory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BDGLASS - China Glass Factory | Tempered & Insulating Glass Manufacturer",
    description:
      "Professional China glass factory specializing in tempered, insulating, laminated and craft glass. 3C certified, 15,000 sqm production base, exporting worldwide.",
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

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} h-full`}>
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
