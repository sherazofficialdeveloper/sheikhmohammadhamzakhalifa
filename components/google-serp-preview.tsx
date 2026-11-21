"use client";

import React, { useState } from "react";
import { Search, Globe, Sparkles, ExternalLink, ShieldCheck } from "lucide-react";
import { GoogleGLogo } from "./icons";

export function GoogleSerpPreview() {
  const [activeTab, setActiveTab] = useState<"desktop" | "mobile">("mobile");

  return (
    <section className="my-6">
      <div
        className="google-card p-4 sm:p-5 rounded-2xl border"
        style={{ backgroundColor: "var(--card-bg)" }}
      >
        <div className="flex items-center justify-between mb-3 pb-2 border-b" style={{ borderColor: "var(--card-border)" }}>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#FBBC05]" />
            <h2 className="text-base sm:text-lg font-medium tracking-tight" style={{ color: "var(--foreground)" }}>
              Google Search & SEO Indexing Simulation
            </h2>
          </div>

          <div className="flex items-center gap-1 text-xs p-0.5 rounded-lg border" style={{ backgroundColor: "var(--card-subtle)", borderColor: "var(--card-border)" }}>
            <button
              onClick={() => setActiveTab("mobile")}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                activeTab === "mobile" ? "bg-[#8ab4f8] text-neutral-950 font-semibold" : "text-neutral-400 hover:text-white"
              }`}
            >
              Mobile SERP
            </button>
            <button
              onClick={() => setActiveTab("desktop")}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                activeTab === "desktop" ? "bg-[#8ab4f8] text-neutral-950 font-semibold" : "text-neutral-400 hover:text-white"
              }`}
            >
              Desktop SERP
            </button>
          </div>
        </div>

        <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
          Optimized with JSON-LD Schema (Person & KnowledgeGraph), canonical tags, and OpenGraph metadata to appear at the top of Google Search:
        </p>

        {/* Mock Google Search Result Card */}
        <div
          className="p-4 rounded-xl border max-w-2xl transition-all"
          style={{
            backgroundColor: "var(--card-subtle)",
            borderColor: "var(--card-border)"
          }}
        >
          {/* URL & Breadcrumb */}
          <div className="flex items-center gap-2 text-xs mb-1">
            <div className="w-4 h-4 rounded-full flex items-center justify-center bg-white shadow-xs">
              <GoogleGLogo className="w-3 h-3" />
            </div>
            <div className="flex items-center gap-1">
              <span className="font-normal" style={{ color: "var(--foreground)" }}>
                sheikhmohammadhamzakhalifa.online
              </span>
              <span style={{ color: "var(--text-muted)" }}>› official</span>
            </div>
          </div>

          {/* SERP Title */}
          <h3 className="text-base sm:text-lg font-normal text-[#8ab4f8] hover:underline cursor-pointer leading-snug">
            Sheikh Mohammad Hamza Khalifa — Owner & CEO | Former MNA NA-316
          </h3>

          {/* Description snippet */}
          <p className="text-xs sm:text-sm mt-1.5 leading-relaxed" style={{ color: "var(--text-dim)" }}>
            Official profile of <strong className="text-white">Sheikh Mohammad Hamza Khalifa</strong>, Owner & CEO of <strong className="text-white">Hamza Motors - HQ</strong> (since 2017) and Former Member of National Assembly (<strong className="text-white">PMLN - MNA NA/316</strong>). Higher education at Aga Khan University & LSE.
          </p>

          {/* Mini Sitelinks */}
          <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t text-xs" style={{ borderColor: "var(--card-border)" }}>
            <div className="p-1.5 rounded hover:bg-white/5 cursor-pointer">
              <span className="text-[#8ab4f8] font-medium">Hamza Motors - HQ</span>
              <p className="text-[11px] truncate" style={{ color: "var(--text-muted)" }}>Executive Leadership & Fleet</p>
            </div>
            <div className="p-1.5 rounded hover:bg-white/5 cursor-pointer">
              <span className="text-[#8ab4f8] font-medium">Parliamentary Record</span>
              <p className="text-[11px] truncate" style={{ color: "var(--text-muted)" }}>PMLN - MNA from NA/316</p>
            </div>
            <div className="p-1.5 rounded hover:bg-white/5 cursor-pointer">
              <span className="text-[#8ab4f8] font-medium">Aga Khan & LSE Alumni</span>
              <p className="text-[11px] truncate" style={{ color: "var(--text-muted)" }}>Academic Background</p>
            </div>
            <div className="p-1.5 rounded hover:bg-white/5 cursor-pointer">
              <span className="text-[#8ab4f8] font-medium">Official Contact & Social</span>
              <p className="text-[11px] truncate" style={{ color: "var(--text-muted)" }}>WhatsApp, Instagram, FB</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

