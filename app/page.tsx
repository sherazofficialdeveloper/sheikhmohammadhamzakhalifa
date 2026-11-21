"use client";

import React, { useState } from "react";
import { GoogleHeader } from "@/components/google-header";
import { HeroHeader } from "@/components/hero-header";
import { PhotoGallerySlider } from "@/components/photo-gallery-slider";
import { QuickFactsCards } from "@/components/quick-facts-cards";
import { OverviewCard } from "@/components/overview-card";
import { PersonalDetailsCard } from "@/components/personal-details-card";
import { WorkCard } from "@/components/work-card";
import { EducationCard } from "@/components/education-card";
import { SocialContactCard } from "@/components/social-contact-card";
import { GoogleSerpPreview } from "@/components/google-serp-preview";
import { PhotoLightbox } from "@/components/photo-lightbox";
import { ShareModal } from "@/components/share-modal";
import { Globe, ShieldCheck } from "lucide-react";

export default function HomePage() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-200">
      {/* 1. Google Top Search Bar Replica & Navigation */}
      <GoogleHeader onShare={() => setIsShareModalOpen(true)} />

      {/* Main Knowledge Panel Container */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 py-4">
        {/* Exact Order from Top to Bottom */}
        
        {/* Section 1: Top Header / Hero Section */}
        {/* Main Title, Primary Role (Hamza Motors - HQ), Secondary Role (Former MNA PMLN NA/316) */}
        <HeroHeader onShare={() => setIsShareModalOpen(true)} />

        {/* Section 2: Photo Gallery Section (Right below top title & role) */}
        {/* 4 clean photos in neat horizontal slider/strip with attribution */}
        <PhotoGallerySlider onSelectPhoto={(idx) => setSelectedPhotoIndex(idx)} />

        {/* Section 3: Lower Details Section (Below the photos) */}
        {/* Quick Knowledge Cards (Born / Birthday, Location / Origin, Enterprise) */}
        <QuickFactsCards />

        {/* Short Bio / Overview (Wikipedia & Knowledge Panel style summary) */}
        <OverviewCard />

        {/* 2-Column Responsive Layout for Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
          {/* Column 1: Personal Details */}
          <PersonalDetailsCard />

          {/* Column 2: Education & Academic Credentials */}
          <div className="space-y-4">
            <EducationCard />
            <SocialContactCard />
          </div>
        </div>

        {/* Full-width Work & Roles Card */}
        <WorkCard />

        {/* Google SERP SEO Preview Card (Demonstrating rich snippets & schema) */}
        <GoogleSerpPreview />
      </main>

      {/* Minimal Google-style Footer */}
      <footer className="w-full border-t mt-12 py-6 text-xs transition-colors duration-200"
        style={{
          borderColor: "var(--card-border)",
          backgroundColor: "var(--card-subtle)",
          color: "var(--text-muted)"
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="font-medium" style={{ color: "var(--foreground)" }}>
              sheikhmohammadhamzakhalifa.online
            </span>
            <span>• Official Knowledge Card</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>© 2026 Sheikh Mohammad Hamza Khalifa</span>
            <span>•</span>
            <span className="text-[#8ab4f8]">All Rights Reserved</span>
          </div>
        </div>
      </footer>

      {/* Lightbox Modal for Fullscreen Photo Zoom */}
      <PhotoLightbox
        selectedIndex={selectedPhotoIndex}
        onClose={() => setSelectedPhotoIndex(null)}
        onNavigate={(idx) => setSelectedPhotoIndex(idx)}
      />

      {/* Share Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />
    </div>
  );
}
