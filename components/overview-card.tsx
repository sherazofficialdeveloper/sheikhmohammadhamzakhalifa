"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, BookOpen, ExternalLink } from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";

export function OverviewCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="overview" className="my-4">
      <div
        className="google-card p-4 sm:p-5 rounded-2xl transition-all"
        style={{ backgroundColor: "var(--card-bg)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-2.5">
          <h2 className="text-lg sm:text-xl font-medium tracking-tight" style={{ color: "var(--foreground)" }}>
            Overview
          </h2>
          <span className="inline-flex items-center gap-1 text-xs text-[#8ab4f8]">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Biography</span>
          </span>
        </div>

        {/* Bio text */}
        <div className="relative">
          <p
            className={`text-sm sm:text-[15px] leading-relaxed transition-all duration-300 ${
              !isExpanded ? "line-clamp-3 sm:line-clamp-4" : ""
            }`}
            style={{ color: "var(--text-dim)" }}
          >
            {PROFILE_DATA.overview}
          </p>

          {/* Read more / less toggle */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2.5 inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-[#8ab4f8] hover:underline"
          >
            {isExpanded ? (
              <>
                Show less <ChevronUp className="w-3.5 h-3.5" />
              </>
            ) : (
              <>
                Read full overview <ChevronDown className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </div>

        {/* Source citation bar like Google Search (Wikipedia style reference) */}
        <div className="mt-3.5 pt-3 border-t flex items-center justify-between text-xs" style={{ borderColor: "var(--card-border)" }}>
          <span style={{ color: "var(--text-muted)" }}>
            Data source: Official Knowledge Panel & Public Records
          </span>
          <a
            href="https://sheikhmohammadhamzakhalifa.online"
            className="inline-flex items-center gap-1 text-[#8ab4f8] hover:underline"
          >
            sheikhmohammadhamzakhalifa.online
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}

