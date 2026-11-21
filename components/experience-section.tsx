"use client";

import React from "react";
import { Briefcase, Building, Landmark } from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-10 sm:py-14 border-b border-[var(--card-border)]">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] block mb-2">
          Career Timeline
        </span>
        <h2 className="text-2xl sm:text-3xl font-normal text-[var(--text-primary)] mb-6 tracking-tight">
          Work & Professional Experience
        </h2>

        {/* Clean Vertical Timeline / Experience Cards */}
        <div className="space-y-4 sm:space-y-6">
          {PROFILE_DATA.work.map((item, index) => (
            <div
              key={item.organization}
              className="p-5 sm:p-6 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] shadow-xs hover:border-[var(--text-muted)] transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-[var(--card-subtle)] text-[var(--text-secondary)] shrink-0">
                    {item.type === "business" ? (
                      <Building className="w-4 h-4" />
                    ) : (
                      <Landmark className="w-4 h-4" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)]">
                      {item.organization}
                    </h3>
                    <p className="text-sm font-medium text-[var(--text-secondary)]">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Employment Period without calculated inaccurate durations */}
                <span className="text-xs sm:text-sm font-medium text-[var(--text-muted)] sm:text-right mt-1 sm:mt-0 pl-10 sm:pl-0">
                  {item.period}
                </span>
              </div>

              {/* Description */}
              <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed pl-10 sm:pl-0">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

