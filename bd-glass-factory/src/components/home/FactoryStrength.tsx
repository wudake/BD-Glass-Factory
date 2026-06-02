import Image from "next/image";
import { Factory, Users, Maximize, Wrench, Building2 } from "lucide-react";

export default function FactoryStrength() {
  const advantages = [
    {
      icon: Building2,
      title: "Fast Material Access",
      desc: "Located in Foshan, China's glass hub — shorter lead times and efficient logistics to your port",
    },
    {
      icon: Factory,
      title: "Scale You Can Count On",
      desc: "15,000㎡ across two bases means no bottlenecks, from trial batches to full project loads",
    },
    {
      icon: Users,
      title: "Seasoned Team",
      desc: "80+ specialists since 2019 — your specs get understood precisely, not guessed",
    },
    {
      icon: Wrench,
      title: "Precision Equipment",
      desc: "SouthTech tempering, CNC cutting, automatic edging — the accuracy your tolerances demand",
    },
    {
      icon: Maximize,
      title: "Order Flexibility",
      desc: "No rigid MOQ. Start small to validate, then scale up when you're ready",
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
            When you partner with BDGLASS, you get more than a supplier — you get a
            production backbone that protects your timeline and your margins. Our
            15,000㎡ facility in Foshan runs five advanced lines with SouthTech tempering
            furnaces, CNC cutting, and hollow glass production — so whether you need
            standard stock or custom processing, your order ships on time, to spec,
            without surprises.
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
