import { Building2, LayoutGrid, Home, Briefcase } from "lucide-react";

export default function ApplicationScenarios() {
  const scenarios = [
    {
      icon: Building2,
      title: "Glass for Building Projects",
      desc: "Curtain walls, balcony windows, glass guardrails, and facade glass for commercial and residential buildings. We help project buyers match suitable glass configurations to building codes and climate requirements.",
    },
    {
      icon: LayoutGrid,
      title: "Glass for Windows and Doors",
      desc: "Processed glass for aluminum windows, doors, balcony systems, and energy-saving window solutions. Available as tempered, laminated, or insulated units.",
    },
    {
      icon: Home,
      title: "Glass for Interior Decoration",
      desc: "Glass solutions for partitions, wardrobes, wine cabinets, shower rooms, staircases, and decorative glass for modern residential and commercial interiors.",
    },
    {
      icon: Briefcase,
      title: "Glass for Engineering Projects",
      desc: "Large-scale engineering glass supply including curtain walls, guardrails, handrails, decorative glass, and custom project glass with full technical support.",
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container-page">
        <div className="text-center mb-12">
          <h2 className="text-brand-dark mb-4">Glass Applications — From Building Projects to Interior Design</h2>
          <p className="text-brand-muted-dark text-body-lg max-w-3xl mx-auto">
            Our China glass manufacturer supplies processed glass for a wide range of
            applications — from large-scale building projects to detailed interior decoration.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {scenarios.map((item) => (
            <div key={item.title} className="card p-6 text-center">
              <div className="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center mx-auto mb-5">
                <item.icon size={28} className="text-brand-blue" />
              </div>
              <h5 className="text-brand-dark mb-3">{item.title}</h5>
              <p className="text-brand-muted-dark text-body-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
