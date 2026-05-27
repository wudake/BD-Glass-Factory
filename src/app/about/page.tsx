import Breadcrumb from "@/components/shared/Breadcrumb";
import SectionTitle from "@/components/shared/SectionTitle";
import { Check, MapPin, Globe, Building2 } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { generatePageMeta } from "@/lib/metadata";
import { JsonLdBreadcrumb, JsonLdOrganization } from "@/lib/json-ld";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMeta({
  title: "About BDGLASS - Foshan Glass Factory Since 2018",
  description:
    "Learn about Foshan Bodian Glass Co., LTD — a professional China glass factory established in 2018. 15,000sqm production base, 80+ team, advanced equipment, 3C certified.",
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
          <h1 className="text-white mb-4">About BDGLASS</h1>
          <p className="text-brand-muted text-body-lg max-w-xl mx-auto">
            A professional China glass factory specializing in architectural and decorative glass processing
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
                  Foshan Bodian Glass Co., Ltd. was established in 2018, located in Shishan Town,
                  Nanhai District, Foshan City, Guangdong Province — the heart of China&apos;s glass
                  manufacturing industry.
                </p>
                <p>
                  In the early days of our company, we introduced a series of advanced glass processing
                  equipment, such as tempering furnace, edge grinder, drilling machine, hollow wire,
                  etc., with all-round, large production capacity, flexible and changeable service
                  capacity.
                </p>
                <p>
                  The company focuses on the production and processing of insulating glass, tempered
                  glass, laminated glass and craft glass. The products are widely used in home decoration,
                  construction and other fields.
                </p>
                <p>
                  All glass products produced have passed the Chinese Safety Glass Certification Center
                  inspection and obtained &quot;National Compulsory Product Certification&quot; (3C)
                  certification. Bodian glass not only serves the domestic market, but also actively
                  expands the international market, providing one-stop glass solutions for global customers.
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
                  "SouthTech Tempering Furnace — High-precision glass tempering",
                  "5 Hollow Glass Production Lines — Automated IGU manufacturing",
                  "CNC Bending Machine — Precision curved glass processing",
                  "High Precision CNC Cutting Machine — Accurate sheet cutting",
                  "Automatic Edge Grinding Machine — Smooth, polished edges",
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
                  { value: "80+", label: "Team Members" },
                  { value: "29", label: "Average Age" },
                  { value: "2", label: "Production Bases" },
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
                desc: "The company has a solid foundation in the domestic market. Products are exported to Australia, Africa, the Middle East, Cambodia, Vietnam and other countries.",
              },
              {
                icon: Building2,
                title: "Offline to Online",
                desc: "With perfect offline sales network and growing online platforms, we expand sales channels through the Internet and provide convenient online consultation.",
              },
              {
                icon: MapPin,
                title: "Home Decoration to Engineering",
                desc: "From customized door and window glass to large-scale engineering projects including curtain walls, glass guardrails, handrails, and decorative glass.",
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
    </div>
  );
}
