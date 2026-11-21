"use client";

import React from "react";
import { GraduationCap, Landmark } from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";

export function EducationSection() {
  return (
    <section id="education" className="py-10 sm:py-14 border-b border-[var(--card-border)]">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] block mb-2">
          Academic Background
        </span>
        <h2 className="text-2xl sm:text-3xl font-normal text-[var(--text-primary)] mb-6 tracking-tight">
          Education
        </h2>

        {/* Simple academic institution layouts with clean typography */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PROFILE_DATA.education.map((item) => (
            <div
              key={item.institution}
              className="p-5 sm:p-6 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] shadow-xs flex items-start gap-4"
            >
              <div className="p-2.5 rounded-xl bg-[var(--card-subtle)] text-[var(--text-secondary)] shrink-0 mt-0.5">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)] leading-snug">
                  {item.institution}
                </h3>
                {item.location && (
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">
                    {item.location}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

