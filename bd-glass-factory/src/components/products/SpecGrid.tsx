interface Spec {
  label: string;
  value: string;
}

interface SpecGridProps {
  specs: Spec[];
}

export default function SpecGrid({ specs }: SpecGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {specs.map((spec, i) => (
        <div
          key={i}
          className="bg-gray-50/80 border border-gray-100 rounded-lg px-4 py-3.5 hover:border-brand-blue/20 hover:bg-brand-blue/[0.02] transition-all"
        >
          <p className="text-caption text-brand-muted-dark mb-1 uppercase tracking-wider">
            {spec.label}
          </p>
          <p className="text-brand-dark font-medium text-sm leading-snug">
            {spec.value}
          </p>
        </div>
      ))}
    </div>
  );
}
