import { Shield, Thermometer, Volume2, Sun, Droplets, Clock } from "lucide-react";

export default function QualityMaterials() {
  const factors = [
    { icon: Thermometer, label: "Thermal Insulation" },
    { icon: Volume2, label: "Sound Insulation" },
    { icon: Shield, label: "Safety" },
    { icon: Sun, label: "Weather Resistance" },
    { icon: Droplets, label: "Adhesion Performance" },
    { icon: Clock, label: "Long-Term Durability" },
  ];

  return (
    <section className="section bg-white">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="text-brand-dark mb-4">
              Better Raw Materials for Better Glass Performance
            </h2>
            <p className="text-brand-muted-dark mb-6 leading-relaxed">
              We understand that glass quality starts from raw materials. That is why BD-Glass
              focuses on carefully selected glass sheets, sealing materials, butyl rubber,
              silicone sealants, and other key components used in production.
            </p>
            <p className="text-brand-muted-dark mb-8 leading-relaxed">
              For insulated glass and architectural glass applications, we pay attention to
              performance factors such as:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {factors.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-2.5 bg-brand-gray/5 border border-gray-100 rounded-lg px-4 py-3"
                >
                  <f.icon size={18} className="text-brand-blue shrink-0" />
                  <span className="text-brand-dark text-sm font-medium">{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="bg-brand-gray rounded-xl aspect-[4/3] flex items-center justify-center">
            <span className="text-brand-muted text-sm text-center px-4">
              Raw Materials Image Placeholder<br />
              Replace with materials/quality inspection photo<br />
              (800×600 WebP)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
