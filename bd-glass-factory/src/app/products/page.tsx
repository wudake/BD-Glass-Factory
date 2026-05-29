import SectionTitle from "@/components/shared/SectionTitle";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { products } from "@/data/products";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JsonLdBreadcrumb } from "@/lib/json-ld";
import { generatePageMeta } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMeta({
  title: "Glass Products - Tempered, Insulating, Laminated & Craft Glass",
  description:
    "Explore BDGLASS glass products: tempered glass (3-19mm), insulating glass, laminated glass with PVB/SGP, and decorative craft glass. 3C certified China glass factory.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <div>
      {/* Page Header */}
      <div className="bg-brand-dark py-20">
        <div className="container-page text-center">
          <p className="text-brand-blue text-sm uppercase tracking-wider mb-4">
            Product Categories
          </p>
          <h1 className="text-white mb-4">Our Glass Products</h1>
          <p className="text-brand-muted text-body-lg max-w-xl mx-auto">
            Tempered, insulating, laminated and craft glass — manufactured in our China glass factory
          </p>
        </div>
      </div>
      <div className="container-page py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Products" }]} />
        <JsonLdBreadcrumb items={[{ name: "Home", item: "/" }, { name: "Products" }]} />
      </div>

      {/* Product Cards */}
      <section className="section bg-white">
        <div className="container-page">
          <SectionTitle
            title="Select a Product Category"
            subtitle="Click on a product to learn about specifications, features, and application scenarios."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="card group flex flex-col sm:flex-row overflow-hidden"
              >
                {/* Image Placeholder */}
                <div className="sm:w-48 shrink-0 bg-brand-gray flex items-center justify-center aspect-square sm:aspect-auto">
                  <span className="text-brand-muted text-xs text-center px-2">
                    {product.name}
                    <br />Photo
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h4 className="text-brand-dark mb-2 group-hover:text-brand-blue transition-colors">
                      {product.name}
                    </h4>
                    <p className="text-brand-muted-dark text-body-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Specs Preview */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.specs.slice(0, 3).map((spec) => (
                        <span
                          key={spec.label}
                          className="text-xs bg-brand-gray/5 border border-gray-100 rounded-md px-2.5 py-1 text-brand-muted-dark"
                        >
                          {spec.label}: {spec.value}
                        </span>
                      ))}
                    </div>
                  </div>

                  <span className="btn-link inline-flex items-center gap-1 text-sm">
                    View Details
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-dark">
        <div className="container-page text-center">
          <h2 className="text-white mb-4">Need Custom Glass Specifications?</h2>
          <p className="text-brand-muted text-body-lg max-w-xl mx-auto mb-8">
            Tell us your requirements and we&apos;ll provide the right glass solution for your project.
          </p>
          <Link href="/contact" className="btn-primary">
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
