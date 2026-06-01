import Image from "next/image";
import { Factory, Users, Maximize, Wrench, Building2 } from "lucide-react";

export default function FactoryStrength() {
  const advantages = [
    {
      icon: Building2,
      title: "Factory Location",
      desc: "Located in Foshan, Guangdong, China — the heart of China's glass manufacturing industry",
    },
    {
      icon: Factory,
      title: "Production Scale",
      desc: "Two production bases totaling 15,000 ㎡ with full-scale glass processing capacity",
    },
    {
      icon: Users,
      title: "Experienced Team",
      desc: "More than 80 team members with established glass processing experience since 2019",
    },
    {
      icon: Wrench,
      title: "Advanced Equipment",
      desc: "SouthTech tempering furnaces, CNC cutting, hollow glass lines, and automatic edge grinding",
    },
    {
      icon: Maximize,
      title: "Flexible Service",
      desc: "Standard glass orders and customized project requirements with flexible MOQ",
    },
  ];

  return (
    <section className="section bg-brand-dark">
      <div className="container-page">
        <div className="text-center mb-12">
          <h2 className="text-white mb-4">
            Why Choose BDGLASS as Your Glass Factory Partner
          </h2>
          <p className="text-brand-muted text-body-lg max-w-3xl mx-auto">
            BDGLASS operates a 15,000-square-meter China glass factory in Foshan, Guangdong,
            with two production bases and five advanced production lines. Our facility is
            equipped with SouthTech tempering furnaces, CNC cutting machines, automatic
            edge grinders, and hollow glass production lines — supporting both standard
            orders and custom glass processing for international buyers.
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

        {/* Factory Image Masonry Grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {[
            { src: "/images/factory/factory-7.jpg", alt: "BDGLASS tempering furnace production line", aspect: "aspect-[4/3]" },
            { src: "/images/factory/factory-11.jpg", alt: "BDGLASS factory vertical view", aspect: "aspect-[3/4]" },
            { src: "/images/factory/factory-8.jpg", alt: "BDGLASS CNC glass cutting machine", aspect: "aspect-[4/3]" },
            { src: "/images/factory/factory-15.jpg", alt: "BDGLASS glass storage and workshop", aspect: "aspect-[3/4]" },
            { src: "/images/factory/factory-19.jpg", alt: "BDGLASS automated edge grinding line", aspect: "aspect-[4/3]" },
            { src: "/images/factory/factory-26.jpg", alt: "BDGLASS quality inspection station", aspect: "aspect-[3/4]" },
          ].map((img) => (
            <div key={img.src} className={`relative rounded-xl overflow-hidden break-inside-avoid ${img.aspect}`}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
