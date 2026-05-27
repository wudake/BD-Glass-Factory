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
