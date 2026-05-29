import { PhoneCall, PenTool, Layers, Briefcase, Sliders, Globe } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: PhoneCall,
      title: "Factory Direct Communication",
      desc: "Work directly with our China glass factory instead of a trading middleman. Faster response, clearer pricing, better control.",
    },
    {
      icon: PenTool,
      title: "Custom Glass Processing",
      desc: "Send us your sizes, drawings, glass configuration, or project requirements. We match suitable tempered, laminated, or insulating glass solutions.",
    },
    {
      icon: Layers,
      title: "Wide Product Range",
      desc: "One supplier for tempered glass, laminated glass, insulated glass, curtain wall glass, railings, partitions, shower rooms, and more.",
    },
    {
      icon: Briefcase,
      title: "Project Experience",
      desc: "We understand both home decoration and large engineering project requirements, from small villas to 28,000㎡ commercial towers.",
    },
    {
      icon: Sliders,
      title: "Flexible Service",
      desc: "From standard glass supply to fully customized processing — we adapt to your project timeline and quantity needs.",
    },
    {
      icon: Globe,
      title: "Export-Oriented Support",
      desc: "BDGLASS serves buyers across Australia, Africa, Middle East, and Southeast Asia with one-stop glass solutions and global delivery support.",
    },
  ];

  return (
    <section className="section bg-brand-dark">
      <div className="container-page">
        <div className="text-center mb-12">
          <h2 className="text-white mb-4">Why Choose BDGLASS as Your Glass Supplier</h2>
          <p className="text-brand-muted text-body-lg max-w-3xl mx-auto">
            A reliable glass supplier that puts your project first — from material selection
            to delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item) => (
            <div key={item.title} className="card-dark border-brand-gray-light p-6">
              <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-4">
                <item.icon size={20} className="text-brand-blue" />
              </div>
              <h5 className="text-white mb-2">{item.title}</h5>
              <p className="text-brand-muted text-body-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
