"use client";

import React, { useState } from "react";
import { Mail, ArrowUpRight, Copy, Check, MessageSquare } from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";

// Subtle, recognizable social icons
function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.53 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8.6.26 1.07.42 1.44.54.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29z" />
    </svg>
  );
}

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const socialLinks = [
    {
      name: "WhatsApp",
      subtitle: "Direct Message",
      href: PROFILE_DATA.socials.whatsapp,
      icon: WhatsAppIcon,
    },
    {
      name: "Instagram",
      subtitle: "Official Profile",
      href: PROFILE_DATA.socials.instagram,
      icon: InstagramIcon,
    },
    {
      name: "Facebook",
      subtitle: "Official Page",
      href: PROFILE_DATA.socials.facebook,
      icon: FacebookIcon,
    },
  ];

  return (
    <section id="contact" className="py-10 sm:py-14">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] block mb-2">
          Connect
        </span>
        <h2 className="text-2xl sm:text-3xl font-normal text-[var(--text-primary)] mb-6 tracking-tight">
          Social & Contact Links
        </h2>

        {/* Social channels grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] shadow-xs hover:border-[var(--text-muted)] hover:shadow-md transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[var(--card-subtle)] text-[var(--text-primary)] group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[var(--text-primary)]">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)]">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors" />
              </a>
            );
          })}
        </div>

        {/* Executive Inquiries / Email Bar */}
        <div className="mt-4 p-5 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[var(--card-subtle)] text-[var(--text-primary)] shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-medium text-[var(--text-muted)] block">
                Executive & Official Inquiries
              </span>
              <span className="text-sm sm:text-base font-medium text-[var(--text-primary)]">
                {PROFILE_DATA.socials.email}
              </span>
            </div>
          </div>

          <button
            onClick={copyEmail}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium border border-[var(--card-border)] bg-[var(--card-subtle)] text-[var(--text-primary)] hover:border-[var(--text-muted)] transition-colors"
          >
            {copiedEmail ? (
              <>
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Copied to Clipboard</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[var(--text-muted)]" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

