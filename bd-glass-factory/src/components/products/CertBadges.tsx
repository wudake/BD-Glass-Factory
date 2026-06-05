import Image from "next/image";

const certs = [
  { label: "3C / CCC Certification", image: "/images/certifications/3c-tempered.jpg" },
  { label: "EN 12150 Test Report", image: "/images/certifications/3c-test-report.jpg" },
  { label: "Quality Warranty", image: "/images/certifications/warranty-10-year.jpg" },
  { label: "10-Year Seal Warranty", image: "/images/certifications/desiccant-warranty.jpg" },
];

export default function CertBadges() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {certs.map((cert, i) => (
        <div
          key={i}
          className="flex flex-col items-center text-center p-4 rounded-xl bg-white border border-gray-100 hover:border-brand-blue/20 hover:shadow-sm transition-all"
        >
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-brand-gray mb-3">
            <Image
              src={cert.image}
              alt={cert.label}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 50vw, 25vw"
            />
          </div>
          <span className="text-brand-dark font-semibold text-sm">{cert.label}</span>
        </div>
      ))}
    </div>
  );
}
