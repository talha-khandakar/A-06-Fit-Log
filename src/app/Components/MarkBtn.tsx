"use client";

import { Check } from "lucide-react";
import { toast } from "react-toastify";

export default function MarkBtn() {
  const handleAddToast = () => {
    toast.success("Marked as done!");
  };
  return (
    <div>
      <button
        onClick={handleAddToast}
        className="flex items-center gap-1 bg-lime-400 text-black text-xs sm:text-sm font-medium rounded-full px-3 py-1.5 sm:px-4 sm:py-2"
      >
        <Check size={14} />
        <span className="hidden sm:inline">Mark as Done</span>
      </button>
    </div>
  );
}
