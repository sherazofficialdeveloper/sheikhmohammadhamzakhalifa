"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";

interface PhotoGalleryProps {
  onSelectPhoto: (index: number) => void;
}

export function PhotoGallery({ onSelectPhoto }: PhotoGalleryProps) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const photos = PROFILE_DATA.photos;

  return (
    <section id="gallery" className="py-8 border-b border-[var(--card-border)]">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
              Photographs
            </span>
            <h2 className="text-xl sm:text-2xl font-normal text-[var(--text-primary)]">
              Official Portrait Gallery
            </h2>
          </div>

          {/* Quick indicator / count */}
          <div className="text-xs font-medium text-[var(--text-muted)]">
            {photos.length} Photographs
          </div>
        </div>

        {/* Desktop Layout: 3 Balanced Large Photos in a Grid + 4th accessible via tab/toggle */}
        <div className="hidden md:grid md:grid-cols-3 gap-4">
          {photos.slice(0, 3).map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => onSelectPhoto(index)}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-[var(--card-border)] bg-[var(--card-subtle)] shadow-xs transition-all duration-300 group-hover:border-[var(--text-muted)] group-hover:shadow-md">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  priority={index === 0}
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-102"
                  sizes="(max-width: 1024px) 33vw, 360px"
                />

                {/* Subtle hover icon overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-2.5 rounded-full bg-white/90 text-stone-900 shadow-lg backdrop-blur-xs">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Clean caption below photo without covering the image */}
              <p className="mt-2 text-xs font-medium text-[var(--text-secondary)] line-clamp-1">
                {photo.caption}
              </p>
            </div>
          ))}
        </div>

        {/* 4th Photo Banner Link / Extra preview on desktop */}
        <div className="hidden md:flex items-center justify-between mt-3 px-4 py-3 rounded-xl border border-[var(--card-border)] bg-[var(--card-subtle)] text-xs text-[var(--text-secondary)]">
          <span>
            Additional archival photo available: <strong>High-Level Council & Delegation Summit</strong>
          </span>
          <button
            onClick={() => onSelectPhoto(3)}
            className="font-medium text-[var(--text-primary)] hover:underline inline-flex items-center gap-1"
          >
            <span>View 4th Photo</span>
            <Maximize2 className="w-3 h-3" />
          </button>
        </div>

        {/* Mobile Layout: Clean horizontal swipe gallery with scroll snap */}
        <div className="md:hidden flex gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory py-1">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => onSelectPhoto(index)}
              className="shrink-0 snap-start w-[82vw] max-w-[320px] group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-[var(--card-border)] bg-[var(--card-subtle)] shadow-xs">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  priority={index === 0}
                  className="object-cover object-top"
                  sizes="82vw"
                />

                {/* Subtle expand icon in corner */}
                <div className="absolute bottom-3 right-3 p-2 rounded-full bg-black/60 text-white backdrop-blur-xs">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="mt-2 px-1">
                <p className="text-xs font-medium text-[var(--text-secondary)] line-clamp-1">
                  {photo.caption}
                </p>
                <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider font-semibold">
                  Photo {index + 1} of {photos.length}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

