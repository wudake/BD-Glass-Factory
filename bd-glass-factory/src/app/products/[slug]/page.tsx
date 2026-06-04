import { products } from "@/data/products";
import { notFound } from "next/navigation";
import SectionTitle from "@/components/shared/SectionTitle";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Link from "next/link";
import { JsonLdBreadcrumb, JsonLdProduct } from "@/lib/json-ld";
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
      "Tempered Glass Manufacturer China | 3-19mm Safety Glass Factory | BDGLASS",
    "insulating-glass":
      "Insulating Glass Manufacturer China | Low-E Double Glazed IGU | BDGLASS",
    "laminated-glass":
      "Laminated Glass Manufacturer China | PVB/SGP Safety Glass | BDGLASS",
    "craft-glass":
      "Craft Glass Manufacturer China | Decorative & Patterned Glass | BDGLASS",
    "curtain-wall-glass":
      "Curtain Wall Glass Supplier China | Facade Glass Manufacturer | BDGLASS",
    "glass-railing-balustrade":
      "Glass Railing & Stair Balustrade Manufacturer China | Custom Supplier | BDGLASS",
    "office-glass-partition":
      "Office Glass Partition Manufacturer China | Custom Supplier | BDGLASS",
    "glass-shower-enclosure":
      "Glass Shower Enclosure Manufacturer China | Custom Supplier | BDGLASS",
  };

  const descMap: Record<string, string> = {
    "tempered-glass":
      "BDGLASS is a professional tempered glass manufacturer in China. We supply 3-19mm tempered safety glass with 3C/EN 12150 certification. Max size 3300×8000mm. Factory direct pricing. Get a quote today.",
    "insulating-glass":
      "BDGLASS manufactures insulating glass (IGU) in China. Double & triple glazed units with Low-E coating and argon gas fill. 12-52mm thickness, up to 2500×5000mm. 3C/EN 1279 certified. 10-year warranty.",
    "laminated-glass":
      "BDGLASS manufactures PVB and SGP laminated glass in China. 6.38-60mm thickness, max 2500×6000mm. 99% UV blocking, bullet-resistant options. 3C/EN 14449 certified. Factory direct pricing.",
    "craft-glass":
      "BDGLASS is a custom craft glass manufacturer in China. Acid etched, frosted, silk screen, digital enamel, hot melting, carved, patterned & stained glass. Pantone matching. Factory direct for hotels, churches & villas.",
    "curtain-wall-glass":
      "BDGLASS supplies curtain wall glass for commercial buildings: Low-E IGU, tempered laminated, reflective coated. Foshan factory, 15,000sqm capacity. Get project quote.",
    "glass-railing-balustrade":
      "Custom glass railings and stair balustrades from BDGLASS, Foshan. 8–15mm tempered or laminated glass with 304/316 stainless hardware. Export to 10+ countries.",
    "office-glass-partition":
      "BDGLASS manufactures custom office glass partitions: tempered, frosted, smart switchable glass. Frameless and framed systems. Foshan factory, global delivery.",
    "glass-shower-enclosure":
      "BDGLASS manufactures custom glass shower enclosures: frameless, semi-frameless, sliding, and hinged doors. 8–10mm tempered glass. Export to hotels and residential projects.",
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
      "BDGLASS manufactures 3-19mm tempered safety glass (toughened glass) at our 15,000㎡ factory in Foshan, China. 4-5× stronger than ordinary glass. 3C certified. Factory direct pricing.",
    "insulating-glass":
      "BDGLASS manufactures insulating glass units (IGU) with Low-E coating and argon gas fill at our 15,000㎡ factory in Foshan, China. 12-52mm thickness. 3C/EN 1279 certified. 10-year seal warranty.",
    "laminated-glass":
      "BDGLASS manufactures PVB and SGP laminated glass at our 15,000㎡ factory in Foshan, China. 6.38-60mm thickness. 99% UV blocking. 3C/EN 14449 certified. Bullet-resistant options available.",
    "craft-glass":
      "BDGLASS manufactures custom decorative glass with 8+ techniques at our China factory. Acid etched, frosted, silk screen, digital enamel, hot melting, carved, patterned & stained. Pantone matching. Free DFM feedback.",
    "curtain-wall-glass":
      "BDGLASS supplies curtain wall glass for commercial buildings at our 15,000㎡ factory in Foshan, China. Low-E IGU, reflective coated, spandrel panels, and structural glass fins. Project support with calculations and drawings.",
    "glass-railing-balustrade":
      "BDGLASS supplies glass railings and stair balustrades from our Foshan factory. 8–15mm tempered or laminated glass with 304/316 stainless hardware. Complete system supply with installation drawings.",
    "office-glass-partition":
      "BDGLASS manufactures custom office glass partitions at our Foshan factory. Single-glazed, double-glazed, smart PDLC, and acoustic systems. Exact sizing to ±1mm. Global delivery.",
    "glass-shower-enclosure":
      "BDGLASS manufactures custom glass shower enclosures at our Foshan factory. Frameless, semi-frameless, sliding, and hinged doors. 8–10mm tempered glass with precision-drilled holes.",
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
                <h5 className="text-brand-dark font-semibold mb-3">Key Features</h5>
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

      {/* ===== LONG DESCRIPTION ===== */}
      {product.longDescription && (
        <section className="section bg-gray-50/50">
          <div className="container-page">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-brand-blue text-sm font-semibold uppercase tracking-wider mb-3">
                Factory Details
              </p>
              <h2 className="text-brand-dark mb-4">
                About Our {product.name}
              </h2>
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

      {/* ===== APPLICATIONS ===== */}
      <section className="section bg-gray-50/50">
        <div className="container-page">
          <SectionTitle
            title={`${product.name} Applications`}
            subtitle="Widely used in construction, home decoration, and commercial projects worldwide."
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
                  <h5 className="text-brand-dark mb-2">{app.title}</h5>
                  <p className="text-brand-muted-dark text-body-sm leading-relaxed">
                    {app.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE BDGLASS ===== */}
      <section className="section">
        <div className="container-page">
          <SectionTitle
            title="Why Buyers Choose BDGLASS"
            subtitle="15,000㎡ factory in Foshan, China. Direct export to 10+ countries."
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
                  Frequently Asked Questions
                </h2>
                <p className="text-brand-muted-dark text-body-lg">
                  Common questions from international buyers about {product.name.toLowerCase()}.
                </p>
              </div>
              <Accordion items={product.faq} />
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
              subtitle="Explore related glass products for your project."
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {product.relatedProducts.map((rp, i) => (
                <Link
                  key={i}
                  href={`/products/${rp.slug}`}
                  className="bg-white rounded-xl border border-gray-100 p-6 hover:border-brand-blue/30 hover:shadow-md transition-all group"
                >
                  <h5 className="text-brand-dark mb-2 group-hover:text-brand-blue transition-colors">
                    {rp.name}
                  </h5>
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
      />
    </div>
  );
}
