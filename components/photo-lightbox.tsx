"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";

interface PhotoLightboxProps {
  selectedIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function PhotoLightbox({ selectedIndex, onClose, onNavigate }: PhotoLightboxProps) {
  const photos = PROFILE_DATA.photos;

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        onNavigate((selectedIndex - 1 + photos.length) % photos.length);
      }
      if (e.key === "ArrowRight") {
        onNavigate((selectedIndex + 1) % photos.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedIndex, onClose, onNavigate, photos.length]);

  if (selectedIndex === null) return null;

  const currentPhoto = photos[selectedIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close Lightbox"
        className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-stone-900/80 hover:bg-stone-800 text-white transition-all active:scale-95 border border-white/10"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev / Next Buttons */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((selectedIndex - 1 + photos.length) % photos.length);
        }}
        aria-label="Previous image"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-stone-900/80 hover:bg-stone-800 text-white transition-all active:scale-95 border border-white/10"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((selectedIndex + 1) % photos.length);
        }}
        aria-label="Next image"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-stone-900/80 hover:bg-stone-800 text-white transition-all active:scale-95 border border-white/10"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Photo content container */}
      <div
        className="relative max-w-4xl max-h-[85vh] w-full h-full p-4 flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
          <Image
            src={currentPhoto.src}
            alt={currentPhoto.alt}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>

        {/* Clean Caption & Indicator */}
        <div className="mt-4 text-center max-w-xl px-4">
          <p className="text-white text-sm sm:text-base font-medium">
            {currentPhoto.caption}
          </p>
          <p className="text-stone-400 text-xs mt-1">
            Photograph {selectedIndex + 1} of {photos.length} — Sheikh Mohammad Hamza Khalifa
          </p>
        </div>
      </div>
    </div>
  );
}
