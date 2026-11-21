"use client";

import React from "react";
import { MapPin, Home, Calendar, User, Languages } from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";

export function PersonalDetailsSection() {
  const details = [
    {
      icon: MapPin,
      label: "Current Location",
      value: PROFILE_DATA.location,
    },
    {
      icon: Home,
      label: "Hometown / Origin",
      value: PROFILE_DATA.hometown,
    },
    {
      icon: Calendar,
      label: "Birthday",
      value: PROFILE_DATA.birthDate,
    },
    {
      icon: User,
      label: "Relationship Status",
      value: PROFILE_DATA.relationshipStatus,
    },
  ];

  return (
    <section className="py-10 sm:py-14 border-b border-[var(--card-border)]">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] block mb-2">
          Information
        </span>
        <h2 className="text-2xl sm:text-3xl font-normal text-[var(--text-primary)] mb-6 tracking-tight">
          Personal Details
        </h2>

        {/* Clean 2-column grid on desktop, 1-column on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {details.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="p-4 sm:p-5 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] shadow-xs flex items-start gap-3.5"
              >
                <div className="p-2 rounded-lg bg-[var(--card-subtle)] text-[var(--text-secondary)] shrink-0 mt-0.5">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-medium text-[var(--text-muted)] block">
                    {item.label}
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-[var(--text-primary)] mt-0.5 block">
                    {item.value}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Languages in full-width or spanning card */}
          <div className="sm:col-span-2 p-4 sm:p-5 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] shadow-xs flex items-start gap-3.5">
            <div className="p-2 rounded-lg bg-[var(--card-subtle)] text-[var(--text-secondary)] shrink-0 mt-0.5">
              <Languages className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <span className="text-xs font-medium text-[var(--text-muted)] block mb-1.5">
                Languages
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {PROFILE_DATA.languages.map((lang) => (
                  <span
                    key={lang}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border border-[var(--card-border)] bg-[var(--card-subtle)] text-[var(--text-primary)]"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

