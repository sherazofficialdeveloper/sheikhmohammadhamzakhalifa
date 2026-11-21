import React from "react";

// Hamza Motors HQ Badge Logo
export function HamzaMotorsLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center rounded-full bg-gradient-to-br from-neutral-900 via-black to-neutral-800 shadow-md ring-1 ring-white/10 ${className}`}>
      <svg viewBox="0 0 100 100" className="w-4/5 h-4/5" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Shield outline */}
        <path
          d="M50 10 L82 22 V50 C82 72 50 90 50 90 C50 90 18 72 18 50 V22 L50 10Z"
          fill="#c02424"
          stroke="#e5e5e5"
          strokeWidth="3"
        />
        {/* HM Monogram */}
        <text
          x="50"
          y="58"
          fill="#ffffff"
          fontSize="28"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, sans-serif"
          textAnchor="middle"
          letterSpacing="1"
        >
          HM
        </text>
      </svg>
    </div>
  );
}

// Parliament / National Assembly of Pakistan Badge
export function ParliamentLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center rounded-xl bg-neutral-800 text-emerald-400 shadow-md ring-1 ring-white/10 ${className}`}>
      <svg viewBox="0 0 24 24" className="w-3/5 h-3/5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V10l7-5 7 5v11" />
        <path d="M9 14h6" />
        <path d="M9 18h6" />
        <path d="M12 5V2" />
      </svg>
    </div>
  );
}

// Aga Khan University Crest
export function AgaKhanLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center rounded-full bg-[#00693e] shadow-md ring-1 ring-emerald-300/30 ${className}`}>
      <svg viewBox="0 0 100 100" className="w-4/5 h-4/5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="42" stroke="#ffffff" strokeWidth="2.5" strokeDasharray="3 3" />
        {/* 16-point geometric rosette */}
        <g stroke="#ffffff" strokeWidth="2" fill="none">
          <circle cx="50" cy="50" r="16" fill="#ffffff" />
          <circle cx="50" cy="50" r="28" strokeWidth="1.5" />
          <path d="M50 15 L50 85 M15 50 L85 50 M25 25 L75 75 M25 75 L75 25" stroke="#ffffff" strokeWidth="1.5" />
        </g>
        <circle cx="50" cy="50" r="8" fill="#00693e" />
      </svg>
    </div>
  );
}

// London School of Economics (LSE) Badge
export function LseLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center rounded-lg bg-[#b50014] text-white shadow-md ring-1 ring-red-400/30 ${className}`}>
      <span className="font-extrabold tracking-tight text-xs sm:text-sm font-sans">LSE</span>
    </div>
  );
}

// Google "G" Colorful Logo
export function GoogleGLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.27 21.36 7.35 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.16 0 9.94 0 12s.45 3.84 1.25 5.42l4.03-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.27 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  );
}

// Verified Check Badge
export function VerifiedBadge({ className = "w-5 h-5 text-blue-400" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  );
}

