"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-[var(--card-border)] bg-[var(--card-subtle)] py-8 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <h3 className="text-sm sm:text-base font-semibold text-[var(--text-primary)]">
            Sheikh Mohammad Hamza Khalifa
          </h3>
          <p className="text-xs text-[var(--text-muted)] mt-0.5">
            Official Personal Profile
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
          <span>© 2026 Sheikh Mohammad Hamza Khalifa. All rights reserved.</span>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2 rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-muted)] transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

