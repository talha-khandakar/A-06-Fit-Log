"use client";

import { CardsContext } from "@/context/CardContext";
import { iLibraryType } from "@/type";
import { useContext } from "react";
import { toast } from "react-toastify";

interface iSaveBtnT {
  library: iLibraryType;
}

export default function SaveBtn({ library }: iSaveBtnT) {
  const { addToSaved, setAddToSaved } = useContext(CardsContext);

  const handleAddSaved = () => {
    const alreadySaved = addToSaved.find((item) => item.id === library.id);

    if (alreadySaved) {
      toast.info("Already saved");
    } else {
      setAddToSaved([...addToSaved, library]);
      toast.success("Saved For Later");
    }
  };

  return (
    <div>
      <button
        onClick={handleAddSaved}
        className="border border-zinc-700 text-white text-sm px-4 py-2 rounded-lg transition hover:bg-zinc-800 hover:border-zinc-600 active:scale-95"
      >
        🔖 Save for later
      </button>
    </div>
  );
}
