import HeroBanner from "@/components/home/HeroBanner";
import ProductRange from "@/components/home/ProductRange";
import FactoryStrength from "@/components/home/FactoryStrength";
import QualityMaterials from "@/components/home/QualityMaterials";
import ProductCategories from "@/components/home/ProductCategories";
import ApplicationScenarios from "@/components/home/ApplicationScenarios";
import ProjectExperience from "@/components/home/ProjectExperience";
import CertificationsPreview from "@/components/home/CertificationsPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowWeWork from "@/components/home/HowWeWork";
import CTASection from "@/components/home/CTASection";
import ContactSection from "@/components/home/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "China Glass Factory - Tempered & Insulating Glass Manufacturer | BDGLASS",
  description:
    "BDGLASS is a professional China glass factory specializing in tempered glass, insulating glass, laminated glass and custom glass processing. 3C certified, 15,000㎡ production base, exporting to 6+ countries. Get a quote today.",
  keywords: [
    "China glass factory",
    "China glass manufacturer",
    "tempered glass factory China",
    "insulating glass manufacturer",
    "custom glass processing",
    "glass supplier China",
    "laminated glass China",
    "architectural glass factory",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "China Glass Factory - Tempered & Insulating Glass Manufacturer | BDGLASS",
    description:
      "BDGLASS is a professional China glass factory specializing in tempered glass, insulating glass, laminated glass and custom glass processing. 3C certified, 15,000㎡ production base, exporting to 6+ countries.",
    type: "website",
    locale: "en_US",
  },
};

export default function HomePage() {
  return (
    <div>
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

      {/* Action */}
      <HowWeWork />
      <CTASection />
      <ContactSection />
    </div>
  );
}
