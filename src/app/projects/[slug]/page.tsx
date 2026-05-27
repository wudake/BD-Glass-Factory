import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import SectionTitle from "@/components/shared/SectionTitle";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { JsonLdBreadcrumb } from "@/lib/json-ld";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.name} - BDGLASS Project Case`,
    description: `${project.name} — ${project.area} glass project in ${project.location}. Configuration: ${project.config}.`,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.name} - BDGLASS Project Case`,
      description: `${project.name} — ${project.area} glass project in ${project.location}.`,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div>
      <div className="bg-brand-dark py-20">
        <div className="container-page text-center">
          <h1 className="text-white mb-4">{project.name}</h1>
          <p className="text-brand-muted text-body-lg max-w-xl mx-auto">
            {project.location}
          </p>
        </div>
      </div>
      <div className="container-page py-4">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Projects", href: "/projects" },
            { label: project.name },
          ]}
        />
      </div>
      <section className="section">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Placeholder */}
            <div className="bg-brand-gray rounded-xl aspect-video flex items-center justify-center">
              <span className="text-brand-muted">Project Image Placeholder</span>
            </div>
            <div>
              <h3 className="text-brand-dark mb-6">{project.name}</h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-brand-muted-dark text-body-sm w-24">Location</span>
                  <span className="text-brand-dark font-medium">{project.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-brand-muted-dark text-body-sm w-24">Glass Area</span>
                  <span className="text-brand-dark font-semibold text-lg text-brand-blue">
                    {project.area}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-brand-muted-dark text-body-sm w-24 shrink-0">
                    Configuration
                  </span>
                  <span className="text-brand-dark font-medium font-mono text-sm">
                    {project.config}
                  </span>
                </div>
              </div>

              <p className="text-brand-muted-dark mb-6">{project.description}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
