"use client";

import React from "react";
import { Calendar, MapPin, Heart, Languages, Lock, Home } from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";

export function QuickFactsCards() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 my-4">
      {/* 1. Born / Birthday Card (styled like Google Search Knowledge Card) */}
      <div
        className="google-card p-3.5 sm:p-4 rounded-2xl flex flex-col justify-between"
        style={{ backgroundColor: "var(--card-bg)" }}
      >
        <span className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
          Born
        </span>
        <div className="mt-2">
          <p className="text-base sm:text-lg font-semibold tracking-tight" style={{ color: "var(--foreground)" }}>
            {PROFILE_DATA.birthDate}
          </p>
          <div className="flex items-center gap-1 text-xs mt-0.5" style={{ color: "var(--text-dim)" }}>
            <Home className="w-3 h-3 text-[#8ab4f8] shrink-0" />
            <span>Origin: {PROFILE_DATA.hometown}</span>
          </div>
        </div>
      </div>

      {/* 2. Residence / Location Card */}
      <div
        className="google-card p-3.5 sm:p-4 rounded-2xl flex flex-col justify-between"
        style={{ backgroundColor: "var(--card-bg)" }}
      >
        <span className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
          Location
        </span>
        <div className="mt-2">
          <p className="text-base sm:text-lg font-semibold tracking-tight" style={{ color: "var(--foreground)" }}>
            Karachi
          </p>
          <div className="flex items-center gap-1 text-xs mt-0.5" style={{ color: "var(--text-dim)" }}>
            <MapPin className="w-3 h-3 text-emerald-400 shrink-0" />
            <span>Pakistan</span>
          </div>
        </div>
      </div>

      {/* 3. Enterprise / Primary Role */}
      <div
        className="google-card p-3.5 sm:p-4 rounded-2xl flex flex-col justify-between col-span-2 sm:col-span-1"
        style={{ backgroundColor: "var(--card-bg)" }}
      >
        <span className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
          Enterprise
        </span>
        <div className="mt-2">
          <p className="text-base sm:text-lg font-semibold tracking-tight text-[#8ab4f8] truncate">
            {PROFILE_DATA.primaryRole}
          </p>
          <p className="text-xs mt-0.5 truncate" style={{ color: "var(--text-dim)" }}>
            {PROFILE_DATA.primaryRoleTitle} (Since 2017)
          </p>
        </div>
      </div>
    </div>
  );
}

