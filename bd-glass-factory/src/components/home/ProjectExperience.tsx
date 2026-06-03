"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Building2, X, ClipboardList, MapPin, Ruler } from "lucide-react";

interface ProjectPhoto {
  src: string;
  alt: string;
  slug: string;
  aspect: string;
  config: string[];
  area: string;
  address: string;
}

const projectPhotos: ProjectPhoto[] = [
  {
    src: "/images/home/projects/Shenzhen Kuang-Chi Future Center commercial project curtain wall glass.jpg",
    alt: "Shenzhen Kuang-Chi Future Center",
    slug: "shenzhen-guangqi-future-center",
    aspect: "aspect-[4/3]",
    config: [
      "6mm Low-E glass + 12mm aluminum strip + 6mm tempered glass",
      "6mm Low-E glass + 12mm aluminum strip + 6mm tempered glass (Custom Shape)",
    ],
    area: "28,000 square meters",
    address: "Shenzhen, Guangdong",
  },
  {
    src: "/images/home/projects/Foshan European Industrial Park Office Partitions.jpg",
    alt: "Foshan European Industrial Park",
    slug: "foshan-european-industrial-park",
    aspect: "aspect-[3/4]",
    config: [
      "8mm Low-E glass + 12mm aluminum strip + 8mm tempered glass",
      "6mm Low-E glass + 12mm aluminum strip + 6mm tempered glass",
    ],
    area: "10,000 square meters",
    address: "Foshan, Guangdong",
  },
  {
    src: "/images/home/projects/Glass in commercial projects in Shenzhen Guangming Science City.jpg",
    alt: "Shenzhen Bright Science City",
    slug: "shenzhen-bright-science-city",
    aspect: "aspect-[4/3]",
    config: [
      "8mm Low-E glass + 12mm aluminum strip + 8mm tempered glass",
      "6mm Low-E glass + 12mm aluminum strip + 6mm tempered glass",
    ],
    area: "16,000 square meters",
    address: "Shenzhen, Guangdong",
  },
  {
    src: "/images/home/projects/Zhihui Port - Guangzhou Panyu Giant Industrial Park.jpg",
    alt: "Panyu Huge Industrial Park",
    slug: "panyu-huge-industrial-park",
    aspect: "aspect-[3/4]",
    config: [
      "8mm Low-E glass + 12mm aluminum strip + 6mm tempered glass",
      "6mm Low-E glass + 12mm aluminum strip + 6mm tempered glass",
    ],
    area: "15,000 square meters",
    address: "Panyu, Guangzhou, Guangdong",
  },
  {
    src: "/images/home/projects/Curtain wall glass of Zhuhai Jinwan Aviation New City Project.jpg",
    alt: "Zhuhai Golden Bay Aviation New City",
    slug: "zhuhai-golden-bay-aviation",
    aspect: "aspect-[4/3]",
    config: [
      "8mm Low-E glass + 12mm aluminum strip + 8mm tempered glass",
      "6mm Low-E glass + 12mm aluminum strip + 6mm tempered glass",
    ],
    area: "21,000 square meters",
    address: "Zhuhai, Guangdong",
  },
  {
    src: "/images/home/projects/Foshan Shadi Airport Curtain Wall Glass.jpg",
    alt: "Foshan Shadi Airport",
    slug: "foshan-shadi-airport",
    aspect: "aspect-[3/4]",
    config: [
      "10mm Low-E glass + 12mm aluminum strip + 10mm tempered glass",
      "6mm Low-E glass + 12mm aluminum strip + 6mm tempered glass",
    ],
    area: "5,000 square meters",
    address: "Foshan, Guangdong",
  },
];

