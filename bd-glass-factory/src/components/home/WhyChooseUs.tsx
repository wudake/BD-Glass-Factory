import { PhoneCall, PenTool, Layers, Briefcase, Sliders, Globe } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: PhoneCall,
      title: "Factory Direct Communication",
      desc: "Work directly with a glass processing factory instead of a trading middleman.",
    },
    {
      icon: PenTool,
      title: "Custom Glass Processing",
      desc: "Send us your sizes, drawings, glass configuration, or project requirements. We can help match suitable glass solutions.",
    },
    {
      icon: Layers,
      title: "Wide Product Range",
      desc: "One supplier for tempered glass, laminated glass, insulated glass, curtain wall glass, railings, partitions, shower rooms, and more.",
    },
    {
      icon: Briefcase,
      title: "Project Experience",
      desc: "We understand both home decoration and engineering project requirements.",
    },
    {
      icon: Sliders,
      title: "Flexible Service",
      desc: "We support different project needs, from standard glass supply to customized processing.",
    },
    {
      icon: Globe,
      title: "Export-Oriented Support",
      desc: "BD-Glass serves both domestic and overseas markets, supporting global customers with one-stop glass solutions.",
    },
  ];

  return (
    <section className="section bg-brand-dark">
      <div className="container-page">
        <div className="text-center mb-12">
          <h2 className="text-white mb-4">Why Choose BD-Glass</h2>
          <p className="text-brand-muted text-body-lg max-w-3xl mx-auto">
            A glass processing partner that puts your project first.
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
