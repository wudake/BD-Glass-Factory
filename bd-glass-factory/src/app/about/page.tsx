import Breadcrumb from "@/components/shared/Breadcrumb";
import SectionTitle from "@/components/shared/SectionTitle";
import { Check, MapPin, Globe, Building2 } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { generatePageMeta } from "@/lib/metadata";
import { JsonLdBreadcrumb, JsonLdLocalBusiness, JsonLdFAQPage } from "@/lib/json-ld";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMeta({
  title: "About BDGLASS | Glass Manufacturer China Since 2019 | Foshan Factory",
  description:
    "Foshan Bodian Glass Co., LTD — China glass factory since 2019. 15,000sqm, 80+ team, 3C certified. Tempered, insulating, laminated & craft glass. Export to 10+ countries.",
  path: "/about",
});

const faqData = [
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
];

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
        <JsonLdLocalBusiness />
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
                  Foshan, Guangdong, China. Established in 2019, we have grown into a modern glass factory
                  with two production bases totaling 15,000 square meters and 80+ team members.
                </p>
                <p>
                  We specialize in tempered glass (3–19mm), insulating glass (12–52mm IGU), laminated glass
                  (6.38–60mm), and craft glass — serving residential, commercial, and architectural
                  curtain wall projects. Our facility features a SouthTech tempering furnace, 5 automated
                  IGU lines, CNC cutting, and edge grinding machines.
                </p>
                <p>
                  All products use premium Xinyi and CSG float glass and carry 3C (CCC) certification. We
                  export to Australia, Africa, Middle East, Cambodia, Vietnam, and Southeast Asia with
                  professional packaging and full documentation. Factory visits and custom inquiries are
                  welcome.
                </p>
              </div>
            </div>
            <div className="relative rounded-xl aspect-[3/2] overflow-hidden">
              <img
                src="/images/about/Foshan%20Bodian%20Glass.jpg"
                alt="Foshan Bodian Glass factory building and production facility"
                className="w-full h-full object-cover"
                loading="lazy" />
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
            <div className="grid grid-cols-2 gap-3 order-2 lg:order-1">
              {[
                {
                  src: "/images/about/Production-Base/Glass%20tempering%20furnace.jpg",
                  label: "Glass Tempering Furnace",
                },
                {
                  src: "/images/about/Production-Base/Insulating%20glass%20processing%20machine.jpg",
                  label: "Insulating Glass Processing",
                },
                {
                  src: "/images/about/Production-Base/Glass%20cutting%20machine.jpg",
                  label: "CNC Cutting Machine",
                },
                {
                  src: "/images/about/Production-Base/Cleaning%20and%20edge%20grinding%20machine.jpg",
                  label: "Cleaning & Edge Grinding",
                },
                {
                  src: "/images/about/Production-Base/Automated%20glass%20cleaning%20machine.jpg",
                  label: "Automated Cleaning",
                },
                {
                  src: "/images/about/Production-Base/Injection%20glue%20machine.jpg",
                  label: "Injection Glue Machine",
                },
              ].map((img) => (
                <div key={img.src} className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-full object-cover"
                loading="lazy" />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs py-1.5 px-2 text-center font-medium">
                    {img.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-brand-muted-dark leading-relaxed mb-6">
                Bodian Glass has two production bases equipped with advanced production equipment. These
                modern facilities ensure that the company can efficiently and stably produce high-quality
                glass products that meet international standards.
              </p>

              <h3 className="text-brand-dark font-semibold mb-4">Core Equipment</h3>
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
                <h3 className="text-brand-dark mb-1">{item.title}</h3>
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

            <div className="relative rounded-xl aspect-[4/3] overflow-hidden">
              <img
                src="/images/about/Team%20Photo.jpg"
                alt="BDGLASS team photo"
                className="w-full h-full object-cover"
                loading="lazy" />
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
                <h3 className="text-brand-dark mb-3">{item.title}</h3>
                <p className="text-brand-muted-dark text-body-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Amazing Clients */}
      <section className="section bg-brand-gray/5">
        <div className="container-page">
          <SectionTitle
            title="Amazing Clients"
            subtitle="Proudly supplying glass to leading door, window and construction brands across China."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Derchi",
                domain: "derchiwindow.com",
                href: "https://www.derchiwindow.com/",
                image: "/images/about/clients/derchi.jpg",
              },
              {
                name: "Vinco",
                domain: "vincowindow.com",
                href: "https://www.vincowindow.com/",
                image: "/images/about/clients/vincowindow.jpg",
              },
              {
                name: "Smart Alwew",
                domain: "smart-alwew.com",
                href: "https://www.smart-alwew.com/",
                image: "/images/about/clients/smart-alwew.jpg",
              },
              {
                name: "Boswindor",
                domain: "boswindor.com",
                href: "https://boswindor.com/",
                image: "/images/about/clients/boswindor.jpg",
              },
              {
                name: "George Buildings",
                domain: "georgebuildings.com",
                href: "https://georgebuildings.com/",
                image: "/images/about/clients/georgebuildings.jpg",
              },
              {
                name: "Forge",
                domain: "forgewindow.com",
                href: "https://www.forgewindow.com/",
                image: "/images/about/clients/forgewindow.jpg",
              },
            ].map((client) => (
              <a
                key={client.name}
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md hover:border-brand-blue/30 transition-all group"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={client.image}
                    alt={`${client.name} website banner`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy" />
                </div>
                <div className="p-5 text-center">
                  <span className="text-brand-dark font-semibold mb-1 group-hover:text-brand-blue transition-colors block">
                    {client.name}
                  </span>
                  <p className="text-brand-muted text-xs">{client.domain}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Founder */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-brand-blue text-sm uppercase tracking-wider mb-4 font-semibold">
                Leadership & Vision
              </p>
              <h2 className="text-brand-dark mb-6">Meet Lian.Guo — Founder of BDGLASS</h2>
              <div className="space-y-4 text-brand-muted-dark leading-relaxed">
                <p>
                  BDGLASS was founded in 2019 by Ms. Lian.Guo (郭女士) with a clear vision: to build
                  a modern glass manufacturing enterprise that combines advanced technology with
                  uncompromising quality. Starting from a modest glass processing workshop, Lian.Guo
                  led the company through rapid growth, establishing two production bases and
                  expanding from domestic supply to international export markets.
                </p>
                <p>
                  With a hands-on approach to production and deep expertise in architectural glass
                  solutions, Lian.Guo has built a team of 80+ professionals who share the same
                  commitment to precision, innovation, and customer satisfaction. Under her
                  leadership, BDGLASS has secured partnerships with leading door and window brands
                  across China and established a growing presence in Australia, Africa, the Middle
                  East, and Southeast Asia.
                </p>
                <p>
                  The core philosophy is simple: every piece of glass that leaves the factory must
                  meet the highest standards — because our clients&apos; projects depend on it.
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden max-w-md mx-auto lg:max-w-none">
              <img
                src="/images/about/Factory-Founder-Miss-Guo.png"
                alt="Lian.Guo, founder of BDGLASS"
                className="w-full h-auto object-cover rounded-xl"
                width="505"
                height="898"
                loading="lazy"

              />
            </div>
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
            {faqData.map((item, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-lg p-5 bg-white"
              >
                <h3 className="text-brand-dark mb-2 text-lg">{item.question}</h3>
                <p className="text-brand-muted-dark text-body-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
          <JsonLdFAQPage items={faqData} />
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
