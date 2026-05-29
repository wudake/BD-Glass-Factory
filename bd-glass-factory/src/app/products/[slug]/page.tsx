import { products } from "@/data/products";
import { notFound } from "next/navigation";
import SectionTitle from "@/components/shared/SectionTitle";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Link from "next/link";
import { JsonLdBreadcrumb, JsonLdProduct } from "@/lib/json-ld";
import { siteConfig } from "@/data/site-config";
import type { Metadata } from "next";

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
  const hasCustomSeo = isTempered || isInsulating || isLaminated || isCraft;

  const h1Map: Record<string, string> = {
    "tempered-glass": "Tempered Glass — 3-19mm Safety Glass from China Factory",
    "insulating-glass": "Insulating Glass — Low-E Double & Triple Glazed Units from China Factory",
    "laminated-glass": "Laminated Glass — PVB/SGP Safety Glass from China Factory",
    "craft-glass": "Craft Glass — Custom Decorative & Patterned Glass from China Factory",
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
  };

  const ctaMap: Record<string, string> = {
    "tempered-glass": "Request a Factory Quote",
    "insulating-glass": "Request a Factory Quote",
    "laminated-glass": "Request a Factory Quote",
    "craft-glass": "Request a Factory Quote",
  };

  return (
    <div>
      {/* Page Header */}
      <div className="bg-brand-dark py-20">
        <div className="container-page text-center">
          <h1 className="text-white mb-4">
            {hasCustomSeo ? h1Map[slug] : product.name}
          </h1>
          <p className="text-brand-muted text-body-lg max-w-2xl mx-auto">
            {hasCustomSeo ? subMap[slug] : product.description}
          </p>
        </div>
      </div>

      <div className="container-page py-4">
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

      <section className="section">
        <div className="container-page">
          {/* Product Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="bg-brand-gray rounded-xl aspect-[4/3] flex items-center justify-center">
              <span className="text-brand-muted text-sm text-center px-4">
                {product.name} Product Photo
                <br />
                <span className="text-xs">Replace with 800×600 WebP</span>
              </span>
            </div>

            {/* Product Info */}
            <div>
              <h3 className="text-brand-dark mb-4">{product.name}</h3>
              <p className="text-brand-muted-dark mb-6 leading-relaxed">
                {product.description}
              </p>

              <h5 className="text-brand-dark font-semibold mb-3">Key Features</h5>
              <ul className="space-y-2.5 mb-8">
                {product.features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-body-sm text-brand-muted-dark"
                  >
                    <span className="text-brand-blue mt-1">&#8226;</span>
                    {f}
                  </li>
                ))}
              </ul>

              <h5 className="text-brand-dark font-semibold mb-3">Specifications</h5>
              <div className="border border-gray-200 rounded-lg overflow-hidden mb-8">
                {product.specs.map((spec, i) => (
                  <div
                    key={i}
                    className={`flex justify-between px-4 py-3 text-body-sm ${
                      i % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <span className="text-brand-muted-dark">{spec.label}</span>
                    <span className="text-brand-dark font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  {ctaMap[slug] || "Inquiry This Product"}
                </Link>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline border-brand-green text-brand-green inline-flex items-center gap-2"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Long Description */}
          {product.longDescription && (
            <div className="mt-16 max-w-3xl">
              <h2 className="text-brand-dark mb-6">
                About {product.name}
              </h2>
              <div className="space-y-4 text-brand-muted-dark leading-relaxed">
                {product.longDescription.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          )}

          {/* Applications */}
          <div className="mt-16">
            <SectionTitle
              title={`${product.name} Applications`}
              subtitle="Widely used in construction, home decoration, and commercial projects."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.applications.map((app, i) => (
                <div key={i} className="card p-6">
                  <h5 className="text-brand-dark mb-2">{app.title}</h5>
                  <p className="text-brand-muted-dark text-body-sm leading-relaxed">
                    {app.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          {product.faq && product.faq.length > 0 && (
            <div className="mt-16">
              <SectionTitle
                title={`Frequently Asked Questions About ${product.name}`}
                subtitle="Common questions from international buyers."
              />
              <div className="max-w-3xl space-y-4">
                {product.faq.map((item, i) => (
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
          )}

          {/* Related Products */}
          {product.relatedProducts && product.relatedProducts.length > 0 && (
            <div className="mt-16">
              <SectionTitle
                title="You May Also Need"
                subtitle="Explore related glass products for your project."
              />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {product.relatedProducts.map((rp, i) => (
                  <Link
                    key={i}
                    href={`/products/${rp.slug}`}
                    className="card p-6 group hover:border-brand-blue/30 transition-all"
                  >
                    <h5 className="text-brand-dark mb-2 group-hover:text-brand-blue transition-colors">
                      {rp.name}
                    </h5>
                    <p className="text-brand-muted-dark text-body-sm leading-relaxed">
                      {rp.description}
                    </p>
                    <span className="text-brand-blue text-sm font-medium mt-3 inline-block">
                      Learn More →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-16 bg-brand-dark rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-white mb-4">
              {isTempered
                ? "Ready to Source Tempered Glass from Our China Factory?"
                : isInsulating
                ? "Ready to Source Insulating Glass (IGU) from Our China Factory?"
                : isLaminated
                ? "Ready to Source Laminated Glass from Our China Factory?"
                : isCraft
                ? "Bring Your Decorative Glass Vision to Life"
                : `Need ${product.name} for Your Project?`}
            </h2>
            <p className="text-brand-muted text-body-lg max-w-2xl mx-auto mb-8">
              {isInsulating
                ? "Get a competitive factory quote within 24 hours. Send us your glass configuration, thickness, dimensions, quantity, and destination — our experts will recommend the best insulating glass solution for your project."
                : isLaminated
                ? "Get a competitive factory quote within 24 hours. Send us your glass type, thickness, interlayer specification, quantity, and application — our experts will recommend the best laminated glass solution for your project."
                : isCraft
                ? "From concept to finished panel, our design and production teams work with you every step of the way. Send us your design files, dimensions, quantity, and application — our experts will recommend the best decorative glass solution."
                : "Get a competitive factory quote within 24 hours. Send us your glass type, thickness, size, quantity, and application — our experts will recommend the best solution."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2"
              >
                {ctaMap[slug] || "Get a Quote"}
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

      {/* JSON-LD */}
      <JsonLdProduct
        name={product.name}
        description={product.description.slice(0, 200)}
        imageUrl={product.imagePath}
      />
    </div>
  );
}
