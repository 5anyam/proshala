// components/FloatingActions.tsx
"use client";

import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import Link from "next/link";

interface FloatingActionsProps {
  phoneNumber?: string;
  whatsappNumber?: string;
}

export function FloatingActions({
  phoneNumber = "9999774046",
  whatsappNumber = "919999774046", // Country code + number, no +
}: FloatingActionsProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after a small delay
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleCallClick = () => {
    const telNumber = phoneNumber.startsWith("+") ? phoneNumber : `+91${phoneNumber}`;
    window.location.href = `tel:${telNumber}`;
  };

  if (!isVisible) return null;

  // Clean WhatsApp number - remove all non-digits
  const cleanWhatsAppNumber = whatsappNumber.replace(/\D/g, "");

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-9 z-50 flex flex-col gap-3">
        {/* WhatsApp Button - Always visible on all devices */}
        <Link
          href={`https://api.whatsapp.com/send?phone=${cleanWhatsAppNumber}&text=${encodeURIComponent("Hi, I'm interested to know more about digital marketing services you provide")}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className="relative z-40 cursor-pointer"
            style={{
              position: "relative",
            }}
          >
            <IconBrandWhatsapp
              style={{
                background: "#25d366",
                color: "white",
                zIndex: 9,
                height: 50,
                width: 50,
                borderRadius: 99,
                padding: "7px",
              }}
            />
            <span className="absolute right-0 top-0 rounded-full animate-ping w-full h-full ring-2 ring-green-300" />
          </div>
        </Link>

        {/* Call Button - Mobile only */}
        <button
          onClick={handleCallClick}
          className="lg:hidden flex items-center justify-center h-[50px] w-[50px] rounded-full bg-[#FACC15] text-black shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
          aria-label="Call us"
          style={{ position: "relative" }}
        >
          <Phone className="h-6 w-6" />
        </button>
      </div>
    </>
  );
}
