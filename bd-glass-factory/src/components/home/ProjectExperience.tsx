import Link from "next/link";
import { Building2, Award } from "lucide-react";

export default function ProjectExperience() {
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
              Trusted by Landmark Projects Across China
            </h2>
            <p className="text-brand-muted mb-6 leading-relaxed">
              BD-Glass has supplied glass products for different project applications, including
              airports, industrial parks, science city projects, aviation new city projects, and
              commercial buildings.
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
              { value: "6+", label: "Major Project Types" },
              { value: "95,000+", label: "Square Meters Installed" },
              { value: "6", label: "Cities Across China" },
              { value: "2019", label: "Glass Experience Since" },
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

        {/* Project Image Placeholder */}
        <div className="mt-12 bg-brand-gray rounded-xl aspect-[21/9] flex items-center justify-center">
          <div className="text-center">
            <Award size={40} className="text-brand-muted mx-auto mb-3" />
            <span className="text-brand-muted text-sm">
              Project Showcase Gallery Placeholder — Replace with project photos collage (1920×820 WebP)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
