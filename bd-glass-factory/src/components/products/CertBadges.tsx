import { ImageOff } from "lucide-react";

const certs = [
  { label: "3C / CCC", size: "400 × 300 px" },
  { label: "Test Report", size: "400 × 300 px" },
  { label: "EN 1279", size: "400 × 300 px" },
  { label: "10Y Warranty", size: "400 × 300 px" },
];

export default function CertBadges() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {certs.map((cert, i) => (
        <div
          key={i}
          className="flex flex-col items-center text-center p-4 rounded-xl bg-white border border-gray-100 hover:border-brand-blue/20 transition-all"
        >
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-brand-gray flex flex-col items-center justify-center mb-3">
            <ImageOff size={28} className="text-brand-muted mb-1.5" />
            <span className="text-brand-muted/60 text-[10px]">{cert.size}</span>
          </div>
          <span className="text-brand-dark font-semibold text-sm">{cert.label}</span>
        </div>
      ))}
    </div>
  );
}
