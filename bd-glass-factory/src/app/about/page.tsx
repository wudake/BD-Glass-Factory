import Breadcrumb from "@/components/shared/Breadcrumb";
import SectionTitle from "@/components/shared/SectionTitle";
import { Check, MapPin, Globe, Building2 } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { generatePageMeta } from "@/lib/metadata";
import { JsonLdBreadcrumb, JsonLdOrganization } from "@/lib/json-ld";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMeta({
  title: "About BDGLASS | Glass Manufacturer China Since 2019 | Foshan Factory",
  description:
    "Foshan Bodian Glass Co., LTD — professional glass manufacturer in China since 2019. 15,000sqm factory, 80+ team, 3C certified. Tempered, insulating, laminated & craft glass exporter.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div>
      {/* Page Header */}
      <div className="bg-brand-dark py-20">
        <div className="container-page text-center">
          <p className="text-brand-blue text-sm uppercase tracking-wider mb-4">
            Since {siteConfig.founded}
          </p>
          <h1 className="text-white mb-4">About BDGLASS — Professional Glass Manufacturer in China Since 2019</h1>
          <p className="text-brand-muted text-body-lg max-w-2xl mx-auto">
            15,000 square meters production base in Foshan, Guangdong. 80+ team members. 3C certified. Exporting architectural and decorative glass to Australia, Africa, Middle East &amp; Southeast Asia.
          </p>
        </div>
      </div>
      <div className="container-page py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />
        <JsonLdBreadcrumb items={[{ name: "Home", item: "/" }, { name: "About" }]} />
      </div>

      {/* Section 1: Company Introduction */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-brand-dark mb-6">Foshan Bodian Glass Co., LTD</h2>
              <div className="space-y-4 text-brand-muted-dark leading-relaxed">
                <p>
                  Foshan Bodian Glass Co., Ltd. (BDGLASS) is a professional glass manufacturer based in
                  Foshan City, Guangdong Province, China — the heart of the world&apos;s glass manufacturing
                  industry. Established in 2019, we have grown from a small glass processing workshop into
                  a modern glass factory with two production bases totaling 15,000 square meters, serving
                  clients across China and exporting to over 10 countries worldwide.
                </p>
                <p>
                  Our primary product lines include <strong>tempered glass</strong> (toughened safety glass,
                  3-19mm), <strong>insulating glass</strong> (IGU / double glazed units, 12-52mm),{" "}
                  <strong>laminated glass</strong> (PVB/SGP safety glass, 6.38-60mm), and{" "}
                  <strong>craft glass</strong> (decorative glass with acid etching, silk screen printing,
                  digital enamel, hot melting, and stained glass techniques). These products serve three
                  main market segments: residential home decoration, commercial building construction, and
                  architectural curtain wall projects.
                </p>
                <p>
                  Our factory is equipped with industry-leading glass processing machinery including a{" "}
                  <strong>SouthTech tempering furnace</strong> (capable of processing glass up to 3,300 ×
                  8,000mm), <strong>5 automated hollow glass production lines</strong> for IGU
                  manufacturing, <strong>CNC bending machines</strong> for precision curved glass,{" "}
                  <strong>high-precision CNC cutting machines</strong>, and{" "}
                  <strong>automatic edge grinding machines</strong>.
                </p>
                <p>
                  Quality begins with raw materials. We source our glass original sheets from China&apos;s
                  top-tier float glass manufacturers — <strong>Xinyi Glass</strong> and{" "}
                  <strong>South Glass (CSG)</strong> — ensuring higher strength, excellent flatness and
                  uniformity, and low iron content that reduces the risk of spontaneous breakage. Every
                  batch undergoes strict quality inspection including dimensional accuracy, surface defect
                  checking, and impact resistance testing. All products carry the{" "}
                  <strong>3C (CCC) certification</strong>.
                </p>
                <p>
                  While we maintain a strong presence in China&apos;s domestic market, BDGLASS has been
                  actively expanding internationally. Our glass products are exported to{" "}
                  <strong>Australia, Africa, the Middle East, Cambodia, Vietnam</strong>, and other
                  Southeast Asian countries. We provide professional export packaging (plywood crates with
                  cork separators), full documentation support, and flexible shipping terms including FOB,
                  CIF, and DDP.
                </p>
                <p>
                  Our team of 80+ employees has an average age of 29, bringing together youthful energy
                  with technical expertise. We invest continuously in employee training and skill
                  development, ensuring our production team stays current with the latest glass processing
                  technologies and quality standards.
                </p>
              </div>
            </div>
            <div className="bg-brand-gray rounded-xl aspect-[4/3] flex items-center justify-center">
              <span className="text-brand-muted text-sm text-center px-4">
                Factory Exterior Photo<br />
                <span className="text-xs">Replace with factory building photo (800×600 WebP)</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Production Base */}
      <section className="section bg-brand-gray/5">
        <div className="container-page">
          <SectionTitle
            title="Production Base and Technical Strength"
            subtitle="Two production bases totaling 15,000 square meters, equipped with advanced glass processing machinery."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-brand-gray rounded-xl aspect-[4/3] flex items-center justify-center order-2 lg:order-1">
              <span className="text-brand-muted text-sm text-center px-4">
                Production Line Photo<br />
                <span className="text-xs">Replace with factory production line photo (1200×800 WebP)</span>
              </span>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-brand-muted-dark leading-relaxed mb-6">
                Bodian Glass has two production bases equipped with advanced production equipment. These
                modern facilities ensure that the company can efficiently and stably produce high-quality
                glass products that meet international standards.
              </p>

              <h5 className="text-brand-dark font-semibold mb-4">Core Equipment</h5>
              <div className="space-y-3">
                {[
                  "SouthTech Tempering Furnace — High-precision glass tempering up to 3,300 × 8,000mm",
                  "5 Hollow Glass Production Lines — Automated IGU manufacturing (double & triple glazing)",
                  "CNC Bending Machine — Precision curved glass with custom radii & shapes",
                  "High Precision CNC Cutting Machine — Accurate sheet cutting with ±0.5mm tolerance",
                  "Automatic Edge Grinding Machine — Flat, pencil, bevel, and OG edge finishes",
                  "CNC Drilling Machine — Precision hole drilling, waterjet-compatible layouts",
                  "Laminating Autoclave — PVB/SGP laminated glass bonding, 6.38-60mm range",
                  "Silk Screen Printing Line — Ceramic frit decorative printing, up to 6 colors (Pantone matched)",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check size={18} className="text-brand-green mt-0.5 shrink-0" />
                    <span className="text-brand-muted-dark text-body-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Raw Materials */}
      <section className="section bg-white">
        <div className="container-page">
          <SectionTitle
            title="High Quality Raw Materials"
            subtitle="Quality starts from material selection. We partner with industry-leading suppliers."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Glass Original Sheets",
                brand: "Xinyi & South Glass",
                desc: "We use big brand original film with higher strength, good flatness and uniformity, and low iron content to reduce the risk of self-explosion.",
              },
              {
                title: "Butyl Rubber",
                brand: "Top-Brand Sealing",
                desc: "As the first dense process in insulating glass manufacturing, high quality butyl glue provides very low water vapor transmittance for superior sealing.",
              },
              {
                title: "Silicone Sealant",
                brand: "First-Line Brand",
                desc: "High quality silicone gel with good weather resistance, vibration resistance, and adhesion to multiple materials — ideal for hollow glass external sealing.",
              },
            ].map((item) => (
              <div key={item.title} className="card p-6">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-5">
                  <Check size={22} className="text-brand-blue" />
                </div>
                <h4 className="text-brand-dark mb-1">{item.title}</h4>
                <p className="text-brand-blue text-sm font-semibold mb-3">{item.brand}</p>
                <p className="text-brand-muted-dark text-body-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Team */}
      <section className="section bg-brand-dark">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-white mb-6">A Team Full of Vigor and Innovation</h2>
              <div className="space-y-4 text-brand-muted leading-relaxed">
                <p>
                  We have a young and experienced team of more than 80 people, with an average age of
                  only 29 years old — full of vigor and innovation. The dynamic expertise of young people
                  helps the company stay ahead in a competitive market, while providing more diverse and
                  high-quality services to customers.
                </p>
                <p>
                  The company believes that employees are not only producers, but also members of the
                  corporate family. Bodian Glass focuses on personal development, provides training and
                  learning opportunities, and encourages employees to improve their skills and expertise.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { value: "2019", label: "Year Founded" },
                  { value: "15,000㎡", label: "Production Area" },
                  { value: "80+", label: "Team Members" },
                  { value: "29", label: "Average Age" },
                  { value: "5", label: "Production Lines" },
                  { value: "10+", label: "Export Countries" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-brand-blue text-2xl font-bold font-mono">{stat.value}</div>
                    <div className="text-brand-muted text-xs mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-gray rounded-xl aspect-[4/3] flex items-center justify-center">
              <span className="text-brand-muted text-sm text-center px-4">
                Team Photo<br />
                <span className="text-xs">Replace with team group photo (800×600 WebP)</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Business Coverage */}
      <section className="section bg-white">
        <div className="container-page">
          <SectionTitle
            title="Business Coverage"
            subtitle="From domestic to international, offline to online, home decoration to engineering."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Globe,
                title: "Domestic to International",
                desc: "Solid foundation in China's domestic market supplying major door and window manufacturers in Guangdong and surrounding provinces. Internationally, products are exported to Australia, Africa, the Middle East, Cambodia, Vietnam and Southeast Asia — with FOB Tianjin and CIF shipping options.",
              },
              {
                icon: Building2,
                title: "Offline to Online",
                desc: "Mature offline sales network covering Southern China, plus growing digital presence through Alibaba, Made-in-China, and our own website. We provide convenient online consultation, quotation, and order tracking for international buyers.",
              },
              {
                icon: MapPin,
                title: "Home Decoration to Engineering",
                desc: "From customized door and window glass for residential villas to large-scale engineering projects including commercial curtain walls, glass railings, handrails, and decorative glass installations for hotels and churches.",
              },
            ].map((item) => (
              <div key={item.title} className="card p-6 text-center">
                <div className="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <item.icon size={26} className="text-brand-blue" />
                </div>
                <h5 className="text-brand-dark mb-3">{item.title}</h5>
                <p className="text-brand-muted-dark text-body-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Partner Clients */}
      <section className="section bg-brand-gray/5">
        <div className="container-page">
          <SectionTitle
            title="Partner Clients"
            subtitle="Trusted by leading door and window brands across China."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "Ai Shang Mei Doors & Windows",
              "Pearl Creation Exhibition",
              "Boss Doors & Windows",
              "Chibang Door & Window",
              "Alvi Doors & Windows",
              "Mei Jia Deschamps Doors & Windows",
              "To Still Sunshine Doors & Windows",
              "Yaffe Door & Window",
              "Yu Jingxuan Doors & Windows",
              "View Door & Window",
            ].map((client) => (
              <div
                key={client}
                className="bg-white border border-gray-100 rounded-lg p-5 flex items-center justify-center text-center hover:border-brand-blue/30 transition-colors"
              >
                <span className="text-brand-muted-dark text-sm">{client}</span>
              </div>
            ))}
          </div>

          <p className="text-brand-muted text-sm text-center mt-6">
            Client logo images — replace with actual logo PNG/SVG files
          </p>
        </div>
      </section>

      {/* Section 7: Association Memberships */}
      <section className="section bg-white">
        <div className="container-page">
          <SectionTitle
            title="Association Memberships"
            subtitle="Active members of professional glass and construction industry organizations."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Foshan Safety Production Association",
                desc: "Committed to workplace safety and industry best practices in glass manufacturing.",
              },
              {
                name: "China Door & Window Industry Forum",
                desc: "Member of the organizing committee for China's high-quality growth forum.",
              },
              {
                name: "China Architectural Glass & Industrial Glass Association",
                desc: "National association connecting us with industry standards and technology advancements.",
              },
              {
                name: "Guangdong Door & Window Association",
                desc: "Fostering collaboration with door and window manufacturers across the supply chain.",
              },
            ].map((org) => (
              <div key={org.name} className="card p-5 text-center">
                <div className="bg-brand-gray rounded-lg aspect-[3/2] flex items-center justify-center mb-4">
                  <span className="text-brand-muted text-xs">Certificate Image</span>
                </div>
                <h5 className="text-brand-dark text-sm mb-2">{org.name}</h5>
                <p className="text-brand-muted-dark text-xs">{org.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section className="section bg-brand-gray/5">
        <div className="container-page">
          <SectionTitle
            title="Frequently Asked Questions About BDGLASS"
            subtitle="Common questions from international buyers and project partners."
          />
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "Where is BDGLASS factory located?",
                answer:
                  "Our factory is located at No.23, North Garden Road, Shishan Town, Nanhai District, Foshan City, Guangdong Province, China. Foshan is widely recognized as one of China's largest glass manufacturing clusters, with a complete supply chain ecosystem from raw float glass to finished architectural glass products.",
              },
              {
                question: "What certifications does BDGLASS have?",
                answer:
                  "All our safety glass products (tempered glass, insulating glass, laminated glass) are certified by the Chinese Safety Glass Certification Center and carry the National Compulsory Product Certification (3C / CCC) mark. We also comply with EN 12150 (tempered glass), EN 1279 (insulating glass), and EN 14449 (laminated glass) European standards. Test reports and certificates are available for project orders.",
              },
              {
                question: "What is your production capacity and lead time?",
                answer:
                  "Our two production bases total 15,000 square meters with 5 production lines. Standard lead times are: tempered glass 7-15 working days, insulating glass 10-20 working days, laminated glass 10-20 working days, and craft glass 7-15 working days (samples: 7-10 days). Large project orders may require 25-30 working days. Rush orders are negotiable.",
              },
              {
                question: "Do you accept OEM and custom orders?",
                answer:
                  "Yes. Custom orders are our core business. We accept custom dimensions, thicknesses, colors, edge finishes, hole patterns, printed designs, and multi-layer combinations (tempered + laminated + insulating). Send us your specifications or design files (AI, PDF, DWG, DXF) and we will provide a detailed quotation within 24 hours.",
              },
              {
                question: "Which countries do you export to?",
                answer:
                  "We currently export to Australia, Africa, the Middle East, Cambodia, Vietnam, and other Southeast Asian countries. We provide professional export packaging (plywood crates with cork separators), full customs documentation, and flexible shipping terms including FOB Tianjin, CIF, and DDP. New markets are continuously being developed.",
              },
              {
                question: "How can I visit your factory?",
                answer:
                  "We welcome factory visits by appointment. Our factory is approximately 45 minutes by car from Guangzhou Baiyun International Airport (CAN). Please contact us via WhatsApp at +86 13786871098 or email info@bdglassfactory.com to schedule your visit. Airport pickup and hotel arrangements can be coordinated for serious buyers and project partners.",
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

      {/* Section 9: CTA */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="bg-brand-dark rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-white mb-4">Visit Our Factory or Request a Quote Today</h2>
            <p className="text-brand-muted text-body-lg max-w-2xl mx-auto mb-8">
              Whether you need a sample, a quotation, or a factory tour — our team is ready to help.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8 text-left">
              {[
                "Free quotation within 24 hours — Send your specs, get a detailed quote fast",
                "Sample production available — 7-10 day turnaround, cost credited to bulk order",
                "Factory visits welcome — 45 min from Guangzhou Baiyun Airport (CAN)",
                "Full export documentation — 3C certificates, test reports, customs paperwork",
                "Flexible shipping terms — FOB Tianjin, CIF, or DDP to your door",
                "OEM & custom orders — Dimensions, colors, finishes, and multi-layer combinations",
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
