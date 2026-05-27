import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative min-h-[90vh] bg-brand-dark flex items-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-brand-gray to-brand-dark flex items-center justify-center">
          <span className="text-brand-muted text-sm">
            Hero Background Image — Replace with factory/production line photo (1920×1080 WebP)
          </span>
        </div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/60 to-brand-dark" />
      </div>

      {/* Content */}
      <div className="container-page relative z-10 py-20">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 bg-brand-blue/10 border border-brand-blue/20 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
          <span className="text-brand-blue text-sm font-medium">
            Factory Direct Supply · Custom Processing · Project-Based Glass Solutions
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-white max-w-4xl mb-6">
          Reliable Glass Processing Solutions for Windows, Doors, Curtain Walls &amp; Interior Projects
        </h1>

        {/* Subtitle */}
        <p className="text-brand-muted text-body-lg max-w-2xl mb-10 leading-relaxed">
          BD-Glass is a China-based glass processing factory supplying high-quality architectural
          and decorative glass for builders, contractors, window and door manufacturers, developers,
          and project buyers. From glass sheets to tempered glass, laminated glass, insulated glass,
          glass railings, partitions, shower rooms, and custom project glass — we help you source
          the right glass products with stable quality, flexible production, and professional support.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact" className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2">
            Get a Quote
            <ArrowRight size={20} />
          </Link>
          <Link href="/contact" className="btn-outline border-brand-blue text-brand-blue text-lg px-8 py-4">
            Send Your Glass Specification
          </Link>
        </div>

        {/* Trust Banners */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
          {[
            { label: "Factory Direct Supply", desc: "No middleman markup" },
            { label: "Custom Processing", desc: "Made to your specifications" },
            { label: "Project Solutions", desc: "From single sheets to bulk orders" },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <span className="w-1 h-12 bg-brand-blue rounded-full shrink-0 mt-1" />
              <div>
                <p className="text-white font-semibold text-sm">{item.label}</p>
                <p className="text-brand-muted text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
