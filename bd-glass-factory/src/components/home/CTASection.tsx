import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative bg-brand-dark py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/images/factory/factory-20.jpg"
          alt="BDGLASS factory production area"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="container-page relative z-10 text-center">
        <h2 className="text-white mb-4 max-w-3xl mx-auto">
          Ready to Source Glass from a Trusted China Factory?
        </h2>
        <p className="text-brand-muted text-body-lg max-w-2xl mx-auto mb-6">
          Get a competitive factory quote within 24 hours. Tell us your glass type,
          thickness, size, quantity, and application — our experts will recommend the
          best glass solution for your project.
        </p>
        <p className="text-brand-muted text-body-sm max-w-xl mx-auto mb-10">
          Whether you need glass sheets, tempered glass, laminated glass, insulated glass,
          curtain wall glass, glass railings, partitions, or shower room glass, our team is
          ready to support you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2">
            Request a Factory Quote
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
