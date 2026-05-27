"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);
  const whatsappNumber = "8613723810568";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="bg-white shadow-lg rounded-lg px-4 py-3 text-sm max-w-[200px] relative animate-bounce">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-brand-muted rounded-full flex items-center justify-center hover:bg-brand-muted-dark transition-colors"
          >
            <X size={12} className="text-white" />
          </button>
          <p className="text-brand-dark font-medium text-xs">Need help?</p>
          <p className="text-brand-muted-dark text-xs">Chat with us on WhatsApp</p>
        </div>
      )}

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => !showTooltip && setShowTooltip(true)}
      >
        <MessageCircle size={28} className="text-white" />
      </a>
    </div>
  );
}
