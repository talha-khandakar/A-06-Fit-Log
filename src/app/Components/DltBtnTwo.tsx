"use client";

import { CardsContext } from "@/context/CardContext";
import { iLibraryType } from "@/type";
import { X } from "lucide-react";
import { useContext } from "react";
import { toast } from "react-toastify";

interface TDltTwo {
  cardItem: iLibraryType;
}
export default function DltBtnTwo({ cardItem }: TDltTwo) {
  const { addToSaved, setAddToSaved } = useContext(CardsContext);

  const handleDelete = () => {
    const remaining = addToSaved.filter((d) => d.id !== cardItem.id);
    setAddToSaved(remaining);
    toast.success(`Deleted Successfully`);
  };

  return (
    <div>
      <button
        onClick={handleDelete}
        className="text-gray-400 hover:text-white p-1"
      >
        <X size={16} />
      </button>
    </div>
  );
}
