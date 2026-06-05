"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  alt: string;
}

export default function ProductGallery({ images, alt }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const count = images.length > 0 ? images.length : 1;
  const hasRealImages = images.length > 0 && images[0] !== "";

  if (!hasRealImages) {
    return (
      <div className="space-y-4">
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-brand-gray border border-gray-100 flex flex-col items-center justify-center text-center">
          <p className="text-brand-muted text-sm">{alt}</p>
          <p className="text-brand-muted/50 text-xs mt-1">Image coming soon</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-brand-gray border border-gray-100">
        <Image
          src={images[activeIndex]}
          alt={`${alt} — product image ${activeIndex + 1} of ${count}`}
          fill
          className="object-cover"
          priority={activeIndex === 0}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        {/* Image counter badge */}
        <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
          {activeIndex + 1} / {count}
        </div>
      </div>

      {/* Thumbnails */}
      {count > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`relative shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all bg-brand-gray ${
                i === activeIndex
                  ? "border-brand-blue ring-2 ring-brand-blue/20"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
              aria-label={`View ${alt} image ${i + 1}`}
            >
              <Image
                src={img}
                alt={`${alt} — thumbnail ${i + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
