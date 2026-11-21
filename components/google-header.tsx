"use client";

import React, { useState } from "react";
import { Search, Mic, Camera, Sun, Moon, Share2, Globe, Check } from "lucide-react";
import { GoogleGLogo } from "./icons";
import { useTheme } from "./theme-context";

interface GoogleHeaderProps {
  onShare: () => void;
}

export function GoogleHeader({ onShare }: GoogleHeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const [copiedDomain, setCopiedDomain] = useState(false);

  const handleCopyDomain = () => {
    navigator.clipboard.writeText("https://sheikhmohammadhamzakhalifa.online");
    setCopiedDomain(true);
    setTimeout(() => setCopiedDomain(false), 2000);
  };

  return (
    <header className="sticky top-0 z-30 w-full border-b backdrop-blur-md transition-colors duration-200"
      style={{
        backgroundColor: theme === "dark" ? "rgba(23, 23, 23, 0.92)" : "rgba(255, 255, 255, 0.92)",
        borderColor: "var(--card-border)"
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-3 pb-2">
        {/* Top bar with Google Search styling */}
        <div className="flex items-center justify-between gap-3">
          {/* Logo & Search Bar */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="flex items-center gap-1.5 shrink-0">
              <GoogleGLogo className="w-6 h-6" />
              <span className="hidden sm:inline font-medium text-sm tracking-tight text-neutral-400">
                Search
              </span>
            </div>

            {/* Mock Search Input */}
            <div
              className="flex items-center gap-2 flex-1 max-w-xl px-3.5 py-2 rounded-full text-sm shadow-sm transition-all border"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--card-border)"
              }}
            >
              <Search className="w-4 h-4 text-neutral-400 shrink-0" />
              <span className="truncate font-normal select-none" style={{ color: "var(--foreground)" }}>
                Sheikh Mohammad Hamza Khalifa
              </span>
              <div className="ml-auto flex items-center gap-2 shrink-0">
                <Mic className="w-4 h-4 text-[#4285F4] hidden sm:block" />
                <Camera className="w-4 h-4 text-[#EA4335] hidden sm:block" />
              </div>
            </div>
          </div>

          {/* Right actions: Theme toggle, Share, Domain badge */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Domain verification badge */}
            <button
              onClick={handleCopyDomain}
              title="Official Verified Domain - Click to Copy"
              className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium border transition-colors hover:border-[#8ab4f8]"
              style={{
                backgroundColor: "var(--card-subtle)",
                borderColor: "var(--card-border)",
                color: "var(--text-dim)"
              }}
            >
              <Globe className="w-3.5 h-3.5 text-[#8ab4f8]" />
              <span className="max-w-[170px] truncate">sheikhmohammadhamzakhalifa.online</span>
              {copiedDomain ? <Check className="w-3 h-3 text-emerald-400" /> : null}
            </button>

            {/* Share Button */}
            <button
              onClick={onShare}
              title="Share Profile"
              className="p-2 rounded-full border transition-all hover:scale-105 active:scale-95"
              style={{
                backgroundColor: "var(--card-subtle)",
                borderColor: "var(--card-border)",
                color: "var(--foreground)"
              }}
            >
              <Share2 className="w-4 h-4" />
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
              className="p-2 rounded-full border transition-all hover:scale-105 active:scale-95"
              style={{
                backgroundColor: "var(--card-subtle)",
                borderColor: "var(--card-border)",
                color: "var(--foreground)"
              }}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-neutral-700" />
              )}
            </button>
          </div>
        </div>

        {/* Google Knowledge Panel Category Tabs */}
        <div className="flex items-center gap-5 pt-3 overflow-x-auto no-scrollbar text-xs sm:text-sm font-medium">
          <button className="pb-2 border-b-2 font-semibold text-[#8ab4f8] border-[#8ab4f8] whitespace-nowrap">
            All
          </button>
          <a href="#photos" className="pb-2 border-b-2 border-transparent hover:text-[#8ab4f8] transition-colors whitespace-nowrap" style={{ color: "var(--text-muted)" }}>
            Photos
          </a>
          <a href="#overview" className="pb-2 border-b-2 border-transparent hover:text-[#8ab4f8] transition-colors whitespace-nowrap" style={{ color: "var(--text-muted)" }}>
            Overview
          </a>
          <a href="#work" className="pb-2 border-b-2 border-transparent hover:text-[#8ab4f8] transition-colors whitespace-nowrap" style={{ color: "var(--text-muted)" }}>
            Work & Roles
          </a>
          <a href="#education" className="pb-2 border-b-2 border-transparent hover:text-[#8ab4f8] transition-colors whitespace-nowrap" style={{ color: "var(--text-muted)" }}>
            Education
          </a>
          <a href="#contact" className="pb-2 border-b-2 border-transparent hover:text-[#8ab4f8] transition-colors whitespace-nowrap" style={{ color: "var(--text-muted)" }}>
            Contact & Social
          </a>
        </div>
      </div>
    </header>
  );
}

