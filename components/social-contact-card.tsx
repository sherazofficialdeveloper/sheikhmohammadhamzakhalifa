"use client";

import React, { useState } from "react";
import { MessageCircle, Mail, ExternalLink, Check, Copy } from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";

// Modern SVGs for Instagram & Facebook
function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.53 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8.6.26 1.07.42 1.44.54.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29z" />
    </svg>
  );
}

export function SocialContactCard() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    if (PROFILE_DATA.socials.email) {
      navigator.clipboard.writeText(PROFILE_DATA.socials.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  return (
    <section id="contact" className="my-4">
      <div
        className="google-card p-4 sm:p-5 rounded-2xl"
        style={{ backgroundColor: "var(--card-bg)" }}
      >
        <div className="flex items-center justify-between mb-4 pb-2 border-b" style={{ borderColor: "var(--card-border)" }}>
          <div className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4 text-[#8ab4f8]" />
            <h2 className="text-base sm:text-lg font-medium tracking-tight" style={{ color: "var(--foreground)" }}>
              Social & Contact Links
            </h2>
          </div>
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            Official Channels
          </span>
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* WhatsApp Button */}
          <a
            href={PROFILE_DATA.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 rounded-xl border transition-all hover:scale-[1.02] active:scale-[0.98] group"
            style={{
              backgroundColor: "var(--card-subtle)",
              borderColor: "var(--card-border)"
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md">
                <WhatsAppIcon className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                  WhatsApp
                </p>
                <p className="text-xs text-emerald-400">Direct Message</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-emerald-400 transition-colors" />
          </a>

          {/* Instagram Button */}
          <a
            href={PROFILE_DATA.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 rounded-xl border transition-all hover:scale-[1.02] active:scale-[0.98] group"
            style={{
              backgroundColor: "var(--card-subtle)",
              borderColor: "var(--card-border)"
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-md">
                <InstagramIcon className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                  Instagram
                </p>
                <p className="text-xs text-pink-400">Official Profile</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-pink-400 transition-colors" />
          </a>

          {/* Facebook Button */}
          <a
            href={PROFILE_DATA.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 rounded-xl border transition-all hover:scale-[1.02] active:scale-[0.98] group"
            style={{
              backgroundColor: "var(--card-subtle)",
              borderColor: "var(--card-border)"
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow-md">
                <FacebookIcon className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                  Facebook
                </p>
                <p className="text-xs text-blue-400">Official Page</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-blue-400 transition-colors" />
          </a>
        </div>

        {/* Email Inquiries bar */}
        {PROFILE_DATA.socials.email && (
          <div
            className="mt-3.5 p-3 rounded-xl border flex items-center justify-between gap-3 text-xs sm:text-sm"
            style={{
              backgroundColor: "var(--card-subtle)",
              borderColor: "var(--card-border)"
            }}
          >
            <div className="flex items-center gap-2 truncate">
              <Mail className="w-4 h-4 text-[#8ab4f8] shrink-0" />
              <span style={{ color: "var(--text-muted)" }}>Executive Inquiries:</span>
              <span className="font-medium truncate" style={{ color: "var(--foreground)" }}>
                {PROFILE_DATA.socials.email}
              </span>
            </div>

            <button
              onClick={handleCopyEmail}
              className="px-2.5 py-1 rounded-md text-xs font-medium border transition-colors shrink-0 flex items-center gap-1"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--card-border)",
                color: "var(--text-dim)"
              }}
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

