// components/ShareButton.tsx
"use client";

import { LinkIcon } from "lucide-react";

export function CopyLinkButton({ url }: { url: string }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    alert("Link copied to clipboard!");
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-900 hover:bg-[#FACC15] hover:text-black transition-all"
      aria-label="Copy link"
    >
      <LinkIcon className="h-5 w-5" />
    </button>
  );
}
