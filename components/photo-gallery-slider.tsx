"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, Camera } from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";

interface PhotoGallerySliderProps {
  onSelectPhoto: (photoIndex: number) => void;
}

export function PhotoGallerySlider({ onSelectPhoto }: PhotoGallerySliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const photos = PROFILE_DATA.photos;

  const scrollTo = (index: number) => {
    if (index < 0 || index >= photos.length) return;
    setActiveIndex(index);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const child = container.children[index] as HTMLElement;
      if (child) {
        container.scrollTo({
          left: child.offsetLeft - container.offsetLeft,
          behavior: "smooth"
        });
      }
    }
  };

  const handleNext = () => {
    scrollTo((activeIndex + 1) % photos.length);
  };

  const handlePrev = () => {
    scrollTo((activeIndex - 1 + photos.length) % photos.length);
  };

  return (
    <section id="photos" className="w-full my-4">
      {/* Container with Google search Knowledge Panel rounded layout */}
      <div className="relative group">
        {/* Navigation arrows (desktop visible on hover / tap) */}
        <button
          onClick={handlePrev}
          aria-label="Previous Photo"
          className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black/85 text-white items-center justify-center backdrop-blur-md transition-all shadow-lg active:scale-90 border border-white/10"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next Photo"
          className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black/85 text-white items-center justify-center backdrop-blur-md transition-all shadow-lg active:scale-90 border border-white/10"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Horizontal Scrollable Strip / Slider */}
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory py-1 scroll-smooth"
        >
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => {
                setActiveIndex(index);
                onSelectPhoto(index);
              }}
              className="relative shrink-0 snap-start rounded-2xl overflow-hidden cursor-pointer group/item border transition-all duration-300"
              style={{
                borderColor: index === activeIndex ? "rgba(138, 180, 248, 0.7)" : "var(--card-border)",
                backgroundColor: "var(--card-bg)",
                // Responsive dimensions: full-height hero strip like Google Knowledge Graph
                width: index === 0 ? "min(80vw, 360px)" : "min(72vw, 300px)",
                height: "360px"
              }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                priority={index === 0}
                className="object-cover object-top transition-transform duration-500 group-hover/item:scale-105"
                sizes="(max-width: 640px) 80vw, 360px"
              />

              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent pointer-events-none" />

              {/* Source attribution tag (authentic to Google knowledge panel as seen in reference: "Source: Pinterest" / "Source: The Indian Express") */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/55 backdrop-blur-md text-[11px] font-normal text-white/90 border border-white/10">
                <Camera className="w-3 h-3 text-[#8ab4f8]" />
                <span>Source: {photo.source}</span>
              </div>

              {/* Expand / Lightbox icon */}
              <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/55 backdrop-blur-md text-white/80 opacity-0 group-hover/item:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>

              {/* Bottom Caption & Label */}
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <p className="text-white text-xs sm:text-sm font-medium line-clamp-2 drop-shadow-sm">
                  {photo.caption}
                </p>
                <span className="text-[10px] text-white/70 uppercase tracking-wider font-semibold mt-0.5 inline-block">
                  Photo {index + 1} of {photos.length}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Thumbnail Dots Indicator */}
        <div className="flex items-center justify-center gap-1.5 mt-3">
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-7 bg-[#8ab4f8]"
                  : "w-2 bg-neutral-600/50 hover:bg-neutral-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

