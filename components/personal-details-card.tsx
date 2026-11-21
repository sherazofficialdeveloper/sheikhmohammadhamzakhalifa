"use client";

import React from "react";
import { MapPin, Home, Calendar, Heart, Lock, Globe, MessageSquare } from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";

export function PersonalDetailsCard() {
  return (
    <section className="my-4">
      <div
        className="google-card p-4 sm:p-5 rounded-2xl"
        style={{ backgroundColor: "var(--card-bg)" }}
      >
        <div className="flex items-center justify-between mb-4 pb-2 border-b" style={{ borderColor: "var(--card-border)" }}>
          <h2 className="text-base sm:text-lg font-medium tracking-tight" style={{ color: "var(--foreground)" }}>
            Personal details
          </h2>
          <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: "var(--card-subtle)", color: "var(--text-muted)" }}>
            Verified
          </span>
        </div>

        {/* List items with icons matching user reference screenshot */}
        <div className="space-y-4">
          {/* Location */}
          <div className="flex items-start gap-3.5">
            <div className="p-2 rounded-xl shrink-0 mt-0.5" style={{ backgroundColor: "var(--card-subtle)" }}>
              <MapPin className="w-4 h-4 text-[#8ab4f8]" />
            </div>
            <div className="min-w-0">
              <span className="text-xs font-normal" style={{ color: "var(--text-muted)" }}>
                Current Location
              </span>
              <p className="text-sm sm:text-base font-medium" style={{ color: "var(--foreground)" }}>
                {PROFILE_DATA.location}
              </p>
            </div>
          </div>

          {/* Hometown / Origin */}
          <div className="flex items-start gap-3.5">
            <div className="p-2 rounded-xl shrink-0 mt-0.5" style={{ backgroundColor: "var(--card-subtle)" }}>
              <Home className="w-4 h-4 text-amber-400" />
            </div>
            <div className="min-w-0">
              <span className="text-xs font-normal" style={{ color: "var(--text-muted)" }}>
                Hometown / Origin
              </span>
              <p className="text-sm sm:text-base font-medium" style={{ color: "var(--foreground)" }}>
                {PROFILE_DATA.hometown}
              </p>
            </div>
          </div>

          {/* Date of Birth / Birthday */}
          <div className="flex items-start gap-3.5">
            <div className="p-2 rounded-xl shrink-0 mt-0.5" style={{ backgroundColor: "var(--card-subtle)" }}>
              <Calendar className="w-4 h-4 text-rose-400" />
            </div>
            <div className="min-w-0">
              <span className="text-xs font-normal" style={{ color: "var(--text-muted)" }}>
                Birthday
              </span>
              <p className="text-sm sm:text-base font-medium" style={{ color: "var(--foreground)" }}>
                {PROFILE_DATA.birthDate}
              </p>
            </div>
          </div>

          {/* Relationship Status */}
          <div className="flex items-start gap-3.5">
            <div className="p-2 rounded-xl shrink-0 mt-0.5" style={{ backgroundColor: "var(--card-subtle)" }}>
              <Heart className="w-4 h-4 text-pink-400" />
            </div>
            <div className="min-w-0">
              <span className="text-xs font-normal" style={{ color: "var(--text-muted)" }}>
                Relationship Status
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <p className="text-sm sm:text-base font-medium" style={{ color: "var(--foreground)" }}>
                  {PROFILE_DATA.relationshipStatus}
                </p>
                <Lock className="w-3 h-3 text-neutral-400" />
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="flex items-start gap-3.5">
            <div className="p-2 rounded-xl shrink-0 mt-0.5" style={{ backgroundColor: "var(--card-subtle)" }}>
              <MessageSquare className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-xs font-normal" style={{ color: "var(--text-muted)" }}>
                Languages Spoken
              </span>
              <div className="flex flex-wrap items-center gap-1.5 mt-1">
                {PROFILE_DATA.languages.map((lang, idx) => (
                  <span
                    key={lang}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border"
                    style={{
                      backgroundColor: "var(--card-subtle)",
                      borderColor: "var(--card-border)",
                      color: "var(--text-dim)"
                    }}
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

