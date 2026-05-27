import Link from "next/link";
import { Check } from "lucide-react";

interface ProductCategory {
  title: string;
  slug: string;
  description: string;
  applications: string[];
  imageLabel: string;
}

const categories: ProductCategory[] = [
  {
    title: "Tempered Glass",
    slug: "tempered-glass",
    description:
      "Widely used in doors, windows, partitions, furniture, shower rooms, railings, and other applications that require higher strength and impact resistance.",
    applications: [
      "Shower rooms",
      "Glass doors",
      "Glass partitions",
      "Stair handrails",
      "Glass railings",
      "Table tops",
      "Interior decoration",
    ],
    imageLabel: "Tempered Glass Product Photo",
  },
  {
    title: "Laminated Glass",
    slug: "laminated-glass",
    description:
      "Commonly used in places with higher safety requirements. Even when broken, the interlayer helps hold the glass fragments together, reducing safety risks.",
    applications: [
      "Glass guardrails",
      "Curtain walls",
      "Skylights & canopies",
      "Banks & museums",
      "Jewelry stores",
      "High-security windows",
    ],
    imageLabel: "Laminated Glass Product Photo",
  },
  {
    title: "Insulated Glass",
    slug: "insulating-glass",
    description:
      "Designed to improve thermal insulation and sound insulation performance. Widely used in building facades, windows, doors, curtain walls, and energy-saving projects.",
    applications: [
      "Building curtain walls",
      "Aluminum windows and doors",
      "Sound insulation walls",
      "Cold storage",
      "Energy-saving buildings",
      "Residential & commercial projects",
    ],
    imageLabel: "Insulated Glass Product Photo",
  },
  {
    title: "Curtain Wall Glass",
    slug: "curtain-wall-glass",
    description:
      "Supporting curtain wall glass solutions for commercial buildings and large engineering projects. Options include Low-E glass, tempered, laminated, and insulated glass in customized configurations.",
    applications: [
      "Thermal insulation",
      "UV protection",
      "Wind pressure resistance",
      "Solar control performance",
      "Different colors and reflective effects",
      "Visible light transmission control",
    ],
    imageLabel: "Curtain Wall Glass Photo",
  },
  {
    title: "Glass Railings & Stair Handrails",
    slug: "glass-railings",
    description:
      "Create a clean, transparent, and modern appearance while maintaining safety and durability. Suitable for both indoor and outdoor applications.",
    applications: [
      "Villas",
      "Balconies",
      "Staircases",
      "Commercial buildings",
      "Hotels & shopping centers",
      "Outdoor viewing areas",
    ],
    imageLabel: "Glass Railings Photo",
  },
  {
    title: "Glass Partitions",
    slug: "glass-partitions",
    description:
      "Help create open, bright, and modern spaces. Used in offices, hotels, showrooms, and residential interiors with options for privacy and sound insulation.",
    applications: [
      "Office partitions",
      "Meeting rooms",
      "Commercial interiors",
      "Home decoration",
      "Privacy glass solutions",
      "Sound insulation partition systems",
    ],
    imageLabel: "Glass Partitions Photo",
  },
  {
    title: "Shower Room Glass",
    slug: "shower-room-glass",
    description:
      "Customized shower room glass for residential, hotel, and apartment projects with safety and easy maintenance in mind.",
    applications: [
      "Bathroom shower enclosures",
      "Hotel bathrooms",
      "Apartment projects",
      "Villa bathrooms",
      "Custom interior projects",
    ],
    imageLabel: "Shower Room Glass Photo",
  },
];

export default function ProductCategories() {
  return (
    <section className="section bg-brand-gray/5">
      <div className="container-page">
        <div className="text-center mb-12">
          <h2 className="text-brand-dark mb-4">Product Categories</h2>
          <p className="text-brand-muted-dark text-body-lg max-w-3xl mx-auto">
            From safety glass to decorative glass, explore our processed glass products for
            different applications.
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((cat, index) => (
            <div
              key={cat.slug}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image Placeholder */}
              <div
                className={`bg-brand-gray rounded-xl aspect-[4/3] flex items-center justify-center order-1 ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <span className="text-brand-muted text-sm text-center px-4">
                  {cat.imageLabel}<br />
                  <span className="text-xs">(Replace with 800×600 WebP)</span>
                </span>
              </div>

              {/* Content */}
              <div className={`order-2 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <h3 className="text-brand-dark mb-3">{cat.title}</h3>
                <p className="text-brand-muted-dark mb-5 leading-relaxed">{cat.description}</p>

                <h5 className="text-brand-dark font-semibold mb-3">Suitable for:</h5>
                <ul className="space-y-2 mb-6">
                  {cat.applications.map((app) => (
                    <li key={app} className="flex items-start gap-2.5 text-body-sm text-brand-muted-dark">
                      <Check size={16} className="text-brand-green mt-0.5 shrink-0" />
                      {app}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/products/${cat.slug}`}
                  className="btn-link inline-flex items-center gap-1"
                >
                  Learn More About {cat.title} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
