import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative min-h-[90vh] bg-brand-dark flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home/hero-bg.jpg"
          alt="BDGLASS factory production line interior"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/60 to-brand-dark" />
      </div>

      {/* Content */}
      <div className="container-page relative z-10 py-20">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 bg-brand-blue/10 border border-brand-blue/20 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
          <span className="text-brand-blue text-sm font-medium">
            ◆ Professional China Glass Factory Since 2019
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-white max-w-4xl mb-6">
          Your Trusted China Glass Factory for Glass Solution
        </h1>

        {/* Subtitle */}
        <p className="text-white text-body-lg max-w-2xl mb-10 leading-relaxed">
          BDGLASS is a professional China glass manufacturer with 15,000㎡ production base,
          5 advanced production lines, and 3C certified quality. We supply tempered glass,
          insulating glass, laminated glass, and craft glass for builders, contractors,
          window and door manufacturers, and project buyers across Australia, Africa,
          Middle East and Southeast Asia.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact" className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2">
            Get Factory Quote
            <ArrowRight size={20} />
          </Link>
          <Link href="/contact" className="btn-outline border-brand-blue text-brand-blue text-lg px-8 py-4">
            Explore Glass Products
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
