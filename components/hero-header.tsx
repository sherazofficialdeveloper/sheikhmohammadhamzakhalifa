"use client";

import React, { useState } from "react";
import { Share2, Check, Download, ExternalLink, ShieldCheck } from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";
import { VerifiedBadge } from "./icons";

interface HeroHeaderProps {
  onShare: () => void;
}

export function HeroHeader({ onShare }: HeroHeaderProps) {
  const [savedVCard, setSavedVCard] = useState(false);

  // Generate downloadable vCard (.vcf)
  const downloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${PROFILE_DATA.name}
N:Khalifa;Mohammad;Hamza;Sheikh;
TITLE:${PROFILE_DATA.primaryRoleTitle} - ${PROFILE_DATA.primaryRole}
ORG:${PROFILE_DATA.primaryRole}
NOTE:${PROFILE_DATA.secondaryRole} (${PROFILE_DATA.secondaryRoleDetail})
ADR;TYPE=HOME,PARCEL:;;${PROFILE_DATA.location}
BDAY:--0529
URL:https://sheikhmohammadhamzakhalifa.online
END:VCARD`;

    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Sheikh_Mohammad_Hamza_Khalifa.vcf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setSavedVCard(true);
    setTimeout(() => setSavedVCard(false), 2500);
  };

  return (
    <section className="w-full pt-6 pb-4">
      <div className="flex flex-col gap-2">
        {/* Knowledge Panel Breadcrumb / Category */}
        <div className="flex items-center gap-2 text-xs font-medium tracking-wide uppercase" style={{ color: "var(--text-muted)" }}>
          <span className="flex items-center gap-1 text-[#8ab4f8]">
            <ShieldCheck className="w-3.5 h-3.5" />
            Verified Profile
          </span>
          <span>•</span>
          <span>Knowledge Graph</span>
          <span>•</span>
          <span>Public Figure</span>
        </div>

        {/* 1. Main Title / Name */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight" style={{ color: "var(--foreground)" }}>
                {PROFILE_DATA.name}
              </h1>
              <div title="Verified Public Profile" className="flex items-center">
                <VerifiedBadge className="w-6 h-6 text-[#8ab4f8]" />
              </div>
            </div>

            {/* Native Arabic/Urdu name subtle badge */}
            <p className="text-xs sm:text-sm font-arabic mt-1 font-medium opacity-75" style={{ color: "var(--text-muted)" }}>
              {PROFILE_DATA.nativeName}
            </p>
          </div>

          {/* Quick Action Share Pill */}
          <button
            onClick={onShare}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors shrink-0"
            style={{
              backgroundColor: "var(--card-subtle)",
              borderColor: "var(--card-border)",
              color: "var(--foreground)"
            }}
          >
            <Share2 className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Share</span>
          </button>
        </div>

        {/* 2. Primary Work / Role right at the top */}
        <div className="mt-1 flex items-center gap-2 flex-wrap">
          <span className="text-base sm:text-lg font-medium text-[#8ab4f8]">
            {PROFILE_DATA.primaryRole}
          </span>
          <span className="text-sm font-normal px-2 py-0.5 rounded-md"
            style={{
              backgroundColor: "var(--card-subtle)",
              color: "var(--text-dim)"
            }}
          >
            {PROFILE_DATA.primaryRoleTitle}
          </span>
        </div>

        {/* 3. Subtitle / Secondary Role right below it */}
        <div className="flex items-center gap-2 flex-wrap text-sm sm:text-base font-normal" style={{ color: "var(--text-muted)" }}>
          <span>{PROFILE_DATA.secondaryRole}</span>
          <span>•</span>
          <span className="font-medium text-emerald-400/90">{PROFILE_DATA.secondaryRoleDetail}</span>
        </div>

        {/* Quick Action Buttons Bar */}
        <div className="flex items-center gap-2 pt-3 flex-wrap">
          <a
            href="#overview"
            className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors border"
            style={{
              backgroundColor: "var(--card-subtle)",
              borderColor: "var(--card-border)",
              color: "var(--foreground)"
            }}
          >
            Overview
          </a>
          <a
            href="#work"
            className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors border"
            style={{
              backgroundColor: "var(--card-subtle)",
              borderColor: "var(--card-border)",
              color: "var(--foreground)"
            }}
          >
            Experience
          </a>
          <a
            href="#contact"
            className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors border"
            style={{
              backgroundColor: "var(--card-subtle)",
              borderColor: "var(--card-border)",
              color: "var(--foreground)"
            }}
          >
            Contact
          </a>
          <button
            onClick={downloadVCard}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium border ml-auto transition-colors hover:border-[#8ab4f8]"
            style={{
              backgroundColor: "var(--card-subtle)",
              borderColor: "var(--card-border)",
              color: "var(--text-dim)"
            }}
          >
            {savedVCard ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Contact Saved</span>
              </>
            ) : (
              <>
                <Download className="w-3.5 h-3.5" />
                <span>Save Contact (vCard)</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

