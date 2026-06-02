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
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tempered & Insulating Glass Supplier | Factory-Direct from China | BDGLASS",
  description:
    "Factory-direct 3C certified tempered, insulating, laminated, and craft glass. Reliable quality, no middlemen, no delays. Get a quote today.",
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
    title: "Tempered & Insulating Glass Supplier | Factory-Direct from China | BDGLASS",
    description:
      "Factory-direct 3C certified tempered, insulating, laminated, and craft glass. Reliable quality, no middlemen, no delays.",
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
      <ClientVisits />

      {/* Action */}
      <HowWeWork />
      <CTASection />
      <ContactSection />
    </div>
  );
}
