"use client";

import React from "react";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { AgaKhanLogo, LseLogo } from "./icons";
import { PROFILE_DATA } from "@/data/profile";

export function EducationCard() {
  return (
    <section id="education" className="my-4">
      <div
        className="google-card p-4 sm:p-5 rounded-2xl"
        style={{ backgroundColor: "var(--card-bg)" }}
      >
        <div className="flex items-center justify-between mb-4 pb-2 border-b" style={{ borderColor: "var(--card-border)" }}>
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-[#8ab4f8]" />
            <h2 className="text-base sm:text-lg font-medium tracking-tight" style={{ color: "var(--foreground)" }}>
              Education
            </h2>
          </div>
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            Academic Credentials
          </span>
        </div>

        {/* Education List */}
        <div className="space-y-4">
          {/* Aga Khan University */}
          <div className="flex items-start gap-3.5 group">
            <div className="shrink-0 mt-0.5">
              <AgaKhanLogo className="w-11 h-11" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm sm:text-base font-semibold group-hover:text-[#8ab4f8] transition-colors" style={{ color: "var(--foreground)" }}>
                Aga Khan University
              </h3>
              <p className="text-xs sm:text-sm mt-0.5" style={{ color: "var(--text-dim)" }}>
                Higher Education & Academic Studies
              </p>
              <div className="flex items-center gap-2 mt-1 text-xs" style={{ color: "var(--text-muted)" }}>
                <span>Karachi, Pakistan</span>
                <span>•</span>
                <span className="text-emerald-400">Chartered Institution</span>
              </div>
            </div>
          </div>

          <div className="border-t my-2" style={{ borderColor: "var(--card-border)" }} />

          {/* London School of Economics - LSE */}
          <div className="flex items-start gap-3.5 group">
            <div className="shrink-0 mt-0.5">
              <LseLogo className="w-11 h-11" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm sm:text-base font-semibold group-hover:text-[#8ab4f8] transition-colors" style={{ color: "var(--foreground)" }}>
                The London School of Economics and Political Science - LSE
              </h3>
              <p className="text-xs sm:text-sm mt-0.5" style={{ color: "var(--text-dim)" }}>
                Economics and Political Science
              </p>
              <div className="flex items-center gap-2 mt-1 text-xs" style={{ color: "var(--text-muted)" }}>
                <span>London, United Kingdom</span>
                <span>•</span>
                <span className="text-red-400">Global Premier Institute</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

