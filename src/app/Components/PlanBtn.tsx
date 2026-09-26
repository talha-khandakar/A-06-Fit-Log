"use client";

import { CardsContext } from "@/context/CardContext";
import { iLibraryType } from "@/type";
import { useContext } from "react";

interface iPlanBtnT {
  library: iLibraryType;
}

export default function PlanBtn({ library }: iPlanBtnT) {
  const { addToPlan, setAddToPlan } = useContext(CardsContext);

  const handleAddPlan = () => {
    setAddToPlan([...addToPlan, library]);
  };

  return (
    <div>
      <button
        onClick={handleAddPlan}
        className="bg-lime-400 text-black font-bold text-sm px-4 py-2 rounded-lg"
      >
        + Add to today&apos;s plan
      </button>
    </div>
  );
}
