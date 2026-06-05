import { products } from "@/data/products";
import { notFound } from "next/navigation";
import SectionTitle from "@/components/shared/SectionTitle";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Link from "next/link";
import { JsonLdBreadcrumb, JsonLdProduct, JsonLdProductFAQ } from "@/lib/json-ld";
import { siteConfig } from "@/data/site-config";
import type { Metadata } from "next";

// New components
import ProductGallery from "@/components/products/ProductGallery";
import SpecGrid from "@/components/products/SpecGrid";
import Accordion from "@/components/shared/Accordion";
import WhyChooseUs from "@/components/products/WhyChooseUs";
import CertBadges from "@/components/products/CertBadges";
import {
  ArrowRight,
  MessageCircle,
  FileText,
  Ruler,
  Palette,
  Shield,
  Truck,
} from "lucide-react";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Product Not Found" };

  const titleMap: Record<string, string> = {
    "tempered-glass":
      "China Tempered Glass Factory — 3-19mm Toughened Safety Glass | BDGLASS",
    "insulating-glass":
      "China Insulating Glass Factory — Low-E Double & Triple Glazed IGU | BDGLASS",
    "laminated-glass":
      "China Laminated Safety Glass Factory — PVB & SGP from Foshan | BDGLASS",
    "craft-glass":
      "China Custom Craft & Decorative Glass Factory — 8+ Techniques | BDGLASS",
    "curtain-wall-glass":
      "China Curtain Wall Glass Supplier — Low-E IGU & Facade Glass Factory | BDGLASS",
    "glass-railing-balustrade":
      "China Glass Railing & Balustrade Factory — Custom Tempered/Laminated | BDGLASS",
    "office-glass-partition":
      "China Office Glass Partition Factory — Frameless & Smart PDLC | BDGLASS",
    "glass-shower-enclosure":
      "China Glass Shower Enclosure Factory — Frameless & Sliding Doors | BDGLASS",
  };

  const descMap: Record<string, string> = {
    "tempered-glass":
      "China tempered glass factory — 3-19mm safety glass with 3C, EN 12150 & ASTM C1048 certs. Max 3300×8000mm. 4-5× stronger than ordinary glass. MOQ 50 sqm. Factory direct pricing. 7-15 day lead time. Request a quote within 24h.",
    "insulating-glass":
      "China insulating glass (IGU) factory — double & triple glazed units with Low-E, argon gas & warm-edge spacers. 12-52mm, max 2500×5000mm. U-value as low as 1.0 W/m²K. 3C/EN 1279 certified. 10-year seal warranty. MOQ 50 sqm. Quote in 24h.",
    "laminated-glass":
      "China laminated glass factory — PVB & SGP interlayers, 6.38-60mm, max 2500×6000mm. 99% UV blocking. Bullet-resistant & hurricane options. 3C/EN 14449 certified. MOQ 50 sqm. Factory direct pricing. Quote in 24h.",
    "craft-glass":
      "China custom craft & decorative glass factory — acid etched, frosted, silk screen, digital enamel, hot melting, carved, patterned & stained glass. 8+ techniques under one roof. Pantone matching ΔE≤2.0. 3-25mm, max 3300×12000mm. Samples in 7-10 days. Quote in 24h.",
    "curtain-wall-glass":
      "China curtain wall glass supplier — Low-E IGU, tempered laminated, reflective coated & spandrel panels for commercial facades. 15,000sqm Foshan factory. Largest project: 28,000sqm. Performance calculations & shop drawings included. Project quote in 24h.",
    "glass-railing-balustrade":
      "China glass railing & balustrade factory — 8-15mm tempered or laminated glass with 304/316 stainless hardware. Complete glass+hardware system supply. CNC drilled ±0.5mm. Installation drawings included. Export to 10+ countries. Quote in 24h.",
    "office-glass-partition":
      "China office glass partition factory — single-glazed, double-glazed, smart PDLC switchable & acoustic systems. ±1mm sizing. Frameless & framed. Up to 45 dB sound reduction. Global delivery. Quote in 24h.",
    "glass-shower-enclosure":
      "China glass shower enclosure factory — frameless, semi-frameless, sliding & hinged doors. 8-10mm tempered glass with CNC-drilled holes ±0.5mm. Easy-clean nano coating. 304 stainless hardware included. Hotel & residential export. Quote in 24h.",
  };

  const title = titleMap[slug] || `${product.name} - BDGLASS`;
  const description = descMap[slug] || product.description.slice(0, 160);

  return {
    title,
    description,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title,
      description,
      url: `https://${siteConfig.domain}/products/${product.slug}`,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const isTempered = slug === "tempered-glass";
  const isInsulating = slug === "insulating-glass";
  const isLaminated = slug === "laminated-glass";
  const isCraft = slug === "craft-glass";
  const isCurtainWall = slug === "curtain-wall-glass";
  const isRailing = slug === "glass-railing-balustrade";
  const isPartition = slug === "office-glass-partition";
  const isShower = slug === "glass-shower-enclosure";
  const hasCustomSeo = isTempered || isInsulating || isLaminated || isCraft || isCurtainWall || isRailing || isPartition || isShower;

  const h1Map: Record<string, string> = {
    "tempered-glass": "Tempered Glass — 3-19mm Safety Glass from China Factory",
    "insulating-glass": "Insulating Glass — Low-E Double & Triple Glazed Units from China Factory",
    "laminated-glass": "Laminated Glass — PVB/SGP Safety Glass from China Factory",
    "craft-glass": "Craft Glass — Custom Decorative & Patterned Glass from China Factory",
    "curtain-wall-glass": "Curtain Wall Glass — Engineered for Iconic Facades from China Factory",
    "glass-railing-balustrade": "Glass Railings & Balustrades — Safety with Open Views from China Factory",
    "office-glass-partition": "Office Glass Partitions — Frameless, Smart & Acoustic from China Factory",
    "glass-shower-enclosure": "Glass Shower Enclosures — Frameless & Semi-Frameless from China Factory",
  };

  const subMap: Record<string, string> = {
    "tempered-glass":
      "BDGLASS manufactures 3-19mm tempered safety glass (also called toughened glass) at our 15,000㎡ factory in Foshan, Guangdong, China. 4-5× stronger than ordinary annealed glass. 3C, EN 12150 & ASTM C1048 certified. Max panel size 3,300×8,000mm. Factory direct pricing with MOQ 50 sqm. Ships to 10+ countries.",
    "insulating-glass":
      "BDGLASS manufactures insulating glass units (IGU) — double & triple glazed with Low-E coating, argon gas fill, and warm-edge spacers — at our 15,000㎡ factory in Foshan, Guangdong, China. U-values as low as 1.0 W/m²K. 3C/EN 1279 certified. 10-year seal warranty. MOQ 50 sqm. Ships to 10+ countries.",
    "laminated-glass":
      "BDGLASS manufactures PVB and SGP laminated safety glass at our 15,000㎡ factory in Foshan, Guangdong, China. 6.38-60mm thickness, max 2500×6000mm. 99% UV blocking. Bullet-resistant (Level 1-3) and hurricane-rated options. 3C/EN 14449 certified. Factory direct pricing with MOQ 50 sqm. Ships to 10+ countries.",
    "craft-glass":
      "BDGLASS manufactures custom decorative glass with 8+ techniques at our 15,000㎡ factory in Foshan, Guangdong, China. Acid etched, frosted, silk screen, digital enamel, hot melting, carved, patterned & stained. Pantone color matching with ΔE ≤ 2.0. Free DFM feedback with design file review. Samples in 7-10 days. Ships to 10+ countries.",
    "curtain-wall-glass":
      "BDGLASS supplies curtain wall glass for commercial towers, hotels, and mixed-use developments at our 15,000㎡ factory in Foshan, Guangdong, China. Low-E IGU, reflective coated, spandrel panels, and structural SGP laminated fins. Shop drawings and performance calculations included. Largest project: 28,000 sqm. Ships to 10+ countries.",
    "glass-railing-balustrade":
      "BDGLASS supplies glass railing and balustrade systems from our 15,000㎡ factory in Foshan, Guangdong, China. 8-15mm tempered or laminated glass with 304/316 stainless hardware. Complete system supply with shop drawings and installation guidance. CNC drilled to ±0.5mm. Ships to 10+ countries.",
    "office-glass-partition":
      "BDGLASS manufactures custom office glass partitions at our 15,000㎡ factory in Foshan, Guangdong, China. Single-glazed frameless, double-glazed framed, smart PDLC switchable, and acoustic systems. ±1mm dimensional accuracy. Sound reduction up to 45 dB. Demountable & reusable options. Global delivery.",
    "glass-shower-enclosure":
      "BDGLASS manufactures custom glass shower enclosures at our 15,000㎡ factory in Foshan, Guangdong, China. Frameless, semi-frameless, sliding, and hinged doors. 8-10mm tempered glass with CNC-drilled holes ±0.5mm. Easy-clean nano coating available. 304 stainless hardware included. Ships to 10+ countries.",
  };

  const ctaMap: Record<string, string> = {
    "tempered-glass": "Request a Factory Quote",
    "insulating-glass": "Request a Factory Quote",
    "laminated-glass": "Request a Factory Quote",
    "craft-glass": "Request a Factory Quote",
    "curtain-wall-glass": "Request a Project Quote",
    "glass-railing-balustrade": "Request a Factory Quote",
    "office-glass-partition": "Request a Factory Quote",
    "glass-shower-enclosure": "Request a Factory Quote",
  };

  const galleryImages = product.galleryImages && product.galleryImages.length > 0
    ? product.galleryImages
    : [product.imagePath];

  // Application icons mapping
  const appIcons = [Shield, Ruler, Palette, Truck, FileText, MessageCircle];

  return (
    <div>
      {/* ===== HERO SECTION ===== */}
      <div className="bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }} />
        </div>
        <div className="container-page py-20 md:py-28 relative">
          <div className="max-w-3xl">
            <p className="text-brand-blue text-sm font-semibold uppercase tracking-wider mb-4">
              BDGLASS Factory Direct
            </p>
            <h1 className="text-white mb-6">
              {hasCustomSeo ? h1Map[slug] : product.name}
            </h1>
            <p className="text-brand-muted text-body-lg max-w-2xl mb-8">
              {hasCustomSeo ? subMap[slug] : product.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                {ctaMap[slug] || "Request a Quote"}
                <ArrowRight size={18} />
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline border-brand-green text-brand-green inline-flex items-center gap-2"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ===== BREADCRUMB ===== */}
      <div className="container-page py-4 border-b border-gray-100">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: product.name },
          ]}
        />
        <JsonLdBreadcrumb
          items={[
            { name: "Home", item: "/" },
            { name: "Products", item: "/products" },
            { name: product.name },
          ]}
        />
      </div>

      {/* ===== PRODUCT OVERVIEW ===== */}
      <section className="section pb-16">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left: Image Gallery */}
            <div>
              <ProductGallery images={galleryImages} alt={product.name} />
            </div>

            {/* Right: Product Info */}
            <div className="flex flex-col justify-center">
              <p className="text-brand-blue text-sm font-semibold uppercase tracking-wider mb-3">
                Product Overview
              </p>
              <h2 className="text-brand-dark mb-4">{product.name}</h2>
              <p className="text-brand-muted-dark text-body-lg leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Quick Specs Row */}
              <div className="flex flex-wrap gap-3 mb-8">
                {product.specs.slice(0, 3).map((spec, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 border border-gray-100 rounded-lg px-4 py-2.5"
                  >
                    <p className="text-caption text-brand-muted-dark uppercase">{spec.label}</p>
                    <p className="text-brand-dark font-semibold text-sm">{spec.value}</p>
                  </div>
                ))}
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-brand-dark font-semibold mb-3">Key Features</h3>
                <ul className="space-y-3">
                  {product.features.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-brand-muted-dark text-body-sm"
                    >
                      <span className="shrink-0 w-5 h-5 rounded-full bg-brand-blue/10 flex items-center justify-center mt-0.5">
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="#00A3E0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  {ctaMap[slug] || "Inquiry This Product"}
                  <ArrowRight size={16} />
                </Link>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline border-brand-green text-brand-green inline-flex items-center gap-2"
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMPARISON TABLE ===== */}
      {product.comparisonTable && (
        <section className="section bg-gray-50/50">
          <div className="container-page">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <p className="text-brand-blue text-sm font-semibold uppercase tracking-wider mb-3">
                Material Comparison
              </p>
              <h2 className="text-brand-dark mb-4">
                {product.comparisonTable.headers[1]} vs {product.comparisonTable.headers[2]}
              </h2>
              <p className="text-brand-muted-dark text-body-lg">
                Understanding the key differences helps you specify the right safety glass for your project.
              </p>
            </div>
            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-xl overflow-hidden border border-gray-100">
                <thead>
                  <tr className="bg-brand-dark text-white">
                    {product.comparisonTable.headers.map((h, i) => (
                      <th key={i} className={`text-left p-4 font-semibold text-sm ${i === 0 ? "min-w-[140px]" : ""}`}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {product.comparisonTable.rows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                      <td className="p-4 text-brand-dark font-medium text-sm border-b border-gray-100">{row.property}</td>
                      <td className="p-4 text-brand-muted-dark text-sm border-b border-gray-100">{row.left}</td>
                      <td className="p-4 text-brand-muted-dark text-sm border-b border-gray-100">{row.right}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="max-w-3xl mx-auto text-center text-brand-dark font-medium mt-6 text-body-lg">
              {product.comparisonTable.bottomLine}
            </p>
          </div>
        </section>
      )}

      {/* ===== LONG DESCRIPTION ===== */}
      {product.longDescription && (
        <section className="section bg-gray-50/50">
          <div className="container-page">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-brand-blue text-sm font-semibold uppercase tracking-wider mb-3">
                Manufacturing & Quality
              </p>
              <h2 className="text-brand-dark mb-4">
                How BDGLASS Manufactures {product.name}
              </h2>
              {isTempered && (
                <p className="text-brand-muted-dark text-body-sm">
                  From float glass cutting to final quality inspection — our Foshan factory produces tempered safety glass with SouthTech furnaces and strict 3C / EN 12150 compliance.
                </p>
              )}
              {isInsulating && (
                <p className="text-brand-muted-dark text-body-sm">
                  From glass cutting and edge polishing to automated IGU assembly with butyl primary seal and silicone secondary seal — our Foshan factory produces insulating glass units with controlled humidity and strict EN 1279 compliance.
                </p>
              )}
              {isLaminated && (
                <p className="text-brand-muted-dark text-body-sm">
                  From glass cutting and edge preparation to autoclave lamination under heat and pressure — our Foshan factory produces PVB and SGP laminated glass with precision interlayer bonding and strict EN 14449 compliance.
                </p>
              )}
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-10">
                <div className="space-y-5 text-brand-muted-dark leading-relaxed">
                  {product.longDescription.split("\n\n").map((para, i) => (
                    <p key={i} className="text-body-lg">{para}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===== DECISION GUIDE ===== */}
      {product.decisionGuide && (
        <section className="section">
          <div className="container-page">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-brand-blue text-sm font-semibold uppercase tracking-wider mb-3">
                Buying Guide
              </p>
              <h2 className="text-brand-dark mb-4">
                How to Choose the Right {product.name} for Your Project
              </h2>
              <p className="text-brand-muted-dark text-body-lg">
                A practical guide by buyer type — from architects specifying facades to builders ordering shower enclosures.
              </p>
            </div>
            <div className="max-w-5xl mx-auto space-y-8">
              {product.decisionGuide.sections.map((section, si) => (
                <div key={si} className="bg-white rounded-xl border border-gray-100 p-6 md:p-8">
                  <h3 className="text-brand-dark text-lg font-semibold mb-5 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-brand-blue/10 text-brand-blue text-sm font-bold flex items-center justify-center shrink-0">
                      {si + 1}
                    </span>
                    {section.heading}
                  </h3>
                  <div className="space-y-4">
                    {section.items.map((item, ii) => (
                      <div key={ii} className="flex items-start gap-3 pl-10">
                        <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-brand-blue" />
                        <div>
                          <span className="text-brand-dark font-semibold text-sm">{item.label}: </span>
                          <span className="text-brand-muted-dark text-body-sm">{item.content}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== SPECIFICATIONS ===== */}
      <section className="section">
        <div className="container-page">
          <SectionTitle
            title={`${product.name} Specifications`}
            subtitle="Detailed technical parameters for project specification and procurement."
          />
          <div className="max-w-4xl mx-auto">
            <SpecGrid specs={product.specs} />
          </div>
        </div>
      </section>

      {/* ===== PRICE FACTORS ===== */}
      {product.priceFactors && (
        <section className="section">
          <div className="container-page">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-brand-blue text-sm font-semibold uppercase tracking-wider mb-3">
                Pricing Guide
              </p>
              <h2 className="text-brand-dark mb-4">
                {product.name} Price Factors: What Affects Your Quote
              </h2>
              <p className="text-brand-muted-dark text-body-lg">
                Understanding these 8 factors helps you budget accurately and avoid surprises when sourcing tempered glass from China.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.priceFactors.map((factor, i) => (
                  <div key={i} className="bg-white rounded-xl border border-gray-100 p-5 hover:border-brand-blue/20 hover:shadow-sm transition-all">
                    <div className="flex items-start gap-3">
                      <span className="shrink-0 w-7 h-7 rounded-full bg-brand-blue text-white text-xs font-bold flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="text-brand-dark font-semibold text-sm mb-1.5">{factor.name}</h3>
                        <p className="text-brand-muted-dark text-body-sm leading-relaxed">{factor.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-brand-muted-dark text-body-sm mt-6">
                Contact us with your specifications for an exact factory-direct quote — typical response within 24 hours.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ===== APPLICATIONS ===== */}
      <section className="section bg-gray-50/50">
        <div className="container-page">
          <SectionTitle
            title={`${product.name} Applications`}
            subtitle={isTempered
              ? "From building facades and windows to shower enclosures and furniture — tempered glass is the safety standard worldwide."
              : isInsulating
              ? "From curtain walls and passive houses to cold storage and soundproof studios — insulating glass is the foundation of energy-efficient construction."
              : isLaminated
              ? "From hurricane-resistant windows and bank security glazing to glass floors and soundproof partitions — laminated glass delivers safety, security, and acoustic performance."
              : "Widely used in construction, home decoration, and commercial projects worldwide."}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {product.applications.map((app, i) => {
              const Icon = appIcons[i % appIcons.length];
              return (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-gray-100 p-6 hover:border-brand-blue/20 hover:shadow-md transition-all group"
                >
                  <div className="w-11 h-11 rounded-lg bg-brand-blue/10 flex items-center justify-center mb-4 group-hover:bg-brand-blue/15 transition-colors">
                    <Icon size={22} className="text-brand-blue" />
                  </div>
                  <h3 className="text-brand-dark mb-2">{app.title}</h3>
                  <p className="text-brand-muted-dark text-body-sm leading-relaxed">
                    {app.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CASE STUDIES ===== */}
      {product.caseStudies && (
        <section className="section bg-brand-dark relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }} />
          </div>
          <div className="container-page relative">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-brand-blue text-sm font-semibold uppercase tracking-wider mb-3">
                Project Experience
              </p>
              <h2 className="text-white mb-4">
                {product.name} Projects We've Delivered
              </h2>
              <p className="text-brand-muted text-body-lg">
                From high-rise curtain walls in Shenzhen to hotel shower enclosures in Cambodia — our tempered glass is trusted across continents.
              </p>
            </div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5">
              {product.caseStudies.map((cs, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:border-brand-blue/30 transition-all">
                  <p className="text-brand-blue text-2xl font-bold mb-2">{cs.area}</p>
                  <p className="text-white font-semibold mb-2">{cs.project}</p>
                  <p className="text-brand-muted text-sm leading-relaxed">{cs.application}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/projects" className="btn-outline border-brand-blue text-brand-blue inline-flex items-center gap-2">
                View All Projects
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ===== WHY CHOOSE BDGLASS ===== */}
      <section className="section">
        <div className="container-page">
          <SectionTitle
            title="Why International Buyers Choose BDGLASS"
            subtitle="15,000㎡ factory in Foshan, Guangdong, China. Direct export to 10+ countries. 3C, EN & ASTM certified production."
          />
          <WhyChooseUs />
        </div>
      </section>

      {/* ===== CERTIFICATIONS ===== */}
      <section className="section bg-gray-50/50">
        <div className="container-page">
          <SectionTitle
            title="Certifications & Quality Assurance"
            subtitle="Every product is tested and certified before leaving our factory."
          />
          <CertBadges />
        </div>
      </section>

      {/* ===== FAQ ===== */}
      {product.faq && product.faq.length > 0 && (
        <section className="section">
          <div className="container-page">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-brand-blue text-sm font-semibold uppercase tracking-wider mb-3">
                  Support
                </p>
                <h2 className="text-brand-dark mb-4">
                  Frequently Asked Questions About {product.name}
                </h2>
                <p className="text-brand-muted-dark text-body-lg">
                  Common questions from international buyers about {product.name.toLowerCase()}. Straightforward answers to help you source with confidence.
                </p>
              </div>
              <Accordion items={product.faq} />
              <JsonLdProductFAQ items={product.faq} />
            </div>
          </div>
        </section>
      )}

      {/* ===== RELATED PRODUCTS ===== */}
      {product.relatedProducts && product.relatedProducts.length > 0 && (
        <section className="section bg-gray-50/50">
          <div className="container-page">
            <SectionTitle
              title="You May Also Need"
              subtitle={isTempered
                ? "Complete your project with insulating, laminated, and curtain wall glass — all from our Foshan factory."
                : isInsulating
                ? "Pair your IGU with tempered safety glass, laminated acoustic panes, or complete curtain wall systems — all from our Foshan factory."
                : isLaminated
                ? "Combine laminated glass with tempered safety panes, decorative interlayers, or insulating glass units — all from our Foshan factory."
                : "Explore related glass products for your project."}
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {product.relatedProducts.map((rp, i) => (
                <Link
                  key={i}
                  href={`/products/${rp.slug}`}
                  className="bg-white rounded-xl border border-gray-100 p-6 hover:border-brand-blue/30 hover:shadow-md transition-all group"
                >
                  <h3 className="text-brand-dark mb-2 group-hover:text-brand-blue transition-colors">
                    {rp.name}
                  </h3>
                  <p className="text-brand-muted-dark text-body-sm leading-relaxed mb-4">
                    {rp.description}
                  </p>
                  <span className="text-brand-blue text-sm font-semibold inline-flex items-center gap-1">
                    Learn More
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== FINAL CTA ===== */}
      <section className="section bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }} />
        </div>
        <div className="container-page text-center relative">
          <h2 className="text-white mb-4">
            {isTempered
              ? "Ready to Source Tempered Glass from Our China Factory?"
              : isInsulating
              ? "Ready to Source Insulating Glass (IGU) from Our China Factory?"
              : isLaminated
              ? "Ready to Source Laminated Glass from Our China Factory?"
              : isCraft
              ? "Bring Your Decorative Glass Vision to Life"
              : isCurtainWall
              ? "Ready to Specify Curtain Wall Glass for Your Next Project?"
              : isRailing
              ? "Ready to Order Glass Railings & Balustrades from Our Factory?"
              : isPartition
              ? "Ready to Transform Your Office with Glass Partitions?"
              : isShower
              ? "Ready to Source Shower Enclosure Glass from Our Factory?"
              : `Need ${product.name} for Your Project?`}
          </h2>
          <p className="text-brand-muted text-body-lg max-w-2xl mx-auto mb-8">
            {isInsulating
              ? "Get a competitive factory quote within 24 hours. Send us your glass configuration, thickness, dimensions, quantity, and destination — our experts will recommend the best insulating glass solution for your project."
              : isLaminated
              ? "Get a competitive factory quote within 24 hours. Send us your glass type, thickness, interlayer specification, quantity, and application — our experts will recommend the best laminated glass solution for your project."
              : isCraft
              ? "From concept to finished panel, our design and production teams work with you every step of the way. Send us your design files, dimensions, quantity, and application — our experts will recommend the best decorative glass solution."
              : isCurtainWall
              ? "Get a competitive project quote with performance calculations and shop drawings. Send us your facade specifications, glass configuration, panel sizes, and project location — our facade experts will recommend the optimal curtain wall glass solution."
              : isRailing
              ? "Get a competitive factory quote within 24 hours. Send us your railing dimensions, glass thickness, hardware type, and project location — our experts will recommend the best glass railing system for your project."
              : isPartition
              ? "Get a competitive factory quote within 24 hours. Send us your opening dimensions, partition type, glass finish, and project location — our experts will recommend the best office partition solution."
              : isShower
              ? "Get a competitive factory quote within 24 hours. Send us your enclosure type, glass thickness, dimensions, and hardware requirements — our experts will recommend the best shower glass solution for your project."
              : "Get a competitive factory quote within 24 hours. Send us your glass type, thickness, size, quantity, and application — our experts will recommend the best solution."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2"
            >
              {ctaMap[slug] || "Get a Quote"}
              <ArrowRight size={18} />
            </Link>
            <a
              href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline border-brand-green text-brand-green text-lg px-8 py-4 inline-flex items-center gap-2"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <JsonLdProduct
        name={product.name}
        description={product.description.slice(0, 200)}
        imageUrl={product.imagePath}
        sku={`BDGLASS-${product.slug}`}
        offers={isTempered ? { minThickness: "3mm", maxThickness: "19mm", maxSize: "3300×8000mm", moq: "50 sqm", leadTime: "7-15 working days" } : isInsulating ? { minThickness: "12mm", maxThickness: "52mm", maxSize: "2500×5000mm", moq: "50 sqm", leadTime: "10-20 working days" } : isLaminated ? { minThickness: "6.38mm", maxThickness: "60mm", maxSize: "2500×6000mm", moq: "50 sqm", leadTime: "10-20 working days" } : isCraft ? { minThickness: "3mm", maxThickness: "25mm", maxSize: "3300×12000mm", moq: "Project-based", leadTime: "Samples 7-10 days, bulk 3-4 weeks" } : isCurtainWall ? { minThickness: "6mm", maxThickness: "15mm+", maxSize: "3300×5000mm", moq: "Project-based", leadTime: "15-30 working days" } : isRailing ? { minThickness: "10mm", maxThickness: "15mm", maxSize: "Custom (max panel 1500mm wide)", moq: "20 sqm", leadTime: "10-15 working days" } : isPartition ? { minThickness: "8mm", maxThickness: "12mm", maxSize: "Custom (max height 4000mm)", moq: "Project-based", leadTime: "10-15 working days" } : isShower ? { minThickness: "8mm", maxThickness: "10mm", maxSize: "Custom (max door 1000mm wide)", moq: "50 panels", leadTime: "10-15 working days" } : undefined}
      />
    </div>
  );
}
