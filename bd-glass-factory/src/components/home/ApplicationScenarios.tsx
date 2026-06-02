import { Building2, LayoutGrid, Home, Briefcase } from "lucide-react";

export default function ApplicationScenarios() {
  const scenarios = [
    {
      icon: Building2,
      title: "Glass for Building Projects",
      desc: "From curtain walls to guardrails — get glass configurations that meet local building codes and climate demands, without over-engineering your budget.",
    },
    {
      icon: LayoutGrid,
      title: "Glass for Windows and Doors",
      desc: "Need tempered, laminated, or insulated glass for aluminum window and door systems? We supply units that fit your frames and performance specs.",
    },
    {
      icon: Home,
      title: "Glass for Interior Decoration",
      desc: "Create modern, light-filled interiors with partitions, showers, railings, and decorative finishes — matched to your aesthetic and functional needs.",
    },
    {
      icon: Briefcase,
      title: "Glass for Engineering Projects",
      desc: "Large-scale builds need reliable supply and technical backup. We support contractors with bulk glass, configuration advice, and full project documentation.",
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container-page">
        <div className="text-center mb-12">
          <h2 className="text-brand-dark mb-4">Glass Applications — From Building Projects to Interior Design</h2>
          <p className="text-brand-muted-dark text-body-lg max-w-3xl mx-auto">
            Not sure which glass suits your application? Here&apos;s how we help contractors,
            builders, and window manufacturers match the right product to their project type.
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
