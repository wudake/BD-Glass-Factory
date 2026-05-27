import { Building2, LayoutGrid, Home, Briefcase } from "lucide-react";

export default function ApplicationScenarios() {
  const scenarios = [
    {
      icon: Building2,
      title: "Glass for Building Projects",
      desc: "From curtain walls to balcony windows and glass guardrails, BD-Glass helps project buyers find suitable glass configurations for different building requirements.",
    },
    {
      icon: LayoutGrid,
      title: "Glass for Windows and Doors",
      desc: "Our processed glass can be used in aluminum windows, doors, balcony systems, and energy-saving window solutions.",
    },
    {
      icon: Home,
      title: "Glass for Interior Decoration",
      desc: "We provide glass solutions for partitions, wardrobes, wine cabinets, shower rooms, staircases, and decorative spaces.",
    },
    {
      icon: Briefcase,
      title: "Glass for Engineering Projects",
      desc: "BD-Glass has experience supporting engineering glass applications, including curtain walls, guardrails, handrails, decorative glass, and customized project glass.",
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container-page">
        <div className="text-center mb-12">
          <h2 className="text-brand-dark mb-4">Application Scenarios</h2>
          <p className="text-brand-muted-dark text-body-lg max-w-3xl mx-auto">
            From residential to commercial, interior to exterior — glass solutions for every project type.
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
