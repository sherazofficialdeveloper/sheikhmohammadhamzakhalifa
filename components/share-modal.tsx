"use client";

import React, { useState } from "react";
import { X, Copy, Check, Share2, MessageCircle, Send } from "lucide-react";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ShareModal({ isOpen, onClose }: ShareModalProps) {
  const [copied, setCopied] = useState(false);
  const shareUrl = "https://sheikhmohammadhamzakhalifa.online";
  const title = "Sheikh Mohammad Hamza Khalifa | Official Profile";

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: "Official Profile of Sheikh Mohammad Hamza Khalifa — Owner & CEO, Hamza Motors - HQ | Former MNA NA/316",
          url: shareUrl,
        });
      } catch (err) {
        // User cancelled or not supported
      }
    } else {
      handleCopy();
    }
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(`Check out the official profile of Sheikh Mohammad Hamza Khalifa: ${shareUrl}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  };

  const handleFacebookShare = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, "_blank");
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl border p-5 shadow-2xl"
        style={{
          backgroundColor: "var(--card-bg)",
          borderColor: "var(--card-border)"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b" style={{ borderColor: "var(--card-border)" }}>
          <div className="flex items-center gap-2">
            <Share2 className="w-5 h-5 text-[#8ab4f8]" />
            <h2 className="text-lg font-semibold" style={{ color: "var(--foreground)" }}>
              Share Profile
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-neutral-800 transition-colors"
            style={{ color: "var(--text-muted)" }}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Share buttons */}
        <div className="grid grid-cols-2 gap-3 my-4">
          <button
            onClick={handleWhatsAppShare}
            className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-emerald-400 font-medium text-sm transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </button>

          <button
            onClick={handleFacebookShare}
            className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#1877F2]/15 hover:bg-[#1877F2]/25 border border-[#1877F2]/30 text-blue-400 font-medium text-sm transition-all"
          >
            <Share2 className="w-4 h-4" />
            <span>Facebook</span>
          </button>
        </div>

        {/* Copy link input bar */}
        <div className="mt-3">
          <label className="text-xs font-medium mb-1.5 block" style={{ color: "var(--text-muted)" }}>
            Profile Link
          </label>
          <div
            className="flex items-center gap-2 p-2 rounded-xl border text-xs"
            style={{
              backgroundColor: "var(--card-subtle)",
              borderColor: "var(--card-border)"
            }}
          >
            <span className="truncate flex-1 font-mono" style={{ color: "var(--foreground)" }}>
              {shareUrl}
            </span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#8ab4f8] text-neutral-950 transition-all hover:bg-[#aecbfa] active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Link</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Device native share */}
        <div className="mt-4 pt-3 border-t text-center" style={{ borderColor: "var(--card-border)" }}>
          <button
            onClick={handleNativeShare}
            className="w-full py-2.5 rounded-xl border text-xs font-medium transition-colors hover:border-[#8ab4f8]"
            style={{
              backgroundColor: "var(--card-subtle)",
              borderColor: "var(--card-border)",
              color: "var(--text-dim)"
            }}
          >
            Open System Share Menu
          </button>
        </div>
      </div>
    </div>
  );
}

