// components/FloatingActions.tsx
"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle, X } from "lucide-react";

interface FloatingActionsProps {
  phoneNumber?: string;
  whatsappNumber?: string;
}

export function FloatingActions({
  phoneNumber = "+919999774046",
  whatsappNumber = "+919999774046",
}: FloatingActionsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show after a small delay
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=Hi, I'm interested to know more about digital marketing serivces you provide`,
      "_blank"
    );
  };

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* WhatsApp Button - Always visible on all devices */}
        <div className="relative group">
          <button
            onClick={handleWhatsAppClick}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-bounce-slow"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="h-7 w-7" />
            
            {/* Pulse animation ring */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75" />
          </button>

          {/* Tooltip - Desktop only */}
          {showTooltip && (
            <div className="hidden lg:block absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap">
              <div className="bg-gray-900 text-white text-sm px-4 py-2 rounded-lg shadow-lg">
                Chat on WhatsApp
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-gray-900" />
              </div>
            </div>
          )}
        </div>

        {/* Call Button - Mobile only */}
        <button
          onClick={handleCallClick}
          className="lg:hidden flex items-center justify-center h-14 w-14 rounded-full bg-[#FACC15] text-black shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
          aria-label="Call us"
        >
          <Phone className="h-7 w-7" />
        </button>
      </div>

      {/* Custom CSS for bounce animation */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
