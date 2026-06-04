import HeroBanner from "@/components/home/HeroBanner";
import ProductRange from "@/components/home/ProductRange";
import FactoryStrength from "@/components/home/FactoryStrength";
import QualityMaterials from "@/components/home/QualityMaterials";
import ProductCategories from "@/components/home/ProductCategories";
import ApplicationScenarios from "@/components/home/ApplicationScenarios";
import ProjectExperience from "@/components/home/ProjectExperience";
import CertificationsPreview from "@/components/home/CertificationsPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ClientVisits from "@/components/home/ClientVisits";
import HowWeWork from "@/components/home/HowWeWork";
import CTASection from "@/components/home/CTASection";
import ContactSection from "@/components/home/ContactSection";
import Script from "next/script";
import { JsonLdLocalBusiness, JsonLdFAQPage } from "@/lib/json-ld";
import { siteConfig } from "@/data/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "China Glass Factory | Tempered & Insulating Glass Manufacturer | BDGLASS",
  description:
    "BDGLASS is a professional China glass factory. 3C certified tempered, insulating, laminated & craft glass. 15,000㎡ base, 80+ team, factory-direct pricing. Get a quote in 24h.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "China Glass Factory | Tempered & Insulating Glass Manufacturer | BDGLASS",
    description:
      "BDGLASS is a professional China glass factory. 3C certified tempered, insulating, laminated & craft glass. 15,000㎡ base, 80+ team, factory-direct pricing.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `https://${siteConfig.domain}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "BDGLASS — China Glass Factory for Tempered & Insulating Glass",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "China Glass Factory | Tempered & Insulating Glass Manufacturer | BDGLASS",
    description:
      "BDGLASS is a professional China glass factory. 3C certified tempered, insulating, laminated & craft glass. 15,000㎡ base, 80+ team, factory-direct pricing.",
    images: [`https://${siteConfig.domain}/og-image.png`],
  },
};

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

const homeFaqData = [
  {
    question: "What products does BDGLASS manufacture?",
    answer:
      "BDGLASS manufactures tempered glass (3-19mm), insulating glass/IGU (12-52mm), laminated glass (6.38-60mm, PVB/SGP), craft glass (acid etched, silk screen, digital enamel), curtain wall glass, glass railings & balustrades, office glass partitions, and glass shower enclosures. All products are 3C certified and manufactured at our 15,000㎡ factory in Foshan, Guangdong, China.",
  },
  {
    question: "Where is BDGLASS factory located?",
    answer:
      "Our factory is located at No.23, North Garden Road, Shishan Town, Nanhai District, Foshan City, Guangdong Province, China — approximately 45 minutes by car from Guangzhou Baiyun International Airport (CAN). Foshan is one of China's largest glass manufacturing hubs with a complete supply chain ecosystem.",
  },
  {
    question: "How can I get a quotation from BDGLASS?",
    answer:
      "Send your glass specifications (type, thickness, dimensions, quantity, application, and destination country) via our contact page, email at info@bdglassfactory.com, or WhatsApp at +86 13786871098. We provide a detailed factory quotation within 24 hours during business days (Monday-Saturday, 8:00 AM-6:00 PM GMT+8).",
  },
  {
    question: "Does BDGLASS export glass internationally?",
    answer:
      "Yes. We export to Australia, Africa, the Middle East, Cambodia, Vietnam, and Southeast Asia. We provide export-standard plywood crate packaging, full customs documentation (CO, Form A/E), and flexible shipping terms including FOB Tianjin, CIF, and DDP.",
  },
  {
    question: "What is the minimum order quantity (MOQ)?",
    answer:
      "Our standard MOQ is 50 square meters per glass type, but we are flexible for trial orders, samples, and first-time buyers. Contact us with your specific requirements for a tailored quotation.",
  },
  {
    question: "Can I visit the BDGLASS factory?",
    answer:
      "Yes, we welcome factory visits by appointment. Please contact us at least 3 days in advance via WhatsApp or email to schedule. Airport pickup from Guangzhou Baiyun International Airport can be arranged for serious buyers and project partners.",
  },
];

export default function HomePage() {
  return (
    <div>
      <JsonLdLocalBusiness />
      <JsonLdFAQPage items={homeFaqData} />
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="lazyOnload"
      />

      {/* Attention */}
      <HeroBanner />

      {/* Interest */}
      <ProductRange />
      <FactoryStrength />
      <QualityMaterials />

      {/* Desire */}
      <ProductCategories />
      <ApplicationScenarios />
      <ProjectExperience />
      <CertificationsPreview />
      <WhyChooseUs />
      <ClientVisits />

      {/* Action */}
      <HowWeWork />
      <CTASection />
      <ContactSection turnstileSiteKey={TURNSTILE_SITE_KEY} />
    </div>
  );
}
