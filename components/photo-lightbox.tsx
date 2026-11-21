"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close Lightbox"
        className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-white transition-all active:scale-90 border border-white/10"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev / Next Buttons */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((selectedIndex - 1 + photos.length) % photos.length);
        }}
        aria-label="Previous"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-white transition-all active:scale-90 border border-white/10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((selectedIndex + 1) % photos.length);
        }}
        aria-label="Next"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-white transition-all active:scale-90 border border-white/10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Photo content container */}
      <div
        className="relative max-w-4xl max-h-[85vh] w-full h-full p-4 flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
          <Image
            src={currentPhoto.src}
            alt={currentPhoto.alt}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>

        {/* Captions & Info */}
        <div className="mt-4 text-center max-w-xl px-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900/90 text-xs font-medium text-[#8ab4f8] border border-white/10 mb-1.5">
            <Camera className="w-3.5 h-3.5" />
            <span>{currentPhoto.source}</span>
            <span>•</span>
            <span>Photo {selectedIndex + 1} of {photos.length}</span>
          </div>
          <h2 className="text-white text-base sm:text-lg font-medium">
            {currentPhoto.caption}
          </h2>
          <p className="text-neutral-400 text-xs mt-1">
            Sheikh Mohammad Hamza Khalifa — Official Archive
          </p>
        </div>
      </div>
    </div>
  );
}

