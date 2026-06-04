import { Check, Shield, Truck, Clock, Ruler, Palette } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Certified Quality",
    desc: "3C (CCC), EN, ASTM certified. Every batch tested before shipment.",
  },
  {
    icon: Ruler,
    title: "Precision Manufacturing",
    desc: "CNC cutting & drilling to ±0.5mm tolerance. Custom sizes welcome.",
  },
  {
    icon: Clock,
    title: "Fast Lead Time",
    desc: "7–15 working days standard. Urgent orders available in 7 days.",
  },
  {
    icon: Truck,
    title: "Global Export",
    desc: "Exported to Australia, Africa, Middle East & Southeast Asia. FOB/CIF/DDP.",
  },
  {
    icon: Palette,
    title: "Custom Finishes",
    desc: "Clear, tinted, frosted, Low-E, reflective & printed glass options.",
  },
  {
    icon: Check,
    title: "Factory Direct Pricing",
    desc: "15,000㎡ facility in Foshan. No middlemen. Competitive factory rates.",
  },
];

export default function WhyChooseUs() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {reasons.map((reason, i) => (
        <div
          key={i}
          className="flex items-start gap-4 p-5 rounded-xl bg-white border border-gray-100 hover:border-brand-blue/20 hover:shadow-sm transition-all"
        >
          <div className="shrink-0 w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center">
            <reason.icon size={20} className="text-brand-blue" />
          </div>
          <div>
            <h5 className="text-brand-dark font-semibold text-sm mb-1">
              {reason.title}
            </h5>
            <p className="text-brand-muted-dark text-body-sm leading-relaxed">
              {reason.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
