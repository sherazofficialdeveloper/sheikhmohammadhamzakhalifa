"use client";

import React from "react";
import { PROFILE_DATA } from "@/data/profile";

export function AboutSection() {
  return (
    <section id="about" className="py-10 sm:py-14 border-b border-[var(--card-border)]">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] block mb-2">
          Biography
        </span>
        <h2 className="text-2xl sm:text-3xl font-normal text-[var(--text-primary)] mb-6 tracking-tight">
          Professional Overview
        </h2>

        <div className="space-y-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl">
          <p>{PROFILE_DATA.overview.paragraph1}</p>
          <p>{PROFILE_DATA.overview.paragraph2}</p>
        </div>
      </div>
    </section>
  );
}

