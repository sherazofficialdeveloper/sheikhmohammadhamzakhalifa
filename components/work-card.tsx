"use client";

import React from "react";
import { Briefcase, Building2, CheckCircle2 } from "lucide-react";
import { HamzaMotorsLogo, ParliamentLogo } from "./icons";
import { PROFILE_DATA } from "@/data/profile";

export function WorkCard() {
  return (
    <section id="work" className="my-4">
      <div
        className="google-card p-4 sm:p-5 rounded-2xl"
        style={{ backgroundColor: "var(--card-bg)" }}
      >
        <div className="flex items-center justify-between mb-4 pb-2 border-b" style={{ borderColor: "var(--card-border)" }}>
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-[#8ab4f8]" />
            <h2 className="text-base sm:text-lg font-medium tracking-tight" style={{ color: "var(--foreground)" }}>
              Work & Roles
            </h2>
          </div>
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            Career & Public Service
          </span>
        </div>

        {/* Roles List */}
        <div className="space-y-5">
          {/* Item 1: Hamza Motors - HQ */}
          <div className="flex items-start gap-3.5 group">
            <div className="shrink-0 mt-0.5">
              <HamzaMotorsLogo className="w-11 h-11" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-sm sm:text-base font-semibold" style={{ color: "var(--foreground)" }}>
                  Hamza Motors - HQ
                </h3>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 font-medium border border-red-500/20">
                  Automotive
                </span>
              </div>

              <p className="text-xs sm:text-sm font-semibold tracking-wide uppercase mt-0.5 text-[#8ab4f8]">
                OWNER & CEO
              </p>

              <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                Jun 3, 2017 – Present · 9 years, 5 months
              </p>

              <p className="text-xs sm:text-sm mt-1.5 leading-relaxed" style={{ color: "var(--text-dim)" }}>
                Directing strategic vision, luxury automobile acquisitions, dealership operations, and corporate ventures at Hamza Motors Headquarters.
              </p>
            </div>
          </div>

          <div className="border-t my-2" style={{ borderColor: "var(--card-border)" }} />

          {/* Item 2: Former Member of National Assembly PMLN - MNA from NA/316 */}
          <div className="flex items-start gap-3.5 group">
            <div className="shrink-0 mt-0.5">
              <ParliamentLogo className="w-11 h-11" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-sm sm:text-base font-semibold" style={{ color: "var(--foreground)" }}>
                  Former Member of National Assembly PMLN - MNA from NA/316
                </h3>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-medium border border-emerald-500/20">
                  Government
                </span>
              </div>

              <p className="text-xs sm:text-sm font-semibold tracking-wide uppercase mt-0.5 text-emerald-400">
                PMLN - MNA
              </p>

              <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                Jul 4, 2023 – Present · 3 years, 4 months
              </p>

              <p className="text-xs sm:text-sm mt-1.5 leading-relaxed" style={{ color: "var(--text-dim)" }}>
                Represented constituency NA-316 in the National Assembly of Pakistan, participating in parliamentary sessions, civic development programs, and policy advocacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

