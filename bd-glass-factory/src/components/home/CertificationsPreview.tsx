import Link from "next/link";
import { FileCheck, Shield, ClipboardCheck } from "lucide-react";

export default function CertificationsPreview() {
  const items = [
    {
      icon: FileCheck,
      title: "Tempered Glass 3C Test Report",
      desc: "Product testing and certification documentation available for tempered glass products.",
    },
    {
      icon: Shield,
      title: "Insulating Glass Product Certification",
      desc: "Product certification supporting the quality and performance of our insulating glass units.",
    },
    {
      icon: ClipboardCheck,
      title: "Product Warranty Documentation",
      desc: "Warranty and quality documentation including sealant testing support and desiccant quality records.",
    },
  ];

  return (
    <section className="section bg-brand-gray/5">
      <div className="container-page">
        <div className="text-center mb-12">
          <h2 className="text-brand-dark mb-4">Quality You Can Check</h2>
          <p className="text-brand-muted-dark text-body-lg max-w-3xl mx-auto">
            BD-Glass focuses on quality control and product reliability. Our glass products
            are supported by testing, product certification, and quality documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {items.map((item) => (
            <div key={item.title} className="card p-6 text-center">
              <div className="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center mx-auto mb-5">
                <item.icon size={26} className="text-brand-blue" />
              </div>
              <h5 className="text-brand-dark mb-3">{item.title}</h5>
              <p className="text-brand-muted-dark text-body-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-brand-muted-dark text-body-sm text-center mb-8 max-w-2xl mx-auto">
          For project orders, we can provide suitable product information according to the
          actual glass configuration and application requirement.
        </p>

        <div className="text-center">
          <Link href="/certifications" className="btn-outline border-brand-blue text-brand-blue">
            View Certifications
          </Link>
        </div>
      </div>
    </section>
  );
}
