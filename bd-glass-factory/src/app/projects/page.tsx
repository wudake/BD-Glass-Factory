import SectionTitle from "@/components/shared/SectionTitle";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { projects } from "@/data/projects";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { JsonLdBreadcrumb } from "@/lib/json-ld";
import { generatePageMeta } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMeta({
  title: "Engineering Projects - Glass Curtain Wall & Building Cases",
  description:
    "BDGLASS glass products installed in airports, science parks, industrial complexes across China. 6 major projects totaling 95,000+ sqm of insulating and laminated glass.",
  path: "/projects",
});

export default function ProjectsPage() {
  // Sort by area (largest first)
  const sortedProjects = [...projects].sort((a, b) => {
    const aNum = parseInt(a.area.replace(/[^0-9]/g, ""));
    const bNum = parseInt(b.area.replace(/[^0-9]/g, ""));
    return bNum - aNum;
  });

  return (
    <div>
      {/* Page Header */}
      <div className="bg-brand-dark py-20">
        <div className="container-page text-center">
          <p className="text-brand-blue text-sm uppercase tracking-wider mb-4">
            Project Portfolio
          </p>
          <h1 className="text-white mb-4">Engineering Projects</h1>
          <p className="text-brand-muted text-body-lg max-w-xl mx-auto">
            Glass products installed in landmark buildings, airports, science parks, and commercial towers across China
          </p>
        </div>
      </div>
      <div className="container-page py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Projects" }]} />
        <JsonLdBreadcrumb items={[{ name: "Home", item: "/" }, { name: "Projects" }]} />
      </div>

      {/* Stats Bar */}
      <section className="py-8 bg-brand-gray/5 border-b border-gray-100">
        <div className="container-page">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "6", label: "Major Projects" },
              { value: "95,000+", label: "Square Meters Installed" },
              { value: "6", label: "Cities Across China" },
              { value: "5,000-28,000", label: "Project Size Range (㎡)" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-brand-blue text-2xl font-bold font-mono">{stat.value}</div>
                <div className="text-brand-muted-dark text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Cards */}
      <section className="section bg-white">
        <div className="container-page">
          <SectionTitle
            title="Featured Projects"
            subtitle="From airports to science parks — our insulating and laminated glass products power China's most impressive buildings."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="card group flex flex-col overflow-hidden"
              >
                {/* Image */}
                <div className="bg-brand-gray aspect-video flex items-center justify-center relative">
                  <span className="text-brand-muted text-xs">
                    Project Photo<br />Replace (960×600)
                  </span>
                  {/* Area Badge */}
                  <div className="absolute top-3 right-3 bg-brand-blue text-white text-xs font-bold px-3 py-1.5 rounded-md">
                    {project.area}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h4 className="text-brand-dark mb-2 group-hover:text-brand-blue transition-colors">
                    {project.name}
                  </h4>
                  <div className="flex items-center gap-2 text-brand-muted-dark text-sm mb-3">
                    <MapPin size={14} />
                    <span>{project.location}</span>
                  </div>
                  <p className="text-brand-muted-dark text-body-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Glass Config */}
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <span className="text-xs text-brand-muted">Glass Configuration:</span>
                    <p className="text-brand-dark text-sm font-mono mt-1">{project.config}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-dark">
        <div className="container-page text-center">
          <h2 className="text-white mb-4">Have a Similar Project?</h2>
          <p className="text-brand-muted text-body-lg max-w-xl mx-auto mb-8">
            Share your project requirements and we&apos;ll provide the right glass configuration for your building.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
            Discuss Your Project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
