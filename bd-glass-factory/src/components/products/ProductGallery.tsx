"use client";

import { useState } from "react";
import { ImageOff } from "lucide-react";

interface ProductGalleryProps {
  images: string[];
  alt: string;
}

export default function ProductGallery({ images, alt }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const count = images.length > 0 ? images.length : 1;

  return (
    <div className="space-y-4">
      {/* Main Image Placeholder */}
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-brand-gray border border-gray-100 flex flex-col items-center justify-center text-center">
        <ImageOff size={48} className="text-brand-muted mb-3" />
        <p className="text-brand-muted text-sm font-medium">{alt}</p>
        <p className="text-brand-muted/60 text-xs mt-1">Recommended: 1200 × 900 px</p>
        <p className="text-brand-muted/40 text-[10px] mt-0.5">(4:3 aspect ratio)</p>
        {/* Image counter badge */}
        <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
          {activeIndex + 1} / {count}
        </div>
      </div>

      {/* Thumbnail Placeholders */}
      {count > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`relative shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all flex flex-col items-center justify-center bg-brand-gray ${
                i === activeIndex
                  ? "border-brand-blue ring-2 ring-brand-blue/20"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <ImageOff size={16} className="text-brand-muted mb-1" />
              <span className="text-brand-muted/60 text-[9px]">80×64</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
