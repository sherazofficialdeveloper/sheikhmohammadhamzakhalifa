"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { PhotoGallery } from "@/components/photo-gallery";
import { AboutSection } from "@/components/about-section";
import { PersonalDetailsSection } from "@/components/personal-details-section";
import { ExperienceSection } from "@/components/experience-section";
import { EducationSection } from "@/components/education-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { PhotoLightbox } from "@/components/photo-lightbox";

export default function HomePage() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] selection:bg-stone-800 selection:text-white transition-colors duration-200">
      {/* 1. Professional Header and Navigation */}
      <Navbar />

      {/* Main Content Container with Generous Spacing */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2. Hero Section: Name prominent, Primary Role & Secondary Role, Introduction */}
        <HeroSection />

        {/* 3. Professional Photo Gallery: 3-4 actual photographs immediately below hero */}
        <PhotoGallery onSelectPhoto={(idx) => setSelectedPhotoIndex(idx)} />

        {/* 4. Professional Overview / Biography */}
        <AboutSection />

        {/* 5. Personal Details (Clean 2-Column Layout) */}
        <PersonalDetailsSection />

        {/* 6. Work & Professional Experience */}
        <ExperienceSection />

        {/* 7. Education */}
        <EducationSection />

        {/* 8. Social & Contact Links */}
        <ContactSection />
      </main>

      {/* 9. Minimal Footer */}
      <Footer />

      {/* Fullscreen Photo Lightbox Modal */}
      <PhotoLightbox
        selectedIndex={selectedPhotoIndex}
        onClose={() => setSelectedPhotoIndex(null)}
        onNavigate={(idx) => setSelectedPhotoIndex(idx)}
      />
    </div>
  );
}
