import SectionTitle from "@/components/shared/SectionTitle";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { certifications } from "@/data/certifications";
import { Shield, FileCheck, Award, Users } from "lucide-react";
import { generatePageMeta } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMeta({
  title: "Certifications - 3C, Quality Assurance & Warranty",
  description:
    "BDGLASS holds 3C certification, insulating glass product certification, test reports, and 10-year warranty. Member of China Architectural Glass Association and Guangdong Door & Window Association.",
  path: "/certifications",
});

const categoryIcons = {
  product: Shield,
  'test-report': FileCheck,
  warranty: Award,
  membership: Users,
};

const categoryLabels = {
  product: 'Product Certification',
  'test-report': 'Test Report',
  warranty: 'Warranty',
  membership: 'Association Member',
};

export default function CertificationsPage() {
  const categories = [...new Set(certifications.map((c) => c.category))];

  return (
    <div>
      <div className="bg-brand-dark py-20">
        <div className="container-page text-center">
          <h1 className="text-white mb-4">Certifications & Quality</h1>
          <p className="text-brand-muted text-body-lg max-w-xl mx-auto">
            Our commitment to quality, safety, and industry standards
          </p>
        </div>
      </div>
      <div className="container-page py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Certifications" }]} />
      </div>
      <section className="section">
        <div className="container-page">
          <SectionTitle
            title="Quality Assurance"
            subtitle="All our products undergo rigorous testing and certification. We hold 3C certification, product quality certifications, and are active members of multiple industry associations."
          />

          {categories.map((category) => {
            const Icon = categoryIcons[category as keyof typeof categoryIcons] || Shield;
            const items = certifications.filter((c) => c.category === category);

            return (
              <div key={category} className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Icon size={24} className="text-brand-blue" />
                  <h3 className="text-brand-dark">
                    {categoryLabels[category as keyof typeof categoryLabels]}
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((cert) => (
                    <div key={cert.title} className="card p-6">
                      <div className="bg-brand-gray rounded-lg aspect-[3/2] flex items-center justify-center mb-4">
                        <span className="text-brand-muted text-sm">Certificate Image</span>
                      </div>
                      <h5 className="text-brand-dark mb-2">{cert.title}</h5>
                      <p className="text-brand-muted-dark text-body-sm">{cert.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