export default function ProjectExperience() {
  const [selectedPhoto, setSelectedPhoto] = useState<ProjectPhoto | null>(null);

  const projectTypes = [
    "Airport glass projects",
    "Industrial park glass projects",
    "Curtain wall glass projects",
    "Low-E insulated glass projects",
    "Large-scale architectural glass supply",
    "Commercial building glass solutions",
  ];

  return (
    <section className="section bg-brand-dark">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="text-white mb-4">
              Project Experience That Protects Your Timeline
            </h2>
            <p className="text-brand-muted mb-6 leading-relaxed">
              We&apos;ve supplied glass for industrial parks, science city projects, villas,
              apartments, and commercial towers — builds where delays and quality issues
              aren&apos;t an option. That experience means we understand what contractors,
              developers, and window manufacturers actually need: accurate specs, reliable
              delivery, and glass that passes inspection on the first try.
            </p>

            <div className="space-y-2.5 mb-8">
              {projectTypes.map((item) => (
                <div key={item} className="flex items-center gap-3 text-brand-muted">
                  <span className="w-1.5 h-1.5 bg-brand-blue rounded-full shrink-0" />
                  <span className="text-body-sm">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-brand-muted text-sm mb-6">
              These project experiences allow us to better understand the needs of contractors,
              developers, window and door companies, and engineering buyers.
            </p>

            <Link href="/projects" className="btn-primary inline-flex items-center gap-2">
              <Building2 size={18} />
              View Our Projects
            </Link>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "6+", label: "Project Types You Recognize" },
              { value: "95,000+", label: "Square Meters of Proven Scale" },
              { value: "6", label: "Cities for Multi-Site Logistics" },
              { value: "2019", label: "A Track Record You Can Verify" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="card-dark border-brand-gray-light p-6 text-center"
              >
                <div className="text-brand-blue text-2xl font-bold font-mono mb-2">
                  {stat.value}
                </div>
                <div className="text-brand-muted text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Photos Masonry */}
        <div className="mt-12 columns-2 md:columns-3 gap-4 space-y-4">
          {projectPhotos.map((photo) => (
            <button
              key={photo.slug}
              onClick={() => setSelectedPhoto(photo)}
              className={`relative rounded-xl overflow-hidden break-inside-avoid w-full block ${photo.aspect} group`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-medium">{photo.alt}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                fill
                className="object-cover rounded-t-2xl"
                sizes="(max-width: 768px) 100vw, 672px"
              />
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              <h3 className="text-brand-dark mb-4">{selectedPhoto.alt}</h3>

              <div className="space-y-4">
                {/* Product Configuration */}
                <div className="flex items-start gap-3 bg-brand-gray/30 border border-brand-gray rounded-xl p-5">
                  <ClipboardList size={20} className="text-brand-blue mt-0.5 shrink-0" />
                  <div>
                    <div className="text-brand-dark text-sm font-medium mb-2">Product Configuration</div>
                    <ul className="space-y-1.5">
                      {selectedPhoto.config.map((cfg, i) => (
                        <li key={i} className="text-brand-muted text-sm leading-relaxed flex items-start gap-2">
                          <span className="w-1 h-1 bg-brand-blue rounded-full mt-2 shrink-0" />
                          {cfg}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Engineering Glass Usage */}
                <div className="flex items-start gap-3 bg-brand-gray/30 border border-brand-gray rounded-xl p-5">
                  <Ruler size={20} className="text-brand-blue mt-0.5 shrink-0" />
                  <div>
                    <div className="text-brand-dark text-sm font-medium mb-1">Engineering Glass Usage</div>
                    <p className="text-brand-muted text-sm leading-relaxed">{selectedPhoto.area}</p>
                  </div>
                </div>

                {/* Project Address */}
                <div className="flex items-start gap-3 bg-brand-gray/30 border border-brand-gray rounded-xl p-5">
                  <MapPin size={20} className="text-brand-blue mt-0.5 shrink-0" />
                  <div>
                    <div className="text-brand-dark text-sm font-medium mb-1">Project Address</div>
                    <p className="text-brand-muted text-sm leading-relaxed">{selectedPhoto.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
