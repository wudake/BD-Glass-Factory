import SectionTitle from "@/components/shared/SectionTitle";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { services } from "@/data/services";
import { Wrench, Package, Factory, Lightbulb, Globe, ShieldCheck, Check } from "lucide-react";
import { JsonLdBreadcrumb } from "@/lib/json-ld";
import { generatePageMeta } from "@/lib/metadata";
import { siteConfig } from "@/data/site-config";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMeta({
  title: "Glass Processing Services China | Custom Fabrication & OEM | BDGLASS",
  description:
    "BDGLASS offers custom glass processing services in China — CNC cutting, tempering, laminating, insulating, printing. OEM/ODM, global shipping, 10-year warranty. Get a quote.",
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
          <p className="text-brand-blue text-sm uppercase tracking-wider mb-4">End-to-End Solutions</p>
          <h1 className="text-white mb-4">Glass Processing Services — Custom Fabrication, OEM &amp; Global Delivery from China</h1>
          <p className="text-brand-muted text-body-lg max-w-2xl mx-auto">
            End-to-end glass solutions for international buyers. CNC precision cutting, tempering, laminating, insulating, decorative printing, and worldwide shipping from our Foshan factory.
          </p>
        </div>
      </div>
      <div className="container-page py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
        <JsonLdBreadcrumb items={[{ name: "Home", item: "/" }, { name: "Services" }]} />
      </div>

      {/* Introduction */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-brand-dark mb-6">Custom Glass Fabrication &amp; Processing from China</h2>
            <div className="space-y-4 text-brand-muted-dark leading-relaxed text-left">
              <p>
                BDGLASS provides comprehensive <strong>glass processing services</strong> from our 15,000㎡
                factory in Foshan, Guangdong, China. We serve architects, contractors, door and window
                manufacturers, and furniture makers worldwide with <strong>custom glass fabrication</strong>{" "}
                capabilities spanning tempering, laminating, insulating, cutting, grinding, drilling,
                printing, and decorative finishing — all under one roof.
              </p>
              <p>
                Our <strong>CNC glass cutting</strong> machines handle sheets up to 3,300 × 12,000mm with
                ±0.5mm accuracy. <strong>Edge grinding</strong> options include flat polish, pencil edge,
                bevel, and OG finishes. <strong>CNC drilling</strong> supports precision hole patterns,
                waterjet-compatible layouts, and custom cutouts for hardware installation.
              </p>
              <p>
                For safety glass, our <strong>SouthTech tempering furnace</strong> processes 3-19mm glass up
                to 3,300 × 8,000mm, achieving surface compression ≥90 MPa and 3C/EN 12150 certification.{" "}
                <strong>Laminating autoclave</strong> bonds PVB and SGP interlayers for 6.38-60mm laminated
                glass. <strong>Five automated IGU production lines</strong> manufacture double and triple
                glazed units with argon gas fill and Low-E coating.
              </p>
              <p>
                For decorative applications, our <strong>silk screen printing line</strong> applies up to
                6-color ceramic frit with Pantone matching, while{" "}
                <strong>digital ceramic enamel printing</strong> enables photographic-quality imagery on
                glass surfaces.
              </p>
              <p>
                We offer <strong>OEM/ODM glass manufacturing</strong> with private label packaging, flexible
                MOQs, and IP protection. For international buyers, we provide{" "}
                <strong>export-standard plywood crate packaging</strong>, full customs documentation (CO,
                Form A, Form E), and flexible shipping terms including FOB Tianjin, CIF, and DDP.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="section bg-brand-gray/5">
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

      {/* Workflow */}
      <section className="section bg-white">
        <div className="container-page">
          <SectionTitle
            title="How We Work"
            subtitle="From your first inquiry to final delivery — a transparent, step-by-step process."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                step: "01",
                title: "Inquiry & Consultation",
                desc: "Send your specs, drawings, or photos. We review feasibility and recommend the best glass solution within 24 hours.",
              },
              {
                step: "02",
                title: "Quotation & Sampling",
                desc: "Detailed quotation with breakdown by item. Sample production (7-10 days) for custom designs and first-time buyers.",
              },
              {
                step: "03",
                title: "Production & QC",
                desc: "Full production with stage-by-stage quality control. Inspection reports and photos provided for project orders.",
              },
              {
                step: "04",
                title: "Packaging & Shipping",
                desc: "Export-standard plywood crate packaging. Container loading supervision. Full customs documentation provided.",
              },
              {
                step: "05",
                title: "Delivery & Support",
                desc: "Door-to-door tracking. After-sales support and warranty claims handled promptly with dedicated account manager.",
              },
            ].map((item) => (
              <div key={item.step} className="card p-6 text-center">
                <div className="text-brand-blue text-3xl font-bold font-mono mb-3">{item.step}</div>
                <h5 className="text-brand-dark mb-2">{item.title}</h5>
                <p className="text-brand-muted-dark text-body-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-brand-gray/5">
        <div className="container-page">
          <SectionTitle
            title="Frequently Asked Questions About Our Services"
            subtitle="Common questions from international buyers about glass processing, ordering, and shipping."
          />
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "What glass processing services do you offer?",
                answer:
                  "We offer a comprehensive range of glass processing services including CNC precision cutting (up to 3,300 × 12,000mm), edge grinding (flat, pencil, bevel, OG), CNC drilling and waterjet cutouts, tempering (3-19mm), laminating (PVB/SGP, 6.38-60mm), insulating glass manufacturing (IGU, 12-52mm), silk screen printing (up to 6 colors), digital ceramic enamel printing, acid etching, sandblasting, and hot melting. All processes are completed in-house at our Foshan factory.",
              },
              {
                question: "What is your minimum order quantity (MOQ)?",
                answer:
                  "Our standard MOQ is 50 square meters per glass type. However, we are flexible for trial orders, sample batches, and first-time buyers. For custom decorative glass or complex multi-layer configurations, the MOQ may vary depending on setup costs. Contact us with your specific requirements for a tailored quotation.",
              },
              {
                question: "Do you provide OEM / private label manufacturing?",
                answer:
                  "Yes. OEM and private label manufacturing is one of our core services. We can produce glass products under your brand name with custom packaging, printed logos, and branded documentation. We offer strict confidentiality agreements and IP protection for your designs and product specifications.",
              },
              {
                question: "How do you ensure quality during production?",
                answer:
                  "Every batch undergoes multi-stage quality control: (1) incoming raw material inspection (flatness, thickness, optical quality), (2) in-process dimensional checks during cutting and grinding, (3) post-processing verification (tempering fragmentation test, laminate adhesion test, IGU seal integrity test), and (4) final pre-shipment inspection with photos and reports. Project orders include full QC documentation.",
              },
              {
                question: "What shipping terms and documentation do you provide?",
                answer:
                  "We offer flexible shipping terms: FOB Tianjin (most common), CIF to your nearest port, and DDP to your door (selected markets). Documentation includes Commercial Invoice, Packing List, Bill of Lading, Certificate of Origin (CO), Form A, Form E (for ASEAN countries), and 3C/EN test reports as required. Our export team handles all customs paperwork.",
              },
              {
                question: "What is your warranty policy?",
                answer:
                  "We provide a 10-year warranty on insulating glass seal integrity (covering fogging and seal failure under normal use conditions). Our silicone sealant supplier backs this with a 15-year adhesion performance guarantee. Tempered and laminated glass products carry a 5-year structural warranty. Warranty claims are processed within 24 hours of receipt, with replacement or refund provided for verified defects.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-lg p-5 bg-white"
              >
                <h4 className="text-brand-dark mb-2 text-lg">{item.question}</h4>
                <p className="text-brand-muted-dark text-body-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="bg-brand-dark rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-white mb-4">Get a Custom Glass Processing Quote in 24 Hours</h2>
            <p className="text-brand-muted text-body-lg max-w-2xl mx-auto mb-8">
              Tell us your glass type, dimensions, quantity, and destination. Our team will recommend the best processing solution and provide a detailed factory quotation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8 text-left">
              {[
                "Free technical consultation — Glass selection, thickness, and configuration advice",
                "Detailed quotation with itemized breakdown — No hidden costs, transparent pricing",
                "Sample production available — 7-10 days for custom designs and first-time buyers",
                "Full QC documentation — Inspection reports and photos for project orders",
                "Export packaging & documentation — Plywood crates, CO, Form A/E, BL",
                "10-year warranty — Backed by quality material guarantees from our suppliers",
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check size={16} className="text-brand-green mt-0.5 shrink-0" />
                  <span className="text-brand-muted text-sm">{point}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2"
              >
                Request a Factory Quote
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline border-brand-green text-brand-green text-lg px-8 py-4 inline-flex items-center gap-2"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
