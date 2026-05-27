import SectionTitle from "@/components/shared/SectionTitle";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { services } from "@/data/services";
import { Wrench, Package, Factory, Lightbulb, Globe, ShieldCheck } from "lucide-react";
import { generatePageMeta } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMeta({
  title: "Glass Processing Services - Custom Solutions & Global Delivery",
  description:
    "BDGLASS offers custom glass processing, OEM/ODM service, one-stop solutions, technical support, global delivery, and 10-year after-sales warranty for international buyers.",
  path: "/services",
});

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Wrench,
  Package,
  Factory,
  Lightbulb,
  Globe,
  ShieldCheck,
};

export default function ServicesPage() {
  return (
    <div>
      <div className="bg-brand-dark py-20">
        <div className="container-page text-center">
          <h1 className="text-white mb-4">Our Services</h1>
          <p className="text-brand-muted text-body-lg max-w-xl mx-auto">
            Comprehensive glass solutions from manufacturing to global delivery
          </p>
        </div>
      </div>
      <div className="container-page py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
      </div>
      <section className="section">
        <div className="container-page">
          <SectionTitle
            title="What We Offer"
            subtitle="End-to-end glass processing and supply services for global customers."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Package;
              return (
                <div key={service.title} className="card p-6">
                  <div className="w-12 h-12 bg-brand-gray rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-brand-blue" />
                  </div>
                  <h4 className="text-brand-dark mb-3">{service.title}</h4>
                  <p className="text-brand-muted-dark text-body-sm mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.details.slice(0, 3).map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-body-sm text-brand-muted-dark">
                        <span className="text-brand-green mt-1">&#10003;</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
