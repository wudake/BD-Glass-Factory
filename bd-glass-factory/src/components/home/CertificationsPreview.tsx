import Link from "next/link";
import { FileCheck, Shield, ClipboardCheck } from "lucide-react";

export default function CertificationsPreview() {
  const items = [
    {
      icon: FileCheck,
      title: "3C Certified Tempered Glass",
      desc: "CCC certification meets Chinese and international safety standards — the documentation your project approval process requires.",
    },
    {
      icon: Shield,
      title: "Insulating Glass Performance Certified",
      desc: "Tested and verified for thermal insulation, sound reduction, and seal durability — so your units perform as specified, season after season.",
    },
    {
      icon: ClipboardCheck,
      title: "10-Year Warranty & Quality Docs",
      desc: "Full warranty documentation, sealant testing records, and desiccant quality reports — everything you need for project handover and client confidence.",
    },
  ];

  return (
    <section className="section bg-brand-gray/5">
      <div className="container-page">
        <div className="text-center mb-12">
          <h2 className="text-brand-dark mb-4">Certifications That Give You Confidence in Every Order</h2>
          <p className="text-brand-muted-dark text-body-lg max-w-3xl mx-auto">
            Buying glass from overseas shouldn&apos;t feel like a gamble. Our 3C certifications,
            product testing reports, and quality documentation are available for every
            project order — so you have the paperwork you need for customs, clients,
            and building inspections.
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
