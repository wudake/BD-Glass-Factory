import { Factory, Users, Maximize, Wrench, Building2 } from "lucide-react";

export default function FactoryStrength() {
  const advantages = [
    {
      icon: Building2,
      title: "Factory Location",
      desc: "Located in Foshan, Guangdong, China — a major glass manufacturing hub",
    },
    {
      icon: Factory,
      title: "Production Scale",
      desc: "Two production bases with a total area of around 15,000 square meters",
    },
    {
      icon: Users,
      title: "Experienced Team",
      desc: "More than 80 team members with established glass processing experience since 2018",
    },
    {
      icon: Wrench,
      title: "Advanced Equipment",
      desc: "Tempering furnaces, edging machines, CNC cutting, hollow glass production lines, and more",
    },
    {
      icon: Maximize,
      title: "Flexible Service",
      desc: "Supporting standard glass orders and customized project requirements",
    },
  ];

  return (
    <section className="section bg-brand-dark">
      <div className="container-page">
        <div className="text-center mb-12">
          <h2 className="text-white mb-4">
            Built for Stable Quality and Flexible Production
          </h2>
          <p className="text-brand-muted text-body-lg max-w-3xl mx-auto">
            BD-Glass is backed by professional glass processing facilities and experienced
            production teams. Our factory is equipped with advanced glass processing equipment,
            supporting both standard glass orders and customized project requirements.
          </p>
        </div>

        {/* Key Advantages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {advantages.map((item) => (
            <div key={item.title} className="card-dark p-6 border-brand-gray-light">
              <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-4">
                <item.icon size={20} className="text-brand-blue" />
              </div>
              <h5 className="text-white mb-2">{item.title}</h5>
              <p className="text-brand-muted text-body-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Equipment Image Placeholder */}
        <div className="bg-brand-gray rounded-xl aspect-[21/9] flex items-center justify-center">
          <span className="text-brand-muted text-sm">
            Factory Equipment Image Placeholder — Replace with production line photo (1920×820 WebP)
          </span>
        </div>
      </div>
    </section>
  );
}
