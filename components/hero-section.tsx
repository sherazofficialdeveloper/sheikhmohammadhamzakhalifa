"use client";

import React, { useState } from "react";
import { Download, Check, MessageSquare, ArrowDown, MapPin, Building2 } from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";

export function HeroSection() {
  const [downloadedVCard, setDownloadedVCard] = useState(false);

  const downloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${PROFILE_DATA.name}
N:Khalifa;Mohammad;Hamza;Sheikh;
TITLE:${PROFILE_DATA.primaryRoleTitle} - ${PROFILE_DATA.primaryRole}
ORG:${PROFILE_DATA.primaryRole}
NOTE:${PROFILE_DATA.secondaryRole} (${PROFILE_DATA.secondaryRoleDetail})
ADR;TYPE=WORK:;;Karachi;Sindh;;Pakistan
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

    setDownloadedVCard(true);
    setTimeout(() => setDownloadedVCard(false), 2500);
  };

  return (
    <section id="home" className="pt-8 sm:pt-14 pb-8 border-b border-[var(--card-border)]">
      <div className="max-w-4xl mx-auto">
        {/* Subtle executive location/identity eyebrow */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[var(--text-muted)] tracking-wide uppercase mb-3">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[var(--text-muted)]" />
            Karachi, Pakistan
          </span>
          <span>•</span>
          <span>Executive Leadership</span>
        </div>

        {/* Main Heading: Person's Name is Most Prominent */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[var(--text-primary)] leading-[1.1]">
          {PROFILE_DATA.name}
        </h1>

        {/* Native Name subtle presentation */}
        {PROFILE_DATA.nativeName && (
          <p className="mt-1.5 text-base sm:text-lg text-[var(--text-muted)] font-normal tracking-normal">
            {PROFILE_DATA.nativeName}
          </p>
        )}

        {/* Professional Designations with elegant typographic separation */}
        <div className="mt-6 pt-6 border-t border-[var(--card-border-subtle)] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Primary Designation: Hamza Motors - HQ | Owner & CEO */}
          <div className="p-4 sm:p-5 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] shadow-xs">
            <span className="text-[11px] uppercase tracking-wider font-semibold text-[var(--text-muted)] block mb-1">
              Commercial Enterprise
            </span>
            <h2 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)]">
              {PROFILE_DATA.primaryRole}
            </h2>
            <p className="text-sm font-medium text-[var(--text-secondary)] mt-0.5">
              {PROFILE_DATA.primaryRoleTitle}
            </p>
          </div>

          {/* Secondary Designation: Former Member of National Assembly | PMLN - MNA from NA/316 */}
          <div className="p-4 sm:p-5 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] shadow-xs">
            <span className="text-[11px] uppercase tracking-wider font-semibold text-[var(--text-muted)] block mb-1">
              Public Service & Governance
            </span>
            <h2 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)]">
              {PROFILE_DATA.secondaryRole}
            </h2>
            <p className="text-sm font-medium text-[var(--text-secondary)] mt-0.5">
              {PROFILE_DATA.secondaryRoleDetail}
            </p>
          </div>
        </div>

        {/* Short, Professionally Written Introduction */}
        <p className="mt-6 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl">
          Sheikh Mohammad Hamza Khalifa is an entrepreneur, automotive enterprise leader, and former parliamentarian with a distinguished background in commercial executive leadership and public governance.
        </p>

        {/* Executive Action CTAs */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-[var(--accent-primary)] text-[var(--accent-contrast)] hover:opacity-90 transition-opacity"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Contact Office</span>
          </a>

          <button
            onClick={downloadVCard}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--text-primary)] hover:border-[var(--text-muted)] hover:bg-[var(--card-subtle)] transition-all"
          >
            {downloadedVCard ? (
              <>
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Contact Card Saved</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4 text-[var(--text-muted)]" />
                <span>Download vCard</span>
              </>
            )}
          </button>

          <a
            href="#about"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            <span>Read Biography</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

