import { products } from "@/data/products";
import { notFound } from "next/navigation";
import SectionTitle from "@/components/shared/SectionTitle";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Link from "next/link";
import { JsonLdBreadcrumb, JsonLdProduct } from "@/lib/json-ld";
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

  return {
    title: `${product.name} - BDGLASS`,
    description: product.description.slice(0, 160),
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: `${product.name} - BDGLASS`,
      description: product.description.slice(0, 160),
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

  return (
    <div>
      <div className="bg-brand-dark py-20">
        <div className="container-page text-center">
          <h1 className="text-white mb-4">{product.name}</h1>
          <p className="text-brand-muted text-body-lg max-w-xl mx-auto">
            {product.description.slice(0, 120)}...
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
      </div>
      <section className="section">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Placeholder */}
            <div className="bg-brand-gray rounded-xl aspect-[4/3] flex items-center justify-center">
              <span className="text-brand-muted">Product Image Placeholder</span>
            </div>
            <div>
              <h3 className="text-brand-dark mb-4">{product.name}</h3>
              <p className="text-brand-muted-dark mb-6">{product.description}</p>

              <h5 className="text-brand-dark mb-3">Key Features</h5>
              <ul className="space-y-2 mb-8">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-body-sm text-brand-muted-dark">
                    <span className="text-brand-blue mt-1">&#8226;</span>
                    {f}
                  </li>
                ))}
              </ul>

              <h5 className="text-brand-dark mb-3">Specifications</h5>
              <div className="border border-gray-200 rounded-lg overflow-hidden mb-8">
                {product.specs.map((spec, i) => (
                  <div
                    key={i}
                    className={`flex justify-between px-4 py-3 text-body-sm ${
                      i % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    }`}
                  >
                    <span className="text-brand-muted-dark">{spec.label}</span>
                    <span className="text-brand-dark font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="btn-primary">
                Inquiry This Product
              </Link>
            </div>
          </div>

          {/* Applications */}
          <div className="mt-16">
            <SectionTitle title="Applications" align="left" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {product.applications.map((app, i) => (
                <div key={i} className="card p-6">
                  <h5 className="text-brand-dark mb-2">{app.title}</h5>
                  <p className="text-brand-muted-dark text-body-sm">{app.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
