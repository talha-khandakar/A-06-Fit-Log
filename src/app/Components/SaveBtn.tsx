"use client";
import { CardsContext } from "@/context/CardContext";
import { iLibraryType } from "@/type";
import { useContext } from "react";

interface iSaveBtnT {
  library: iLibraryType;
}

export default function SaveBtn({ library }: iSaveBtnT) {
  const { addToSaved, setAddToSaved } = useContext(CardsContext);

  const handleAddSaved = () => {
    setAddToSaved([...addToSaved, library]);
  };
  return (
    <div>
      <button
        onClick={handleAddSaved}
        className="border border-zinc-700 text-white text-sm px-4 py-2 rounded-lg"
      >
        🔖 Save for later
      </button>
    </div>
  );
}
