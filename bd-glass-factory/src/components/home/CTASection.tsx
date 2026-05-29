import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative bg-brand-dark py-24 overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-brand-gray to-brand-dark flex items-center justify-center">
          <span className="text-brand-muted text-sm">
            CTA Background — Replace with factory/glass product photo
          </span>
        </div>
      </div>

      <div className="container-page relative z-10 text-center">
        <h2 className="text-white mb-4 max-w-3xl mx-auto">
          Need a Reliable Glass Processing Factory in China?
        </h2>
        <p className="text-brand-muted text-body-lg max-w-2xl mx-auto mb-6">
          Tell us what glass you need. BD-Glass will help you find the right solution for your project.
        </p>
        <p className="text-brand-muted text-body-sm max-w-xl mx-auto mb-10">
          Whether you need glass sheets, tempered glass, laminated glass, insulated glass,
          curtain wall glass, glass railings, partitions, or shower room glass, our team is
          ready to support you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2">
            Request a Quote
            <ArrowRight size={20} />
          </Link>
          <a
            href="https://wa.me/8613723810568"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline border-brand-green text-brand-green text-lg px-8 py-4 inline-flex items-center gap-2"
          >
            <MessageCircle size={20} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
