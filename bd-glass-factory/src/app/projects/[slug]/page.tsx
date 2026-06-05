import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SectionTitle from "@/components/shared/SectionTitle";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { JsonLdBreadcrumb, JsonLdProductFAQ } from "@/lib/json-ld";
import { ArrowRight, MapPin, Layers, Ruler } from "lucide-react";
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

  const title = `${project.name} — ${project.area} Glass Project | BDGLASS Case Study`;
  const desc = `${project.name}: ${project.area} glass installation in ${project.location}. Configuration: ${project.config}. BDGLASS factory-direct glass supply for major construction projects.`;

  return {
    title,
    description: desc.slice(0, 160),
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title,
      description: desc.slice(0, 160),
      type: "article",
      images: [project.imagePath],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc.slice(0, 160),
    },
  };
}

// Inline FAQ for project pages
const projectFAQ = [
  {
    question: "What types of glass were used in this project?",
    answer: "This project primarily used insulating glass units (IGU), laminated glass, and tempered glass in various configurations tailored to the building's performance requirements. See the project details above for the specific glass configuration used.",
  },
  {
    question: "Can BDGLASS supply glass for similar projects?",
    answer: "Yes. BDGLASS supplies glass for projects of all scales — from 500 sqm to 50,000+ sqm. Our 15,000㎡ factory in Foshan, Guangdong, China is equipped with SouthTech tempering furnaces, 5 automated IGU lines, and CNC cutting/drilling machinery. We provide performance calculations, shop drawings, and full-size mock-ups for project orders.",
  },
  {
    question: "What is your lead time for large-scale glass projects?",
    answer: "Lead time for project orders is typically 15-30 working days depending on scale and configuration complexity. For projects exceeding 10,000 sqm, we recommend allowing 25-35 working days. Phased delivery is available — we can supply glass in sequenced batches to match your construction schedule.",
  },
  {
    question: "Do you provide installation support or on-site supervision?",
    answer: "We provide complete glass scheduling with panel IDs and dimensions, shop drawings, and installation guidelines. For large projects, we can arrange on-site supervision by our technical team (subject to project scale and location). Our project support package includes U-value/SHGC calculations and full QC documentation.",
  },
  {
    question: "What certifications does your project glass carry?",
    answer: "All glass supplied for construction projects carries Chinese 3C (CCC) compulsory certification. We comply with EN 12150 (tempered), EN 1279 (insulating), EN 14449 (laminated), and ASTM standards. Test reports and certificates are provided with every project delivery.",
  },
];

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  // Related projects (exclude current)
  const relatedProjects = projects
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const aNum = parseInt(a.area.replace(/[^0-9]/g, ""));
      const bNum = parseInt(b.area.replace(/[^0-9]/g, ""));
      return bNum - aNum;
    })
    .slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <div className="bg-brand-dark py-20 md:py-28">
        <div className="container-page text-center">
          <p className="text-brand-blue text-sm font-semibold uppercase tracking-wider mb-4">
            Project Case Study
          </p>
          <h1 className="text-white mb-4">{project.name}</h1>
          <p className="text-brand-muted text-body-lg max-w-2xl mx-auto">
            {project.location} — {project.area} glass installation
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="container-page py-4 border-b border-gray-100">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Projects", href: "/projects" },
            { label: project.name },
          ]}
        />
        <JsonLdBreadcrumb
          items={[
            { name: "Home", item: "/" },
            { name: "Projects", item: "/projects" },
            { name: project.name },
          ]}
        />
      </div>

      {/* Project Overview */}
      <section className="section">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Image */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-brand-gray">
              <Image
                src={project.imagePath}
                alt={`${project.name} — ${project.area} glass project in ${project.location}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Project Details */}
            <div className="flex flex-col justify-center">
              <p className="text-brand-blue text-sm font-semibold uppercase tracking-wider mb-3">
                Project Overview
              </p>
              <h2 className="text-brand-dark mb-6">{project.name}</h2>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <MapPin size={18} className="text-brand-blue shrink-0" />
                  <div>
                    <span className="text-caption text-brand-muted-dark uppercase block">Location</span>
                    <span className="text-brand-dark font-medium">{project.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Ruler size={18} className="text-brand-blue shrink-0" />
                  <div>
                    <span className="text-caption text-brand-muted-dark uppercase block">Glass Area</span>
                    <span className="text-brand-blue font-bold text-lg">{project.area}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <Layers size={18} className="text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <span className="text-caption text-brand-muted-dark uppercase block">Glass Configuration</span>
                    <span className="text-brand-dark font-medium text-sm font-mono">{project.config}</span>
                  </div>
                </div>
              </div>

              <p className="text-brand-muted-dark text-body-lg leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Request a Project Quote
                  <ArrowRight size={16} />
                </Link>
                <Link href="/products" className="btn-outline border-brand-dark text-brand-dark inline-flex items-center gap-2">
                  Explore Glass Products
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Scale Stats */}
      <section className="section bg-brand-gray/5">
        <div className="container-page">
          <SectionTitle
            title="Project at a Glance"
            subtitle="Key statistics and glass specifications for this project."
          />
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="bg-white rounded-xl border border-gray-100 p-6 text-center">
              <p className="text-brand-blue text-2xl font-bold font-mono mb-2">{project.area}</p>
              <p className="text-brand-muted-dark text-sm">Total Glass Area</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-6 text-center">
              <p className="text-brand-blue text-2xl font-bold font-mono mb-2">{project.location.split(",")[0]}</p>
              <p className="text-brand-muted-dark text-sm">Project Location</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-6 text-center">
              <p className="text-brand-blue text-2xl font-bold font-mono mb-2">BDGLASS</p>
              <p className="text-brand-muted-dark text-sm">Glass Supplier</p>
            </div>
          </div>
        </div>
      </section>

      {/* Glass Configuration Detail */}
      <section className="section">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <SectionTitle
              title="Glass Configuration"
              subtitle="Technical specifications of the glass products supplied for this project."
            />
            <div className="bg-white rounded-xl border border-gray-100 p-6 md:p-8">
              <div className="font-mono text-brand-dark text-sm leading-relaxed break-all bg-gray-50 p-4 rounded-lg">
                {project.config}
              </div>
              <p className="text-brand-muted-dark text-body-sm mt-4">
                This configuration was selected to meet the project&apos;s specific requirements for thermal insulation, structural safety, and aesthetic appearance. All glass supplied carried 3C (CCC) certification and complied with relevant EN and ASTM standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-brand-gray/5">
        <div className="container-page">
          <SectionTitle
            title="Frequently Asked Questions About Our Glass Projects"
            subtitle="Common questions from architects, contractors, and developers about glass supply for construction projects."
          />
          <div className="max-w-3xl mx-auto space-y-3">
            {projectFAQ.map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-5 bg-white">
                <h3 className="text-brand-dark mb-2">{item.question}</h3>
                <p className="text-brand-muted-dark text-body-sm leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
          <JsonLdProductFAQ items={projectFAQ} />
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="section">
          <div className="container-page">
            <SectionTitle
              title="More Glass Projects"
              subtitle="Explore other major glass installations supplied by BDGLASS across China."
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedProjects.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/projects/${rp.slug}`}
                  className="card group flex flex-col overflow-hidden"
                >
                  <div className="bg-brand-gray aspect-video relative overflow-hidden">
                    <Image
                      src={rp.imagePath}
                      alt={`${rp.name} — ${rp.area} glass project`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-3 right-3 bg-brand-blue text-white text-xs font-bold px-3 py-1.5 rounded-md">
                      {rp.area}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-brand-dark mb-2 group-hover:text-brand-blue transition-colors">
                      {rp.name}
                    </h3>
                    <div className="flex items-center gap-2 text-brand-muted-dark text-sm mb-3">
                      <MapPin size={14} />
                      <span>{rp.location}</span>
                    </div>
                    <p className="text-brand-muted-dark text-body-sm line-clamp-2 flex-1">
                      {rp.description}
                    </p>
                    <span className="text-brand-blue text-sm font-semibold inline-flex items-center gap-1 mt-3">
                      View Project
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="section bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }} />
        </div>
        <div className="container-page text-center relative">
          <h2 className="text-white mb-4">
            Planning a Similar Glass Project?
          </h2>
          <p className="text-brand-muted text-body-lg max-w-2xl mx-auto mb-8">
            From 500 sqm to 50,000+ sqm — BDGLASS supplies glass for construction projects worldwide. Send us your project specifications for a competitive factory quote within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2">
              Get a Project Quote
              <ArrowRight size={18} />
            </Link>
            <Link href="/products" className="btn-outline border-brand-blue text-brand-blue text-lg px-8 py-4 inline-flex items-center gap-2">
              Browse Glass Products
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
